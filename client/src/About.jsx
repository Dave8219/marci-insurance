import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./about.css";
import RenderFooter from "./RenderFooter";
import RenderHeader from "./RenderHeader";
import familyPlaying from "./assets/about-me-family-playing-copy.png";
import marciPicture from "./assets/marci-picture.jpeg";
const images = {
  familyPlaying,
  marciPicture,
};

const About = () => {
  return (
    <>
      <RenderHeader />

      <div className="about-page">
        <section className="about-hero">
          <div>
            <img
              src={images.familyPlaying}
              className="about-me-hero"
              alt="A Picture of a Family Playing"
            />
          </div>

          <div className="video-overlay"></div>

          <div className="hero-overlay">
            <h1>The Right Choice for You & Your Family</h1>
          </div>
        </section>

        <section className="about-grid-container">
          <div>
            <h1>About Me</h1>
            <br></br>

            {/* MOBILE IMAGE */}
            <div className="hero-image-mobile-about">
              <img
                src={images.marciPicture}
                className="marci-picture"
                alt="A Picture of Insurance Agent"
              />
            </div>
            <br></br>
            <p>
              Welcome to Marci Insurance where our number one priority is you.
              My name is Marci Barrera, and I am a licensed insurance agent who
              specializes in a wide selection of insurance services, including,
              but not limited to, health insurance, life insurance, medicare and
              more. My goal is to tailor a plan that fits your needs and budget.
              Rest assured that your financial future will be secured along with
              protecting you and your family's well-being.
              <br></br>
              <br></br>I am proud to serve my friends, family and neighbors here
              in the Rio Grande Valley. I look forward to hearing from you and
              helping you find the coverage that's right for you.
            </p>
            <br></br>
            <h2>Mission Statement</h2>
            <p className="mission-statement">
              "If it's important to you, it's important to me."
            </p>
            <br></br>
            <div>
              <Link to="/contact" className="contact-me-btn">
                <h4>Contact Me</h4>
              </Link>
            </div>
          </div>

          <div className="marci-picture-container">
            <img
              src={images.marciPicture}
              className="marci-picture"
              alt="A Picture of Insurance Agent"
            />
          </div>
        </section>
      </div>

      <RenderFooter />
    </>
  );
};

export default About;
