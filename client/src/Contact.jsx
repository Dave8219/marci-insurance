import { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./contact.css";
import RenderHeader from "./RenderHeader";
import RenderFooter from "./RenderFooter";

const mapLeadFromAPI = (lead) => ({
  id: lead.id,
  status: lead.status,
  name: lead.name,
  email: lead.email,
  phone: lead.phone,
  message: lead.message,
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

const Contact = () => {
  const [myLeads, setMyLeads] = useState([]);
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

  const [formData, setFormData] = useState({
    status: "new",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const API = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      /*
      [e.target.name]: e.target.value,
      */
      [name]: name === "phone" ? formatPhoneNumber(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.message
    ) {
      return alert("Please fill out all fields");
    }

    const payload = {
      status: formData.status,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      created_at: new Date().toISOString(),
    };

    const response = await axios.post(`${API}/api/v1/create-lead`, payload);
    console.log("POST RESPONSE", response.data);

    setMyLeads((prev) => [...prev, mapLeadFromAPI(response.data)]);

    /*
    const fakeId = Date.now();
    const newLead = {
      id: fakeId,
      created: new Date().toISOString(),
      status: "new",

      ...formData,
    };

    const existingLeads = JSON.parse(localStorage.getItem("leads")) || [];

    const updatedLeads = [...existingLeads, newLead];

    localStorage.setItem("leads", JSON.stringify(updatedLeads));
*/

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <RenderHeader />

      <div className="contact-page" ref={pageRef}>
        <section className="contact-hero hidden">
          <div className="hero-image">
            <img src="/src/assets/contact-hero-image.png" alt="Contact" />
          </div>

          <div className="hero-text">
            <div className="hero-image-heading">
              <h1>Get In Touch</h1>
            </div>

            <p>
              Have questions about Medicare, Life, or Health insurance? We’re
              here to help you every step of the way.
            </p>

            <div className="contact-buttons">
              <a className="contact-buttons-call" href="#contact-phone">
                Call Now
              </a>
              <a className="secondary-msg-btn" href="#send-message">
                Send Message
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT CARDS */}
        <section className="contact-cards hidden" id="contact-phone">
          <div className="card">
            <h3>Call Us</h3>
            <p>(956) 283-4343</p>
          </div>

          <div className="card">
            <h3>Email</h3>
            <p>Mbarrera830@icloud.com</p>
          </div>

          <div className="card">
            <h3>Office</h3>
            <p>McAllen, TX</p>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="contact-form hidden" id="send-message">
          <h2>Send a Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />

            <textarea
              placeholder="How can we help you?"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <button type="submit" className="contact-sub-btn">
              Submit
            </button>
          </form>
        </section>

        {/* MAP SECTION */}
        <section className="map-section hidden">
          <h2>Find Us Here</h2>

          <div className="map-container">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=McAllen,TX&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </section>
      </div>
      <RenderFooter />
    </>
  );
};

export default Contact;
