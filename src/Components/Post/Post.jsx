import React from 'react';
import './Post.css';
import { MoreVert } from "@mui/icons-material";
import { Users } from '../../dummyData';
import { useState } from 'react';

function Post({ post }) {
    const [like, setLike] = useState(post.like)
    const [isLike, setIsLike] = useState(false)


    const likeHandler = () => {
        setLike(isLike ? like - 1 : like + 1);
        setIsLike(!isLike);
    }

    return (
        <div className='Post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="posttopLeft">
                        <img src={Users.filter(u => u.id === post?.userId)[0].profilePicture} alt="error" className='postProfileImg' />
                        <span className="postProfileName">
                            {Users.filter(u => u.id === post?.userId)[0].username}
                        </span>
                        <span className="postProfileDate">{post.date}</span>
                    </div>
                    <div className="posttopRight">
                        <MoreVert className='posttoprightLogo' />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className='postImage' src={post.photo} alt="error" />
                </div>
                <div className="postBottom">
                    <div className="postbottomLeft">
                        <img src="../assets/like.png" className='postbottomlikeIcon' onClick={() => likeHandler()} alt="error" />
                        <img src="../assets/heart.png" className='postbottomlikeIcon' onClick={() => likeHandler()} alt="error" />
                        <span className="postLikeCounter">{like} people like it</span>
                    </div>
                    <div className="postbottomRight">
                        <span className="postbottomcomments">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;