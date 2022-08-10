import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';
import NewsCardList from '../NewsCardList/NewsCardList';

import { tempCards } from '../../utils/constants';

function Main({
  signedIn,
  openSignInPopup,
  isMenuOpen,
  setIsMenuOpen,
  isMobileMode,
  isBlankHeader,
  handleLogoutClick,
}) {
  const [isPreloaderActive, setIsPreloaderActive] = React.useState(false);
  const [isNothingFound, setIsNothingFound] = React.useState(true);

  return (
    <main className='main'>
      <div className='main__background'>
        <Header
          signedIn={signedIn}
          page='main'
          openSignInPopup={openSignInPopup}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isMobileMode={isMobileMode}
          isBlankHeader={isBlankHeader}
          handleLogoutClick={handleLogoutClick}
        />
        <SearchForm isMenuOpen={isMenuOpen} />
      </div>
      {isPreloaderActive && <Preloader></Preloader>}
      {isNothingFound && <NothingFound></NothingFound>}

      <NewsCardList page='main' cards={tempCards} signedIn={signedIn} />
      <About />
    </main>
  );
}

export default Main;
