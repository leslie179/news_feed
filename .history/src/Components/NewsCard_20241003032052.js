import React from 'react';

function NewsCard({ title, description, imageUrl }) {
  return (
    <div className="news-card">
      <h2>{title}</h2>
      {imageUrl ? (
        <img src={imageUrl} alt={title} style={{ width: '200px', height: 'auto' }} />
      ) : (
        <p>No image available</p>
      )}
      <p>{description}</p>
    </div>
  );
}

export default NewsCard;
