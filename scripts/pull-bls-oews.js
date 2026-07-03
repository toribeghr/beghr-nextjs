#!/usr/bin/env node
// Self-contained BLS OEWS May 2025 metro-wage generator for the 24 job-placement
// industries in CITY_DEPTH_PROCESS.md. This is the SAME method that produced
// src/lib/legalWageData.ts (SOC 23-1011) and healthcareWageData.ts (SOC 29-1141):
// it hits the BLS public API v2 and emits one src/lib/<industry>WageData.ts per
// industry, mirroring legalWageData.ts exactly.
//
// USAGE (run where api.bls.gov is reachable):
//   BLS_API_KEY=xxxxxxxx node scripts/pull-bls-oews.js          # validate + write all + print WAGE_SETS lines
//   node scripts/pull-bls-oews.js --key xxxxxxxx                # key via flag instead of env
//   node scripts/pull-bls-oews.js --only finance,technology     # subset of industries
//   node scripts/pull-bls-oews.js --dry-run                     # validate only, write nothing
//   node scripts/pull-bls-oews.js --wire                        # also auto-insert the lines into CityTemplate.tsx
//   node scripts/pull-bls-oews.js --force                       # write even if self-validation fails (NOT recommended)
//
// SELF-VALIDATION: before writing anything, it re-pulls SOC 23-1011 across the same
// metros and refuses to proceed unless it reproduces legalWageData.ts. This proves the
// metro-slug -> OEWS area-code mapping below is the exact one behind legalWageData.ts,
// so a wrong area code fails loudly instead of silently emitting bad numbers.
//
// DATA INTEGRITY: metros BLS does not report are written as null. Nothing is fabricated.

const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT = path.resolve(__dirname, "..");
const LIB = path.join(ROOT, "src", "lib");
const TEMPLATE = path.join(ROOT, "src", "components", "CityTemplate.tsx");
const ASOF = "May 2025";
const SOURCE = "U.S. Bureau of Labor Statistics, Occupational Employment and Wage Statistics (OEWS)";

// -----------------------------------------------------------------------------
// metro slug -> OEWS metro area code (7 digits). This is the exact mapping behind
// legalWageData.ts / healthcareWageData.ts: the same ~50 slugs. For most MSAs the
// code is the 5-digit CBSA zero-padded to 7. New England metros use NECTA codes; a
// few large metros use metropolitan-division codes. Duplicate slugs intentionally
// share their parent metro's code, matching the identical rows in legalWageData.ts:
//   fort-worth + arlington -> Dallas (19100); long-beach -> LA (31080);
//   oakland -> San Francisco (41860); mesa -> Phoenix (38060).
const METRO_AREA = {
  "new-york": "0035620",
  "los-angeles": "0031080",
  "chicago": "0016980",
  "dallas": "0019100",
  "fort-worth": "0019100",
  "houston": "0026420",
  "austin": "0012420",
  "san-antonio": "0041700",
  "phoenix": "0038060",
  "philadelphia": "0037980",
  "san-diego": "0041740",
  "san-jose": "0041940",
  "san-francisco": "0041860",
  "jacksonville": "0027260",
  "columbus": "0018140",
  "charlotte": "0016740",
  "indianapolis": "0026900",
  "seattle": "0042660",
  "denver": "0019740",
  "washington-dc": "0047900",
  "boston": "0014460",
  "nashville": "0034980",
  "detroit": "0019820",
  "oklahoma-city": "0036420",
  "portland": "0038900",
  "las-vegas": "0029820",
  "memphis": "0032820",
  "louisville": "0031140",
  "baltimore": "0012580",
  "milwaukee": "0033340",
  "albuquerque": "0010740",
  "tucson": "0046060",
  "fresno": "0023420",
  "sacramento": "0040900",
  "kansas-city": "0028140",
  "mesa": "0038060",
  "atlanta": "0012060",
  "omaha": "0036540",
  "colorado-springs": "0017820",
  "raleigh": "0039580",
  "miami": "0033100",
  "long-beach": "0031080",
  "virginia-beach": "0047260",
  "oakland": "0041860",
  "minneapolis": "0033460",
  "tulsa": "0046140",
  "tampa": "0045300",
  "arlington": "0019100",
  "new-orleans": "0035380",
  "orlando": "0036740",
};

