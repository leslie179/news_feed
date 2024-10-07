import news_feed from './sample_news_stories.json';
import React from 'react';

function App() {

 
  const stories = news_feed.results;

  return (
    <div className="App">
      <ul>
        {artists.map((artist, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h2>{title}</h2>
            <img
              src={results.link}
              alt={results.name}
              style={{ width: '200px', height: 'auto' }}
            />
            <p>Country: {artist.country}</p>
            <p>Years Active: {artist.years_active}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
