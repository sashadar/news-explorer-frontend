import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import CurrentUserContext from '../../contexts/CurrentUserContext';

import logoutIcon from '../../images/icons/button-logout-icon.svg';
import logoutIconDark from '../../images/icons/button-logout-icon-dark.svg';

function Navigation(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [navigationLinkArticlesClassName, setNavigationLinkArticlesClassName] =
    React.useState('navigation__link  navigation__link_articles');
  const [navigationLinkHomeClassName, setNavigationLinkHomeClassName] =
    React.useState('navigation__link');
  const [navigationButtonLogoutClassName, setNavigationButtonLogoutClassName] =
    React.useState('navigation__button navigation__button_logout');
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

  React.useEffect(() => {
    if (props.page === 'saved news') {
      setToDark();
    }
  }, []);

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li>
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
            <li>
              <NavLink
                to='/saved-news'
                className={navigationLinkArticlesClassName}
                activeClassName='navigation__link_active'
              >
                Saved articles
              </NavLink>
            </li>
            <li>
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
          <li>
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
