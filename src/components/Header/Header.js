import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

function Header({
  page,
  signedIn,
  openSignInPopup,
  isMenuOpen,
  setIsMenuOpen,
  isMobileMode,
  isBlankHeader,
  handleLogoutClick,
}) {
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`header ${
        page === 'saved news' && !isMenuOpen ? 'header_dark' : ''
      } ${isMenuOpen ? 'header_mobile-expanded' : ''}`}
    >
      {!isBlankHeader && (
        <div className='header__container'>
          <Link
            to='/'
            className={`header__title ${
              page === 'saved news' && !isMenuOpen ? 'header__title_dark' : ''
            }`}
          >
            NewsExplorer
          </Link>
          {isMobileMode && !isMenuOpen && (
            <button
              className={`header__button header__button_menu-open ${
                page === 'saved news' ? 'header__button_menu-open_dark' : ''
              }`}
              type='button'
              onClick={handleMenuOpen}
            ></button>
          )}
          {isMobileMode && isMenuOpen && (
            <button
              className='header__button header__button_menu-close'
              type='button'
              onClick={handleMenuClose}
            ></button>
          )}
        </div>
      )}

      <Navigation
        page={page}
        section='header'
        signedIn={signedIn}
        isMobileMode={isMobileMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        openSignInPopup={openSignInPopup}
        handleLogoutClick={handleLogoutClick}
      ></Navigation>
    </header>
  );
}

export default Header;
