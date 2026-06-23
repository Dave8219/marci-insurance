import { useState } from "react";
import "./dashboard.css";

import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-page">
        <header className="site-header">
          <div className="logo">
            <Link to="/">
              <img
                src="src/assets/barrera-logo-no-background.png"
                className="img-logo"
              />
            </Link>
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
