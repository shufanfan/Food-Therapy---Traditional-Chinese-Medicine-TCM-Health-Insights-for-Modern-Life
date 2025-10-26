# Sprint 1 Review Meeting Summary

## Meeting Information

- **Date:** October 23, 2025
- **Time:** 2:00 PM - 2:30 PM
- **Duration:** 30 minutes
- **Location:** Virtual (Zoom)
- **Attendees:** 
  - Huiqin Hu (Scrum Master)
  - Professor John Alexis Guerra Gomez (Product Owner)

## Demo Presentation

### What We Demonstrated

We didn't have a product to show at the time of the meeting, so the demo focused on our planning and approach:

- **GitHub Scrum Board walkthrough** - showed our project structure and initial backlog organization
- **Three initial backlog items:**
  1. Survey Question Design
  2. Landing Page Design
  3. Deployment
- **Project vision** - MVP shows a landing page with a survey that helps people figure out their body constitution based on TCM principles
- **Sprint 1 planning approach** - how we prioritized items

## Product Owner Feedback

### What Met Expectations ✅

- Clear project vision and target users (health-conscious individuals interested in TCM)
- Good value to be delivered to the user
- Realistic about starting with MVP

### What Needs Adjustment 🔄

**1. Survey Possibly Too Complex**
- Current plan for 5-question survey could be too ambitious
- Decision tree would be too large for Sprint 1
- **Recommendation:** Start with just 1-2 questions as a "trivia" proof-of-concept
- If we couldn't finish the survey in Sprint 1, move full survey to Sprint 2

**2. Backlog Too Generic**
- Current items like "Survey Design" are too broad
- Need much more specific, granular backlog items
- **Example:** Instead of "Build recommendation system," break it into:
  - Research 3-5 TCM constitution types
  - Create decision tree for 2 questions  
  - Design recommendation display
  - Document TCM source materials
- Each item should be specific enough to complete and demo in one sprint

**3. Missing TCM Knowledge Source**
- **Key question:** "Where is the TCM data/knowledge that builds your recommendations?"
- Need to document and translate TCM research with proper citations
- This should be a backlog item, not just background research
- **New requirement:** Create backlog item for TCM content translation and documentation

**4. Scrum Board Should Show Value**
- Board needs to reflect actual work that delivers user value
- Move away from just organizational structure
- Each item should be something demonstrable

## Backlog Status & Acceptance

### Original Sprint 1 Backlog (3 Items)

Since we were still in ideation, these items represent our initial thinking rather than completed work:

| Item | Status | Product Owner Feedback |
|------|--------|------------------------|
| Survey Question Design | Planning | ⚠️ Needs to be simplified - start with 1-2 questions only |
| Deployment | ✅ Acceptable for MVP |
| Landing Page Content | Planned | ⚠️ Way to generic and broad, need to be more detailed and specific |

### Backlog Updates Resulting from Review

**Before Review:** 3 broad items  
**After Review:** Need to break into 10+ specific items

**New/Updated Backlog Items for Sprint 1:**
Item 1: TCM Constitution Translation & Simplification
Description:
Research and select 3-5 TCM constitution types suitable for MVP
Translate traditional TCM constitution descriptions into modern, Western-accessible language
Define key characteristics and symptoms for each selected constitution type
Acceptance Criteria:
 3-5 constitution types selected with rationale documented
 Each constitution has clear, jargon-free description in English
 Key symptoms/characteristics documented for each type
Effort: 2 points (1 hour)
Owner: Huiqin
Item 2: Constitution-to-Recommendations Mapping
Description:
Create database/mapping of dietary recommendations for each constitution type
Match TCM dietary principles to commonly available Western foods and herbal teas
Include both beneficial and foods-to-avoid for each constitution
Acceptance Criteria:
 Each constitution has 3-5 recommended teas/foods
 Each constitution has 3-5 foods to avoid
 All items are easily accessible in US markets
 Data structured in format ready for frontend consumption (JSON or similar)
Effort: 3 points (1.5 hours)
Owner: Huiqin
Item 3: TCM Constitution Assessment Logic
Description: Build the scoring system that maps 5 survey questions to TCM constitution types. Question design will be based on key differentiating symptoms identified in Item 1. Implement the calculation logic to determine predominant constitution.
Dependencies:
Requires Item 1 completion (constitution types and characteristics defined)
Acceptance Criteria:
 5 questions finalized with answer options
 Scoring algorithm implemented (maps answers → constitution scores)
 Returns top 1-2 constitution types based on user responses
 Basic manual testing completed
Effort: 5 points (2 hours)
Owner: Shufan (with input from Huiqin on question design)
Item 4: Landing Page Content
Description: Write minimal content for landing page including project intro text and survey instructions. Keep design simple and functional.
Acceptance Criteria:
 Brief hero text explaining the tool (2-3 sentences)
 Survey instructions written
 Results page text template created
Effort: 2 points (1 hour)
Owner: Huiqin + Shufan
Item 5: Survey Frontend Implementation
Description: Build the interactive survey component with 5 questions, answer selection, and submission flow.
Dependencies:
Item 3 (needs questions and answer options)
Item 4 (needs basic content)
Acceptance Criteria:
 Survey component renders all 5 questions
 Users can select answers and navigate between questions
 Form validation works (all questions answered before submission)
 Survey connects to assessment logic and displays results
 Mobile-responsive (basic)
Effort: 5 points (3 hours)
Owner: Shufan
Item 6: Results Display Component
Description: Build the component that displays user's TCM constitution results and personalized recommendations.
Dependencies:
Item 2 (needs recommendations content)
Item 3 (needs assessment output)
Acceptance Criteria:
 Displays identified constitution type with description
 Shows recommended teas/foods
 Shows foods to avoid
 Readable and functional (minimal styling okay)
Effort: 3 points (2 hours)
Owner: Shufan
Item 7: Basic Page Styling & Integration
Description: Apply minimal styling to make the page functional and presentable. Integrate all components into single page.
Dependencies:
Items 5, 6 (all components built)
Acceptance Criteria:
 All components integrated on single page
 Basic CSS applied (readable, not ugly)
 Smooth transition between survey → results
 Works on desktop and mobile (basic responsiveness)
Effort: 2 points (1 hour)
Owner: Huiqin
Item 8: Deployment
Description: Deploy the landing page to Vercel or Netlify with a public URL.
Acceptance Criteria:
 Website deployed to production
 Public URL accessible
 HTTPS enabled
 URL documented in README
Effort: 1 point (30 minutes)
Owner: Shufan
Item 9: Testing & Documentation
Description: End-to-end manual testing and basic README documentation.
Dependencies:
All previous items completed
Acceptance Criteria:
 Complete user flow tested on desktop
 Complete user flow tested on mobile (one device)
 No blocking bugs
 README has project description and live URL
 MVP description documented
Effort: 2 points (30 minutes)
Owner: Huiqin + Shufan (edited) 


**Moved to Future Sprints:**
- Adaptive suggestions (Later)
- Transparency layer (Later)
- Notification controls (Later)
- Progress tracking (Later)

## Priority Changes for Next Sprint


**Key Insight from Professor:**
"Focus on delivering the smallest thing that shows value. For a TCM app, the credibility comes from your knowledge base - that's the real product feature."


## Key Takeaways

1. **Start smaller** - 1-2 questions, not 5
2. **Be specific** - Generic backlog items don't help track progress
3. **Domain knowledge is a product feature** - TCM content needs proper documentation and citations
4. **Show incremental value** - Each sprint should demonstrate something working

