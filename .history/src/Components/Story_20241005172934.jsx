import StoryImage from "./StoryImage"
import StoryContent from './StoryContent'
import CloseButton from "./closeButton";

export default function Story({ story }) {

    return (<>

        <div className="story-block">
            <StoryImage imagePath={story.image_url} />
            <StoryContent story={story} />
            <CloseButton />
        </div>
    </>)
}