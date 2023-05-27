import "../../main.scss";
import "./rightbar.scss";
import ADVERTS1 from "../../media/images/ads.jpg";
import ADVERTS2 from "../../media/images/ads2.jpg";
import ADVERTS3 from "../../media/images/ads3.png";
import { Link } from "react-router-dom";

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="adverts">
        <img src={ADVERTS1} alt="" />
      </div>

      <div className="card-one">
        <h2 className="heading">Get ahead of your competitors</h2>
        <div className="sample-img">
          <img src={ADVERTS2} alt="" />
          <img src={ADVERTS3} alt="" />
        </div>
        <p>Claim $100 free ads credit</p>
        <Link to="/advertise" className="links">
          Claim $100 now
        </Link>
      </div>

      <div className="links-card">
        <div className="top">
          <div className="left">
            <Link to="/about-us" className="links">
              About Us
            </Link>
            <Link to="/terms" className="links">
              Terms of Use
            </Link>
            <Link to="/adverts" className="links">
              Advertisement and Ads Policy
            </Link>
          </div>

          <div className="right">
            <Link to="/cookie-policy" className="links">
              Cookie Policy
            </Link>
            <Link to="/help-center" className="links">
              Help Center
            </Link>
            <Link to="/content-policy" className="links">
              Content Policy
            </Link>
          </div>
        </div>
        <div className="bottom">
          <p>Yurrim Inc &copy; 2023. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