// The 24 industries, in the order given in CITY_DEPTH_PROCESS.md. Each maps to the
// SOC code for the industry's core hire, a camelCase var prefix, an UPPER_SNAKE
// constant prefix, and the plural role label used in the WAGE_SETS registry.
const INDUSTRIES = [
  { slug: "finance", soc: "13-2051", varPrefix: "finance", constPrefix: "FINANCE", role: "financial analysts" },
  { slug: "accounting-cpa", soc: "13-2011", varPrefix: "accountingCpa", constPrefix: "ACCOUNTING_CPA", role: "accountants and auditors" },
  { slug: "technology", soc: "15-1252", varPrefix: "technology", constPrefix: "TECHNOLOGY", role: "software developers" },
  { slug: "cybersecurity", soc: "15-1212", varPrefix: "cybersecurity", constPrefix: "CYBERSECURITY", role: "information security analysts" },
  { slug: "engineering", soc: "17-2199", varPrefix: "engineering", constPrefix: "ENGINEERING", role: "engineers" },
  { slug: "architecture", soc: "17-1011", varPrefix: "architecture", constPrefix: "ARCHITECTURE", role: "architects" },
  { slug: "sales", soc: "11-2022", varPrefix: "sales", constPrefix: "SALES", role: "sales managers" },
  { slug: "marketing", soc: "11-2021", varPrefix: "marketing", constPrefix: "MARKETING", role: "marketing managers" },
  { slug: "hr", soc: "11-3121", varPrefix: "hr", constPrefix: "HR", role: "human resources managers" },
  { slug: "executive", soc: "11-1011", varPrefix: "executive", constPrefix: "EXECUTIVE", role: "chief executives" },
  { slug: "manufacturing", soc: "11-3051", varPrefix: "manufacturing", constPrefix: "MANUFACTURING", role: "industrial production managers" },
  { slug: "construction-management", soc: "11-9021", varPrefix: "constructionManagement", constPrefix: "CONSTRUCTION_MANAGEMENT", role: "construction managers" },
  { slug: "trades", soc: "47-1011", varPrefix: "trades", constPrefix: "TRADES", role: "construction trades supervisors" },
  { slug: "banking", soc: "11-3031", varPrefix: "banking", constPrefix: "BANKING", role: "financial managers" },
  { slug: "insurance", soc: "13-2053", varPrefix: "insurance", constPrefix: "INSURANCE", role: "insurance underwriters" },
  { slug: "supply-chain", soc: "13-1081", varPrefix: "supplyChain", constPrefix: "SUPPLY_CHAIN", role: "logisticians" },
  { slug: "real-estate", soc: "11-9141", varPrefix: "realEstate", constPrefix: "REAL_ESTATE", role: "property and real estate managers" },
  { slug: "hospitality", soc: "11-9081", varPrefix: "hospitality", constPrefix: "HOSPITALITY", role: "lodging managers" },
  { slug: "nonprofit", soc: "11-9151", varPrefix: "nonprofit", constPrefix: "NONPROFIT", role: "social and community service managers" },
  { slug: "dental", soc: "29-1021", varPrefix: "dental", constPrefix: "DENTAL", role: "dentists" },
  { slug: "veterinary", soc: "29-1131", varPrefix: "veterinary", constPrefix: "VETERINARY", role: "veterinarians" },
  { slug: "biotech", soc: "19-1042", varPrefix: "biotech", constPrefix: "BIOTECH", role: "medical scientists" },
  { slug: "energy", soc: "17-2171", varPrefix: "energy", constPrefix: "ENERGY", role: "petroleum engineers" },
  { slug: "government", soc: "13-1111", varPrefix: "government", constPrefix: "GOVERNMENT", role: "management analysts" },
];

// SOC used to self-validate the pull against legalWageData.ts before writing anything.
const VALIDATION_SOC = "23-1011";

// OEWS annual datatype codes: 01 employment, 04 annual mean, 13 annual median,
// 11 annual 10th pct, 15 annual 90th pct.
const DATATYPES = { employment: "01", mean: "04", median: "13", p10: "11", p90: "15" };

// -----------------------------------------------------------------------------
const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : undefined; };
const API_KEY = opt("--key") || process.env.BLS_API_KEY || process.env.BLS_REGISTRATION_KEY;
const DRY_RUN = flag("--dry-run");
const FORCE = flag("--force");
const WIRE = flag("--wire");
const ONLY = (opt("--only") || "").split(",").map((s) => s.trim()).filter(Boolean);

if (!API_KEY) {
  console.error("ERROR: no BLS API key. Pass --key <key> or set BLS_API_KEY.");
  process.exit(1);
}

