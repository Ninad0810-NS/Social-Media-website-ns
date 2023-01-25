import React from 'react';
import "./Rightbar.css";
import { Users } from "../../dummyData"
import Online from '../Online/Online';

function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
                <div className="bithdayContainer">
                    <img src="../assets/gift.png" alt="error" className='bithdayImage' />
                    <span className="bithdaytext">
                        <b>Ninad Chikate</b> and <b> 3 and other friends </b> have a birthday today.
                    </span>
                </div>
                <img className='rightbaradd' src="../assets/ad.png" alt="error" />
                <h4 className="roightbarOnlinefriendHeading">Online Friend's</h4>
                <ul className="rightbarfriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    };


    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="RightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Toronto</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Canada</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                    <h4 className="rightbarTitle">User friends</h4>
                    <div className="rightbarFollowings">
                        <div className="rightbarFollowing">
                            <img src="assets/person/4.jpeg" alt="" className="rightbarfollowingImage" />
                            <span className="rightbarfollowingName">Selena Gomez</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/4.jpeg" alt="" className="rightbarfollowingImage" />
                            <span className="rightbarfollowingName">Selena Gomez</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/4.jpeg" alt="" className="rightbarfollowingImage" />
                            <span className="rightbarfollowingName">Selena Gomez</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/4.jpeg" alt="" className="rightbarfollowingImage" />
                            <span className="rightbarfollowingName">Selena Gomez</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/4.jpeg" alt="" className="rightbarfollowingImage" />
                            <span className="rightbarfollowingName">Selena Gomez</span>
                        </div>
                        <div className="rightbarFollowing">
                            <img src="assets/person/4.jpeg" alt="" className="rightbarfollowingImage" />
                            <span className="rightbarfollowingName">Selena Gomez</span>
                        </div>

                    </div>
                </div>
            </>
        )
    };

    return (
        <div className='Rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar