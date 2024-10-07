import React, { useState, useEffect } from 'react';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Fetch the JSON data dynamically
    fetch('/sample_news_stories.json')  // Ensure the file is in the public folder
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log('JSON data:', data);  // Log the data to ensure it's being fetched correctly
        setStories(data.results);
      })
      .catch((error) => {
        console.error('Error loading JSON:', error);  // Log any errors
      });
  }, []);

  if (stories.length === 0) {
    return <div>No stories available.</div>;
  }

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
                alt={story.keywords.join(', ')}
                style={{ width: '200px', height: 'auto' }}
              />
            ) : (
              <p>No image available</p>
            )}
            <p>Country: {story.country.join(', ')}</p>
            <p>Description: {story.full_description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
