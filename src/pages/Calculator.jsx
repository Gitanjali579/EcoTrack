import React, { useState } from "react";
import { Calculator as CalculatorIcon, RotateCcw } from "lucide-react";

import {
  calculateFootprint,
  roundEmission,
} from "../utils/calculations";

import {
  addHistoryRecord,
  saveLatestCalculation,
} from "../utils/storage";

function Calculator() {
  const [formData, setFormData] = useState({
    carKm: "",
    electricity: "",
    beef: "",
    foodWaste: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emissions = calculateFootprint(formData);
    const date = new Date().toISOString();

    const calculation = {
      ...formData,
      ...emissions,
      date,
    };

    addHistoryRecord(calculation);
    saveLatestCalculation(calculation);

    setResult(emissions);
  };

  const handleReset = () => {
    setFormData({
      carKm: "",
      electricity: "",
      beef: "",
      foodWaste: "",
    });

    setResult(null);
  };

  return (
    <div className="calculator-page">
      <div className="container py-4">

        <div className="calculator-header mb-4">
          <div>
            <span className="text-success fw-semibold">
              Sustainability Calculator
            </span>

            <h1 className="fw-bold mt-1">
              Carbon Footprint Calculator 🌱
            </h1>

            <p className="text-muted mb-0">
              Enter your activity details to estimate your carbon footprint.
            </p>
          </div>
        </div>

        <div className="row g-4">

          {/* Form */}
          <div className="col-lg-7">
            <div className="calculator-card">

              <div className="d-flex align-items-center gap-2 mb-4">
                <CalculatorIcon className="text-success" size={24} />
                <h4 className="fw-bold mb-0">
                  Enter Your Activity
                </h4>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    🚗 Car Distance
                  </label>

                  <div className="input-group">
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      name="carKm"
                      value={formData.carKm}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Example: 300"
                    />
                    <span className="input-group-text">
                      km
                    </span>
                  </div>

                  <small className="text-muted">
                    Estimated distance travelled by car.
                  </small>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    ⚡ Electricity Usage
                  </label>

                  <div className="input-group">
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      name="electricity"
                      value={formData.electricity}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Example: 150"
                    />
                    <span className="input-group-text">
                      kWh
                    </span>
                  </div>

                  <small className="text-muted">
                    Estimated monthly electricity consumption.
                  </small>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    🍖 Beef Consumption
                  </label>

                  <div className="input-group">
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      name="beef"
                      value={formData.beef}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Example: 2"
                    />
                    <span className="input-group-text">
                      kg
                    </span>
                  </div>

                  <small className="text-muted">
                    Approximate beef consumed.
                  </small>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    🗑️ Food Waste
                  </label>

                  <div className="input-group">
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      name="foodWaste"
                      value={formData.foodWaste}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Example: 2"
                    />
                    <span className="input-group-text">
                      kg
                    </span>
                  </div>

                  <small className="text-muted">
                    Approximate food waste generated.
                  </small>
                </div>

                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-success flex-grow-1"
                  >
                    Calculate Footprint
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={handleReset}
                  >
                    <RotateCcw size={18} />
                  </button>

                </div>

              </form>

            </div>
          </div>

          {/* Result */}
          <div className="col-lg-5">

            <div className="calculator-result h-100">

              {!result ? (
                <div className="text-center py-5">
                  <CalculatorIcon
                    size={55}
                    className="text-success mb-3"
                  />

                  <h4 className="fw-bold">
                    Your Result
                  </h4>

                  <p className="text-muted">
                    Enter your activity data and calculate
                    your estimated footprint.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-4">
                    <p className="text-muted mb-1">
                      Estimated Total Footprint
                    </p>

                    <h1 className="display-4 fw-bold text-success">
                      {roundEmission(result.total)}
                    </h1>

                    <span className="text-muted">
                      kg CO₂e
                    </span>
                  </div>

                  <div className="result-item">
                    <span>🚗 Transport</span>
                    <strong>
                      {roundEmission(result.transport)} kg
                    </strong>
                  </div>

                  <div className="result-item">
                    <span>⚡ Energy</span>
                    <strong>
                      {roundEmission(result.energy)} kg
                    </strong>
                  </div>

                  <div className="result-item">
                    <span>🍖 Food</span>
                    <strong>
                      {roundEmission(result.food)} kg
                    </strong>
                  </div>

                  <div className="result-item">
                    <span>🗑️ Waste</span>
                    <strong>
                      {roundEmission(result.waste)} kg
                    </strong>
                  </div>

                  <div className="alert alert-success mt-4 mb-0">
                    Your result has been saved. Visit the Dashboard
                    and History pages to track your progress.
                  </div>
                </>
              )}

            </div>

          </div>

        </div>

        <div className="alert alert-light border mt-4">
          <strong>Note:</strong> These are illustrative estimates
          for this portfolio project. Actual emissions vary by
          location, technology, energy source, vehicle efficiency
          and methodology.
        </div>

      </div>
    </div>
  );
}

export default Calculator;