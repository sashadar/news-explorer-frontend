import React from 'react';

import sadFaceIcon from '../../images/icons/sad-face-icon.svg';
import {
  NOTHING_FOUND_MESSAGE,
  SEARCH_ERROR_MESSAGE,
} from '../../utils/constants';

function NothingFound({ isSearchError }) {
  return (
    <section className='nothing-found'>
      <img
        className='nothing-found__icon'
        src={sadFaceIcon}
        alt='Nothing found'
      ></img>
      <h2 className='nothing-found__title'>
        {isSearchError
          ? SEARCH_ERROR_MESSAGE.title
          : NOTHING_FOUND_MESSAGE.title}
      </h2>
      <p className='nothing-found__text'>
        {isSearchError
          ? SEARCH_ERROR_MESSAGE.message
          : NOTHING_FOUND_MESSAGE.message}
      </p>
    </section>
  );
}

export default NothingFound;
