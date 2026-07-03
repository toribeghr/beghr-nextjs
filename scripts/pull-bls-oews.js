#!/usr/bin/env node
/*
 * pull-bls-oews.js — pull REAL BLS OEWS May 2025 metro wages for every job-placement
 * industry and write src/lib/<industry>WageData.ts (mirrors legalWageData.ts).
 *
 * RUN THIS ON A MACHINE WITH INTERNET (your Mac Terminal). The agent sandboxes block
 * api.bls.gov; your Terminal does not.
 *
 *   BLS_API_KEY=your_key node scripts/pull-bls-oews.js          # writes files + prints WAGE_SETS lines
 *   BLS_API_KEY=your_key node scripts/pull-bls-oews.js --wire   # also auto-edits CityTemplate.tsx
 *
 * Then: node scripts/generate-sitemap.js && node scripts/validate-pages.js, commit, push.
 */
const https = require('https');
const fs = require('fs');
const path = require('path');

const KEY = process.env.BLS_API_KEY;
if (!KEY) { console.error('Set BLS_API_KEY (get a free key at data.bls.gov/registrationEngine).'); process.exit(1); }
const WIRE = process.argv.includes('--wire');
const LIB = path.join(__dirname, '..', 'src', 'lib');

// metro slug -> BLS OEWS metropolitan area code (CBSA). Slugs that share an MSA share a code.
const AREA = {
  'new-york': '35620', 'los-angeles': '31080', 'long-beach': '31080', 'chicago': '16980',
  'dallas': '19100', 'fort-worth': '19100', 'arlington': '19100', 'houston': '26420',
  'austin': '12420', 'san-antonio': '41700', 'phoenix': '38060', 'mesa': '38060',
  'philadelphia': '37980', 'san-diego': '41740', 'san-jose': '41940', 'san-francisco': '41860',
  'oakland': '41860', 'jacksonville': '27260', 'columbus': '18140', 'charlotte': '16740',
  'indianapolis': '26900', 'seattle': '42660', 'denver': '19740', 'washington-dc': '47900',
  'boston': '14460', 'nashville': '34980', 'detroit': '19820', 'oklahoma-city': '36420',
  'portland': '38900', 'las-vegas': '29820', 'memphis': '32820', 'louisville': '31140',
  'baltimore': '12580', 'milwaukee': '33340', 'albuquerque': '10740', 'tucson': '46060',
  'fresno': '23420', 'sacramento': '40900', 'kansas-city': '28140', 'atlanta': '12060',
  'omaha': '36540', 'colorado-springs': '17820', 'raleigh': '39580', 'miami': '33100',
  'virginia-beach': '47260', 'minneapolis': '33460', 'tulsa': '46140', 'tampa': '45300',
  'new-orleans': '35380', 'orlando': '36740',
};

// industry slug -> { soc (no dash), role label, base id for var/const names }
const INDUSTRIES = [
  ['finance', '132051', 'financial analysts'],
  ['accounting-cpa', '132011', 'accountants'],
  ['technology', '151252', 'software engineers'],
  ['cybersecurity', '151212', 'security analysts'],
  ['engineering', '172199', 'engineers'],
  ['architecture', '171011', 'architects'],
  ['sales', '112022', 'sales leaders'],
  ['marketing', '112021', 'marketing leaders'],
  ['hr', '113121', 'HR leaders'],
  ['executive', '111011', 'executives'],
  ['manufacturing', '113051', 'plant leaders'],
  ['construction-management', '119021', 'construction managers'],
  ['trades', '471011', 'trade supervisors'],
  ['banking', '113031', 'banking leaders'],
  ['insurance', '132053', 'underwriters'],
  ['supply-chain', '131081', 'supply chain professionals'],
  ['real-estate', '119141', 'real estate managers'],
  ['hospitality', '119081', 'hospitality leaders'],
  ['nonprofit', '119151', 'nonprofit leaders'],
  ['dental', '291021', 'dentists'],
  ['veterinary', '291131', 'veterinarians'],
  ['biotech', '191042', 'life sciences professionals'],
  ['energy', '172171', 'energy professionals'],
  ['government', '131111', 'program professionals'],
];

// OEWS datatype codes -> field
const DT = { '01': 'employment', '04': 'mean', '13': 'median', '11': 'p10', '15': 'p90' };
const pad7 = (c) => ('0000000' + c).slice(-7);
const camel = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
const upper = (s) => s.replace(/-/g, '_').toUpperCase();

function post(seriesids) {
  const body = JSON.stringify({ seriesid: seriesids, registrationkey: KEY });
  return new Promise((resolve, reject) => {
    const req = https.request('https://api.bls.gov/publicAPI/v2/timeseries/data/', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
    }, (res) => { let d = ''; res.on('data', (c) => (d += c)); res.on('end', () => { try { resolve(JSON.parse(d)); } catch (e) { reject(new Error('Bad JSON from BLS: ' + d.slice(0, 200))); } }); });
    req.on('error', reject); req.write(body); req.end();
  });
}
const chunk = (a, n) => { const o = []; for (let i = 0; i < a.length; i += n) o.push(a.slice(i, i + n)); return o; };
const num = (v) => { const n = parseInt(String(v).replace(/[^0-9]/g, ''), 10); return Number.isFinite(n) ? n : null; };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function pullSeries(ids) {
  const out = {};
  for (const grp of chunk(ids, 50)) {
    const r = await post(grp);
    if (r.status !== 'REQUEST_SUCCEEDED') throw new Error('BLS: ' + (r.message || JSON.stringify(r)).toString().slice(0, 300));
    for (const s of (r.Results && r.Results.series) || []) {
      out[s.seriesID] = s.data && s.data.length ? s.data[0].value : null;
    }
    await sleep(300);
  }
  return out;
}

