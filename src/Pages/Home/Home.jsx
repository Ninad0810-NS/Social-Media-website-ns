import './Home.css';
import React from 'react';
import Rightbar from '../../Components/Rightbar/Rightbar';
import SideBar from '../../Components/SideBar/SideBar';
import Topbar from '../../Components/topbar/topbar';
import Feed from '../../Components/Feed/Feed';


function Home() {
    return (
        <div>
            <Topbar />
            <div className="homeContainer">
                <SideBar />
                <Feed />
                <Rightbar />
            </div>
        </div>
    )
}

export default Home;