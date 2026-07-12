import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./health-insurance.css";
import RenderHeader from "./RenderHeader";
import RenderFooter from "./RenderFooter";
import nurse from "./assets/nurse-heart.jpg";
import wellBeing from "./assets/well-being.png";
const images = {
  nurse,
  wellBeing,
};

const HealthInsurance = () => {
  return (
    <>
      <RenderHeader />
      <div className="health-insurance-page">
        <section className="health-hero">
          <video autoPlay muted loop playsInline className="video-player">
            <source src="/Pt-Patient.mp4" type="video/mp4" />
          </video>

          <div className="video-overlay"></div>

          <div className="hero-overlay">
            <h1>Health Insurance</h1>
            <br></br>
            <p>
              Affordable for You & Your Family! Protect your health, your
              finances and your future with quality health coverage tailored to
              your needs.
            </p>
            <br></br>
            <Link to="/contact" className="quote-btn">
              Request A Free Quote
            </Link>
          </div>
        </section>

        <section className="coverage-section">
          <div className="coverage-content">
            <div className="coverage-text">
              <h2>Health Insurance Designed Around Your Needs</h2>

              {/* MOBILE IMAGE */}

              <div className="coverage-image-mobile">
                <img
                  src={images.nurse}
                  alt="Health Insurance Services"
                  className="nurse-heart-mobile"
                />
              </div>

              <p>
                Health insurance helps protect you from unexpected medical
                expenses while providing access to preventive care, doctor
                visits, prescriptions, and hospital services.
              </p>

              <ul className="health-ins-services">
                <li>
                  <i className="fa-solid fa-stethoscope"></i>
                  Primary Care Visits
                </li>
                <li>
                  <i className="fa-solid fa-user-doctor"></i>Specialist
                  Appointments
                </li>
                <li>
                  <i className="fa-solid fa-shield-heart"></i>Preventive Care
                  Services
                </li>
                <li>
                  <i className="fa-solid fa-pills"></i>Prescription Drug
                  Coverage
                </li>
                <li>
                  <i className="fa-solid fa-truck-medical"></i>Emergency Medical
                  Services
                </li>
                <li>
                  <i className="fa-solid fa-hospital"></i>Hospitalization
                  Coverage
                </li>
              </ul>
            </div>

            <div className="coverage-image">
              <img
                src={images.nurse}
                alt="Health Insurance Services"
                className="nurse-heart"
              />
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <h2>Benefits Of Having Health Insurance</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Financial Protection</h3>
              <p>
                Reduce the burden of costly medical bills and unexpected
                healthcare expenses.
              </p>
            </div>

            <div className="benefit-card">
              <h3>Preventive Care</h3>
              <p>
                Stay healthier through routine screenings, wellness visits, and
                preventative services.
              </p>
            </div>

            <div className="benefit-card">
              <h3>Access To Quality Care</h3>
              <p>
                Gain access to a network of healthcare professionals and medical
                facilities.
              </p>
            </div>

            <div className="benefit-card">
              <h3>Peace Of Mind</h3>
              <p>
                Feel confident knowing you're protected when unexpected health
                issues arise.
              </p>
            </div>
          </div>
        </section>

        <section className="extras-section">
          <div className="extras-image">
            <img
              src={images.wellBeing}
              alt="Dental and Vision Coverage"
              className="relax-outdoors"
            />
          </div>

          <div className="extras-content">
            <h2>Additional Benefits Available</h2>

            {/* MOBILE IMAGE */}

            <div className="extras-image-mobile">
              <img
                src={images.wellBeing}
                alt="Dental and Vision Coverage"
                className="relax-outdoors-mobile"
              />
            </div>

            <p className="extras-sub">
              Depending on the plan selected, you may have access to additional
              healthcare benefits that help support your overall well-being.
            </p>
            <br></br>
            <ul className="extras-list">
              <li>
                <h3>Dental Coverage</h3>
                <p>
                  Routine cleanings, exams, fillings, and other dental services.
                </p>
              </li>
              <br></br>
              <li>
                <h3>Vision Coverage</h3>
                <p>
                  Eye exams, prescription lenses, frames, and contact lens
                  benefits.
                </p>
              </li>
              <br></br>
              <li>
                <h3>Telehealth Services</h3>
                <p>
                  Convenient virtual appointments with licensed healthcare
                  providers.
                </p>
              </li>
              <br></br>
              <li>
                <h3>Wellness Programs</h3>
                <p>
                  Resources designed to encourage healthier lifestyles and
                  preventive care.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className="marketplace-section">
          <div className="marketplace-content">
            <h2>Health Insurance Marketplace Assistance</h2>

            <p>
              The Health Insurance Marketplace offers individuals and families
              an opportunity to compare available plans and determine
              eligibility for potential savings based on income and household
              size.
            </p>
            <br></br>
            <p>
              Navigating the Marketplace can feel overwhelming, but Marci
              Insurance is here to guide you through your options and help you
              understand the plans available in your area.
            </p>

            <Link to="/contact" className="marketplace-btn">
              Speak With An Agent
            </Link>
          </div>
        </section>

        <section className="health-cta">
          <h2>Ready To Find The Right Health Plan?</h2>

          <p>
            Get personalized assistance and compare coverage options that fit
            your needs and budget.
          </p>

          <Link to="/contact" className="cta-btn">
            Request Your Free Quote
          </Link>
        </section>
      </div>

      <RenderFooter />
    </>
  );
};

export default HealthInsurance;
