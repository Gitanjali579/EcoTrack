import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/loadingSpinner.css";

import "./styles/history.css";
import "./styles/profile.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Bootstrap JavaScript
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Application
import App from "./App";

// Global CSS
import "./index.css";

// Custom CSS
import "./styles/global.css";
import "./styles/navbar.css";
import "./styles/sidebar.css";
import "./styles/dashboard.css";
import "./styles/calculator.css";
import "./styles/simulator.css";
import "./styles/challenges.css";
import "./styles/responsive.css";

// ============================================
// Render React Application
// ============================================

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);