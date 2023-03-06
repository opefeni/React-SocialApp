import './leftbarFriend.css'

export const LeftbarFriend = ({friend}) => {
  return (
    <li className="leftbarFriend">
        <img src={friend.profilePicture} alt="" className="leftbarFriendImg" />
        <span className="leftbarFriendName"> {friend.username}</span>
    </li>
  )
}
