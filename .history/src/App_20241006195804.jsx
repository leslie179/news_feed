import { useState } from "react";

// this is a json file import (JSON = Javascript Object Notation)
import news_feed from './sample_news_stories.json'; // vite makes this easy: vite is compiling your jsx to regular html/js

// this is javascvript file import
import Feed from './components/Feed';

import "./index.css";

function App() {
  // Get stories from news feed
  const [stories, setStories] = useState(news_feed.results)

  return (
    <div className="App">
      <h1>Random News Feed</h1>
      <Feed 
        stories={stories}
        setStories={setStories}
      />

    </div>

  );
}

export default App;