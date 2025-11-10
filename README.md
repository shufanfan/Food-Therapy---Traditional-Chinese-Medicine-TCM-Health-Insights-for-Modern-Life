# Sprint 2

### product url: https://tcmfoodthreapy.netlify.app/
### test url: https://foodtherapysprint2test.netlify.app/
### GitHub Projects board: https://github.com/users/shufanfan/projects/2

# Project Overview

Food Therapy TCM is a web-based wellness platform that bridges Traditional Chinese Medicine wisdom with modern AI technology, helping users discover their unique body constitution through a quick 5-question assessment and receive personalized food and herbal tea recommendations. Built with React and TypeScript, the application features automated CI/CD pipelines via GitHub Actions, comprehensive code quality tools (ESLint/Prettier), and seamless Netlify deployment. Developed as a graduate research project at Northeastern University, this platform makes preventive, culturally-grounded health guidance accessible to Western audiences by translating the Wang Qi 9-Constitution Framework into practical, everyday wellness actions.

# MVP description
Establish a robust development infrastructure by implementing CI/CD pipelines and code quality tools, while enhancing user engagement features on the TCM wellness platform.

# Test instruction
npm test

# Linting instruction
npm run lint

# Architecture Documentation
## Branching Strategy

### Branch Structure

**Main Branches:**
- **`main`** - Production branch (protected)
  - Always deployable
  - Reflects live production code
  - Requires PR + CI passing to merge
  - Auto-deploys to Netlify on merge

- **`Sprint2`** - Development branch (deprecated post-Sprint 2)
  - Used for Sprint 2 development
  - Merged into main after sprint completion

**Feature Branches:**
- Naming convention: `feat/<feature-name>`, `fix/<bug-name>`, `docs/<doc-name>`
- Created from: `main` branch
- Merged to: `main` via Pull Request
- Deleted after merge

### Workflow

1. **Create feature branch from main:**
```bash
   git checkout main
   git pull origin main
   git checkout -b feat/new-feature
```

2. **Develop and commit:**
```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feat/new-feature
```

3. **Create Pull Request:**
   - PR from: `feat/new-feature`
   - PR to: `main`
   - CI automatically runs

4. **Code Review & Merge:**
   - CI must pass (build, lint, test)
   - Review approved (if team review enabled)
   - Merge to main
   - Auto-deploy to production

5. **Cleanup:**
```bash
   git branch -d feat/new-feature
   git push origin --delete feat/new-feature
```

### Protection Rules

**Main Branch Protection:**
- Require Pull Request before merging
- Require status checks to pass (`build-and-test`)
- No direct pushes allowed
- Enforce branch up-to-date before merge

**Why This Strategy:**
- Ensures code quality through automated checks
- Enables code review process
- Prevents broken code in production
- Maintains clean commit history
- Supports rollback if needed

## CI/CD Pipeline

### Pipeline Architecture
```
┌─────────────────────────────────────────────────────────────────┐
│                    Developer Workflow                            │
└─────────────────────────────────────────────────────────────────┘
                              ↓
                    git push origin feat/branch
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                    GitHub Repository                             │
│                   Pull Request Created                           │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                   GitHub Actions Triggered                       │
│                    (CI/CD Pipeline Starts)                       │
└─────────────────────────────────────────────────────────────────┘
                              ↓
        ┌────────────────────────────────────────┐
        │     Job 1: build-and-test (CI)        │
        └────────────────────────────────────────┘
                      ↓
        ┌─────────────────────────┐
        │ 1. Checkout Code        │
        │ 2. Setup Node.js 18     │
        │ 3. Install Dependencies │ (npm ci)
        │ 4. Run Linter          │ (npm run lint)
        │ 5. Run Tests           │ (npm test)
        │ 6. Build Application   │ (npm run build)
        │ 7. Upload Artifacts    │ (build/ folder)
        └─────────────────────────┘
                      ↓
                  ✅ Pass?
                      ↓
        ┌─────────────────────────┐
        │  Enable PR Merge        │
        │  (if all checks pass)   │
        └─────────────────────────┘
                      ↓
              PR Merged to main
                      ↓
        ┌────────────────────────────────────────┐
        │     Job 2: deploy (CD)                 │
        │  (Only runs on merge to main)          │
        └────────────────────────────────────────┘
                      ↓
        ┌─────────────────────────┐
        │ 1. Checkout Code        │
        │ 2. Setup Node.js        │
        │ 3. Install Dependencies │
        │ 4. Build Production     │ (npm run build)
        │ 5. Deploy to Netlify    │ (via Netlify API)
        └─────────────────────────┘
                      ↓
┌─────────────────────────────────────────────────────────────────┐
│                    Netlify Production                            │
│              https://tcmfoodthreapy.netlify.app                  │
│                    ✅ Live & Updated                             │
└─────────────────────────────────────────────────────────────────┘
```

