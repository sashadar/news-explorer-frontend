import React from 'react';

function SearchForm({ isMenuOpen, handleSearchArticles }) {
  function handleSearchSubmit(e) {
    e.preventDefault();
    const keyword = e.currentTarget[0].value;

    if (keyword === '') {
      e.currentTarget[0].placeholder = 'Please enter a keyword';
    } else {
      e.currentTarget[0].placeholder = 'Enter topic';
      handleSearchArticles(keyword);
    }
  }

  return (
    <section
      className={`search-form ${isMenuOpen ? 'search-form_shifted-down' : ''}`}
    >
      <div className='search-form__container'>
        <h2 className='search-form__title'>What's going on in the world?</h2>
        <p className='search-form__subtitle'>
          Find the latest news on any topic and save them in your personal
          account.
        </p>
        <form className='search-form__form' onSubmit={handleSearchSubmit}>
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
