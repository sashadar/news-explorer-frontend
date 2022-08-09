import React from 'react';

import Header from '../Header/Header';

function SavedNewsHeader({
  signedIn,
  isMenuOpen,
  setIsMenuOpen,
  isMobileMode,
  isBlankHeader,
  handleLogoutClick,
}) {
  return (
    <Header
      page='saved news'
      signedIn={signedIn}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      isMobileMode={isMobileMode}
      isBlankHeader={isBlankHeader}
      handleLogoutClick={handleLogoutClick}
    ></Header>
  );
}

export default SavedNewsHeader;
