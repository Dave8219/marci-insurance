import { Link } from "react-router-dom";

const RenderFooter = () => {
  return (
    <>
      <footer>
        <div className="footer-grid">
          <div>
            <img
              src="src/assets/m-barrera-logo.png"
              alt="company logo"
              className="img-logo-2"
            />
            <br />
            <br />
            <div className="footer-para">
              <p>Helping families protect their health and financial future.</p>
            </div>
          </div>

          <div>
            <nav className="nav-links-footer">
              <Link to="/" className="footer-tabs">
                Home
              </Link>
              <div className="dropdown">
                <a href="#services" className="drop-btn-footer">
                  Services
                </a>
                <div className="dropdown-content">
                  <Link to="/health-insurance">Health Insurance</Link>
                  <Link to="/medicare">Medicare</Link>
                  <Link to="/life-insurance">Life Insurance</Link>
                </div>
              </div>
              <div>
                <Link to="/about" className="footer-tabs">
                  About
                </Link>
              </div>
              <div>
                <Link to="/contact" className="footer-tabs">
                  Contact
                </Link>
              </div>
            </nav>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Email: Mbarrera830@icloud.com</p>
            <p>Phone: (956) 283-4343</p>
            <p>Location: Rio Grande Valley, TX, USA</p>
          </div>

          <div>
            <h4>Office Hours</h4>
            <p>Monday – Saturday</p>
            <p>9:00 AM – 6:00 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 Marci Insurance. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default RenderFooter;
