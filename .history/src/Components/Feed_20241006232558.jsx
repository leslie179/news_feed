import { useState } from "react";

// this is a json file import (JSON = Javascript Object Notation)
import news_feed from '../sample_news_stories.json'; // vite makes this easy: vite is compiling your jsx to regular html/js


import FeedItem from "./FeedItem"

/* { stories } = isnt a definition as much as we're deconstructing the 
1st argument to get the "stories" key into a "stories" variable */
function Feed() {
    const [stories, setStories] = useState(news_feed.results)
    // map is an operation for every item in an array do the function
    // <FeedItem /> just calls the FeedItem function
    return <div>
        {stories.map((story, i) => {
            return <FeedItem story={story} setStories={setStories} key={i} /> 
        })}
    </div>
    
}

export default Feed