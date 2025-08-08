const fs = require('fs');
const path = require('path');
const { minify } = require('html-minifier-terser');
const CleanCSS = require('clean-css');
const UglifyJS = require('uglify-js');

async function optimizeForm() {
  // Read source file
  let html = fs.readFileSync(path.join(__dirname, '../src/form.html'), 'utf8');
  
  // Extract CSS and JS
  const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
  const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/gi;
  
  let allCSS = '';
  let allJS = '';
  
  // Extract and combine CSS
  html = html.replace(styleRegex, (match, css) => {
    allCSS += css;
    return '';
  });
  
  // Extract and combine JS (except Google Maps callback)
  html = html.replace(scriptRegex, (match, js) => {
    if (!match.includes('maps.googleapis.com')) {
      allJS += js;
      return '';
    }
    return match;
  });
  
  // Optimize CSS
  const minifiedCSS = new CleanCSS({
    level: 2,
    inline: ['all']
  }).minify(allCSS).styles;
  
  // Optimize JS
  const minifiedJS = UglifyJS.minify(allJS, {
    compress: {
      drop_console: false,
      dead_code: true,
      unused: true
    },
    mangle: true
  }).code;
  
  // Critical CSS for above-the-fold (Step 1 only)
  const criticalCSS = `
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:'Inter',-apple-system,sans-serif;padding:8px;display:flex;justify-content:center}
    .container{max-width:440px;background:#fff;border-radius:16px;box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);padding:12px}
    .step{display:none}.step.active{display:block}
    input{width:100%;height:48px;padding:0 42px;border:1.5px solid #e5e7eb;border-radius:10px;font-size:15px}
    .btn{width:100%;height:48px;background:#E8743B;color:white;border:none;border-radius:10px;font-size:16px;font-weight:600;cursor:pointer;margin-top:12px}
    #property-location{background-image:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%236b7280" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>');background-repeat:no-repeat;background-size:18px;background-position:14px center;padding-left:40px}
  `.replace(/\s+/g, ' ').trim();
  
  // Inject optimized styles and scripts
  const headEnd = html.indexOf('</head>');
  const bodyEnd = html.indexOf('</body>');
  
  // Insert critical CSS in head
  html = html.slice(0, headEnd) + 
    `<style>${criticalCSS}</style>` +
    html.slice(headEnd);
  
  // Insert deferred CSS
  html = html.slice(0, bodyEnd) +
    `<style>${minifiedCSS}</style>` +
    html.slice(bodyEnd);
  
  // Insert optimized JS with enhanced resize mechanism
  const enhancedJS = `
  <script>
  // Enhanced resize and communication system
  (function() {
    let lastHeight = 0;
    let resizeTimer = null;
    
    function getHeight() {
      const container = document.querySelector('.container');
      if (!container) return 180;
      
      const rect = container.getBoundingClientRect();
      const computed = window.getComputedStyle(container);
      const height = Math.ceil(
        container.scrollHeight +
        parseInt(computed.marginTop) +
        parseInt(computed.marginBottom) +
        20
      );
      
      // Step-specific minimums
      const step = window.formState?.currentStep || 1;
      const minHeights = { 1: 180, 2: 720 };
      
      return Math.max(height, minHeights[step] || 180);
    }
    
    function sendResize() {
      const height = getHeight();
      
      if (Math.abs(height - lastHeight) > 5) {
        lastHeight = height;
        
        if (window.parent !== window) {
          window.parent.postMessage({
            type: 'resize-embed',
            height: height,
            step: window.formState?.currentStep || 1
          }, '*');
        }
      }
    }
    
    // Enhanced tracking forwarding
    window.dataLayer = window.dataLayer || [];
    const originalPush = window.dataLayer.push;
    window.dataLayer.push = function() {
      originalPush.apply(window.dataLayer, arguments);
      if (window.parent !== window) {
        window.parent.postMessage({
          type: 'tracking-event',
          payload: arguments[0]
        }, '*');
      }
    };
    
    // Monitor everything
    sendResize();
    const observer = new MutationObserver(() => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(sendResize, 50);
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });
    
    // Form events
    ['click', 'input', 'focus', 'blur'].forEach(e => {
      document.addEventListener(e, () => setTimeout(sendResize, 100), true);
    });
    
    // Periodic check
    setInterval(sendResize, 1000);
  })();
  ${minifiedJS}
  </script>
  `;
  
  html = html.slice(0, bodyEnd) + enhancedJS + html.slice(bodyEnd);
  
  // Minify final HTML
  const optimizedHTML = await minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    removeOptionalTags: false,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    useShortDoctype: true,
    minifyCSS: true,
    minifyJS: true
  });
  
  // Write optimized file
  fs.writeFileSync(path.join(__dirname, '../dist/index.html'), optimizedHTML);
  
  console.log(' Form optimized successfully!');
  console.log(`Original size: ${html.length} bytes`);
  console.log(`Optimized size: ${optimizedHTML.length} bytes`);
  console.log(`Reduction: ${Math.round((1 - optimizedHTML.length/html.length) * 100)}%`);
}

optimizeForm().catch(console.error);