import React from 'react';
import Moment from 'moment';

function NewsCard({
  card,
  signedIn,
  page,
  handleSaveArticle,
  handleDeleteArticle,
  openSignUpPopup,
}) {
  const handleDeleteArticleClick = () => {
    handleDeleteArticle(card);
  };

  const handleSaveArticleClick = () => {
    handleSaveArticle(card);
  };

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
            onClick={handleDeleteArticleClick}
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
          onClick={openSignUpPopup}
        >
          <p className='news-card__tooltip news-card__tooltip_type_bookmark'>
            Sign in to save articles
          </p>
        </button>
      )}

      {page === 'main' && signedIn && card.isSaved && (
        <button
          className='news-card__button news-card__button_type_bookmark-marked'
          onClick={handleDeleteArticleClick}
          type='button'
        ></button>
      )}

      {page === 'main' && signedIn && !card.isSaved && (
        <button
          className='news-card__button news-card__button_type_bookmark'
          onClick={handleSaveArticleClick}
          type='button'
        ></button>
      )}

      <a
        className='news-card__text-container'
        href={card.url}
        target='_blank'
        rel='noreferrer'
      >
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
