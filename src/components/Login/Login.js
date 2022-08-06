import React from 'react';
import { Link } from 'react-router-dom';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

function Login(
  /* { handleLoginSubmit, email, setEmail, password, setPassword } */ {
    isOpen,
    onClose,
    setEmail,
    setPassword,
    handleLinkClick,
  }
) {
  return (
    <>
      <PopupWithForm isOpen={isOpen} onClose={onClose}>
        {' '}
      </PopupWithForm>
      <form className='popup__form' name='login' onSubmit={handleLoginSubmit}>
        <h2 className='popup__title popup__title_type_auth'>Log in</h2>
        <input
          type='email'
          className='form__input form__input_auth'
          name='email'
          id='email-input'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span className='popup__error' id='email-input-error'></span>
        <input
          type='password'
          className='form__input form__input_auth'
          name='password'
          id='password-input'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className='popup__error' id='password-input-error'></span>
        <button
          type='submit'
          className='form__button-submit form__button-submit_auth'
          aria-label='submit'
        >
          Log in
        </button>
      </form>
      <p className='popup__alternative'>
        or&nbsp;
        <span className='popup__link' onClick={handleLinkClick}>
          Sign in
        </span>
      </p>
    </>
  );
}

export default Login;
