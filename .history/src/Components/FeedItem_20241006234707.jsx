function FeedItem({ story, setStories, index }) {
    return (
        <div className="feed-item">
            <div 
                className="feed-item__close-btn"
                onClick={() => {
                    setStories((stories) => {
                        // "stories" is the current state of stories
                        const storiesCopy = [...stories]; // this does a shallow copy (not deep copy)
                        // the ... (spread operator) this will "lift" up all the values to where you place it
                        storiesCopy.splice(index, 1); // just a basic array function for removing items. first argument is the index and the second argument is the amount to remove at the index

                        // triggers the state change
                        return storiesCopy;
                    });
                }}
            >
                X
            </div>
            
            {/* BEM classes good convention */}
            {/* Block = feed */}
            {/* element is what's after the underscores = image-wrapper */}
            {/* modifier is what's after two dashes */}

            <div className="feed-item__top-row">
                <div className="feed-item__image-wrapper">
                    {story.image_url ? (
                        <img src={story.image_url} alt="story" />
                    ) : (
                        <div className="feed-item__image-placeholder">News Story</div>
                    )}
                </div>
                <div className="feed-item__title-wrapper">
                <div className="feed-description">
                    {story.description && <p>{story.description}</p>}
                </div>
                </div>
            </div>

            <div className="feed-item__content">
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
    );
}

export default FeedItem;
