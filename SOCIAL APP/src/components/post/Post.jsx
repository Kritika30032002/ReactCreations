import React from 'react'
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { Posts } from "../../dummyData";
import { Users } from "../../dummyData";
import { useState } from 'react';


const Post = ({post}) => {

    const [like,setLike] = useState(post.like)
    const [isLiked,setIsLiked] = useState(false)
  
    const likeHandler =()=>{
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
        console.log(like)
    }
    

  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                <span className="postUsername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>

                </div>
                <div className="postTopRight">
                    <MoreVertIcon className=''/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    {post?.desc}


                </span>
                <img className="postImg" src={post.photo} alt="" />

            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                    <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                    <span className="postLikeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comment} comments</span>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Post