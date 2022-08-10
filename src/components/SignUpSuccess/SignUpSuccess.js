import React from 'react';

import PopupWithForm from '../PopupWithForm/PopupWithForm';

function SignUpSuccess({ isOpen, onClose, handleSignInCLick }) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} isAuth={false}>
      <h2 className='popup__title'>Registration successfully completed!</h2>
      <p className='popup__link' onClick={handleSignInCLick}>
        Sign in
      </p>
    </PopupWithForm>
  );
}

export default SignUpSuccess;
