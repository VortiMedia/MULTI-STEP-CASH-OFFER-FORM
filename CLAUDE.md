# Multi-Step Cash Offer Form Project

## 🎯 Project Overview
A sophisticated two-step lead capture form for real estate cash offers with:
- Step 1: Address-only entry (micro-commitment)
- Step 2: Contact info with blurred cash offer preview
- Google Places autocomplete integration
- Enhanced conversion tracking
- Mobile-optimized responsive design

## 🔧 Current Issues to Fix
1. **Visual Bugs**:
   - Checkmark and dropdown arrow overlap
   - X button appearing when it shouldn't
   - Excessive input padding (20px → 16px)
   - Google Places dropdown styling mismatch

2. **Technical Issues**:
   - `window.addressComponents` undefined
   - `window.formState` not globally accessible
   - Form resets on window resize
   - Font should be Inter Display, not system fonts

3. **Content Updates**:
   - Success page needs personalization
   - Loading message should mention Rich
   - Helper text needs clarity

## 📁 Key Files
- `multi-step-cash-offer-form.html` - Main implementation
- `multi-step-cash-offer-form.backup.html` - Backup before changes
- `test-results/` - Test outputs and screenshots
- `documentation/` - All project docs

## 🔑 Important Context
- **Formspree Endpoint**: https://formspree.io/f/xblyrjpg
- **Google Maps API Key**: AIzaSyChsAghoLBZ_2uOwtOil9qhDG_tQdsDuTM
- **Contact**: Rich - (914) 223-8317
- **Colors**: 
  - Primary: #E8743B (orange)
  - Success: #10b981 (green)
  - Error: #ef4444 (red)
- **Container**: max-width 440px
- **Font**: Inter Display

## 🧪 Testing Requirements
1. **Visual Testing**:
   - Checkmarks don't overlap with arrows
   - Dropdown styling matches form
   - Proper spacing between elements
   - Mobile responsive at 320px+

2. **Functional Testing**:
   - Google Places autocomplete works
   - Form data persists across steps
   - Success page shows personalized content
   - All fields validate correctly

3. **Technical Testing**:
   - `console.log(window.addressComponents)` returns data
   - `console.log(window.formState)` accessible
   - No console errors
   - Conversion tracking fires

## 🎨 Style Guidelines
- Font: Inter Display (primary), system fonts (fallback)
- Spacing: 16px between form elements
- Border radius: 12px for inputs, 16px for containers
- Transitions: 0.2s ease for all interactions
- Mobile-first approach

## 🔄 Workflow Commands
- `/project:fix-visual` - Fix all visual issues
- `/project:debug-form` - Comprehensive debugging
- `/project:test-ui` - Run UI tests with Playwright
- `/project:test-mobile` - Test mobile responsiveness
- `/project:deploy-check` - Pre-deployment verification

## 📋 Common Tasks
1. **Before any changes**: Create backup with timestamp
2. **Testing**: Run full test suite after each major change
3. **Debugging**: Use browser DevTools + console logging
4. **Deployment**: Verify in Framer preview before publishing

## 🚦 Git Workflow
- Branch naming: `fix/issue-name` or `feature/feature-name`
- Commit format: `type: brief description`
- Always test before committing
- Create PR with screenshots for UI changes

## 🐛 Known Issues
- Safari may show privacy warnings (Google Maps)
- iOS keyboard can push layout (use viewport meta)
- Google Places may fail in private browsing
