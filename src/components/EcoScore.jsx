import React from "react";
import { Leaf } from "lucide-react";

function EcoScore({ score = 0 }) {

  const getScoreInfo = () => {

    if (score >= 80) {
      return {
        label: "Excellent",
        message: "You're doing a great job for the planet!"
      };
    }

    if (score >= 60) {
      return {
        label: "Good",
        message: "You're on the right track. Keep improving!"
      };
    }

    if (score >= 40) {
      return {
        label: "Average",
        message: "There is room to build greener habits."
      };
    }

    return {
      label: "Needs Improvement",
      message: "Let's start making some greener changes."
    };
  };

  const info = getScoreInfo();

  return (
    <div className="card border-0 shadow-sm h-100">

      <div className="card-body p-4 text-center">

        <div className="mb-3 text-success">
          <Leaf size={28} />
        </div>

        <h5 className="fw-bold">
          Your Eco Score
        </h5>

        <div
          className="mx-auto my-4 rounded-circle border border-success border-4 d-flex align-items-center justify-content-center"
          style={{
            width: "130px",
            height: "130px"
          }}
        >

          <div>
            <h1 className="fw-bold text-success mb-0">
              {score}
            </h1>

            <small className="text-muted">
              / 100
            </small>
          </div>

        </div>

        <h6 className="text-success fw-bold">
          {info.label}
        </h6>

        <p className="text-muted small mb-0">
          {info.message}
        </p>

      </div>

    </div>
  );
}

export default EcoScore;