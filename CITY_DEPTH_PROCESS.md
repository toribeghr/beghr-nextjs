# City-Page Depth Program (SERP-driven, real-data-backed)
_Locked July 3, 2026. This is the ONLY approved way to build out city-page depth. It applies PAGE_TEMPLATE STEP 0 (SERP depth check) to the city-page matrix and requires real data, not templated filler._

## The rule (non-negotiable)
A city page is INDEXABLE only when it has real, localized data that lets it out-depth the current #1 result for its query. Everything else is `noindex` and excluded from the sitemap. This is enforced in code:
- `CityTemplate.cityHasWage(industry, metro)` gates `robots: noindex` (only industries in the `WAGE_SETS` registry with a metro entry are indexable).
- `scripts/generate-sitemap.js` lists a city URL only if `src/lib/<industry>WageData.ts` exists and contains that metro.
- Result today: only `legal` + `healthcare` city pages index (~100). The other 24 industries' city pages are noindexed until they go through this process.

## Why this exists
The site had ~1,250 city pages but real data for only 2 industries. The other ~1,200 were thin near-duplicates -> Google crawled them and refused to index them ("Crawled - currently not indexed"), and mass thin pages drag the whole domain's quality on a young site. We do not publish a city page we cannot make genuinely deeper than the incumbent.

## Per-industry build process (repeat for each industry, in priority order)

