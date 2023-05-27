import "./editprofile.scss";
import { BsPencilSquare } from "react-icons/bs";
import PROFILEIMG from "../../media/images/user4.jpg";

const EditProfile = () => {
  return (
    <div className="edit-profile">
      <div className="edit-form">
        <h2>Edit Profile</h2>
        <hr />
        <form action="/profile/2">
          <div className="input-text">
            <div className="label">
              <h3>Profile Photo</h3>
              <img src={PROFILEIMG} alt="" />
            </div>
            <div className="input">
              <label htmlFor="profile-pic">
                <BsPencilSquare className="icon" />
                Upload Pic
              </label>
              <input type="file" id="profile-pic" style={{ display: "none" }} />
            </div>
          </div>

          <div className="input-text">
            <div className="label">
              <h3>Display Name</h3>
              <small>This is name everyone will see</small>
            </div>
            <div className="input">
              <input type="text" />
            </div>
          </div>

          <div className="input-text">
            <div className="label">
              <h3>Username</h3>
            </div>
            <div className="input">
              <input type="text" />
              <br />
              <small>
                www.yurrim.com/username. This is is unique to you alone
              </small>
            </div>
          </div>

          <div className="input-text">
            <div className="label">
              <h3>Bio</h3>
              <small>Keep this short and simple</small>
            </div>
            <div className="input">
              <textarea name="" id="" cols="35" rows="10"></textarea>
              <br />
              <small>0/80</small>
            </div>
          </div>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
