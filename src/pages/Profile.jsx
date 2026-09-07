import React, { useEffect, useState } from "react";
import { User, Save, Leaf } from "lucide-react";

import {
  getProfile,
  saveProfile,
} from "../utils/storage";

import { GOALS } from "../utils/constants";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    city: "",
    goal: "",
  });

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setProfile(getProfile());
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    saveProfile(profile);
    setSaved(true);
  };

  return (
    <div className="profile-page">
      <div className="container py-4">

        <div className="profile-header mb-4">
          <span className="text-success fw-semibold">
            Personal Settings
          </span>

          <h1 className="fw-bold mt-1">
            My Profile
          </h1>

          <p className="text-muted">
            Manage your EcoTrack profile and sustainability goal.
          </p>
        </div>

        <div className="row g-4">

          <div className="col-lg-7">

            <div className="profile-card">

              <div className="profile-icon">
                <User size={30} />
              </div>

              <h4 className="fw-bold mb-4">
                Personal Information
              </h4>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Enter your city"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Sustainability Goal
                  </label>

                  <select
                    name="goal"
                    value={profile.goal}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">
                      Select your goal
                    </option>

                    {GOALS.map((goal) => (
                      <option key={goal} value={goal}>
                        {goal}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-success"
                >
                  <Save size={18} className="me-2" />
                  Save Profile
                </button>

                {saved && (
                  <span className="text-success ms-3">
                    Profile saved successfully ✓
                  </span>
                )}

              </form>

            </div>

          </div>

          <div className="col-lg-5">

            <div className="profile-impact-card">

              <Leaf size={48} className="text-success mb-3" />

              <h4 className="fw-bold">
                Make an Impact 🌱
              </h4>

              <p className="text-muted">
                Small daily changes can create a meaningful
                positive impact on the environment.
              </p>

              {profile.name && (
                <div className="mt-4">
                  <p className="mb-1 text-muted">
                    Welcome
                  </p>

                  <h3 className="fw-bold text-success">
                    {profile.name}
                  </h3>
                </div>
              )}

              {profile.goal && (
                <div className="profile-goal mt-3">
                  <small>Your current goal</small>
                  <strong>{profile.goal}</strong>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;