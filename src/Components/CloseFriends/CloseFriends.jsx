import React from 'react';
import './CloseFriends.css';



function CloseFriends({ user }) {
    return (
        <li className="sidebarFriend">

            <img className='sidebarFriendImg' src={user.profilePicture} alt="error" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriends;