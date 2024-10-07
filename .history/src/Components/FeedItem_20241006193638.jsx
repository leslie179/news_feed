function FeedItem({ story }) {
    const x = false && 2
    return <div className="feed">
       {story.image_url && <img src={story.image_url} />}
        <h2>{story.title}</h2>
    </div>
}

export default FeedItem