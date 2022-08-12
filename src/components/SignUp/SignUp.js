import React from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignUp({
  isOpen,
  onClose,
  handleSignInCLick,
  handleSignUpSubmit,
  email,
  setEmail,
  password,
  setPassword,
  userName,
  setUserName,
  isFormValid,
}) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} isAuth={true}>
      <form
        className='popup__form'
        name='register'
        onSubmit={handleSignUpSubmit}
      >
        <h2 className='popup__title'>Sign up</h2>
        <label className='popup__label' htmlFor='email-input'>
          Email
        </label>
        <input
          type='email'
          className='popup__input'
          name='email'
          id='email-input'
          placeholder='enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span className='popup__error' id='email-input-error'>
          Email error
        </span>
        <label className='popup__label' htmlFor='password-input'>
          Password
        </label>
        <input
          type='password'
          className='popup__input'
          name='password'
          id='password-input'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className='popup__error' id='password-input-error'>
          password error
        </span>
        <label className='popup__label' htmlFor='username-input'>
          Username
        </label>
        <input
          type='text'
          className='popup__input'
          name='username'
          id='username-input'
          placeholder='Enter your username'
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <span className='popup__error' id='username-input-error'>
          username error
        </span>
        <span
          className='popup__error popup__error_submit'
          id='popup-submit-error'
        >
          Popup submit error
        </span>
        <button
          type='submit'
          className={`popup__button-submit  ${
            isFormValid ? 'popup__button-submit_active' : ''
          }`}
          aria-label='submit'
          disabled={!isFormValid}
        >
          Sign up
        </button>
      </form>
      <p className='popup__alternative'>
        or&nbsp;
        <span className='popup__link' onClick={handleSignInCLick}>
          Sign in
        </span>
      </p>
    </PopupWithForm>
  );
}

export default SignUp;
