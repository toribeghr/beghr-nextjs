import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Gusto vs QuickBooks Payroll: Compared, Instant Quote | BEG';
const DESC = 'Gusto and QuickBooks Payroll published tiers compared honestly: standalone payroll vs bookkeeping integration. Plus the flat-PEPM alternative.';
const URL = 'https://www.beghr.com/services/managed-payroll/gusto-vs-quickbooks-payroll';

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

const CALENDLY = getCalendlyLink('managed-payroll-gusto-vs-quickbooks-payroll');

const FAQS: [string, string][] = [
  [
    'Do Gusto and QuickBooks Payroll both publish their pricing?',
    'Yes. Both publish tiered plans on their own pricing pages, typically a base fee plus a per-employee monthly add-on. Confirm current tiers directly on each company\'s site since published numbers can change.',
  ],
  [
    'Do I need QuickBooks accounting software to use QuickBooks Payroll?',
    'QuickBooks Payroll is built to integrate tightly with QuickBooks Online, and its core selling point is that integration. If you already do your books in QuickBooks, that connection is the main reason to consider it over a standalone product like Gusto.',
  ],
  [
    'Does Gusto work if I do not use QuickBooks for accounting?',
    'Yes. Gusto is a standalone payroll and HR platform that integrates with several accounting tools rather than being built around one. If you use a different bookkeeping system, or none at all, Gusto does not require QuickBooks.',
  ],
  [
    'Do either of these run payroll for me?',
    'No. Both Gusto and QuickBooks Payroll are software you or your team operate directly. You enter hours, review each run, and approve it every cycle. Neither takes payroll off your desk.',
  ],
  [
    'Where does BEG fit in a Gusto vs QuickBooks Payroll decision?',
    'BEG is not a party to either platform. If you want payroll run for you instead of software you log into every cycle, BEG managed payroll is the alternative: a flat $25-$45 PEPM, all-inclusive, inside your existing system, with an instant on-screen estimate instead of a subscription tier.',
  ],
];

export default function GustoVsQuickbooksPayrollPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Gusto vs QuickBooks Payroll: An Honest Comparison',
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
              { '@type': 'ListItem', position: 3, name: 'Gusto vs QuickBooks Payroll', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Payroll · Compared"
        title="Gusto or QuickBooks Payroll: which payroll software actually fits your company?"
        description="Both publish their pricing. One is standalone, one is built around QuickBooks accounting. Honest referee breakdown before you pick a login."
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
              <h2>Gusto: standalone payroll with published pricing</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://gusto.com/pricing" target="_blank" rel="noopener noreferrer">Gusto</a> is built as a standalone payroll and HR platform, with published tiers and per-employee pricing you can view before ever speaking to a sales rep. It integrates with several accounting tools rather than being anchored to one, which makes it a fit whether or not your bookkeeping runs through QuickBooks.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Gusto remains software: your team enters hours, reviews the run, and approves payroll every cycle. Higher tiers add features like time tracking and additional HR tools. Because published pricing can change, always confirm current numbers on Gusto's own pricing page.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: QUICKBOOKS PAYROLL */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>QuickBooks Payroll: built around the QuickBooks ecosystem</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://quickbooks.intuit.com/payroll/pricing/" target="_blank" rel="noopener noreferrer">QuickBooks Payroll</a> also publishes tiered pricing on Intuit's own pricing page. Its core differentiator is integration: if your books already run through QuickBooks Online, payroll data flows directly into your general ledger without a separate sync step, which is the main reason companies already on QuickBooks consider it over a standalone product.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Like Gusto, QuickBooks Payroll remains software your team operates every cycle: entering hours, reviewing runs, approving pay. If you do not use QuickBooks for accounting, that integration advantage disappears and the decision comes down to feature set and published price at your headcount.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Gusto vs QuickBooks Payroll, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Gusto</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>QuickBooks Payroll</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Payroll model', 'Standalone self-service software, published tiers', 'Self-service software, published tiers'],
                    ['Pricing visibility', 'Published tiers, linked on Gusto\'s pricing page', 'Published tiers, linked on Intuit\'s pricing page'],
                    ['Who runs payroll', 'You: enter hours, review, approve each cycle', 'You: enter hours, review, approve each cycle'],
                    ['Tax filing responsibility', 'Platform files on your behalf per your plan', 'Platform files on your behalf per your plan'],
                    ['Ideal company size', 'Small and growing businesses, any bookkeeping tool', 'Small businesses already on QuickBooks Online'],
                    ['Support model', 'Self-service help center plus support tickets', 'Self-service help center plus support tickets'],
                  ].map(([factor, gusto, qb], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{gusto}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{qb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Tiers per each company&apos;s published pricing page: <a href="https://gusto.com/pricing" target="_blank" rel="noopener noreferrer">Gusto</a> and <a href="https://quickbooks.intuit.com/payroll/pricing/" target="_blank" rel="noopener noreferrer">QuickBooks Payroll</a>.
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
                  title: 'You already do your books in QuickBooks Online',
                  body: 'Lean QuickBooks Payroll. The direct ledger integration removes a sync step you would otherwise manage manually or through a connector, and it keeps everything under one Intuit login.',
                },
                {
                  title: 'You use a different bookkeeping tool or none at all',
                  body: 'Lean Gusto. It was not built around any single accounting product, so you are not paying for an integration advantage you cannot use.',
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
              Comparing other platforms too? See <Link href="/services/managed-payroll/adp-vs-quickbooks-payroll">ADP vs QuickBooks Payroll</Link> or <Link href="/services/managed-payroll/paychex-vs-gusto">Paychex vs Gusto</Link>.
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
                If you want software, Gusto and QuickBooks Payroll are both transparent on price and both a reasonable choice depending on your bookkeeping stack. But either way, you still enter hours, review every run, and approve every cycle yourself.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If instead you want payroll run for you, inside your existing system, at a flat rate you can see before you talk to anyone, that is <Link href="/services/managed-payroll">BEG managed payroll</Link>: $25-$45 PEPM, all-inclusive, every filing and every W-2 handled. No software login for your team, no subscription tier to outgrow.
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
              <h2>Gusto vs QuickBooks Payroll, answered</h2>
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
