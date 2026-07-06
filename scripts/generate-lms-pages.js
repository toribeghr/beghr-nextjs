#!/usr/bin/env node
/**
 * BEG LMS Silo Generator (feat/lms-silo).
 * Mirrors the applicant-tracking-system (ATS) silo structure for the
 * Learning Management System silo = isolved Learn & Grow, resold, configured,
 * implemented, and supported by BEG. National, remote, all 50 states.
 *
 * Hard brand rules enforced here:
 *  - isolved is always lowercase (product name: "isolved Learn & Grow").
 *  - No em-dashes or en-dashes anywhere (write() normalizes to hyphens).
 *  - Single web CTA: "Get Instant Pricing" via <PricingCta service="hcm-software" label=... />
 *    (Learn & Grow is an isolved add-on priced inside the HCM instant quote, same as ATS).
 *  - NEPQ voice, no DFW / regional framing.
 *
 * Emits: hub + 5 supporting pages + 34 industry cuts under
 *   src/app/services/lms-learning-management/
 * Run: node scripts/generate-lms-pages.js
 */
const fs = require('fs');
const path = require('path');

const HUB = 'lms-learning-management';
const BASE = path.join(__dirname, '..', 'src', 'app', 'services', HUB);
const CANON = 'https://www.beghr.com/services/' + HUB;
const DEEP = (() => { try { return JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'lib', 'lmsIndustryDeep.json'), 'utf8')); } catch (e) { return {}; } })();
const TODAY = '2026-07-05';

