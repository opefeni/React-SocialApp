import Shared from '../shared/Shared'
import Post from '../post/Post'
import './feed.css'
import { Posts } from '../../dummyData'

export default function Feed() {
    return(
        <div className='feed'>
            <div className="feedWrapper">
                <Shared />
                { Posts.map(p=>(
                    <Post key={p.id} post={p} />
                ))}
                
                
            </div>
        </div>
    )
}