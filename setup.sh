#!/bin/bash

echo "🚀 Setting up Multi-Step Cash Offer Form Development Environment..."
echo "=================================================="

# Color codes for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Create directory structure
echo -e "${BLUE}Creating project structure...${NC}"
mkdir -p .claude/{commands,servers}
mkdir -p .mcp/servers
mkdir -p documentation/{guides,testing,workflows}
mkdir -p tests/{unit,integration,e2e,visual}
mkdir -p scripts/{automation,debugging}
mkdir -p assets/screenshots

# Create comprehensive CLAUDE.md
cat > CLAUDE.md << 'EOF'
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
EOF

# Create advanced .claude/settings.json
cat > .claude/settings.json << 'EOF'
{
  "allowedTools": [
    "Edit",
    "Read",
    "Bash(grep:*)",
    "Bash(sed:*)",
    "Bash(cp:*)",
    "Bash(cat:*)",
    "Bash(find:*)",
    "Bash(git:*)",
    "Bash(npm:*)",
    "Bash(node:*)",
    "Bash(curl:*)",
    "Bash(diff:*)",
    "mcp__playwright__*",
    "mcp__github__*",
    "mcp__filesystem__*",
    "mcp__sequential-thinking__*"
  ],
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@microsoft/playwright-mcp@latest"],
      "options": {
        "browser": "chromium",
        "headless": false,
        "viewport": { "width": 440, "height": 800 }
      }
    },
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "."]
    },
    "sequential-thinking": {
      "command": "node",
      "args": ["scripts/sequential-thinking-server.js"]
    }
  },
  "defaultContext": {
    "includeFiles": ["CLAUDE.md", "multi-step-cash-offer-form.html"],
    "excludePatterns": ["node_modules", ".git", "*.backup.*"]
  }
}
EOF

# Create MCP configuration
cat > .mcp/mcp.json << 'EOF'
{
  "servers": {
    "playwright": {
      "command": "npx",
      "args": ["@microsoft/playwright-mcp@latest"],
      "env": {
        "PLAYWRIGHT_BROWSERS_PATH": "~/.cache/ms-playwright"
      }
    },
    "github": {
      "command": "gh",
      "args": ["api"],
      "condition": "command -v gh"
    },
    "filesystem": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-filesystem", "."],
      "permissions": {
        "read": true,
        "write": true,
        "watch": true
      }
    }
  }
}
EOF

# Create comprehensive slash commands
cat > .claude/commands/fix-visual.md << 'EOF'
Fix all visual issues in the multi-step form:

1. **Font Fix**:
   - Add Inter Display font import to head
   - Update all font-family declarations
   - Ensure fallback fonts are set

2. **Input Field Fixes**:
   - Reduce padding from 20px to 16px
   - Fix checkmark positioning (no overlap)
   - Hide dropdown arrow when input has value
   - Remove any X/clear buttons

3. **Google Places Styling**:
   - Match dropdown to form design
   - Rounded corners (12px)
   - Proper shadows and borders
   - Hide Google logo
   - Use Inter Display font

4. **Mobile Fixes**:
   - Test at 320px, 375px, 414px widths
   - Ensure touch targets are 44px minimum
   - Fix any layout shifts

Show me each fix as you make it and test visually.
EOF

cat > .claude/commands/debug-form.md << 'EOF'
Comprehensive form debugging:

1. **Console Testing**:
   ```javascript
   console.log('=== Form Debug Info ===');
   console.log('addressComponents:', window.addressComponents);
   console.log('formState:', window.formState);
   console.log('Google Maps loaded:', typeof google !== 'undefined');
   console.log('Autocomplete instance:', !!autocomplete);