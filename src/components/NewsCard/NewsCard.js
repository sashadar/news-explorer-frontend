import React from 'react';

import bookmarkIcon from '../../images/icons/bookmark-icon.svg';
import bookmarkIconActive from '../../images/icons/bookmark-icon-active.svg';
import bookmarkIconMarked from '../../images/icons/bookmark-icon-marked.svg';
import garbageBinIcon from '../../images/icons/garbage-bin-icon.svg';
import garbageBinIconActive from '../../images/icons/garbage-bin-icon-active.svg';

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

      {props.isInSavedNews && (
        <>
          <p className='news-card__category'>{props.card.category}</p>
          <button className='news-card__button news-card__button_type_delete'>
            <p className='news-card__tooltip news-card__tooltip_type_delete'>
              Remove from saved
            </p>
          </button>{' '}
        </>
      )}

      {!props.isInSavedNews && !props.user && (
        <button className='news-card__button news-card__button_type_bookmark'>
          <p className='news-card__tooltip news-card__tooltip_type_bookmark'>
            Sign in to save articles
          </p>
        </button>
      )}

      {!props.isInSavedNews && props.user && isSaved && (
        <button
          className='news-card__button news-card__button_type_bookmark-marked'
          onClick={removeCard}
        ></button>
      )}

      {!props.isInSavedNews && props.user && !isSaved && (
        <button
          className='news-card__button news-card__button_type_bookmark'
          onClick={saveCard}
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
