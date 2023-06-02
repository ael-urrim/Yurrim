import { Link } from "react-router-dom";
import "./menu.scss";

// Icon
import { FaUserAlt, FaSignOutAlt, FaUserFriends, FaCookie, FaInbox } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { MdNotifications, MdOutlineHelp, MdOutlinePolicy } from "react-icons/md";
import { BsFileRuledFill, BsFillMouse2Fill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-card">
        <div className="heading">Menu</div>
        <hr />

        <div className="menu-links">
          <Link to="/profile/2" className="mobile-links">
            <FaUserAlt className="mobile-icons" /> My Profile
          </Link>
          <Link to="/interactions/2" className="mobile-links">
            <FaUserFriends className="mobile-icons" /> Interactions
          </Link>
          <Link to="/notifications/2" className="mobile-links">
            <MdNotifications className="mobile-icons" /> Notifications
          </Link>
          <Link to="/create-ad" className="mobile-links">
            <RiAdvertisementFill className="mobile-icons" />
            Create Ads
          </Link>
          <Link to="/settings/4" className="mobile-links">
            <AiFillSetting className="mobile-icons" /> Settings
          </Link>
          <hr />
          <Link to="/about-us" className="mobile-links">
           <FcAbout className="mobile-icons" /> About Us
          </Link>
          <Link to="/terms-of-use" className="mobile-links">
            <BsFillMouse2Fill className="mobile-icons" />Terms of Use
          </Link>
          <Link to="/adverts-and-ads-policy" className="mobile-links">
            <BsFileRuledFill className="mobile-icons" />Advertisement and Ads Policy
          </Link>
          <Link to="/cookie-policy" className="mobile-links">
            <FaCookie className="mobile-icons" />Cookie Policy
          </Link>
          <Link to="/contents-policy" className="mobile-links">
          <MdOutlinePolicy className="mobile-icons" />Content Policy
          </Link>
          <Link to="/help-center" className="mobile-links">
          <MdOutlineHelp className="mobile-icons" />Help Center
          </Link>
          <Link to="/support-inbox" className="mobile-links">
            <FaInbox className="mobile-icons" /> Support Inbox
          </Link>
          <Link to="/login" className="mobile-links">
            <FaSignOutAlt className="mobile-icons" /> Log Out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;
