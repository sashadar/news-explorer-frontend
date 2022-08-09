import React from 'react';

import NewsCard from '../NewsCard/NewsCard';

function NewsCardList({ page, signedIn, cards }) {
  const [cardsCountToShow, setCardsCountToShow] = React.useState(3);

  const setMoreCardsToShow = () => {
    setCardsCountToShow(cardsCountToShow + 3);
  };

  React.useEffect(() => {
    if (page === 'saved news') {
      setMoreCardsToShow();
    }
  }, []);

  return (
    <section className='news-card-list'>
      {page === 'main' && (
        <h2 className='news-card-list__title'>Search results</h2>
      )}

      <ul className='news-card-list__list'>
        {cards &&
          cards
            .slice(0, cardsCountToShow)
            .map((currCard, i) => (
              <NewsCard
                card={currCard}
                signedIn={signedIn}
                page={page}
                key={i}
              ></NewsCard>
            ))}
      </ul>

      {cards && cardsCountToShow < cards.length && (
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
