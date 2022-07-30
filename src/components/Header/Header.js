import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import logoutIcon from '../../images/icons/button-logout-icon.svg';
import logoutIconDark from '../../images/icons/button-logout-icon-dark.svg';

function Header() {
  return (
    <header className='header'>
      <Navigation></Navigation>
    </header>
  );
}

export default Header;
