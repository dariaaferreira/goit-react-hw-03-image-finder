import React from "react";
import PropTypes from 'prop-types';

import { GalleryItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ webformatURL, tags, onOpenModal, image }) => (
  <li>
    <GalleryItemImage
      src={webformatURL}
      alt={tags}
      onClick={() => onOpenModal(image)}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
