import React from "react";
import { Leaf, Bell, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm sticky-top">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <div className="ecotrack-logo">
            <Leaf size={22} />
          </div>

          <div>
            <span className="fw-bold text-dark">Eco</span>
            <span className="fw-bold text-success">Track</span>
          </div>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">

          {/* Navigation */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/calculator">
                Calculator
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/simulator">
                What-If Simulator
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/challenges">
                Challenges
              </Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">

            <button className="btn btn-light notification-btn">
              <Bell size={19} />
              <span className="notification-dot"></span>
            </button>

            <Link
              to="/profile"
              className="d-flex align-items-center gap-2 text-decoration-none text-dark"
            >
              <UserCircle size={30} />

              <div className="d-none d-md-block">
                <small className="text-muted d-block">Welcome</small>
                <span className="fw-semibold">Eco User</span>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;