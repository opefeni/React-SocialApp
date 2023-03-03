import Feed from "../../components/feed/Feed";
import LeftBar from "../../components/leftbar/Leftbar";
import RightBar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import './home.css'

export default function Home(){
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <LeftBar/>
                <Feed/>
                <RightBar/>
            </div>
        </>
        
    );
}