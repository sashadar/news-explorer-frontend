import React from 'react';

import Navigation from '../Navigation/Navigation';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__copyright'>
        &copy; {new Date().getFullYear()} Supersite, Powered by News API
      </p>

      <Navigation section='footer'></Navigation>
    </footer>
  );
}

export default Footer;
