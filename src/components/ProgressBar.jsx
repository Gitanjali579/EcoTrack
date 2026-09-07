import React from "react";

function ProgressBar({
  value = 0,
  max = 100,
  label = "",
  showPercentage = true,
  height = 8
}) {
  const percentage = Math.min(
    Math.max((value / max) * 100, 0),
    100
  );

  return (
    <div className="w-100">

      {label && (
        <div className="d-flex justify-content-between mb-2">
          <span className="small fw-semibold">
            {label}
          </span>

          {showPercentage && (
            <span className="small text-muted">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}

      <div
        className="progress"
        style={{
          height: `${height}px`
        }}
      >
        <div
          className="progress-bar bg-success"
          role="progressbar"
          style={{
            width: `${percentage}%`
          }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax={max}
        ></div>
      </div>

    </div>
  );
}

export default ProgressBar;