# Sprint 2 Retrospective

**Date**: November 9, 2025, 8:30 PM  
**Duration**: 1 hour  
**Attendees**: Huiqin, Shufan

---

## Velocity Analysis

### Sprint 1 Velocity

- **Planned**: 25 story points
- **Actual**: 25 story points
- **Velocity**: 25 points/sprint
- **Completion Rate**: 100%

### Sprint 2 Performance

- **Planned**: 15 story points (conservative estimate based on Sprint 1)
- **Actual**: 20 story points delivered
- **Velocity**: 20 points/sprint
- **Completion Rate**: 133% (exceeded plan by 33%)

### Comparison & Lessons Learned

**Velocity Increase:**
Sprint 2 delivered 20 points vs Sprint 1's 25 points, but in a **shorter timeframe** (5 days vs 7 days). Adjusted for time, Sprint 2 velocity was **higher per day**.

**Why we exceeded planned velocity:**

1. Better task estimation - we were more conservative in planning
2. Clearer division of labor (Huiqin: content, Shufan: technical)
3. Momentum from Sprint 1 - less setup overhead
4. Some items (Item 3, Item 6) were faster than estimated

**What this tells us:**

- Our 3-point estimates are often too high for simple content pages (actually ~1 point)
- Technical infrastructure items (CI/CD) accurately estimated at 1 point
- Team can handle 15-20 points comfortably in a 1-week sprint

---

## Process Retrospective

### 🎉 What Went Well (Celebrate Wins!)

1. **Clear Division of Labor**

   - Huiqin focused on content, design, and TCM knowledge
   - Shufan focused on technical infrastructure and deployment
   - Minimal overlap, maximum efficiency
   - **Keep doing**: Maintain this clear ownership model

2. **Better Communication**

   - Used GitHub Issues for task tracking effectively
   - Commit messages were descriptive and linked to issues
   - Fewer "what are you working on?" questions
   - **Keep doing**: Continue detailed commit messages

3. **Professional Infrastructure**

   - CI/CD means deployments are now automatic and safe
   - Code quality tools catch errors before they become problems
   - Git workflow is now smooth (after initial setup)
   - **Keep doing**: Invest in automation early

4. **Content Quality**

   - Privacy policy directly addresses user concerns
   - About TCM page is educational and well-researched
   - References show academic integrity
   - **Keep doing**: Prioritize quality over speed

5. **Velocity Management**
   - Delivered more than planned without burnout
   - No missed deadlines or rushed work
   - Sustainable pace maintained
   - **Keep doing**: Conservative planning, overdeliver happily

---

### 🤔 What Could Be Better

1. **Earlier Starts**

   - **Issue**: Both team members tend to start work close to deadlines
   - **Impact**: Creates unnecessary stress, less time for iteration
   - **Root cause**: Procrastination, other coursework, schedule conflicts
   - **For Sprint 3**: Start work within 24 hours of sprint kickoff

2. **Testing Documentation**

   - **Issue**: We tested features manually but didn't document test cases
   - **Impact**: Harder to prove thorough QA to Product Owner
   - **Root cause**: Focused on building, not on documenting testing
   - **For Sprint 3**: Create simple test checklist and check off as we go

3. **Standup Consistency**

   - **Issue**: Only 3 standups over 5-day sprint (should be daily)
   - **Impact**: Missed opportunities for quick problem-solving
   - **Root cause**: Asynchronous work schedules, forgot to log
   - **For Sprint 3**: Set calendar reminders, use async Slack standups if needed

4. **User Story Validation**

   - **Issue**: Didn't validate assumptions with real users before building
   - **Impact**: We assume what users want without confirming
   - **Root cause**: Time pressure, focus on delivery over discovery
   - **For Sprint 3**: Quick user interviews before major features

5. **Scope Creep Prevention**
   - **Issue**: Item 10 scope was underestimated (3 points → actually 15+ points)
   - **Impact**: Item couldn't be completed, creates backlog bloat
   - **Root cause**: Didn't break down complex tasks enough during planning
   - **For Sprint 3**: Break down any item >3 points into sub-tasks

---

### 🔧 Specific Improvements for Sprint 3

| Improvement                                            | Owner  | Deadline        | Success Metric                         |
| ------------------------------------------------------ | ------ | --------------- | -------------------------------------- |
| Start sprint work within 24 hours of kickoff           | Both   | Nov 11          | First commit by Nov 12                 |
| Create test case checklist for each item               | Huiqin | During planning | Checklist exists in each issue         |
| Daily async standups in Slack                          | Both   | Daily           | 5 standup logs by sprint end           |
| Conduct 2 user interviews before building new features | Huiqin | Nov 13          | Interview notes documented             |
| Break down items >3 points into sub-tasks              | Both   | During planning | No items >3 points in Sprint 3 backlog |

