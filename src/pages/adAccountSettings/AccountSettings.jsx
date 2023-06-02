import "./accountSettings.scss";

const AccountSettings = () => {
  return (
    <div className="account-settings">
      <div className="heading">
        <h2>Ad account settings</h2>
      </div>

      <div className="account-settings-card">
        {/* <div className="payment">
          <p>Payment settings</p>
          <select name="" id="">
            <option value="">Cryptocurency (YRM)</option>
            <option value="">Naira (NGN)</option>
          </select>
        </div> */}
        <div className="contact">
          <p>Ad account contact</p>
          <input type="text" />
        </div>

        <div className="notification">
          <p>Notification settings</p>

          <div className="notif-preference">
            <p>Low account balance</p>
            <input type="checkbox" />
          </div>

          <div className="notif-preference">
            <p>Ad stopped running</p>
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
