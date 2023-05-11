import React, { useEffect } from "react";
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export const Modal = ({ src, alt, onClose }) => {

  useEffect(() => {
    const instance = basicLightbox.create(`
      <img src="${src}" alt="${alt}" width="800" height="600">
    `)

    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        onClose();
      }
    }

    const handleClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }

    instance.show()

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClick);

    return () => {
      instance.close();
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClick);
    }
  }, [src, alt, onClose]);

  return (
    <div className="overlay">
      <div className="modal"></div>
    </div>
  );
};
