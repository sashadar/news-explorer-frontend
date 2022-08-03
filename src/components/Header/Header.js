import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

function Header(props) {
  const headerTitleClassName = `header__title ${
    props.page === 'saved news' ? 'header__title_dark' : ''
  }`;

  const headerClassName = `header ${
    props.page === 'saved news' ? 'header_dark' : ''
  }`;

  return (
    <header className={headerClassName}>
      <Link to='/' className={headerTitleClassName}>
        NewsExplorer
      </Link>
      <Navigation page={props.page} signedIn={props.signedIn}></Navigation>
    </header>
  );
}

export default Header;
