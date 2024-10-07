function FeedItem({ story }) {
    return <div className="feed-item">
        <div className="fee">X</div>
        {/* BEM classes good convention  */}
        {/* Block = feed */}
        {/* element is whats after the underscores = image-wrapper */}
        {/* modifier is whats after two dashes */}
        <div className="feed-item__image-wrapper">
            {story.image_url && <img src={story.image_url} />}
        </div>
        <div className="feed-item__content">
            <a href={story.link}><h2>{story.title}</h2></a>
            {story.creator && <div className="feed-item__creator">By: {story.creator.map((creator) => 
                <span>{creator}&nbsp;</span>
            )}</div>}
            {story.description && <p>{story.description}</p>}
        </div>
    </div>
}

export default FeedItem