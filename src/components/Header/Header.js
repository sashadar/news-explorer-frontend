import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header className='header'>
      <Link to='/' className='header__title'>
        NewsExplorer
      </Link>
      <div className='header__container'>
        <Navigation></Navigation>
        <button className='header__button'>Sign In</button>
        {/* <button className='header__button'>button</button> */}
      </div>
    </header>
  );
}

export default Header;
