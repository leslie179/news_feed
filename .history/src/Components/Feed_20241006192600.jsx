import FeedItem from "./FeedItem"

/* { stories } = isnt a definition as much as we're deconstructing the 
1st argument to get the stories key into a stories variable*/
function Feed({ stories }) {
    // map is an operation for every item in an array do the function
    return <div>
        {stories.map((story) => {
            return <FeedItem story={story} />
        })}
    </div>
}

export default Feed