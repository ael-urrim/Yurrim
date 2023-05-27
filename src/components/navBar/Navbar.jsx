import { Link } from "react-router-dom";
// import "../../main.scss";
import "./navbar.scss";
import { BsFillMoonFill, BsSunFill, BsSearch } from "react-icons/bs";
import { FaUserAlt, FaSignOutAlt, FaUserFriends } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";
import { AiFillSetting } from "react-icons/ai";
import { MdOutlineHelp, MdNotifications } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import PROFILE_IMG from "../../media/images/default.jpg";
import { useContext, useState } from "react";
import { darkModeContext } from "../../context/darkModeContext";

const Navbar = () => {
  // For the menu dropdown
  const [openMenuDropdown, setOpenMenuDropdown] = useState(false);
  const toggleDropDown = () => {
    setOpenMenuDropdown(!openMenuDropdown);
  };

  // For the dark mode toggel
  const { toggle, darkMode } = useContext(darkModeContext);
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className="logo">Yurrim</span>
        </Link>
        <div className="search">
          <BsSearch />
          <input type="text" placeholder="Search Yurrim" />
        </div>
      </div>

      {/* Nabar Right */}
      <div className="navbar-right">
        <Link to="/messages/3" className="messages">
          <HiMail />
        </Link>
        <div className="dark-mode">
          {darkMode ? (
            <BsSunFill onClick={toggle} />
          ) : (
            <BsFillMoonFill onClick={toggle} />
          )}
        </div>
        <div className="profile-img" onClick={toggleDropDown}>
          <img src={PROFILE_IMG} alt="" />
        </div>

        {openMenuDropdown && (
          <div className="overlay" onClick={toggleDropDown}>
            <div className="dropdown-links">
              <div className="dropdown">
                <Link to="/profile/2" className="links">
                  <FaUserAlt className="icons" /> Profile
                </Link>
                <Link to="/settings/4" className="links">
                  <AiFillSetting className="icons" /> Settings
                </Link>
                <Link to="/advertisement" className="links">
                  <RiAdvertisementFill className="icons" />
                  Advertisement
                </Link>
                <Link to="/help" className="links">
                  <MdOutlineHelp className="icons" /> Help And Feedback
                </Link>
                <Link to="/login" className="links">
                  <FaSignOutAlt className="icons" /> Log Out
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {openMenuDropdown && (
          <div className="mobile-overlay" onClick={toggleDropDown}>
            <div className="mobile-dropdown-links">
              <div className="mobile-dropdown">
                <Link to="/profile/2" className="mobile-links">
                  <FaUserAlt className="mobile-icons" /> Profile
                </Link>
                <Link to="/interactions/2" className="mobile-links">
                  <FaUserFriends className="mobile-icons" /> Interactions
                </Link>
                <Link to="/notifications/2" className="mobile-links">
                  <MdNotifications className="mobile-icons" /> Notifications
                </Link>
                <Link to="/settings/4" className="mobile-links">
                  <AiFillSetting className="mobile-icons" /> Settings
                </Link>
                <Link to="/advertisement" className="mobile-links">
                  <RiAdvertisementFill className="mobile-icons" />
                  Advertisement
                </Link>
                <Link to="/help" className="mobile-links">
                  <MdOutlineHelp className="mobile-icons" /> Help And Feedback
                </Link>
                <Link to="/login" className="mobile-links">
                  <FaSignOutAlt className="mobile-icons" /> Log Out
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
