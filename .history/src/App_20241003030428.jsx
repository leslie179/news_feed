import React from 'react';
import news_feed from './sample_news_stories.json';  // Import JSON

function App() {
  const stories = news_feed.results;  // Accessing the results array in JSON

  return (
    <div>
      <h1>News Stories</h1>
      <ul>
        {stories.map((story, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h2>{story.title}</h2>
            {story.image_url ? (
              <img
                src={story.image_url}
                alt={story.title}
                style={{ width: '200px', height: 'auto' }}
              />
            ) : (
              <p>No image available</p>
            )}
            <p>Country: {story.country.join(', ')}</p>
            <p>Description: {story.full_description || story.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
