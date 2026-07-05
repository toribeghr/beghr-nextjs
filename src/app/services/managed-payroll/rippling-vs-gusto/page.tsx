import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Rippling vs Gusto: Honest Payroll Comparison, Instant Quote | BEG';
const DESC = 'Rippling quote-gated unified HR/IT platform vs Gusto published pricing compared honestly. Plus the flat-PEPM alternative to running payroll yourself.';
const URL = 'https://www.beghr.com/services/managed-payroll/rippling-vs-gusto';

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

const CALENDLY = getCalendlyLink('managed-payroll-rippling-vs-gusto');

const FAQS: [string, string][] = [
  [
    'Does Rippling publish its pricing?',
    'Largely no. Rippling advertises a low starting per-employee figure for its base module but its actual cost is modular and quote-gated: the platform is built from add-on modules (IT device management, apps, benefits, and more), and a full price for your company requires a sales conversation once you select modules.',
  ],
  [
    'Does Gusto publish its pricing?',
    'Yes. Gusto publishes tiered plans directly on its own pricing page, typically a base fee plus a per-employee monthly add-on, viewable before any sales call.',
  ],
  [
    'What does Rippling do beyond payroll?',
    'Rippling\'s core pitch is a unified system spanning payroll, HR, IT device management, and app provisioning from one platform and one employee record. That breadth is the reason companies choose it over a payroll-and-HR-focused tool like Gusto.',
  ],
  [
    'Do either of these run payroll for me?',
    'No. Both Rippling and Gusto are software you or your team operate directly. You enter hours, review each run, and approve it every cycle. Neither takes payroll off your desk.',
  ],
  [
    'Where does BEG fit in a Rippling vs Gusto decision?',
    'BEG is not a party to either platform. If you want payroll run for you instead of software you log into, BEG managed payroll is the alternative: a flat $25-$45 PEPM, all-inclusive, inside your existing system, with an instant on-screen estimate instead of a sales quote or a subscription tier.',
  ],
];

export default function RipplingVsGustoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Rippling vs Gusto: An Honest Payroll Comparison',
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
              { '@type': 'ListItem', position: 3, name: 'Rippling vs Gusto', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="Rippling or Gusto: which payroll software actually fits your company?"
        description="One is a unified HR, IT, and payroll platform priced module by module. One is standalone payroll with pricing you can see today. Honest referee breakdown before you pick a login."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-payroll" />}
        heroStats={[
          { value: '$25-$45', label: 'BEG PEPM, all-inclusive' },
          { value: 'All 50', label: 'States covered' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: RIPPLING */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Rippling: a unified platform priced module by module</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.rippling.com/payroll" target="_blank" rel="noopener noreferrer">Rippling</a> positions itself as a unified system of record spanning payroll, HR, benefits, and IT device or app management, all built on one employee profile. That breadth is the core pitch: instead of separate tools for payroll and IT provisioning, one platform drives both from a single data model.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Pricing is largely quote-gated: Rippling advertises a starting per-employee figure, but the real cost depends on which modules you add, and a full quote for your company requires a sales conversation. Like every platform in this category, it remains software your team operates every cycle: entering hours, reviewing runs, approving pay.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: GUSTO */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>Gusto: standalone payroll with published pricing</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://gusto.com/pricing" target="_blank" rel="noopener noreferrer">Gusto</a> is built as a standalone payroll and HR platform with published tiers and per-employee pricing you can view before ever speaking to a sales rep. It does not offer the IT device and app management layer Rippling markets, focusing instead on payroll, benefits, and core HR for small and growing companies.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Gusto remains software: your team enters hours, reviews the run, and approves payroll every cycle. If your company does not need unified IT provisioning alongside payroll, Gusto's narrower, published-price scope is often simpler to evaluate than Rippling's modular quote.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Rippling vs Gusto, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Rippling</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Gusto</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Self-service software, unified with HR and IT modules', 'Standalone self-service software, published tiers'],
                    ['Pricing visibility', 'Largely quote-gated, modular and sales-dependent', 'Published tiers, linked on Gusto\'s pricing page'],
                    ['Who runs payroll', 'You: enter hours, review, approve each cycle', 'You: enter hours, review, approve each cycle'],
                    ['Tax filing responsibility', 'Platform files on your behalf per your modules', 'Platform files on your behalf per your plan'],
                    ['Ideal company size', 'Growing companies needing IT plus HR unification', 'Small and growing businesses, payroll-first needs'],
                    ['Support model', 'Support tickets plus onboarding specialists', 'Self-service help center plus support tickets'],
                  ].map(([factor, rippling, gusto], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{rippling}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{gusto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Gusto tiers per its published <a href="https://gusto.com/pricing" target="_blank" rel="noopener noreferrer">pricing page</a>. Rippling's full cost depends on modules selected and requires a sales quote.
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
                  title: 'You need IT device and app provisioning tied to HR',
                  body: 'Lean Rippling. The unified employee record driving both HR and IT access is the entire premise of the product. Get a modular quote to see what your specific stack would cost.',
                },
                {
                  title: 'You want a payroll-first tool with a visible price',
                  body: 'Lean Gusto. Published tiers let you budget before any sales call, and you are not paying for an IT layer you do not need.',
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
              Comparing other platforms too? See <Link href="/services/managed-payroll/paychex-vs-gusto">Paychex vs Gusto</Link> or <Link href="/services/managed-payroll/gusto-vs-adp">Gusto vs ADP</Link>.
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
                If you want software, Rippling and Gusto solve different problems: one unifies IT and HR, one keeps payroll simple and published. But either way, you still enter hours, review every run, and approve every cycle yourself.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If instead you want payroll run for you, inside your existing system, at a flat rate you can see before you talk to anyone, that is <Link href="/services/managed-payroll">BEG managed payroll</Link>: $25-$45 PEPM, all-inclusive, every filing and every W-2 handled. No software login for your team, no quote gate, no modules to configure.
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
              <h2>Rippling vs Gusto, answered</h2>
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