### Pipeline Details

**Trigger Conditions:**
- **CI (build-and-test):** Runs on all Pull Requests to `main`
- **CD (deploy):** Runs only on push/merge to `main` branch

**Pipeline Steps:**

**Continuous Integration (CI):**
1. **Code Checkout** - Fetch latest code from repository
2. **Environment Setup** - Node.js 18 with npm caching
3. **Dependency Installation** - `npm ci` for clean, reproducible installs
4. **Code Quality Check** - ESLint validation (warnings allowed)
5. **Automated Testing** - Jest test suite execution
6. **Build Validation** - Production build compilation
7. **Artifact Storage** - Build files saved for 7 days

**Continuous Deployment (CD):**
1. **Production Build** - Optimized build for deployment
2. **Netlify Deploy** - Automated deployment via Netlify CLI action
3. **Health Check** - Verify deployment success
4. **Notification** - Deployment status visible in GitHub

**Failure Handling:**
- Failed CI blocks PR merge (branch protection)
- Failed deployment preserved previous version (rollback safe)
- Notifications via GitHub PR status checks

**Performance:**
- Average CI time: 1-2 minutes
- Average deployment time: 1-2 minutes
- Total pipeline: 3-5 minutes from push to live

### Tools & Services

- **CI/CD Platform:** GitHub Actions
- **Build Tool:** React Scripts (Create React App)
- **Deployment Platform:** Netlify
- **Deployment Method:** Netlify CLI via GitHub Actions
- **Secrets Management:** GitHub Secrets (NETLIFY_AUTH_TOKEN, NETLIFY_SITE_ID)

## Testing Strategy

### Testing Approach

**Philosophy:** Comprehensive automated testing with focus on critical user paths and component reliability.

**Testing Pyramid:**
```
        /\
       /  \  E2E Tests (Future)
      /────\
     /      \  Integration Tests (Planned)
    /────────\
   /          \  Unit Tests (Current Focus)
  /────────────\
 /  Static Analysis  \  ESLint, TypeScript, Prettier
/──────────────────────\
```

### Current Testing Framework

**Framework:** Jest + React Testing Library
- **Jest:** Test runner and assertion library (built-in with CRA)
- **React Testing Library:** Component testing utilities
- **Coverage Tool:** Jest coverage (built-in)

**Configuration:**
- No separate `jest.config.js` needed (Create React App defaults)
- Custom setup in `src/setupTests.ts`
- Test pattern: `*.test.{ts,tsx,js,jsx}`

### Test Categories

**1. Unit Tests (Current)**
- Component rendering tests
- Function logic validation
- Props and state behavior
- Example: `App.test.tsx`, component tests

**Coverage:**
- Current: Basic component rendering
- Target: 60%+ code coverage by Sprint 3

**2. Integration Tests (Planned - Sprint 3)**
- User flow testing
- Form submission workflows
- Navigation between pages
- State management across components

**3. End-to-End Tests (Future)**
- Complete user journeys
- Full assessment flow
- Cross-browser compatibility
- Framework: Cypress or Playwright (TBD)

### Testing Workflow

**During Development:**
```bash
# Watch mode - runs tests on file changes
npm run test:watch

# Single run - quick validation
npm test
```

**In CI Pipeline:**
```bash
# Automated in GitHub Actions
npm test  # Runs all tests, exits with code
```

**Coverage Analysis:**
```bash
# Generate coverage report
npm run test:coverage
```

### Test Standards

**Test File Structure:**
```typescript
import { render, screen } from '@testing-library/react';
import ComponentName from './ComponentName';

describe('ComponentName', () => {
  test('descriptive test name', () => {
    render(<ComponentName />);
    // Assertions
  });
});
```

**Naming Conventions:**
- Test files: `ComponentName.test.tsx`
- Located: Same directory as component
- Describe blocks: Component or feature name
- Test names: User-centric, descriptive

**Quality Gates:**
- All tests must pass before PR merge
- No test failures allowed in main branch
- Warnings acceptable (continue-on-error enabled)
- Target: 60%+ code coverage

