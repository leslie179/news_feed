function FeedItem({ story }) {
    return <div className="feed">
        {/* BEM classes good convention  */}
        {/* Block = feed */}
        {/* element is whats after the underscores = image-wrapper */}
        {/* modifier is whats after two dashes */}
        <div className="feed__image-wrapper">
            {story.image_url && <img src={story.image_url} />}
        </div>
        <div className="feed__content">
            <h2>{story.title}</h2>
            <div className="feed__creator">By: {story.creator && story.creator.map((creator) => 
                <span>{creator}&nbsp;</span>
            )}</div>
            <
        </div>
    </div>
}

export default FeedItem