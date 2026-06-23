import { Link } from "react-router-dom";

const RenderHeader = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">
          <img
            src="src/assets/barrera-logo-no-background.png"
            className="img-logo"
          />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <a href="#services" className="drop-btn">
            Services
          </a>
          <div className="dropdown-content">
            <Link to="/health-insurance">Health Insurance</Link>
            <Link to="/medicare">Medicare</Link>
            <Link to="/life-insurance">Life Insurance</Link>
          </div>
        </div>

        <a href="#why">Why Us</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="contact-info">
        <img
          src="/src/assets/marci-picture.jpeg"
          alt="Picture of Insurance Agent"
          className="ins-agent-picture"
        />

        <i className="fa-solid fa-phone phone-icon"></i>
        <p className="phone-number-nav">(956) 283-4343</p>
      </div>

      <div className="mobile-menu-wrapper">
        <div className="menu-label">Menu</div>
        <button className="hamburger" id="hamburgerBtn">
          <i className="fa-solid fa-bars"></i>
        </button>

        <nav className="mobile-nav" id="mobileNav">
          <Link to="/">Home</Link>

          <div className="dropdown">
            <a href="#services" className="drop-btn">
              Services
            </a>
            <div className="dropdown-content">
              <Link to="/health-insurance">Health Insurance</Link>
              <Link to="/medicare">Medicare</Link>
              <Link to="/life-insurance">Life Insurance</Link>
            </div>
          </div>

          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default RenderHeader;
