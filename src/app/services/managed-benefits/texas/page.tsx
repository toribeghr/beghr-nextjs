import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Texas Mini-COBRA Continuation Rules | BEG',
  description: 'Texas mini-COBRA: state continuation coverage rules, employer size, 9 month limit, and who runs the notices. You keep your broker.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/texas' },
  openGraph: {
    title: 'Texas Mini-COBRA Continuation Rules | BEG',
    description: 'Texas mini-COBRA: state continuation coverage rules, employer size, 9 month limit, and who runs the notices. You keep your broker.',
    url: 'https://www.beghr.com/services/managed-benefits/texas',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Texas Mini-COBRA Continuation Rules | BEG', description: 'Texas mini-COBRA: state continuation coverage rules, employer size, 9 month limit, and who runs the notices. You keep your broker.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-texas');

const FAQS: [string, string][] = [
  [
    'Does Texas have a mini-COBRA law?',
    'Yes. Texas has a state continuation, or mini-COBRA, law that lets employees of smaller companies keep group health coverage after a qualifying event, filling the gap below the federal COBRA threshold of 20 employees. Applies to fully-insured group health plans generally (including small employers with 2 to 19 employees who are not subject to federal COBRA). Small employer health benefit plans must provide continuation under Insurance Code Chapters 1251 and 1271.',
  ],
  [
    'How long does Texas continuation coverage last?',
    'Up to 9 months, subject to the state\'s early-termination rules such as non-payment of premium or becoming covered under another plan.',
  ],
  [
    'Who is eligible to continue coverage in Texas?',
    'An employee, member, or dependent whose group coverage terminates for any reason other than involuntary termination for cause (health-related causes do not count as cause), and who was continuously insured under the group policy for at least three consecutive months immediately before termination.',
  ],
  [
    'Does Texas mini-COBRA replace federal COBRA?',
    'No. Federal COBRA applies to employers with 20 or more employees, and the Texas law covers the smaller groups federal COBRA does not reach. A company is generally subject to one or the other based on size.',
  ],
  [
    'Who handles the Texas continuation notices and tracking?',
    'The employer and insurer carry the notice and election duties, and the exposure accrues per person if they are missed. BEG Managed Benefits, powered by isolved, runs enrollment, notices, election tracking, and premium status in one system. You keep your broker; we do the administration.',
  ],
];

export default function ManagedBenefitsTexasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Texas mini-COBRA and state continuation coverage rules',
            description: 'Texas mini-COBRA: state continuation coverage rules, employer size, 9 month limit, and who runs the notices. You keep your broker.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/texas',
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
              { '@type': 'ListItem', position: 3, name: 'Texas', item: 'https://www.beghr.com/services/managed-benefits/texas' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Texas"
        title="Texas makes small employers offer continuation. Someone has to run it."
        description="Texas is a mini-COBRA state: smaller employers must let departing employees keep group coverage under state law. BEG Managed Benefits, powered by isolved, runs the notices, elections, and premium tracking so the rules are handled. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: '9 months', label: 'Texas state continuation limit' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'All 50', label: 'States covered, Texas included' },
        ]}
      >
        {/* STATE FACTS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '860px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Texas Continuation, In Brief</p>
              <h2>What Texas law requires</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>State law</td><td style={{ padding: '12px 16px', color: '#555555' }}>Tex. Ins. Code sections 1251.251-1251.260 (esp. 1251.252 eligibility, 1251.255 duration/termination); HMO parallel at Tex. Ins. Code Chapter 1271</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Employers covered</td><td style={{ padding: '12px 16px', color: '#555555' }}>Applies to fully-insured group health plans generally (including small employers with 2 to 19 employees who are not subject to federal COBRA). Small employer health benefit plans must provide continuation under Insurance Code Chapters 1251 and 1271.</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Maximum continuation</td><td style={{ padding: '12px 16px', color: '#555555' }}>Up to 9 months</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>At 20 or more employees</td><td style={{ padding: '12px 16px', color: '#555555' }}>Federal COBRA applies instead</td></tr>
                  <tr style={{ borderBottom: '1px solid #e5e5e5' }}><td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>Marketplace</td><td style={{ padding: '12px 16px', color: '#555555' }}>Uses the federal marketplace, HealthCare.gov (Texas does not run a state-based exchange).</td></tr>
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.8rem', color: '#888888', marginTop: '1rem', textAlign: 'center', lineHeight: 1.6 }}>
              Source: <a href="https://statutes.capitol.texas.gov/Docs/IN/htm/IN.1251.htm" target="_blank" rel="noopener noreferrer">Texas statute and department of insurance (statutes.capitol.texas.gov)</a>. This page is general information, not legal advice.
            </p>
          </div>
        </section>

        {/* ANGLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Why It Lands On You</p>
              <h2>A small Texas employer carries big-company continuation duties</h2>
            </div>
            <p className="reveal" style={{ color: '#444444', lineHeight: '1.8', fontSize: '0.98rem', marginTop: '1.5rem' }}>
              The Texas rule reaches companies too small to have a benefits department, yet the notices, election windows, and premium tracking look a lot like federal COBRA. Miss a required notice and the exposure accrues per person. BEG Managed Benefits, powered by isolved, runs Texas continuation the same way it runs enrollment: notices generated on the qualifying event, elections and payments tracked, and the clock watched so nothing slips. Your broker keeps advising you and placing coverage. We own the administration behind it.
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
              <h2>Texas continuation coverage, answered</h2>
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
