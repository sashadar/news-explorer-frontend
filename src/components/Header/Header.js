import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

function Header() {
  return (
    <header>
      <Link to='/' className='header__title'>
        NewsExplorer
      </Link>
      <Navigation></Navigation>
      <button className='header__button'>Sign In</button>
      <button className='header__button'></button>
    </header>
  );
}

export default Header;
