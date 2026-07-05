// Generates the 50 Managed Benefits state continuation ("mini-COBRA") pages
// from src/lib/benefitsStateData.json.
// Data source: statute-level state sources (state legislatures + departments of insurance),
// verified July 5, 2026. Each page renders only what was verified for that state.
// Pages branch on whether the state has a mini-COBRA law (exists) or not.
const fs = require('fs');
const path = require('path');

const DATA = JSON.parse(fs.readFileSync(path.join(__dirname, '../src/lib/benefitsStateData.json'), 'utf8'));
const ROOT = path.join(__dirname, '../src/app/services/managed-benefits');

const pretty = s => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
// escape for single-quoted JS string literals
const q = s => String(s == null ? '' : s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
// escape for raw JSX text nodes
const jsx = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');

function faqs(d) {
  const name = d.n;
  if (d.exists) {
    const dur = d.months
      ? `Up to ${d.months} months, subject to the state's early-termination rules such as non-payment of premium or becoming covered under another plan.`
      : `The maximum period is set by ${name} statute. See the state source linked on this page for the exact duration.`;
    return [
      [`Does ${name} have a mini-COBRA law?`,
       `Yes. ${name} has a state continuation, or mini-COBRA, law that lets employees of smaller companies keep group health coverage after a qualifying event, filling the gap below the federal COBRA threshold of 20 employees. ${d.size}`],
      [`How long does ${name} continuation coverage last?`, dur],
      [`Who is eligible to continue coverage in ${name}?`,
       d.who || `Eligibility follows the ${name} statute: generally an employee who loses coverage through a qualifying event, and covered dependents, subject to the state's conditions.`],
      [`Does ${name} mini-COBRA replace federal COBRA?`,
       `No. Federal COBRA applies to employers with 20 or more employees, and the ${name} law covers the smaller groups federal COBRA does not reach. A company is generally subject to one or the other based on size.`],
      [`Who handles the ${name} continuation notices and tracking?`,
       `The employer and insurer carry the notice and election duties, and the exposure accrues per person if they are missed. BEG Managed Benefits, powered by isolved, runs enrollment, notices, election tracking, and premium status in one system. You keep your broker; we do the administration.`],
    ];
  }
  return [
    [`Does ${name} have a mini-COBRA law?`,
     `No. ${name} has no state continuation, or mini-COBRA, statute giving employees of small employers a right to keep group coverage after a qualifying event. Continuation in ${name} runs through federal COBRA, which applies only to employers with 20 or more employees.`],
    [`What covers continuation in ${name} then?`,
     `Federal COBRA for employers with 20 or more employees. Below that size there is no ${name} mandate, though a plan or carrier may offer voluntary continuation or conversion to an individual policy.`],
    [`Where do ${name} employees get coverage after a job loss?`,
     d.market
       ? `Losing job-based coverage opens a special enrollment period. ${d.market} Loss of coverage can also open Medicaid eligibility for lower-income households.`
       : `Losing job-based coverage opens a special enrollment period on the health insurance marketplace, and can also open Medicaid eligibility for lower-income households.`],
    [`Is there any ${name} continuation right at all?`,
     `There is no general termination-based right. ${name}'s insurance code may contain narrow provisions, such as a limited extension for a totally disabled person, but nothing equivalent to COBRA for small-employer groups.`],
    [`How does benefits administration help if there is no ${name} mandate?`,
     `The workload does not disappear: enrollment, ACA tracking, federal COBRA once you cross 20 employees, and carrier updates still have to run. BEG Managed Benefits, powered by isolved, handles that administration in one system. You keep your broker; we do the work.`],
  ];
}

function factRows(d) {
  const name = d.n;
  if (d.exists) {
    return [
      ['State law', d.statute || `${name} state continuation statute`],
      ['Employers covered', d.size || 'Group health policies below the federal COBRA size threshold'],
      ['Maximum continuation', d.months ? `Up to ${d.months} months` : 'Set by state statute'],
      ['At 20 or more employees', 'Federal COBRA applies instead'],
      ['Marketplace', d.market || 'See your state marketplace or HealthCare.gov'],
    ];
  }
  return [
    ['State mini-COBRA', 'None. No state termination-based continuation mandate'],
    ['Federal COBRA', 'Applies to employers with 20 or more employees'],
    ['Below 20 employees', 'No state continuation requirement; voluntary continuation or conversion may be offered'],
    ['Marketplace', d.market || 'See your state marketplace or HealthCare.gov'],
  ];
}

function page(slug, d) {
  const name = d.n;
  const comp = 'ManagedBenefits' + pretty(slug).replace(/[^A-Za-z]/g, '') + 'Page';
  const title = (d.exists
    ? `${name} Mini-COBRA Continuation Rules | BEG`
    : `${name} Mini-COBRA: No State Law | BEG`).slice(0, 65);
  const desc = (d.exists
    ? `${name} mini-COBRA: state continuation coverage rules, employer size, ${d.months ? d.months + ' month limit' : 'duration'}, and who runs the notices. You keep your broker.`
    : `${name} has no state mini-COBRA. Federal COBRA covers employers with 20 or more employees. What small ${name} employers and staff can do.`).slice(0, 155);

  const heroTitle = d.exists
    ? `${name} makes small employers offer continuation. Someone has to run it.`
    : `${name} has no mini-COBRA. The benefits work still has to get done.`;
  const heroDesc = d.exists
    ? `${name} is a mini-COBRA state: smaller employers must let departing employees keep group coverage under state law. BEG Managed Benefits, powered by isolved, runs the notices, elections, and premium tracking so the rules are handled. You keep your broker; we do the administration.`
    : `${name} does not require small employers to continue coverage after a qualifying event; only federal COBRA at 20-plus employees applies. But enrollment, ACA, and clean records still land on someone. BEG Managed Benefits, powered by isolved, runs that administration. You keep your broker; we do the work.`;

  const stats = d.exists
    ? [
        [d.months ? `${d.months} months` : 'Yes', `${name} state continuation limit`],
        ['Broker-friendly', 'You keep your broker, we do the admin'],
        ['All 50', 'States covered, ' + name + ' included'],
      ]
    : [
        ['No state law', `${name} has no mini-COBRA mandate`],
        ['20+', 'Federal COBRA threshold that does apply'],
        ['Broker-friendly', 'You keep your broker, we do the admin'],
      ];

  const F = faqs(d);
  const faqJsx = F.map(([qq, a]) => `  [\n    '${q(qq)}',\n    '${q(a)}',\n  ],`).join('\n');

  const rowsJsx = factRows(d).map(([k, v]) =>
    `                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>${jsx(k)}</td><td style={{ padding: '12px 16px', color: '#555555' }}>${jsx(v)}</td></tr>`
  ).join('\n');

  const statsJsx = stats.map(([v, l]) => `          { value: '${q(v)}', label: '${q(l)}' },`).join('\n');

  const bodyHeading = d.exists ? `What ${name} law requires` : `What ${name} law does and does not require`;
  const angleHeading = d.exists
    ? `A small ${name} employer carries big-company continuation duties`
    : `The administration does not go away because the state stayed quiet`;
  const anglePara = d.exists
    ? `The ${name} rule reaches companies too small to have a benefits department, yet the notices, election windows, and premium tracking look a lot like federal COBRA. Miss a required notice and the exposure accrues per person. BEG Managed Benefits, powered by isolved, runs ${name} continuation the same way it runs enrollment: notices generated on the qualifying event, elections and payments tracked, and the clock watched so nothing slips. Your broker keeps advising you and placing coverage. We own the administration behind it.`
    : `A ${name} employer still runs open enrollment, tracks ACA eligibility, handles federal COBRA once it crosses 20 employees, keeps carrier records current, and answers employee questions when someone leaves. The absence of a state mini-COBRA rule does not lighten that load; it just means your plan documents and process have to be clear about what you offer. BEG Managed Benefits, powered by isolved, runs that administration in one system: enrollment, ACA forms, federal COBRA when it applies, and clean data your broker and carriers can trust.`;

  const srcHost = d.src ? d.src.replace(/^https?:\/\//, '').split('/')[0] : '';
  const srcLine = d.src
    ? `Source: <a href="${d.src}" target="_blank" rel="noopener noreferrer">${jsx(name)} statute and department of insurance (${jsx(srcHost)})</a>. This page is general information, not legal advice.`
    : `This page is general information, not legal advice. Confirm current requirements with the ${jsx(name)} department of insurance.`;

  return `import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: '${q(title)}',
  description: '${q(desc)}',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/${slug}' },
  openGraph: {
    title: '${q(title)}',
    description: '${q(desc)}',
    url: 'https://www.beghr.com/services/managed-benefits/${slug}',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '${q(title)}', description: '${q(desc)}', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-${slug}');

const FAQS: [string, string][] = [
${faqJsx}
];

export default function ${comp}() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '${q(name + ' mini-COBRA and state continuation coverage rules')}',
            description: '${q(desc)}',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/${slug}',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: '${q(name)}', item: 'https://www.beghr.com/services/managed-benefits/${slug}' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · ${jsx(name)}"
        title="${q(heroTitle)}"
        description="${q(heroDesc)}"
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
${statsJsx}
        ]}
      >
        {/* STATE FACTS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '860px' }}>
            <div className="head center reveal">
              <p className="eyebrow">${jsx(name)} Continuation, In Brief</p>
              <h2>${jsx(bodyHeading)}</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <tbody>
${rowsJsx}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.8rem', color: '#888888', marginTop: '1rem', textAlign: 'center', lineHeight: 1.6 }}>
              ${srcLine}
            </p>
          </div>
        </section>

        {/* ANGLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">${d.exists ? 'Why It Lands On You' : 'No Mandate, Same Workload'}</p>
              <h2>${jsx(angleHeading)}</h2>
            </div>
            <p className="reveal" style={{ color: '#444444', lineHeight: '1.8', fontSize: '0.98rem', marginTop: '1.5rem' }}>
              ${jsx(anglePara)}
            </p>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              See <Link href="/services/managed-benefits/cobra-vs-mini-cobra">COBRA vs mini-COBRA</Link>, or return to the <Link href="/services/managed-benefits">Managed Benefits overview</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>${jsx(name)} continuation coverage, answered</h2>
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
        </section>
      </ServicePage>
    </>
  );
}
`;
}

let n = 0;
for (const [slug, d] of Object.entries(DATA)) {
  const dir = path.join(ROOT, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'page.tsx'), page(slug, d));
  n++;
}
console.log(`Generated ${n} Managed Benefits state pages.`);
