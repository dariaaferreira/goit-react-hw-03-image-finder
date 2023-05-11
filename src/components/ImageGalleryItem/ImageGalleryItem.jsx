import React from "react";

import { GalleryItem, GalleryItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ webformatURL, tags, onOpenModal, image }) => (
  <GalleryItem>
    <GalleryItemImage
      src={webformatURL}
      alt={tags}

      onClick={() => onOpenModal(image)}
    />
  </GalleryItem>
);