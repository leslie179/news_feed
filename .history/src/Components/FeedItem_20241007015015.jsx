function FeedItem({ story, setStories, key }) {
    return <div className="feed-item">
        <div className="feed-item__close-btn" onClick={() => {
            setStories((stories) => {
                // "stories" is the current state of stories
                const storiesCopy = [...stories]; // this does a deep copy (vs a shallow copy)
                // the ... (spread operator) this will "lift" up all the values to where you place it
                storiesCopy.splice(key, 1) // just a basic array function for removing items. first argument is the index and the second argument is the amount to remove at the eindex

                // triggers the state change
                return storiesCopy
            })
        }}>X</div>
        {/* BEM classes good convention  */}
        {/* Block = feed */}
        {/* element is whats after the underscores = image-wrapper */}
        {/* modifier is whats after two dashes */}
        <div className="feed-item__image-wrapper">
        {story.image_url ? (
  <img 
    src={story.image_url} 
    alt="story" 
    className={story.image_url ? 'has-image' : 'no-image'} 
  />
) : (
  <div className="feed-item__image-placeholder">News Story</div>
)}
        </div>
        <div className="feed-item__content">
            <a href={story.link}><h2 className="title">{story.title}</h2></a>
            <div className="feed-item__creator">
    By: {story.creator && story.creator.length > 0 ? (
        story.creator.map((creator, idx) => (
            <span key={idx}>{creator}&nbsp;</span>
        ))
    ) : (
        <span></span> /* You can use 'Unknown' or leave it blank */
    )}
</div>
            <div>
                {story.description && <p className="feed-description">{story.description}</p>}
            </div>
            </div>
        </div>
}

        export default FeedItem