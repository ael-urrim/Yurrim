import { Link } from "react-router-dom";
import "../../main.scss";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="header">Log In</div>
      <form action="/">
        <div className="input-field">
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>

        <div className="input-field">
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>

        <button>Login</button>
      </form>
      <p>
        Don't have an account yet?
        <Link to="/signup" className="link">
          Signup now!
        </Link>
      </p>
    </div>
  );
};

export default Login;
