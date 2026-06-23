import { useState, useEffect } from "react";
import "./health-insurance.css";
import RenderHeader from "./RenderHeader";
import RenderFooter from "./RenderFooter";

const HealthInsurance = () => {
  return (
    <>
      <RenderHeader />

      <section class="health-hero">
        <video autoPlay muted loop playsInline className="video-player">
          <source src="src/assets/health-ins-vid.mp4" type="video/mp4" />
        </video>

        <div className="video-overlay"></div>

        <div class="hero-overlay">
          <h1>Affordable For You & Your Family</h1>

          <p>
            Protect your health, your finances and your future with quality
            health coverage tailored to your needs.
          </p>

          <a href="#quote" class="quote-btn">
            Request A Free Quote
          </a>
        </div>
      </section>

      <section class="coverage-section">
        <div class="coverage-content">
          <div class="coverage-text">
            <h2>Health Insurance Designed Around Your Needs</h2>

            <p>
              Health insurance helps protect you from unexpected medical
              expenses while providing access to preventive care, doctor visits,
              prescriptions, and hospital services.
            </p>

            <ul>
              <li>Primary Care Visits</li>
              <li>Specialist Appointments</li>
              <li>Preventive Care Services</li>
              <li>Prescription Drug Coverage</li>
              <li>Emergency Medical Services</li>
              <li>Hospitalization Coverage</li>
            </ul>
          </div>

          <div class="coverage-image">
            <img
              src="src/assets/nurse-heart.jpg"
              alt="Health Insurance Services"
            />
          </div>
        </div>
      </section>

      <section class="benefits-section">
        <h2>Benefits Of Having Health Insurance</h2>

        <div class="benefits-grid">
          <div class="benefit-card">
            <h3>Financial Protection</h3>
            <p>
              Reduce the burden of costly medical bills and unexpected
              healthcare expenses.
            </p>
          </div>

          <div class="benefit-card">
            <h3>Preventive Care</h3>
            <p>
              Stay healthier through routine screenings, wellness visits, and
              preventative services.
            </p>
          </div>

          <div class="benefit-card">
            <h3>Access To Quality Care</h3>
            <p>
              Gain access to a network of healthcare professionals and medical
              facilities.
            </p>
          </div>

          <div class="benefit-card">
            <h3>Peace Of Mind</h3>
            <p>
              Feel confident knowing you're protected when unexpected health
              issues arise.
            </p>
          </div>
        </div>
      </section>

      <section class="extras-section">
        <div class="extras-image">
          <img
            src="src/assets/well-being.png"
            alt="Dental and Vision Coverage"
            className="relax-outdoors"
          />
        </div>

        <div class="extras-content">
          <h2>Additional Benefits Available</h2>

          <p>
            Depending on the plan selected, you may have access to additional
            healthcare benefits that help support your overall well-being.
          </p>

          <div class="extras-list">
            <div>
              <h3>Dental Coverage</h3>
              <p>
                Routine cleanings, exams, fillings, and other dental services.
              </p>
            </div>

            <div>
              <h3>Vision Coverage</h3>
              <p>
                Eye exams, prescription lenses, frames, and contact lens
                benefits.
              </p>
            </div>

            <div>
              <h3>Telehealth Services</h3>
              <p>
                Convenient virtual appointments with licensed healthcare
                providers.
              </p>
            </div>

            <div>
              <h3>Wellness Programs</h3>
              <p>
                Resources designed to encourage healthier lifestyles and
                preventive care.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="marketplace-section">
        <div class="marketplace-content">
          <h2>Health Insurance Marketplace Assistance</h2>

          <p>
            The Health Insurance Marketplace offers individuals and families an
            opportunity to compare available plans and determine eligibility for
            potential savings based on income and household size.
          </p>

          <p>
            Navigating the Marketplace can feel overwhelming, but Marci
            Insurance is here to guide you through your options and help you
            understand the plans available in your area.
          </p>

          <a href="#quote" class="marketplace-btn">
            Speak With An Agent
          </a>
        </div>
      </section>

      <section class="health-cta">
        <h2>Ready To Find The Right Health Plan?</h2>

        <p>
          Get personalized assistance and compare coverage options that fit your
          needs and budget.
        </p>

        <a href="#quote" class="cta-btn">
          Request Your Free Quote
        </a>
      </section>
      <RenderFooter />
    </>
  );
};

export default HealthInsurance;
