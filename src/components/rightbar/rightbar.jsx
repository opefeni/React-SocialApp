import { Users } from '../../dummyData';
import { Online } from '../online/Online';
import './rightbar.css'

export default function RightBar(){
    return(
        <div className='rightbar'>
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Idowu</b> and <b>3 other friends</b> have birthday today
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    { Users.map(u=>(
                        <Online key={u.id} user={u} />
                    ))}
                  
                </ul>
            </div>
        </div>
    );
}