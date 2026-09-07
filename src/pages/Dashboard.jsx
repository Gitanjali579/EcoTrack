import React, { useEffect, useState } from "react";
import {
  Car,
  Zap,
  Utensils,
  Trash2,
  Leaf,
  TrendingDown,
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import StatCard from "../components/StatCard";
import EcoScore from "../components/EcoScore";
import EmissionCard from "../components/EmissionCard";
import ChartCard from "../components/ChartCard";
import LoadingSpinner from "../components/LoadingSpinner";

import {
  getHistory,
  getLatestCalculation,
} from "../utils/storage";

import {
  calculatePercentage,
  roundEmission,
} from "../utils/calculations";

function Dashboard() {
  const [calculation, setCalculation] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = () => {
    setLoading(true);

    const latest = getLatestCalculation();
    const savedHistory = getHistory();

    setCalculation(latest);
    setHistory(savedHistory);

    setLoading(false);
  };

  if (loading) {
    return (
      <LoadingSpinner
        message="Loading your carbon dashboard..."
        fullScreen
      />
    );
  }

  /*
   * If user has not calculated anything yet,
   * show a friendly empty state.
   */
  if (!calculation) {
    return (
      <div className="container py-5">
        <div className="text-center py-5">
          <Leaf size={56} className="text-success mb-3" />

          <h2 className="fw-bold">Welcome to EcoTrack 🌱</h2>

          <p className="text-muted mb-4">
            Calculate your carbon footprint first to see
            your personalized dashboard.
          </p>

          <a
            href="/calculator"
            className="btn btn-success px-4"
          >
            Calculate My Footprint
          </a>
        </div>
      </div>
    );
  }

  const transport = Number(calculation.transport) || 0;
  const energy = Number(calculation.energy) || 0;
  const food = Number(calculation.food) || 0;
  const waste = Number(calculation.waste) || 0;
  const total = Number(calculation.total) || 0;

  const transportPercentage = calculatePercentage(
    transport,
    total
  );

  const energyPercentage = calculatePercentage(
    energy,
    total
  );

  const foodPercentage = calculatePercentage(
    food,
    total
  );

  const wastePercentage = calculatePercentage(
    waste,
    total
  );

  /*
   * Eco Score
   * Lower carbon footprint = higher score.
   */
  const ecoScore = Math.max(
    0,
    Math.min(
      100,
      Math.round(100 - total / 5)
    )
  );

  /*
   * Prepare chart data from saved history.
   */
  const chartData = [...history]
    .reverse()
    .slice(-7)
    .map((item, index) => ({
      name: `Check ${index + 1}`,
      emissions: roundEmission(item.total),
    }));

  /*
   * If there is only one calculation,
   * still show current value.
   */
  if (chartData.length === 0) {
    chartData.push({
      name: "Current",
      emissions: roundEmission(total),
    });
  }

  return (
    <div className="dashboard-page">

      {/* Header */}
      <div className="container py-4">

        <div className="dashboard-header mb-4">
          <div>
            <span className="text-success fw-semibold">
              Your Sustainability Overview
            </span>

            <h1 className="fw-bold mt-1">
              Carbon Dashboard 🌱
            </h1>

            <p className="text-muted mb-0">
              Track your estimated carbon footprint and
              discover ways to reduce your environmental impact.
            </p>
          </div>

          <a
            href="/calculator"
            className="btn btn-success"
          >
            Recalculate
          </a>
        </div>

        {/* Statistics */}
        <div className="row g-4 mb-4">

          <div className="col-lg-4 col-md-6">
            <StatCard
              title="Total Footprint"
              value={roundEmission(total)}
              unit="kg CO₂e"
              icon={Leaf}
              description="Estimated carbon emissions"
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <StatCard
              title="Eco Score"
              value={ecoScore}
              unit="/100"
              icon={TrendingDown}
              description="Your sustainability score"
            />
          </div>

          <div className="col-lg-4 col-md-12">
            <StatCard
              title="Calculations"
              value={history.length}
              unit="records"
              icon={TrendingDown}
              description="Saved footprint calculations"
            />
          </div>

        </div>

        {/* Main Dashboard */}
        <div className="row g-4">

          {/* Eco Score */}
          <div className="col-lg-4">

            <div className="eco-card h-100">
              <h5 className="fw-bold mb-4">
                Your Eco Score
              </h5>

              <EcoScore score={ecoScore} />

              <p className="text-muted text-center mt-3 mb-0">
                Keep making small sustainable changes
                to improve your score.
              </p>
            </div>

          </div>

          {/* Chart */}
          <div className="col-lg-8">

            <ChartCard
              title="Carbon Footprint Trend"
              subtitle="Your recent calculations"
            >
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={chartData}>

                  <CartesianGrid strokeDasharray="3 3" />

                  <XAxis dataKey="name" />

                  <YAxis />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="emissions"
                    stroke="#198754"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />

                </LineChart>
              </ResponsiveContainer>
            </ChartCard>

          </div>

        </div>

        {/* Category Emissions */}
        <div className="mt-4">

          <div className="mb-3">
            <h4 className="fw-bold mb-1">
              Emissions by Category
            </h4>

            <p className="text-muted">
              Understand where most of your emissions come from.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-lg-3 col-md-6">
              <EmissionCard
                title="Transport"
                value={roundEmission(transport)}
                unit="kg CO₂e"
                icon={Car}
                percentage={transportPercentage}
                description="Estimated transportation emissions"
              />
            </div>

            <div className="col-lg-3 col-md-6">
              <EmissionCard
                title="Energy"
                value={roundEmission(energy)}
                unit="kg CO₂e"
                icon={Zap}
                percentage={energyPercentage}
                description="Estimated electricity emissions"
              />
            </div>

            <div className="col-lg-3 col-md-6">
              <EmissionCard
                title="Food"
                value={roundEmission(food)}
                unit="kg CO₂e"
                icon={Utensils}
                percentage={foodPercentage}
                description="Estimated food emissions"
              />
            </div>

            <div className="col-lg-3 col-md-6">
              <EmissionCard
                title="Waste"
                value={roundEmission(waste)}
                unit="kg CO₂e"
                icon={Trash2}
                percentage={wastePercentage}
                description="Estimated waste emissions"
              />
            </div>

          </div>

        </div>

        {/* Insights */}
        <div className="eco-card mt-4">

          <div className="d-flex align-items-center gap-2 mb-2">
            <Leaf size={22} className="text-success" />

            <h5 className="fw-bold mb-0">
              Sustainability Insight
            </h5>
          </div>

          <p className="text-muted mb-0">
            Your current estimated footprint is{" "}
            <strong>{roundEmission(total)} kg CO₂e</strong>.
            Focus on reducing the category with the highest
            contribution to make the biggest impact.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;