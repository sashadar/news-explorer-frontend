import React from 'react';

function SearchForm({ isMenuOpen, handleSearchArticles }) {
  const [inputValue, setInputValue] = React.useState('');
  const [inputPlaceholderValue, setInputPlaceholderValue] =
    React.useState('Enter topic');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    if (inputValue === '') {
      setInputPlaceholderValue('Please enter a keyword');
    } else {
      setInputPlaceholderValue('Enter topic');
      handleSearchArticles(inputValue);
    }
  };

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
            placeholder={inputPlaceholderValue}
            value={inputValue}
            onChange={handleChange}
          ></input>
          <button className='search-form__button'>Search</button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
