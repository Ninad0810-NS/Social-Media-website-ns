import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

function topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className='logo'>NS-Social</span>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className='searchIcon' />
                    <input placeholder='Search for frinds, post or video' className='searchInput' />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className='topbarLink'>Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarsIconItem">
                        <Person />
                        <span className="topbariconBadge">1</span>
                    </div>
                    <div className="topbarsIconItem">
                        <Chat />
                        <span className="topbariconBadge">4</span>
                    </div>
                    <div className="topbarsIconItem">
                        <Notifications />
                        <span className="topbariconBadge">7</span>
                    </div>
                </div>
                <img src="/assets/person/5.jpeg" alt="error" className='topbarImage' />
            </div>
        </div>
    )
}

export default topbar;