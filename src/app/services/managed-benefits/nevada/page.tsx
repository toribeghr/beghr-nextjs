import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Nevada Mini-COBRA: Small Employer Continuation | BEG',
  description: 'Nevada requires employers under 20 to offer up to 18 months of group health continuation under NRS 689B.245. Rules, eligibility, and who runs it.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/nevada' },
  openGraph: {
    title: 'Nevada Mini-COBRA: Small Employer Continuation | BEG',
    description: 'Nevada requires employers under 20 to offer up to 18 months of group health continuation under NRS 689B.245. Rules, eligibility, and who runs it.',
    url: 'https://www.beghr.com/services/managed-benefits/nevada',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Nevada Mini-COBRA: Small Employer Continuation | BEG', description: 'Nevada requires employers under 20 to offer up to 18 months of group health continuation under NRS 689B.245. Rules, eligibility, and who runs it.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-nevada');

const FAQS: [string, string][] = [
  [
    'Does Nevada have a mini-COBRA law?',
    'Yes. Nevada Revised Statutes 689B.245 requires group health policies issued to employers with fewer than 20 employees to let a covered employee continue identical coverage after a qualifying event. It fills the gap below the federal COBRA threshold of 20 employees.',
  ],
  [
    'How long does Nevada continuation coverage last?',
    'Up to 18 months of identical coverage, excluding eye and dental. Coverage can end earlier under Nevada Revised Statutes 689B.249, for example on non-payment or when the person becomes covered elsewhere.',
  ],
  [
    'Which employers does Nevada mini-COBRA apply to?',
    'Fully-insured group health policies covering fewer than 20 employees. Employers with 20 or more are covered by federal COBRA instead. Self-funded plans are not subject to the Nevada statute.',
  ],
  [
    'Who is eligible to continue coverage?',
    'An employee whose job ends for any reason other than gross misconduct, or whose hours drop below eligibility, may elect continuation. The person must have been covered under the group policy for at least 12 consecutive months before coverage ended.',
  ],
  [
    'Does Nevada mini-COBRA replace federal COBRA?',
    'No. Federal COBRA applies to employers with 20 or more employees; NRS 689B.245 covers the smaller groups federal COBRA does not reach. A company is generally subject to one or the other based on size.',
  ],
  [
    'Who handles the continuation notices and tracking?',
    'The employer and insurer carry the notice and election duties, and the exposure accrues per person if they are missed. BEG Managed Benefits, powered by isolved, runs enrollment, notices, election tracking, and premium status so the deadlines are handled in one system.',
  ],
];

export default function ManagedBenefitsNevadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Nevada mini-COBRA: small employer group health continuation rules',
            description: 'Nevada requires employers under 20 to offer up to 18 months of group health continuation under NRS 689B.245. Rules, eligibility, and who runs it.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/nevada',
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
              { '@type': 'ListItem', position: 3, name: 'Nevada', item: 'https://www.beghr.com/services/managed-benefits/nevada' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Nevada"
        title="Nevada makes small employers offer continuation. Someone has to run it."
        description="Nevada is a mini-COBRA state: employers under 20 must let departing employees keep coverage for up to 18 months under NRS 689B.245. BEG Managed Benefits, powered by isolved, runs the notices, elections, and premium tracking so the rules are handled. You keep your broker; we do the administration."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: '18 months', label: 'Nevada continuation limit under NRS 689B.245' },
          { value: 'Under 20', label: 'Employer size Nevada mini-COBRA covers' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
        ]}
      >
        {/* ANSWER-FIRST FACTS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Nevada Mini-COBRA, In Brief</p>
              <h2>What Nevada law requires</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <tbody>
                  {[
                    ['State law', 'Nevada Revised Statutes 689B.245 (continuation) and 689B.249 (early termination)'],
                    ['Employers covered', 'Fully-insured group health policies with fewer than 20 employees'],
                    ['Maximum continuation', 'Up to 18 months of identical coverage, excluding eye and dental'],
                    ['Qualifying events', 'Termination for any reason other than gross misconduct, or a drop in hours below eligibility'],
                    ['Eligibility catch', 'Must have been covered under the group policy for at least 12 consecutive months before coverage ended'],
                    ['Above 20 employees', 'Federal COBRA applies instead of the Nevada statute'],
                  ].map(([k, v], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 600, color: '#333333', width: '38%' }}>{k}</td>
                      <td style={{ padding: '12px 16px', color: '#555555' }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Source: <a href="https://www.leg.state.nv.us/NRS/NRS-689B.html" target="_blank" rel="noopener noreferrer">Nevada Legislature, NRS Chapter 689B</a>. This page is general information, not legal advice.
            </p>
          </div>
        </section>

        {/* WHY IT IS A BURDEN + BEG ANGLE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Why It Lands On You</p>
              <h2>A small Nevada employer carries big-company continuation duties</h2>
            </div>
            <p className="reveal" style={{ color: '#444444', lineHeight: '1.8', fontSize: '0.98rem', marginTop: '1.5rem' }}>
              The Nevada rule reaches companies too small to have a benefits department, yet the notices, election windows, and premium tracking look a lot like federal COBRA. Miss a required notice and the exposure accrues per person. Track it in a spreadsheet and a single missed 12-month eligibility check or a late election can turn into a claim you did not budget for.
            </p>
            <p className="reveal" style={{ color: '#444444', lineHeight: '1.8', fontSize: '0.98rem', marginTop: '1rem' }}>
              BEG Managed Benefits, powered by isolved, runs Nevada continuation the same way it runs enrollment: notices generated on the qualifying event, elections and payments tracked, and the 18-month clock watched so nothing slips. Your broker keeps advising you and placing coverage. We own the administration behind it.
            </p>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              New to the topic? See <Link href="/services/managed-benefits/cobra-vs-mini-cobra">COBRA vs mini-COBRA</Link>, or go back to the <Link href="/services/managed-benefits">Managed Benefits overview</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Nevada mini-COBRA, answered</h2>
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
