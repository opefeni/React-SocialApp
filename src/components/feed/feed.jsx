import Shared from '../shared/Shared'
import Post from '../post/Post'
import './feed.css'

export default function Feed() {
    return(
        <div className='feed'>
            <div className="feedWrapper">
                <Shared />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}