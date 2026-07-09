import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RenderHeader from "./RenderHeader";
import RenderFooter from "./RenderFooter";
import "./medicare.css";
import { FaCheckCircle } from "react-icons/fa";
const Medicare = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const sections = pageRef.current.querySelectorAll(".hidden-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-section");
          }
        });
      },
      { threshold: 0.15 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <RenderHeader />
      <div className="medicare-page" ref={pageRef}>
        <section className="medicare-hero">
          <div className="hero-content">
            <span className="hero-badge">Medicare Guidance Made Simple</span>

            <h1>Find the Medicare Coverage That's Right For You</h1>

            {/* MOBILE IMAGE */}
            <div className="hero-image-mobile">
              <img
                src="/src/assets/old-couple.jpg"
                alt="Old Couple"
                className="hero-image"
              />
            </div>

            <p>
              We help you compare Medicare Advantage, Supplement Plans,
              Prescription Drug Coverage, and more — with personal guidance
              every step of the way.
            </p>

            <div className="hero-buttons">
              <Link to="/contact" className="schedule-btn">
                Schedule Consultation
              </Link>
              <a href="#parts-section" className="learn-btn">
                Learn More
              </a>
            </div>
          </div>

          <div className="hero-image-container">
            <img
              src="/src/assets/old-couple.jpg"
              alt="Old Couple"
              className="hero-image"
            />

            <div className="floating-card">Licensed Medicare Assistance</div>
          </div>
        </section>

        <section className="benefits-section">
          <h2>How We Help</h2>

          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Medicare Advantage</h3>
              <p>Compare plans and understand your options.</p>
            </div>

            <div className="benefit-card">
              <h3>Supplement Plans</h3>
              <p>Help reduce out-of-pocket medical expenses.</p>
            </div>

            <div className="benefit-card">
              <h3>Prescription Coverage</h3>
              <p>Review Part D options that fit your needs.</p>
            </div>
          </div>
        </section>

        <section className="why-us">
          <div className="why-content">
            <h2>Personalized Guidance, Not Call Centers</h2>
            <div>
              <p>
                We take time to understand your situation and explain Medicare
                options clearly.
              </p>
            </div>

            <ul>
              <li>
                <FaCheckCircle className="blue-check" />
                One-on-one consultations
              </li>

              <li>
                <FaCheckCircle className="blue-check" />
                Local support
              </li>

              <li>
                <FaCheckCircle className="blue-check" />
                Plan comparisons
              </li>

              <li>
                <FaCheckCircle className="blue-check" />
                Enrollment assistance
              </li>
            </ul>

            <div className="why-image-container">
              <img
                src="src/assets/insurance-explanation.jpg"
                alt="Young Agent Talking to an Elderly Person"
                className="why-image"
              />
            </div>
          </div>
        </section>

        <section className="turning-65 hidden-section">
          <div className="turning-content">
            <h2>Turning 65 Soon?</h2>
            <br></br>

            {/* MOBILE IMAGE */}

            <div className="turning-icon-mobile">
              <img
                src="/src/assets/old-couple-bikes.png"
                className="old-couple-bikes"
                alt="Old Couple Riding Bikes"
              />
            </div>

            <p>
              Medicare enrollment can feel overwhelming. We help simplify your
              options and avoid costly mistakes.
            </p>
            <br></br>
            <p>
              Your Initial Enrollment Period begins three months before your
              65th birthday, includes your birth month, and continues for three
              months afterward. Enrolling at the right time can help you avoid
              late enrollment penalties and gaps in coverage.
            </p>
            <br></br>
            <p>
              We can walk you through your options, explain important deadlines,
              and help determine which Medicare plan best aligns with your
              healthcare needs.
            </p>
            <br></br>
            <Link to="/contact">
              <button className="schedule-btn">Schedule a Consultation</button>
            </Link>
          </div>

          <div className="turning-icon">
            <img
              src="/src/assets/old-couple-bikes.png"
              className="old-couple-bikes"
              alt="Old Couple Riding Bikes"
            />
          </div>
        </section>

        <section className="parts-section hidden-section" id="parts-section">
          <h2>Understanding Medicare</h2>

          <div className="parts-grid">
            <div className="part-card">
              <h3>Part A</h3>
              <p>Hospital Coverage</p>
            </div>

            <div className="part-card">
              <h3>Part B</h3>
              <p>Medical Coverage</p>
            </div>

            <div className="part-card">
              <h3>Part C</h3>
              <p>Medicare Advantage</p>
            </div>

            <div className="part-card">
              <h3>Part D</h3>
              <p>Prescription Drug Plans</p>
            </div>
          </div>
        </section>

        <section className="medicare-info hidden-section">
          <div className="info-content">
            <h2>Making Medicare Decisions With Confidence</h2>
            <br></br>
            <p>
              Choosing Medicare coverage is one of the most important healthcare
              decisions you'll make during retirement. With multiple plan
              options, enrollment periods, and coverage differences, it's easy
              to feel overwhelmed.
            </p>
            <br></br>
            <p>
              Our goal is to simplify the process by helping you understand your
              benefits, compare available plans, and find coverage that fits
              your healthcare needs and budget. Whether you're turning 65,
              retiring, relocating, or reviewing your current plan, we're here
              to answer your questions and provide guidance every step of the
              way.
            </p>
            <br></br>
            <p>
              We work with individuals and families to review Medicare
              Advantage, Medicare Supplement, and Prescription Drug Plans so
              they can make informed decisions with confidence.
            </p>
          </div>
        </section>

        <section className="faq-section hidden-section">
          <div className="details-container">
            <h2>Frequently Asked Questions</h2>

            <details>
              <summary>When should I enroll in Medicare?</summary>

              <p>Most individuals become eligible at age 65.</p>
            </details>

            <details>
              <summary>What is Medicare Advantage?</summary>

              <p>
                Medicare Advantage combines Parts A and B and often includes
                additional benefits.
              </p>
            </details>

            <details>
              <summary>Do I need a Medicare Supplement plan?</summary>

              <p>
                Medicare Supplement plans can help cover certain out-of-pocket
                expenses that Original Medicare does not pay, such as
                deductibles, copayments, and coinsurance.
              </p>
            </details>

            <details>
              <summary>Can I keep my current doctor?</summary>

              <p>
                Provider networks vary by plan. We can help review available
                options to determine whether your preferred doctors and
                specialists participate in a plan's network.
              </p>
            </details>

            <details>
              <summary>Can I change my Medicare plan later?</summary>

              <p>
                Yes. Certain enrollment periods throughout the year may allow
                you to review and make changes to your Medicare coverage based
                on your needs.
              </p>
            </details>
          </div>

          <div className="elderly-couple-bench-container">
            <img
              src="src/assets/elderly-couple-bench.png"
              alt="Elderly Couple Sitting in a Bench"
              className="elderly-couple-bench"
            />
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Explore Your Medicare Options?</h2>

          <p>
            Let's discuss your healthcare goals and find coverage that works for
            you.
          </p>
          <Link to="/contact" className="cta-btn">
            Get Started Today
          </Link>
        </section>
      </div>
      <RenderFooter />
    </>
  );
};

export default Medicare;
