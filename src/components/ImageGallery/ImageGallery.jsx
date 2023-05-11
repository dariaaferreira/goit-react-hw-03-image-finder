import React, { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Modal } from "../Modal/Modal";

import { Gallery } from './ImageGallery.styled'

export class ImageGallery extends Component {
  state = {
    showModal: false,
    selectedImage: null,
  };

  handleOpenModal = (selectedImage) => {
    this.setState({ showModal: true, selectedImage });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, selectedImage: null });
  };

  handleKeyPress = (e) => {
    if (e.key === "Escape") {
      this.handleCloseModal();
    }
  };

  handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      this.handleCloseModal();
    }
  };

  render() {
    const { images } = this.props;
    const { showModal, selectedImage } = this.state;

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
        {showModal && selectedImage && (
          <Modal
            src={selectedImage.largeImageURL}
            alt={selectedImage.tags}
            onClose={this.handleCloseModal}
            onKeyPress={this.handleKeyPress}
            onClickOverlay={this.handleClickOverlay}
          />
        )}
      </>
    );
  }
}
