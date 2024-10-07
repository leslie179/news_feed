function FeedItem({ story }) {
    return <div className="feed">
        <div className="feed ">
            {story.image_url && <img src={story.image_url} />}
        </div>
        <h2>{story.title}</h2>
    </div>
}

export default FeedItem