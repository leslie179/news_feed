function FeedItem({ story }) {
    return <div className="feed">
       {story.image_url && <img src={story.image_url} />}
        <h2>{story.title}</h2>
    </div>
}

export default FeedItem