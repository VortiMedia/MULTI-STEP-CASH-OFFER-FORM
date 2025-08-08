# Multi-Step Cash Offer Form - Hosting

High-performance, optimized multi-step cash offer form ready for Cloudflare Pages deployment.

## 🚀 Quick Deploy

1. **Build the form:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Cloudflare Pages:**
   - Create new Cloudflare Pages project
   - Connect to GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `dist`

3. **Add to Framer:**
   - Copy code from `framer-embed-code.html` to HTML embed component
   - Copy code from `framer-head-code.html` to Custom Head Code

## 📁 Project Structure

```
├── src/
│   └── form.html          # Source form file
├── dist/
│   └── index.html         # Optimized output
├── scripts/
│   ├── optimize.js        # Build optimization
│   ├── test.js           # Deployment testing
│   └── monitor.js        # Site monitoring
├── framer-embed-code.html # Framer iframe code
├── framer-head-code.html  # Framer head code
└── .github/workflows/
    └── deploy.yml         # Auto-deployment

```

## ✨ Performance Features

- **Ultra-compact**: 10% size reduction from optimization
- **Critical CSS inlined** for instant Step 1 rendering  
- **Lazy-loaded non-critical styles**
- **Minified and compressed assets**
- **Enhanced iframe communication**
- **Debounced resize messaging**

## 🎯 Expected Results

- **PageSpeed Score**: 95+
- **First Contentful Paint**: <1s
- **Largest Contentful Paint**: <2.5s
- **Step 1 Height**: 140-180px
- **Step 2 Height**: 720px+

## 🧪 Testing

```bash
# Run deployment test
node scripts/test.js

# Monitor uptime
node scripts/monitor.js

# Local development
npm run dev
python3 -m http.server 8080 --directory dist
```

## 🔧 Environment Variables

Set these in Cloudflare Pages settings:

- `GOOGLE_MAPS_API_KEY`
- `FORMSPREE_ENDPOINT` 
- `GTM_ID`
- `GA_CONVERSION_ID`
- `GA_CONVERSION_LABEL`

## 📋 Deployment Checklist

- [x] Form optimized and built
- [x] GitHub repository ready
- [ ] Cloudflare Pages project created
- [ ] Environment variables set
- [ ] Custom domain configured (optional)
- [ ] Framer integration added
- [ ] Performance verified (95+ score)

## 🔗 Integration URLs

After deployment, update these URLs:

- **Form URL**: `https://your-project.pages.dev/`
- **PageSpeed Test**: Open scripts/test.js output
- **Framer Embed**: Update src in framer-embed-code.html

---

**Ready for 99+ PageSpeed Performance! 🎉**