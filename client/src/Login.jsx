import { useStare } from "react";
import "./login.css";

const Login = () => {
  return (
    <>
      <header className="site-header">
        <div className="logo">
          <img src="src/assets/ins-logo.png" className="img-logo" />
        </div>

        <div className="tagline">
          <h5>Helping you today for the future!</h5>
        </div>
      </header>
      <main className="admin-container">
        <div>
          <h1 className="admin-title">Admin</h1>
        </div>
        <div>
          <h4>User</h4>
        </div>
        <div>
          <h4>Password</h4>
        </div>
        <div>
          <button className="login-btn">Login</button>
        </div>
        <div>
          <button className="forgot-btn">Forgot Password</button>
          <button className="create-btn">Forgot Username</button>
        </div>
        <div>
          <button className="create-btn">Create Account</button>
        </div>
      </main>
    </>
  );
};

export default Login;
