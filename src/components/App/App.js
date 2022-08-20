import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SignUpSuccess from '../SignUpSuccess/SignUpSuccess';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import newsApi from '../../utils/NewsApi';
import mainApi from '../../utils/MainApi';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import { useFormWithValidation } from '../../utils/customHooks';
import { setIsSaved } from '../../utils/auxiliary';

import {
  MOBILESCREENWIDTH,
  NO_IMAGE_AVAILABLE_URL,
} from '../../utils/constants';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [signedIn, setSignedIn] = React.useState(false);
  const [articles, setArticles] = React.useState([]);
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isSignupSuccessPopupOpen, setIsSignupSuccessPopupOpen] =
    React.useState(false);

  const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);
  const [isNothingFound, setIsNothingFound] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMode, setIsMobileMode] = React.useState(false);
  const [isBlankHeader, setIsBlankHeader] = React.useState(false);

  const [formValues, handleChange, formErrors, isFormValid, resetForm] =
    useFormWithValidation();
  const [formSubmitError, setFormSubmitError] = React.useState('');

  const history = useHistory();

  const getWindowWidth = () => {
    const { innerWidth } = window;
    return innerWidth;
  };

  React.useEffect(() => {
    if (localStorage.getItem('articles')) {
      setArticles(JSON.parse(localStorage.getItem('articles')));
    }
  }, []);

  React.useEffect(() => {
    const handleWindowResize = () => {
      const windowWidth = getWindowWidth();
      if (windowWidth <= MOBILESCREENWIDTH) {
        setIsMobileMode(true);
      } else {
        setIsMobileMode(false);
        setIsMenuOpen(false);
      }
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  React.useEffect(() => {
    if ((isSignUpPopupOpen || isSignInPopupOpen) && isMobileMode) {
      setIsBlankHeader(true);
    } else {
      setIsBlankHeader(false);
    }
  }, [isSignInPopupOpen, isSignUpPopupOpen, isMobileMode]);

  const closeAllPopups = () => {
    setIsSignInPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsSignupSuccessPopupOpen(false);
    setIsMenuOpen(false);
    resetForm();
    setFormSubmitError('');
  };

  const openSignUpPopup = () => {
    closeAllPopups();
    setIsSignUpPopupOpen(true);
  };

  const openSignInPopup = () => {
    closeAllPopups();
    setIsSignInPopupOpen(true);
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    localStorage.removeItem('token');
    localStorage.removeItem('articles');
    setArticles({});
    setCurrentUser({});
    setSignedIn(false);
    setSavedArticles({});
    history.push('/');
  };

  const handleSearchArticles = (keyword) => {
    setIsPreloaderActive(true);
    newsApi
      .getArticles(keyword)
      .then((data) => {
        setIsNothingFound(data.articles.length === 0);
        data.articles.forEach((articleElement) => {
          if (!articleElement.urlToImage || articleElement.urlToImage === '') {
            articleElement.urlToImage = NO_IMAGE_AVAILABLE_URL;
          }

          const keywordEdited = keyword[0].toUpperCase() + keyword.slice(1);
          articleElement.keyword = keywordEdited;
          if (signedIn) {
            articleElement.isSaved = setIsSaved(articleElement, savedArticles);
          }
        });
        setArticles(data.articles);
        localStorage.setItem('articles', JSON.stringify(data.articles));
      })
      .catch(() => {
        setIsSearchError(true);
        setArticles([]);
      })
      .finally(() => {
        setIsPreloaderActive(false);
      });
  };

  const getSavedArticles = () => {
    const token = localStorage.getItem('token');
    setSavedArticles({});
    mainApi
      .getArticles(token)
      .then((articles) => {
        localStorage.setItem('savedArticles', JSON.stringify(articles));
        setSavedArticles(articles);
      })
      .catch((err) => {
        console.log(`Error:     ${err}`);
      });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    mainApi
      .authorize({ email: formValues.email, password: formValues.password })
      .then((res) => {
        if (res.message) {
          console.log(`Error during sign up: ${res.message}`);
          throw new Error(res.message);
        } else {
          setIsSignInPopupOpen(false);
          resetForm();
          setSignedIn(true);
        }
      })
      .catch((err) => setFormSubmitError(err.message));
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();

    mainApi
      .register({
        email: formValues.email,
        password: formValues.password,
        name: formValues.username,
      })
      .then((res) => {
        if (res.message) {
          console.log(`Error during sign up: ${res.message}`);
          throw new Error(res.message);
        } else {
          setIsSignUpPopupOpen(false);
          resetForm();
          setIsSignupSuccessPopupOpen(true);
        }
      })
      .catch((err) => setFormSubmitError(err.message));
  };

  const tokenCheck = () => {
    const token = localStorage.getItem('token');

    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          setCurrentUser(res.data);
          setSignedIn(true);
          getSavedArticles();
        })
        .catch((err) => {
          console.log(`Error:     ${err}`);
        });
    }
  };

  React.useEffect(() => {
    tokenCheck();
  }, [signedIn]);

  const handleSaveArticle = (article) => {
    if (!article.isSaved) {
      const token = localStorage.getItem('token');

      mainApi
        .saveArticle({ token, article })
        .then((res) => {
          if (!res.message) {
            res.isSaved = true;
            const updatedArticles = articles.map((element) =>
              element === article ? res : element
            );
            setArticles(updatedArticles);
            localStorage.setItem('articles', JSON.stringify(updatedArticles));
            const updatedSavedArticles = [...savedArticles, res];

            setSavedArticles(updatedSavedArticles);
          }
        })
        .catch((err) => {
          console.log(`Error:     ${err}`);
        });
    }
  };

  const handleDeleteArticle = (article) => {
    const token = localStorage.getItem('token');
    mainApi
      .deleteArticle({ token, articleId: article._id })
      .then((res) => {
        if (res.data) {
          article.isSaved = false;
          const updatedArticles = articles.map((element) =>
            element._id === article._id ? article : element
          );
          setArticles(updatedArticles);
          localStorage.setItem('articles', JSON.stringify(updatedArticles));
          const updatedSavedArticles = savedArticles.filter(
            (element) => element._id !== article._id
          );
          setSavedArticles(updatedSavedArticles);
        }
      })
      .catch((err) => {
        console.log(`Error:     ${err}`);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Main
              articles={articles}
              handleSaveArticle={handleSaveArticle}
              handleDeleteArticle={handleDeleteArticle}
              signedIn={signedIn}
              openSignInPopup={openSignInPopup}
              openSignUpPopup={openSignUpPopup}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              isMobileMode={isMobileMode}
              isBlankHeader={isBlankHeader}
              isPreloaderActive={isPreloaderActive}
              isNothingFound={isNothingFound}
              isSearchError={isSearchError}
              handleLogoutClick={handleLogout}
              handleSearchArticles={handleSearchArticles}
            />
          </Route>
          <ProtectedRoute
            exact
            path='/saved-news'
            component={SavedNews}
            signedIn={signedIn}
            currentUser={currentUser}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isMobileMode={isMobileMode}
            isBlankHeader={isBlankHeader}
            handleLogoutClick={handleLogout}
            handleDeleteArticle={handleDeleteArticle}
            savedArticles={savedArticles}
            openSignInPopup={openSignInPopup}
          />
        </Switch>

        <Footer />
        <SignIn
          formValues={formValues}
          handleChange={handleChange}
          formErrors={formErrors}
          formSubmitError={formSubmitError}
          isOpen={isSignInPopupOpen}
          onClose={closeAllPopups}
          handleSignInSubmit={handleSignInSubmit}
          handleSignUpCLick={openSignUpPopup}
          isFormValid={isFormValid}
        ></SignIn>
        <SignUp
          formValues={formValues}
          handleChange={handleChange}
          formErrors={formErrors}
          formSubmitError={formSubmitError}
          isOpen={isSignUpPopupOpen}
          onClose={closeAllPopups}
          handleSignUpSubmit={handleSignUpSubmit}
          handleSignInCLick={openSignInPopup}
          isFormValid={isFormValid}
        ></SignUp>
        <SignUpSuccess
          isOpen={isSignupSuccessPopupOpen}
          onClose={closeAllPopups}
          handleSignInCLick={openSignInPopup}
        ></SignUpSuccess>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