// ---- helpers ---------------------------------------------------------------
function esc(s) { return String(s).replace(/`/g, '\\`').replace(/\$\{/g, '\\${').replace(/'/g, '\u2019'); }
function amp(s) { return String(s).replace(/&(?!amp;|apos;|larr;|rarr;)/g, '&amp;').replace(/'/g, '\u2019'); }

// FAQ JSON-LD + optional extra schema blocks
function faqSchema() {
  return `      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
          }),
        }}
      />`;
}
function speakableSchema() {
  return `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />`;
}
function breadcrumbSchema(name, url) {
  return `      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Learning Management System', item: '${CANON}' },
              { '@type': 'ListItem', position: 3, name: '${name}', item: '${url}' },
            ],
          }),
        }}
      />`;
}
function articleSchema(headline, description, url) {
  return `      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '${esc(headline)}',
            description: '${esc(description)}',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '${TODAY}',
            mainEntityOfPage: '${url}',
          }),
        }}
      />`;
}

// metadata block
function meta(title, desc, url) {
  return `export const metadata: Metadata = {
  title: '${esc(title)}',
  description: '${esc(desc)}',
  alternates: { canonical: '${url}' },
  openGraph: {
    title: '${esc(title)}',
    description: '${esc(desc)}',
    url: '${url}',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '${esc(title)}', description: '${esc(desc)}', images: ['https://www.beghr.com/assets/og-image.png'] },
};`;
}

// FAQS array literal from [q,a] pairs
function faqsConst(pairs) {
  const body = pairs.map(([q, a]) => `  [\n    '${esc(q)}',\n    '${esc(a)}',\n  ],`).join('\n');
  return `const FAQS: [string, string][] = [\n${body}\n];`;
}

// ---- reusable section builders --------------------------------------------
function statCards(eyebrow, h2, cards, soft) {
  const items = cards.map(c => `                {
                  stat: '${esc(c.stat)}',
                  label: '${esc(c.label)}',
                  sub: '${esc(c.sub)}',
                },`).join('\n');
  return `        <section className="section${soft ? ' section--soft' : ''}">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">${amp(eyebrow)}</p>
              <h2>${amp(h2)}</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
${items}
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>`;
}

function steps(eyebrow, h2, items3, soft) {
  const items = items3.map(s => `                {
                  num: '${s.num}',
                  title: '${esc(s.title)}',
                  body: '${esc(s.body)}',
                },`).join('\n');
  return `        <section className="section${soft ? ' section--soft' : ''}">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">${amp(eyebrow)}</p>
              <h2>${amp(h2)}</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
${items}
              ].map(({ num, title, body }) => (
                <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>`;
}

function solveCards(eyebrow, h2, cards3, soft) {
  const items = cards3.map(c => `                {
                  title: '${esc(c.title)}',
                  body: '${esc(c.body)}',
                },`).join('\n');
  return `        <section className="section${soft ? ' section--soft' : ''}">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">${amp(eyebrow)}</p>
              <h2>${amp(h2)}</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
${items}
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>`;
}

function faqBlock(h2) {
  return `        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>${amp(h2)}</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>`;
}

function midCta(eyebrow, h2, soft) {
  return `        <section className="section${soft ? ' section--soft' : ''}">
          <div className="container" style={{ maxWidth: '620px' }}>
            <div className="head center reveal">
              <p className="eyebrow">${amp(eyebrow)}</p>
              <h2>${amp(h2)}</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />
            </div>
          </div>
        </section>`;
}

module.exports = { esc, amp, faqSchema, breadcrumbSchema, articleSchema, meta, faqsConst, statCards, steps, solveCards, faqBlock, midCta, HUB, BASE, CANON, TODAY };

// ---- full page shell -------------------------------------------------------
function pageFile({ fn, slug, imports, metaTitle, metaDesc, url, faqs, schemaExtra, eyebrow, title, description, heroStats, sections }) {
  const imp = ["import { Metadata } from 'next';", "import Link from 'next/link';", "import ServicePage from '@/components/ServicePage';"]
    .concat(imports || [])
    .concat(["import PricingCta from '@/components/pricing/PricingCta';", "import { getCalendlyLink } from '@/lib/services';"]).join('\n');
  const stats = heroStats.map(s => `          { value: '${esc(s.value)}', label: '${esc(s.label)}' },`).join('\n');
  const schemaBlocks = [schemaExtra || '', faqSchema(), speakableSchema()].filter(Boolean).join('\n');
  return `${imp}

${meta(metaTitle, metaDesc, url)}

const CALENDLY = getCalendlyLink('${slug}');

${faqsConst(faqs)}

export default function ${fn}() {
  return (
    <>
${schemaBlocks}
      <ServicePage
        showHeroImage={false}
        eyebrow="${amp(eyebrow)}"
        title="${esc(title)}"
        description="${esc(description)}"
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />}
        heroStats={[
${stats}
        ]}
      >
${sections}
      </ServicePage>
    </>
  );
}
`;
}

// cross-silo block shared by industry pages
function industryCrossSilo(nameLower) {
  return `        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Go Deeper</p>
              <h2>More on learning management and the rest of the BEG stack</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>See the platform itself</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/${HUB}/isolved-learn-grow">Inside isolved Learn &amp; Grow</Link>: what the platform actually does.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Check pricing</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/${HUB}/lms-pricing">See pricing</Link> for isolved Learn &amp; Grow.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll for your team</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/managed-payroll">Managed payroll services</Link>, fully handled in your existing system.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want the whole platform?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software">isolved HCM</Link> puts payroll, HR, time, benefits, and Learn &amp; Grow on one platform.
                </p>
              </div>
            </div>
            <p className="reveal" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/services/${HUB}" style={{ color: '#ECAC60', fontWeight: 700 }}>&larr; Back to Learning Management System overview</Link>
            </p>
          </div>
        </section>`;
}

// ---- industry page template ------------------------------------------------
function genIndustry(slug, d) {
  const dd = DEEP[slug] || {};
  const name = d.name; const short = d.short || d.name; const tag = d.tag || d.name;
  const nl = (d.nameLower || d.name).toLowerCase();
  const url = `${CANON}/${slug}`;
  const fn = 'Lms' + slug.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') + 'Page';
  const metaTitle = dd.metaTitle || `${name} LMS | isolved Learn & Grow, Configured by BEG`;
  const metaDesc = dd.metaDesc || `Training software for ${nl}. BEG resells and configures isolved Learn & Grow so you assign required training, track completions, and stay audit-ready, nationwide.`;
  const title = dd.hook || `Keep your ${nl} team trained, compliant, and audit-ready in one system.`;
  const description = `In ${nl}, a training gap shows up as a citation, a lawsuit, or a lost license, not just a missing checkbox. isolved Learn & Grow, resold and configured by BEG, assigns required courses by role, tracks completions and renewals, and gives you audit-ready proof on demand, for ${nl} teams and all 50 states.`;
  const painStats = (dd.painStats && dd.painStats.length === 3) ? dd.painStats : [
    { stat: 'Compliance', label: `Required ${nl} training cannot lapse`, sub: 'A missed or expired requirement becomes a liability the day an auditor, regulator, or client asks for proof.' },
    { stat: 'Turnover', label: 'Every new hire starts training from zero', sub: 'Re-running the same onboarding and safety training by hand pulls your best people off the floor.' },
    { stat: 'No trail', label: 'A binder is not a training record', sub: 'Sign-in sheets tell you who showed up, not who completed, passed, and is due to renew.' },
  ];
  const solves = (dd.solves && dd.solves.length === 3) ? dd.solves : [
    { title: 'Assign the right courses automatically', body: 'Required training is assigned by role the moment someone is hired, with due dates and reminders.' },
    { title: 'Onboard new hires in days, not weeks', body: `New ${nl} staff run a consistent onboarding path, including your own uploaded content.` },
    { title: 'Prove compliance in one click', body: 'Completion, pass rates, and renewal dates live in one dashboard, so an audit becomes a report you pull.' },
  ];
  const authority = (dd.authority || []).concat([LMS_WIKI]);
  const faqs = (dd.faq || []).concat([
    ['Can we upload our own training content?', `Yes. Alongside the isolved course library, you can upload your own videos, documents, slide decks, and quizzes, so your specific ${nl} training lives in one system.`],
    ['What does isolved Learn & Grow cost?', 'It is bundled into the Grow tier of isolved HCM at no separate module charge. Your total is the Grow tier per-employee rate, which starts at $45 per employee per month and includes the full talent suite. Get an instant estimate on screen in about 90 seconds.'],
    ['Do you serve employers in my state?', `Yes. BEG configures and supports isolved Learn & Grow for ${nl} employers in all 50 states, delivered remotely nationwide.`],
  ]);
  const schemaExtra = [ articleSchema(title, metaDesc, url), breadcrumbSchema(`${name} LMS`, url) ].join('\n');
  const sections = [
    statCards('The Training Problem', `Where training compliance actually bites in ${nl}`, painStats, true),
    steps('How It Works', 'From scattered training to one tracked system in three steps', [
      { num: '01', title: 'BEG configures isolved Learn & Grow to your requirements', body: `Your roles, required courses, and renewal schedules get built in around how ${nl} actually trains, not a generic template.` },
      { num: '02', title: 'Assign courses and upload your own content', body: 'Use the isolved course library or upload your own videos, documents, and quizzes, then assign them by role, location, or team.' },
      { num: '03', title: 'Track completions and stay audit-ready', body: 'Every completion, score, and due date is tracked automatically, so your team stays current and you can prove it on demand.' },
    ]),
    solveCards('What This Solves', `Training built for how ${nl} teams actually operate`, solves, true),
    sourcesLine(authority),
    industryCrossSilo(nl),
    midCta('Ready?', 'See your isolved Learn & Grow price before you talk to anyone', true),
    faqBlock(`Learning management for ${nl}, answered`),
  ].join('\n');
  return pageFile({ fn, slug, imports: [], metaTitle, metaDesc, url, faqs, schemaExtra, eyebrow: `Learning Management · ${tag}`, title, description,
    heroStats: [ { value: 'One system', label: 'Every course and completion in one place' }, { value: `Built for ${short}`, label: 'Configured to your roles and requirements' }, { value: '90 sec', label: 'To your instant estimate' } ], sections });
}

// ---- 34 industry cuts (mirrors the managed-benefits industry set) ----------
const LMS_INDUSTRIES = {
  healthcare: { name: 'Healthcare', roles: 'nurses, aides, and techs', need: 'HIPAA, bloodborne pathogens, and clinical competency training', hook: 'Keep every clinician trained, credentialed, and compliant without the paperwork pile.' },
  construction: { name: 'Construction', short: 'Construction', tag: 'Construction & Trades', roles: 'crews and field staff', need: 'OSHA, jobsite safety, and equipment certification training', hook: 'Keep every crew safety-trained and certified before they step on the jobsite.' },
  'multi-unit-restaurant': { name: 'Multi-Unit Restaurants', short: 'Restaurants', tag: 'Restaurants & Hospitality', nameLower: 'restaurants', roles: 'hourly and shift staff', need: 'food safety, alcohol service, and harassment-prevention training', hook: 'Onboard and certify high-turnover restaurant staff across every location, fast.' },
  'senior-care': { name: 'Senior Care', roles: 'caregivers and aides', need: 'resident care, dementia, and state-mandated caregiver training', hook: 'Keep caregivers trained and state-compliant across every shift and site.' },
  'home-health': { name: 'Home Health', roles: 'field caregivers and clinicians', need: 'in-home care, HIPAA, and aide certification training', hook: 'Train and certify a field workforce you rarely see in one place.' },
  manufacturing: { name: 'Manufacturing', roles: 'plant and line workers', need: 'OSHA, machine safety, and quality-standard training', hook: 'Keep every shift trained on safety and quality without stopping the line.' },
  'accounting-cpa': { name: 'Accounting & CPA Firms', short: 'Accounting Firms', tag: 'Accounting & CPA Firms', nameLower: 'accounting firms', roles: 'accountants and staff', need: 'CPE, ethics, and data-security training', hook: 'Track CPE and firm training without another spreadsheet at busy season.' },
  agriculture: { name: 'Agriculture', roles: 'farm and operations crews', need: 'equipment safety, chemical handling, and worker-protection training', hook: 'Keep seasonal and year-round crews trained and compliant across the operation.' },
  architecture: { name: 'Architecture', roles: 'architects and design staff', need: 'licensure CE, software, and standards training', hook: 'Track continuing education and studio training without chasing certificates.' },
  'auto-dealership': { name: 'Auto Dealerships', short: 'Dealerships', tag: 'Auto Dealerships', nameLower: 'dealerships', roles: 'sales and service staff', need: 'sales certification, F&I compliance, and safety training', hook: 'Onboard and certify dealership staff across sales, service, and F&I in one system.' },
  brewery: { name: 'Breweries', nameLower: 'breweries', roles: 'production and taproom staff', need: 'alcohol service, food safety, and equipment safety training', hook: 'Train production and taproom staff on safety and service without the binder.' },
  cannabis: { name: 'Cannabis', roles: 'dispensary and cultivation staff', need: 'state compliance, seed-to-sale, and safety training', hook: 'Keep a fast-growing cannabis team trained on ever-changing state rules.' },
  childcare: { name: 'Childcare', roles: 'teachers and aides', need: 'state licensing, CPR, and child-safety training', hook: 'Keep every classroom staffed with trained, state-compliant teachers.' },
  church: { name: 'Churches & Faith-Based', short: 'Churches', tag: 'Churches & Faith-Based', nameLower: 'churches', roles: 'staff and volunteers', need: 'child-protection, safety, and background-check training', hook: 'Train staff and volunteers on safety and child-protection consistently.' },
  education: { name: 'Education', roles: 'teachers and staff', need: 'mandated-reporter, safety, and professional-development training', hook: 'Deliver required and professional-development training across the whole staff.' },
  engineering: { name: 'Engineering', roles: 'engineers and technical staff', need: 'licensure PDH, safety, and standards training', hook: 'Track PDH and technical training without the certificate scramble.' },
  events: { name: 'Events', roles: 'event and venue staff', need: 'safety, alcohol service, and crowd-management training', hook: 'Train seasonal and part-time event crews fast, in one place.' },
  executive: { name: 'Executive Teams', short: 'Leadership', tag: 'Executive & Leadership', nameLower: 'leadership teams', roles: 'managers and leaders', need: 'leadership, compliance, and harassment-prevention training', hook: 'Roll out leadership and compliance training your whole team completes.' },
  finance: { name: 'Finance', roles: 'finance and accounting staff', need: 'compliance, anti-money-laundering, and data-security training', hook: 'Keep finance teams current on compliance without the manual tracking.' },
  fitness: { name: 'Fitness & Gyms', short: 'Fitness', tag: 'Fitness & Gyms', nameLower: 'fitness', roles: 'trainers and front-desk staff', need: 'CPR, certification, and safety training', hook: 'Keep trainers certified and staff safety-trained across every location.' },
  franchise: { name: 'Franchise', roles: 'franchise and location staff', need: 'brand-standard, safety, and compliance training', hook: 'Deliver the same brand and compliance training at every franchise location.' },
  'government-contractor': { name: 'Government Contractors', short: 'Gov Contractors', tag: 'Government Contractors', nameLower: 'government contractors', roles: 'contract staff', need: 'security, ethics, and compliance training', hook: 'Prove required contractor training on demand for every audit.' },
  'home-services': { name: 'Home Services', roles: 'field technicians', need: 'safety, licensing, and customer-service training', hook: 'Train and certify field techs you dispatch, not desk-bound staff.' },
  'insurance-agency': { name: 'Insurance Agencies', short: 'Insurance', tag: 'Insurance Agencies', nameLower: 'insurance agencies', roles: 'agents and staff', need: 'licensing CE, compliance, and product training', hook: 'Track agent CE and product training without missing a renewal.' },
  legal: { name: 'Law Firms', short: 'Law Firms', tag: 'Legal', nameLower: 'law firms', roles: 'attorneys and staff', need: 'CLE, ethics, and data-security training', hook: 'Track CLE and firm training without chasing attorneys for certificates.' },
  'marketing-agency': { name: 'Marketing Agencies', short: 'Agencies', tag: 'Marketing Agencies', nameLower: 'marketing agencies', roles: 'account and creative staff', need: 'tools, compliance, and onboarding training', hook: 'Onboard and upskill agency talent without slowing billable work.' },
  'property-management': { name: 'Property Management', roles: 'property and maintenance staff', need: 'fair-housing, safety, and compliance training', hook: 'Keep property teams trained on fair-housing and safety across every site.' },
  'salon-spa': { name: 'Salon & Spa', short: 'Salons', tag: 'Salon & Spa', nameLower: 'salons and spas', roles: 'stylists and staff', need: 'licensing, sanitation, and safety training', hook: 'Keep licenses current and staff sanitation-trained across the salon.' },
  security: { name: 'Security', roles: 'guards and officers', need: 'state licensing, use-of-force, and safety training', hook: 'Keep officers licensed and trained across every post and shift.' },
  'staffing-agency': { name: 'Staffing Agencies', short: 'Staffing', tag: 'Staffing Agencies', nameLower: 'staffing agencies', roles: 'placed workers', need: 'client-specific, safety, and compliance training', hook: 'Get placed workers trained and compliant before their first shift.' },
  technology: { name: 'Technology', roles: 'technical and product staff', need: 'security, compliance, and tools training', hook: 'Roll out security and product training your whole org actually completes.' },
  trades: { name: 'Skilled Trades', short: 'Trades', tag: 'Skilled Trades', nameLower: 'skilled trades', roles: 'tradespeople and crews', need: 'safety, certification, and equipment training', hook: 'Keep tradespeople certified and safety-trained without the paperwork.' },
  trucking: { name: 'Trucking', roles: 'drivers and yard staff', need: 'DOT, safety, and compliance training', hook: 'Keep drivers DOT-compliant and trained across the whole fleet.' },
  veterinary: { name: 'Veterinary', roles: 'techs and staff', need: 'clinical, safety, and OSHA training', hook: 'Keep veterinary staff trained on clinical and safety standards in one system.' },
};

// ---- feature cards (What You Get) ------------------------------------------
function featureCards(eyebrow, h2, cards, soft) {
  const items = cards.map(c => `                {
                  heading: '${esc(c.heading)}',
                  body: '${esc(c.body)}',
                },`).join('\n');
  return `        <section className="section${soft ? ' section--soft' : ''}">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">${amp(eyebrow)}</p>
              <h2>${amp(h2)}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
              {[
${items}
              ].map(({ heading, body }) => (
                <div key={heading} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                  <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#000000' }}>{heading}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>`;
}

function hubBackLink() {
  return `        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <Link href="/services/${HUB}" style={{ color: '#ECAC60', fontWeight: 700 }}>&larr; Back to Learning Management System overview</Link>
          </div>
        </section>`;
}

// ---- HUB --------------------------------------------------------------------
function genHub() {
  const url = CANON;
  const faqs = [
    ['What is a learning management system?', 'A learning management system, or LMS, is software that hosts your training courses, assigns them to the right people, and tracks who completed what. It replaces sign-in sheets, scattered videos, and spreadsheets with one system of record for training.'],
    ['Is this isolved Learn & Grow?', 'Yes. BEG resells, configures, implements, and supports isolved Learn & Grow, the learning management module built into the isolved platform. It is the software running behind this service.'],
    ['Does BEG build the software?', 'No. isolved builds and maintains Learn & Grow. BEG resells it, configures it to your roles and training requirements, and provides ongoing support so your team gets it running correctly.'],
    ['Can we upload our own training content?', 'Yes. Alongside the isolved course library, you can upload your own videos, documents, slide decks, and quizzes, and add social learning and gamification to keep people engaged.'],
    ['What does it cost?', 'isolved Learn & Grow is bundled into the Grow tier of isolved HCM at no separate module charge. Your total is the Grow tier per-employee rate, which starts at $45 per employee per month and includes the full talent suite alongside Learning Management. Answer a few questions and get an instant estimate on screen in about 90 seconds, no call required.'],
    ['What is a learning management system used for?', 'A learning management system is used to host training courses, assign them by role, deliver them on any device, and track who completed what. Companies use it for compliance training, onboarding, and ongoing professional development in one place.'],
    ['Is isolved Learn & Grow a good LMS for a small business?', 'Yes. Because Learn & Grow is a module on the isolved platform, a small business gets a full LMS without buying and integrating separate software. BEG configures and supports it, and it is bundled into the Grow tier of isolved HCM at no separate module charge.'],
    ['Do you serve my state?', 'Yes. BEG supports learning management for companies in all 50 states, configured and delivered remotely.'],
  ];

  const inlineSearch = `        {/* SITE SEARCH */}
        <InlineSearch
          vertical="LMS"
          heading="Looking for something specific?"
          subhead="Search our learning management pages and guides."
          chips={['LMS pricing', 'compliance training', 'employee onboarding', 'isolved Learn & Grow']}
        />`;

  const pain = statCards('What Scattered Training Actually Costs You', 'Every course tracked by hand is a compliance gap waiting to happen.', [
    { stat: '~$1,200', label: 'Average spend on training per employee per year', sub: 'Most organizations already invest in training. Scattered across binders and one-off videos, that spend is impossible to measure or prove.' },
    { stat: 'Compliance', label: 'Lapsed training is a liability', sub: 'Safety, harassment, and industry-specific requirements do not wait. A missed renewal becomes a risk the moment someone asks for proof.' },
    { stat: '1 Folder', label: 'Is not a training system', sub: 'Videos in a drive and sign-in sheets in a binder tell you almost nothing about who completed, passed, and is due to renew.' },
  ], true) + `
        <div className="container" style={{ maxWidth: '820px' }}>
          <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
            Source:{' '}
            <a href="https://www.td.org/research-reports" target="_blank" rel="noopener noreferrer">ATD, State of the Industry, direct learning expenditure per employee</a>.
          </p>
        </div>`;

  const how = steps('How It Works', 'From scattered training to one tracked system in three steps', [
    { num: '01', title: 'BEG configures isolved Learn & Grow', body: 'We set up Learn & Grow around your roles, required courses, and renewal schedules, so it fits how your team actually trains from day one.' },
    { num: '02', title: 'Assign courses and upload your own content', body: 'Use the isolved course library or upload your own videos, documents, and quizzes, then assign them by role, location, or team.' },
    { num: '03', title: 'Track completions and prove compliance', body: 'Every completion, score, and due date is tracked automatically, so your people stay current and you can produce the record on demand.' },
  ]);

  const whatYouGet = featureCards('What You Get', 'Everything inside isolved Learn & Grow, configured for your team', [
    { heading: 'Course library and content upload', body: 'Start with the isolved course library or upload your own videos, documents, slide decks, and quizzes, all in one place.' },
    { heading: 'Assignments by role and due date', body: 'Assign required training by role, location, or team, with due dates, renewals, and automatic reminders so nothing lapses.' },
    { heading: 'Social learning and gamification', body: 'Keep people engaged with social learning and gamification built into the platform, not bolted on.' },
    { heading: 'Completion tracking and reporting', body: 'See who completed, who passed, and who is due to renew in one dashboard, so an audit becomes a report you pull.' },
    { heading: 'Mobile and connected to HR', body: 'Learners train from any device, and records connect to the rest of isolved so onboarding, HR, and payroll stay in sync.' },
  ], true);

  const whyBeg = solveCards('Why BEG', 'A reseller who configures it, supports it, and connects it to the rest of your stack', [
    { title: 'We configure and support it', body: 'BEG resells isolved Learn & Grow and does the setup: your roles, your courses, your team trained on it. When something needs adjusting, BEG is who you call.' },
    { title: 'National remote delivery', body: 'Every client is set up and supported remotely, so it works the same whether your team is in one office or spread across the country.' },
    { title: 'Connected to HR and payroll', body: 'Training does not stand alone. It connects to onboarding, HR, and payroll inside isolved, so a completed course and a new hire live in the same system.' },
  ]);

  const industryCards = Object.entries(LMS_INDUSTRIES).map(([slug, d]) => {
    const label = amp(d.tag || d.name);
    return `              <Link href="/services/${HUB}/${slug}" className="card-link reveal">
                <span className="tag">${label}</span>
                <h3>${label}</h3>
                <p>${amp('Assign, track, and prove ' + (d.need) + ' in one system.')}</p>
              </Link>`;
  }).join('\n');
  const byIndustry = `        {/* BY INDUSTRY */}
        <section className="section section--soft">
          <div className="container">
            <div className="head center reveal">
              <p className="eyebrow">By Industry</p>
              <h2>Learning management built for how your industry actually trains</h2>
            </div>
            <div className="cards">
${industryCards}
            </div>
          </div>
        </section>`;

  const explore = `        {/* EXPLORE */}
        <section className="section">
          <div className="container">
            <div className="head center reveal">
              <p className="eyebrow">Explore</p>
              <h2>Learn more about learning management</h2>
            </div>
            <div className="cards">
              <Link href="/services/${HUB}/isolved-learn-grow" className="card-link reveal">
                <h3>Inside isolved Learn &amp; Grow</h3>
                <p>A closer look at the platform BEG resells, configures, and supports.</p>
              </Link>
              <Link href="/services/${HUB}/lms-for-compliance-training" className="card-link reveal">
                <h3>LMS for compliance training</h3>
                <p>Assign, track, and prove required training without the binder.</p>
              </Link>
              <Link href="/services/${HUB}/employee-onboarding-lms" className="card-link reveal">
                <h3>Employee onboarding LMS</h3>
                <p>Get new hires productive in days with a consistent onboarding path.</p>
              </Link>
              <Link href="/services/${HUB}/lms-vs-diy-training" className="card-link reveal">
                <h3>LMS vs DIY training</h3>
                <p>Why binders, spreadsheets, and free videos break down as you grow.</p>
              </Link>
              <Link href="/services/${HUB}/lms-pricing" className="card-link reveal">
                <h3>LMS pricing</h3>
                <p>How Learning Management is bundled into isolved HCM pricing.</p>
              </Link>
            </div>
          </div>
        </section>`;

  const crossSilo = `        {/* CROSS-SILO */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Rest of the Stack</p>
              <h2>Learning management is one module. BEG handles the rest too.</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Payroll eating your week?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  BEG&apos;s core service is <Link href="/services/managed-payroll">fully managed payroll</Link>: every cycle, filing, and W-2 handled, in your existing system.
                </p>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want the whole platform?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hcm-software">isolved HCM</Link> puts payroll, HR, time, benefits, and Learn &amp; Grow on one platform.
                </p>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Hiring too?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system">Applicant tracking</Link> gets every candidate into one pipeline, then hands off into onboarding.
                </p>
              </div>
              <div style={{ background: '#ffffff', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Need HR support too?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/hr-outsourcing">HR outsourcing</Link> backs up your team with certified HR professionals and a dedicated partner.
                </p>
              </div>
            </div>
          </div>
        </section>`;

  const midCtaHub = `        {/* MID-PAGE CTA */}
        <section className="section">
          <div className="container" style={{ textAlign: 'center' }}>
            <PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />
          </div>
        </section>`;

  let stateCards = '';
  try {
    const sd = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'lib', 'lmsStateData.json'), 'utf8'));
    stateCards = Object.entries(sd).map(([sslug, sd2]) => `              <Link href="/services/${HUB}/${sslug}" className="card-link reveal">
                <span className="tag">${amp(sd2.n)}</span>
                <h3>${amp(sd2.n)}</h3>
                <p>Employee training compliance for ${amp(sd2.n)} employers.</p>
              </Link>`).join('\n');
  } catch (e) {}
  const byState = stateCards ? `        {/* BY STATE */}
        <section className="section">
          <div className="container">
            <div className="head center reveal">
              <p className="eyebrow">By State</p>
              <h2>Employee training compliance, state by state</h2>
            </div>
            <div className="cards">
${stateCards}
            </div>
          </div>
        </section>` : '';

  const sections = [inlineSearch, pain, how, whatYouGet, whyBeg, byIndustry, byState, explore, sourcesLine([LMS_WIKI, ISOLVED_LG, ATD_SRC], true), crossSilo, midCtaHub, faqBlock('Learning management, answered plainly')].join('\n');

  return pageFile({
    fn: 'LearningManagementSystemPage', slug: HUB,
    imports: ["import InlineSearch from '@/components/InlineSearch';"],
    metaTitle: 'Learning Management System (LMS) for Growing Teams | BEG',
    metaDesc: 'Still training with sign-in sheets and scattered videos? BEG resells and configures isolved Learn & Grow so you assign, track, and prove training, nationwide.',
    url, faqs, schemaExtra: '',
    eyebrow: 'Learning Management System · Powered by isolved',
    title: 'Still training your team with sign-in sheets, scattered videos, and hope?',
    description: 'When training lives in binders, inboxes, and one-off videos, people fall behind, compliance lapses, and you cannot prove who completed what. isolved Learn & Grow, resold and configured by BEG, puts every course, assignment, and completion record in one system. Train faster, stay compliant, and prove it, in all 50 states, without adding software to manage.',
    heroStats: [
      { value: 'All 50', label: 'States served, remote nationwide' },
      { value: 'One system', label: 'Courses, assignments, and records in one place' },
      { value: 'isolved', label: 'Learn & Grow, resold and configured by BEG' },
    ],
    sections,
  });
}

