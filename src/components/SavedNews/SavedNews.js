import React from 'react';

import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardList from '../NewsCardList/NewsCardList';

import { tempCards } from '../../utils/constants';

const getKeywordsSummaryString = (cards) => {
  const keywordsArray = cards.map((card) => card.category);
  const uniqueKeywordsSet = [...new Set(keywordsArray)];
  var summaryString = uniqueKeywordsSet.slice(0, 2).join(', ');
  if (uniqueKeywordsSet.length > 2) {
    summaryString += ` and ${uniqueKeywordsSet.length - 2} other`;
  }
  return summaryString;
};

function SavedNews(props) {
  return (
    <div className='saved-news'>
      <SavedNewsHeader signedIn={props.signedIn}></SavedNewsHeader>
      <section className='saved-news-summary'>
        <div className='saved-news-summary__container'>
          <h2 className='saved-news-summary__header'>Saved articles</h2>
          <p className='saved-news-summary__articles-count'>
            {props.currentUser.name}, you have {tempCards.length} saved
            {tempCards.length !== 1 ? ' articles' : ' article'}
          </p>
          <p className='saved-news-summary__keywords-list'>
            By keywords:
            <span className='saved-news-summary__keywords'>
              {' '}
              {getKeywordsSummaryString(tempCards)}
            </span>
          </p>
        </div>
      </section>
      <NewsCardList
        page='saved news'
        cards={tempCards}
        signedIn={props.signedIn}
      />
    </div>
  );
}

export default SavedNews;
