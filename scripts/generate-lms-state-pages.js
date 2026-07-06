#!/usr/bin/env node
/**
 * Generates 50 LMS state pages under src/app/services/lms-learning-management/[state]/
 * Data: src/lib/lmsStateData.json (verified state training-law dataset, .gov cited).
 * Anchor: state-mandated sexual-harassment-prevention training where it exists, federal
 * OSHA/EEOC baseline where it does not. isolved lowercase; no em-dashes (normalized on write).
 * Run: node scripts/generate-lms-state-pages.js
 */
const fs = require('fs');
const path = require('path');
const HUB = 'lms-learning-management';
const BASE = path.join(__dirname, '..', 'src', 'app', 'services', HUB);
const CANON = 'https://www.beghr.com/services/' + HUB;
const DATA = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'lib', 'lmsStateData.json'), 'utf8'));

function esc(s){return String(s).replace(/`/g,'\\`').replace(/\$\{/g,'\\${').replace(/'/g,'’');}
function amp(s){return String(s).replace(/&(?!amp;|apos;|larr;|rarr;)/g,'&amp;').replace(/'/g,'’');}
const cap = s => s.split('-').map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join('');
const WIKI = {href:'https://en.wikipedia.org/wiki/Learning_management_system',label:'Learning management system, overview'};

function extLinks(links){return links.filter(Boolean).map(l=>`<a href="${l.href}" target="_blank" rel="noopener noreferrer">${amp(l.label)}</a>`).join(', ');}

function page(slug, d){
  const name = d.n;
  const url = `${CANON}/${slug}`;
  const fn = 'LmsState'+cap(slug)+'Page';
  const mandate = d.harass === true;
  const nuanced = d.harass === null;
  const status = mandate ? 'Required statewide' : nuanced ? 'Partial, verify current status' : 'No statewide mandate today';
  const title = mandate
    ? `${name} requires harassment-prevention training. Track it and prove it in one system.`
    : nuanced
    ? `${name} training rules are nuanced. One system keeps you covered and audit-ready.`
    : `Keep your ${name} team trained and audit-ready, in one system.`;
  const description = mandate
    ? `${name} mandates sexual-harassment-prevention training, and a sign-in sheet is not proof. isolved Learn & Grow, configured by BEG, assigns required courses by role, tracks completions and renewals, and gives you an audit-ready record on demand, for ${name} teams and all 50 states.`
    : `Federal OSHA safety and EEOC anti-harassment training still apply to ${name} employers, and multi-state teams add more. isolved Learn & Grow, configured by BEG, puts every required course, assignment, and completion record in one system so your ${name} team stays trained and audit-ready, nationwide.`;

  const heroStats = mandate
    ? [{value:'Required',label:`Harassment-prevention training in ${name}`},{value:'Tracked',label:'Completions and renewals, automatically'},{value:'90 sec',label:'To your instant estimate'}]
    : [{value:'One system',label:`Training and records for ${name} teams`},{value:'Audit-ready',label:'Proof on demand, not a scramble'},{value:'All 50',label:'States served, remote nationwide'}];

  const rows = [];
  rows.push(['Sexual-harassment-prevention training', status]);
  rows.push(['What the law says', d.harassDetail + (d.harassLaw ? ` (${d.harassLaw})` : '')]);
  if (d.other) rows.push(['Also worth knowing', d.other]);
  rows.push(['Federal baseline', 'OSHA safety training and EEOC anti-harassment guidance apply to employers in every state.']);
  const rowsJsx = rows.map(([k,v])=>`                <tr>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', fontWeight: 600, width: '34%', verticalAlign: 'top' }}>${amp(k)}</td>
                  <td style={{ padding: '0.7rem 1rem', borderBottom: '1px solid #eee', color: '#444444' }}>${amp(v)}</td>
                </tr>`).join('\n');

  const faqs = [
    [`Does ${name} require sexual harassment training?`, d.harassDetail],
    [`How do we prove training compliance in ${name}?`, 'isolved Learn & Grow assigns required courses by role, tracks completion and renewal dates, and produces an audit-ready record on demand, so proving compliance is a report you pull, not a scramble.'],
    ['Can we upload our own training content?', 'Yes. Alongside the isolved course library, you can upload your own videos, documents, and quizzes, so state-specific and company-specific training lives in one system.'],
    ['What does it cost?', 'isolved Learn & Grow is bundled into the Grow tier of isolved HCM at no separate module charge, starting at $45 per employee per month. Answer a few questions and get an instant estimate on screen in about 90 seconds.'],
    [`Do you serve employers in ${name}?`, `Yes. BEG configures and supports isolved Learn & Grow for ${name} employers, delivered remotely, and for teams across all 50 states.`],
  ];
  const faqsConst = `const FAQS: [string, string][] = [\n`+faqs.map(([q,a])=>`  ['${esc(q)}', '${esc(a)}'],`).join('\n')+`\n];`;

  const sources = extLinks([{href:d.cite,label:mandate?`${name} harassment-training guidance`:`EEOC and ${name} guidance`}, d.otherCite?{href:d.otherCite,label:d.other?`${name} safety training`:''}:null, WIKI].filter(x=>x&&x.label));

  return `import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: '${esc(name)} Employee Training Compliance | LMS by BEG',
  description: '${esc(('Employee training and harassment-prevention compliance for '+name+' employers. isolved Learn & Grow, configured by BEG: assign, track, and prove training. Instant pricing.').slice(0,155))}',
  alternates: { canonical: '${url}' },
  openGraph: { title: '${esc(name)} Employee Training Compliance | LMS by BEG', description: '${esc(('Assign, track, and prove employee training for '+name+' employers with isolved Learn & Grow, configured by BEG.').slice(0,155))}', url: '${url}', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: '${esc(name)} Employee Training Compliance | LMS by BEG', description: '${esc(('Assign, track, and prove employee training for '+name+' employers with isolved Learn & Grow.').slice(0,155))}', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('lms-${slug}');

${faqsConst}

export default function ${fn}() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'Article', headline:'${esc(title)}', description:'${esc(('Employee training compliance for '+name+' employers with isolved Learn & Grow.'))}', author:{ '@type':'Organization', name:'Business Executive Group', url:'https://www.beghr.com' }, publisher:{ '@type':'Organization', name:'Business Executive Group' }, datePublished:'2026-07-06', mainEntityOfPage:'${url}' }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement:[ { '@type':'ListItem', position:1, name:'Home', item:'https://www.beghr.com' }, { '@type':'ListItem', position:2, name:'Learning Management System', item:'${CANON}' }, { '@type':'ListItem', position:3, name:'${esc(name)}', item:'${url}' } ] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context':'https://schema.org','@type':'FAQPage', mainEntity: FAQS.map(([q,a]) => ({ '@type':'Question', name:q, acceptedAnswer:{ '@type':'Answer', text:a } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <ServicePage
        showHeroImage={false}
        eyebrow="Learning Management · ${amp(name)}"
        title="${esc(title)}"
        description="${esc(description)}"
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />}
        heroStats={[
${heroStats.map(s=>`          { value: '${esc(s.value)}', label: '${esc(s.label)}' },`).join('\n')}
        ]}
      >
        {/* STATE REQUIREMENTS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">${amp(name)} Training Requirements</p>
              <h2>Where employee-training compliance stands in ${amp(name)}</h2>
            </div>
            <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <tbody>
${rowsJsx}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1rem', textAlign: 'center' }}>Sources: ${sources}.</p>
            <p className="reveal" style={{ fontSize: '0.8rem', color: '#999999', marginTop: '0.5rem', textAlign: 'center' }}>This is general information, not legal advice. Confirm current requirements for your workforce.</p>
          </div>
        </section>

        {/* WHAT THIS SOLVES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '980px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How isolved Learn &amp; Grow Handles It</p>
              <h2>Assign, track, and prove ${amp(name)} training in one system</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                { title: 'Assign the right courses automatically', body: 'Required training, including harassment-prevention and safety, is assigned by role with due dates and reminders, so nothing depends on a manager remembering.' },
                { title: 'Track completions and renewals', body: 'Completion, pass rates, and renewal dates are tracked in one dashboard, and reminders go out before anything lapses.' },
                { title: 'Prove compliance on demand', body: 'An audit, insurer, or client request becomes a report you pull, not a scramble through binders and inboxes.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MID CTA */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '620px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Ready?</p>
              <h2>See your isolved Learn &amp; Grow price before you talk to anyone</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <PricingCta service="hcm-software" label="Get Instant Pricing" preselectModule="lms" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Employee training in ${amp(name)}, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <Link href="/services/${HUB}" style={{ color: '#ECAC60', fontWeight: 700 }}>&larr; Back to Learning Management System overview</Link>
            </p>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
`;
}

function write(slug, content){
  content = content.replace(/[—–]/g,'-');
  const fp = path.join(BASE, slug, 'page.tsx');
  fs.mkdirSync(path.dirname(fp), { recursive: true });
  fs.writeFileSync(fp, content, 'utf8');
}
let n=0;
for (const [slug, d] of Object.entries(DATA)) { write(slug, page(slug, d)); n++; }
console.log('Wrote ' + n + ' LMS state pages.');
