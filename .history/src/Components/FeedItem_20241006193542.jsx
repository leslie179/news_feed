function FeedItem({ story }) {
    return <div className="feed">
       {story.image_url && <img src={story.image_url} /> && 1 && 2}
        <h2>{story.title}</h2>
    </div>
}

export default FeedItem