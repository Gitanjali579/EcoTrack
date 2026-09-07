import React from "react";
import { Leaf, Mail, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="eco-footer">
      <div className="container">
        <div className="row g-4">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand">
              <div className="footer-logo">
                <Leaf size={24} />
              </div>

              <div>
                <h4>EcoTrack</h4>
                <p>Personal Carbon Footprint Dashboard</p>
              </div>
            </div>

            <p className="footer-description">
              Understand your carbon footprint, make better choices,
              and build a more sustainable lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Quick Links</h5>

            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
              </li>

              <li>
                <a href="/dashboard">Dashboard</a>
              </li>

              <li>
                <a href="/calculator">Calculator</a>
              </li>

              <li>
                <a href="/challenges">Challenges</a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">Explore</h5>

            <ul className="footer-links">
              <li>
                <a href="/simulator">What-If Simulator</a>
              </li>

              <li>
                <a href="/history">History</a>
              </li>

              <li>
                <a href="/profile">Profile</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">Connect</h5>

            <p className="footer-description">
              Built as a frontend portfolio project using modern
              React technologies.
            </p>

            <div className="footer-socials">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label="GitHub"
              >
                <span className="social-text">GitHub</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-social"
                aria-label="LinkedIn"
              >
                <span className="social-text">LinkedIn</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="mailto:your-email@example.com"
                className="footer-social"
                aria-label="Email"
              >
                <Mail size={18} />
                <span className="social-text">Email</span>
              </a>

            </div>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} EcoTrack. All rights reserved.
          </p>

          <p>
            Designed & Developed with React
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;