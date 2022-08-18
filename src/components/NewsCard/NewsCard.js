import React from 'react';
import Moment from 'moment';

import noImage from '../../images/icons/no-image-icon.jpg';

function NewsCard({
  card,
  signedIn,
  page,
  handleSaveArticle,
  handleDeleteArticle,
  /*  switchRefreshRelay, */
}) {
  /*  const [isSaved, setIsSaved] = React.useState(false); */

  // const handleSaveCardClick = () => {
  //   handleSaveArticle(card, keyword);
  //   /* setIsSaved(true); */
  // };

  // const handleRemoveCardClick = () => {
  //   console.log(`handleRemoveCardClick: card._id: ${card._id}`);
  //   handleDeleteArticle(card);
  //   /*     if (page === 'saved news') {
  //     switchRefreshRelay();
  //   } */

  //   /* setIsSaved(false); */
  // };

  return (
    <li className='news-card'>
      <img
        className='news-card__image'
        src={card.urlToImage}
        alt={card.title}
      ></img>

      {page === 'saved news' && signedIn && (
        <>
          <p className='news-card__category'>{card.keyword}</p>
          <button
            className='news-card__button news-card__button_type_delete'
            onClick={() => handleDeleteArticle(card)}
            type='button'
          >
            <p className='news-card__tooltip news-card__tooltip_type_delete'>
              Remove from saved
            </p>
          </button>
        </>
      )}

      {page === 'main' && !signedIn && (
        <button
          className='news-card__button news-card__button_type_bookmark'
          type='button'
        >
          <p className='news-card__tooltip news-card__tooltip_type_bookmark'>
            Sign in to save articles
          </p>
        </button>
      )}

      {page === 'main' && signedIn && card.isSaved && (
        <button
          className='news-card__button news-card__button_type_bookmark-marked'
          onClick={() => handleDeleteArticle(card)}
          type='button'
        ></button>
      )}

      {page === 'main' && signedIn && !card.isSaved && (
        <button
          className='news-card__button news-card__button_type_bookmark'
          onClick={() => handleSaveArticle(card)}
          type='button'
        ></button>
      )}

      <a className='news-card__text-container' href={card.url} target='_blank'>
        <p className='news-card__date'>
          {Moment(card.publishedAt).format('MMMM D, YYYY')}
        </p>
        <h3 className='news-card__title'>{card.title}</h3>
        <p className='news-card__paragraph'>{card.description}</p>
        <p className='news-card__source'>{card.source.name}</p>
      </a>
    </li>
  );
}

export default NewsCard;
