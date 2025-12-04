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

 */
const SCORING_MATRIX = {
  0: {
    // Q1: Temperature
    A: {
      balanced: 0,
      cold: 2,
      heat: 0,
      qiDeficiency: 1,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    B: {
      balanced: 2,
      cold: 0,
      heat: 0,
      qiDeficiency: 0,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    C: {
      balanced: 0,
      cold: 0,
      heat: 1,
      qiDeficiency: 0,
      yinDeficiency: 2,
      phlegmDampness: 0,
    },
  },
  1: {
    // Q2: Energy
    A: {
      balanced: 0,
      cold: 1,
      heat: 0,
      qiDeficiency: 2,
      yinDeficiency: 0,
      phlegmDampness: 1,
    },
    B: {
      balanced: 2,
      cold: 0,
      heat: 0,
      qiDeficiency: 0,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    C: {
      balanced: 0,
      cold: 0,
      heat: 1,
      qiDeficiency: 0,
      yinDeficiency: 2,
      phlegmDampness: 0,
    },
  },
  2: {
    // Q3: Digestion
    A: {
      balanced: 0,
      cold: 1,
      heat: 0,
      qiDeficiency: 2,
      yinDeficiency: 0,
      phlegmDampness: 1,
    },
    B: {
      balanced: 2,
      cold: 0,
      heat: 0,
      qiDeficiency: 0,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    C: {
      balanced: 0,
      cold: 0,
      heat: 2,
      qiDeficiency: 0,
      yinDeficiency: 0,
      phlegmDampness: 2,
    },
  },
  3: {
    // Q4: Sleep
    A: {
      balanced: 0,
      cold: 1,
      heat: 0,
      qiDeficiency: 2,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    B: {
      balanced: 2,
      cold: 0,
      heat: 0,
      qiDeficiency: 0,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    C: {
      balanced: 0,
      cold: 0,
      heat: 1,
      qiDeficiency: 0,
      yinDeficiency: 2,
      phlegmDampness: 0,
    },
  },
  4: {
    // Q5: Food Preferences
    A: {
      balanced: 0,
      cold: 2,
      heat: 0,
      qiDeficiency: 1,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    B: {
      balanced: 2,
      cold: 0,
      heat: 0,
      qiDeficiency: 0,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    C: {
      balanced: 0,
      cold: 0,
      heat: 1,
      qiDeficiency: 0,
      yinDeficiency: 2,
      phlegmDampness: 0,
    },
  },
  5: {
    // Q6: Moisture/Dryness - NEW
    A: {
      balanced: 0,
      cold: 0,
      heat: 1,
      qiDeficiency: 0,
      yinDeficiency: 2,
      phlegmDampness: 0,
    },
    B: {
      balanced: 2,
      cold: 0,
      heat: 0,
      qiDeficiency: 0,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    C: {
      balanced: 0,
      cold: 0,
      heat: 1,
      qiDeficiency: 0,
      yinDeficiency: 0,
      phlegmDampness: 2,
    },
  },
  6: {
    // Q7: Body Build/Weight - NEW
    A: {
      balanced: 1,
      cold: 0,
      heat: 0,
      qiDeficiency: 1,
      yinDeficiency: 2,
      phlegmDampness: 0,
    },
    B: {
      balanced: 2,
      cold: 0,
      heat: 0,
      qiDeficiency: 0,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    C: {
      balanced: 0,
      cold: 0,
      heat: 0,
      qiDeficiency: 1,
      yinDeficiency: 0,
      phlegmDampness: 2,
    },
  },
  7: {
    // Q8: Weather Sensitivity - NEW
    A: {
      balanced: 0,
      cold: 2,
      heat: 0,
      qiDeficiency: 1,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    B: {
      balanced: 2,
      cold: 0,
      heat: 0,
      qiDeficiency: 0,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    C: {
      balanced: 0,
      cold: 0,
      heat: 1,
      qiDeficiency: 0,
      yinDeficiency: 1,
      phlegmDampness: 2,
    },
  },
  8: {
    // Q9: Thirst/Hydration - NEW
    A: {
      balanced: 0,
      cold: 0,
      heat: 1,
      qiDeficiency: 0,
      yinDeficiency: 2,
      phlegmDampness: 0,
    },
    B: {
      balanced: 2,
      cold: 0,
      heat: 0,
      qiDeficiency: 0,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
    C: {
      balanced: 0,
      cold: 0,
      heat: 0,
      qiDeficiency: 1,
      yinDeficiency: 0,
      phlegmDampness: 2,
    },
  },
  9: {
    // Q10: Stamina/Recovery - NEW
    A: {
      balanced: 2,
      cold: 0,
      heat: 0,
      qiDeficiency: 0,
      yinDeficiency: 1,
      phlegmDampness: 0,
    },
    B: {
      balanced: 0,
      cold: 1,
      heat: 0,
      qiDeficiency: 2,
      yinDeficiency: 0,
      phlegmDampness: 1,
    },
    C: {
      balanced: 1,
      cold: 0,
      heat: 0,
      qiDeficiency: 1,
      yinDeficiency: 0,
      phlegmDampness: 0,
    },
  },
};

/**
 * Calculate TCM constitution based on survey answers
 *
 * @param {Array} answers - Array of 10 answers, each can be string or array of strings
 * @returns {string} Constitution type: 'balanced', 'cold', 'heat', 'qiDeficiency', 'yinDeficiency', or 'phlegmDampness'
 *
 * @example
 * calculateConstitution([['A'], ['A'], ...]) // 10 questions with multi-select
 */
function calculateConstitution(answers) {
  // Validate input
  if (!Array.isArray(answers) || answers.length !== 10) {
    throw new Error('Expected an array of 10 answers');
  }

  // Initialize score counters
  const scores = {
    balanced: 0,
    cold: 0,
    heat: 0,
    qiDeficiency: 0,
    yinDeficiency: 0,
    phlegmDampness: 0,
  };

  // Accumulate points for each answer
  answers.forEach((answerArray, questionIndex) => {
    // Handle both old format (single string) and new format (array)
    const selections = Array.isArray(answerArray) ? answerArray : [answerArray];

    selections.forEach((answer) => {
      const normalizedAnswer = answer.toUpperCase();

      // Validate answer format
      if (!['A', 'B', 'C'].includes(normalizedAnswer)) {
        throw new Error(
          `Invalid answer "${answer}" at question ${
            questionIndex + 1
          }. Expected A, B, or C.`
        );
      }

      // Get point allocation for this answer
      const points = SCORING_MATRIX[questionIndex][normalizedAnswer];

      // Add points to respective constitutions (full points per selection)
      scores.balanced += points.balanced;
      scores.cold += points.cold;
      scores.heat += points.heat;
      scores.qiDeficiency += points.qiDeficiency;
      scores.yinDeficiency += points.yinDeficiency;
      scores.phlegmDampness += points.phlegmDampness;
    });
  });

  // Determine the constitution with the highest score
  const maxScore = Math.max(
    scores.balanced,
    scores.cold,
    scores.heat,
    scores.qiDeficiency,
    scores.yinDeficiency,
    scores.phlegmDampness
  );
  // Find all constitutions that have the max score (for tie handling)
  const topConstitutions = Object.keys(scores).filter(
    (constitution) => scores[constitution] === maxScore
  );

  // Handle ties
  if (topConstitutions.length > 1) {
    // If balanced is among the tied constitutions, return balanced
    if (topConstitutions.includes('balanced')) {
      return 'balanced';
    }

    // If cold and heat tie (without balanced), return balanced
    // This indicates the body is fluctuating between extremes
    if (
      topConstitutions.includes('cold') &&
      topConstitutions.includes('heat')
    ) {
      return 'balanced';
    }
  }

  // Return the winning constitution
  return topConstitutions[0];
}

function getDetailedScore(answers) {
  // Validate input
  if (!Array.isArray(answers) || answers.length !== 10) {
    throw new Error('Expected an array of 5 answers');
  }

  const scores = {
    balanced: 0,
    cold: 0,
    heat: 0,
    qiDeficiency: 0,
    yinDeficiency: 0,
    phlegmDampness: 0,
  };

  // Accumulate points
  answers.forEach((answerArray, questionIndex) => {
    // Handle both old format (single string) and new format (array)
    const selections = Array.isArray(answerArray) ? answerArray : [answerArray];

    selections.forEach((answer) => {
      const normalizedAnswer = answer.toUpperCase();

      if (!['A', 'B', 'C'].includes(normalizedAnswer)) {
        throw new Error(
          `Invalid answer "${answer}" at question ${questionIndex + 1}`
        );
      }

      const points = SCORING_MATRIX[questionIndex][normalizedAnswer];
      scores.balanced += points.balanced;
      scores.cold += points.cold;
      scores.heat += points.heat;
      scores.qiDeficiency += points.qiDeficiency;
      scores.yinDeficiency += points.yinDeficiency;
      scores.phlegmDampness += points.phlegmDampness;
    });
  });

  const result = calculateConstitution(answers);

  return {
    scores,
    result,
    maxPossibleScore: 10, // Note: with multi-select, max can exceed 10
  };
}

// Export functions
export { calculateConstitution, getDetailedScore, SCORING_MATRIX };
