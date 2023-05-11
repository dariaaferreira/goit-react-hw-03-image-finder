import { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";

export class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.setState({ images: [], page: 1 });
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=34850970-a8e6c100d46912143d60db3a6&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...data.hits],
          isLoading: false,
        }));
      });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }), this.fetchImages);
  };

  handleSearchSubmit = (query) => {
    this.setState({ query: query });
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery images={images} />
        {isLoading ? (
          <Loader />
        ) : images.length > 0 ? (
          <Button onClick={this.handleLoadMore} isLoading={isLoading} />
        ) : null}
      </div>
    );
  }
}
