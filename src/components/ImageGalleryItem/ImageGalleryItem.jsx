import { useState } from "react";

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags, onOpenModal }) => {

  const handleClick = () => {
    onOpenModal();
  };

  return (
    <li className="gallery__item">
      <img
        src={webformatURL}
        alt={tags}
        className="gallery__image"
        onClick={handleClick}
      />
    </li>
  );
};
