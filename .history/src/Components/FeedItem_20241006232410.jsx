function FeedItem({ story, setStories, index }) {
    return (
        <div className="feed-item">
            <div
                className="feed-item__close-btn"
                onClick={() => {
                    setStories((stories) => {
                        const storiesCopy = [...stories]; // This is a shallow copy of the array
                        storiesCopy.splice(index, 1); // Remove the story at the index
                        return storiesCopy;
                    });
                }}
            >
                X
            </div>
            <div className="feed-item__image-wrapper">
                {story.image_url ? (
                    <img src={story.image_url} alt="story" />
                ) : (
                    <div className="feed-item__image-placehold">News Story</div>
                )}
            </div>
            <div className="feed-item__content">
                <a href={story.link}>
                    <h2>{story.title}</h2>
                </a>
                {story.creator && (
                    <div className="feed-item__creator">
                        By: {story.creator.map((creator, idx) => (
                            <span key={idx}>{creator}&nbsp;</span>
                        ))}
                    </div>
                )}
                {story.description && <p>{story.description}</p>}
            </div>
        </div>
    );
}

export default FeedItem;
