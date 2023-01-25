import React from 'react'
import "./Online.css";

function Online({ user }) {
    return (

        <li className="rightbarfriend">
            <div className="rightbarprofileimageContainer">
                <img src={user.profilePicture} alt="" className='rightbarprofileImage' />
                <span className="rightbaronline"></span>
            </div>
            <span className="rightbaruserName">{user.username}</span>
        </li>
    )
}

export default Online;
