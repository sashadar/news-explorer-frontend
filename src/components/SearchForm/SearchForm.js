import React from 'react';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__container'>
        <h1 className='search-form__title'>What's going on in the world?</h1>
        <p className='search-form__subtitle'>
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className='search-form__form'>
          <input
            className='search-form__input'
            placeholder='Enter topic'
          ></input>
          <button className='search-form__button'>Search</button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
