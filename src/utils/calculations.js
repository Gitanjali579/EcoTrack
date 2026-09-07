// ============================================
// EcoTrack - Carbon Calculation Utilities
// ============================================

// Emission factors
// Values are approximate kg CO2e per unit

export const EMISSION_FACTORS = {
  transport: {
    car: 0.192,
    motorcycle: 0.103,
    bus: 0.089,
    train: 0.041,
    bicycle: 0,
    walking: 0
  },

  energy: {
    electricity: 0.708,
    naturalGas: 0.183
  },

  food: {
    beef: 27.0,
    chicken: 6.9,
    pork: 7.2,
    vegetables: 2.0,
    plantBased: 1.5
  },

  waste: {
    generalWaste: 0.6,
    recycledWaste: 0.2,
    foodWaste: 1.9
  }
};

// ============================================
// Calculate Transport Emission
// ============================================

export const calculateTransportEmission = (
  distance,
  type = "car"
) => {
  const km = Number(distance) || 0;

  const factor =
    EMISSION_FACTORS.transport[type] || 0;

  return km * factor;
};

// ============================================
// Calculate Energy Emission
// ============================================

export const calculateEnergyEmission = (
  electricity
) => {
  const kwh = Number(electricity) || 0;

  return (
    kwh *
    EMISSION_FACTORS.energy.electricity
  );
};

// ============================================
// Calculate Food Emission
// ============================================

export const calculateFoodEmission = (
  amount,
  type = "beef"
) => {
  const kg = Number(amount) || 0;

  const factor =
    EMISSION_FACTORS.food[type] || 0;

  return kg * factor;
};

// ============================================
// Calculate Waste Emission
// ============================================

export const calculateWasteEmission = (
  amount,
  type = "foodWaste"
) => {
  const kg = Number(amount) || 0;

  const factor =
    EMISSION_FACTORS.waste[type] || 0;

  return kg * factor;
};

// ============================================
// Calculate Total Footprint
// ============================================

export const calculateTotalFootprint = ({
  transport = 0,
  energy = 0,
  food = 0,
  waste = 0
}) => {
  return (
    Number(transport) +
    Number(energy) +
    Number(food) +
    Number(waste)
  );
};

// ============================================
// Calculate Complete Footprint
// ============================================

export const calculateFootprint = ({
  carKm = 0,
  electricity = 0,
  beef = 0,
  foodWaste = 0
}) => {
  const transport =
    calculateTransportEmission(
      carKm,
      "car"
    );

  const energy =
    calculateEnergyEmission(
      electricity
    );

  const food =
    calculateFoodEmission(
      beef,
      "beef"
    );

  const waste =
    calculateWasteEmission(
      foodWaste,
      "foodWaste"
    );

  const total =
    calculateTotalFootprint({
      transport,
      energy,
      food,
      waste
    });

  return {
    transport,
    energy,
    food,
    waste,
    total
  };
};

// ============================================
// Calculate Percentage
// ============================================

export const calculatePercentage = (
  value,
  total
) => {
  const numericValue = Number(value) || 0;
  const numericTotal = Number(total) || 0;

  if (numericTotal === 0) {
    return 0;
  }

  return (
    (numericValue / numericTotal) *
    100
  );
};

// ============================================
// Calculate Reduction
// ============================================

export const calculateReduction = (
  current,
  newValue
) => {
  const currentValue =
    Number(current) || 0;

  const newEmission =
    Number(newValue) || 0;

  return Math.max(
    0,
    currentValue - newEmission
  );
};

// ============================================
// Calculate Reduction Percentage
// ============================================

export const calculateReductionPercentage = (
  current,
  newValue
) => {
  const currentValue =
    Number(current) || 0;

  const newEmission =
    Number(newValue) || 0;

  if (currentValue === 0) {
    return 0;
  }

  return (
    ((currentValue - newEmission) /
      currentValue) *
    100
  );
};

// ============================================
// Round Number
// ============================================

export const roundEmission = (
  value,
  decimals = 1
) => {
  const number = Number(value) || 0;

  return Number(
    number.toFixed(decimals)
  );
};