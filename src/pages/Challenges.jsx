import React, { useEffect, useState } from "react";
import { Trophy, Leaf } from "lucide-react";

import ChallengeCard from "../components/ChallengeCard";
import LoadingSpinner from "../components/LoadingSpinner";

import { getChallenges } from "../services/dataService";

import {
  getCompletedChallenges,
  addCompletedChallenge,
} from "../utils/storage";

function Challenges() {
  const [challenges, setChallenges] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadChallenges();
  }, []);

  const loadChallenges = async () => {
    try {
      const data = await getChallenges();

      setChallenges(data);
      setCompleted(getCompletedChallenges());
    } catch (error) {
      console.error("Failed to load challenges:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleComplete = (id) => {
    const updated = addCompletedChallenge(id);
    setCompleted([...updated]);
  };

  if (loading) {
    return (
      <LoadingSpinner
        message="Loading eco challenges..."
        fullScreen
      />
    );
  }

  const totalPoints = challenges
    .filter((challenge) => completed.includes(challenge.id))
    .reduce(
      (total, challenge) => total + challenge.points,
      0
    );

  return (
    <div className="challenges-page">
      <div className="container py-4">

        <div className="challenges-header mb-4">

          <div>
            <span className="text-success fw-semibold">
              Take Action
            </span>

            <h1 className="fw-bold mt-1">
              Eco Challenges 🏆
            </h1>

            <p className="text-muted">
              Complete simple challenges and build sustainable habits.
            </p>
          </div>

          <div className="challenge-score">
            <Trophy size={24} />

            <div>
              <strong>{totalPoints}</strong>
              <small> points earned</small>
            </div>
          </div>

        </div>

        <div className="row g-4">

          {challenges.map((challenge) => (
            <div
              className="col-lg-4 col-md-6"
              key={challenge.id}
            >
              <ChallengeCard
                title={challenge.title}
                description={challenge.description}
                category={challenge.category}
                difficulty={challenge.difficulty}
                points={challenge.points}
                estimatedReduction={challenge.estimatedReduction}
                completed={completed.includes(challenge.id)}
                onComplete={() => handleComplete(challenge.id)}
              />
            </div>
          ))}

        </div>

        <div className="eco-card mt-4 text-center">

          <Leaf
            size={30}
            className="text-success mb-2"
          />

          <h5 className="fw-bold">
            Keep Going!
          </h5>

          <p className="text-muted mb-0">
            Every completed challenge is one more step
            towards a sustainable lifestyle.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Challenges;