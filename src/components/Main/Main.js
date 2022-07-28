import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';
import NewsCardList from '../NewsCardList/NewsCardList';

function Main() {
  return (
    <main className='main'>
      <div className='main__background'>
        <Header />
        <SearchForm />
      </div>
      <NewsCardList />
      <About />
    </main>
  );
}

export default Main;
