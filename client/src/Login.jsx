import { useStare } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <>
      <div className="login-page">
        <header className="site-header">
          <div className="logo">
            <Link to="/">
              <img
                src="src/assets/barrera-logo-no-background.png"
                className="img-logo"
              />
            </Link>
          </div>

          <div className="tagline">
            <h5>Helping you today for the future!</h5>
          </div>
        </header>
        <main className="admin-container">
          <div>
            <h1 className="admin-title">Admin</h1>
          </div>

          <div className="form-group-container">
            <div className="form-group">
              <h4 className="form-label">Username</h4>
              <input />
            </div>
            <div className="form-group">
              <h4 className="form-label">Password</h4>
              <input />
            </div>
          </div>

          <div>
            <button className="login-btn">Login</button>
          </div>

          <div>
            <button className="forgot-btn">Forgot Password</button>
            <button className="forgot-btn">Forgot Username</button>
          </div>

          {/*
          <div>
            <button className="create-btn">Create Account</button>
          </div>
          */}
        </main>
        <footer>
          <p className="footer-text">
            © 2026 Marci Insurance. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Login;
