import React from 'react';

import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import About from '../About/About';

function Main() {
  return (
    <main className='main'>
      <div className='main__background'>
        <Header />
        <SearchForm />
      </div>

      <About />
    </main>
  );
}

export default Main;
