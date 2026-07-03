#!/usr/bin/env node
/**
 * Sitemap generator. Walks src/app for page.tsx routes and writes public/sitemap.xml.
 * Run: node scripts/generate-sitemap.js
 */
const fs = require('fs');
const path = require('path');

const APP = path.join(__dirname, '..', 'src', 'app');
const OUT = path.join(__dirname, '..', 'public', 'sitemap.xml');
const BASE = 'https://www.beghr.com';
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

// ISR data-routes live under dynamic [slug] dirs, which the walker skips. Add their
// generated URLs explicitly so the pages are listed in the sitemap.
const EXTRA_ROUTES = [
  '/services/managed-payroll/alternatives-to-adp',
  '/services/managed-payroll/alternatives-to-gusto',
  '/services/managed-payroll/alternatives-to-paychex',
  '/services/managed-payroll/alternatives-to-deel',
  '/services/managed-payroll/alternatives-to-rippling',
  '/services/managed-payroll/alternatives-to-trinet',
];
for (const r of EXTRA_ROUTES) if (!routes.includes(r)) routes.push(r);

// Job-placement city pages were converted to dynamic [city] ISR routes to cut build
// memory. The walker skips [city], so enumerate every valid industry x metro URL from
// the data so all ~1,300 city pages stay listed for search engines.
try {
  const grid = fs.readFileSync(path.join(__dirname, '..', 'src', 'lib', 'jpGridData.ts'), 'utf8');
  const metroSlugs = Array.from(new Set(
    Array.from(grid.matchAll(/["']?slug["']?\s*:\s*["']([a-z0-9-]+)["']/g)).map(m => m[1])
  ));
  // Industry keys defined in jpIndustries (only these resolve; others 404 via cityExists).
  const indStart = grid.indexOf('jpIndustries');
  const indBlock = indStart >= 0 ? grid.slice(indStart) : '';
  const industryKeys = new Set(
    Array.from(indBlock.matchAll(/\n\s{2}["']([a-z0-9-]+)["']\s*:\s*\{/g)).map(m => m[1])
  );
  const jpBase = path.join(APP, 'services', 'job-placement');
  const cityIndustries = fs.readdirSync(jpBase, { withFileTypes: true })
    .filter(d => d.isDirectory() && fs.existsSync(path.join(jpBase, d.name, '[city]', 'page.tsx')))
    .map(d => d.name);
  const seen = new Set(routes);
  const metroSet = new Set(metroSlugs);
  let deepIndustries = 0, deepUrls = 0;
  for (const ind of cityIndustries) {
    if (!industryKeys.has(ind)) continue;
    // QUALITY GATE: only list city pages that have real wage data (these are the indexable ones).
    // Industries/metros without data are noindexed by CityTemplate, so we must not list them here.
    const wageFile = path.join(__dirname, '..', 'src', 'lib', `${ind}WageData.ts`);
    if (!fs.existsSync(wageFile)) continue;
    const wageText = fs.readFileSync(wageFile, 'utf8');
    const wageSlugs = new Set(
      Array.from(wageText.matchAll(/["']([a-z0-9-]+)["']\s*:\s*\{/g)).map(m => m[1]).filter(s => metroSet.has(s))
    );
    if (wageSlugs.size === 0) continue;
    deepIndustries++;
    for (const slug of wageSlugs) {
      const r = `/services/job-placement/${ind}/${slug}`;
      if (!seen.has(r)) { routes.push(r); seen.add(r); deepUrls++; }
    }
  }
  console.log(`Added INDEXABLE city URLs: ${deepUrls} across ${deepIndustries} industries with wage data (thin/noindexed city pages excluded from sitemap)`);
} catch (e) {
  console.warn('Could not enumerate city ISR URLs:', e.message);
}

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
