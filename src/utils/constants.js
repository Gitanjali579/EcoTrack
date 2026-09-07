// ============================================
// EcoTrack - Project Constants
// ============================================

// ============================================
// Application
// ============================================

export const APP_NAME = "EcoTrack";

export const APP_DESCRIPTION =
  "Personal Carbon Footprint Dashboard";

export const APP_VERSION = "1.0.0";

// ============================================
// Carbon Categories
// ============================================

export const CATEGORIES = {
  TRANSPORT: "Transport",
  ENERGY: "Energy",
  FOOD: "Food",
  WASTE: "Waste"
};

// ============================================
// Category IDs
// ============================================

export const CATEGORY_IDS = {
  TRANSPORT: "transport",
  ENERGY: "energy",
  FOOD: "food",
  WASTE: "waste"
};

// ============================================
// Navigation Links
// ============================================

export const NAV_LINKS = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Dashboard",
    path: "/dashboard"
  },
  {
    name: "Carbon Calculator",
    path: "/calculator"
  },
  {
    name: "What-If Simulator",
    path: "/simulator"
  },
  {
    name: "Challenges",
    path: "/challenges"
  },
  {
    name: "History",
    path: "/history"
  },
  {
    name: "Profile",
    path: "/profile"
  }
];

// ============================================
// Carbon Units
// ============================================

export const UNITS = {
  KG: "kg",
  KG_CO2E: "kg CO₂e",
  KG_CO2E_MONTH: "kg CO₂e / month",
  KM: "km",
  KWH: "kWh"
};

// ============================================
// Score Levels
// ============================================

export const SCORE_LEVELS = {
  EXCELLENT: {
    min: 80,
    label: "Excellent",
    description:
      "Your carbon footprint is looking great!"
  },

  GOOD: {
    min: 60,
    label: "Good",
    description:
      "You are making good progress."
  },

  AVERAGE: {
    min: 40,
    label: "Average",
    description:
      "There is room for improvement."
  },

  NEEDS_IMPROVEMENT: {
    min: 0,
    label: "Needs Improvement",
    description:
      "Small changes can make a big difference."
  }
};

// ============================================
// Challenge Difficulty
// ============================================

export const DIFFICULTY = {
  EASY: "Easy",
  MEDIUM: "Medium",
  HARD: "Hard"
};

// ============================================
// Goal Options
// ============================================

export const GOALS = [
  "Reduce my carbon footprint",
  "Use less electricity",
  "Use public transport",
  "Reduce food waste",
  "Live a more sustainable lifestyle"
];

// ============================================
// Simulator Defaults
// ============================================

export const SIMULATOR_DEFAULTS = {
  CAR_KM: 300,
  ELECTRICITY: 150
};

// ============================================
// Chart Settings
// ============================================

export const CHART_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

// ============================================
// LocalStorage Keys
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
// API / Data Paths
// ============================================

export const DATA_PATHS = {
  CHALLENGES:
    "/data/challenges.json",

  TIPS:
    "/data/tips.json",

  EMISSION_FACTORS:
    "/data/emission-factors.json"
};