async function buildIndustry([slug, soc, role]) {
  const uniqAreas = Array.from(new Set(Object.values(AREA)));
  const metroIds = [];
  for (const a of uniqAreas) for (const dt of Object.keys(DT)) metroIds.push(`OEUM${pad7(a)}000000${soc}${dt}`);
  const natIds = ['01', '04', '13'].map((dt) => `OEUN0000000000000${soc}${dt}`);
  const vals = await pullSeries([...metroIds, ...natIds]);

  const areaData = {};
  for (const a of uniqAreas) {
    const rec = { employment: null, mean: null, median: null, p10: null, p90: null };
    for (const dt of Object.keys(DT)) rec[DT[dt]] = num(vals[`OEUM${pad7(a)}000000${soc}${dt}`]);
    areaData[a] = rec;
  }
  const nat = {
    employment: num(vals[`OEUN0000000000000${soc}01`]),
    mean: num(vals[`OEUN0000000000000${soc}04`]),
    median: num(vals[`OEUN0000000000000${soc}13`]),
  };

  const rows = Object.keys(AREA).map((mslug) => {
    const r = areaData[AREA[mslug]] || { employment: null, mean: null, median: null, p10: null, p90: null };
    return `  ${JSON.stringify(mslug)}: { employment: ${r.employment}, mean: ${r.mean}, median: ${r.median}, p10: ${r.p10}, p90: ${r.p90} },`;
  }).join('\n');

  const base = camel(slug), U = upper(slug);
  const file = `// Real BLS OEWS May 2025 wage data (SOC ${soc.slice(0, 2)}-${soc.slice(2)}) by metro. Role: ${role}.
// Source: U.S. Bureau of Labor Statistics, OEWS. Auto-generated by scripts/pull-bls-oews.js. Do not hand-edit.
import type { LegalWage } from './legalWageData';
export const ${U}_WAGE_ASOF = "May 2025";
export const ${U}_WAGE_SOURCE = "U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OEWS)";
export const ${U}_NATIONAL = { employment: ${nat.employment}, mean: ${nat.mean}, median: ${nat.median} };
export const ${base}WageByMetro: Record<string, LegalWage> = {
${rows}
};
`;
  fs.writeFileSync(path.join(LIB, `${slug}WageData.ts`), file);
  const filled = Object.values(areaData).filter((r) => r.mean != null).length;
  console.log(`  ${slug}: national mean ${nat.mean}, ${filled}/${uniqAreas.length} metros with wage`);
  return { slug, base, U, role };
}

(async () => {
  console.log('Pulling BLS OEWS May 2025 for', INDUSTRIES.length, 'industries...');
  const built = [];
  for (const ind of INDUSTRIES) {
    try { built.push(await buildIndustry(ind)); }
    catch (e) { console.error(`  ${ind[0]}: FAILED — ${e.message}`); }
  }
  console.log('\n--- Add these to src/components/CityTemplate.tsx ---\nIMPORTS (after the healthcare import):');
  for (const b of built) console.log(`import { ${b.base}WageByMetro, ${b.U}_NATIONAL } from '@/lib/${b.slug}WageData';`);
  console.log('\nWAGE_SETS entries (inside the WAGE_SETS object):');
  for (const b of built) console.log(`    '${b.slug}': { byMetro: ${b.base}WageByMetro, national: ${b.U}_NATIONAL, role: '${b.role}' },`);

  if (WIRE) {
    const ctPath = path.join(__dirname, '..', 'src', 'components', 'CityTemplate.tsx');
    let ct = fs.readFileSync(ctPath, 'utf8');
    const importAnchor = "from '@/lib/healthcareWageData';";
    const imports = built.filter((b) => !ct.includes(`${b.base}WageByMetro`))
      .map((b) => `\nimport { ${b.base}WageByMetro, ${b.U}_NATIONAL } from '@/lib/${b.slug}WageData';`).join('');
    if (imports && ct.includes(importAnchor)) ct = ct.replace(importAnchor, importAnchor + imports);
    const entries = built.filter((b) => !ct.includes(`'${b.slug}':`))
      .map((b) => `\n    '${b.slug}': { byMetro: ${b.base}WageByMetro, national: ${b.U}_NATIONAL, role: '${b.role}' },`).join('');
    const m = ct.match(/WAGE_SETS[^=]*=\s*\{/);
    if (m && entries) ct = ct.replace(m[0], m[0] + entries);
    fs.writeFileSync(ctPath, ct);
    console.log('\n--wire: CityTemplate.tsx updated with imports + WAGE_SETS entries.');
  }
  console.log('\nDone. Next: node scripts/generate-sitemap.js && node scripts/validate-pages.js');
})();
