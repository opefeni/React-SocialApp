
import { Bookmark, Chat, Event, Group, HelpOutline, RssFeed, School, VideoCall, WorkOutline } from '@mui/icons-material';
import { Users } from '../../dummyData';
import { LeftbarFriend } from '../leftbarFriends/LeftbarFriend';
import './leftbar.css'

export default function LeftBar() {
    return(
            <div className='leftbar'>
                <div className="leftbarWrapper">
                    <ul className="leftbarList">
                        <li className="leftbarListItem">
                            <RssFeed className='leftbarIcon'/>
                            <span className="leftbarItemName"> Feeds </span>
                        </li>
                        <li className="leftbarListItem">
                            <Chat className='leftbarIcon'/>
                            <span className="leftbarItemName"> Chat </span>
                        </li>
                        <li className="leftbarListItem">
                            <VideoCall className='leftbarIcon'/>
                            <span className="leftbarItemName"> Videos </span>
                        </li>
                        <li className="leftbarListItem">
                            <Group className='leftbarIcon'/>
                            <span className="leftbarItemName"> Groups </span>
                        </li>
                        <li className="leftbarListItem">
                            <Bookmark className='leftbarIcon'/>
                            <span className="leftbarItemName"> Bookmarks </span>
                        </li>
                        <li className="leftbarListItem">
                            <HelpOutline className='leftbarIcon'/>
                            <span className="leftbarItemName"> Questions </span>
                        </li>
                        <li className="leftbarListItem">
                            <WorkOutline className='leftbarIcon'/>
                            <span className="leftbarItemName"> Jobs </span>
                        </li>
                        <li className="leftbarListItem">
                            <Event className='leftbarIcon'/>
                            <span className="leftbarItemName"> Events </span>
                        </li>
                        <li className="leftbarListItem">
                            <School className='leftbarIcon'/>
                            <span className="leftbarItemName"> Courses </span>
                        </li>
                    </ul>
                    <button className='leftbarButton'> Show More</button>
                    <hr  className='leftbarHr'></hr>
                    <ul className="leftbarFriendList">
                           {
                              Users.map(u=>(
                                <LeftbarFriend key={u.id} friend={u}/>
                              ))
                           }
                           
                    </ul>
                </div>
            </div>
    );
}