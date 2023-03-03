import { MoreVert } from '@mui/icons-material';
import './post.css'

export default function Post(){
    return(
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                        <span className="postUsername">Gbeminiyi Ajayi</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <div className="postText">Hey!, its my first post on react social app</div>
                    <img src="/assets/post/1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" />
                        <img src="/assets/heart.png" alt="" className="likeIcon" />
                        <span className="postLikeCounter">32 likes</span>
                    </div>
                    <div className="postBottomRight">
                        <div className="postComment">9 comments</div>
                    </div>
                </div>
            </div>
        </div>
    );
}