import { Link } from "react-router-dom";
import "../../main.scss";
import "./leftbar.scss";
import { FaHome, FaUserFriends } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import USER_IMG from "../../media/images/user4.jpg";
import USER1 from "../../media/images/user1.jpg";
import USER2 from "../../media/images/user2.jpg";
import USER3 from "../../media/images/user3.jpg";
import USER4 from "../../media/images/user4.jpg";
import USER5 from "../../media/images/user5.jpg";

const Leftbar = () => {
  return (
    <div className="leftbar">
      {/* Card One */}
      <div className="card-one">
        <div className="home-link">
          <Link to="/" className="link">
            <FaHome className="icons" /> Home
          </Link>
        </div>
        <div className="interactions-link">
          <Link to="/interactions/3" className="link">
            <FaUserFriends className="icons" /> Interactions
          </Link>
        </div>
        <div className="notifications-link">
          <Link to="/notifications/3" className="link">
            <MdNotifications className="icons" /> Notifications
          </Link>
        </div>
      </div>

      {/* Card Two */}
      <div className="card-two">
        <div className="user-img">
          <img src={USER_IMG} alt="" />
        </div>
        <div className="user-details">
          <div className="name">
            <Link to="/profile/2" className="link">
              Samuel Obanijesu
            </Link>
          </div>
          <div className="description">CEO, Yurrim</div>
        </div>
      </div>

      {/* Card Three */}
      <div className="card-three">
        <p>Suggested Accounts</p>
        <div className="suggested">
          <img src={USER1} alt="" />
          <div className="names">
            <Link to="/profile/2" className="links">
              Samuel Obanijesu
            </Link>
          </div>
        </div>
        <div className="suggested">
          <img src={USER2} alt="" />
          <div className="names">
            <Link to="/profile/2" className="links">
              Gloria Wambui
            </Link>
          </div>
        </div>
        <div className="suggested">
          <img src={USER3} alt="" />
          <div className="names">
            <Link to="/profile/2" className="links">
              Michael Phiri
            </Link>
          </div>
        </div>
        <div className="suggested">
          <img src={USER4} alt="" />
          <div className="names">
            <Link to="/profile/2" className="links">
              Joshua Okpara
            </Link>
          </div>
        </div>
        <div className="suggested">
          <img src={USER5} alt="" />
          <div className="names">
            <Link to="/profile/2" className="links">
              Bliss Blinks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
