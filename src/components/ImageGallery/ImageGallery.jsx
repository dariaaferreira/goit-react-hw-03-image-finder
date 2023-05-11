import { Component } from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";
import { Modal } from "../Modal/Modal"

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

  render() {
    const { images } = this.props;
    const { showModal, selectedImage } = this.state;

    return (
      <>
        <ul className="gallery">
          {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              tags={tags}
              onOpenModal={() => this.handleOpenModal({ webformatURL, largeImageURL, tags })}
            />
          ))}
        </ul>
        {showModal && selectedImage && (
          <Modal
            src={selectedImage.largeImageURL}
            alt={selectedImage.tags}
            onClose={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}
