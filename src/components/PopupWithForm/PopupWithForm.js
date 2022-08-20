import React from 'react';

import Popup from '../Popup/Popup';

function PopupWithForm({
  isOpen,
  name,
  onClose,
  children,
  isAuth,
  title,
  isFormValid,
  onSubmit,
  handleAlternativeClick,
  alternativeLinkText,
}) {
  return (
    <Popup isOpen={isOpen} name={name} onClose={onClose} isAuth={isAuth}>
      <h2 className='popup__title'>{title}</h2>
      <form className='popup__form' name={name} onSubmit={onSubmit}>
        {children}
        <button
          type='submit'
          className={`popup__button-submit  ${
            isFormValid ? 'popup__button-submit_active' : ''
          }`}
          aria-label='submit'
          disabled={!isFormValid}
        >
          {title}
        </button>
      </form>
      <p className='popup__alternative'>
        or&nbsp;
        <span className='popup__link' onClick={handleAlternativeClick}>
          {alternativeLinkText}
        </span>
      </p>
    </Popup>
  );
}

export default PopupWithForm;
