// IndexNow submitter for beghr.com (Bing + Yandex; Google does not use IndexNow).
// Standalone Node util -- NOT part of the Next build, no dependencies.
//
// Usage:
//   node scripts/indexnow-submit.js https://www.beghr.com/services/managed-payroll/construction [more urls...]
//   node scripts/indexnow-submit.js --sitemap     (submits every URL in public/sitemap.xml -- use sparingly; IndexNow wants new/changed URLs)
//
// The key file public/4f2a8c1e6b9d40f3a7c25e8b1d6f9a30.txt must be live at the site root for this to verify.

const https = require('https');
const fs = require('fs');
const path = require('path');

const KEY = '4f2a8c1e6b9d40f3a7c25e8b1d6f9a30';
const HOST = 'www.beghr.com';
const KEY_LOCATION = 'https://' + HOST + '/' + KEY + '.txt';

function getUrls() {
  const args = process.argv.slice(2);
  if (args[0] === '--sitemap') {
    const xml = fs.readFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), 'utf8');
    return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  }
  return args.filter((u) => u.startsWith('http'));
}

const urlList = getUrls();
if (!urlList.length) {
  console.error('Provide one or more URLs, or --sitemap.');
  process.exit(1);
}

const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList });
const req = https.request(
  'https://api.indexnow.org/indexnow',
  { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body) } },
  (res) => {
    console.log('IndexNow response:', res.statusCode, '(' + urlList.length + ' URL(s) submitted)');
    res.on('data', () => {});
    res.on('end', () => {});
  }
);
req.on('error', (e) => console.error('IndexNow error:', e.message));
req.write(body);
req.end();
