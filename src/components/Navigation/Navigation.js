import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import logoutIcon from '../../images/icons/button-logout-icon.svg';
import logoutIconDark from '../../images/icons/button-logout-icon-dark.svg';

function Navigation(props) {
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

  /*   const navigationLinkArticlesClassName = `navigation__link  navigation__link_articles ${
    props.page === 'saved news' ? 'navigation__link_dark' : ''
  }`;
  const navigationLinkHomeClassName = `navigation__link ${
    props.page === 'saved news' ? 'navigation__link_dark' : ''
  }`;

  const navigationButtonLogoutClassName = `navigation__button navigation__button_logout ${
    props.page === 'saved news' ? 'navigation__button_dark' : ''
  }`;

  const navigationLogoutIconSource =
    props.page === 'saved news' ? logoutIconDark : logoutIcon; */

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
    if (props.page === 'saved news' && props.isMobileMode) {
      setToDefault();
    } else if (props.page === 'saved news' && !props.isMobileMode) {
      setToDark();
    }
    console.log(props.isMobileMode);
  }, [props.isMobileMode]);

  return (
    <nav
      className={`navigation ${props.isMenuOpen ? '' : 'navigation_hidden'}`}
    >
      <ul
        className={`navigation__list ${
          props.isMenuOpen && props.isMobileMode
            ? ''
            : 'navigation__list_hidden'
        }`}
      >
        <li className='navigation__list-item'>
          <NavLink
            to='/'
            exact={true}
            className={navigationLinkHomeClassName}
            activeClassName='navigation__link_active'
          >
            Home
          </NavLink>
        </li>
        {props.signedIn ? (
          <>
            <li className='navigation__list-item'>
              <NavLink
                to='/saved-news'
                className={navigationLinkArticlesClassName}
                activeClassName='navigation__link_active'
              >
                Saved articles
              </NavLink>
            </li>
            <li className='navigation__list-item navigation__list-item_button'>
              <button className={navigationButtonLogoutClassName}>
                <span className='navigation__username'>{currentUser.name}</span>
                <img
                  className='navigation__logout-icon'
                  alt='logout'
                  src={navigationLogoutIconSource}
                />
              </button>
            </li>
          </>
        ) : (
          <li className='navigation__list-item navigation__list-item_button'>
            <button className='navigation__button navigation__button_signin'>
              Sign In
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
