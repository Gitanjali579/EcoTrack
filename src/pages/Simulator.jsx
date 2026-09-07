import React, { useEffect, useState } from "react";
import {
  Car,
  Zap,
  TrendingDown,
  Leaf,
} from "lucide-react";

import {
  getLatestCalculation,
} from "../utils/storage";

import {
  calculateTransportEmission,
  calculateEnergyEmission,
  calculateReduction,
  roundEmission,
} from "../utils/calculations";

function Simulator() {
  const [latest, setLatest] = useState(null);

  const [carKm, setCarKm] = useState(300);
  const [electricity, setElectricity] = useState(150);

  useEffect(() => {
    const calculation = getLatestCalculation();

    setLatest(calculation);

    if (calculation) {
      setCarKm(Number(calculation.carKm) || 300);
      setElectricity(
        Number(calculation.electricity) || 150
      );
    }
  }, []);

  const currentCarKm = latest
    ? Number(latest.carKm) || 0
    : 300;

  const currentElectricity = latest
    ? Number(latest.electricity) || 0
    : 150;

  const simulatedTransport =
    calculateTransportEmission(carKm, "car");

  const simulatedEnergy =
    calculateEnergyEmission(electricity);

  const currentTransport =
    calculateTransportEmission(
      currentCarKm,
      "car"
    );

  const currentEnergy =
    calculateEnergyEmission(
      currentElectricity
    );

  const currentTotal = latest
    ? Number(latest.total) || 0
    : currentTransport + currentEnergy;

  const currentChangedPart =
    currentTransport + currentEnergy;

  const simulatedChangedPart =
    simulatedTransport + simulatedEnergy;

  const reduction = calculateReduction(
    currentChangedPart,
    simulatedChangedPart
  );

  const simulatedTotal = Math.max(
    0,
    currentTotal - reduction
  );

  const reductionPercentage =
    currentTotal > 0
      ? (reduction / currentTotal) * 100
      : 0;

  return (
    <div className="simulator-page">
      <div className="container py-4">

        <div className="simulator-header mb-4">

          <span className="text-success fw-semibold">
            Explore Different Choices
          </span>

          <h1 className="fw-bold mt-1">
            What-If Carbon Simulator 🔄
          </h1>

          <p className="text-muted">
            Change your lifestyle inputs and see how they
            could affect your estimated carbon footprint.
          </p>

        </div>

        <div className="row g-4">

          {/* Controls */}
          <div className="col-lg-7">

            <div className="simulator-card">

              <h4 className="fw-bold mb-4">
                Try Different Scenarios
              </h4>

              {/* Car */}
              <div className="simulator-control">

                <div className="d-flex justify-content-between">

                  <label className="fw-semibold">
                    <Car size={20} className="me-2 text-success" />
                    Car Distance
                  </label>

                  <strong>
                    {carKm} km
                  </strong>

                </div>

                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="10"
                  value={carKm}
                  onChange={(event) =>
                    setCarKm(Number(event.target.value))
                  }
                  className="form-range"
                />

                <div className="d-flex justify-content-between text-muted small">
                  <span>0 km</span>
                  <span>1000 km</span>
                </div>

              </div>

              {/* Electricity */}
              <div className="simulator-control mt-4">

                <div className="d-flex justify-content-between">

                  <label className="fw-semibold">
                    <Zap size={20} className="me-2 text-success" />
                    Electricity
                  </label>

                  <strong>
                    {electricity} kWh
                  </strong>

                </div>

                <input
                  type="range"
                  min="0"
                  max="500"
                  step="5"
                  value={electricity}
                  onChange={(event) =>
                    setElectricity(
                      Number(event.target.value)
                    )
                  }
                  className="form-range"
                />

                <div className="d-flex justify-content-between text-muted small">
                  <span>0 kWh</span>
                  <span>500 kWh</span>
                </div>

              </div>

            </div>

          </div>

          {/* Result */}
          <div className="col-lg-5">

            <div className="simulator-result h-100">

              <div className="text-center">

                <Leaf
                  size={42}
                  className="text-success mb-3"
                />

                <p className="text-muted mb-1">
                  Simulated Footprint
                </p>

                <h1 className="display-5 fw-bold text-success">
                  {roundEmission(simulatedTotal)}
                </h1>

                <p className="text-muted">
                  kg CO₂e
                </p>

              </div>

              <div className="simulator-comparison">

                <div>
                  <span>Current</span>
                  <strong>
                    {roundEmission(currentTotal)} kg
                  </strong>
                </div>

                <div>
                  <span>Simulated</span>
                  <strong>
                    {roundEmission(simulatedTotal)} kg
                  </strong>
                </div>

              </div>

              <div className="reduction-box mt-4">

                <TrendingDown size={24} />

                <div>
                  <strong>
                    {roundEmission(reduction)} kg CO₂e
                  </strong>

                  <span>
                    potential reduction (
                    {roundEmission(reductionPercentage)}%
                    )
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="alert alert-light border mt-4">
          <strong>Tip:</strong> Try reducing your car usage
          and electricity consumption to explore the impact
          of lifestyle changes.
        </div>

      </div>
    </div>
  );
}

export default Simulator;