import React from 'react';

function NewsCard(props) {
  return (
    <li className='news-card'>
      <img
        className='news-card__image'
        src={props.card.image}
        alt='dummy'
      ></img>
      {/*       <div className='news-card__tools-container'>
        <p className='news-card__category'>{props.card.category}</p>
        <p className='news-card__tooltip'>Sign in to save articles</p>
        <button className='news-card__button_action_bookmark'></button>
        <button className='news-card__button_action_bookmark_active'></button>
        <button className='news-card__button_action_delete'></button>
      </div> */}

      <div className='news-card__text-container' href='###'>
        <p className='news-card__date'>{props.card.date}</p>
        <h3 className='news-card__title'>{props.card.title}</h3>
        <p className='news-card__paragraph'>{props.card.paragraph}</p>
        <p className='news-card__source'>{props.card.source}</p>
      </div>
    </li>
  );
}

export default NewsCard;
