import news_feed from './sample_news_stories.json'; // Ensure this path is correct

function App() {
  // Log the JSON data to verify it's loaded correctly
  console.log("Loaded news feed data:", news_feed);

  const stories = news_feed.results;

  // Check if stories exist and if the length is correct
  if (!stories || stories.length === 0) {
    return <div>No stories available.</div>;
  }

  return (
    <div>
      <h1>Best Selling Music Artists</h1>
      <ul>
        {stories.map((story, index) => (
          <li key={index} style={{ marginBottom: '20px' }}>
            <h2>{story.title}</h2>
            {/* Check if the image URL exists before rendering */}
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