// ---- supporting: bespoke section helpers -----------------------------------
function sectionText(eyebrow, h2, paras, soft) {
  const body = paras.map(p => `            <p className="reveal" style={{ fontSize: '1.02rem', lineHeight: '1.75', color: '#444444', maxWidth: '680px', margin: '1.1rem auto 0' }}>${amp(p)}</p>`).join('\n');
  return `        <section className="section${soft ? ' section--soft' : ''}">
          <div className="container" style={{ maxWidth: '760px' }}>
            <div className="head center reveal">
              <p className="eyebrow">${amp(eyebrow)}</p>
              <h2>${amp(h2)}</h2>
            </div>
${body}
          </div>
        </section>`;
}

function tierTable() {
  const tiers = [['1 to 24','$3.00'],['25 to 49','$2.80'],['50 to 99','$2.60'],['100 to 249','$2.40'],['250 to 499','$2.20'],['500 to 999','$2.00'],['1,000 to 1,499','$1.90'],['1,500 to 2,499','$1.70'],['2,500 or more','$1.50']];
  const rows = tiers.map(([r, p]) => `                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee' }}>{'${r}'}</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 700, textAlign: 'right' }}>{'${p}'}</td>
                </tr>`).join('\n');
  return `        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '640px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Volume Pricing</p>
              <h2>Per-learner pricing that drops as you grow</h2>
            </div>
            <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ffffff' }}>
                    <th style={{ padding: '0.7rem 1rem', textAlign: 'left' }}>Employees on the platform</th>
                    <th style={{ padding: '0.7rem 1rem', textAlign: 'right' }}>Per employee / month</th>
                  </tr>
                </thead>
                <tbody>
${rows}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.85rem', color: '#888888', marginTop: '1rem', textAlign: 'center', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
              isolved Learn &amp; Grow is added to your isolved HCM platform rather than sold on its own. Your exact number depends on headcount and configuration. Get it on screen in about 90 seconds, no call required.
            </p>
          </div>
        </section>`;
}

// ---- supporting page builders ----------------------------------------------
function genLearnGrow() {
  const slug = 'isolved-learn-grow'; const url = `${CANON}/${slug}`;
  const faqs = [
    ['What is isolved Learn & Grow?', 'isolved Learn & Grow is the learning management system built into the isolved platform. It hosts training courses, lets you upload your own content, assigns training by role, and tracks completion, with social learning and gamification built in.'],
    ['Does BEG or isolved build it?', 'isolved builds and maintains Learn & Grow. BEG resells, configures, implements, and supports it so it fits your roles, courses, and workflow from day one.'],
    ['Can we upload our own courses?', 'Yes. Alongside the isolved course library, you can upload your own videos, documents, slide decks, and quizzes.'],
    ['What does it cost?', 'It is bundled into the Grow tier of isolved HCM at no separate module charge. Your total is the Grow tier per-employee rate, which starts at $45 per employee per month and includes the full talent suite. Get an instant estimate on screen in about 90 seconds.'],
  ];
  const sections = [
    featureCards('The Platform', 'What isolved Learn & Grow does', [
      { heading: 'Course library', body: 'A ready-made library of training courses you can assign right away, from compliance to professional development.' },
      { heading: 'Upload your own content', body: 'Add your own videos, documents, slide decks, and quizzes so your specific training lives in the same system.' },
      { heading: 'Social learning and gamification', body: 'Keep learners engaged with social learning and gamification built into the platform, not bolted on.' },
      { heading: 'Assignments and reminders', body: 'Assign training by role, location, or team, with due dates, renewals, and automatic reminders.' },
      { heading: 'Completion tracking and reporting', body: 'See who completed, who passed, and who is due to renew in one dashboard, ready for any audit.' },
      { heading: 'Mobile and connected to HR', body: 'Learners train from any device, and records connect to onboarding, HR, and payroll inside isolved.' },
    ], true),
    steps('How BEG Sets It Up', 'From license to live training in three steps', [
      { num: '01', title: 'BEG configures it to your roles and courses', body: 'We build your required courses, renewal schedules, and assignment rules around how your team actually trains.' },
      { num: '02', title: 'Load the library and your own content', body: 'Use the isolved course library and upload your own material, then assign it by role, location, or team.' },
      { num: '03', title: 'BEG supports it year-round', body: 'When you add a course, a location, or a new requirement, BEG is who you call. Not a ticket queue.' },
    ]),
    sourcesLine([ISOLVED_LG, LMS_WIKI], true),
    midCta('Ready?', 'See your isolved Learn & Grow price before you talk to anyone', true),
    faqBlock('isolved Learn & Grow, answered'),
    hubBackLink(),
  ].join('\n');
  return pageFile({ fn: 'IsolvedLearnGrowPage', slug, imports: [],
    metaTitle: 'isolved Learn & Grow | LMS Resold and Configured by BEG',
    metaDesc: 'Inside isolved Learn & Grow, the learning management system BEG resells, configures, and supports. Course library, content upload, tracking, and reporting.',
    url, faqs, schemaExtra: [articleSchema('Inside isolved Learn & Grow', 'What the isolved Learn & Grow learning management system does and how BEG configures it.', url), breadcrumbSchema('isolved Learn & Grow', url), productSchema(url)].join('\n'),
    eyebrow: 'Learning Management · The Platform', title: 'Inside isolved Learn & Grow',
    description: 'isolved Learn & Grow is the learning management system built into the isolved platform. BEG resells, configures, and supports it so your team can host courses, upload your own content, assign training by role, and track every completion in one place, nationwide.',
    heroStats: [ { value: 'One platform', label: 'Courses, tracking, and reporting together' }, { value: 'Your content', label: 'Upload your own training too' }, { value: 'isolved', label: 'Built in, configured by BEG' } ], sections });
}

function genVsDiy() {
  const slug = 'lms-vs-diy-training'; const url = `${CANON}/${slug}`;
  const faqs = [
    ['What is wrong with tracking training in spreadsheets?', 'Spreadsheets and sign-in sheets record attendance, not completion, scores, or renewals. They do not remind anyone, do not prove compliance, and break down the moment you have more than a handful of people or requirements.'],
    ['When do teams outgrow DIY training?', 'Usually when compliance requirements, turnover, or multiple locations make manual tracking too slow and too risky. If you cannot answer who is due to renew this month in a few seconds, you have outgrown it.'],
    ['What does an LMS change?', 'An LMS like isolved Learn & Grow assigns training by role, tracks completion automatically, reminds people, and produces an audit-ready record on demand.'],
    ['What does it cost?', 'isolved Learn & Grow is included in the Grow tier of isolved HCM, at no separate module charge, starting at $45 per employee per month. Get an instant estimate on screen in about 90 seconds.'],
  ];
  const sections = [
    statCards('Where DIY Breaks Down', 'Do-it-yourself training works until it quietly stops working', [
      { stat: 'No proof', label: 'Attendance is not completion', sub: 'A sign-in sheet says someone was in the room. It does not say they finished, passed, or understood, which is what an auditor or client actually asks for.' },
      { stat: 'No reminders', label: 'Renewals slip through', sub: 'Certifications and required refreshers have expiration dates. A spreadsheet will not warn you before one lapses, so you find out when it is already a problem.' },
      { stat: 'No scale', label: 'It falls apart with volume', sub: 'One location and ten people is manageable by hand. Multiple sites, turnover, and layered requirements are not. The manual approach breaks exactly when the stakes rise.' },
    ], true),
    solveCards('What An LMS Changes', 'What isolved Learn & Grow does that a folder cannot', [
      { title: 'Assigns automatically', body: 'Required training is assigned by role the moment someone is hired, with due dates and reminders, so nothing depends on memory.' },
      { title: 'Tracks and proves', body: 'Completion, scores, and renewal dates are tracked in one dashboard, so proving compliance is a report, not a scramble.' },
      { title: 'Scales with you', body: 'Add a location, a requirement, or fifty new hires, and the system handles it. The manual version cannot.' },
    ]),
    steps('Making The Switch', 'From binders to one tracked system in three steps', [
      { num: '01', title: 'BEG configures Learn & Grow to your requirements', body: 'Your courses, roles, and renewal schedules get built in, so the system matches how you already train.' },
      { num: '02', title: 'Move your content in', body: 'Upload your existing training and add from the isolved course library, then assign it by role.' },
      { num: '03', title: 'Track everything going forward', body: 'Completions and renewals track automatically from day one, and BEG supports it as you grow.' },
    ], true),
    sourcesLine([ATD_SRC, LMS_WIKI]),
    midCta('Ready?', 'See your isolved Learn & Grow price before you talk to anyone', false),
    faqBlock('LMS vs DIY training, answered'),
    hubBackLink(),
  ].join('\n');
  return pageFile({ fn: 'LmsVsDiyTrainingPage', slug, imports: [],
    metaTitle: 'LMS vs DIY Training | When Spreadsheets Stop Working | BEG',
    metaDesc: 'Spreadsheets and binders track attendance, not compliance. See where DIY training breaks down and what an LMS like isolved Learn & Grow changes.',
    url, faqs, schemaExtra: [articleSchema('LMS vs DIY training', 'Where do-it-yourself training in spreadsheets and binders breaks down, and what an LMS changes.', url), breadcrumbSchema('LMS vs DIY Training', url)].join('\n'),
    eyebrow: 'Learning Management · Compare', title: 'LMS vs DIY training: spreadsheets, binders, and free videos',
    description: 'Tracking training in spreadsheets and binders works until it does not. Here is where do-it-yourself training breaks down as your team grows, and what an LMS like isolved Learn & Grow changes.',
    heroStats: [ { value: 'One system', label: 'Instead of five tools and a binder' }, { value: 'Audit-ready', label: 'Proof on demand, not a scramble' }, { value: '90 sec', label: 'To your instant estimate' } ], sections });
}

