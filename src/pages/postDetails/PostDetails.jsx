import "./postdetails.scss";

// Icons
import {
  FaEllipsisH,
  FaRegCommentAlt,
  FaRegEye,
  FaReplyAll,
} from "react-icons/fa";
import {
  BsHeart,
  BsShare,
  BsFillFlagFill,
  BsLink45Deg,
  BsEyeSlashFill,
} from "react-icons/bs";
import { BiCurrentLocation, BiBlock } from "react-icons/bi";
import { AiOutlineClose, AiFillNotification } from "react-icons/ai";
import GALLERY from "../../media/icons/pic-upload.png";

import USER1 from "../../media/images/user1.jpg";
import USER2 from "../../media/images/user2.jpg";
import USER3 from "../../media/images/user3.jpg";

// Post Images
import POSTIMG1 from "../../media/images/postimg1.jpg";
import POSTIMG3 from "../../media/images/postimg3.jpg";

import { Link } from "react-router-dom";

//Verified badge
import VERIFIED from "../../media/icons/verified.png";

import { useState, useEffect } from "react";

const PostDetails = () => {
  // For modal popup
  const [openPopup, setOpenPopup] = useState(false);
  const toggleModal = () => {
    setOpenPopup(!openPopup);
  };

  // For options popup
  const [openOptions, setOpenOptions] = useState(false);
  const toggleOptions = () => {
    setOpenOptions(!openOptions);
  };

  // Dummy Comment data

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const DummyComments = () => {
      return [
        {
          commentId: 1,
          name: "Menorah Obanijesu",
          userId: 1,
          userImg: USER1,
          content: "Africa is great",
          commentImg: POSTIMG1,
          time: "1 month ago",
        },
        {
          commentId: 2,
          name: "Gloria Wambui",
          userId: 2,
          userImg: USER2,
          content: "Great job",
          commentImg: null,
          time: "6 days ago",
        },
        {
          commentId: 3,
          name: "Mary Phiri",
          userId: 3,
          userImg: USER3,
          content: "We'll build together",
          commentImg: POSTIMG3,
          time: "1 min ago",
        },
      ];
    };

    setComments(DummyComments());
  }, []);

  return (
    <div className="post-details">
      <div className="posts-card">
        <div className="post">
          {/* Left side */}
          <div className="left">
            <img src={USER1} alt="" />
          </div>

          {/* Right side */}
          <div className="right">
            <div className="upper">
              <div className="user-info">
                <div className="name">
                  <div className="display-name">
                    <Link to="/profile/3" className="link">
                      Menorah Obanijesu
                    </Link>
                    <img src={VERIFIED} alt="" />
                  </div>
                  <div className="time">1 day ago</div>
                </div>
                <div className="options" onClick={toggleOptions}>
                  <FaEllipsisH className="icon" />
                </div>
                {openOptions && (
                  <div className="options-popup">
                    <Link to="/" className="links">
                      <BsLink45Deg />
                      Copy link
                    </Link>

                    <Link to="/" className="links">
                      <BsFillFlagFill /> Report post
                    </Link>

                    <Link to="/" className="links">
                      <BiBlock />
                      Block this user
                    </Link>

                    <Link to="/" className="links">
                      <AiFillNotification /> Turn on notifictaion
                    </Link>

                    <Link to="/" className="links">
                      <BsEyeSlashFill />
                      Stop seeing posts like this
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="middle">
              <div className="post-text">Hello Africa</div>
              <div className="post-img">
                <img src={POSTIMG1} alt="" />
              </div>
            </div>
            <div className="bottom">
              <div className="likes post-reactions" title="Like">
                <Link to="/post-like/1" className="link">
                  <BsHeart className="icon" />
                  500
                </Link>
              </div>
              <div
                style={{ display: "flex", alignItems: "baseline" }}
                className="comments post-reactions"
                title="Comment"
                onClick={toggleModal}
              >
                <FaRegCommentAlt className="icon" />
                100
              </div>
              <div className="shares post-reactions" title="Share">
                <Link to="/share-post/1" className="link">
                  <BsShare className="icon" />
                  150
                </Link>
              </div>
              <div className="views post-reactions" title="Views">
                <FaRegEye className="icon" />
                2k
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="post-comment">
          {comments.map((comment) => (
            <div className="comments">
              {/* Left side */}
              <div className="left">
                <img src={comment.userImg} alt="" />
              </div>

              {/* Right side */}
              <div className="right">
                <div className="upper">
                  <div className="user-info">
                    <div className="name">
                      <div className="display-name">
                        <Link to="/profile/3" className="link">
                          {comment.name}
                        </Link>
                        <img src={VERIFIED} alt="" />
                      </div>
                      <div className="time">{comment.time}</div>
                    </div>
                    <div className="options" onClick={toggleOptions}>
                      <FaEllipsisH className="icon" />
                    </div>
                    {openOptions && (
                      <div className="options-popup">
                        <Link to="/" className="links">
                          <BsLink45Deg />
                          Copy link
                        </Link>

                        <Link to="/" className="links">
                          <BsFillFlagFill /> Report post
                        </Link>

                        <Link to="/" className="links">
                          <BiBlock />
                          Block this user
                        </Link>

                        <Link to="/" className="links">
                          <AiFillNotification /> Turn on notifictaion
                        </Link>

                        <Link to="/" className="links">
                          <BsEyeSlashFill />
                          Stop seeing posts like this
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                <div className="middle">
                  <div className="post-text">{comment.content}</div>
                  <div className="post-img">
                    {comment.commentImg ? (
                      <img src={comment.commentImg} alt="" />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="bottom">
                  <div className="likes post-reactions" title="Like">
                    <Link to="/post-like/1" className="link">
                      <BsHeart className="icon" />
                      500
                    </Link>
                  </div>
                  <div
                    className="comments post-reactions link"
                    title="Comment"
                    onClick={toggleModal}
                  >
                    <FaReplyAll className="icon" />
                    100
                  </div>
                  <div className="shares post-reactions" title="Share">
                    <Link to="/share-post/1" className="link">
                      <BsShare className="icon" />
                      150
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {openPopup && (
        <div className="input-popup">
          <div className="input-card">
            <AiOutlineClose className="close-btn" onClick={toggleModal} />
            <p>Post a Comment</p>
            <form action="">
              <div className="input-field">
                <textarea name="" id="" cols="30" rows="15"></textarea>
              </div>
              <div className="image-field">
                <div className="upload-img">
                  <label htmlFor="add-img">
                    <img src={GALLERY} alt="" title="Add Image" />
                  </label>
                  <input type="file" id="add-img" style={{ display: "none" }} />
                </div>
                <div className="add-location">
                  <BiCurrentLocation title="Add location" />
                </div>
              </div>
              <button type="submit">Add Comment</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
