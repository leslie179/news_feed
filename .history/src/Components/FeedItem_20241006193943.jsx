function FeedItem({ story }) {
    return <div className="feed">
        {/* BEM classes good convention  */}
        {/* Block = feed */}
        <div className="feed__image-wrapper">
            {story.image_url && <img src={story.image_url} />}
        </div>
        <div className="feed__content">
            <h2>{story.title}</h2>
        </div>
    </div>
}

export default FeedItem