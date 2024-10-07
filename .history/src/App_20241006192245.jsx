// this is a json file import (JSON = Javascript Object Notation)
import news_feed from './sample_news_stories.json'; // vite makes this easy: vite is compiling your jsx to regular 

// this is javascvript file import
import Feed from './components/Feed';

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