import React from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignIn({
  isOpen,
  onClose,
  setEmail,
  setPassword,
  handleSignUpCLick,
  handleSignInSubmit,
  email,
  password,
  isFormValid,
}) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose}>
      <form className='popup__form' name='login' onSubmit={handleSignInSubmit}>
        <h2 className='popup__title'>Sign in</h2>
        <label className='popup__label' htmlFor='email-input'>
          Email
        </label>
        <input
          type='email'
          className='popup__input'
          name='email'
          id='email-input'
          placeholder='Enter email'
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
          className='popup__input popup__input_auth'
          name='password'
          id='password-input'
          placeholder='Enter password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className='popup__error' id='password-input-error'>
          Password error
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
          Sign in
        </button>
      </form>
      <p className='popup__alternative'>
        or&nbsp;
        <span className='popup__link' onClick={handleSignUpCLick}>
          Sign up
        </span>
      </p>
    </PopupWithForm>
  );
}

export default SignIn;
