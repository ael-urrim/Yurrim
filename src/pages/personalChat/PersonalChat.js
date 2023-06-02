import "./personalChat.scss";
import { Link } from "react-router-dom";
import { AiFillSetting } from "react-icons/ai";

import USER1 from "../../media/images/user1.jpg";
import { useRef, useEffect} from "react";

const PersonalChat = () => {
  const chatContentRef = useRef(null);

  useEffect(() => {
    if (chatContentRef.current) {
      chatContentRef.current.scrollTop = chatContentRef.current.scrollHeight;
    }
  }, []);

  return (
    <div className="personal-chats">
      <div className="personal-chats-card">
        <div className="personal-chats-top">
          <div className="title">
            <img src={USER1} alt="" />
            <p className="name">Mary Phiri</p>
          </div>
          <div className="personal-chats-settings">
            <Link to="/settings/3" className="link">
              <AiFillSetting className="icons" />
            </Link>
          </div>
        </div>

        <hr />

        <div className="chats-body">
          
          <div ref={chatContentRef} className="chats-content">
            <div className="incoming-msgs">
              <div className="msg-details">
                <p>How are you doing today?</p>
                <small>14:02pm</small>
              </div>
            </div>

            <div className="outgoing-msgs">
              <div className="msg-details">
                <p>How are you doing today?</p>
                <small>14:02pm</small>
              </div>
            </div>

            <div className="incoming-msgs">
              <div className="msg-details">
                <p>How are you doing today?</p>
                <small>14:02pm</small>
              </div>
            </div>

            <div className="outgoing-msgs">
              <div className="msg-details">
                <p>How are you doing today?</p>
                <small>14:02pm</small>
              </div>
            </div>

            <div className="incoming-msgs">
              <div className="msg-details">
                <p>How are you doing today?</p>
                <small>14:02pm</small>
              </div>
            </div>

            <div className="outgoing-msgs">
              <div className="msg-details">
                <p>How are you doing today?</p>
                <small>14:02pm</small>
              </div>
            </div>

            <div className="incoming-msgs">
              <div className="msg-details">
                <p>How are you doing today?</p>
                <small>14:02pm</small>
              </div>
            </div>

            <div className="outgoing-msgs">
              <div className="msg-details">
                <p>How are you doing today?</p>
                <small>14:02pm</small>
              </div>
            </div>
          </div>

          <form action="">
            <input type="text" placeholder="Type something..." />
            <button type="submit" >Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalChat;
