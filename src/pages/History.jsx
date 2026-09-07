import React, { useEffect, useState } from "react";
import { History as HistoryIcon, Trash2, Leaf } from "lucide-react";

import {
  getHistory,
  saveHistory,
} from "../utils/storage";

import { roundEmission } from "../utils/calculations";

function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const handleClearHistory = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all calculation history?"
    );

    if (!confirmed) return;

    saveHistory([]);
    setHistory([]);
  };

  const formatDate = (date) => {
    if (!date) return "Unknown date";

    return new Date(date).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className="history-page">
      <div className="container py-4">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <span className="text-success fw-semibold">
              Your Activity
            </span>

            <h1 className="fw-bold mt-1">
              Calculation History
            </h1>

            <p className="text-muted mb-0">
              Review your previous carbon footprint calculations.
            </p>
          </div>

          {history.length > 0 && (
            <button
              className="btn btn-outline-danger"
              onClick={handleClearHistory}
            >
              <Trash2 size={17} className="me-1" />
              Clear History
            </button>
          )}
        </div>

        {history.length === 0 ? (
          <div className="history-empty text-center py-5">
            <HistoryIcon
              size={60}
              className="text-success mb-3"
            />

            <h3 className="fw-bold">
              No Calculations Yet
            </h3>

            <p className="text-muted">
              Calculate your carbon footprint to see your
              history here.
            </p>

            <a
              href="/calculator"
              className="btn btn-success mt-2"
            >
              Calculate Footprint
            </a>
          </div>
        ) : (
          <div className="row g-4">

            {history.map((record, index) => (
              <div
                className="col-lg-6"
                key={`${record.date}-${index}`}
              >
                <div className="history-card">

                  <div className="d-flex justify-content-between align-items-start mb-3">

                    <div>
                      <h5 className="fw-bold mb-1">
                        Calculation #{history.length - index}
                      </h5>

                      <small className="text-muted">
                        {formatDate(record.date)}
                      </small>
                    </div>

                    <div className="history-total">
                      <strong>
                        {roundEmission(record.total)}
                      </strong>
                      <small> kg CO₂e</small>
                    </div>

                  </div>

                  <div className="row g-2">

                    <div className="col-6">
                      <div className="history-metric">
                        🚗 Transport
                        <strong>
                          {roundEmission(record.transport)} kg
                        </strong>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="history-metric">
                        ⚡ Energy
                        <strong>
                          {roundEmission(record.energy)} kg
                        </strong>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="history-metric">
                        🍖 Food
                        <strong>
                          {roundEmission(record.food)} kg
                        </strong>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="history-metric">
                        🗑️ Waste
                        <strong>
                          {roundEmission(record.waste)} kg
                        </strong>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

        {history.length > 0 && (
          <div className="alert alert-success mt-4">
            <Leaf size={18} className="me-2" />
            You have completed{" "}
            <strong>{history.length}</strong> footprint calculations.
          </div>
        )}

      </div>
    </div>
  );
}

export default History;