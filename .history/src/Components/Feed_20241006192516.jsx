import FeedItem from "./FeedItem"

// { stories } = isnt a definition as much as we're deconstructing the argument
function Feed({ stories }) {
    // map is an operation for every item in an array do the function
    return <div>
        {stories.map((story) => {
            return <FeedItem story={story} />
        })}
    </div>
}

export default Feed