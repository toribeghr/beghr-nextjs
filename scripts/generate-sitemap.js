#!/usr/bin/env node
/**
 * Sitemap generator. Walks src/app for page.tsx routes and writes public/sitemap.xml.
 * Run: node scripts/generate-sitemap.js
 */
const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, '..', 'src', 'app');
const OUT = path.join(__dirname, '..', 'public', 'sitemap.xml');
const BASE = 'https://beghr.com';
const today = new Date().toISOString().slice(0, 10);

const routes = [];
function walk(dir, rel) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      // skip route groups (parentheses), dynamic routes, and private folders
      if (entry.name.startsWith('(') || entry.name.startsWith('[') || entry.name.startsWith('_')) continue;
      walk(path.join(dir, entry.name), rel + '/' + entry.name);
    } else if (entry.name === 'page.tsx') {
      routes.push(rel === '' ? '/' : rel);
    }
  }
}
walk(APP, '');

function priority(route) {
  if (route === '/') return '1.0';
  const segs = route.split('/').filter(Boolean);
  if (route === '/services/job-placement' || route === '/services/managed-payroll' || route === '/services/hcm-software') return '0.9';
  // industry hub: /services/<silo>/<industry>
  if (segs[0] === 'services' && segs.length === 3) return '0.7';
  // city/role leaf: /services/<silo>/<industry>/<leaf>
  if (segs[0] === 'services' && segs.length === 4) return '0.5';
  if (segs[0] === 'blog') return '0.6';
  if (segs[0] === 'resources' || segs[0] === 'case-studies') return '0.6';
  return '0.6';
}
function changefreq(route) {
  if (route === '/') return 'weekly';
  if (route.startsWith('/blog')) return 'weekly';
  return 'monthly';
}

routes.sort();
const urls = routes.map(r =>
  `  <url><loc>${BASE}${r === '/' ? '/' : r}</loc><lastmod>${today}</lastmod><changefreq>${changefreq(r)}</changefreq><priority>${priority(r)}</priority></url>`
).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
fs.writeFileSync(OUT, xml, 'utf8');
console.log('Wrote ' + routes.length + ' URLs to public/sitemap.xml');
