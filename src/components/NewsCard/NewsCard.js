import React from 'react';

function NewsCard(props) {
  const [isSaved, setIsSaved] = React.useState(false);

  const saveCard = () => {
    setIsSaved(true);
  };

  const removeCard = () => {
    setIsSaved(false);
  };

  return (
    <li className='news-card'>
      <img
        className='news-card__image'
        src={props.card.image}
        alt={props.card.title}
      ></img>

      {props.page === 'saved news' && props.signedIn && (
        <>
          <p className='news-card__category'>{props.card.category}</p>
          <button
            className='news-card__button news-card__button_type_delete'
            type='button'
          >
            <p className='news-card__tooltip news-card__tooltip_type_delete'>
              Remove from saved
            </p>
          </button>
        </>
      )}

      {props.page === 'main' && !props.signedIn && (
        <button
          className='news-card__button news-card__button_type_bookmark'
          type='button'
        >
          <p className='news-card__tooltip news-card__tooltip_type_bookmark'>
            Sign in to save articles
          </p>
        </button>
      )}

      {props.page === 'main' && props.signedIn && isSaved && (
        <button
          className='news-card__button news-card__button_type_bookmark-marked'
          onClick={removeCard}
          type='button'
        ></button>
      )}

      {props.page === 'main' && props.signedIn && !isSaved && (
        <button
          className='news-card__button news-card__button_type_bookmark'
          onClick={saveCard}
          type='button'
        ></button>
      )}

      <a className='news-card__text-container' href='###'>
        <p className='news-card__date'>{props.card.date}</p>
        <h3 className='news-card__title'>{props.card.title}</h3>
        <p className='news-card__paragraph'>{props.card.paragraph}</p>
        <p className='news-card__source'>{props.card.source}</p>
      </a>
    </li>
  );
}

export default NewsCard;
