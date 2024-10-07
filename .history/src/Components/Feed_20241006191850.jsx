import FeedItem from "./FeedItem"

function Feed({ stories }) {
    // map is an operation for every item in an array do the function
    return <div>
        {stories.map((story) => {
            return <FeedItem story={story} />
        })}
    </div>
}

export default Feed