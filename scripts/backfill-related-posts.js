#!/usr/bin/env node
/**
 * Backfill RelatedPosts into blog posts that lack it (anti-orphan internal linking).
 * For each post: pick 3 sibling posts (same folder first, then same section, then global),
 * inject `import RelatedPosts` at the top and a <RelatedPosts posts={...} /> block right
 * before the closing </article>.
 *
 * Usage:
 *   node scripts/backfill-related-posts.js --dir=accounting-hiring   # pilot one category
 *   node scripts/backfill-related-posts.js --all                     # everything
 *   (add --dry to preview counts without writing)
 */
const fs = require('fs');
const path = require('path');

const BLOG = path.join(__dirname, '../src/app/blog');
const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const ALL = args.includes('--all');
const only = (args.find(a => a.startsWith('--dir=')) || '').split('=')[1] || null;

function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory() && !e.name.startsWith('_') && !e.name.startsWith('.')) out.push(...walk(full));
    else if (e.name === 'page.tsx') out.push(full);
  }
  return out;
}
function meta(content, key) {
  const m = content.match(new RegExp(`${key}:\\s*['"\`]([^'"\`]+)['"\`]`));
  return m ? m[1] : null;
}
function clean(s, n) {
  if (!s) return '';
  s = s.replace(/[–—]/g, '-').replace(/\s+/g, ' ').trim(); // strip em/en dashes
  if (s.length > n) s = s.slice(0, n).replace(/\s+\S*$/, '') + '...';
  return s;
}
function humanize(seg) {
  return seg.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Index every real post (depth: blog/<...>/<slug>/page.tsx, i.e. not a section index page.tsx)
const allFiles = walk(BLOG);
const posts = allFiles.map(f => {
  const rel = f.replace(BLOG + path.sep, '').replace(/\/page\.tsx$/, ''); // e.g. accounting-hiring/controller-hiring
  const segs = rel.split(path.sep);
  const c = fs.readFileSync(f, 'utf8');
  return {
    file: f,
    rel,
    segs,
    isPost: segs.length >= 2, // has a category + slug (not the /blog/<section> index)
    parent: path.dirname(f),
    grandparent: path.dirname(path.dirname(f)),
    title: meta(c, 'title') || humanize(segs[segs.length - 1]),
    desc: meta(c, 'description') || '',
    href: '/blog/' + segs.join('/'),
    category: humanize(segs[0]),
    content: c,
  };
});
const byPath = new Map(posts.map(p => [p.file, p]));

function siblingsFor(p) {
  const pool = posts.filter(q => q.isPost && q.file !== p.file);
  const same = pool.filter(q => q.parent === p.parent);
  const near = pool.filter(q => q.grandparent === p.grandparent && q.parent !== p.parent);
  const picked = [];
  for (const list of [same, near, pool]) {
    for (const q of list) { if (picked.length >= 3) break; if (!picked.includes(q)) picked.push(q); }
    if (picked.length >= 3) break;
  }
  return picked.slice(0, 3);
}

let modified = 0, skipped = 0, noArticle = 0;
const targets = posts.filter(p => p.isPost && (ALL || (only && p.segs[0] === only)));
if (!ALL && !only) { console.error('Pass --dir=<category> or --all'); process.exit(1); }

for (const p of targets) {
  let c = p.content;
  if (c.includes('RelatedPosts')) { skipped++; continue; }
  const idx = c.lastIndexOf('</article>');
  if (idx === -1) { noArticle++; continue; }

  const sibs = siblingsFor(p);
  if (sibs.length === 0) { noArticle++; continue; }
  const items = sibs.map(s => {
    const t = s.title.replace(/\s*\|\s*(BEG|Business Executive Group).*$/i, '').trim();
    return `        { category: ${JSON.stringify(s.category)}, title: ${JSON.stringify(clean(t, 70))}, excerpt: ${JSON.stringify(clean(s.desc, 100))}, href: ${JSON.stringify(s.href)} },`;
  }).join('\n');
  const block = `      <RelatedPosts posts={[\n${items}\n      ]} />\n      `;

  // inject import at very top (safe: imports may appear in any order)
  if (!/^import RelatedPosts /m.test(c)) {
    c = `import RelatedPosts from '@/components/RelatedPosts';\n` + c;
  }
  // recompute index after prepend, inject before the (last) </article>
  const at = c.lastIndexOf('</article>');
  c = c.slice(0, at) + block + c.slice(at);

  if (!DRY) fs.writeFileSync(p.file, c);
  modified++;
}
console.log(`${DRY ? '[DRY] ' : ''}targets=${targets.length} modified=${modified} skipped(existing)=${skipped} noArticle/noSiblings=${noArticle}`);
