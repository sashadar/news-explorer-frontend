import React from 'react';
import { NavLink } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import logoutIcon from '../../images/icons/button-logout-icon.svg';
import logoutIconDark from '../../images/icons/button-logout-icon-dark.svg';

function Navigation({
  page,
  section,
  signedIn,
  isMobileMode,
  isMenuOpen = false,
  setIsMenuOpen,
  openSignInPopup,
  handleLogoutClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  const defaultNavigationLinkArticlesClassName =
    'navigation__link  navigation__link_articles';
  const defaultNavigationLinkHomeClassName = 'navigation__link';
  const defaultNavigationButtonLogoutClassName =
    'navigation__button navigation__button_logout';

  const [navigationLinkArticlesClassName, setNavigationLinkArticlesClassName] =
    React.useState(defaultNavigationLinkArticlesClassName);
  const [navigationLinkHomeClassName, setNavigationLinkHomeClassName] =
    React.useState(defaultNavigationLinkHomeClassName);
  const [navigationButtonLogoutClassName, setNavigationButtonLogoutClassName] =
    React.useState(defaultNavigationButtonLogoutClassName);
  const [navigationLogoutIconSource, setNavigationLogoutIconSource] =
    React.useState(logoutIcon);

  const setToDark = () => {
    setNavigationLinkArticlesClassName(
      navigationLinkArticlesClassName + ' navigation__link_dark'
    );
    setNavigationLinkHomeClassName(
      navigationLinkHomeClassName + ' navigation__link_dark'
    );
    setNavigationButtonLogoutClassName(
      navigationButtonLogoutClassName + ' navigation__button_dark'
    );
    setNavigationLogoutIconSource(logoutIconDark);
  };

  const setToDefault = () => {
    setNavigationLinkArticlesClassName(defaultNavigationLinkArticlesClassName);
    setNavigationLinkHomeClassName(defaultNavigationLinkHomeClassName);
    setNavigationButtonLogoutClassName(defaultNavigationButtonLogoutClassName);
    setNavigationLogoutIconSource(logoutIcon);
  };

  React.useEffect(() => {
    if (page === 'saved news' && isMobileMode) {
      setToDefault();
    } else if (
      (page === 'saved news' && !isMobileMode) ||
      section === 'footer'
    ) {
      setToDark();
    }
    console.log(isMobileMode);
  }, [isMobileMode]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navigation ${
        isMobileMode && section === 'header' ? 'navigation_mobile-menu' : ''
      } ${
        !isMenuOpen && isMobileMode && section === 'header'
          ? 'navigation_hidden'
          : ''
      }`}
    >
      <ul
        className={`navigation__list ${
          !isMenuOpen && isMobileMode ? 'navigation__list_hidden' : ''
        } ${isMenuOpen && isMobileMode ? 'navigation__list_menu-opened' : ''}`}
      >
        <li
          className={`navigation__list-item ${
            section === 'footer' ? 'navigation__list-item_footer' : ''
          }`}
        >
          <NavLink
            to='/'
            onClick={handleLinkClick}
            exact={true}
            className={`${navigationLinkHomeClassName} ${
              section === 'footer' ? 'navigation__link_footer' : ''
            }`}
            activeClassName={`navigation__link_active ${
              section === 'footer' ? 'navigation__link_no-border' : ''
            }`}
          >
            Home
          </NavLink>
        </li>
        {signedIn && section === 'header' && (
          <>
            <li className='navigation__list-item'>
              <NavLink
                to='/saved-news'
                onClick={handleLinkClick}
                className={navigationLinkArticlesClassName}
                activeClassName='navigation__link_active'
              >
                Saved articles
              </NavLink>
            </li>
            <li className='navigation__list-item navigation__list-item_button'>
              <button
                className={navigationButtonLogoutClassName}
                onClick={handleLogoutClick}
              >
                <span className='navigation__username'>{currentUser.name}</span>
                <img
                  className='navigation__logout-icon'
                  alt='logout'
                  src={navigationLogoutIconSource}
                />
              </button>
            </li>
          </>
        )}
        {!signedIn && section === 'header' && (
          <li className='navigation__list-item navigation__list-item_button'>
            <button
              className='navigation__button navigation__button_signin'
              onClick={openSignInPopup}
            >
              Sign In
            </button>
          </li>
        )}
        {section === 'footer' && (
          <li className='navigation__list-item navigation__list-item_footer'>
            <a
              className='navigation__link navigation__link_dark navigation__link_footer'
              href='https://practicum.com/'
              target='_blank'
            >
              Practicum by Yandex
            </a>
          </li>
        )}
      </ul>
      {section === 'footer' && (
        <ul className='navigation__list navigation__list_content_icons '>
          <li className='navigation__list-item'>
            <a
              className='navigation__icon-link navigation__icon-link_icon_github'
              href='https://github.com/Yandex-Practicum'
              target='_blank'
            ></a>
          </li>
          <li className='navigation__list-item'>
            <a
              className='navigation__icon-link navigation__icon-link_icon_facebook'
              href='https://www.facebook.com/Practicum100IL/'
              target='_blank'
            ></a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
