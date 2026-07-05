/**
 * algolia-index-site.mjs
 *
 * Crawls beghr.com's sitemap, extracts page content, and pushes records to
 * Algolia. Run this any time content changes, or on a schedule (see
 * SETUP.md for a Vercel cron example).
 *
 * Why crawl the live sitemap instead of reading source files directly:
 * this keeps the indexer decoupled from however content is authored
 * (MDX, CMS, hardcoded pages) and guarantees the index matches what's
 * actually live, not what's in a draft branch.
 *
 * Install:
 *   npm install algoliasearch cheerio fast-xml-parser
 *
 * Env vars required (see SETUP.md):
 *   ALGOLIA_APP_ID
 *   ALGOLIA_ADMIN_KEY   (write key -- never expose this client-side)
 *   SITE_BASE_URL       (default https://www.beghr.com)
 *
 * Run:
 *   node algolia-index-site.mjs
 */

import { algoliasearch } from "algoliasearch";
import * as cheerio from "cheerio";
import { XMLParser } from "fast-xml-parser";

const APP_ID = process.env.ALGOLIA_APP_ID;
const ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;
const BASE_URL = process.env.SITE_BASE_URL || "https://www.beghr.com";
const INDEX_NAME = "beghr_pages";
const CONCURRENCY = 8;
const MAX_CONTENT_CHARS = 8000;

if (!APP_ID || !ADMIN_KEY) {
  console.error("Missing ALGOLIA_APP_ID or ALGOLIA_ADMIN_KEY. See SETUP.md.");
  process.exit(1);
}

const client = algoliasearch(APP_ID, ADMIN_KEY);

// Vertical facet derived from the URL path. Keep this in sync with
// MASTER-PROMPT.md's priority order (Managed Payroll first, then Job
// Placement, isolved HCM, then Network/DFW, then everything else).
function detectVertical(pathname) {
  if (pathname.startsWith("/services/managed-payroll")) return "Managed Payroll";
  if (pathname.startsWith("/services/job-placement")) return "Job Placement";
  if (pathname.startsWith("/services/hcm-software")) return "HCM Software";
  if (pathname.startsWith("/services/hr-outsourcing")) return "HR Outsourcing";
  if (pathname.startsWith("/services/managed-benefits")) return "Managed Benefits";
  if (pathname.startsWith("/network") || pathname.includes("dfwleadershipconnect")) return "Network";
  if (pathname.startsWith("/partners")) return "Partners";
  if (pathname.startsWith("/blog")) return "Resources";
  return "Company";
}

// Best-effort industry tag, useful as a secondary facet for pages like
// /services/managed-payroll/legal or /services/job-placement/healthcare.
function detectIndustry(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  const last = parts[parts.length - 1];
  const knownSections = new Set(["managed-payroll", "job-placement", "hcm-software", "hr-outsourcing", "managed-benefits"]);
  if (parts.length >= 3 && knownSections.has(parts[1]) && !["pricing", "cost-calculator", "roi-calculator", "ai-connector"].includes(last)) {
    return last;
  }
  return null;
}

async function fetchSitemapUrls() {
  const res = await fetch(`${BASE_URL}/sitemap.xml`);
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`);
  const xml = await res.text();
  const parser = new XMLParser();
  const parsed = parser.parse(xml);

  // Handle both a flat urlset and a sitemap index that points at child
  // sitemaps (common for 3,000+ page sites split by section).
  if (parsed.sitemapindex) {
    const childSitemaps = [].concat(parsed.sitemapindex.sitemap).map((s) => s.loc);
    const all = [];
    for (const childUrl of childSitemaps) {
      const childRes = await fetch(childUrl);
      const childXml = await childRes.text();
      const childParsed = parser.parse(childXml);
      all.push(...[].concat(childParsed.urlset.url).map((u) => u.loc));
    }
    return all;
  }

  return [].concat(parsed.urlset.url).map((u) => u.loc);
}

function extractRecord(url, html) {
  const $ = cheerio.load(html);
  const pathname = new URL(url).pathname;

  const title = $("title").first().text().trim() || $("h1").first().text().trim();
  const metaDescription = $('meta[name="description"]').attr("content") || "";
  const h1 = $("h1").first().text().trim();

  // Grab visible body text, drop nav/footer/script noise so search results
  // aren't dominated by repeated header/footer link text across every page.
  $("script, style, nav, footer, noscript").remove();
  const bodyText = $("main").text().trim() || $("body").text().trim();
  const content = bodyText.replace(/\s+/g, " ").slice(0, MAX_CONTENT_CHARS);

  const vertical = detectVertical(pathname);
  const industry = detectIndustry(pathname);

  return {
    objectID: pathname,
    url,
    path: pathname,
    title,
    h1,
    metaDescription,
    content,
    vertical,
    industry,
  };
}

async function mapWithConcurrency(items, limit, fn) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      try {
        results[idx] = await fn(items[idx]);
      } catch (err) {
        console.warn(`Skipped ${items[idx]}: ${err.message}`);
        results[idx] = null;
      }
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results.filter(Boolean);
}

async function main() {
  console.log(`Fetching sitemap from ${BASE_URL}/sitemap.xml ...`);
  const urls = await fetchSitemapUrls();
  console.log(`Found ${urls.length} URLs. Crawling with concurrency ${CONCURRENCY} ...`);

  const records = await mapWithConcurrency(urls, CONCURRENCY, async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    return extractRecord(url, html);
  });

  console.log(`Extracted ${records.length} records. Pushing to Algolia index "${INDEX_NAME}" ...`);

  await client.saveObjects({ indexName: INDEX_NAME, objects: records });

  await client.setSettings({
    indexName: INDEX_NAME,
    indexSettings: {
      searchableAttributes: ["title", "h1", "metaDescription", "content"],
      attributesForFaceting: ["vertical", "industry"],
      customRanking: ["desc(objectID)"],
    },
  });

  console.log("Done. Index is live.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
