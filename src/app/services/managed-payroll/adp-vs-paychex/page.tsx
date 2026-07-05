import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'ADP vs Paychex: Honest Payroll Comparison, Instant Quote | BEG';
const DESC = 'ADP and Paychex compared honestly: platform scale vs branch-model support, both quote-gated. Plus the flat-PEPM managed alternative.';
const URL = 'https://www.beghr.com/services/managed-payroll/adp-vs-paychex';

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

const CALENDLY = getCalendlyLink('managed-payroll-adp-vs-paychex');

const FAQS: [string, string][] = [
  [
    'Is ADP or Paychex cheaper?',
    'Neither publishes pricing. Both are quote-gated: you provide a census (headcount, states, pay frequency, add-ons) and a sales rep prices your specific company. The only honest comparison is two quotes on the same inputs, side by side.',
  ],
  [
    'Do ADP and Paychex run payroll for me, or do I still do the work?',
    'Both are software you or your team operate yourselves. You enter hours, review the run, and approve it every cycle. Neither ADP nor Paychex takes payroll off your desk the way a fully managed service does.',
  ],
  [
    'Which one has better support?',
    'Published models differ here. ADP leans on a large-scale service organization and self-service resources; Paychex is built around a branch and local-representative structure. Which feels better depends on whether you want a big platform or a name you can call in your region.',
  ],
  [
    'Do either of these handle multi-state tax filing?',
    'Both advertise multi-state payroll tax filing as part of their core product. Confirm exact state coverage and any add-on fees for new-state registration during your quote, since neither publishes a state-by-state fee schedule.',
  ],
  [
    'Where does BEG fit if I am comparing ADP and Paychex?',
    'BEG is not a party to either platform. If what you actually want is payroll run for you instead of software you operate, BEG managed payroll is the alternative: a flat $25-$45 PEPM, all-inclusive, inside your existing system. No quote-gated sales process, an instant on-screen estimate instead.',
  ],
];

export default function AdpVsPaychexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ADP vs Paychex: An Honest Payroll Comparison',
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
              { '@type': 'ListItem', position: 3, name: 'ADP vs Paychex', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="ADP or Paychex: which payroll software actually fits your company?"
        description="Both are payroll platforms you run yourselves, both quote-gated, both built for companies willing to do the data entry every cycle. Honest referee breakdown of two of the biggest names in payroll."
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
                <a href="https://www.adp.com/what-we-offer/payroll.aspx" target="_blank" rel="noopener noreferrer">ADP</a> is one of the largest payroll technology companies in the world, offering a range of tiers from small-business self-service payroll up through enterprise HCM. Its structural advantage is scale: a single vendor covering payroll, tax filing, time tracking, HR add-ons, and benefits administration, with a service organization built to match. Companies already using other ADP products often stay on ADP for payroll to keep everything under one login.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Pricing is quote-gated across ADP's payroll tiers: you provide a census and go through a sales process to learn the actual monthly cost, and published third-party estimates vary widely by tier and add-ons. Regardless of tier, ADP remains software: your team still enters hours, reviews the run, and clicks approve every pay period. ADP does not run payroll for you.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: PAYCHEX */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>Paychex: the platform built around local representatives</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.paychex.com/payroll" target="_blank" rel="noopener noreferrer">Paychex</a> has built its brand around a branch and local-representative model: a large network of regional offices and assigned reps rather than a purely centralized call center. Its published product line spans payroll tiers similar to ADP's, from basic self-service processing up through bundled HR add-ons, and it markets heavily to small and mid-size employers.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Like ADP, Paychex is quote-gated: no published price list, a census-based sales quote instead. And like ADP, it is software your team operates. Common complaints in public reviews center on add-on fees stacking onto the base price once a company is quoted and onboarded, which is exactly why a same-census, side-by-side quote matters more than either company's marketing.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>ADP vs Paychex, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>ADP</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Paychex</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Self-service software, multiple tiers', 'Self-service software, multiple tiers'],
                    ['Pricing visibility', 'Quote-gated, census and sales call required', 'Quote-gated, census and sales call required'],
                    ['Who runs payroll', 'You: enter hours, review, approve each cycle', 'You: enter hours, review, approve each cycle'],
                    ['Tax filing responsibility', 'Platform files on your behalf per your tier', 'Platform files on your behalf per your tier'],
                    ['Ideal company size', 'Small business through enterprise, tiered', 'Small and mid-size employers, tiered add-ons'],
                    ['Support model', 'Centralized service org plus self-service tools', 'Branch network with assigned local representatives'],
                  ].map(([factor, adp, paychex], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{adp}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{paychex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on each company&apos;s published model. Both require a sales quote for exact pricing on your company.
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
                  title: 'You already run other ADP products',
                  body: 'Lean ADP. The pitch is ecosystem continuity: one vendor, one login, connected reporting across payroll, time, and HR tools. Adding Paychex would mean a second vendor relationship, not a consolidated one.',
                },
                {
                  title: 'You want a local rep who knows your account by name',
                  body: 'Lean Paychex. Its published model is built around branch offices and assigned representatives rather than a purely centralized structure. If you want a person in your region, that is the model Paychex sells.',
                },
                {
                  title: 'You do not want to run payroll software at all',
                  body: 'Pause before picking either. Both ADP and Paychex are tools your team operates every cycle: data entry, review, approval. If the goal is to remove that work entirely, you are comparing the wrong category of product.',
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
                If you want software, pick from these two and negotiate hard on the quote: both are credible, established platforms. But notice what both have in common. You still enter hours, review every run, and approve every cycle, and the price only shows up after a sales call and a census.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If instead you want payroll run for you, inside your existing system, at a flat rate you can see before you talk to anyone, that is <Link href="/services/managed-payroll">BEG managed payroll</Link>: $25-$45 PEPM, all-inclusive, every filing and every W-2 handled. No co-employment, no software login for your team, no quote gate.
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
              <h2>ADP vs Paychex, answered</h2>
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
