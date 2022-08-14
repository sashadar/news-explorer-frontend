import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import Footer from '../Footer/Footer';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import SignUpSuccess from '../SignUpSuccess/SignUpSuccess';

import newsApi from '../../utils/NewsApi';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import { MOBILESCREENWIDTH } from '../../utils/constants';

function App() {
  const [currentUser, setCurrentUser] = React.useState({
    name: 'AlexDarincev',
  });
  const [signedIn, setSignedIn] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [articles, setArticles] = React.useState([]);
  const [keyword, setKeyword] = React.useState('');
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isSignupSuccessPopupOpen, setIsSignupSuccessPopupOpen] =
    React.useState(false);
  const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);
  const [isNothingFound, setIsNothingFound] = React.useState(false);
  const [isSearchError, setIsSearchError] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(true);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMode, setIsMobileMode] = React.useState(false);
  const [isBlankHeader, setIsBlankHeader] = React.useState(false);

  const history = useHistory();

  const getWindowWidth = () => {
    const { innerWidth } = window;
    return innerWidth;
  };

  React.useEffect(() => {
    const handleWindowResize = () => {
      const windowWidth = getWindowWidth();
      if (windowWidth <= MOBILESCREENWIDTH) {
        setIsMobileMode(true);
      } else {
        setIsMobileMode(false);
        setIsMenuOpen(false);
      }
      console.log(`windowWidth: ${windowWidth} isMobileMode: ${isMobileMode}`);
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
  };

  function resetForm() {
    setEmail('');
    setPassword('');
    setUserName('');
  }

  const openSignUpPopup = () => {
    closeAllPopups();
    setIsMenuOpen(false);
    setIsSignUpPopupOpen(true);
    resetForm();
  };

  const openSignInPopup = () => {
    closeAllPopups();
    setIsMenuOpen(false);
    setIsSignInPopupOpen(true);
    resetForm();
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    setSignedIn(false);
    history.push('/');
  };

  const handleSearchArticles = (keyword) => {
    setIsPreloaderActive(true);
    setKeyword(keyword);

    /* console.log(newsApi.getArticles('Tesla').totalResults); */
    /*     newsApi.getArticles(keyword).then(({ articles }) => {
      console.log(JSON.stringify(articles[0]));
    }); */
    newsApi
      .getArticles(keyword)
      .then((data) => {
        setIsNothingFound(data.articles.length === 0);
        setArticles(data.articles);
        localStorage.setItem('articles', JSON.stringify(data.articles));
        localStorage.setItem('keyword', keyword);
      })
      .catch(() => {
        setIsSearchError(true);
        setArticles([]);
        localStorage.removeItem('articles');
        localStorage.removeItem('keyword');
      })
      .finally(() => {
        setIsPreloaderActive(false);
      });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    /* to be continued...*/
    setIsSignInPopupOpen(false);
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    /* to be continued...*/
    setIsSignUpPopupOpen(false);
    setIsSignupSuccessPopupOpen(true);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Main
              articles={articles}
              keyword={keyword}
              signedIn={signedIn}
              openSignInPopup={openSignInPopup}
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
          <Route exact path='/saved-news'>
            <SavedNews
              signedIn={signedIn}
              currentUser={currentUser}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
              isMobileMode={isMobileMode}
              isBlankHeader={isBlankHeader}
              handleLogoutClick={handleLogout}
            ></SavedNews>
          </Route>
        </Switch>

        <Footer />
        <SignIn
          isOpen={isSignInPopupOpen}
          onClose={closeAllPopups}
          handleSignInSubmit={handleSignInSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSignUpCLick={openSignUpPopup}
          isFormValid={isFormValid}
        ></SignIn>
        <SignUp
          isOpen={isSignUpPopupOpen}
          onClose={closeAllPopups}
          handleSignUpSubmit={handleSignUpSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          userName={userName}
          setUserName={setUserName}
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
