# Multi-Select Scoring Rules

## Overview

This document defines how the TCM constitution assessment handles multiple selections per question.

---

## Scoring Method: Full Points Per Selection

When a user selects multiple options for a single question, **each selected option contributes its full point value** to the corresponding constitution(s).

---

## Examples

### Question 1: Temperature

**Scenario 1** - Single selection:

- User selects: **A only**
- Points: Cold +2

**Scenario 2** - Two selections:

- User selects: **A and B**
- Points: Cold +2, Balanced +2

**Scenario 3** - All three selections:

- User selects: **A, B, and C**
- Points: Cold +2, Balanced +2, Heat +2

---

## Rationale

**Why full points instead of divided:**

1. **TCM accuracy**: Having multiple symptoms simultaneously is common in real constitutions (e.g., cold hands but warm torso = both Yang deficiency and Yin deficiency patterns)

2. **User experience**: Users expressed frustration at being forced to choose when multiple apply - giving full points validates their experience

3. **Mathematical simplicity**: Easier to implement and explain

4. **Normalization**: Final scores are displayed as percentages, which automatically normalizes regardless of total points

---

## Score Interpretation

### Maximum Possible Scores

- **Single-select (old system)**: Max 10 points per constitution
- **Multi-select (new system)**: Max depends on selections, but typically 10-20 points

### Percentage Calculation

```
Percentage = (Constitution Score / Sum of All Scores) × 100
```

**Example:**

- Cold: 8 points
- Balanced: 6 points
- Heat: 2 points
- Total: 16 points

**Display:**

- Cold: 50%
- Balanced: 37.5%
- Heat: 12.5%

---

## Edge Cases

### Minimum Selection

- **Rule**: Users must select at least 1 option per question
- **Validation**: "Next" button disabled until ≥1 option selected
- **Error message**: "Please select at least one option"

### Maximum Selection

- **Rule**: Users can select all 3 options if all apply
- **Handling**: Each contributes full points (acceptable for mixed constitutions)

### No Clear Winner

- **Scenario**: All 3 constitutions tie (e.g., 33% each)
- **Handling**: Display all 3 equally, suggest consulting TCM practitioner for detailed analysis

---

## Implementation Impact

**constitutionCalculator.js changes:**

- Input format: `[['A'], ['B','C'], ['A'], ...]` (array of arrays)
- Loop through each selected option in each question
- Accumulate full points per selection

**No changes needed:**

- SCORING_MATRIX structure stays the same
- Point values (2 per option) stay the same
- Tie-breaking logic still applies

---

## Validation

**Test cases to verify:**

1. All single selections → Should match old system exactly
2. Mixed selections → Should produce sensible percentages
3. All options selected on all questions → Should show relatively even split
4. Edge pattern: [['A'],['A'],['A'],['A'],['A']] → 100% Cold
