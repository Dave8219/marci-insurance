import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./dashboard.css";
import logo from "./assets/barrera-logo-no-background.png";
import { Link } from "react-router-dom";

const images = {
  logo,
};

const Dashboard = () => {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_BASE_URL;
  const handleLogout = async () => {
    try {
      await axios.post(
        `${API}/api/v1/auth/logout`,
        {},
        {
          withCredentials: true,
        },
      );

      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      <div className="dashboard-page">
        <header className="site-header">
          <div className="logo">
            <Link to="/dashboard">
              <img src={images.logo} className="img-logo" />
            </Link>
          </div>
          <div className="logout-box" onClick={handleLogout}>
            <h5 className="logout-text">Logout</h5>
          </div>
        </header>
        <main>
          <div>
            <h4 className="welcome-message">Welcome, Marci</h4>
          </div>
          <div className="dashboard-nav">
            <section className="dashboard-container">
              <div>
                <h1 className="admin-title">Admin Dashboard</h1>
              </div>
              <div>
                <Link to="/leads">
                  <button className="view-leads-btn">Leads</button>
                </Link>
              </div>
              <div>
                <Link to="/clients">
                  <button className="view-clients-btn">Clients</button>
                </Link>
              </div>
            </section>
          </div>
        </main>
        <footer className="footer-text-container">
          <p className="footer-text">
            © 2026 Marci Insurance. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default Dashboard;
