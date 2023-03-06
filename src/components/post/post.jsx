import { MoreVert } from '@mui/icons-material';
import './post.css'
import { Users } from '../../dummyData';
import { useState } from 'react';

export default function Post({post}){
    const user = Users.filter(u=> u.id===post.userId)
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    //using arrow function to create like handler
    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLiked(!isLiked)
    }
    return(
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={user[0].profilePicture} alt="" className="postProfileImg" />
                        <span className="postUsername">{user[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">{post.desc}</div>
                    <img src={post.photo} alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <img src="/assets/heart.png" alt="" onClick={likeHandler} className="likeIcon" />
                        <span className="postLikeCounter">{like} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postComment">{post.comment} comments</div>
                    </div>
                </div>
            </div>
        </div>
    );
}