import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'ADP vs QuickBooks Payroll: Compared, Instant Quote | BEG';
const DESC = 'ADP quote-gated tiers vs QuickBooks Payroll published pricing compared honestly. Plus the flat-PEPM alternative to running payroll yourself.';
const URL = 'https://www.beghr.com/services/managed-payroll/adp-vs-quickbooks-payroll';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-payroll-adp-vs-quickbooks-payroll');

const FAQS: [string, string][] = [
  [
    'Does ADP or QuickBooks Payroll publish pricing?',
    'QuickBooks Payroll publishes tiered pricing directly on Intuit\'s pricing page. ADP does not: it is quote-gated, requiring a census and a sales process to learn what your company would pay.',
  ],
  [
    'Do I need QuickBooks accounting software to use QuickBooks Payroll?',
    'QuickBooks Payroll is built to integrate tightly with QuickBooks Online, and that direct ledger connection is its main selling point. If you do not use QuickBooks for accounting, that advantage does not apply to your company.',
  ],
  [
    'Why would a company pick ADP over a published-price option like QuickBooks?',
    'Scale and breadth. ADP spans tiers from small business through enterprise HCM, with time tracking, benefits administration, and HR add-ons available from one vendor. Companies with more complexity or multi-product ADP relationships often value that breadth enough to accept the quote-gated pricing.',
  ],
  [
    'Do either of these run payroll for me?',
    'No. Both ADP and QuickBooks Payroll are software you or your team operate directly. You enter hours, review each run, and approve it every cycle. Neither takes payroll off your desk.',
  ],
  [
    'Where does BEG fit in an ADP vs QuickBooks Payroll decision?',
    'BEG is not a party to either platform. If you want payroll run for you instead of software you log into, BEG managed payroll is the alternative: a flat $25-$45 PEPM, all-inclusive, inside your existing system, with an instant on-screen estimate instead of a sales quote or a subscription tier.',
  ],
];

export default function AdpVsQuickbooksPayrollPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ADP vs QuickBooks Payroll: An Honest Comparison',
            description: DESC,
            author: { '@type': 'Organization', name: 'Business Executive Group' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            mainEntityOfPage: URL,
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
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'ADP vs QuickBooks Payroll', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="ADP or QuickBooks Payroll: which payroll software actually fits your company?"
        description="One is quote-gated enterprise-capable scale. One is published pricing built around the QuickBooks ledger. Honest referee breakdown before you pick a login."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'BEG PEPM, all-inclusive' },
          { value: 'All 50', label: 'States covered' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: ADP */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>ADP: the platform with the deepest ecosystem</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.adp.com/what-we-offer/payroll.aspx" target="_blank" rel="noopener noreferrer">ADP</a> is one of the largest payroll technology companies in the world, spanning tiers from small-business payroll through enterprise HCM. Its advantage is scale: payroll, tax filing, time tracking, benefits administration, and HR add-ons from a single vendor, with a service organization sized to match. Companies with more complex needs or existing ADP relationships often prioritize that breadth.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Pricing is quote-gated across every ADP tier: you provide a census and go through a sales process to learn your actual cost. It remains software regardless of tier: your team enters hours, reviews the run, and approves it every cycle. ADP does not run payroll for you.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: QUICKBOOKS PAYROLL */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>QuickBooks Payroll: published pricing built for QuickBooks users</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://quickbooks.intuit.com/payroll/pricing/" target="_blank" rel="noopener noreferrer">QuickBooks Payroll</a> publishes tiered pricing directly on Intuit's own pricing page, no sales quote required to see a number. Its core differentiator is integration: if your books already run through QuickBooks Online, payroll data flows directly into your general ledger without a separate sync step.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                It is built for small and mid-size businesses rather than enterprise scale, and like ADP, it remains software your team operates every cycle: entering hours, reviewing runs, approving pay. If you do not use QuickBooks for accounting, the integration advantage does not apply, and the comparison against ADP becomes purely about published price versus platform breadth.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>ADP vs QuickBooks Payroll, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>ADP</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>QuickBooks Payroll</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Self-service software, multiple tiers', 'Self-service software, published tiers'],
                    ['Pricing visibility', 'Quote-gated, census and sales call required', 'Published tiers, linked on Intuit\'s pricing page'],
                    ['Who runs payroll', 'You: enter hours, review, approve each cycle', 'You: enter hours, review, approve each cycle'],
                    ['Tax filing responsibility', 'Platform files on your behalf per your tier', 'Platform files on your behalf per your plan'],
                    ['Ideal company size', 'Small business through enterprise, tiered', 'Small and mid-size businesses on QuickBooks'],
                    ['Support model', 'Centralized service org plus self-service tools', 'Self-service help center plus support tickets'],
                  ].map(([factor, adp, qb], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{adp}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{qb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              QuickBooks Payroll tiers per its published <a href="https://quickbooks.intuit.com/payroll/pricing/" target="_blank" rel="noopener noreferrer">pricing page</a>. ADP requires a sales quote for exact pricing on your company.
            </p>
          </div>
        </section>

        {/* HOW TO DECIDE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How to Actually Decide</p>
              <h2>Three buyer situations, three honest answers</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              {[
                {
                  title: 'You have complex, multi-product, or enterprise needs',
                  body: 'Lean ADP. The pitch is breadth: payroll, time, benefits, and HR add-ons from one vendor with tiers built to scale past what a small-business tool covers.',
                },
                {
                  title: 'You already do your books in QuickBooks Online',
                  body: 'Lean QuickBooks Payroll. The direct ledger integration removes a sync step, published pricing lets you budget upfront, and it keeps everything under one Intuit login.',
                },
                {
                  title: 'You do not want to run payroll software at all',
                  body: 'Pause before picking either. Both are tools your team operates every cycle: data entry, review, approval. If the goal is to remove that work entirely, you are comparing the wrong category.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Comparing other platforms too? See <Link href="/services/managed-payroll/gusto-vs-quickbooks-payroll">Gusto vs QuickBooks Payroll</Link> or <Link href="/services/managed-payroll/adp-vs-paychex">ADP vs Paychex</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Both answers assume you want to run payroll software yourself. Do you?</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If you want software, ADP and QuickBooks Payroll sit at opposite ends of the pricing-transparency spectrum, but both leave the actual work of running payroll on your desk. You still enter hours, review every run, and approve every cycle.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If instead you want payroll run for you, inside your existing system, at a flat rate you can see before you talk to anyone, that is <Link href="/services/managed-payroll">BEG managed payroll</Link>: $25-$45 PEPM, all-inclusive, every filing and every W-2 handled. No software login for your team, no quote gate, no subscription tier to outgrow.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <PricingCta service="managed-payroll" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>ADP vs QuickBooks Payroll, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
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
