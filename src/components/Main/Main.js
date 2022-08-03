import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';

import { tempCards } from '../../utils/constants';

function Main(props) {
  return (
    <main className='main'>
      <div className='main__background'>
        <Header signedIn={props.signedIn} page='main' />
        <SearchForm />
      </div>
      <NewsCardList page='main' cards={tempCards} signedIn={props.signedIn} />
      <About />
    </main>
  );
}

export default Main;
