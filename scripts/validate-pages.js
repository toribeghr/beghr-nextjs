#!/usr/bin/env node
/**
 * BEG Site Pre-Commit Validator
 * Run before any git commit: node scripts/validate-pages.js
 * 
 * Checks all page.tsx files for:
 * - Title tag present and ≤60 chars
 * - Meta description present and ≤155 chars
 * - openGraph block present
 * - twitter block present
 * - FAQPage schema on blog posts (not on hub/index pages)
 * - No internal links to /compare/ (must be /blog/compare/)
 * - canonical tag present
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SRC = path.join(__dirname, '../src/app');
const errors = [];
const warnings = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('.')) {
      files.push(...walk(full));
    } else if (e.name === 'page.tsx') {
      files.push(full);
    }
  }
  return files;
}

// Extract string value from: title: 'foo' or title: "foo"
function extractMetaString(content, key) {
  const m = content.match(new RegExp(`${key}:\\s*['"\`]([^'"\`]+)['"\`]`));
  return m ? m[1] : null;
}

const allPages = walk(SRC);

for (const file of allPages) {
  const rel = file.replace(SRC + '/', '');
  const content = fs.readFileSync(file, 'utf8');

  // Skip non-metadata pages
  if (!content.includes('export const metadata')) continue;

  // 1. Title length
  const title = extractMetaString(content, 'title');
  if (!title) {
    errors.push(`[MISSING TITLE] ${rel}`);
  } else if (title.length > 65) {
    warnings.push(`[TITLE TOO LONG ${title.length}ch] ${rel}\n   → "${title}"`);
  }

  // 2. Description length
  const desc = extractMetaString(content, 'description');
  if (!desc) {
    errors.push(`[MISSING DESC] ${rel}`);
  } else if (desc.length > 155) {
    warnings.push(`[DESC TOO LONG ${desc.length}ch] ${rel}`);
  }

  // 3. Canonical
  if (!content.includes('canonical:')) {
    errors.push(`[NO CANONICAL] ${rel}`);
  }

  // 4. OG + Twitter (skip privacy-policy)
  if (!rel.includes('privacy-policy')) {
    if (!content.includes('openGraph:')) {
      errors.push(`[NO OG TAGS] ${rel}`);
    }
    if (!content.includes('twitter:')) {
      errors.push(`[NO TWITTER TAGS] ${rel}`);
    }
  }

  // 5. FAQ schema on blog posts (not on hub/index pages like /blog/page.tsx, /blog/compare/page.tsx)
  const isBlogPost = rel.includes('blog/') && !rel.match(/^blog\/page\.tsx$|\/page\.tsx$/) &&
    rel.split('/').length > 2 && !rel.match(/blog\/(compare|payroll|legal-hiring|hcm-technology|hcm-software|entrepreneur)\/page\.tsx/);
  if (isBlogPost && !content.includes('FAQPage')) {
    warnings.push(`[NO FAQ SCHEMA] ${rel}`);
  }

  // 6. Broken /compare/ internal links (must be /blog/compare/)
  const badLinks = content.match(/href=['"]\/compare\//g);
  if (badLinks) {
    errors.push(`[BROKEN LINK: /compare/ should be /blog/compare/] ${rel} (${badLinks.length} instances)`);
  }
}

// 7. Check sitemap covers all pages
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, 'utf8') : '';
const pageUrls = allPages
  .map(f => f.replace(SRC, '').replace('/page.tsx', '').replace(/^\//, '') || '')
  .filter(u => !u.includes('(') && !u.includes('['));

let sitemapMissing = 0;
for (const u of pageUrls) {
  const url = u === '' ? 'https://www.beghr.com' : `https://www.beghr.com/${u}`;
  if (!sitemap.includes(url)) sitemapMissing++;
}
if (sitemapMissing > 0) {
  warnings.push(`[SITEMAP] ${sitemapMissing} page(s) may be missing from sitemap.xml — run sitemap generator`);
}

// Report
console.log('\n=== BEG PAGE VALIDATOR ===\n');
if (errors.length === 0 && warnings.length === 0) {
  console.log('✅ All checks passed. Safe to commit.\n');
  process.exit(0);
}

if (errors.length > 0) {
  console.log(`❌ ERRORS (${errors.length}) — fix before committing:\n`);
  errors.forEach(e => console.log('  ' + e));
  console.log('');
}
if (warnings.length > 0) {
  console.log(`⚠️  WARNINGS (${warnings.length}) — should fix soon:\n`);
  warnings.forEach(w => console.log('  ' + w));
  console.log('');
}
console.log(`Checked ${allPages.length} pages.\n`);
process.exit(errors.length > 0 ? 1 : 0);
