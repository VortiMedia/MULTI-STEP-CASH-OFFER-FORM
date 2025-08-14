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
- `index.html` - **Production form** (latest optimized version)
- `multi-step-cash-offer-form.html` - Development/testing version
- `iframe-test.html` - Local testing environment
- `README.md` - Project documentation
- `DEPLOYMENT-GUIDE.md` - Deployment instructions
- `framer-integration/` - Framer embedding code & docs
- `hosting/` - Cloudflare deployment setup
- `docs/` - Technical documentation
- `backup/` - Form backups

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

### Development
- **Test locally**: Open `iframe-test.html` in browser
- **Production test**: Open `index.html` directly
- **Mobile test**: Use browser dev tools responsive mode
- **Deploy**: Follow `DEPLOYMENT-GUIDE.md` instructions

### Common Commands
- `git status` - Check current changes
- `git add .` && `git commit -m "message"` - Save changes
- Open `README.md` for full project documentation

## 📂 Project Structure
```
multi-step-cash-offer-form/
├── index.html                 # 🚀 Production form (deploy this)
├── multi-step-cash-offer-form.html  # 🧪 Development version  
├── iframe-test.html           # 🔧 Local testing
├── README.md                  # 📖 Project documentation
├── DEPLOYMENT-GUIDE.md        # 🚀 Deployment instructions
├── CLAUDE.md                  # 🤖 AI assistant instructions (this file)
│
├── framer-integration/        # 🖼️ Framer website embedding
│   ├── embed-code.html       # HTML embed component code
│   ├── head-code.html        # Custom head code for auto-resize
│   └── README.md             # Integration instructions
│
├── hosting/                   # ☁️ Cloudflare deployment setup
│   ├── dist/                 # Built production files
│   ├── src/                  # Source files for build
│   └── scripts/              # Build & deployment scripts
│
├── docs/                      # 📚 Technical documentation
├── backup/                    # 💾 Form backups
└── assets/                    # 🎨 Screenshots & images
```

## 📋 Common Tasks
1. **Editing**: Always edit `index.html` for production changes
2. **Testing**: Use `iframe-test.html` for local development
3. **Backup**: Automatic backup in `backup/` directory  
4. **Deployment**: Follow `DEPLOYMENT-GUIDE.md` step-by-step

## 🚦 Git Workflow
- Branch naming: `fix/issue-name` or `feature/feature-name`
- Commit format: `type: brief description`
- Always test before committing
- Create PR with screenshots for UI changes

## 🐛 Known Issues
- Safari may show privacy warnings (Google Maps)
- iOS keyboard can push layout (use viewport meta)
- Google Places may fail in private browsing
