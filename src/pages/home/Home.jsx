
import "./home.scss";

// Icons
import { BiCurrentLocation } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import USER1 from "../../media/images/user1.jpg";
import USER2 from "../../media/images/user2.jpg";
import USER3 from "../../media/images/user3.jpg";
import USER4 from "../../media/images/user4.jpg";

import GALLERY from "../../media/icons/pic-upload.png";
import { useState } from "react";
import Posts from "../../components/posts/Posts";

// Post Images
import POSTIMG1 from "../../media/images/postimg1.jpg";
import POSTIMG2 from "../../media/images/postimg2.jpg";
import POSTIMG3 from "../../media/images/postimg3.jpg";
import POSTIMG4 from "../../media/images/postimg4.png";

const Home = () => {
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
        "This is an amazing and very colourful job ehich should be encouraged by everyone all over the world",
      postImg: POSTIMG4,
      time: "a few seconds ago",
    },
  ];

  // For modal popup
  const [openPopup, setOpenPopup] = useState(false);
  const toggleModal = () => {
    setOpenPopup(!openPopup);
  };

  return (
    <div className="home">
      <div className="addpost-card">
        <img src={USER1} alt="" />
        <div className="add-post" onClick={toggleModal}>
          <p>Beam an idea...</p>
        </div>
      </div>

      {openPopup && (
        <div className="input-popup">
          <div className="input-card">
            <AiOutlineClose className="close-btn" onClick={toggleModal} />
            <p>Beam an idea</p>
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
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
      )}

      {posts.map((post) => (
        <div>
          <Posts post={post} key={post.postId} />
        </div>
      ))}
    </div>
  );
};

export default Home;
