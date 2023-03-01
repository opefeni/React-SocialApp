import Shared from '../shared/shared'
import Post from '../post/post'
import './feed.css'

export default function Feed() {
    return(
        <div className='feed'>
            <div className="feedWrapper">
                <Shared />
                <Post />
            </div>
        </div>
    )
}