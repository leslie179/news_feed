import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('/sample_news_stories.json')  // Ensure this is the correct path to your JSON file
      .then(response => response.json())
      .then(data => setStories(data.results))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <NewsList stories={stories} />
    </div>
  );
}

export default App;