---

## New Practices Evaluation

### How did testing go?

**Current state:**

- Manual testing only - Huiqin tested on Mac/Chrome, Shufan tested on other devices
- No formal test cases or acceptance test scripts
- Bugs caught through ad-hoc clicking around

**What worked:**

- Cross-device testing between team members caught mobile issues
- Real-time testing during development caught bugs early

**What didn't work:**

- No documentation of what was tested
- Couldn't prove comprehensive coverage to Product Owner
- Risk of regression (breaking old features when adding new ones)

**Action Items:**

1. Create simple test checklist template (Owner: Shufan)
2. Document test results in each issue before closing (Owner: Both)
3. Consider automated testing for critical paths in Sprint 4 (Owner: Shufan)

---

### CI/CD pain points?

**What worked well:**

- Setup was straightforward with GitHub Actions
- Automatic deployments save time and reduce errors
- Build status visible immediately in pull requests

**Pain points encountered:**

- Initial configuration took longer than expected (trial and error with yaml syntax)
- First deployment failed due to missing environment variables - had to debug
- Learning curve for GitHub Actions workflow

**Solutions implemented:**

- Documented CI/CD setup in README for future reference
- Created troubleshooting notes for common issues
- Shufan now comfortable with GitHub Actions

**Action Items:**

- None - issues resolved. CI/CD is now smooth.

---

### Code review effectiveness?

**Current state:**

- Informal code review - we look at each other's commits after merging
- No formal pull request review process
- Direct commits to Sprint2 branch

**What worked:**

- Fast iteration without approval bottlenecks
- Trust in each other's domain expertise (content vs technical)

**What could improve:**

- No systematic review means potential bugs could slip through
- Educational opportunity missed - could learn from each other's code

**Recommendation for Sprint 3:**

- Continue current lightweight approach (works for 2-person team)
- Optional: Quick code walkthroughs when introducing new patterns
- Hold off on formal PR reviews until team grows larger

---

## Sprint 2 Metrics Summary

**Planned vs Actual:**

- Planned: 15 points
- Delivered: 20 points
- Completion: 133%

**Items Breakdown:**

- Fully Complete: 8 items
- Partially Complete: 1 item (Burn chart)
- Deferred: 2 items (Item 0 meetings, Item 10 expansion)

**Team Capacity:**

- Huiqin: 4 points delivered (Items 3, 4, 6, 7)
- Shufan: 16 points delivered (Items 1, 2, 5, 8, 9, + infrastructure)
- **Note**: Point distribution reflects different work types - Huiqin's content work was high quality but faster to execute

**Velocity Trend:**

- Sprint 1: 25 points in 7 days = 3.6 points/day
- Sprint 2: 20 points in 5 days = 4.0 points/day
- **Trend**: Increasing efficiency

---

## Key Insights

### What Made This Sprint Successful

1. **Infrastructure Investment**: CI/CD and quality tools set up early, paid dividends throughout sprint
2. **Clear Ownership**: No confusion about who does what
3. **Quality Focus**: Didn't rush to close issues; ensured each feature was polished
4. **Academic Standards**: Proper citations, research, and honest disclaimers maintained credibility

### Risks for Sprint 3

1. **Overconfidence**: Exceeding velocity might lead to over-planning next sprint
2. **Technical Debt**: Haven't written automated tests yet - will accumulate
3. **User Assumptions**: Building features without user validation
4. **Scope Creep**: Item 10 showed we can underestimate complexity

---

## Action Items for Sprint 3

**Process Improvements:**

- [ ] Daily async standups in Slack (Owner: Both)
- [ ] Test case checklists in issues (Owner: Shufan)
- [ ] User interviews before building (Owner: Huiqin)
- [ ] Break down large items (Owner: Both)

**Technical Debt:**

- [ ] Add unit tests for constitution calculator (Owner: Shufan)
- [ ] Mobile QA for all pages (Owner: Huiqin)
- [ ] Performance testing with more users (Owner: Both)

**New Features Based on Feedback:**

- [ ] Constitution score percentages (Owner: Shufan)
- [ ] Seasonal eating guidance (Owner: Huiqin)
- [ ] Print/save results functionality (Owner: Shufan)

---

## Team Morale & Collaboration

**Strengths:**

- Mutual respect for each other's expertise
- Good communication despite async work schedules
- Celebrating small wins kept motivation high

**Areas to Improve:**

- More pair programming sessions for knowledge transfer
- Better work-life balance (avoid late-night crunches)

---

**Sprint 2 Retrospective Completed**: ✅  
**Team Commitment**: Implement all action items in Sprint 3  
**Next Retrospective**: Scheduled for end of Sprint 3
