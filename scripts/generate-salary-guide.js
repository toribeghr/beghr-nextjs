#!/usr/bin/env node
// Generates the Salary & Hiring Guide: hub + per-industry salary pages.
// Run: node scripts/generate-salary-guide.js
const fs = require('fs');
const path = require('path');
const SAL = require('./data/salaries.js');
const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'src', 'app', 'resources', 'salary-guide');
const SVC = path.join(ROOT, 'src', 'app', 'services', 'job-placement');
const CAL = "getCalendlyLink('salary-guide')";

function cap(s) { return s.replace(/(^|[^a-zA-Z0-9])([a-z])/g, (m, a, b) => a + b.toUpperCase()).replace(/[^a-zA-Z0-9]/g, ''); }
function money(k) { return '$' + k + 'k'; }
function mid(r) { return Math.round((r.low + r.high) / 2); }
function roleHref(ind, slug) {
  return fs.existsSync(path.join(SVC, ind, slug, 'page.tsx'))
    ? `/services/job-placement/${ind}/${slug}`
    : `/services/job-placement/${ind}`;
}
function write(p, c) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, c, 'utf8'); }

function kt(b1, b2, b3) {
  return `          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>${b1}</li>
              <li>${b2}</li>
              <li>${b3}</li>
            </ul>
          </aside>`;
}

function salaryRows(ind, roles) {
  return roles.map(r => `            <tr>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee' }}><Link href="${roleHref(ind, r.slug)}" style={{ color: '#000000', fontWeight: 600 }}>${r.name}</Link></td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap' }}>${money(r.low)} - ${money(r.high)}</td>
              <td style={{ padding: '0.7rem 0.5rem', borderBottom: '1px solid #eee', whiteSpace: 'nowrap', color: '#666' }}>${money(mid(r))}</td>
            </tr>`).join('\n');
}

function methodology() {
  return `          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Methodology and sources</h2>
          <p>These are indicative 2026 national ranges, not job offers. Actual compensation varies by metro, years of experience, certifications, company size, and total-comp structure (base, bonus, commission, and equity). Ranges were compiled from public labor data and published market salary guides, including the U.S. Bureau of Labor Statistics, Robert Half, BCG, Glassdoor, ZipRecruiter, and Payscale. For a market read on a specific role and location, book a call and we will share what we are seeing in live searches.</p>`;
}

function leadForm() {
  return `          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Get the printable guide</h2>
          <p style={{ marginBottom: '1.25rem' }}>Want the full BEG Salary and Hiring Guide as a clean, printable PDF covering all 19 industries? Grab it here.</p>
          <LeadCaptureForm toolName={'Salary & Hiring Guide (PDF)'} toolDescription="The full 2026 guide across 19 industries, printable and ready to download." assetUrl="/assets/beg-salary-guide-2026.pdf" assetLabel="Get the PDF" calendlyLink={CALENDLY} />
`;
}

function ctaBlock() {
  return `          <div style={{ background: '#000000', color: '#ffffff', borderRadius: '8px', padding: '2rem', margin: '2.5rem 0 0', textAlign: 'center' }}>
            <h2 style={{ color: '#ffffff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem' }}>Hiring for one of these roles?</h2>
            <p style={{ color: '#cccccc', marginBottom: '1.25rem' }}>BEG fills permanent roles in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.</p>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>Book a 15-Minute Discovery Call</a>
          </div>`;
}

