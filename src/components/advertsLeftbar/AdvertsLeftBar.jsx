import "./advertsLeftbar.scss";

//Icons
import { TbBrandCampaignmonitor } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { BsGear, BsHddStack } from "react-icons/bs";
import { MdBugReport } from "react-icons/md";

//Links
import { Link } from "react-router-dom";

const AdvertsLeftBar = () => {
  return (
    <div className="adspage-leftbar">

      <Link to="/ads-overview/12345" className="link">
        <BsHddStack className="icons" /> Account Overview
      </Link>

      <Link to="/campaigns/3" className="link">
        <TbBrandCampaignmonitor className="icons" /> Campaigns
      </Link>

      <Link to="/fund-account/3" className="link">
        <GiMoneyStack className="icons" /> Fund account
      </Link>

      <Link to="/account-settings/3" className="link">
        <BsGear className="icons" /> Ad account Settings
      </Link>

      <Link to="/report-ad-problem" className="link">
        <MdBugReport className="icons" /> Report a problem
      </Link>

    </div>
  );
};

export default AdvertsLeftBar;
