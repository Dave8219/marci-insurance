import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import RenderFooter from "./RenderFooter";
import RenderHeader from "./RenderHeader";
import "./life-insurance.css";
import happyFamily from "./assets/happy-family-playing.jpg";
import financialPlanning from "./assets/financial-planning.png";
import familyProtection from "./assets/family-protection.png";
import financialSupport from "./assets/financial-support.png";
import talkingFriends from "./assets/young-old-talking-copy.png";
const images = {
  happyFamily,
  financialPlanning,
  familyProtection,
  financialSupport,
  talkingFriends,
};

const LifeInsurance = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const items = pageRef.current.querySelectorAll(".hidden");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 },
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <RenderHeader />
      <div className="life-page" ref={pageRef}>
        {/* HERO */}
        <section className="life-hero hidden">
          <div className="hero-text">
            <span>Protect What Matters Most</span>

            <h1>Life Insurance That Protects Your Family’s Future</h1>

            {/* MOBILE IMAGE */}
            <div className="hero-image-mobile-life">
              <img
                src={images.happyFamily}
                alt="Family"
                className="hero-image-life"
              />
            </div>

            <p>
              Plan ahead with confidence. Make sure your loved ones are
              financially protected no matter what happens.
            </p>

            <div className="hero-buttons">
              <Link to="/#req-form-card" className="quote-button">
                Get a Free Quote
              </Link>
              <Link className="secondary-btn" to="/contact">
                Talk to an Agent
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <img src={images.happyFamily} alt="Family" className="blob-image" />

            <div className="floating-tag">Peace of Mind Coverage</div>
          </div>
        </section>

        {/* WHY LIFE INSURANCE SECTION */}
        <section className="life-why-section hidden">
          <div className="life-why-header">
            <h2>Life Security</h2>

            <p>
              Life insurance isn’t just a policy — it’s a financial safety net
              that protects the people who depend on you most. It helps ensure
              your family can stay financially stable even if the unexpected
              happens.
            </p>
          </div>

          <div className="life-why-grid">
            <div className="life-why-card">
              <h3>Financial Planning</h3>
              <img
                src={images.financialPlanning}
                className="financial-planning"
                alt="An Older Couple Talks With a Financial Planner"
              />
              <p>
                If something were to happen to you, your household income
                shouldn’t disappear with it. Life insurance helps replace lost
                income so your family can continue paying for everyday
                essentials like rent, groceries, utilities, and childcare
                without major financial disruption.
              </p>
            </div>

            <div className="life-why-card">
              <h3>Protection for Your Family</h3>
              <img
                src={images.familyProtection}
                className="family-protection"
                alt="A Mom Protecting Daughter From the Rain"
              />
              <p>
                Many families carry mortgages, car loans, credit cards, or
                personal debt. Life insurance helps ensure these obligations
                don’t become a burden on your loved ones, giving them financial
                breathing room during an already difficult time.
              </p>
            </div>

            <div className="life-why-card">
              <h3>Support Now & for The Future</h3>
              <img
                src={images.financialSupport}
                className="financial-support"
                alt="A Piggy Bank Balances On Boards"
              />
              <p>
                Life insurance isn’t just about protection — it’s about legacy.
                It allows you to leave behind financial support that can help
                with education, future opportunities, or simply giving your
                family a stronger financial foundation.
              </p>
            </div>
          </div>
        </section>

        {/* WHY LIFE INSURANCE */}
        <section className="why-life hidden">
          <h2>Why Life Insurance Matters</h2>

          <div className="why-grid">
            <div className="why-card">
              <h3>Income Protection</h3>
              <p>Replace lost income for your family.</p>
            </div>

            <div className="why-card">
              <h3>Debt Coverage</h3>
              <p>Help cover mortgages, loans, and expenses.</p>
            </div>

            <div className="why-card">
              <h3>Legacy Planning</h3>
              <p>Leave something meaningful behind.</p>
            </div>
          </div>
        </section>

        {/* SIMPLE EXPLANATION SECTION */}
        <section className="simple-section hidden">
          <div className="simple-image">
            <img src={images.talkingFriends} className="simple-image-img" />
          </div>

          <div className="simple-text">
            <h1>Simple, Transparent Coverage</h1>

            {/* MOBILE IMAGE */}

            <div className="simple-image-mobile">
              <img src={images.talkingFriends} className="simple-image-img" />
            </div>

            <h5>
              No confusing terms. No pressure. Just clear options that fit your
              budget and goals.
            </h5>
            <br></br>
            <p>
              We believe life insurance should be simple to understand and easy
              to get. That’s why we focus on clear options, honest guidance, and
              coverage that fits your budget without unnecessary confusion or
              pressure. Our goal is to help you make an informed decision with
              confidence.
            </p>

            <ul>
              <li>
                <strong>Term Life Insurance:</strong> Affordable protection that
                lasts for a specific period of time, making it a great option
                for families looking for strong coverage at a lower cost.
              </li>

              <li>
                <strong>Whole Life Insurance:</strong> Lifetime coverage that
                also builds long-term value over time, giving you both
                protection and a financial asset you can rely on.
              </li>

              <li>
                <strong>Final Expense Plans:</strong> Designed to help cover
                end-of-life costs such as funeral expenses and outstanding bills
                so your family isn’t left with financial stress.
              </li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="life-cta hidden">
          <h2>Ready to Protect Your Family?</h2>

          <p>Get a personalized life insurance quote in minutes.</p>
          <Link to="/#req-form-card" className="cta-btn">
            Start Now
          </Link>
        </section>
      </div>
      <RenderFooter />
    </>
  );
};

export default LifeInsurance;
