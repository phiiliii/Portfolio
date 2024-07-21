// src/components/PhotoTile.js

import React from 'react';
import './PhotoTile.css';
import profilePhoto from '../assets/imgs/Photo.jpg'; // Adjust the path as necessary

const PhotoTile = () => {
  return (
    <div className="photo-tile">
      <img src={profilePhoto} alt="Philipose Alexander" className="profile-photo" />
    </div>
  );
};

export default PhotoTile;
