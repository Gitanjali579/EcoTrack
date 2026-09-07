import React from "react";
import {
  Trophy,
  Leaf,
  CheckCircle,
  Clock
} from "lucide-react";

function ChallengeCard({
  title,
  description,
  category,
  difficulty = "Easy",
  points = 0,
  estimatedReduction = 0,
  completed = false,
  onComplete
}) {

  const getDifficultyClass = () => {

    if (difficulty === "Easy") {
      return "bg-success bg-opacity-10 text-success";
    }

    if (difficulty === "Medium") {
      return "bg-warning bg-opacity-10 text-warning";
    }

    return "bg-danger bg-opacity-10 text-danger";
  };

  return (
    <div className="card border-0 shadow-sm h-100">

      <div className="card-body p-4">

        {/* Top */}
        <div className="d-flex justify-content-between align-items-start mb-3">

          <div className="bg-success bg-opacity-10 text-success rounded-3 p-2">
            <Trophy size={22} />
          </div>

          <span className="badge bg-light text-dark">
            {category}
          </span>

        </div>

        {/* Title */}
        <h5 className="fw-bold mb-2">
          {title}
        </h5>

        {/* Description */}
        <p className="text-muted small">
          {description}
        </p>

        {/* Difficulty */}
        <div className="mb-3">

          <span className={`badge ${getDifficultyClass()}`}>
            {difficulty}
          </span>

        </div>

        {/* Stats */}
        <div className="row g-2 mb-4">

          <div className="col-6">

            <div className="bg-light rounded-3 p-2">

              <div className="d-flex align-items-center gap-2">
                <Trophy size={16} className="text-warning" />

                <small className="text-muted">
                  Points
                </small>
              </div>

              <strong>
                {points}
              </strong>

            </div>

          </div>

          <div className="col-6">

            <div className="bg-light rounded-3 p-2">

              <div className="d-flex align-items-center gap-2">
                <Leaf size={16} className="text-success" />

                <small className="text-muted">
                  Reduction
                </small>
              </div>

              <strong>
                {estimatedReduction} kg
              </strong>

            </div>

          </div>

        </div>

        {/* Button */}
        {completed ? (

          <button
            className="btn btn-success w-100"
            disabled
          >
            <CheckCircle size={17} className="me-2" />
            Completed
          </button>

        ) : (

          <button
            className="btn btn-outline-success w-100"
            onClick={onComplete}
          >
            <Clock size={17} className="me-2" />
            Complete Challenge
          </button>

        )}

      </div>

    </div>
  );
}

export default ChallengeCard;