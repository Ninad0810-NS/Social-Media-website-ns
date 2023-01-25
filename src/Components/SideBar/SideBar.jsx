import React from 'react'
import "./SideBar.css";
import { Chat, RssFeed, PlayCircle, Groups, Bookmark, Help, WorkOutline, Event, School } from "@mui/icons-material"
import CloseFriends from '../CloseFriends/CloseFriends';
import { Users } from "../../dummyData"

function SideBar() {
    return (
        <div className='SideBar'>
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className='sidebarIcon' />
                        <span className="sidebarListItemText"> Feed </span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className='sidebarIcon' />
                        <span className="sidebarListItemText"> Chat </span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircle className='sidebarIcon' />
                        <span className="sidebarListItemText"> Videos </span>
                    </li>
                    <li className="sidebarListItem">
                        <Groups className='sidebarIcon' />
                        <span className="sidebarListItemText"> Groups </span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className='sidebarIcon' />
                        <span className="sidebarListItemText"> Bookmarks </span>
                    </li>
                    <li className="sidebarListItem">
                        <Help className='sidebarIcon' />
                        <span className="sidebarListItemText"> Questions </span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcon' />
                        <span className="sidebarListItemText"> Jobs </span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className='sidebarIcon' />
                        <span className="sidebarListItemText"> Events </span>
                    </li>
                    <li className="sidebarListItem">
                        <School className='sidebarIcon' />
                        <span className="sidebarListItemText"> Courses </span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className='sidebarhr' />
                <ul className="sidebarFrindList">
                    <h4 className="closeFriend">Close Friend's</h4>
                    {Users.map(u => (<CloseFriends key={u.id} user={u} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar;