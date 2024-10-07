import news_feed from './sample_news_stories.json'; 

function App() {
  const stories = news_feed.results; 

  return (
    <div>
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
    </div>
  );
}

export default App;
