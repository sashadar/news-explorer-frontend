import React from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignIn({
  formValues,
  handleChange,
  formErrors,
  formSubmitError,
  isOpen,
  onClose,
  handleSignUpCLick,
  handleSignInSubmit,
  isFormValid,
}) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      title={'Sign in'}
      name={'signin'}
      isAuth={true}
      isFormValid={isFormValid}
      formValues={formValues}
      onSubmit={handleSignInSubmit}
      handleAlternativeClick={handleSignUpCLick}
      alternativeLinkText='Sign up'
    >
      <label className='popup__label' htmlFor='input-email-signin'>
        Email
      </label>
      <input
        type='email'
        className='popup__input'
        name='email'
        id='input-email-signin'
        placeholder='Enter email'
        value={formValues.email || ''}
        onChange={handleChange}
        required
      />
      <span className='popup__error' id='email-input-error'>
        {formErrors.email}
      </span>
      <label className='popup__label' htmlFor='input-password-signin'>
        Password
      </label>
      <input
        type='password'
        className='popup__input popup__input_auth'
        name='password'
        id='input-password-signin'
        placeholder='Enter password'
        value={formValues.password || ''}
        onChange={handleChange}
        required
      />
      <span className='popup__error' id='password-input-error'>
        {formErrors.password}
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

export default SignIn;