function genCompliance() {
  const slug = 'lms-for-compliance-training'; const url = `${CANON}/${slug}`;
  const faqs = [
    ['What compliance training can we run?', 'Safety and OSHA, harassment prevention, HIPAA, data security, and industry-specific requirements, plus any of your own required courses uploaded into the system.'],
    ['How does it prove compliance?', 'Required courses are assigned by role with due dates and renewals. Completions and pass rates are tracked, so you can produce an audit-ready record on demand.'],
    ['Can we upload our own required courses?', 'Yes. Alongside the isolved course library, upload your own videos, documents, and quizzes so your specific requirements live in the same system.'],
    ['What does it cost?', 'isolved Learn & Grow is included in the Grow tier of isolved HCM, at no separate module charge, starting at $45 per employee per month. Get an instant estimate on screen in about 90 seconds.'],
  ];
  const sections = [
    statCards('The Compliance Problem', 'Required training is only useful if you can prove it', [
      { stat: 'Deadlines', label: 'Requirements have renewal dates', sub: 'Safety, harassment, and industry certifications expire. Without automatic reminders, a lapse is discovered after it has already become a liability.' },
      { stat: 'Turnover', label: 'Every new hire resets the clock', sub: 'New employees need required training before they are fully on the job. Doing that by hand for every hire is slow and easy to skip.' },
      { stat: 'Audits', label: 'Someone will ask for proof', sub: 'Regulators, insurers, and clients ask who completed what and when. A binder makes that answer slow. A dashboard makes it instant.' },
    ], true),
    solveCards('What This Solves', 'Compliance training that assigns, tracks, and proves itself', [
      { title: 'Assign by role automatically', body: 'Required courses are assigned the moment someone is hired, by role, with due dates and reminders built in.' },
      { title: 'Track renewals before they lapse', body: 'Expiration dates and refreshers are tracked, and reminders go out ahead of time, so nothing quietly expires.' },
      { title: 'Produce an audit-ready record', body: 'Completions, pass rates, and dates live in one dashboard, so an audit or client request becomes a report you pull.' },
    ]),
    steps('How It Works', 'From required to proven in three steps', [
      { num: '01', title: 'BEG builds your requirements in', body: 'Your required courses, roles, and renewal schedules get configured so the right training reaches the right people.' },
      { num: '02', title: 'Assign and remind automatically', body: 'Learn & Grow assigns by role, sets due dates, and reminds people, so completion does not depend on chasing.' },
      { num: '03', title: 'Prove it on demand', body: 'Pull an audit-ready report of who completed, passed, and is current whenever anyone asks.' },
    ], true),
    sourcesLine([{ href: 'https://www.osha.gov/training', label: 'OSHA worker training' }, { href: 'https://www.hhs.gov/hipaa/for-professionals/training/index.html', label: 'HHS, HIPAA training' }, { href: 'https://www.eeoc.gov/training-institute/harassment-prevention-and-respectful-workplaces-training', label: 'EEOC harassment-prevention training' }]),
    midCta('Ready?', 'See your isolved Learn & Grow price before you talk to anyone', false),
    faqBlock('Compliance training, answered'),
    hubBackLink(),
  ].join('\n');
  return pageFile({ fn: 'LmsForComplianceTrainingPage', slug, imports: [],
    metaTitle: 'LMS for Compliance Training | Assign, Track, Prove | BEG',
    metaDesc: 'Assign, track, and prove safety, harassment, HIPAA, and industry compliance training with isolved Learn & Grow, configured by BEG. Audit-ready records on demand.',
    url, faqs, schemaExtra: [articleSchema('LMS for compliance training', 'Assign, track, and prove required compliance training with isolved Learn & Grow.', url), breadcrumbSchema('LMS for Compliance Training', url)].join('\n'),
    eyebrow: 'Learning Management · Compliance Training', title: 'Assign, track, and prove compliance training without the binder',
    description: 'Safety, harassment, HIPAA, and industry-specific training cannot lapse, and a sign-in sheet is not proof. isolved Learn & Grow, configured by BEG, assigns required courses by role, tracks completions and renewals, and gives you an audit-ready record on demand.',
    heroStats: [ { value: 'Assigned', label: 'By role, with due dates and reminders' }, { value: 'Tracked', label: 'Completions and renewals, automatically' }, { value: 'Proven', label: 'Audit-ready record on demand' } ], sections });
}

