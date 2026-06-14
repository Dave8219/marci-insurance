import { useState, useEffect } from "react";
import ReactRouter from "./ReactRouter";
import "./home.css";

const Home = () => {
  /*
  const btn = document.getElementById("hamburgerBtn");
  const menu = document.getElementById("mobileNav");

  btn.addEventListener("click", () => {
    menu.classList.toggle("show");
  });
*/
  const [addedLead, setAddedLead] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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

    /*
  const response = await axios.post(`${API}/api/v1/new-employee`, {
    employee_name: formData.name,
    hourly_pay: formData.hourlyPay,
    hire_date: formData.hireDate,
    position: formData.position,
  });
  console.log("POST RESPONSE", response.data);
*/

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

  return (
    <>
      <div className="banner">
        <h5 className="quote-text">Get a Quote Today!</h5>
      </div>
      <header className="site-header">
        <div className="logo">
          <img src="src/assets/ins-logo.png" className="img-logo" />
        </div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <div className="dropdown">
            <a href="#services" className="drop-btn">
              Services
            </a>
            <div className="dropdown-content">
              <a href="#health">Health Insurance</a>
              <a href="#medicare">Medicare</a>
              <a href="life-insurance.html">Life Insurance</a>
            </div>
          </div>

          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="contact-info">
          <i className="fa-solid fa-phone phone-icon"></i>
          <p className="phone-number-nav">(956) 283-4343</p>
        </div>

        <div className="mobile-menu-wrapper">
          <div className="menu-label">Menu</div>
          <button className="hamburger" id="hamburgerBtn">
            <i className="fa-solid fa-bars"></i>
          </button>

          <nav className="mobile-nav" id="mobileNav">
            <a href="#home">Home</a>

            <div className="dropdown">
              <a href="#services" className="drop-btn">
                Services
              </a>
              <div className="dropdown-content">
                <a href="#health">Health Insurance</a>
                <a href="#medicare">Medicare</a>
                <a href="life-insurance.html">Life Insurance</a>
              </div>
            </div>

            <a href="#why">Why Us</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero-image-box">
        <img
          className="hero-image"
          src="src/assets/flowers.jpeg"
          alt="a picture of flowers in a field"
        />
        <div className="hero-box">
          <h1 className="hero-title-heading">Get Peace of Mind</h1>
          <br />
          <br />
          <p className="hero-para">
            At Marci Insurance, we believe protecting your health, family, and
            future should be simple and affordable. We help individuals and
            families find coverage that fits their needs, whether you're looking
            for health insurance, life insurance, family protection plans,
            Medicare options, or additional coverage for dental and vision care.
            Our goal is to provide clear guidance, personalized support and
            dependable service every step of the way.
          </p>
          <br />
          <br />
          <div className="learn-more-cta">
            <h3>Learn More</h3>
          </div>
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
                  src="src/assets/happy-family.png"
                  alt="a happy family of 4"
                  className="family-image"
                />
              </div>
            </div>

            <div className="health-services">
              <ul>
                <li>
                  <h2>
                    <i className="fa-solid fa-shield-heart"></i>Life
                  </h2>
                </li>
                <li>
                  <h2>
                    <i className="fa-solid fa-heart-pulse"></i>Health Insurance
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
                    <i className="fa-solid fa-tooth"></i>Dental
                  </h2>
                </li>
                <li>
                  <h2>
                    <i className="fa-solid fa-eye"></i>Vision
                  </h2>
                </li>
              </ul>
              <h1 className="medicare">Medicare</h1>
            </div>
          </div>

          <div className="hero-content-grid">
            <div className="hero-content">
              <h1 className="call-agent">
                Get personalized guidance from a trusted local insurance agent
                today!
              </h1>

              <img src="src/assets/cs-agent.png" />

              <div className="hero-buttons">
                <button className="primary-btn">Get a Free Quote</button>
                <button className="secondary-btn">Call Now</button>
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
                  className="input"
                  placeholder="Full Name"
                  required
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  className="input"
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  className="input"
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

      <section className="services-section">
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
                src="src/assets/ins-savings.png"
                alt="piggy bank and stethoscope"
                className="service-img"
              />
            </div>

            <div>
              <p>
                We help you find affordable health insurance options designed to
                protect you and your family from unexpected medical costs. This
                can save money for individuals, families and small businesses,
                and by comparing coverage choices with confidence, we can
                provide clear guidance so you can choose a plan that fits both
                your healthcare needs and your budget.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div>
              <h3>Life Insurance</h3>
            </div>

            <div>
              <img
                src="src/assets/life-ins.png"
                alt="a couple looking at a laptop"
                className="service-img"
              />
            </div>

            <div>
              <p>
                Protect your loved ones with long-term financial security. Life
                insurance is vital to provide financial protection for the
                people who matter most. Marci Insurance helps clients explore
                coverage options that can help support loved ones with future
                expenses, income protection and long-term security. We make
                understanding life insurance simple, clear and personalized to
                your goals.
              </p>
            </div>
          </div>

          <div className="service-card">
            <div>
              <h3>Family Coverage</h3>
            </div>

            <div>
              <img
                src="src/assets/family-bubbles.png"
                alt="family playing with bubbles outdoors"
                className="service-img"
              />
            </div>

            <div>
              <p>
                Customized plans designed around your family’s unique needs. We
                understand that every family has unique needs, and finding the
                right coverage matters. Marci Insurance helps families explore
                insurance solutions designed to fit their household, budget and
                future plans. Our goal is to help provide peace of mind through
                dependable coverage options and trusted local guidance.
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
                src="src/assets/service-agent-customer.png"
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
                Find plans that fit both your healthcare needs and your budget.
              </p>
            </div>

            <div className="feature">
              <h3>✔ Ongoing Support</h3>
              <p className="why-para">
                Assistance before, during, and after enrollment.
              </p>
            </div>

            <div>
              <h2 className="why-heading">Your Insurance Agent</h2>
              <h4>Marci Barrera</h4>
              <p className="why-heading">Phone: (956) 283-4343</p>
              <p className="why-heading">Email: Mbarrera830@icloud.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div>
            <img
              src="src/assets/Ins Logo2.png"
              alt="company logo"
              className="img-logo-2"
            />
            <br />
            <br />
            <p>Helping families protect their health and financial future.</p>
          </div>

          <div>
            <h4>Contact</h4>
            <p>Email: Mbarrera830@icloud.com</p>
            <p>Phone: (956) 283-4343</p>
            <p>Location: McAllen, Texas, USA</p>
          </div>

          <div>
            <h4>Office Hours</h4>
            <p>Monday – Friday</p>
            <p>9:00 AM – 6:00 PM</p>
          </div>
        </div>
        <div class="footer-bottom">
          © 2026 Marci Insurance. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Home;
