import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import logoutIcon from '../../images/icons/button-logout-icon.svg';
import logoutIconDark from '../../images/icons/button-logout-icon-dark.svg';

function Navigation() {
  const testUserName = 'Elise';
  return (
    <nav className='navigation'>
      <Link to='/' className='navigation__title'>
        NewsExplorer
      </Link>
      <ul className='navigation__list'>
        <li>
          <NavLink
            to='/'
            className='navigation__link'
            activeClassName='navigation__link_active'
          >
            Home
          </NavLink>
        </li>
        <li>
          <Link
            to='/saved-news'
            className='navigation__link navigation__link_active navigation__link_articles'
          >
            Saved articles
          </Link>
        </li>
        {/*         <li>
          <button className='navigation__button navigation__button_signin'>
            Sign In
          </button>
        </li> */}
        <li>
          <button className='navigation__button navigation__button_logout'>
            <span className='navigation__username'>{testUserName}</span>
            <img
              className='navigation__logout-icon'
              alt='logout'
              src={logoutIcon}
            />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
