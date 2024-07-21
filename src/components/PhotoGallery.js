import React, { useState } from 'react';
import { Gallery } from 'react-grid-gallery';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const PhotoGallery = ({ images, category }) => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const prevIndex = (index + images.length - 1) % images.length;

  const handleClick = (index) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <h3>{category}</h3>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={180}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          nextSrc={images[nextIndex].original}
          prevSrc={images[prevIndex].original}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
};

export default PhotoGallery;