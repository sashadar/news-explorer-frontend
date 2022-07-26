import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import logoutIcon from '../../images/icons/button-logout-icon.svg';
import logoutIconDark from '../../images/icons/button-logout-icon-dark.svg';

function Header() {
  return (
    <header className='header'>
      <Link to='/' className='header__title'>
        NewsExplorer
      </Link>
      <div className='header__container'>
        <Navigation></Navigation>
        <button className='header__button'>Sign In</button>
        {/*         <button className='header__button header__button_logout'>
          Elise{' '}
          <img className='header__logout-icon' alt='logout' src={logoutIcon} />
        </button> */}
      </div>
    </header>
  );
}

export default Header;