// --- BLS API v2 client -------------------------------------------------------
function post(body) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify(body);
    const req = https.request(
      "https://api.bls.gov/publicAPI/v2/timeseries/data/",
      { method: "POST", headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(payload) } },
      (res) => {
        let data = "";
        res.on("data", (c) => (data += c));
        res.on("end", () => {
          try { resolve(JSON.parse(data)); }
          catch (e) { reject(new Error(`Bad JSON from BLS (HTTP ${res.statusCode}): ${data.slice(0, 300)}`)); }
        });
      }
    );
    req.on("error", reject);
    req.write(payload);
    req.end();
  });
}

const socDigits = (soc) => soc.replace("-", ""); // "23-1011" -> "231011"

// OEWS series id: OEU + areatype(N national|M metro) + area(7) + industry(000000) + occ(6) + datatype(2).
function seriesId(soc, area, dt) {
  const type = area === "0000000" ? "N" : "M";
  return `OEU${type}${area}000000${socDigits(soc)}${dt}`;
}

// Pull one SOC across national + all metros. Returns { national, byMetro }.
async function pullSoc(soc) {
  const distinctAreas = Array.from(new Set(["0000000", ...Object.values(METRO_AREA)]));
  const wanted = [];
  for (const area of distinctAreas) for (const dt of Object.values(DATATYPES)) wanted.push(seriesId(soc, area, dt));

  const values = {}; // id -> number|null
  for (let i = 0; i < wanted.length; i += 50) { // BLS v2 allows 50 series/request
    const batch = wanted.slice(i, i + 50);
    const resp = await post({ seriesid: batch, startyear: "2025", endyear: "2025", registrationkey: API_KEY });
    if (resp.status !== "REQUEST_SUCCEEDED") throw new Error(`BLS: ${resp.status} ${JSON.stringify(resp.message || [])}`);
    for (const s of resp.Results.series) {
      const latest = (s.data || [])[0];
      const raw = latest ? String(latest.value).replace(/,/g, "") : undefined;
      values[s.seriesID] = raw != null && /^-?\d+(\.\d+)?$/.test(raw) ? Number(raw) : null;
    }
  }

  const rowFor = (area) => {
    const row = {};
    for (const [key, dt] of Object.entries(DATATYPES)) row[key] = values[seriesId(soc, area, dt)] ?? null;
    return row;
  };
  const national = rowFor("0000000");
  const byMetro = {};
  for (const slug of Object.keys(METRO_AREA)) byMetro[slug] = rowFor(METRO_AREA[slug]);
  return { national, byMetro };
}

// --- self-validation against legalWageData.ts --------------------------------
function parseLegal() {
  const src = fs.readFileSync(path.join(LIB, "legalWageData.ts"), "utf8");
  const byMetro = {};
  const re = /"([a-z-]+)":\s*\{\s*employment:\s*(\d+|null),\s*mean:\s*(\d+|null),\s*median:\s*(\d+|null),\s*p10:\s*(\d+|null),\s*p90:\s*(\d+|null)\s*\}/g;
  let m;
  const n = (v) => (v === "null" ? null : Number(v));
  while ((m = re.exec(src))) byMetro[m[1]] = { employment: n(m[2]), mean: n(m[3]), median: n(m[4]), p10: n(m[5]), p90: n(m[6]) };
  return byMetro;
}

async function validate() {
  console.log(`Validating: re-pulling SOC ${VALIDATION_SOC} and comparing to legalWageData.ts ...`);
  const fresh = await pullSoc(VALIDATION_SOC);
  const legal = parseLegal();
  let mismatches = 0, checked = 0;
  for (const slug of Object.keys(legal)) {
    for (const k of ["employment", "mean", "median", "p10", "p90"]) {
      if (legal[slug][k] == null) continue; // legal itself null -> skip
      checked++;
      if (legal[slug][k] !== fresh.byMetro[slug][k]) {
        mismatches++;
        if (mismatches <= 20) console.log(`  MISMATCH ${slug}.${k}: legal=${legal[slug][k]} fresh=${fresh.byMetro[slug][k]} (area ${METRO_AREA[slug]})`);
      }
    }
  }
  console.log(`Validation: ${checked - mismatches}/${checked} values matched (${mismatches} mismatches).`);
  return mismatches === 0;
}

