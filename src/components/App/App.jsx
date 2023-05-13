import React, { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { fetchImages } from "../../api/fetchApi";
import { Container } from "./App.styled";

export class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query && this.state.query !== "") {
      this.setState({ images: [], page: 1 });
      this.fetchImages();
    }
  }

  fetchImages = (nextPage = 1) => {
    const { query } = this.state;
    this.setState({ isLoading: true });
    fetchImages(query, nextPage)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: nextPage,
          isLoading: false,
        }));
      })
      .catch((error) => {
        console.error("Error: ", error);
        this.setState({ isLoading: false });
      });
  };

  handleLoadMore = () => {
    const { page } = this.state;
    this.fetchImages(page + 1);
  };

  handleSearchSubmit = (query) => {
    this.setState({ query, page: 1, images: [] });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <Container>
          {images.length > 0 && <ImageGallery images={images} />}
          {images.length > 0 && images.length % 12 === 0 && (
            <Button onClick={this.handleLoadMore} isLoading={isLoading} />
          )}
        </Container>
      </>
    );
  }
};
