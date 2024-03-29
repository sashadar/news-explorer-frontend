import React from 'react';

const Popup = ({ isOpen, name, onClose, isAuth, children }) => {
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
      className={`popup ${isOpen ? 'popup_opened' : ''} popup_type_${name}`}
      onClick={handleOverlay}
    >
      <div
        className={`popup__container ${
          isAuth ? '' : 'popup__container_padding-extended'
        }`}
      >
        {children}

        <button
          className='popup__button-close'
          type='button'
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Popup;
