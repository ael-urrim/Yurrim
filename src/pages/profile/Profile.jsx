import "../../main.scss";
import "./profile.scss";

import USER1 from "../../media/images/user1.jpg";
import USER2 from "../../media/images/user2.jpg";
import USER3 from "../../media/images/user3.jpg";
import USER4 from "../../media/images/user4.jpg";


import { Link } from "react-router-dom";
import VERIFIED from "../../media/icons/verified.png";
import Posts from "../../components/posts/Posts";

// Post Images
import POSTIMG1 from "../../media/images/postimg1.jpg";
import POSTIMG2 from "../../media/images/postimg2.jpg";
import POSTIMG3 from "../../media/images/postimg3.jpg";
import POSTIMG4 from "../../media/images/postimg4.png";
import { useState } from "react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Dummy post data
  const posts = [
    {
      postId: 1,
      name: "Menorah Obanijesu",
      userId: 1,
      userImg: USER1,
      content: "Hello Africa",
      postImg: POSTIMG1,
      time: "1 month ago",
    },
    {
      postId: 2,
      name: "Gloria Wambui",
      userId: 2,
      userImg: USER2,
      content: "This is a great achievement",
      postImg: POSTIMG2,
      time: "6 days ago",
    },
    {
      postId: 3,
      name: "Mary Phiri",
      userId: 3,
      userImg: USER3,
      content: "Let's build together",
      postImg: POSTIMG3,
      time: "1 min ago",
    },
    {
      postId: 4,
      name: "Samuel Obanijesu",
      userId: 4,
      userImg: USER4,
      content:
        "This is an amazing and very colourful job which should be encouraged by everyone all over the world",
      postImg: POSTIMG4,
      time: "a few seconds ago",
    },
  ];

  // Dummy photos data
  const photos = [
    {
      photoId: 1,
      img: USER1,
    },
    {
      photoId: 2,
      img: USER2,
    },
    {
      photoId: 3,
      img: USER3,
    },
    {
      photoId: 4,
      img: USER4,
    },
    {
      photoId: 5,
      img: POSTIMG1,
    },
    {
      photoId: 6,
      img: POSTIMG2,
    },
    {
      photoId: 7,
      img: POSTIMG3,
    },
    {
      photoId: 8,
      img: POSTIMG4,
    },
  ];

  return (
    <div className="profile">
      <div className="profile-top">
        <div className="profile-user-info">
          <div className="user-img">
            <img src={USER4} alt="" />
          </div>
          <div className="user-details">
            <div className="display_name">
              Samuel Obanijesu <img src={VERIFIED} alt="" />
            </div>
            <div className="user-name">@samuel</div>
            <div className="edit-btn">
              <Link to="/edit-profile/2" className="link">
                Edit Profile
              </Link>

              <Link to="/edit-profile/2" className="link">
                Unfollow
              </Link>
            </div>
          </div>
        </div>
        <div className="profile-activities">
          <div className="following">
            <strong>200</strong> Following
          </div>
          <div className="follower">
            <strong>2500</strong> Followers
          </div>
          <div className="likes">
            <strong>500</strong> Likes
          </div>
        </div>
        <div className="user-bio">I code for a living.</div>
      </div>
      <div className="switch-btn">
        <p
          className={`title ${activeTab === "posts" ? "active" : ""}`}
          onClick={() => handleTabClick("posts")}
        >
          Posts
        </p>

        <p
          className={`title ${activeTab === "photos" ? "active" : ""}`}
          onClick={() => handleTabClick("photos")}
        >
          Photos
        </p>
        <hr />
      </div>

      {activeTab === "posts" && (
        <div className="tab-content posts show">
          {posts.map((post) => (
            <Posts post={post} key={post.postId} />
          ))}
        </div>
      )}
      <div className="body">
        {activeTab === "photos" && (
          <div className="tab-content photos show">
            {photos.map((photo) => (
              <img src={photo.img} key={photo.photoId} alt="pics" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
