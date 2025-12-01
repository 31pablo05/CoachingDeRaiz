#!/usr/bin/env node

/**
 * Bundle Analysis Script
 * 
 * Analyzes the Vite build output and provides recommendations
 * for reducing critical path latency.
 */

import fs from 'fs';
import path from 'path';

const DIST_DIR = './dist';
const ASSETS_DIR = path.join(DIST_DIR, 'assets');

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeBundle() {
  console.log('🔍 Analyzing bundle...\n');
  
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error('❌ Dist folder not found. Run "npm run build" first.');
    return;
  }
  
  const files = fs.readdirSync(ASSETS_DIR);
  const analysis = {
    js: [],
    css: [],
    total: { js: 0, css: 0 }
  };
  
  files.forEach(file => {
    const filePath = path.join(ASSETS_DIR, file);
    const stats = fs.statSync(filePath);
    const size = stats.size;
    
    if (file.endsWith('.js')) {
      analysis.js.push({ name: file, size, sizeFormatted: formatBytes(size) });
      analysis.total.js += size;
    } else if (file.endsWith('.css')) {
      analysis.css.push({ name: file, size, sizeFormatted: formatBytes(size) });
      analysis.total.css += size;
    }
  });
  
  // Sort by size descending
  analysis.js.sort((a, b) => b.size - a.size);
  analysis.css.sort((a, b) => b.size - a.size);
  
  console.log('📦 JavaScript Bundles:');
  analysis.js.forEach((file, index) => {
    const status = file.size > 50000 ? '⚠️ ' : '✅ ';
    const priority = index === 0 ? '(CRITICAL PATH)' : '';
    console.log(`  ${status}${file.name} - ${file.sizeFormatted} ${priority}`);
  });
  
  console.log(`\n📄 CSS Bundles:`);
  analysis.css.forEach((file, index) => {
    const status = file.size > 20000 ? '⚠️ ' : '✅ ';
    const priority = index === 0 ? '(CRITICAL PATH)' : '';
    console.log(`  ${status}${file.name} - ${file.sizeFormatted} ${priority}`);
  });
  
  console.log(`\n📊 Total Sizes:`);
  console.log(`  JavaScript: ${formatBytes(analysis.total.js)}`);
  console.log(`  CSS: ${formatBytes(analysis.total.css)}`);
  console.log(`  Combined: ${formatBytes(analysis.total.js + analysis.total.css)}`);
  
  // Recommendations
  console.log(`\n💡 Recommendations:`);
  
  const criticalJS = analysis.js[0];
  if (criticalJS && criticalJS.size > 50000) {
    console.log(`  ⚠️  Critical JS bundle is ${criticalJS.sizeFormatted} (>50KB)`);
    console.log(`     Consider more aggressive code splitting`);
  } else {
    console.log(`  ✅ Critical JS bundle size is optimal`);
  }
  
  const criticalCSS = analysis.css[0];
  if (criticalCSS && criticalCSS.size > 20000) {
    console.log(`  ⚠️  Critical CSS bundle is ${criticalCSS.sizeFormatted} (>20KB)`);
    console.log(`     Consider inlining more critical CSS`);
  } else {
    console.log(`  ✅ Critical CSS bundle size is optimal`);
  }
  
  const totalInitial = (criticalJS?.size || 0) + (criticalCSS?.size || 0);
  if (totalInitial > 70000) {
    console.log(`  ⚠️  Total initial download is ${formatBytes(totalInitial)} (>70KB)`);
    console.log(`     This may impact Core Web Vitals`);
  } else {
    console.log(`  ✅ Total initial download is ${formatBytes(totalInitial)} - Good!`);
  }
  
  // Performance estimates
  console.log(`\n🚀 Performance Estimates:`);
  console.log(`  3G (slow): ${Math.ceil(totalInitial / 1000)} seconds to download critical resources`);
  console.log(`  4G (fast): ${Math.ceil(totalInitial / 5000)} seconds to download critical resources`);
  console.log(`  WiFi: ${Math.ceil(totalInitial / 20000)} seconds to download critical resources`);
  
  console.log(`\n🎯 PageSpeed Insights Impact:`);
  if (totalInitial < 50000) {
    console.log(`  ✅ Network tree depth should be minimal`);
  } else if (totalInitial < 100000) {
    console.log(`  ⚠️  May see moderate network tree depth warnings`);
  } else {
    console.log(`  ❌ Likely to see significant network tree depth issues`);
  }
}

// Run analysis
try {
  analyzeBundle();
} catch (error) {
  console.error('❌ Error analyzing bundle:', error.message);
  process.exit(1);
}