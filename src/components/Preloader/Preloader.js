import React from 'react';

function Preloader() {
  return (
    <div className='preloader'>
      <div className='preloader__circle'>
        <div className='preloader__circle-core'></div>
      </div>
      <p className='preloader__text'>Searching for news</p>
    </div>
  );
}

export default Preloader;
