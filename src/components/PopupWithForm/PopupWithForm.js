import React from 'react';

function PopupWithForm({ isOpen, onClose, children, isAuth }) {
  React.useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', closeByEscape);

    return () => document.removeEventListener('keydown', closeByEscape);
  }, [isOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`popup  ${isOpen ? 'popup_opened' : ''} `}
      onClick={handleOverlay}
    >
      <div
        className={`popup__container ${
          isAuth ? '' : 'popup__container_padding-extended'
        }`}
      >
        <button
          type='button'
          className='popup__button-close'
          aria-label='close'
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  );
}

export default PopupWithForm;
