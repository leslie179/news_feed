function FeedItem({ story, setStories, index }) {
    return (
        <div className="feed-item">
            <div
                className="feed-item__close-btn"
                onClick={() => {
                    setStories((stories) => {
                        const storiesCopy = [...stories]; // Shallow copy of the array
                        storiesCopy.splice(index, 1); // Remove the story at the index
                        return storiesCopy;
                    });
                }}
            >
                X
            </div>

            {/* Image, title, and author in one row */}
            <div className="feed-item__top-row">
                <div className="feed-item__image-wrapper">
                    {story.image_url ? (
                        <img src={story.image_url} alt="story" />
                    ) : (
                        <div className="feed-item__image-placeholder">News Story</div>
                    )}
                </div>
                 <div className="feed-item__description">
                {story.description && <p>{story.description}</p>}
            </div>
                <div className="feed-item__title-author-wrapper">
                    <a href={story.link}><h2>{story.title}</h2></a>
                    {story.creator && (
                        <div className="feed-item__creator">
                            By: {story.creator.map((creator, idx) => (
                                <span key={idx}>{creator}&nbsp;</span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Description on a new row */}
           
        </div>
    );
}

export default FeedItem;
