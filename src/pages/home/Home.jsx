import Feed from "../../components/feed/feed";
import LeftBar from "../../components/leftbar/leftbar";
import RightBar from "../../components/rightbar/rightbar";
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