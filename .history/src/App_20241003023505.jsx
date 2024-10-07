import news_feed from './sample_news_stories.json'; 

function App() {
  const stories = news_feed.results; 

  return (
    <div>
      <h1>Best Selling Music Artists</h1>
      <ul>
        {artists.map((artist, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h2>{artist.name}</h2>
            <img
              src={artist.photo_url}
              alt={artist.name}
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
