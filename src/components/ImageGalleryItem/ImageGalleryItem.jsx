export const ImageGalleryItem = ({ webformatURL, tags, onOpenModal }) => {

  const handleClick = () => {
    onOpenModal();
  };

  return (
    <li className="gallery__item">
      <img
        src={webformatURL}
        alt={tags}
        className="gallery__image"
        onClick={handleClick}
      />
    </li>
  );
};
