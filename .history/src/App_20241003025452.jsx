import news_feed from './sample_news_stories.json'; // Import the whole JSON file

function App() {
  const stories = news_feed.results; // Access the 'results' array

  return (
    <div>
      <h1>News Stories</h1> {/* Updated heading */}
      <ul>
        {stories.map((story, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h2>{story.title}</h2>
            {story.image_url ? (
              <img
                src={story.image_url}
                alt={story.keywords ? story.keywords.join(', ') : story.title}
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

