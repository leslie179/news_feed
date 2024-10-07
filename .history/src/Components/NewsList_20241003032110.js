import React from 'react';
import NewsCard from './NewsCard';

function NewsList({ stories }) {
  return (
    <div className="news-list">
      {stories.map((story, index) => (
        <NewsCard
          key={index}
          title={story.title}
          description={story.description}
          imageUrl={story.image_url}
        />
      ))}
    </div>
  );
}

export default NewsList;
