// src/components/ExpandablePhotoGallery.js

import React, { useState, useRef } from 'react';
import './ExpandablePhotoGallery.css';

const ExpandablePhotoGallery = ({ images, instagramUsername }) => {

  const [enlargedImage, setEnlargedImage] = useState(null);
  const galleryRef = useRef(null);

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = galleryRef.current.clientWidth * 0.33 * direction;
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  return (
    <div className="expandable-photo-gallery">
      <button className="scroll-button left" onClick={() => scrollGallery(-1)}>&lt;</button>
      <div className="gallery-container" ref={galleryRef}>
        <div className="gallery-wrapper">
          {images.map((image, index) => (
            <div key={index} className="gallery-item" onClick={() => handleImageClick(image)}>
              <img src={image} alt={`Gallery item ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="scroll-button right" onClick={() => scrollGallery(1)}>&gt;</button>
      <button className="view-more-button" onClick={() => window.open(`https://www.instagram.com/${instagramUsername}/`, '_blank')}>
        View More on Instagram
      </button>
      {enlargedImage && (
        <div className="enlarged-image-container" onClick={() => setEnlargedImage(null)}>
          <img src={enlargedImage} alt="Enlarged view" />
        </div>
      )}
    </div>
  );
};

export default ExpandablePhotoGallery;