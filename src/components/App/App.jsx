import React, { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { fetchImages } from "../../api/fetchApi";
import { Container } from "./App.styled";
import { Loader } from "../Loader/Loader";

export class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    fetchImages(query, page)
      .then((images) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
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
    this.setState({ page: page + 1 });
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
          {isLoading && <Loader visible={isLoading} />}
          {images.length > 0 && !isLoading && (
            <Button onClick={this.handleLoadMore} />
          )}
        </Container>
      </>
    );
  }
  
};
