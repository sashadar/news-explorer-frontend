import React from 'react';

import sadFaceIcon from '../../images/icons/sad-face-icon.svg';

function NothingFound() {
  return (
    <section className='nothing-found'>
      <img
        className='nothing-found__icon'
        src={sadFaceIcon}
        alt='Nothing found'
      ></img>
      <h2 className='nothing-found__title'>Nothing Found</h2>
      <p className='nothing-found__text'>
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NothingFound;
