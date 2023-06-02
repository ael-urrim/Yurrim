import { Link } from "react-router-dom";
import "./adsOverview.scss";

import { MdReport } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

//images
import telescope from "../../media/images/telescope.jpg";

const AdsOverview = () => {
  return (
    <div className="ads-overview">
      <div className="heading">
        <h2>Ad Account overview</h2>

        <h3>Hello Samuel Obanijesu - 2674986374</h3>
      </div>

      <div className="ads-overview-card">
        <div className="left">
          <div className="top">
            <div className="top-left">
              <h3>Campaign Stat</h3>
              <p>
                Last one week
                <MdReport
                  className="icon"
                  title="Today's stat isn't included"
                />
              </p>
            </div>

            <div className="top-right">
              <div className="options">
                <select name="" id="">
                  <option value="0">Filter result</option>
                  <option value="1">Cost per result</option>
                </select>
              </div>

              <div className="create">
                <Link to="/create-ad" className="link">
                  Create
                  <AiOutlinePlus className="icon" />
                </Link>
              </div>
            </div>
          </div>

          <div className="bottom">
            <img src={telescope} alt="" />

            <h3>Create a campaign to see stats</h3>
            <p>
              None of your campaigns are currently running. Create a new
              campaign to view performance trends.
            </p>
            <Link to="/how-to-create-ads" className="link">
              Learn more
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="right-top">
            <div className="header">
              <h3>Ifedolapo Samuel</h3>
              <p>2674986374</p>
            </div>

            <div className="campaign-overview">
              <div className="top">
                <p>Active campaigns</p>
                <p>0</p>
              </div>
              <div className="bottom">
                <p>
                  Active spending limit
                  <MdReport className="icon" />
                </p>
                <p>
                  5000 <small>(10% used)</small>
                </p>
              </div>
            </div>

            <div className="timeframe">
              <h4>
                Last 7 days
                <MdReport
                  className="icon"
                  title="Today's stat isn't included"
                />
              </h4>

              <div className="top">
                <p>
                  Amount spent{" "}
                  <MdReport
                    className="icon"
                    title="Total amount spent on ads so far"
                  />
                </p>
                <p>10000</p>
              </div>

              <div className="bottom">
                <p>
                  Percentage spent{" "}
                  <MdReport
                    className="icon"
                    title="Percentage of the amount spent on your current ads balance"
                  />
                </p>
                <p>30%</p>
              </div>
            </div>
          </div>

          <div className="right-bottom">
            <div className="header">Advertizing and ads policy</div>
            <div className="details">
              <p>It is very important that you read and understand our ads policy in order to be able to create ads that converts and also protect your account from being restricted from creating ads.</p>
              <Link to="/adverts-and-ads-policy" className="links">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsOverview;
