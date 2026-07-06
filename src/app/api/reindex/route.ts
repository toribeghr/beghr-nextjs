import { NextResponse } from 'next/server';
import { algoliasearch } from 'algoliasearch';
import * as cheerio from 'cheerio';
import { XMLParser } from 'fast-xml-parser';

// Nightly Algolia reindex, triggered by Vercel Cron (see vercel.json: "0 8 * * *").
// This is the automated replacement for running algolia-index-site.mjs by hand after
// every production merge (locked rule: house-rules/skills/content-page-builder.md, step 10).
// Same crawl-the-live-sitemap logic as the standalone script, ported into a route handler
// so Vercel Cron can call it directly with no separate worker/infrastructure.
//
// Required env vars (Vercel project settings, Production only, never client-exposed):
//   ALGOLIA_APP_ID
//   ALGOLIA_ADMIN_KEY
//   CRON_SECRET        (Vercel Cron sends this as a Bearer token automatically once set)
//   SITE_BASE_URL      (optional, defaults to https://www.beghr.com)

export const maxDuration = 300; // this crawl runs long on a ~3,000 page sitemap; Vercel Pro allows up to 300s for cron-triggered routes

const INDEX_NAME = 'beghr_pages';
const CONCURRENCY = 8;
const MAX_CONTENT_CHARS = 8000;

function detectVertical(pathname: string) {
  if (pathname.startsWith('/services/managed-payroll')) return 'Managed Payroll';
  if (pathname.startsWith('/services/job-placement')) return 'Job Placement';
  if (pathname.startsWith('/services/hcm-software')) return 'HCM Software';
  if (pathname.startsWith('/services/hr-outsourcing')) return 'HR Outsourcing';
  if (pathname.startsWith('/services/managed-benefits')) return 'Managed Benefits';
  if (pathname.startsWith('/network') || pathname.includes('dfwleadershipconnect')) return 'Network';
  if (pathname.startsWith('/partners')) return 'Partners';
  if (pathname.startsWith('/blog')) return 'Resources';
  return 'Company';
}

function detectIndustry(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  const last = parts[parts.length - 1];
  const knownSections = new Set(['managed-payroll', 'job-placement', 'hcm-software', 'hr-outsourcing', 'managed-benefits']);
  if (parts.length >= 3 && knownSections.has(parts[1]) && !['pricing', 'cost-calculator', 'roi-calculator', 'ai-connector'].includes(last)) {
    return last;
  }
  return null;
}

async function fetchSitemapUrls(baseUrl: string): Promise<string[]> {
  const res = await fetch(`${baseUrl}/sitemap.xml`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`);
  const xml = await res.text();
  const parser = new XMLParser();
  const parsed = parser.parse(xml);

  if (parsed.sitemapindex) {
    const childSitemaps: string[] = [].concat(parsed.sitemapindex.sitemap).map((s: { loc: string }) => s.loc);
    const all: string[] = [];
    for (const childUrl of childSitemaps) {
      const childRes = await fetch(childUrl, { cache: 'no-store' });
      const childXml = await childRes.text();
      const childParsed = parser.parse(childXml);
      all.push(...[].concat(childParsed.urlset.url).map((u: { loc: string }) => u.loc));
    }
    return all;
  }

  return [].concat(parsed.urlset.url).map((u: { loc: string }) => u.loc);
}

function extractRecord(url: string, html: string) {
  const $ = cheerio.load(html);
  const pathname = new URL(url).pathname;

  const title = $('title').first().text().trim() || $('h1').first().text().trim();
  const metaDescription = $('meta[name="description"]').attr('content') || '';
  const h1 = $('h1').first().text().trim();

  $('script, style, nav, footer, noscript').remove();
  const bodyText = $('main').text().trim() || $('body').text().trim();
  const content = bodyText.replace(/\s+/g, ' ').slice(0, MAX_CONTENT_CHARS);

  return {
    objectID: pathname,
    url,
    path: pathname,
    title,
    h1,
    metaDescription,
    content,
    vertical: detectVertical(pathname),
    industry: detectIndustry(pathname),
  };
}

async function mapWithConcurrency<T, R>(items: T[], limit: number, fn: (item: T) => Promise<R>): Promise<R[]> {
  const results: (R | null)[] = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      try {
        results[idx] = await fn(items[idx]);
      } catch (err) {
        console.warn(`Skipped ${items[idx]}: ${(err as Error).message}`);
        results[idx] = null;
      }
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results.filter((r): r is R => r !== null);
}

export async function GET(req: Request) {
  // Vercel Cron authenticates with this header automatically once CRON_SECRET is set in
  // project env vars. Manual triggers (e.g. Anthony testing via curl) must pass the same
  // bearer token. Reject everything else so this route can't be used to burn Algolia quota.
  const authHeader = req.headers.get('authorization');
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ success: false, error: 'unauthorized' }, { status: 401 });
  }

  const APP_ID = process.env.ALGOLIA_APP_ID;
  const ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;
  const BASE_URL = process.env.SITE_BASE_URL || 'https://www.beghr.com';

  if (!APP_ID || !ADMIN_KEY) {
    return NextResponse.json({ success: false, error: 'Missing ALGOLIA_APP_ID or ALGOLIA_ADMIN_KEY' }, { status: 500 });
  }

  try {
    const client = algoliasearch(APP_ID, ADMIN_KEY);
    const urls = await fetchSitemapUrls(BASE_URL);

    const records = await mapWithConcurrency(urls, CONCURRENCY, async (url) => {
      const res = await fetch(url, { cache: 'no-store' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      return extractRecord(url, html);
    });

    await client.saveObjects({ indexName: INDEX_NAME, objects: records });
    await client.setSettings({
      indexName: INDEX_NAME,
      indexSettings: {
        searchableAttributes: ['title', 'h1', 'metaDescription', 'content'],
        attributesForFaceting: ['vertical', 'industry'],
        customRanking: ['desc(objectID)'],
      },
    });

    return NextResponse.json({ success: true, urlsFound: urls.length, recordsIndexed: records.length });
  } catch (err) {
    console.error('Algolia reindex failed:', err);
    return NextResponse.json({ success: false, error: (err as Error).message }, { status: 500 });
  }
}
