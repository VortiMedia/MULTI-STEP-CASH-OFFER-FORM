# Framer Integration

This directory contains all the code needed to integrate the cash offer form into a Framer website.

## 📋 Files

- `embed-code.html` - HTML embed component code
- `head-code.html` - Custom head code for auto-resize
- `instructions.md` - Step-by-step setup guide

## 🚀 Quick Setup

1. **Deploy the form** to Cloudflare Pages (see [DEPLOYMENT-GUIDE.md](../DEPLOYMENT-GUIDE.md))
2. **Add HTML Embed** component in Framer
3. **Paste embed code** from `embed-code.html`
4. **Update the iframe URL** to your deployed URL
5. **Add custom head code** from `head-code.html` to Framer Settings → Custom Code → Head

## 🔧 Configuration

Update these values in the embed code:
- `src`: Your deployed form URL (e.g., `https://your-project.pages.dev`)
- `id`: Keep as `cash-offer-form` for auto-resize to work

## 📱 Responsive Behavior

The form automatically:
- Starts at 180px height (Step 1)
- Expands to ~720px for Step 2
- Adjusts height based on content
- Works on all screen sizes (320px+)

## 🐛 Troubleshooting

If the form doesn't resize:
1. Check that the iframe ID matches in both embed and head code
2. Verify the origin URL in the head code security check
3. Check browser console for errors
4. Ensure Custom Head Code is added in Framer settings

## 📊 Tracking

The form forwards all conversion events to the parent page. Ensure your Google Analytics/GTM is configured in Framer to receive these events.