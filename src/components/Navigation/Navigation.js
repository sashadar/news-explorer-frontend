import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className='navigation__link-list'>
        <li className='navigation_link-list-item'>
          <Link to='/' className='navigation__link'>
            Home
          </Link>
        </li>
        <li className='navigation_link-list-item'>
          <Link to='/saved-news' className='navigation__link'>
            Saved articles
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
