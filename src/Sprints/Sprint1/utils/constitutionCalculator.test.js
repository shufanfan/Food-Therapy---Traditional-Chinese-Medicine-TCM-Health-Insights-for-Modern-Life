/**
 * Unit tests for TCM Constitution Calculator
 *
 * Tests the scoring algorithm with various input scenarios
 */

import {
  calculateConstitution,
  getDetailedScore,
} from './constitutionCalculator';

describe('Constitution Calculator', () => {
  // Test 1: All Cold answers
  test('should return "cold" for all A answers', () => {
    const result = calculateConstitution(['A', 'A', 'A', 'A', 'A']);
    expect(result).toBe('cold');
  });

  // Test 2: All Balanced answers
  test('should return "balanced" for all B answers', () => {
    const result = calculateConstitution(['B', 'B', 'B', 'B', 'B']);
    expect(result).toBe('balanced');
  });

  // Test 3: All Heat answers
  test('should return "heat" for all C answers', () => {
    const result = calculateConstitution(['C', 'C', 'C', 'C', 'C']);
    expect(result).toBe('heat');
  });

  // Test 4: Cold majority
  test('should return "cold" when cold has majority', () => {
    const result = calculateConstitution(['A', 'A', 'A', 'B', 'C']);
    expect(result).toBe('cold');
  });

  // Test 5: Heat majority
  test('should return "heat" when heat has majority', () => {
    const result = calculateConstitution(['C', 'C', 'C', 'B', 'A']);
    expect(result).toBe('heat');
  });

  // Test 6: Balanced majority
  test('should return "balanced" when balanced has majority', () => {
    const result = calculateConstitution(['B', 'B', 'B', 'A', 'C']);
    expect(result).toBe('balanced');
  });

  // Test 7: Tie between cold and balanced (balanced wins)
  test('should return "balanced" when cold and balanced tie', () => {
    const result = calculateConstitution(['A', 'A', 'B', 'B', 'C']);
    expect(result).toBe('balanced');
  });

  // Test 8: Tie between heat and balanced (balanced wins)
  test('should return "balanced" when heat and balanced tie', () => {
    const result = calculateConstitution(['C', 'C', 'B', 'B', 'A']);
    expect(result).toBe('balanced');
  });

  // Test 9: Tie between cold and heat (balanced wins - body fluctuating)
  test('should return "balanced" when cold and heat tie', () => {
    const result = calculateConstitution(['A', 'A', 'C', 'C', 'B']);
    expect(result).toBe('balanced');
  });

  // Test 10: Case insensitive answers
  test('should handle lowercase answers', () => {
    const result = calculateConstitution(['a', 'b', 'c', 'a', 'b']);
    expect(result).toBeDefined();
  });

  // Test 11: Invalid input - wrong number of answers
  test('should throw error for wrong number of answers', () => {
    expect(() => {
      calculateConstitution(['A', 'B', 'C']);
    }).toThrow('Expected an array of 5 answers');
  });

  // Test 12: Invalid input - invalid answer value
  test('should throw error for invalid answer value', () => {
    expect(() => {
      calculateConstitution(['A', 'B', 'X', 'A', 'B']);
    }).toThrow('Invalid answer');
  });

  // Test 13: Invalid input - not an array
  test('should throw error for non-array input', () => {
    expect(() => {
      calculateConstitution('ABCAB');
    }).toThrow('Expected an array of 5 answers');
  });
});

describe('Detailed Score Function', () => {
  test('should return correct scores breakdown', () => {
    const result = getDetailedScore(['A', 'A', 'B', 'B', 'C']);

    expect(result.scores.cold).toBe(4);
    expect(result.scores.balanced).toBe(4);
    expect(result.scores.heat).toBe(2);
    expect(result.result).toBe('balanced'); // balanced wins in a tie
    expect(result.maxPossibleScore).toBe(10);
  });

  test('should return perfect cold score', () => {
    const result = getDetailedScore(['A', 'A', 'A', 'A', 'A']);

    expect(result.scores.cold).toBe(10);
    expect(result.scores.heat).toBe(0);
    expect(result.scores.balanced).toBe(0);
    expect(result.result).toBe('cold');
  });
});
