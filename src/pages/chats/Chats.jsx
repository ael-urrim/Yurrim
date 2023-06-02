import "./chats.scss";
import { Link } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";

import USER1 from "../../media/images/user1.jpg";
import USER2 from "../../media/images/user2.jpg";
import USER3 from "../../media/images/user3.jpg";
import USER4 from "../../media/images/user4.jpg";
import USER5 from "../../media/images/user5.jpg";
import USER6 from "../../media/images/team1.jpg";
import USER7 from "../../media/images/team2.jpg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="chats-card">
        <div className="chats-top">
          <div className="title">Messages</div>
          <div className="chats-settings">
            <Link to="/settings/3" className="link">
              <AiFillSetting className="icons" />
            </Link>
          </div>
        </div>
        <hr />
        <div className="chats-body">
          <Link to="/personal-chat/1" className="link">
            <img src={USER1} alt="" />

            <div className="highlight">
              <h3>Mary Phiri</h3>
              <p>Hi baby!</p>
            </div>
          </Link>
          <Link to="/personal-chat/2" className="link">
            <img src={USER2} alt="" />

            <div className="highlight">
              <h3>John Doe</h3>
              <p>You: We'll meet in the club tonight.</p>
            </div>
          </Link>
          <Link to="/personal-chat/3" className="link">
            <img src={USER3} alt="" />

            <div className="highlight">
              <h3>Mary Jane</h3>
              <p>You: Will you be in church this evening</p>
            </div>
          </Link>
          <Link to="/personal-chat/4" className="link">
            <img src={USER4} alt="" />

            <div className="highlight">
              <h3>Samuel Obanijesu</h3>
              <p>Hi there.</p>
            </div>
          </Link>
          <Link to="/personal-chat/5" className="link">
            <img src={USER5} alt="" />

            <div className="highlight">
              <h3>Samuel Johnson</h3>
              <p>On my way to the lecture room.</p>
            </div>
          </Link>
          <Link to="/personal-chat/6" className="link">
            <img src={USER6} alt="" />

            <div className="highlight">
              <h3>Menorah Samuel</h3>
              <p>You: You are doing well</p>
            </div>
          </Link>
          <Link to="/profile/7" className="link">
            <img src={USER7} alt="" />

            <div className="highlight">
              <h3>Menorah Jane</h3>
              <p>You good</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chats;
