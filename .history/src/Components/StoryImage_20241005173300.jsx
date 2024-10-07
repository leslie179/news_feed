export default function ({ imagePath }) {
    return (<>
        <div className='story-image-block'>
            <img src={imagePath == null ? 'https://placehold.co/300x200' : imagePath} className='story-image' />
        </div>
    </>)
}