import React, { useState } from 'react';
import './InstagramGallery.css';

const InstagramGallery = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  return (
    <div className="instagram-gallery">
      <div className="gallery-grid">
        {posts.map((post) => (
          <div key={post.id} className="gallery-item" onClick={() => openPost(post)}>
            <img src={post.imageUrl} alt={`Post ${post.id}`} />
          </div>
        ))}
      </div>
      {selectedPost && (
        <div className="post-modal" onClick={closePost}>
          <div className="post-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedPost.imageUrl} alt={`Post ${selectedPost.id}`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default InstagramGallery;