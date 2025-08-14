# Multi-Step Cash Offer Form

A high-converting, two-step lead capture form for real estate cash offers with Google Places autocomplete, advanced conversion tracking, and mobile-optimized design.

## 🚀 Live Demo
- **Production Form**: [index.html](./index.html)
- **Test Environment**: [iframe-test.html](./iframe-test.html)

## ✨ Features

### Core Functionality
- **Two-Step Conversion Flow**
  - Step 1: Address-only entry (micro-commitment)
  - Step 2: Contact info with blurred cash offer preview
- **Google Places Autocomplete** with smart address validation
- **Dynamic Cash Offer Preview** with market comparison visualization
- **Mobile-First Responsive Design** (320px+)
- **Real-Time Form Validation**
- **Success Page** with personalized content

### Technical Features
- **99+ PageSpeed Score** optimization
- **Enhanced Conversion Tracking** (Google Ads)
- **Iframe Communication** for Framer embedding
- **Auto-Resize Mechanism** for seamless integration
- **Cross-Domain Tracking Support**
- **GDPR-Compliant** data handling

## 📁 Project Structure

```
multi-step-cash-offer-form/
├── index.html                    # Production form (latest version)
├── multi-step-cash-offer-form.html # Development version
├── iframe-test.html              # Local testing environment
├── CLAUDE.md                     # AI assistant instructions
├── README.md                     # This file
│
├── documentation/               # Technical documentation
│   ├── design-improvements.md
│   ├── initial-analysis.md
│   ├── professional-design-audit.md
│   └── visual-issues-documented.md
│
├── hosting/                     # Cloudflare deployment
│   ├── dist/                   # Built files
│   ├── src/                    # Source files
│   ├── scripts/                # Build & deploy scripts
│   └── DEPLOYMENT-SUMMARY.md
│
├── framer-custom-code.html     # Framer integration code
├── framer-embed-code-updated.html
└── framer-head-code-updated.html
```

## 🛠️ Technical Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Styling**: Inter Display font, custom CSS
- **APIs**: 
  - Google Maps JavaScript API
  - Google Places API
  - Formspree (form submission)
- **Analytics**: Google Ads Conversion Tracking
- **Hosting**: Cloudflare Pages

## 🎨 Design System

### Colors
- **Primary**: `#E8743B` (Orange)
- **Success**: `#10b981` (Green)
- **Error**: `#ef4444` (Red)
- **Text**: `#111827` (Dark Gray)
- **Muted**: `#6b7280` (Gray)

### Typography
- **Font Family**: Inter Display (primary), system fonts (fallback)
- **Sizes**: 14px-36px responsive scale
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extra Bold)

### Spacing
- **Container**: max-width 440px
- **Padding**: 12px (mobile), 20px (desktop)
- **Input Height**: 48px
- **Border Radius**: 10px (inputs), 12px (cards), 16px (container)

## 🚀 Quick Start

### Local Development
1. Clone the repository
2. Open `iframe-test.html` in your browser for local testing
3. Or open `index.html` directly for production view

### Testing Google Places
The form includes Google Places autocomplete. To test:
1. Start typing an address in the first field
2. Select from the dropdown suggestions
3. The form will auto-populate with the selected address

## 📦 Deployment

### Framer Integration
The form is designed to be embedded in Framer websites.

1. **Add HTML Embed Component** in Framer
2. **Paste embed code** from `framer-embed-code-updated.html`
3. **Add custom head code** from `framer-head-code-updated.html`

### Cloudflare Pages
For external hosting, see [External-Hosting-Deployment-Instructions.md](./External-Hosting-Deployment-Instructions.md)

## 🔧 Configuration

### API Keys & Endpoints
Located in the HTML files:
- **Google Maps API Key**: `AIzaSyChsAghoLBZ_2uOwtOil9qhDG_tQdsDuTM`
- **Formspree Endpoint**: `https://formspree.io/f/xblyrjpg`
- **Google Ads Conversion ID**: `17041538947`

### Contact Information
- **Agent**: Rich
- **Phone**: (914) 223-8317

## 📊 Performance Metrics

### Target Metrics
- PageSpeed Score: 95+
- First Contentful Paint: <1s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- First Input Delay: <100ms

### Optimization Techniques
- Critical CSS inlined
- JavaScript deferred
- Google Maps lazy-loaded
- Images optimized as SVG data URIs
- HTML/CSS/JS minified

## 🧪 Testing

### Browser Compatibility
- Chrome 90+
- Safari 14+
- Firefox 88+
- Edge 90+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 10+)

### Test Checklist
- [ ] Address autocomplete working
- [ ] Form validation on all fields
- [ ] Step navigation smooth
- [ ] Mobile responsive at 320px+
- [ ] Success page displays correctly
- [ ] Conversion tracking fires
- [ ] Iframe resize working

## 🐛 Known Issues

1. **Safari Privacy Warning**: Google Maps may show privacy warnings in Safari
2. **iOS Keyboard**: May push layout on some devices (viewport meta configured)
3. **Private Browsing**: Google Places may fail in private/incognito mode

## 📝 Development Notes

### Making Changes
1. Always create a backup before major changes
2. Test in `iframe-test.html` first
3. Verify mobile responsiveness
4. Check conversion tracking
5. Update version comments in HTML

### Code Style
- Use consistent indentation (2 spaces)
- Comment complex logic
- Keep functions small and focused
- Use semantic HTML5 elements
- Follow BEM naming for CSS classes

## 🔄 Version History

### v1.1.0 (Current)
- Fixed Formspree submission handling
- Accept all 2xx status codes
- Enhanced error logging
- Improved resize mechanism

### v1.0.0
- Initial release
- Two-step form flow
- Google Places integration
- Conversion tracking

## 📄 License

Proprietary - All rights reserved

## 👥 Contributors

- Development Team
- Rich (Product Owner)

## 📞 Support

For issues or questions:
- **Technical Issues**: Check [CLAUDE.md](./CLAUDE.md) for common fixes
- **Business Inquiries**: Contact Rich at (914) 223-8317

---

*Last Updated: August 2025*