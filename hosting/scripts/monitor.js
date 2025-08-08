#!/usr/bin/env node

const https = require('https');

function checkStatus() {
  const url = 'https://cash-offer-form.pages.dev/';
  
  https.get(url, (res) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Status: ${res.statusCode} - Site is ${res.statusCode === 200 ? '✅ UP' : '❌ DOWN'}`);
  }).on('error', (err) => {
    console.error(`[${new Date().toISOString()}] ❌ Error: ${err.message}`);
  });
}

// Check every 5 minutes
checkStatus();
setInterval(checkStatus, 5 * 60 * 1000);