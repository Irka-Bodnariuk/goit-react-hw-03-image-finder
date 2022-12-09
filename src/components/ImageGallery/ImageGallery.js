import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <>
      <Gallery>
        <ImageGalleryItem items={items} />
      </Gallery>
    </>
  );
};
