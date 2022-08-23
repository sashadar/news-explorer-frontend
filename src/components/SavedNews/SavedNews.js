import React from 'react';

import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

import {
  getKeywordsSummaryString,
  getCardsByKeywordFrequency,
} from '../../utils/auxiliary';

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
}) {
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
              {getKeywordsSummaryString(savedArticles)}
            </span>
          </p>
        </div>
      </section>
      <NewsCardList
        page='saved news'
        articles={getCardsByKeywordFrequency(savedArticles)}
        signedIn={signedIn}
        handleDeleteArticle={handleDeleteArticle}
      />
    </div>
  );
}

export default SavedNews;