function genOnboarding() {
  const slug = 'employee-onboarding-lms'; const url = `${CANON}/${slug}`;
  const faqs = [
    ['How does an LMS help onboarding?', 'It gives every new hire the same structured path of training and paperwork, delivered on any device, so they get productive faster and nothing gets skipped.'],
    ['How long should employee onboarding take?', 'Most structured onboarding runs across the first 30 to 90 days, with the core training front-loaded into the first week. An LMS delivers that path consistently so every new hire gets the same start and reaches productivity faster.'],
    ['Can we use our own onboarding content?', 'Yes. Upload your own videos, documents, and quizzes alongside the isolved course library, and assign them automatically to new hires.'],
    ['Does it connect to payroll and HR?', 'Yes. Because Learn & Grow is part of the isolved platform, onboarding connects to HR and payroll, so a new hire is not re-keyed from one system to the next.'],
    ['What does it cost?', 'isolved Learn & Grow is included in the Grow tier of isolved HCM, at no separate module charge, starting at $45 per employee per month. Get an instant estimate on screen in about 90 seconds.'],
  ];
  const sections = [
    statCards('The Onboarding Problem', 'A rough first week is the fastest way to lose a new hire', [
      { stat: 'Week one', label: 'Decides whether they stay', sub: 'New hires form their opinion of the job fast. A scattered, inconsistent first week tells them the rest will be the same.' },
      { stat: 'Inconsistent', label: 'Every manager onboards differently', sub: 'When onboarding lives in one manager memory, no two new hires get the same start, and required steps get skipped.' },
      { stat: 'Re-keyed', label: 'The same data entered again and again', sub: 'When onboarding is disconnected from HR and payroll, someone re-enters the same information into every system by hand.' },
    ], true),
    solveCards('What This Solves', 'Onboarding that is consistent, fast, and connected', [
      { title: 'A consistent path for every hire', body: 'Every new employee runs the same onboarding sequence of training and paperwork, so nothing depends on who is managing them.' },
      { title: 'Productive in days', body: 'Structured training, including your own content, gets new hires up to speed faster than shadowing until it sticks.' },
      { title: 'Connected to HR and payroll', body: 'Because it lives in isolved, onboarding hands off into HR and payroll instead of being re-entered by hand.' },
    ]),
    steps('How It Works', 'From offer accepted to productive in three steps', [
      { num: '01', title: 'BEG builds your onboarding path', body: 'Your training, forms, and required courses get configured into one consistent sequence for new hires.' },
      { num: '02', title: 'New hires run it on any device', body: 'The moment someone is hired, their onboarding assigns automatically and they complete it from anywhere.' },
      { num: '03', title: 'Records flow into HR and payroll', body: 'Completion and employee data connect to the rest of isolved, so nothing gets re-keyed.' },
    ], true),
    sourcesLine([ATD_SRC, LMS_WIKI]),
    midCta('Ready?', 'See your isolved Learn & Grow price before you talk to anyone', false),
    faqBlock('Employee onboarding, answered'),
    hubBackLink(),
  ].join('\n');
  return pageFile({ fn: 'EmployeeOnboardingLmsPage', slug, imports: [],
    metaTitle: 'Employee Onboarding LMS | Faster, Consistent Onboarding | BEG',
    metaDesc: 'Get new hires productive in days with isolved Learn & Grow, configured by BEG. A consistent onboarding path connected to HR and payroll, nationwide.',
    url, faqs, schemaExtra: [articleSchema('Employee onboarding LMS', 'Get new hires productive faster with a consistent onboarding path in isolved Learn & Grow.', url), breadcrumbSchema('Employee Onboarding LMS', url)].join('\n'),
    eyebrow: 'Learning Management · Onboarding', title: 'Get new hires productive in days, not weeks',
    description: 'A strong first week decides whether a new hire stays. isolved Learn & Grow, configured by BEG, gives every new hire a consistent onboarding path, including your own content, and connects it to HR and payroll so nothing gets re-keyed.',
    heroStats: [ { value: 'Consistent', label: 'The same strong start for every hire' }, { value: 'Faster', label: 'Productive in days, not weeks' }, { value: 'Connected', label: 'Into HR and payroll, no re-keying' } ], sections });
}


