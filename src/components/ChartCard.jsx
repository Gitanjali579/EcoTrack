import React from "react";

function ChartCard({
  title,
  subtitle = "",
  children,
  action = null,
  height = 300
}) {
  return (
    <div className="card border-0 shadow-sm h-100">

      <div className="card-body p-4">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-start mb-4">

          <div>

            <h5 className="fw-bold mb-1">
              {title}
            </h5>

            {subtitle && (
              <p className="text-muted small mb-0">
                {subtitle}
              </p>
            )}

          </div>

          {action && (
            <div>
              {action}
            </div>
          )}

        </div>

        {/* Chart */}
        <div
          style={{
            width: "100%",
            height: `${height}px`
          }}
        >
          {children}
        </div>

      </div>

    </div>
  );
}

export default ChartCard;