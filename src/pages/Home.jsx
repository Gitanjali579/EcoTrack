import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Leaf,
  BarChart3,
  Calculator,
  Lightbulb,
  Recycle,
  Car,
  Zap,
  Utensils,
  Trophy,
} from "lucide-react";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO SECTION ================= */}
      <section className="hero-section py-5">
        <div className="container py-4">
          <div className="row align-items-center g-5">

            {/* LEFT SIDE */}
            <div className="col-lg-6">

              {/* Logo */}
              <div className="mb-4">
                <img
                  src="/images/logo.png"
                  alt="EcoTrack Logo"
                  style={{
                    maxWidth: "180px",
                    height: "auto",
                  }}
                />
              </div>

              <span className="badge bg-success-subtle text-success px-3 py-2 mb-3">
                <Leaf size={16} className="me-1" />
                Build a Greener Future
              </span>

              <h1 className="display-4 fw-bold mt-2">
                Track Your Carbon.
                <br />
                <span className="text-success">
                  Change Your Impact.
                </span>
              </h1>

              <p className="lead text-muted mt-4">
                Understand your personal carbon footprint, discover
                sustainable choices, and take meaningful steps toward
                a greener lifestyle.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">

                <Link
                  to="/calculator"
                  className="btn btn-success btn-lg px-4"
                >
                  <Calculator size={19} className="me-2" />
                  Calculate Footprint
                </Link>

                <Link
                  to="/dashboard"
                  className="btn btn-outline-success btn-lg px-4"
                >
                  View Dashboard
                  <ArrowRight size={18} className="ms-2" />
                </Link>

              </div>

              <div className="row mt-5">

                <div className="col-4">
                  <h4 className="fw-bold text-success mb-1">4</h4>
                  <small className="text-muted">
                    Impact Categories
                  </small>
                </div>

                <div className="col-4">
                  <h4 className="fw-bold text-success mb-1">15+</h4>
                  <small className="text-muted">
                    Eco Tips
                  </small>
                </div>

                <div className="col-4">
                  <h4 className="fw-bold text-success mb-1">10</h4>
                  <small className="text-muted">
                    Challenges
                  </small>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE - HERO IMAGE */}
            <div className="col-lg-6 text-center">

              <div className="hero-image-wrapper">
                <img
                  src="/images/hero.png"
                  alt="EcoTrack sustainability"
                  className="img-fluid"
                  style={{
                    maxHeight: "500px",
                    objectFit: "contain",
                  }}
                />
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section className="py-5 bg-light">
        <div className="container py-4">

          <div className="text-center mb-5">

            <span className="text-success fw-semibold">
              ECO TRACK
            </span>

            <h2 className="fw-bold mt-2">
              Everything You Need to Track Your Impact
            </h2>

            <p className="text-muted mx-auto" style={{ maxWidth: "650px" }}>
              EcoTrack helps you understand your everyday environmental
              impact and make better, more sustainable decisions.
            </p>

          </div>

          <div className="row g-4">

            {/* FEATURE 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">

                <div className="text-success mb-3">
                  <Calculator size={40} />
                </div>

                <h5 className="fw-bold">
                  Carbon Calculator
                </h5>

                <p className="text-muted small">
                  Calculate estimated emissions from transport,
                  energy, food and waste.
                </p>

                <Link
                  to="/calculator"
                  className="text-success text-decoration-none fw-semibold"
                >
                  Calculate →
                </Link>

              </div>
            </div>


            {/* FEATURE 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">

                <div className="text-success mb-3">
                  <BarChart3 size={40} />
                </div>

                <h5 className="fw-bold">
                  Smart Dashboard
                </h5>

                <p className="text-muted small">
                  Visualize your footprint and understand which
                  areas contribute the most.
                </p>

                <Link
                  to="/dashboard"
                  className="text-success text-decoration-none fw-semibold"
                >
                  View Dashboard →
                </Link>

              </div>
            </div>


            {/* FEATURE 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">

                <div className="text-success mb-3">
                  <Lightbulb size={40} />
                </div>

                <h5 className="fw-bold">
                  What-If Simulator
                </h5>

                <p className="text-muted small">
                  Explore how small lifestyle changes can reduce
                  your estimated carbon footprint.
                </p>

                <Link
                  to="/simulator"
                  className="text-success text-decoration-none fw-semibold"
                >
                  Try Simulator →
                </Link>

              </div>
            </div>


            {/* FEATURE 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm p-4 text-center">

                <div className="text-success mb-3">
                  <Trophy size={40} />
                </div>

                <h5 className="fw-bold">
                  Eco Challenges
                </h5>

                <p className="text-muted small">
                  Complete simple sustainability challenges and
                  earn points.
                </p>

                <Link
                  to="/challenges"
                  className="text-success text-decoration-none fw-semibold"
                >
                  Start Challenge →
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ================= CATEGORIES SECTION ================= */}
      <section className="py-5">
        <div className="container py-4">

          <div className="row align-items-center g-5">

            {/* IMAGE */}
            <div className="col-lg-6 text-center">

              <img
                src="/images/eco-illustration.png"
                alt="Sustainable lifestyle"
                className="img-fluid"
                style={{
                  maxHeight: "430px",
                  objectFit: "contain",
                }}
              />

            </div>


            {/* TEXT */}
            <div className="col-lg-6">

              <span className="text-success fw-semibold">
                MEASURE YOUR IMPACT
              </span>

              <h2 className="fw-bold mt-2 mb-3">
                Your Footprint Comes From Everyday Choices
              </h2>

              <p className="text-muted mb-4">
                EcoTrack organizes your estimated carbon emissions into
                four simple categories so you can clearly understand
                where your impact comes from.
              </p>


              {/* TRANSPORT */}
              <div className="d-flex align-items-start mb-4">

                <div
                  className="rounded-circle bg-success-subtle text-success
                  d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                  }}
                >
                  <Car size={23} />
                </div>

                <div>
                  <h6 className="fw-bold mb-1">
                    Transport
                  </h6>

                  <p className="text-muted small mb-0">
                    Understand emissions from your daily travel.
                  </p>
                </div>

              </div>


              {/* ENERGY */}
              <div className="d-flex align-items-start mb-4">

                <div
                  className="rounded-circle bg-success-subtle text-success
                  d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                  }}
                >
                  <Zap size={23} />
                </div>

                <div>
                  <h6 className="fw-bold mb-1">
                    Energy
                  </h6>

                  <p className="text-muted small mb-0">
                    Track estimated emissions from electricity usage.
                  </p>
                </div>

              </div>


              {/* FOOD */}
              <div className="d-flex align-items-start mb-4">

                <div
                  className="rounded-circle bg-success-subtle text-success
                  d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                  }}
                >
                  <Utensils size={23} />
                </div>

                <div>
                  <h6 className="fw-bold mb-1">
                    Food
                  </h6>

                  <p className="text-muted small mb-0">
                    Explore the estimated impact of your food choices.
                  </p>
                </div>

              </div>


              {/* WASTE */}
              <div className="d-flex align-items-start">

                <div
                  className="rounded-circle bg-success-subtle text-success
                  d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                  }}
                >
                  <Recycle size={23} />
                </div>

                <div>
                  <h6 className="fw-bold mb-1">
                    Waste
                  </h6>

                  <p className="text-muted small mb-0">
                    See how reducing waste can lower your footprint.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* ================= CTA SECTION ================= */}
      <section className="py-5">
        <div className="container">

          <div
            className="rounded-4 p-5 text-center"
            style={{
              background: "linear-gradient(135deg, #e8f5ee, #f7fbf8)",
              border: "1px solid #dcefe2",
            }}
          >

            <Leaf
              size={42}
              className="text-success mb-3"
            />

            <h2 className="fw-bold">
              Ready to Make an Impact?
            </h2>

            <p
              className="text-muted mx-auto mb-4"
              style={{ maxWidth: "600px" }}
            >
              Start by calculating your estimated carbon footprint
              and discover simple ways to live more sustainably.
            </p>

            <Link
              to="/calculator"
              className="btn btn-success btn-lg px-5"
            >
              Start Your Eco Journey
              <ArrowRight size={19} className="ms-2" />
            </Link>

          </div>

        </div>
      </section>


      {/* ================= DISCLAIMER ================= */}
      <section className="pb-5">
        <div className="container">

          <div className="text-center">
            <small className="text-muted">
              🌱 EcoTrack provides illustrative carbon footprint
              estimates for educational and portfolio purposes.
              Actual emissions may vary depending on location,
              technology, energy source and individual circumstances.
            </small>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;