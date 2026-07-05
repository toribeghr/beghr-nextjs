import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Gusto vs ADP: Honest Payroll Comparison, Instant Quote | BEG';
const DESC = 'Gusto published tiers vs ADP quote-gated tiers compared honestly, plus the flat-PEPM managed alternative to running payroll software yourself.';
const URL = 'https://www.beghr.com/services/managed-payroll/gusto-vs-adp';

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

const CALENDLY = getCalendlyLink('managed-payroll-gusto-vs-adp');

const FAQS: [string, string][] = [
  [
    'Does Gusto publish its pricing?',
    'Yes. Gusto publishes tiered plans on its own pricing page, typically a base fee plus a per-employee monthly add-on. Confirm current tiers directly on Gusto\'s site since published numbers can change.',
  ],
  [
    'Does ADP publish its pricing?',
    'No. ADP is quote-gated: you provide a census and go through a sales process to get a price for your company. There is no public price list to compare against Gusto\'s tiers directly.',
  ],
  [
    'Which is easier to set up, Gusto or ADP?',
    'Gusto markets itself around self-service simplicity for smaller companies, with a design built for founders who want to run payroll without a dedicated administrator. ADP spans a wider range of tiers, some of which are built for more complex, larger organizations. The right fit depends on your headcount and complexity, not just ease of use.',
  ],
  [
    'Do either of these run payroll for me?',
    'No. Both Gusto and ADP are software you or your team operate directly. You enter hours, review each run, and approve it every cycle. Neither takes payroll off your desk.',
  ],
  [
    'Where does BEG fit in a Gusto vs ADP decision?',
    'BEG is not a party to either platform. If you want payroll run for you instead of software you log into, BEG managed payroll is the alternative: a flat $25-$45 PEPM, all-inclusive, inside your existing system, with an instant on-screen estimate instead of a sales quote or a subscription tier.',
  ],
];

export default function GustoVsAdpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Gusto vs ADP: An Honest Payroll Comparison',
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
              { '@type': 'ListItem', position: 3, name: 'Gusto vs ADP', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="Gusto or ADP: which payroll software actually fits your company?"
        description="One publishes its pricing online, one quotes every company individually. Both are software you run yourself. Honest referee breakdown before you pick a login."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'BEG PEPM, all-inclusive' },
          { value: 'All 50', label: 'States covered' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: GUSTO */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Gusto: self-service payroll with published pricing</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://gusto.com/pricing" target="_blank" rel="noopener noreferrer">Gusto</a> built its brand on transparent, published tiers designed for small and growing businesses. Instead of a sales-gated quote, you can view current plan tiers and per-employee pricing directly on Gusto's pricing page before you ever talk to a sales rep. That transparency is a real point of differentiation against most of the payroll category.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Gusto remains software, though: your team enters hours, reviews the run, and approves payroll every cycle. Its published tiers add features like time tracking and HR tools as you move up-tier. Because published pricing can change, always confirm current numbers on Gusto's own page rather than trusting a figure quoted elsewhere.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: ADP */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>ADP: the platform with the deepest ecosystem</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.adp.com/what-we-offer/payroll.aspx" target="_blank" rel="noopener noreferrer">ADP</a> is one of the largest payroll technology companies in the world, spanning tiers from small-business payroll through enterprise HCM. Its advantage is scale and breadth: payroll, tax filing, time tracking, and HR add-ons from a single vendor, with a service organization sized to match. Companies already using other ADP products often stay on ADP for payroll to keep everything under one login.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Unlike Gusto, ADP does not publish pricing. It is quote-gated across every tier: you provide a census and go through a sales process to learn the actual cost. Like Gusto, it remains software your team operates every cycle. The tradeoff against Gusto is breadth and enterprise depth in exchange for pricing opacity.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Gusto vs ADP, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Gusto</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>ADP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Self-service software, published tiers', 'Self-service software, multiple tiers'],
                    ['Pricing visibility', 'Published tiers, linked on Gusto\'s pricing page', 'Quote-gated, census and sales call required'],
                    ['Who runs payroll', 'You: enter hours, review, approve each cycle', 'You: enter hours, review, approve each cycle'],
                    ['Tax filing responsibility', 'Platform files on your behalf per your plan', 'Platform files on your behalf per your tier'],
                    ['Ideal company size', 'Small and growing businesses', 'Small business through enterprise, tiered'],
                    ['Support model', 'Self-service help center plus support tickets', 'Centralized service org plus self-service tools'],
                  ].map(([factor, gusto, adp], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{gusto}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{adp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Gusto tiers per its published <a href="https://gusto.com/pricing" target="_blank" rel="noopener noreferrer">pricing page</a>. ADP requires a sales quote for exact pricing on your company.
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
                  title: 'You want to see a price before any sales call',
                  body: 'Lean Gusto. Its tiers are published, so you can budget before talking to anyone. That transparency is Gusto\'s core differentiator against most of the payroll category, ADP included.',
                },
                {
                  title: 'You already run other ADP products or need enterprise depth',
                  body: 'Lean ADP. The pitch is ecosystem continuity and scale across payroll, time, and HR tools under one vendor. You will need to go through a sales quote either way.',
                },
                {
                  title: 'You do not want to run payroll software at all',
                  body: 'Pause before picking either. Both Gusto and ADP are tools your team operates every cycle: data entry, review, approval. If the goal is to remove that work entirely, you are comparing the wrong category.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Comparing other platforms too? See <Link href="/services/managed-payroll/adp-vs-paychex">ADP vs Paychex</Link> or <Link href="/services/managed-payroll/gusto-vs-quickbooks-payroll">Gusto vs QuickBooks Payroll</Link>.
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
                If you want software, Gusto and ADP sit at different ends of the transparency spectrum, but both leave the actual work of running payroll on your desk. You still enter hours, review every run, and approve every cycle.
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
              <h2>Gusto vs ADP, answered</h2>
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
