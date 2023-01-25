import React from 'react';
import './Profile.css';
import Rightbar from '../../Components/Rightbar/Rightbar';
import SideBar from '../../Components/SideBar/SideBar';
import Topbar from '../../Components/topbar/topbar';
import Feed from '../../Components/Feed/Feed';


function Profile() {
    return (
        <div>
            <Topbar />
            <div className="Profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profilecoverImage" src="assets/post/3.jpeg" alt="error" />
                            <img className="profileUserImage" src="assets/person/3.jpeg" alt="error" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Talor Swift</h4>
                            <span className="profileInfoDesc">professional American Singer </span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile