import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Modal } from "../Modal/Modal";

import { Gallery } from './ImageGallery.styled'

export class ImageGallery extends Component {
  state = {
    selectedImage: null,
  };

  handleOpenModal = (selectedImage) => {
    this.setState({ selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images } = this.props;
    const { selectedImage } = this.state;

    return (
      <>
        <Gallery>
          {images.map((image) => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              tags={image.tags}
              image={image}
              onOpenModal={this.handleOpenModal}
            />
          ))}
        </Gallery>
        {selectedImage && (
          <Modal
            selectedImage={selectedImage}
            onClose={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
