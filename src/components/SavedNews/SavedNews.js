import React from 'react';

import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

import mainApi from '../../utils/MainApi';

import { getKeywordsSummaryString } from '../../utils/auxiliary';

function SavedNews({
  currentUser,
  signedIn,
  isMenuOpen,
  setIsMenuOpen,
  isMobileMode,
  isBlankHeader,
  handleLogoutClick,
  handleDeleteArticle,
  savedArticles,
  /* componentRefreshRelay, */
}) {
  const [keywordsSummaryString, setKeywordsSummaryString] = React.useState('');

  React.useEffect(() => {
    const resultString = getKeywordsSummaryString(savedArticles);
    setKeywordsSummaryString(resultString);
  }, [savedArticles]);

  /*
  const [savedArticles, setSavedArticles] = React.useState([]);
  const [componentRefreshRelay, setComponentRefreshRelay] =
    React.useState(false);

  const switchRefreshRelay = () => {
    const tempVar = !componentRefreshRelay;
    setComponentRefreshRelay(tempVar);
  };

  React.useEffect(() => {
    const token = localStorage.getItem('token');
    mainApi
      .getArticles(token)
      .then((articles) => {
        localStorage.setItem('savedArticles', JSON.stringify(articles));
        setSavedArticles(articles);
      })
      .catch((err) => {
        console.log(`Error:     ${err}`);
      });
  }, [componentRefreshRelay]); */

  return (
    <div className='saved-news'>
      <SavedNewsHeader
        signedIn={signedIn}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isMobileMode={isMobileMode}
        isBlankHeader={isBlankHeader}
        handleLogoutClick={handleLogoutClick}
      ></SavedNewsHeader>
      <section
        className={`saved-news-summary ${
          isMenuOpen ? 'saved-news-summary_shifted-down' : ''
        }`}
      >
        <div className='saved-news-summary__container'>
          <h2 className='saved-news-summary__header'>Saved articles</h2>
          <p className='saved-news-summary__articles-count'>
            {currentUser.name}, you have {savedArticles.length} saved
            {savedArticles.length !== 1 ? ' articles' : ' article'}
          </p>
          <p className='saved-news-summary__keywords-list'>
            By keywords:
            <span className='saved-news-summary__keywords'>
              {' '}
              {
                /* getKeywordsSummaryString(savedArticles) */ keywordsSummaryString
              }
            </span>
          </p>
        </div>
      </section>
      <NewsCardList
        page='saved news'
        articles={savedArticles}
        signedIn={signedIn}
        handleDeleteArticle={handleDeleteArticle}
        /* savedArticlesRefresh={savedArticlesRefresh} */
        /* switchRefreshRelay={switchRefreshRelay} */
      />
    </div>
  );
}

export default SavedNews;
