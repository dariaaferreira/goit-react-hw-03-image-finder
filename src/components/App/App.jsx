import { Component } from "react";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";
import { fetchImages } from "../../api/fetchApi";



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
