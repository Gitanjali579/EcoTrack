// ============================================
// EcoTrack - LocalStorage Utilities
// ============================================

// ============================================
// Storage Keys
// ============================================

export const STORAGE_KEYS = {
  HISTORY: "ecoTrackHistory",
  LATEST_CALCULATION:
    "ecoTrackLatestCalculation",
  PROFILE: "ecoTrackProfile",
  COMPLETED_CHALLENGES:
    "completedChallenges"
};

// ============================================
// Get Data
// ============================================

export const getStorageData = (
  key,
  defaultValue = null
) => {
  try {
    const data =
      localStorage.getItem(key);

    if (data === null) {
      return defaultValue;
    }

    return JSON.parse(data);

  } catch (error) {
    console.error(
      "Error reading LocalStorage:",
      error
    );

    return defaultValue;
  }
};

// ============================================
// Save Data
// ============================================

export const setStorageData = (
  key,
  value
) => {
  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

    return true;

  } catch (error) {
    console.error(
      "Error saving to LocalStorage:",
      error
    );

    return false;
  }
};

// ============================================
// Remove Data
// ============================================

export const removeStorageData = (
  key
) => {
  try {
    localStorage.removeItem(key);

    return true;

  } catch (error) {
    console.error(
      "Error removing LocalStorage data:",
      error
    );

    return false;
  }
};

// ============================================
// Clear All EcoTrack Data
// ============================================

export const clearEcoTrackStorage = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(
      (key) => {
        localStorage.removeItem(key);
      }
    );

    return true;

  } catch (error) {
    console.error(
      "Error clearing EcoTrack data:",
      error
    );

    return false;
  }
};

// ============================================
// Get History
// ============================================

export const getHistory = () => {
  return getStorageData(
    STORAGE_KEYS.HISTORY,
    []
  );
};

// ============================================
// Save History
// ============================================

export const saveHistory = (
  history
) => {
  return setStorageData(
    STORAGE_KEYS.HISTORY,
    history
  );
};

// ============================================
// Add New History Record
// ============================================

export const addHistoryRecord = (
  record
) => {
  const oldHistory = getHistory();

  const newHistory = [
    record,
    ...oldHistory
  ];

  saveHistory(newHistory);

  return newHistory;
};

// ============================================
// Get Latest Calculation
// ============================================

export const getLatestCalculation = () => {
  return getStorageData(
    STORAGE_KEYS.LATEST_CALCULATION,
    null
  );
};

// ============================================
// Save Latest Calculation
// ============================================

export const saveLatestCalculation = (
  calculation
) => {
  return setStorageData(
    STORAGE_KEYS.LATEST_CALCULATION,
    calculation
  );
};

// ============================================
// Get Profile
// ============================================

export const getProfile = () => {
  return getStorageData(
    STORAGE_KEYS.PROFILE,
    {
      name: "",
      city: "",
      goal: ""
    }
  );
};

// ============================================
// Save Profile
// ============================================

export const saveProfile = (
  profile
) => {
  return setStorageData(
    STORAGE_KEYS.PROFILE,
    profile
  );
};

// ============================================
// Get Completed Challenges
// ============================================

export const getCompletedChallenges = () => {
  return getStorageData(
    STORAGE_KEYS.COMPLETED_CHALLENGES,
    []
  );
};

// ============================================
// Save Completed Challenges
// ============================================

export const saveCompletedChallenges = (
  challengeIds
) => {
  return setStorageData(
    STORAGE_KEYS.COMPLETED_CHALLENGES,
    challengeIds
  );
};

// ============================================
// Add Completed Challenge
// ============================================

export const addCompletedChallenge = (
  challengeId
) => {
  const completed =
    getCompletedChallenges();

  if (!completed.includes(challengeId)) {
    completed.push(challengeId);
  }

  saveCompletedChallenges(
    completed
  );

  return completed;
};