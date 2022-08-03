import React from 'react';

import Header from '../Header/Header';

function SavedNewsHeader(props) {
  return <Header page='saved news' signedIn={props.signedIn}></Header>;
}

export default SavedNewsHeader;
