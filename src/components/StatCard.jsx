import React from "react";

function StatCard({
  title,
  value,
  unit,
  icon: Icon,
  description,
  trend,
  trendType = "up",
}) {
  return (
    <div className="stat-card h-100">
      <div className="stat-card-header">
        <div className="stat-card-icon">
          {Icon && <Icon size={24} />}
        </div>

        {trend && (
          <span className={`stat-trend ${trendType}`}>
            {trend}
          </span>
        )}
      </div>

      <div className="stat-card-body">
        <p className="stat-card-title">{title}</p>

        <div className="stat-card-value">
          {value}
          {unit && (
            <span className="stat-card-unit">
              {unit}
            </span>
          )}
        </div>

        {description && (
          <p className="stat-card-description">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

export default StatCard;