// --- emit src/lib/<industry>WageData.ts --------------------------------------
const num = (v) => (v == null ? "null" : String(v));
function fileFor(ind, data) {
  const roleTitle = ind.role.charAt(0).toUpperCase() + ind.role.slice(1);
  const url = `https://www.bls.gov/oes/current/oes${socDigits(ind.soc)}.htm`;
  const out = [
    `// Real BLS OEWS ${ASOF} wage data for ${roleTitle} (SOC ${ind.soc}) by metro.`,
    `// Source: U.S. Bureau of Labor Statistics, OEWS. Auto-generated from the BLS API. Do not hand-edit.`,
    `import type { LegalWage } from "./legalWageData";`,
    `export const ${ind.constPrefix}_WAGE_ASOF = "${ASOF}";`,
    `export const ${ind.constPrefix}_WAGE_SOURCE = "${SOURCE}";`,
    `export const ${ind.constPrefix}_WAGE_SOURCE_URL = "${url}";`,
    `export const ${ind.constPrefix}_NATIONAL = { employment: ${num(data.national.employment)}, mean: ${num(data.national.mean)}, median: ${num(data.national.median)} };`,
    `export const ${ind.varPrefix}WageByMetro: Record<string, LegalWage> = {`,
    ...Object.keys(METRO_AREA).map((slug) => {
      const r = data.byMetro[slug];
      return `  "${slug}": { employment: ${num(r.employment)}, mean: ${num(r.mean)}, median: ${num(r.median)}, p10: ${num(r.p10)}, p90: ${num(r.p90)} },`;
    }),
    `};`,
  ];
  return out.join("\n") + "\n";
}

const importLineFor = (ind) => `import { ${ind.varPrefix}WageByMetro, ${ind.constPrefix}_NATIONAL } from '@/lib/${ind.varPrefix}WageData';`;
const wageSetLineFor = (ind) => `  ${ind.slug}: { byMetro: ${ind.varPrefix}WageByMetro, national: ${ind.constPrefix}_NATIONAL, role: '${ind.role}' },`;

// Optional: auto-insert the import + registry lines into CityTemplate.tsx.
function wireTemplate(built) {
  let src = fs.readFileSync(TEMPLATE, "utf8");
  const importAnchor = `import { healthcareWageByMetro, HEALTHCARE_NATIONAL } from '@/lib/healthcareWageData';`;
  const imports = built.filter((i) => !src.includes(`@/lib/${i.varPrefix}WageData`)).map(importLineFor);
  if (imports.length) src = src.replace(importAnchor, importAnchor + "\n" + imports.join("\n"));
  const rowAnchor = `  healthcare: { byMetro: healthcareWageByMetro, national: HEALTHCARE_NATIONAL, role: 'registered nurses' },`;
  const rows = built.filter((i) => !new RegExp(`\\n  ${i.slug}: \\{`).test(src)).map(wageSetLineFor);
  if (rows.length) src = src.replace(rowAnchor, rowAnchor + "\n" + rows.join("\n"));
  fs.writeFileSync(TEMPLATE, src);
  console.log(`Wired ${rows.length} registry row(s) + ${imports.length} import(s) into CityTemplate.tsx`);
}

// --- main --------------------------------------------------------------------
(async () => {
  const ok = await validate();
  if (!ok && !FORCE) {
    console.error("\nVALIDATION FAILED. Fix the flagged metro area code(s) in METRO_AREA and re-run.");
    console.error("(Use --force to write anyway - NOT recommended; it would emit unvalidated numbers.)");
    process.exit(2);
  }
  if (DRY_RUN) { console.log("\n--dry-run: validation only, nothing written."); return; }

  const targets = ONLY.length ? INDUSTRIES.filter((i) => ONLY.includes(i.slug)) : INDUSTRIES;
  const built = [];
  for (const ind of targets) {
    process.stdout.write(`Pulling ${ind.slug} (SOC ${ind.soc}) ... `);
    const data = await pullSoc(ind.soc);
    const reported = Object.values(data.byMetro).filter((r) => r.mean != null).length;
    fs.writeFileSync(path.join(LIB, `${ind.varPrefix}WageData.ts`), fileFor(ind, data));
    built.push(ind);
    console.log(`wrote ${ind.varPrefix}WageData.ts (${reported}/${Object.keys(METRO_AREA).length} metros reported, national mean ${num(data.national.mean)})`);
  }

  if (WIRE) wireTemplate(built);

  console.log("\n=== Add these to src/components/CityTemplate.tsx ===");
  console.log("\n// imports (after the healthcareWageData import):");
  for (const ind of built) console.log(importLineFor(ind));
  console.log("\n// WAGE_SETS rows (inside the registry object):");
  for (const ind of built) console.log(wageSetLineFor(ind));
  console.log("\nThen run: node scripts/generate-sitemap.js && node scripts/validate-pages.js");
})().catch((e) => { console.error(e); process.exit(1); });
