import React from "react";

function EmissionCard({
  title,
  value,
  unit = "kg CO₂e",
  icon: Icon,
  percentage = 0,
  description,
}) {
  return (
    <div className="emission-card h-100">

      <div className="emission-card-header">
        <div className="emission-card-icon">
          {Icon && <Icon size={22} />}
        </div>

        <div>
          <h5 className="emission-card-title">
            {title}
          </h5>

          {description && (
            <p className="emission-card-description">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="emission-card-value">
        {value}
        <span>{unit}</span>
      </div>

      <div className="emission-progress">
        <div className="d-flex justify-content-between mb-1">
          <small>Contribution</small>
          <small>{Number(percentage).toFixed(1)}%</small>
        </div>

        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{
              width: `${Math.min(percentage, 100)}%`,
            }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          />
        </div>
      </div>

    </div>
  );
}

export default EmissionCard;