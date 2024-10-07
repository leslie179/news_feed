function App() {
  // Hardcoded test data, similar to your JSON
  const news_feed = {
    results: [
      {
        title: "Test Story",
        link: "https://example.com",
        keywords: ["Keyword1", "Keyword2"],
        creator: ["John Doe"],
        image_url: null,
        country: ["United States"],
        full_description: "This is a test description."
      }
    ]
  };

  const stories = news_feed.results;

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
