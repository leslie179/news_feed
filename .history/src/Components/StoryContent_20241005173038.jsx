export default function StoryContent({ story }) {
    return (<>
        <div className='story-content-block'>
            <h2>
                <a href={story.link} target="_blank">
                    {story.title}
                </a>
                </h2>
            <div>By:  {story.creator}</div>
            <div>{story.description}</div>
        </div>
    </>)
}