import news_feed from '<div className="" />sample_news_stories.json'; 

function App() {
  const stories = news_feed.results; 

  return (
    <div>
      <h1>Best Selling Music Artists</h1>
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
