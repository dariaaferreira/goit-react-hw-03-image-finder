import React, { Component } from "react";
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