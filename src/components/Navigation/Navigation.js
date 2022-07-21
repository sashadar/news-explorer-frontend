import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className='navigation'>
      <ul className='navigation__link-list'>
        <li className='navigation__link-list-item navigation__link-list-item_active'>
          <Link to='/' className='navigation__link'>
            Home
          </Link>
        </li>
        <li className='navigation__link-list-item navigation__link-list-item_articles navigation__link-list-item_active'>
          <Link to='/saved-news' className='navigation__link'>
            Saved articles
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
