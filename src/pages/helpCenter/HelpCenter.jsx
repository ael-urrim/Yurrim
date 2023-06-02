import { Link } from "react-router-dom";
import "./helpCenter.scss";
import {FaQuestionCircle} from "react-icons/fa";
import {BsGearFill, BsPencilSquare, BsShieldShaded} from "react-icons/bs";
import {RiAdvertisementFill} from "react-icons/ri";
import {MdDataUsage} from "react-icons/md";


const HelpCenter = () => {
  return (
    <div className="help-center">
      <div className="help-center-card">
        <div className="card">
          <div className="title">
            <FaQuestionCircle className="icon" />
            FAQs
          </div>
          <Link to="/" className="links">
            Yurim signup
          </Link>
          <Link to="/" className="links">
            Verification badge
          </Link>
          <Link to="/" className="links">
            Password reset
          </Link>
          <Link to="/" className="links">
            Advertisement
          </Link>
        </div>

        <div className="card">
          <div className="title"><BsGearFill className="icon"/>Account Settings</div>
          <Link to="/" className="links">
            Account visibility
          </Link>
          <Link to="/" className="links">
            Verification badge
          </Link>
          <Link to="/" className="links">
            Login and password
          </Link>
          <Link to="/" className="links">
            Advertisement
          </Link>
        </div>

        <div className="card">
          <div className="title"> <BsPencilSquare className="icon"/>Using Yurrim</div>
          <Link to="/" className="links">
            Beaming an idea
          </Link>
          <Link to="/" className="links">
            Direct messages
          </Link>
          <Link to="/" className="links">
            Images
          </Link>
          <Link to="/" className="links">
            Events
          </Link>
          <Link to="/" className="links">
            Job opportunities
          </Link>
        </div>

        <div className="card">
          <div className="title"><RiAdvertisementFill className="icon"/>Advertisement</div>
          <Link to="/how-to-create-ads" className="links">
            How to create ads
          </Link>
          <Link to="/" className="links">
            Billing
          </Link>
          <Link to="/" className="links">
            Payment
          </Link>
          <Link to="/" className="links">
            Adverts policy
          </Link>
          <Link to="/" className="links">
            Guides
          </Link>
        </div>

        <div className="card">
          <div className="title"><BsShieldShaded className="icon"/>Safety and security</div>
          <Link to="/" className="links">
            Password safety
          </Link>
          <Link to="/" className="links">
            Two factor authentication
          </Link>
          <Link to="/" className="links">
            Phone number verification
          </Link>
          <Link to="/" className="links">
            Email verification
          </Link>
        </div>

        <div className="card">
          <div className="title"><MdDataUsage className="icon"/>Yurrim resources</div>
          <Link to="/" className="links">
            Developer tools
          </Link>
          <Link to="/" className="links">
            Career
          </Link>
          <Link to="/" className="links">
            Job opportunity
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
