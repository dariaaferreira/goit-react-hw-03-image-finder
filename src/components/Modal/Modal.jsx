import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Overlay, ModalImg } from "./Modal.styled";

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.props.onKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.props.onKeyPress);
  }

  render() {
    const { src, alt, onClickOverlay } = this.props;

    return (
      <Overlay onClick={onClickOverlay}>
        <ModalImg>
          <img src={src} alt={alt} />
        </ModalImg>
      </Overlay>
    );
  }
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  onClickOverlay: PropTypes.func.isRequired,
};