function indPage(ind, data) {
  const L = data.label, roles = data.roles;
  const lo = Math.min(...roles.map(r => r.low)), hi = Math.max(...roles.map(r => r.high));
  const url = `https://beghr.com/resources/salary-guide/${ind}`;
  const title = `${L} Salary Guide 2026 | BEG`.slice(0, 60);
  const desc = `${L} salary ranges for 2026, by role. Indicative national pay from public data, plus how to hire permanent ${L.toLowerCase()} talent in 23-35 days.`.slice(0, 155);
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: `What is the typical ${L.toLowerCase()} salary range in 2026?`, acceptedAnswer: { "@type": "Answer", text: `Across the roles in this guide, 2026 ${L.toLowerCase()} pay ranges from roughly ${money(lo)} to ${money(hi)} nationally, depending on role, experience, and metro.` } },
      { "@type": "Question", name: "Are these salary figures offers?", acceptedAnswer: { "@type": "Answer", text: "No. These are indicative national ranges compiled from public labor data and market salary guides. Actual pay varies by location, experience, and total-comp structure." } },
      { "@type": "Question", name: `How fast can BEG fill a ${L.toLowerCase()} role?`, acceptedAnswer: { "@type": "Answer", text: "On average 23-35 days from discovery call to placed hire, at roughly 50% less than contingency, with a 45-day replacement guarantee." } },
    ],
  };
  const art = { "@context": "https://schema.org", "@type": "Article", headline: `${L} Salary Guide 2026`, datePublished: "2026-06-25", dateModified: "2026-06-28", author: { "@type": "Person", name: "Anthony Moretti", jobTitle: "VP of Sales", url: "https://www.linkedin.com/in/theanthonymoretti" }, publisher: { "@type": "Organization", name: "Business Executive Group", logo: { "@type": "ImageObject", url: "https://beghr.com/assets/beg-header-image.png" } }, mainEntityOfPage: url };
  return `import { Metadata } from 'next';
import Link from 'next/link';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: '${title}',
  description: '${desc}',
  alternates: { canonical: '${url}' },
  openGraph: { title: '${title}', description: '${desc}', url: '${url}', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'article' },
  twitter: { card: 'summary_large_image', title: '${title}', description: '${desc}', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = ${CAL};

export default function SalaryGuide${cap(ind)}Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(JSON.stringify(art))} }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(JSON.stringify(faq))} }} />
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Salary Guide &middot; ${L}</p>
          <h1>${L} Salary Guide (2026)</h1>
          <p className="lede" style={{ margin: '18px 0 20px', maxWidth: '720px' }}>Typical 2026 pay ranges for ${L.toLowerCase()} roles, compiled from public labor data and market salary guides. Use them to benchmark an offer, then fill the seat in 23-35 days.</p>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Updated:</strong> June 2026</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '840px', lineHeight: '1.8', fontSize: '1.05rem' }}>
${kt(
    L + ' pay in 2026 spans roughly ' + money(lo) + ' to ' + money(hi) + ' nationally, depending on role, experience, and metro.',
    'These are indicative ranges from public data, not offers. Total comp shifts with bonus, commission, and equity.',
    'BEG fills permanent ' + L.toLowerCase() + ' roles in 23-35 days at roughly 50% less than contingency, with a 45-day guarantee.'
  )}
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '0 0 1rem', fontSize: '0.97rem' }}>
            <thead>
              <tr style={{ background: '#000000', color: '#ECAC60' }}>
                <th style={{ padding: '0.7rem 0.5rem', textAlign: 'left' }}>Role</th>
                <th style={{ padding: '0.7rem 0.5rem', textAlign: 'left' }}>Typical 2026 range</th>
                <th style={{ padding: '0.7rem 0.5rem', textAlign: 'left' }}>Midpoint</th>
              </tr>
            </thead>
            <tbody>
${salaryRows(ind, roles)}
            </tbody>
          </table>
          <p style={{ fontSize: '0.85rem', color: '#888' }}>Ranges are national and indicative. Click any role to see how we place it.</p>
${methodology()}
${leadForm()}
${ctaBlock()}
          <p style={{ marginTop: '2rem' }}>See the full <Link href="/resources/salary-guide" style={{ color: '#000000', fontWeight: 600 }}>BEG Salary and Hiring Guide</Link> or our <Link href="/services/job-placement/${ind}" style={{ color: '#000000', fontWeight: 600 }}>${L.toLowerCase()} placement service</Link>.</p>
        </div>
      </section>
    </article>
  );
}
`;
}

function hubPage() {
  const inds = Object.keys(SAL);
  const url = 'https://beghr.com/resources/salary-guide';
  const title = 'Salary & Hiring Guide 2026 | BEG';
  const desc = 'Free 2026 salary ranges across 19 industries, from public labor data. Benchmark pay, then fill permanent roles in 23-35 days at roughly 50% less.'.slice(0, 155);
  const cards = inds.map(ind => {
    const d = SAL[ind];
    const lo = Math.min(...d.roles.map(r => r.low)), hi = Math.max(...d.roles.map(r => r.high));
    return `            <Link href="/resources/salary-guide/${ind}" style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem', textDecoration: 'none', color: '#000000' }}>
              <strong style={{ display: 'block', fontSize: '1.02rem', marginBottom: '0.3rem' }}>${d.label}</strong>
              <span style={{ fontSize: '0.88rem', color: '#666' }}>${d.roles.length} roles &middot; ${money(lo)} - ${money(hi)}</span>
            </Link>`;
  }).join('\n');
  const art = { "@context": "https://schema.org", "@type": "Article", headline: "BEG Salary and Hiring Guide 2026", datePublished: "2026-06-25", dateModified: "2026-06-28", author: { "@type": "Person", name: "Anthony Moretti", jobTitle: "VP of Sales", url: "https://www.linkedin.com/in/theanthonymoretti" }, publisher: { "@type": "Organization", name: "Business Executive Group", logo: { "@type": "ImageObject", url: "https://beghr.com/assets/beg-header-image.png" } }, mainEntityOfPage: url };
  return `import { Metadata } from 'next';
import Link from 'next/link';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: '${title}',
  description: '${desc}',
  alternates: { canonical: '${url}' },
  openGraph: { title: '${title}', description: '${desc}', url: '${url}', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'article' },
  twitter: { card: 'summary_large_image', title: '${title}', description: '${desc}', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = ${CAL};

export default function SalaryGuideHubPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(JSON.stringify(art))} }} />
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Resources &middot; Salary Guide</p>
          <h1>BEG Salary &amp; Hiring Guide (2026)</h1>
          <p className="lede" style={{ margin: '18px 0 20px', maxWidth: '720px' }}>Indicative 2026 pay ranges across 19 industries, built from public labor data and market salary guides. Benchmark a role, then fill the seat in 23-35 days at roughly 50% less than contingency.</p>
          <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
            <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
            <span><strong>Updated:</strong> June 2026</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '900px', lineHeight: '1.8', fontSize: '1.05rem' }}>
${kt(
    'Salary ranges across 19 industries, from public labor data, refreshed for 2026.',
    'Ranges are indicative and national. Total comp shifts with bonus, commission, equity, and metro.',
    'When a number tells you the seat is worth filling, BEG fills it in 23-35 days at roughly 50% less than contingency.'
  )}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem', margin: '0 0 2rem' }}>
${cards}
          </div>
${methodology()}
${leadForm()}
${ctaBlock()}
        </div>
      </section>
    </article>
  );
}
`;
}

let n = 0;
write(path.join(OUT, 'page.tsx'), hubPage());
console.log('hub written');
for (const ind of Object.keys(SAL)) { write(path.join(OUT, ind, 'page.tsx'), indPage(ind, SAL[ind])); n++; }
console.log('industry salary pages: ' + n);
