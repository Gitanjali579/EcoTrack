const BASE_PATH = "/data";

/**
 * Generic JSON loader
 */
const fetchJson = async (fileName) => {
  try {
    const response = await fetch(`${BASE_PATH}/${fileName}`);

    if (!response.ok) {
      throw new Error(`Failed to load ${fileName}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error loading ${fileName}:`, error);
    throw error;
  }
};

/**
 * Get all challenges
 */
export const getChallenges = async () => {
  return await fetchJson("challenges.json");
};

/**
 * Get all sustainability tips
 */
export const getTips = async () => {
  return await fetchJson("tips.json");
};

/**
 * Get emission factors
 */
export const getEmissionFactors = async () => {
  return await fetchJson("emission-factors.json");
};

/**
 * Get a single challenge by ID
 */
export const getChallengeById = async (id) => {
  const challenges = await getChallenges();

  return challenges.find(
    (challenge) => challenge.id === Number(id)
  );
};

/**
 * Get tips by category
 */
export const getTipsByCategory = async (category) => {
  const tips = await getTips();

  return tips.filter(
    (tip) =>
      tip.category.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Get challenges by category
 */
export const getChallengesByCategory = async (category) => {
  const challenges = await getChallenges();

  return challenges.filter(
    (challenge) =>
      challenge.category.toLowerCase() === category.toLowerCase()
  );
};

/**
 * Get emission factor for a specific activity
 */
export const getEmissionFactor = async (
  category,
  activity
) => {
  const factors = await getEmissionFactors();

  return factors?.[category]?.[activity] || null;
};