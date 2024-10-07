import news_feed from './sample_news_stories.json';
import React from 'react';

function App() {

 
  const stories = news_feed.results;

  return (
    
      <div>
        <h1>Best Selling Music Artists</h1>
        <ul>
          {results.map((results, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <h2>{results.title}</h2>
              <img
                src={results.link}
                alt={results.keywords}
                style={{ width: '200px', height: 'auto' }}
              />
              <p>Country: {results.creators}</p>
              <p>Years Active: {results.full_description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default App;
