import FeedItem from "./FeedItem"

function Feed({ stories }) {
    // map is an operation for every item in an array do the function
    return <div>
        {stories.map((story1) => {
            return <FeedItem story={story1} />
        })}
    </div>
}

export default Feed