# Deployment Guide

## 🚀 Quick Deploy to Cloudflare Pages

### Option 1: Direct Upload (Simplest)
1. Visit [Cloudflare Pages](https://pages.cloudflare.com)
2. Click "Create a project" → "Upload assets"
3. Upload the `index.html` file
4. Deploy complete! You'll get a URL like `https://your-project.pages.dev`

### Option 2: GitHub Integration (Recommended)

#### 1. Push to GitHub
```bash
# If not already a repo
git init
git add .
git commit -m "Deploy cash offer form"
gh repo create cash-offer-form --public --source=. --push
```

#### 2. Connect to Cloudflare Pages
1. Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
2. Click "Create a project" → "Connect to Git"
3. Select your repository
4. Build settings:
   - Build command: (leave empty)
   - Build output directory: `/`
5. Deploy!

#### 3. Custom Domain (Optional)
1. In Cloudflare Pages project settings
2. Go to "Custom domains"
3. Add your domain
4. Update DNS records as instructed

## 📦 Files to Deploy

### Production Form
- **Primary**: `index.html` (latest, optimized version)
- **Alternative**: `multi-step-cash-offer-form.html` (development version)

### Framer Integration Files
After deployment, use these in Framer:

**HTML Embed Component:**
```html
<iframe 
  id="cashOfferForm"
  src="https://YOUR-PROJECT.pages.dev/" 
  style="width:100%;border:none;min-height:180px;"
  allow="geolocation">
</iframe>
```

**Custom Head Code:**
```html
<script>
window.addEventListener('message', function(e) {
  if (e.data && e.data.type === 'resize-embed') {
    const frame = document.getElementById('cashOfferForm');
    if (frame) {
      frame.style.height = (e.data.height || 180) + 'px';
    }
  }
});
</script>
```

## 🧪 Testing Your Deployment

### 1. Basic Functionality
- [ ] Form loads correctly
- [ ] Address autocomplete works
- [ ] Step navigation functions
- [ ] Form submits successfully

### 2. Performance Check
Visit: `https://pagespeed.web.dev/report?url=YOUR-DEPLOYED-URL`
- Target Score: 95+
- FCP: <1s
- LCP: <2.5s

### 3. Mobile Testing
- Test on actual mobile devices
- Check responsive layout at 320px+
- Verify touch interactions work

## 🔧 Environment Variables

Add these in Cloudflare Pages settings if needed:

| Variable | Value |
|----------|-------|
| GOOGLE_MAPS_API_KEY | AIzaSyChsAghoLBZ_2uOwtOil9qhDG_tQdsDuTM |
| FORMSPREE_ENDPOINT | https://formspree.io/f/xblyrjpg |

## 📝 Updating the Form

### Via GitHub (Auto-deploy)
```bash
git add index.html
git commit -m "Update form"
git push
```
Changes deploy automatically in ~1 minute

### Via Cloudflare Dashboard
1. Go to your Pages project
2. Click "Upload new version"
3. Upload updated `index.html`

## 🚨 Troubleshooting

| Issue | Solution |
|-------|----------|
| Form not resizing in iframe | Check Custom Head Code is added in Framer |
| Address autocomplete not working | Verify Google Maps API key is valid |
| Form not submitting | Check Formspree endpoint is correct |
| Low PageSpeed score | Use `index.html` (optimized version) |
| CORS errors | Cloudflare Pages handles CORS automatically |

## 📊 Monitoring

### Cloudflare Analytics
- View in Pages project dashboard
- Shows visits, bandwidth, errors

### Form Submissions
- Check Formspree dashboard
- Email notifications to configured address

## 🔗 Quick Links

- **Cloudflare Pages**: https://pages.cloudflare.com
- **PageSpeed Insights**: https://pagespeed.web.dev
- **Formspree Dashboard**: https://formspree.io/forms
- **GitHub CLI**: https://cli.github.com

---

**Need help?** Check the [README](./README.md) for detailed documentation.