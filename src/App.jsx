import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import Simulator from "./pages/Simulator";
import Challenges from "./pages/Challenges";
import History from "./pages/History";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      
      {/* Top Navigation */}
      <Navbar />

      {/* Main Application Content */}
      <main className="page-container">
        <Routes>

          {/* Home */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* Dashboard */}
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Carbon Calculator */}
          <Route
            path="/calculator"
            element={<Calculator />}
          />

          {/* What-If Simulator */}
          <Route
            path="/simulator"
            element={<Simulator />}
          />

          {/* Eco Challenges */}
          <Route
            path="/challenges"
            element={<Challenges />}
          />

          {/* Calculation History */}
          <Route
            path="/history"
            element={<History />}
          />

          {/* User Profile */}
          <Route
            path="/profile"
            element={<Profile />}
          />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="container py-5">
                <div className="text-center py-5">

                  <h1 className="display-1 fw-bold text-success">
                    404
                  </h1>

                  <h2 className="fw-bold mb-3">
                    Page Not Found
                  </h2>

                  <p className="text-muted mb-4">
                    Sorry, the page you are looking for
                    doesn't exist.
                  </p>

                  <Link
                    to="/"
                    className="btn btn-success px-4"
                  >
                    Go Home
                  </Link>

                </div>
              </div>
            }
          />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;