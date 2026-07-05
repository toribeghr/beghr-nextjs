import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Paychex vs Gusto: Honest Payroll Comparison, Instant Quote | BEG';
const DESC = 'Paychex quote-gated branch model vs Gusto published tiers compared honestly. Plus the flat-PEPM alternative to running payroll yourself.';
const URL = 'https://www.beghr.com/services/managed-payroll/paychex-vs-gusto';

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

const CALENDLY = getCalendlyLink('managed-payroll-paychex-vs-gusto');

const FAQS: [string, string][] = [
  [
    'Is Paychex or Gusto cheaper?',
    'Gusto publishes its pricing tiers directly on its own pricing page. Paychex does not: it is quote-gated, requiring a census and a sales call to learn your actual cost. Compare Gusto\'s published number against a real Paychex quote before deciding.',
  ],
  [
    'Does Paychex have local representatives?',
    'Paychex\'s published model is built around a branch network with assigned local representatives, rather than a purely centralized support structure. Gusto\'s support model is self-service and ticket-based instead.',
  ],
  [
    'Is Gusto only for very small businesses?',
    'Gusto markets primarily to small and growing companies, with published tiers that add features like time tracking as you move up. Paychex spans a wider range including larger and more complex employers through its higher tiers and add-ons.',
  ],
  [
    'Do either of these run payroll for me?',
    'No. Both Paychex and Gusto are software you or your team operate directly. You enter hours, review each run, and approve it every cycle. Neither takes payroll off your desk.',
  ],
  [
    'Where does BEG fit in a Paychex vs Gusto decision?',
    'BEG is not a party to either platform. If you want payroll run for you instead of software you log into, BEG managed payroll is the alternative: a flat $25-$45 PEPM, all-inclusive, inside your existing system, with an instant on-screen estimate instead of a sales quote or a subscription tier.',
  ],
];

export default function PaychexVsGustoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Paychex vs Gusto: An Honest Payroll Comparison',
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
              { '@type': 'ListItem', position: 3, name: 'Paychex vs Gusto', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="Paychex or Gusto: which payroll software actually fits your company?"
        description="One quotes every company through a branch representative. One publishes its pricing online. Honest referee breakdown before you pick a login."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'BEG PEPM, all-inclusive' },
          { value: 'All 50', label: 'States covered' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: PAYCHEX */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Paychex: the platform built around local representatives</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.paychex.com/payroll" target="_blank" rel="noopener noreferrer">Paychex</a> has built its brand around a branch and local-representative model: a large network of regional offices and assigned reps rather than a purely centralized structure. Its published product line spans tiers from basic self-service processing up through bundled HR add-ons, marketed heavily to small and mid-size employers.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Paychex is quote-gated: no published price list, a census-based sales quote instead. It remains software your team operates every cycle: entering hours, reviewing runs, approving pay. Common complaints in public reviews center on add-on fees stacking onto the base price once a company is quoted and onboarded.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: GUSTO */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>Gusto: self-service payroll with published pricing</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://gusto.com/pricing" target="_blank" rel="noopener noreferrer">Gusto</a> built its brand on transparent, published tiers designed for small and growing businesses. You can view current plan tiers and per-employee pricing directly on Gusto's pricing page before ever talking to a sales rep, a real point of differentiation against a quote-gated competitor like Paychex.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Gusto remains software: your team enters hours, reviews the run, and approves payroll every cycle. Its support model is self-service and ticket-based rather than a local-representative network, which is the direct tradeoff against Paychex's branch structure.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Paychex vs Gusto, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Paychex</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Gusto</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Self-service software, multiple tiers', 'Self-service software, published tiers'],
                    ['Pricing visibility', 'Quote-gated, census and sales call required', 'Published tiers, linked on Gusto\'s pricing page'],
                    ['Who runs payroll', 'You: enter hours, review, approve each cycle', 'You: enter hours, review, approve each cycle'],
                    ['Tax filing responsibility', 'Platform files on your behalf per your tier', 'Platform files on your behalf per your plan'],
                    ['Ideal company size', 'Small and mid-size employers, tiered add-ons', 'Small and growing businesses'],
                    ['Support model', 'Branch network with assigned local representatives', 'Self-service help center plus support tickets'],
                  ].map(([factor, paychex, gusto], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{paychex}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{gusto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Gusto tiers per its published <a href="https://gusto.com/pricing" target="_blank" rel="noopener noreferrer">pricing page</a>. Paychex requires a sales quote for exact pricing on your company.
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
                  title: 'You want a local rep who knows your account by name',
                  body: 'Lean Paychex. Its published model is built around branch offices and assigned representatives. If you want a person in your region rather than a support ticket, that is the model Paychex sells.',
                },
                {
                  title: 'You want to see a price before any sales call',
                  body: 'Lean Gusto. Its tiers are published, so you can budget before talking to anyone. That transparency is Gusto\'s core differentiator against a quote-gated competitor like Paychex.',
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
              Comparing other platforms too? See <Link href="/services/managed-payroll/gusto-vs-adp">Gusto vs ADP</Link> or <Link href="/services/managed-payroll/rippling-vs-gusto">Rippling vs Gusto</Link>.
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
                If you want software, Paychex and Gusto sit at different ends of the transparency and support spectrum, but both leave the actual work of running payroll on your desk. You still enter hours, review every run, and approve every cycle.
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
              <h2>Paychex vs Gusto, answered</h2>
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
