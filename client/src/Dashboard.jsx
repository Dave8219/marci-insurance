import { useState } from "react";
import "./dashboard.css";
/*
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clients from "./Clients.jsx";
import Leads from "./Leads.jsx";
import Login from "./Login.jsx";
*/

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-page">
        <header className="site-header">
          <div className="logo">
            <img src="src/assets/ins-logo.png" className="img-logo" />
          </div>

          <div className="logout-box">
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
                <button className="view-leads-btn">Leads</button>
              </div>
              <div>
                <button className="view-clients-btn">Clients</button>
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
