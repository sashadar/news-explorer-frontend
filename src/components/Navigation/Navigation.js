import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/saved-news'>Saved articles</Link>
      </ul>
    </nav>
  );
}

export default Navigation;
