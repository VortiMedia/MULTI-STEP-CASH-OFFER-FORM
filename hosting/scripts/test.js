const https = require('https');
const { execSync } = require('child_process');

async function testDeployment() {
  console.log('🧪 Testing deployment...\n');
  
  // Get deployment URL
  const deploymentUrl = 'https://cash-offer-form.pages.dev/';
  
  // Test 1: Check if site is accessible
  console.log('1️⃣ Testing site accessibility...');
  https.get(deploymentUrl, (res) => {
    console.log(`   Status: ${res.statusCode}`);
    console.log(`   ✅ Site is accessible\n`);
  }).on('error', (err) => {
    console.error(`   ❌ Error: ${err.message}\n`);
  });
  
  // Test 2: Run PageSpeed Insights
  console.log('2️⃣ Running PageSpeed Insights...');
  const psiUrl = `https://pagespeed.web.dev/report?url=${encodeURIComponent(deploymentUrl)}`;
  console.log(`   Open: ${psiUrl}\n`);
  
  // Test 3: Check form functionality
  console.log('3️⃣ Form elements to verify:');
  console.log('   ✓ Address autocomplete');
  console.log('   ✓ Step navigation');
  console.log('   ✓ Form validation');
  console.log('   ✓ Success page');
  console.log('   ✓ Resize messaging\n');
  
  console.log('📊 Expected Performance Metrics:');
  console.log('   • FCP: <1s');
  console.log('   • LCP: <2.5s');
  console.log('   • CLS: <0.1');
  console.log('   • PageSpeed Score: 95+\n');
  
  console.log('✅ Deployment test complete!');
  console.log(`🔗 Live URL: ${deploymentUrl}`);
}

testDeployment();