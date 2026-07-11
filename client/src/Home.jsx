import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "./home.css";
import logo from "./assets/barrera-logo-no-background.png";
import agent from "./assets/marci-picture.jpeg";
import flowers from "./assets/flowers.jpeg";
import happyFamily from "./assets/happy-family.png";
import insAgent from "./assets/cs-agent.png";
import piggyBank from "./assets/ins-savings.png";
import couple from "./assets/life-ins.png";
import familyBubbles from "./assets/family-bubbles.png";
import serviceAgent from "./assets/service-agent-customer.png";
import barreraLogo from "./assets/m-barrera-logo.png";
const images = {
  logo,
  agent,
  flowers,
  insAgent,
  happyFamily,
  insAgent,
  piggyBank,
  couple,
  familyBubbles,
  serviceAgent,
  barreraLogo,
};

const mapLeadFromAPI = (lead) => ({
  id: lead.id,
  status: lead.status,
  name: lead.name,
  email: lead.email,
  phone: lead.phone,
  insuranceType: lead.insurance_type,
  createdAt: lead.created_at,
});

const formatPhoneNumber = (value) => {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");

  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6,
  )}-${phoneNumber.slice(6, 10)}`;
};

const Home = () => {
  const [myLeads, setMyLeads] = useState([]);

  useEffect(() => {
    const btn = document.getElementById("hamburgerBtn");
    const menu = document.getElementById("mobileNav");

    if (!btn || !menu) return;

    const handleClick = () => {
      menu.classList.toggle("show");
    };

    btn.addEventListener("click", handleClick);

    return () => {
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  /*
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileNav");

  btn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
*/

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  // const [addedLead, setAddedLead] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
  });

  const API = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      /* [e.target.name]: e.target.value,
       */
      [name]: name === "phone" ? formatPhoneNumber(value) : value,
    }));
  };

  /* 
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.insuranceType
    ) {
      return alert("Please fill out all fields");
    }

    const fakeId = Date.now();
    const newLead = {
      id: fakeId,
      ...formData,
    };

    console.log("NEW LEAD:", newLead);

    const updatedLead = [...addedLead, newLead];

    //////////
  const response = await axios.post(`${API}/api/v1/new-employee`, {
    employee_name: formData.name,
    hourly_pay: formData.hourlyPay,
    hire_date: formData.hireDate,
    position: formData.position,
  });
  console.log("POST RESPONSE", response.data);
////////////

    setAddedLead((prev) => [...prev, newLead]);

    localStorage.setItem("leads", JSON.stringify(updatedLead));

    setFormData({
      name: "",
      email: "",
      phone: "",
      insuranceType: "",
    });
    // setShowForm(false);
  };
*/

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.insuranceType
    ) {
      return alert("Please fill out all fields");
    }

    const payload = {
      status: formData.status,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      insurance_type: formData.insuranceType,
      created_at: new Date().toISOString(),
    };

    const response = await axios.post(`${API}/api/v1/create-lead`, payload);
    console.log("POST RESPONSE", response.data);

    setMyLeads((prev) => [...prev, mapLeadFromAPI(response.data)]);

    /*
    const newLead = {
      id: Date.now(),
      created: new Date().toISOString(),
      ...formData,
    };

    // 🔥 ALWAYS read fresh from localStorage
    const existingLeads = JSON.parse(localStorage.getItem("leads")) || [];

    const updatedLeads = [...existingLeads, newLead];

    localStorage.setItem("leads", JSON.stringify(updatedLeads));
*/
    setFormData({
      name: "",
      email: "",
      phone: "",
      insuranceType: "",
    });
  };

  return (
    <>
      <div className="banner">
        <h5 className="quote-text">Get a Quote Today!</h5>
      </div>
      <header className="site-header">
        <div className="logo">
          <img src={images.logo} className="img-logo" />
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

          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="contact-info">
          <img
            src={images.agent}
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

            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <div className="home-page">
        <section className="hero-image-box">
          <img
            className="hero-image"
            src={images.flowers}
            alt="a picture of flowers in a field"
          />
          <div className="hero-box">
            <h1 className="hero-title-heading">Get Peace of Mind</h1>
            <br />
            <br />
            <p className="hero-para">
              At Marci Insurance, we believe protecting your health, family, and
              future should be simple and affordable. We help individuals and
              families find coverage that fits their needs, whether you're
              looking for health insurance, life insurance, family protection
              plans, Medicare options, or additional coverage for dental and
              vision care. Our goal is to provide clear guidance, personalized
              support and dependable service every step of the way.
            </p>
            <br />
            <br />
            <a href="#services-section">
              <div className="learn-more-cta">
                <h3>Learn More</h3>
              </div>
            </a>
          </div>
        </section>

        <div className="website-container">
          <section className="hero-section">
            <div className="hero-grid">
              <div>
                <div className="hero-text">
                  <h1 className="hero-text-h1">
                    Protect Your Family & Your Future
                  </h1>
                </div>
                <div className="family-image-wrapper">
                  <img
                    src={images.happyFamily}
                    alt="a happy family of 4"
                    className="family-image"
                  />
                </div>
              </div>

              <div className="health-services">
                <ul className="ul-grid">
                  <li>
                    <h2>
                      <i className="fa-solid fa-shield-heart"></i>Life
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <i className="fa-solid fa-heart-pulse"></i>Health
                      Insurance
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <i className="fa-solid fa-people-roof"></i>Family Coverage
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <i className="fa-solid fa-notes-medical"></i>Obamacare
                    </h2>
                  </li>

                  <li>
                    <h2>
                      <i className="fa-solid fa-umbrella-beach"></i>Retirement
                    </h2>
                  </li>

                  <li>
                    <h2>
                      <i className="fa-solid fa-tooth"></i>Dental
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <i className="fa-solid fa-eye"></i>Vision
                    </h2>
                  </li>
                  <li>
                    <h2>
                      <i className="fa-solid fa-dove"></i>Pre-Need Funeral Plans
                    </h2>
                  </li>
                </ul>
                <h1 className="medicare">Medicare</h1>
              </div>
            </div>

            <div className="hero-content-grid" id="req-form-card">
              <div className="hero-content">
                <h1 className="call-agent">
                  Get personalized guidance from a trusted local insurance agent
                  today!
                </h1>

                <img src={images.insAgent} />

                <div className="hero-buttons">
                  <Link to="/contact" className="primary-btn">
                    Get a Free Quote
                  </Link>

                  <a href="#contact-info-phone" className="secondary-btn">
                    Call Now
                  </a>
                </div>
              </div>

              <div className="form-card">
                <div>
                  <h2 className="req-info-title">Request Information</h2>
                </div>

                <form id="insurance-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    className="input-submit-form"
                    placeholder="Full Name"
                    required
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    className="input-submit-form"
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    className="input-submit-form"
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                  />

                  <select
                    className="select-opt"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                  >
                    <option value="">Interested In</option>
                    <option value="Health Insurance">Health Insurance</option>
                    <option value="Life Insurance">Life Insurance</option>
                    <option value="Family Coverage">Family Coverage</option>
                    <option value="Medicare Plans">Medicare Plans</option>
                  </select>

                  <button type="submit" className="submit-btn">
                    Submit Request
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        <section className="services-section" id="services-section">
          <h2>Insurance Services</h2>
          <p className="section-description">
            Helping Individuals and Families Find Reliable Coverage With Clear,
            Honest Guidance
          </p>

          <div className="services-grid">
            <div className="service-card">
              <div>
                <h3>Health Insurance</h3>
              </div>
              <div>
                <img
                  src={images.piggyBank}
                  alt="piggy bank and stethoscope"
                  className="service-img"
                />
              </div>

              <div>
                <p>
                  We help you find affordable health insurance options designed
                  to protect you and your family from unexpected medical costs.
                  This can save money for individuals, families and small
                  businesses, and by comparing coverage choices with confidence,
                  we can provide clear guidance so you can choose a plan that
                  fits both your healthcare needs and your budget.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div>
                <h3>Life Insurance</h3>
              </div>

              <div>
                <img
                  src={images.couple}
                  alt="a couple looking at a laptop"
                  className="service-img"
                />
              </div>

              <div>
                <p>
                  Protect your loved ones with long-term financial security.
                  Life insurance is vital to provide financial protection for
                  the people who matter most. Marci Insurance helps clients
                  explore coverage options that can help support loved ones with
                  future expenses, income protection and long-term security. We
                  make understanding life insurance simple, clear and
                  personalized to your goals.
                </p>
              </div>
            </div>

            <div className="service-card">
              <div>
                <h3>Family Coverage</h3>
              </div>

              <div>
                <img
                  src={images.familyBubbles}
                  alt="family playing with bubbles outdoors"
                  className="service-img"
                />
              </div>

              <div>
                <p>
                  Customized plans designed around your family’s unique needs.
                  We understand that every family has unique needs, and finding
                  the right coverage matters. Marci Insurance helps families
                  explore insurance solutions designed to fit their household,
                  budget and future plans. Our goal is to help provide peace of
                  mind through dependable coverage options and trusted local
                  guidance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="why-content">
            <div className="why-img-container">
              <div>
                <h2 className="why-subheading">Why Clients Trust Us</h2>
              </div>
              <div>
                <img
                  src={images.serviceAgent}
                  alt="Insurance Consultation - agent meeting with a couple"
                  className="why-image"
                />
              </div>
            </div>

            <div className="why-text">
              <div className="feature">
                <h3>✔ Personalized Guidance</h3>
                <p className="why-para">
                  We help clients compare plans and understand coverage options.
                </p>
              </div>

              <div className="feature">
                <h3>✔ Affordable Solutions</h3>
                <p className="why-para">
                  Find plans that fit both your healthcare needs and your
                  budget.
                </p>
              </div>

              <div className="feature">
                <h3>✔ Ongoing Support</h3>
                <p className="why-para">
                  Assistance before, during, and after enrollment.
                </p>
              </div>

              <div id="contact-info-phone">
                <h2 className="why-heading">Your Insurance Agent</h2>
                <h4>Marci Barrera</h4>
                <p className="why-heading">Phone: (956) 283-4343</p>
                <p className="why-heading">Email: Mbarrera830@icloud.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-grid">
          <div>
            <img
              src={images.barreraLogo}
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

export default Home;
