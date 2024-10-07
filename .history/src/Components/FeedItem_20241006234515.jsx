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
                
              
            </div>

            {/* Description on a new row */}
           
        </div>
    );
}

export default FeedItem;
