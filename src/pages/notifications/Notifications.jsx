import "./notifications.scss";
import { Link } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="notifications-card">
        <div className="notif-top">
          <div className="title">Notifications</div>
          <div className="notif-settings">
            <Link to="/settings/3" className="link">
              <AiFillSetting className="icons" />
            </Link>
          </div>
        </div>
        <hr />
        <div className="notif-body">
          <Link to="/post/2" className="link">
            <h3>Mary Phiri</h3>
            <p> and 16 others commented on your post.</p>
          </Link>
          <Link to="/post/2" className="link">
            <h3>John Doe</h3>
            <p>liked your comment.</p>
          </Link>
          <Link to="/post/2" className="link">
            <h3>Mary Jane</h3>
            <p>replied to your comment.</p>
          </Link>
          <Link to="/post/2" className="link">
            <h3>Samuel Obanijesu</h3>
            <p>is saying hi.</p>
          </Link>
          <Link to="/post/2" className="link">
            <p>Your account was flagged for violating the community rules.</p>
          </Link>
          <Link to="/post/2" className="link">
            <h3>Menorah Samuel</h3>
            <p>want to link up with you.</p>
          </Link>
          <Link to="/profile/2" className="link">
            <p>Someone just checked your profile. See who it is.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
