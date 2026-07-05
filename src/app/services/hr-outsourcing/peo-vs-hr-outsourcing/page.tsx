import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'PEO vs HR Outsourcing: Which Fits Your Business? | BEG';
const DESCRIPTION = 'PEO vs HR outsourcing compared: co-employment, cost shape, benefits, control, and exit friction, so you can pick the right HR model.';
const URL = 'https://www.beghr.com/services/hr-outsourcing/peo-vs-hr-outsourcing';
const H1 = 'PEO or HR outsourcing: do you want a co-employer, or just the HR work done?';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-peo-vs-hr-outsourcing');

const FAQS: [string, string][] = [
  [
    'What is the main difference between a PEO and HR outsourcing?',
    'A PEO becomes your co-employer and runs employment under its structure. HR outsourcing delivers HR expertise and compliance work as a service while your company stays the only employer of record.',
  ],
  [
    'Is a PEO cheaper than HR outsourcing?',
    'Usually not. PEO pricing is quote-gated and often a percent of payroll, so it grows with every raise. HR outsourcing is typically a flat monthly fee that you can estimate instantly.',
  ],
  [
    'Do I lose control of my employees with a PEO?',
    'You keep day-to-day direction, but the PEO becomes employer of record for tax and benefits purposes, sets many policies, and files payroll under its structure. That is the co-employment tradeoff.',
  ],
  [
    'When does a PEO genuinely make more sense?',
    'When sponsored health benefits are the priority. PEOs pool thousands of worksite employees, which can unlock plan pricing a small company cannot buy alone. That buying power is real.',
  ],
  [
    'Is BEG a PEO?',
    'No. BEG HR outsourcing, powered by isolved, involves no co-employment and no employer-of-record change. You stay the employer; certified HR professionals handle the work. Pricing is a flat monthly estimate.',
  ],
];

export default function PeoVsHrOutsourcingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: H1,
            description: DESCRIPTION,
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
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
              { '@type': 'ListItem', position: 2, name: 'HR Outsourcing', item: 'https://www.beghr.com/services/hr-outsourcing' },
              { '@type': 'ListItem', position: 3, name: 'PEO vs HR Outsourcing', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Compared"
        title={H1}
        description="A PEO becomes your co-employer and bundles benefits, payroll, and HR under its tax structure. HR outsourcing delivers the HR expertise while you stay the only employer of record."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Not a PEO', label: 'No co-employment ever' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side By Side</p>
              <h2>PEO vs HR outsourcing, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>PEO</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>HR Outsourcing (BEG model)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Who employs your staff', 'Co-employment: the PEO becomes employer of record for tax and benefits purposes', 'You do, fully. No change to your employment relationship'],
                    ['Benefits plans', 'PEO-sponsored plans with pooled buying power across many worksite employees', 'Your plans stay yours; your broker relationship stays yours'],
                    ['Cost shape', 'Quote-gated, often a percent of payroll, so it rises with every raise', 'Flat monthly fee, instant on-screen estimate'],
                    ['Payroll taxes', 'Filed under the PEO structure; CPEO rules govern liability', 'Filed under your own EIN, your own rates and history'],
                    ['Policies and handbook', 'Built on the PEO template library, standardized across its client base', 'Built for your company and maintained as laws change'],
                    ['Compliance liability', 'Shared and allocated by contract; read the service agreement closely', 'Yours, with certified HR professionals guiding and documenting it'],
                    ['Control of HR decisions', 'Day-to-day direction stays with you; structure and plans sit with the PEO', 'Everything stays with you; the HR pros advise and execute'],
                    ['Leaving', 'Unwinding co-employment: benefits migration, payroll transition, tax accounts', 'Cancel the service; nothing about your employment structure changes'],
                  ].map(([factor, peo, beg], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{peo}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{beg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS, Certified Professional Employer Organizations</a> · <a href="https://www.napeo.org" target="_blank" rel="noopener noreferrer">NAPEO industry data</a>
            </p>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Differences</p>
              <h2>Five things that actually change when you pick one</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Co-employment is the fork in the road</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every other difference flows from this one. Under a PEO agreement, your people become worksite employees of the PEO for tax and benefits purposes while you keep day-to-day direction. That is a legal restructuring of the employment relationship, and the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS certifies CPEOs</a> specifically because federal employment tax liability shifts under it. HR outsourcing restructures nothing. Your company remains the sole employer, taxes file under your EIN, and the outside team does HR work on your behalf. We wrote a full plain-language explainer at <Link href="/services/hr-outsourcing/what-is-co-employment">what is co-employment</Link> if the mechanics matter to your decision.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits buying power: where PEOs genuinely win</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Honesty first: this is the strongest argument for a PEO and it is real. Because a PEO sponsors benefit plans across its entire client base, a 20-person company can access medical, dental, and retirement options priced on a pool of thousands of worksite employees. <a href="https://www.napeo.org" target="_blank" rel="noopener noreferrer">NAPEO</a>, the PEO industry association, builds much of its case on exactly this. If rich sponsored health benefits are your single biggest hiring lever, a PEO deserves a serious look. HR outsourcing does not sponsor plans; you keep your own broker and your own plans, which is a feature for control and a limitation for buying power.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Cost shape matters more than the sticker</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>PEO pricing is almost always quote-gated: you hand over your census and payroll data, wait for a proposal, and the fee is commonly a percent of total payroll or a per-employee monthly charge. A percent-of-payroll model means your HR bill rises every time you give a raise, which quietly punishes growth. HR outsourcing in the BEG model is a flat monthly fee tied to headcount and plan level, and the estimate appears on screen in about ninety seconds instead of after a sales cycle. Neither shape is dishonest, but you should know which one you are agreeing to before the demo starts.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Whose policies govern your workplace</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A PEO standardizes. Its handbook templates, leave procedures, and termination protocols are built to work across thousands of clients, which keeps the PEO efficient and keeps you inside its guardrails. For some owners that is a relief. For others it grates, because a policy tuned for the average client is rarely tuned for you. HR outsourcing flips the default: certified HR professionals build the handbook around your operations and your states, then maintain it as federal and state law changes. Guidance from the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">Department of Labor Wage and Hour Division</a> still applies either way; the question is who translates it into your policies.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Exit friction: the difference nobody prices in</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Leaving a PEO means unwinding co-employment: migrating everyone off PEO-sponsored benefits mid-relationship, re-establishing payroll under your own accounts, and rebuilding state unemployment history. Companies routinely time a PEO exit to January 1 just to keep tax wage bases clean. Leaving an HR outsourcing arrangement is closer to canceling a subscription, because nothing structural was ever moved. Your EIN, your plans, your accounts, and your files were yours the whole time. If you value optionality, that asymmetry belongs in the decision, not just the monthly fee. The full model comparison lives on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHICH SHOULD YOU CHOOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Which Should You Choose</p>
              <h2>Three honest scenarios</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'You want one bundled bill with sponsored health plans',
                  body: 'That is a PEO, full stop. If pooled benefits buying power is the reason you are shopping, HR outsourcing will not replicate it, and we will tell you exactly that on the call.',
                },
                {
                  title: 'You want the HR work done without changing who employs your people',
                  body: 'That is HR outsourcing. Handbook, compliance, leave administration, and live HR pros, while your EIN, your broker, and your employment relationship stay untouched. This is the BEG model.',
                },
                {
                  title: 'You are in a PEO and wondering about life after it',
                  body: 'Many companies graduate out once they can buy benefits on their own. HR outsourcing plus your own broker often replaces the PEO at a flat monthly cost, without percent-of-payroll pricing.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEG POSITIONING */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where BEG Fits</p>
              <h2>The no-co-employment model, priced in the open</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing, powered by isolved, gives you certified HR professionals, a custom handbook, and compliance monitoring across all 50 states, with you as the only employer your team ever has. No census upload, no sales cycle: answer six questions and your flat monthly estimate appears on screen. If your situation actually calls for a PEO, we will say so. Weighing an in-house hire instead? See <Link href="/services/hr-outsourcing/hr-outsourcing-vs-hiring-hr-manager">HR outsourcing vs hiring an HR manager</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>PEO vs HR outsourcing, answered</h2>
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
