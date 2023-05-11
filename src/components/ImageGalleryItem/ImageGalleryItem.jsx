import React from "react";

export const ImageGalleryItem = ({ webformatURL, tags, onOpenModal, image }) => (
  <li className="ImageGalleryItem">
    <img
      src={webformatURL}
      alt={tags}
      className="ImageGalleryItem-image"
      onClick={() => onOpenModal(image)}
    />
  </li>
);