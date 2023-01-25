import React from 'react'
import './Share.css'
import {
    PermMedia, Label, Room, EmojiEmotions, Celebration
} from '@mui/icons-material'


function Share() {
    return (

        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className='shareprofileImg' src="assets/person/5.jpeg" alt="error" />
                    <input type="text" placeholder="What's in your mind Srushti?" className='shareInput' />
                </div>
                <hr className='sharehr' />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='tomato' className='shareOptionLogo' />
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='blue' className='shareOptionLogo' />
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='green' className='shareOptionLogo' />
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className="shareOption">
                            <Celebration htmlColor=' #FFA500' className='shareOptionLogo' />
                            <span className='shareOptionText'>Activity</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod' className='shareOptionLogo' />
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}

export default Share