import { Link } from "react-router-dom";
import "../../main.scss";
import "./signup.scss";

const Signup = () => {
  return (
    <div className="signup">
      <div className="header">
        <h3>Create an Account</h3>
        <p>Connect with the rest of the world</p>
      </div>
      <form action="">
        <div className="input-field">
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>

        <div className="input-field">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>

        <div className="input-field">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>

        <div className="input-field">
          <label htmlFor="">Confirm Password</label>
          <input type="password" />
        </div>

        <button>Create Account</button>
      </form>
      <p>
        Already have an account?
        <Link to="/login" className="link">
          Login now!
        </Link>
      </p>
    </div>
  );
};

export default Signup;
