import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clients from "./Clients.jsx";
import Leads from "./Leads.jsx";
import Login from "./Login.jsx";
import Welcome from "./Welcome.jsx";

const ReactRouter = () => {
  return (
    <>
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/login" target="_blank" rel="noopener noreferrer">
              Login
            </Link>
          </li>
          <li>
            <Link to="/leads" target="_blank" rel="noopener noreferrer">
              Leads
            </Link>
          </li>
          <li>
            <Link to="/clients" target="_blank" rel="noopener noreferrer">
              Clients
            </Link>
          </li>
          <li>
            <Link to="/welcome" target="_blank" rel="noopener noreferrer">
              Welcome
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </>
  );
};

export default ReactRouter;
