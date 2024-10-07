import news_feed from './sample_news_stories.json';
import Feed from './components/NewsCard';
function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <Feed stories={stories} />

    </div>

  );
}

export default App;