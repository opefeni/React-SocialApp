
import Feed from "../../components/feed/Feed";
import LeftBar from "../../components/leftbar/Leftbar";
import RightBar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import  './profile.css'

const Profile = () => {
  return (
    <>
        <Topbar/>
        <div className="profile">
            <LeftBar/>
            <div className="profileRight">
                <div className="profileRightTop">
                  <div className="profileCover">
                    <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
                    <img src="assets/person/7.jpeg" alt="" className="profileUserImg" />
                  </div>
                  <div className="profileInfo">
                    <h4 className="profileInfoName">Gbeminiyi Ajayi</h4>
                    <span className="profileInfoDesc">Hello my friends!</span>
                  </div>
                  
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <RightBar/>
                </div>

                
            </div>
            
        </div>
    </>
            
       
  
  )
}

export default Profile