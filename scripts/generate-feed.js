#!/usr/bin/env node
/**
 * RSS 2.0 feed generator for the BEG blog. Google crawls feeds more often than sitemaps,
 * so this surfaces the freshest posts for faster discovery. Walks src/app/blog for real
 * posts (those carrying a datePublished in their JSON-LD), sorts newest first, keeps the
 * most recent MAX_ITEMS, and writes public/feed.xml.
 * Run: node scripts/generate-feed.js   (run after generate-sitemap.js)
 */
const fs = require('fs');
const path = require('path');

const BLOG = path.join(__dirname, '..', 'src', 'app', 'blog');
const OUT = path.join(__dirname, '..', 'public', 'feed.xml');
const BASE = 'https://www.beghr.com';
const MAX_ITEMS = 50;

function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function firstMatch(src, re) {
  const m = src.match(re);
  return m ? m[1] : '';
}

const items = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('(') || entry.name.startsWith('[') || entry.name.startsWith('_')) continue;
      walk(full);
    } else if (entry.name === 'page.tsx') {
      const src = fs.readFileSync(full, 'utf8');
      const published = firstMatch(src, /"datePublished"\s*:\s*"([^"]+)"/);
      if (!published) continue; // hubs and index pages have no datePublished -> skip
      const canonical = firstMatch(src, /alternates\s*:\s*\{[^}]*canonical\s*:\s*['"]([^'"]+)['"]/);
      const url = canonical || (BASE + full.split('/src/app')[1].replace(/\/page\.tsx$/, ''));
      if (!url.includes('/blog/')) continue;
      const title = firstMatch(src, /title\s*:\s*['"]([^'"]+)['"]/);
      const description = firstMatch(src, /description\s*:\s*['"]([^'"]+)['"]/);
      items.push({ url, title: title || url, description, published });
    }
  }
}
walk(BLOG);

items.sort((a, b) => (a.published < b.published ? 1 : a.published > b.published ? -1 : 0));
const top = items.slice(0, MAX_ITEMS);
const build = new Date().toUTCString();

const body =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n' +
  '  <channel>\n' +
  '    <title>Business Executive Group Blog</title>\n' +
  '    <link>' + BASE + '/blog</link>\n' +
  '    <description>Managed payroll, HR compliance, HCM software, and legal hiring guidance from BEG.</description>\n' +
  '    <language>en-us</language>\n' +
  '    <lastBuildDate>' + build + '</lastBuildDate>\n' +
  '    <atom:link href="' + BASE + '/feed.xml" rel="self" type="application/rss+xml"/>\n' +
  top
    .map(
      (it) =>
        '    <item>\n' +
        '      <title>' + esc(it.title) + '</title>\n' +
        '      <link>' + esc(it.url) + '</link>\n' +
        '      <guid isPermaLink="true">' + esc(it.url) + '</guid>\n' +
        '      <description>' + esc(it.description) + '</description>\n' +
        '      <pubDate>' + new Date(it.published + 'T12:00:00Z').toUTCString() + '</pubDate>\n' +
        '    </item>'
    )
    .join('\n') +
  '\n  </channel>\n</rss>\n';

fs.writeFileSync(OUT, body);
console.log('Wrote ' + OUT + ' with ' + top.length + ' of ' + items.length + ' dated posts (newest ' + (top[0] ? top[0].published : 'n/a') + ').');
