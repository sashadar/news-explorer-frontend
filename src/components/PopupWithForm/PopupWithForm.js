import React from 'react';

function PopupWithForm({ isOpen, name, onClose, children }) {
  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup  ${props.isOpen ? 'popup_opened' : ''} `}
      onClick={handleOverlay}
    >
      <div className={`popup__container`}>
        <button
          type='button'
          className='popup__close'
          aria-label='close'
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
}

export default PopupWithForm;
