import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'New York Mini-COBRA Continuation Rules | BEG',
  description: 'New York mini-COBRA: state continuation coverage rules, employer size, 36 month limit, and who runs the notices. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/new-york' },
  openGraph: {
    title: 'New York Mini-COBRA Continuation Rules | BEG',
    description: 'New York mini-COBRA: state continuation coverage rules, employer size, 36 month limit, and who runs the notices. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/new-york',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New York Mini-COBRA Continuation Rules | BEG', description: 'New York mini-COBRA: state continuation coverage rules, employer size, 36 month limit, and who runs the notices. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-new-york');

const FAQS: [string, string][] = [
  [
    'Does New York have a mini-COBRA law?',
    'Yes. New York has a state continuation, or mini-COBRA, law that lets employees of smaller companies keep group health coverage after a qualifying event, filling the gap below the federal COBRA threshold of 20 employees. Fully-insured group health policies subject to New York Insurance Law, including employers with fewer than 20 employees (below the federal COBRA threshold). New York also extends total continuation to 36 months for anyone eligible for federal COBRA or state.',
  ],
  [
    'How long does New York continuation coverage last?',
    'Up to 36 months, subject to the state\'s early-termination rules such as non-payment of premium or becoming covered under another plan.',
  ],
  [
    'Who is eligible to continue coverage in New York?',
    'Employees or members of a group who lose eligibility for coverage, and their covered dependents. Coverage may end early for non-payment, if the employer ceases to maintain any group health plan, if the person becomes covered under another group plan, or upon Medicare entitlement.',
  ],
  [
    'Does New York mini-COBRA replace federal COBRA?',
    'No. Federal COBRA applies to employers with 20 or more employees, and the New York law covers the smaller groups federal COBRA does not reach. A company is generally subject to one or the other based on size.',
  ],
  [
    'Who handles the New York continuation notices and tracking?',
    'The employer and insurer carry the notice and election duties, and the exposure accrues per person if they are missed. BEG Managed Benefits, powered by isolved, runs enrollment, notices, election tracking, and premium status in one system. You keep your broker; we do the administration.',
  ],
];

export default function ManagedBenefitsNewYorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'New York mini-COBRA and state continuation coverage rules',
            description: 'New York mini-COBRA: state continuation coverage rules, employer size, 36 month limit, and who runs the notices. You keep your broker.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/new-york',
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
              { '@type': 'ListItem', position: 3, name: 'New York', item: 'https://www.beghr.com/services/managed-benefits/new-york' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · New York"
        title="New York makes small employers offer continuation. Someone has to run it."
        description="New York is a mini-COBRA state: smaller employers must let departing employees keep group coverage under state law. BEG Managed Benefits, powered by isolved, runs the notices, elections, and premium tracking so the rules are handled. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: '36 months', label: 'New York state continuation limit' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'All 50', label: 'States covered, New York included' },
        ]}
      >
        {/* STATE FACTS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '860px' }}>
            <div className="head center reveal">
              <p className="eyebrow">New York Continuation, In Brief</p>
              <h2>What New York law requires</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>State law</td><td style={{ padding: '12px 16px', color: '#555555' }}>N.Y. Ins. Law sections 3221(m), 4304(k), 4305(e); Chapter 236 and Chapter 498 of the Laws of 2009</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Employers covered</td><td style={{ padding: '12px 16px', color: '#555555' }}>Fully-insured group health policies subject to New York Insurance Law, including employers with fewer than 20 employees (below the federal COBRA threshold). New York also extends total continuation to 36 months for anyone eligible for federal COBRA or state.</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Maximum continuation</td><td style={{ padding: '12px 16px', color: '#555555' }}>Up to 36 months</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>At 20 or more employees</td><td style={{ padding: '12px 16px', color: '#555555' }}>Federal COBRA applies instead</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Marketplace</td><td style={{ padding: '12px 16px', color: '#555555' }}>Runs its own state-based marketplace: NY State of Health (https://nystateofhealth.ny.gov/).</td></tr>
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.8rem', color: '#888888', marginTop: '1rem', textAlign: 'center', lineHeight: 1.6 }}>
              Source: <a href="https://www.dfs.ny.gov/consumers/health_insurance/cobra_coverage_extension_36_Months" target="_blank" rel="noopener noreferrer">New York statute and department of insurance (www.dfs.ny.gov)</a>. This page is general information, not legal advice.
            </p>
          </div>
        </section>

        {/* ANGLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Why It Lands On You</p>
              <h2>A small New York employer carries big-company continuation duties</h2>
            </div>
            <p className="reveal" style={{ color: '#444444', lineHeight: '1.8', fontSize: '0.98rem', marginTop: '1.5rem' }}>
              The New York rule reaches companies too small to have a benefits department, yet the notices, election windows, and premium tracking look a lot like federal COBRA. Miss a required notice and the exposure accrues per person. BEG Managed Benefits, powered by isolved, runs New York continuation the same way it runs enrollment: notices generated on the qualifying event, elections and payments tracked, and the clock watched so nothing slips. Your broker keeps advising you and placing coverage. We own the administration behind it.
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
              <h2>New York continuation coverage, answered</h2>
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
