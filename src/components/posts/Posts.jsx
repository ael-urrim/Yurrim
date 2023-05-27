import "../../main.scss";
import "./posts.scss";

import { Link } from "react-router-dom";

// Icons
import { FaEllipsisH, FaRegCommentAlt, FaRegEye } from "react-icons/fa";
import { BsHeart, BsShare } from "react-icons/bs";

//Verified badge
import VERIFIED from "../../media/icons/verified.png";

// import { useState } from "react";

const Posts = ({ post }) => {
  return (
    <div className="posts-card">
      {/* Left side */}
      <div className="left">
        <img src={post.userImg} alt="" />
      </div>

      {/* Right side */}
      <div className="right">
        <div className="upper">
          <div className="user-info">
            <div className="name">
              <div className="display-name">
                <Link to={`/profile/${post.userId}`} className="link">
                  {post.name}
                </Link>
                <img src={VERIFIED} alt="" />
              </div>
              <div className="time">{post.time}</div>
            </div>
            <div className="options">
              <FaEllipsisH className="icon" />
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="post-text">{post.content}</div>
          <div className="post-img">
            <img src={post.postImg} alt="" />
          </div>
        </div>
        <div className="bottom">
          <div className="likes post-reactions" title="Like">
            <Link to={`/post-like/${post.postId}`} className="link">
              <BsHeart className="icon" />
              <p>500</p>
            </Link>
          </div>
          <div className="comments post-reactions" title="Comment">
            <Link to={`/post/${post.postId}`} className="link">
              <FaRegCommentAlt className="icon" />
              <p>100</p>
            </Link>
          </div>
          <div className="shares post-reactions" title="Share">
            <Link to={`/share-post/${post.postId}`} className="link">
              <BsShare className="icon" />
              <p>150</p>
            </Link>
          </div>
          <div className="views post-reactions" title="Views">
            <FaRegEye className="icon" />
            <p>2k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