// ---- external authority links (high-DA, verified resolving) + schema -------
function extLinks(links) {
  return links.map(l => `<a href="${l.href}" target="_blank" rel="noopener noreferrer">${amp(l.label)}</a>`).join(', ');
}
function sourcesLine(links, soft) {
  if (!links || !links.length) return '';
  return `        <section className="section${soft ? ' section--soft' : ''}">
          <div className="container" style={{ maxWidth: '760px' }}>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', textAlign: 'center' }}>
              Further reading and sources: ${extLinks(links)}.
            </p>
          </div>
        </section>`;
}
const LMS_WIKI = { href: 'https://en.wikipedia.org/wiki/Learning_management_system', label: 'Learning management system, overview' };
const ATD_SRC = { href: 'https://www.td.org/content/press-release/atd-research-spending-on-employee-training-remains-strong', label: 'ATD, employee training spend research' };
const ISOLVED_LG = { href: 'https://www.isolvedhcm.com/talent-management/learning-management-system', label: 'isolved Learn & Grow, product' };
const INDUSTRY_AUTHORITY = {
  healthcare: { href: 'https://www.hhs.gov/hipaa/for-professionals/training/index.html', label: 'HHS, HIPAA workforce training' },
  construction: { href: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.503', label: 'OSHA 1926.503 training requirements' },
  manufacturing: { href: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.132', label: 'OSHA 1910.132 training requirements' },
  'multi-unit-restaurant': { href: 'https://www.fda.gov/food/retail-food-protection/fda-food-code', label: 'FDA Food Code' },
  trucking: { href: 'https://www.fmcsa.dot.gov/registration/commercial-drivers-license/entry-level-driver-training-eldt', label: 'FMCSA Entry-Level Driver Training' },
  childcare: { href: 'https://www.redcross.org/take-a-class/cpr/cpr-training/cpr-certification', label: 'American Red Cross CPR certification' },
  'senior-care': { href: 'https://www.osha.gov/training', label: 'OSHA worker training' },
  'home-health': { href: 'https://www.law.cornell.edu/cfr/text/42/484.80', label: '42 CFR 484.80, home health aide training' },
  legal: { href: 'https://www.americanbar.org/groups/departments_offices/abacle/', label: 'ABA continuing legal education' },
  finance: { href: 'https://www.finra.org/registration-exams-ce/continuing-education', label: 'FINRA continuing education' },
  cannabis: { href: 'https://cannabis.ny.gov/workforce', label: 'NY cannabis workforce training' },
  security: { href: 'https://dos.ny.gov/security-guard-training-requirements', label: 'NY security guard training requirements' },
};
function industryAuthority(slug) { return [INDUSTRY_AUTHORITY[slug] || ATD_SRC, LMS_WIKI]; }
function productSchema(url) {
  return `      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'isolved Learn & Grow',
            category: 'Learning Management System',
            brand: { '@type': 'Brand', name: 'isolved' },
            description: 'Learning management system resold, configured, implemented, and supported by Business Executive Group.',
            url: '${url}',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: '45.00',
              description: 'Included in the Grow tier of the isolved HCM platform at no separate module charge, starting at $45 per employee per month.',
              seller: { '@type': 'Organization', name: 'Business Executive Group' },
            },
          }),
        }}
      />`;
}

// ---- write + emit ----------------------------------------------------------
function write(rel, content) {
  // Hard brand rule: no em-dashes or en-dashes anywhere in the silo.
  content = content.replace(/[—–]/g, '-');
  const filePath = path.join(BASE, rel);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('  page ' + path.relative(path.join(__dirname, '..'), filePath));
}

console.log('=== LMS hub ===');
write('page.tsx', genHub());

console.log('=== LMS supporting pages ===');
write('isolved-learn-grow/page.tsx', genLearnGrow());
write('lms-vs-diy-training/page.tsx', genVsDiy());
write('lms-for-compliance-training/page.tsx', genCompliance());
write('employee-onboarding-lms/page.tsx', genOnboarding());

console.log('=== LMS industry cuts (' + Object.keys(LMS_INDUSTRIES).length + ') ===');
for (const [slug, d] of Object.entries(LMS_INDUSTRIES)) {
  write(slug + '/page.tsx', genIndustry(slug, d));
}
console.log('Done.');
