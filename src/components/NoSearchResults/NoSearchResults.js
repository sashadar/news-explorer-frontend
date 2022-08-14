import React from 'react';

import sadFaceIcon from '../../images/icons/sad-face-icon.svg';

function NoSearchResults() {
  return (
    <section className='no-search-results'>
      <img
        className='no-search-results__icon'
        src={sadFaceIcon}
        alt='sad face'
      ></img>
      <h2 className='no-search-results__title'>Nothing Found</h2>
      <p className='no-search-results__text'>
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NoSearchResults;
