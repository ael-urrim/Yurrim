import "./settings.scss";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-card">
        <h2>User Settings</h2>
        <hr />

        <div className="account-control">
          <div className="label">
            <h3>Account Control</h3>
            <small>Deactivate Account</small>
          </div>
        </div>
        <hr />

        <div className="privacy-control">
          <div className="label">
            <h3>Privacy Control</h3>
            <small>Set to private</small>
            <p>
              If you set your account to private, only users you approve will be
              able to see your yurrim activities.
            </p>
          </div>
        </div>
        <hr />

        <div className="notifications-control">
          <div className="label">
            <h3>Notifications</h3>
            <p> Interactions</p>
            <p> Emails</p>
            <p> Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
