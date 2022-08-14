import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import Preloader from '../Preloader/Preloader';
import NothingFound from '../NothingFound/NothingFound';
import NewsCardList from '../NewsCardList/NewsCardList';

import { tempCards } from '../../utils/constants';

function Main({
  articles,
  keyword,
  signedIn,
  openSignInPopup,
  isMenuOpen,
  setIsMenuOpen,
  isMobileMode,
  isBlankHeader,
  isPreloaderActive,
  isNothingFound,
  isSearchError,
  handleLogoutClick,
  handleSearchArticles,
}) {
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
        <SearchForm
          isMenuOpen={isMenuOpen}
          handleSearchArticles={handleSearchArticles}
        />
      </div>
      {isPreloaderActive && <Preloader></Preloader>}
      {(isNothingFound || isSearchError) && (
        <NothingFound isSearchError={isSearchError}></NothingFound>
      )}

      {articles.length > 0 && (
        <NewsCardList
          page='main'
          articles={articles}
          keyword={keyword}
          signedIn={signedIn}
        />
      )}
      <About />
    </main>
  );
}

export default Main;
