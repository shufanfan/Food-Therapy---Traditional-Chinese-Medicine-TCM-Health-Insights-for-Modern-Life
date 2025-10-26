/**
 * TCM Constitution Assessment - Scoring Algorithm
 *
 * This module calculates a user's TCM constitution type based on their
 * responses to 5 survey questions. Each answer contributes points to
 * one of three constitution types: Cold, Heat, or Balanced.
 *
 * Based on: docs/survey-questions.md
 * Sprint 1 - Item 3B
 */

/**
 * Scoring matrix mapping question index and answer to constitution points
 *
 * Structure: { questionIndex: { answer: { constitution: points } } }
 *
 * All questions follow the same pattern:
 * - Answer A → Cold +2
 * - Answer B → Balanced +2
 * - Answer C → Heat +2
 */
const SCORING_MATRIX = {
  0: {
    // Q1: Temperature Preference
    A: { cold: 2, heat: 0, balanced: 0 },
    B: { cold: 0, heat: 0, balanced: 2 },
    C: { cold: 0, heat: 2, balanced: 0 },
  },
  1: {
    // Q2: Energy Levels
    A: { cold: 2, heat: 0, balanced: 0 },
    B: { cold: 0, heat: 0, balanced: 2 },
    C: { cold: 0, heat: 2, balanced: 0 },
  },
  2: {
    // Q3: Digestive Patterns
    A: { cold: 2, heat: 0, balanced: 0 },
    B: { cold: 0, heat: 0, balanced: 2 },
    C: { cold: 0, heat: 2, balanced: 0 },
  },
  3: {
    // Q4: Sleep & Night Symptoms
    A: { cold: 2, heat: 0, balanced: 0 },
    B: { cold: 0, heat: 0, balanced: 2 },
    C: { cold: 0, heat: 2, balanced: 0 },
  },
  4: {
    // Q5: Food & Drink Preferences
    A: { cold: 2, heat: 0, balanced: 0 },
    B: { cold: 0, heat: 0, balanced: 2 },
    C: { cold: 0, heat: 2, balanced: 0 },
  },
};

/**
 * Calculate TCM constitution based on survey answers
 *
 * @param {string[]} answers - Array of 5 answers, each 'A', 'B', or 'C'
 * @returns {string} Constitution type: 'cold', 'heat', or 'balanced'
 *
 * @example
 * calculateConstitution(['A', 'A', 'A', 'A', 'A']) // returns 'cold'
 * calculateConstitution(['B', 'B', 'B', 'B', 'B']) // returns 'balanced'
 * calculateConstitution(['C', 'C', 'C', 'C', 'C']) // returns 'heat'
 * calculateConstitution(['A', 'A', 'C', 'C', 'B']) // returns 'balanced' (tie)
 */
function calculateConstitution(answers) {
  // Validate input
  if (!Array.isArray(answers) || answers.length !== 5) {
    throw new Error("Expected an array of 5 answers");
  }

  // Initialize score counters
  const scores = {
    cold: 0,
    heat: 0,
    balanced: 0,
  };

  // Accumulate points for each answer
  answers.forEach((answer, questionIndex) => {
    // Normalize answer to uppercase
    const normalizedAnswer = answer.toUpperCase();

    // Validate answer format
    if (!["A", "B", "C"].includes(normalizedAnswer)) {
      throw new Error(
        `Invalid answer "${answer}" at question ${
          questionIndex + 1
        }. Expected A, B, or C.`
      );
    }

    // Get point allocation for this answer
    const points = SCORING_MATRIX[questionIndex][normalizedAnswer];

    // Add points to respective constitutions
    scores.cold += points.cold;
    scores.heat += points.heat;
    scores.balanced += points.balanced;
  });

  // Determine the constitution with the highest score
  const maxScore = Math.max(scores.cold, scores.heat, scores.balanced);

  // Find all constitutions that have the max score (for tie handling)
  const topConstitutions = Object.keys(scores).filter(
    (constitution) => scores[constitution] === maxScore
  );

  // Handle ties
  if (topConstitutions.length > 1) {
    // If balanced is among the tied constitutions, return balanced
    if (topConstitutions.includes("balanced")) {
      return "balanced";
    }

    // If cold and heat tie (without balanced), return balanced
    // This indicates the body is fluctuating between extremes
    if (
      topConstitutions.includes("cold") &&
      topConstitutions.includes("heat")
    ) {
      return "balanced";
    }
  }

  // Return the winning constitution
  return topConstitutions[0];
}

/**
 * Get detailed scoring breakdown (useful for debugging or showing users their scores)
 *
 * @param {string[]} answers - Array of 5 answers
 * @returns {object} Object with scores and result
 *
 * @example
 * getDetailedScore(['A', 'B', 'C', 'A', 'B'])
 * // returns: { scores: { cold: 4, heat: 2, balanced: 4 }, result: 'balanced' }
 */
function getDetailedScore(answers) {
  // Validate input
  if (!Array.isArray(answers) || answers.length !== 5) {
    throw new Error("Expected an array of 5 answers");
  }

  const scores = {
    cold: 0,
    heat: 0,
    balanced: 0,
  };

  // Accumulate points
  answers.forEach((answer, questionIndex) => {
    const normalizedAnswer = answer.toUpperCase();

    if (!["A", "B", "C"].includes(normalizedAnswer)) {
      throw new Error(
        `Invalid answer "${answer}" at question ${questionIndex + 1}`
      );
    }

    const points = SCORING_MATRIX[questionIndex][normalizedAnswer];
    scores.cold += points.cold;
    scores.heat += points.heat;
    scores.balanced += points.balanced;
  });

  const result = calculateConstitution(answers);

  return {
    scores,
    result,
    maxPossibleScore: 10,
  };
}

// Export functions
export { calculateConstitution, getDetailedScore, SCORING_MATRIX };
