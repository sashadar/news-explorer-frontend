import React from 'react';

import Popup from '../Popup/Popup';

function SignUpSuccess({ isOpen, onClose, handleSignInCLick }) {
  return (
    <Popup isOpen={isOpen} onClose={onClose} isAuth={false}>
      <h2 className='popup__title'>Registration successfully completed!</h2>
      <p className='popup__link' onClick={handleSignInCLick}>
        Sign in
      </p>
    </Popup>
  );
}

export default SignUpSuccess;