### STEP 0 - SERP depth check (REQUIRED, per PAGE_TEMPLATE)
For the industry, run the check on 3 representative metros (one large, one mid, one small - e.g. Dallas, Columbus, Boise):
1. Web-search the real query a buyer uses: "<role> recruiters in <metro>" and "<role> recruiter <metro>" (e.g. "attorney recruiters in Dallas").
2. Identify the current #1 organic result (ignore ads and directory aggregators like Indeed/ZipRecruiter where BEG cannot realistically win the head term - note if the SERP is all aggregators and pick a winnable long-tail).
3. Fetch the #1 and record what it actually contains: does it show local salary/comp data? local market commentary? role-specific hiring guidance? company/agency proof? What is its depth (sections, data, word count)?
4. Decide the depth needed to overtake it: list the specific blocks BEG's city page must have that the #1 has PLUS at least one it lacks (real BLS comp, vs-national delta, local market note, role-specific guidance).
5. Record the finding (who is #1, what it covers, the gap, the winnable query variant) before pulling data.

### STEP 1 - Pull REAL data to fill the gap
- Primary dataset: BLS OEWS (Occupational Employment and Wage Statistics), latest release, via the BLS API v2 with the registered key (500 requests/day). This is how `legal` (SOC 23-1011 attorneys) and `healthcare` (SOC 29-1141 registered nurses) were built.
- Pick the SOC code(s) that best represent the industry's core hire (e.g. finance -> 13-2051 financial analysts; technology -> 15-1252 software developers; engineering -> 17-2199; trades -> relevant 47/49 codes).
- Pull per-metro mean (and p25/p75 if available) for the target metros, plus the national mean as the benchmark.
- Create `src/lib/<industry>WageData.ts` mirroring `legalWageData.ts` exactly: export `<industry>WageByMetro` (Record<metroSlug, { mean, ... }>), `<INDUSTRY>_NATIONAL`, and reuse the `LegalWage` type shape.
- Data integrity: only include metros where BLS actually reports the SOC. Missing metros stay noindexed (that is correct - do not fabricate).

### STEP 2 - Wire it in (flips the industry to indexable)
- Add ONE line to `WAGE_SETS` in `src/components/CityTemplate.tsx`:
  `<industry>: { byMetro: <industry>WageByMetro, national: <INDUSTRY>_NATIONAL, role: '<plural role label>' },`
- That single line makes every metro with data indexable (gate) and renders the real wage block + vs-national delta.

### STEP 3 - Add any extra depth the SERP check demanded
If STEP 0 showed the #1 has something beyond comp (e.g. local licensing notes, local demand drivers), add that as a real-data block in CityTemplate for that industry. Never add templated filler - only real, verifiable, localized content.

### STEP 4 - Validate
- `node scripts/generate-sitemap.js` (auto-includes the new industry's metros now that the wage file exists).
- `node scripts/validate-pages.js` (0 errors).
- Spot-check one city page: real comp shows, `robots` is indexable, breadcrumb + RelatedPosts present.

### STEP 5 - Ship
- Push to `wave2/buildout` (preview), confirm the build is green and a sample city page renders with real data and is indexable, then promote to `master`.
- Request indexing in GSC for 2-3 of the new city pages to seed re-crawl.

## Prioritization (which industries first)
Order by (a) real search demand for "<role> recruiter <city>", (b) BEG placement fit, (c) BLS data availability:
1. legal (DONE) 2. healthcare (DONE) 3. finance / accounting-cpa 4. technology 5. engineering 6. sales 7. hr 8. cybersecurity 9. manufacturing 10. construction-management ... (remaining industries only if demand justifies).
Do NOT batch all 26. One industry per cycle, each fully SERP-checked and real-data-backed, then flipped to indexable.

## Scope guardrails
- City pages are JOB-PLACEMENT only. Do NOT build city pages for managed-payroll or hcm-software - those services are national/remote (brand rule), so city pages there have no local relevance.
- Never index a city page without real data. The gate enforces this; do not bypass it.
- Metros: target the top ~20-25 by population/search first; the long tail can wait or stay noindexed.

## SOC code map (run this whole set in ONE BLS pull to fill everything today)
Same pull method that generated legalWageData.ts + healthcareWageData.ts (BLS OEWS May 2025 metro data via the registered API key in Claude Code). For each row, generate src/lib/<slug>WageData.ts (byMetro mean/median/p10/p90 + national) and add one WAGE_SETS line in CityTemplate. SOC choices are the best-fit core hire; adjust if a sub-focus is better.

| industry slug | SOC code | occupation | role label |
|---|---|---|---|
| finance | 13-2051 | Financial and Investment Analysts | financial analysts |
| accounting-cpa | 13-2011 | Accountants and Auditors | accountants |
| technology | 15-1252 | Software Developers | software engineers |
| cybersecurity | 15-1212 | Information Security Analysts | security analysts |
| engineering | 17-2199 | Engineers, All Other | engineers |
| architecture | 17-1011 | Architects | architects |
| sales | 11-2022 | Sales Managers | sales leaders |
| marketing | 11-2021 | Marketing Managers | marketing leaders |
| hr | 11-3121 | Human Resources Managers | HR leaders |
| executive | 11-1011 | Chief Executives | executives |
| manufacturing | 11-3051 | Industrial Production Managers | plant leaders |
| construction-management | 11-9021 | Construction Managers | construction managers |
| trades | 47-1011 | First-Line Supervisors of Trades | trade supervisors |
| banking | 11-3031 | Financial Managers | banking leaders |
| insurance | 13-2053 | Insurance Underwriters | underwriters |
| supply-chain | 13-1081 | Logisticians | supply chain professionals |
| real-estate | 11-9141 | Property and Real Estate Managers | real estate managers |
| hospitality | 11-9081 | Lodging Managers | hospitality leaders |
| nonprofit | 11-9151 | Social and Community Service Managers | nonprofit leaders |
| dental | 29-1021 | Dentists, General | dentists |
| veterinary | 29-1131 | Veterinarians | veterinarians |
| biotech | 19-1042 | Medical Scientists | life sciences professionals |
| energy | 17-2171 | Petroleum Engineers | energy professionals |
| government | 13-1111 | Management Analysts | program professionals |

After the pull writes all 24 files and the WAGE_SETS lines are added, EVERY city page with BLS data renders real comp and is indexable; the handful of metros BLS does not report for an occupation stay noindexed (they are genuinely thin and cannot be filled). Then generate-sitemap.js auto-lists them and validate-pages.js passes. One push ships the whole fill.

## Data pull note
The BLS API key lives in the Claude Code environment (where legal/healthcare were pulled), not the Cowork sandbox. The city-depth agent does STEP 0 (SERP) and scaffolds the wage file + wiring; the keyed BLS pull runs where the key is, or Anthony runs the provided pull command. Once `<industry>WageData.ts` exists, everything else (gate, sitemap, render) is automatic.