### Test Execution in CI

**GitHub Actions Integration:**
- Tests run automatically on every Pull Request
- Failures block merge (branch protection)
- Results visible in PR status checks
- Coverage reports generated (future: published to PR comments)

**Test Results Tracking:**
- Current: 17 tests, 100% passing
- Test suites: 2 (App, Sprint1/utils)
- Execution time: ~1-2 seconds
- No flaky tests reported

### Future Testing Enhancements

**Sprint 3 Goals:**
1. Increase coverage to 60%+
2. Add integration tests for user flows
3. Implement visual regression testing
4. Add accessibility testing (jest-axe)

**Long-term:**
1. E2E test suite with Cypress/Playwright
2. Performance testing
3. Load testing for API integrations
4. Cross-browser automated testing



# Burn Chart
<img width="482" height="504" alt="Screenshot 2025-11-09 at 22 12 50" src="https://github.com/user-attachments/assets/ec982320-9428-4261-a8af-2d3de559a2a9" />

# Testing framework
### Jest
<b>Note: This project uses Create React App's built-in Jest configuration, which requires no separate jest.config.js file - all testing setup is handled automatically by react-scripts with custom extensions in src/setupTests.ts.</b>
<img width="1188" height="270" alt="Screenshot 2025-11-10 at 13 46 59" src="https://github.com/user-attachments/assets/1527806c-4639-470c-82b7-38cb9f3333ed" />


# CI Pipeline
<img width="1451" height="680" alt="Screenshot 2025-11-10 at 14 02 44" src="https://github.com/user-attachments/assets/29347dd4-0710-4ee0-b99e-fa62a29919cc" />


# Sprint 2 Goal

## Goal Statement
Establish a robust development infrastructure by implementing CI/CD pipelines and code quality tools, while enhancing user engagement features on the TCM wellness platform.

---

## Primary Objectives

### 1. Development Infrastructure (Priority 1)
- ✅ Set up automated CI/CD pipeline using GitHub Actions
- ✅ Configure code quality tools (ESLint & Prettier)
- ✅ Implement automated testing and building processes
- ✅ Configure automated deployment to Netlify production

### 2. User Engagement Features (Priority 0)
- ✅ Implement email subscription functionality using Google Forms
- ✅ Add Contact Us feature via mailto integration
- ✅ Improve survey UX by removing auto-highlight on navigation

### 3. Platform Enhancements (Priority 0)
- ✅ Implement meaningful URL routing structure
- ✅ Update privacy policy for GDPR compliance
- ✅ Enhance typography for "Traditional Chinese Medicine" branding

---

## Key Deliverables

**Infrastructure:**
- GitHub Actions workflow configured for main branch
- ESLint passing with 0 errors and 0 warnings
- Prettier configured for consistent code formatting
- Branch protection rules for main branch
- Automated Netlify deployment on successful builds

**Features:**
- Google Forms integration for email subscriptions
- Functional Contact Us system
- Privacy policy page
- Improved URL structure for better SEO
- Enhanced UX for survey navigation

**Process:**
- Regular team meetings (2x per week)
- Code review through Pull Requests
- Automated quality checks before merge

---

## Sprint Outcome

Successfully transitioned from development (Sprint2 branch) to production (main branch) with:
- ✅ Complete CI/CD automation
- ✅ Zero linting errors
- ✅ Production deployment on Netlify
- ✅ Enhanced user engagement features
- ✅ Improved code quality standards

**Live Production URL:** https://foodtherapysprint2test.netlify.app

---

## Sprint Statistics

- **Total Story Points:** 10 points
- **Completed Items:** 7 items
- **Team Meetings:** 2 per week
- **Sprint Duration:** 2 weeks (Iteration 2)
- **Deployment Status:** ✅ Production Ready

---

## Process Improvement Plan

### Sprint 1 Retrospective Analysis

**Sprint 1 Performance Metrics:**
- **Previous Sprint Velocity:** 28 story points completed
- **Tickets Completed:** 14 out of 14 planned (100% completion rate)
- **Carry-over Items:** 0 tickets moved to Sprint 2

**What Worked Well:**
- ✅ Clear prioritization of infrastructure work
- ✅ Successful implementation of core features
- ✅ Good collaboration between team members (Huiqin & Shufan)

