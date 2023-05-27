import "./interactions.scss";

import USER1 from "../../media/images/user1.jpg";
import USER2 from "../../media/images/user2.jpg";
import USER3 from "../../media/images/user3.jpg";
import USER4 from "../../media/images/user4.jpg";
import Followings from "../../components/interactions/following/Followings";
import Followers from "../../components/interactions/followers/Followers";
import Suggestions from "../../components/interactions/suggestions/Suggestions";
import { useState } from "react";

const Interactions = () => {
  const [activeTab, setActiveTab] = useState("following");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Dummy user data
  const users = [
    {
      userId: 1,
      display_name: "Gloria Wambui",
      verified: true,
      userImg: USER1,
      bio: "Time is valuable...",
      following: true,
    },
    {
      userId: 2,
      display_name: "Indiana Jones",
      verified: false,
      userImg: USER2,
      bio: "A dark past, a darker present...",
      following: false,
    },
    {
      userId: 3,
      display_name: "Mary Phiri",
      verified: true,
      userImg: USER3,
      bio: "Let love lead...",
      following: true,
    },
    {
      userId: 4,
      display_name: "Joshua Anthony",
      verified: false,
      userImg: USER4,
      bio: "Life is short...",
      following: false,
    },
  ];

  return (
    <div className="interactions">
      <div className="interactions-card">
        <div className="header">
          <div
            className={`title ${activeTab === "following" ? "active" : ""}`}
            onClick={() => handleTabClick("following")}
          >
            Following
          </div>
          <div
            className={`title ${activeTab === "followers" ? "active" : ""}`}
            onClick={() => handleTabClick("followers")}
          >
            Followers
          </div>
          <div
            className={`title ${activeTab === "suggestions" ? "active" : ""}`}
            onClick={() => handleTabClick("suggestions")}
          >
            Suggestions
          </div>
        </div>
        <hr />
        <div className="body">
          {activeTab === "following" && (
            <div className="tab-content following show">
              <p className="tab-heading">People you are following</p>
              {users.map(
                (user) => (
                  <Followings user={user} key={user.userId} />
                )
                // user.following ? (
                //   <Followings user={user} key={user.userId} />
                // ) : null
              )}
            </div>
          )}

          {activeTab === "followers" && (
            <div className="tab-content followers show">
              <p className="tab-heading">People following you</p>
              {users.map(
                (user) => (
                  <Followers user={user} key={user.userId} />
                )
                // user.followers ? (
                //   <Followers user={user} key={user.userId} />
                // ) : null
              )}
            </div>
          )}

          {activeTab === "suggestions" && (
            <div className="tab-content suggestions show">
              <p className="tab-heading">Suggested friends</p>
              {users.map(
                (user) => (
                  <Suggestions user={user} key={user.userId} />
                )
                // user.suggestions ? (
                //   <Suggestions user={user} key={user.userId} />
                // ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interactions;
