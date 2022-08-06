import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';

import { MOBILESCREENWIDTH } from '../../utils/constants';

function Header(props) {
  const [isMobileMode, setIsMobileMode] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleWindowResize = () => {
      const windowWidth = getWindowWidth();
      if (windowWidth <= MOBILESCREENWIDTH) {
        setIsMobileMode(true);
      } else {
        setIsMobileMode(false);
        setIsMenuOpen(false);
      }
      console.log(`windowWidth: ${windowWidth} isMobileMode: ${isMobileMode}`);
    };

    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  const getWindowWidth = () => {
    const { innerWidth } = window;
    return innerWidth;
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`header ${
        props.page === 'saved news' && !isMobileMode ? 'header_dark' : ''
      } ${isMenuOpen ? 'header_mobile-expanded' : ''}`}
    >
      <div className='header__container'>
        <Link
          to='/'
          className={`header__title ${
            props.page === 'saved news' && !isMenuOpen
              ? 'header__title_dark'
              : ''
          }`}
        >
          NewsExplorer
        </Link>
        {isMobileMode && !isMenuOpen && (
          <button
            className={`header__button header__button_menu-open ${
              props.page === 'saved news' ? 'header__button_menu-open_dark' : ''
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

      <Navigation
        page={props.page}
        signedIn={props.signedIn}
        isMobileMode={isMobileMode}
        isMenuOpen={isMenuOpen}
      ></Navigation>
    </header>
  );
}

export default Header;