**What Didn't Work:**
- ❌ Team communication was not enough
- ❌ Branch assignment was unclear
- ❌ Some tickets lacked detailed acceptance criteria
- ❌ Learning curve for new tools (GitHub Actions, ESLint) not factored in

**Key Learnings:**
- TCM research took longer than expected
- Need buffer time for troubleshooting and learning
- Importance of clear acceptance criteria
- Value of incremental progress over perfect completion

---

### Ticket Quality Improvements

**1. Improved Ticket Granularity**
- **Current Issue:** Some tickets (e.g., CI/CD setup) were too large (5+ story points)
- **Action:** Break down tickets >3 story points into smaller sub-tasks
- **Owner:** Shufan
- **Implementation:** Starting Sprint 3

**2. Enhanced Acceptance Criteria Format**
- **Current Issue:** Acceptance criteria often too vague
- **New Format:**
```
  Given [context]
  When [action]
  Then [expected outcome]
  
  Technical Requirements:
  - [ ] Specific requirement 1
  - [ ] Specific requirement 2
  
  Definition of Done:
  - [ ] Code reviewed
  - [ ] Tests passing
  - [ ] Documentation updated
```
- **Owner:** Huiqin
- **Implementation:** Immediate (Sprint 3 onward)

**3. Better Estimation Practices**
- **Action Items:**
  - Use Planning Poker for estimation
  - Include "complexity buffer" for new technologies (+1-2 points)
  - Track actual vs. estimated time for each ticket
  - Review estimates in retrospective
- **Owner:** Both team members
- **Implementation:** Starting Sprint 3 planning

**4. Specific Actions with Owners**

| Action | Owner | Timeline | Status |
|--------|-------|----------|--------|
| Create ticket template with acceptance criteria | Huiqin | Week 1, Sprint 3 | 🔄 Planned |
| Break down large tickets before sprint starts | Shufan | Before each sprint | 🔄 Planned |
| Add "learning time" estimates for new tech | Both | Sprint 3 planning | 🔄 Planned |
| Document estimation guidelines | Shufan | Week 1, Sprint 3 | 🔄 Planned |
| Create definition of done checklist | Huiqin | Week 1, Sprint 3 | 🔄 Planned |

---

### Sprint 2 Capacity Planning

**Realistic Commitment Based on Sprint 1 Velocity:**
- **Sprint 1 Completed:** 28 story points (14 tickets)
- **Sprint 2 Target:** 20 story points (more realistic, accounting for CI/CD complexity)
- **Actual Sprint 2 Completion:** 13 story points (9 tickets) ✅

**Team Availability:**
- **Huiqin:**
  - Available: 10 hours/week
  - Focus areas: UX improvements, documentation, testing
  - Capacity: ~7 story points/sprint
  
- **Shufan:**
  - Available: 12 hours/week
  - Focus areas: CI/CD, code quality, infrastructure
  - Capacity: ~7 story points/sprint

**Total Team Capacity:** ~13 story points/sprint (realistic target)

**Buffer for New Practices:**
- **Testing Setup:** 2-3 hours (added to CI/CD ticket)
- **Code Review Process:** 1 hour/week (included in ticket estimates)
- **Documentation:** 0.5 hours/ticket (added to each estimate)
- **Learning Time:** 2 hours/sprint for new tools/technologies

**Sprint 3 Planning Adjustments:**
- Reduce initial commitment to 8-10 story points
- Add explicit "tech debt" ticket (1-2 points)
- Include time for documentation in each ticket
- Schedule mid-sprint check-in to adjust if needed

---

## Related Issues

- Closes #32 - Set up CI/CD on GitHub using GitHub Actions
- Closes #33 - Set up code quality tools
- Closes #34 - Design/Change the font style of "Traditional Chinese Medicine"
- Closes #35 - Update the privacy policy
- Closes #36 - Implement meaningful URL structure
- Closes #40 - Remove hover auto-highlight on survey options

---

## Next Steps for Sprint 3

1. **Apply Process Improvements:**
   - Implement new ticket template
   - Use updated estimation practices
   - Commit to realistic story point target (8-10 points)

2. **Technical Priorities:**
   - Address any remaining tech debt from Sprint 2
   - Continue feature development
   - Maintain code quality standards

3. **Team Development:**
   - Continue 2x weekly meetings
   - Mid-sprint checkpoint
   - Improved documentation practices

---

**Sprint 2 Status:** ✅ **COMPLETE**  
**Date Completed:** [Add date]  
**Ready for Production:** ✅ YES









