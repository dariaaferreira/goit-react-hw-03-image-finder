import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Overlay, ModalImg } from "./Modal.styled";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.key === "Escape") {
      this.props.onClose();
    }
  };

  handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { selectedImage } = this.props;
    return (
      <Overlay onClick={this.handleClickOverlay}>
        <ModalImg>
          <img src={selectedImage.largeImageURL} alt={selectedImage.tags} />
        </ModalImg>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  selectedImage: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
