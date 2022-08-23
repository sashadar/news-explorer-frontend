import React from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignUp({
  formValues,
  handleChange,
  formErrors,
  formSubmitError,
  isOpen,
  onClose,
  handleSignInCLick,
  handleSignUpSubmit,
  isFormValid,
}) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      isAuth={true}
      title={'Sign up'}
      name={'signup'}
      isFormValid={isFormValid}
      formValues={formValues}
      onSubmit={handleSignUpSubmit}
      handleAlternativeClick={handleSignInCLick}
      alternativeLinkText='Sign in'
    >
      <label className='popup__label' htmlFor='input-email-signup'>
        Email
      </label>
      <input
        type='email'
        className='popup__input'
        name='email'
        id='input-email-signup'
        placeholder='enter email'
        value={formValues.email || ''}
        onChange={handleChange}
        required
      />
      <span className='popup__error' id='email-input-error'>
        {formErrors.email}
      </span>
      <label className='popup__label' htmlFor='input-password-signup'>
        Password
      </label>
      <input
        type='password'
        className='popup__input'
        name='password'
        id='input-password-signup'
        placeholder='Enter password'
        value={formValues.password || ''}
        onChange={handleChange}
        required
      />
      <span className='popup__error' id='password-input-error'>
        {formErrors.password}
      </span>
      <label className='popup__label' htmlFor='input-username-signup'>
        Username
      </label>
      <input
        type='text'
        className='popup__input'
        name='username'
        id='input-username-signup'
        placeholder='Enter your username'
        value={formValues.username || ''}
        onChange={handleChange}
        required
      />
      <span className='popup__error' id='username-input-error'>
        {formErrors.username}
      </span>
      <span
        className='popup__error popup__error_submit'
        id='popup-submit-error'
      >
        {formSubmitError}
      </span>
    </PopupWithForm>
  );
}

export default SignUp;
