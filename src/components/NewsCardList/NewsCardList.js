import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList(props) {
  const [cardsCountToShow, setCardsCountToShow] = React.useState(3);

  const setMoreCardsToShow = () => {
    setCardsCountToShow(cardsCountToShow + 3);
  };

  React.useEffect(() => {
    if (props.page === 'saved news') {
      setMoreCardsToShow();
    }
  }, []);

  return (
    <section className='news-card-list'>
      {!props.isInSavedNews && (
        <h2 className='news-card-list__title'>Search results</h2>
      )}

      <ul className='news-card-list__list'>
        {props.cards &&
          props.cards
            .slice(0, cardsCountToShow)
            .map((currCard, i) => (
              <NewsCard
                card={currCard}
                signedIn={props.signedIn}
                page={props.page}
                key={i}
              ></NewsCard>
            ))}
      </ul>

      {props.cards && cardsCountToShow < props.cards.length && (
        <button
          type='button'
          className='news-card-list__button-more'
          onClick={setMoreCardsToShow}
        >
          Show more
        </button>
      )}
    </section>
  );
}

export default NewsCardList;
