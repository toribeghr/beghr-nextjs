import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'PEO vs ASO vs HRO: Three HR Models Compared | BEG';
const DESCRIPTION = 'PEO vs ASO vs HRO in one table: co-employment, benefits, cost shape, and control, plus honest guidance on which model fits your company.';
const URL = 'https://www.beghr.com/services/hr-outsourcing/peo-vs-aso-vs-hro';
const H1 = 'PEO, ASO, or HRO: which HR model fits your company?';

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

const CALENDLY = getCalendlyLink('hr-outsourcing-peo-vs-aso-vs-hro');

const FAQS: [string, string][] = [
  [
    'What do PEO, ASO, and HRO stand for?',
    'Professional Employer Organization, Administrative Services Organization, and Human Resources Outsourcing. PEOs co-employ your staff; ASOs administer HR in your name; HRO delegates defined HR functions to outside professionals.',
  ],
  [
    'Which of the three models involves co-employment?',
    'Only the PEO. Under a PEO agreement your employees become worksite employees of the PEO for tax and benefits purposes. ASO and HRO leave your employment structure completely untouched.',
  ],
  [
    'Which model is cheapest?',
    'Shapes differ more than stickers. PEOs are quote-gated, often a percent of payroll. ASO and HRO run flat monthly fees. Model each at your headcount two years out before comparing.',
  ],
  [
    'Can I combine models?',
    'Yes, and many companies do: HRO for compliance and employee relations alongside their own broker for benefits, for example. The models are building blocks, not religions.',
  ],
  [
    'Which model is BEG?',
    'HRO with ASO-grade administration behind it: HR outsourcing, powered by isolved, with no co-employment. You stay the employer; certified HR professionals do the work at a flat monthly fee.',
  ],
];

export default function PeoVsAsoVsHroPage() {
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
              { '@type': 'ListItem', position: 3, name: 'PEO vs ASO vs HRO', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Compared"
        title={H1}
        description="PEOs co-employ your staff and bundle sponsored benefits. ASOs administer HR without co-employment. HRO delegates defined HR functions to outside professionals while you keep full employer control."
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
              <p className="eyebrow">The Three Models</p>
              <h2>PEO vs ASO vs HRO in one table</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>PEO</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>ASO</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>HRO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Employer of record', 'Co-employment: the PEO, for tax and benefits purposes', 'You', 'You'],
                    ['Core promise', 'One bundled employment infrastructure', 'HR and payroll administration done for you', 'HR expertise and functions delivered as a service'],
                    ['Benefits plans', 'PEO-sponsored, pooled buying power', 'Your plans, administered for you', 'Your plans; HRO advises and administers by scope'],
                    ['Payroll taxes', 'Filed under the PEO structure; CPEO rules apply', 'Under your EIN', 'Under your EIN'],
                    ['Compliance work', 'Standardized across the PEO client base', 'Paperwork and filings handled', 'Handbook, policies, monitoring, and live HR guidance'],
                    ['Cost shape', 'Quote-gated, often percent of payroll', 'Flat fee, typically per employee', 'Flat monthly, instant estimate in the BEG model'],
                    ['Best at', 'Sponsored benefits for small headcounts', 'Taking administration off your desk', 'HR judgment, compliance depth, employee relations'],
                    ['Leaving', 'Unwind co-employment: benefits, payroll, tax accounts', 'Cancel; nothing structural moved', 'Cancel; nothing structural moved'],
                  ].map(([factor, peo, aso, hro], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{peo}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{aso}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{hro}</td>
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
              <p className="eyebrow">Understanding The Models</p>
              <h2>What each model is actually built to do</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>PEO: employment infrastructure, rented whole</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A Professional Employer Organization takes on your workforce as worksite employees under co-employment, then supplies the whole employment stack: payroll, sponsored benefits, workers compensation, and HR support, on its templates and inside its structure. The <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS CPEO program</a> exists because federal employment tax liability genuinely shifts under this model. The PEO&apos;s honest superpower is benefits: pooled plans across thousands of worksite employees give a 15-person company access it could never buy alone. The honest cost is structural: your people sit inside someone else&apos;s employment framework, and unwinding it later is a project, not a cancellation.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>ASO: administration without the co-employer</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>An Administrative Services Organization does the paperwork of employment in your name: payroll processing, tax filings under your own EIN, benefits enrollment on plans you buy through your own broker. Nothing about your legal structure changes, which keeps liability with you but also keeps ownership with you. The model shines when the pain is administrative volume rather than HR judgment. Its limit is equally clear: an ASO processes what you decide, but it is not built to tell you whether the termination you are about to run is defensible. The full breakdown of that pairing lives on <Link href="/services/hr-outsourcing/aso-vs-peo">ASO vs PEO</Link>.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>HRO: the expertise layer, delivered as a service</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Human Resources Outsourcing delegates defined HR functions, not employment itself, to outside professionals: handbook and policy construction, compliance monitoring across your states, leave administration guidance, manager coaching, and a live expert for the hard conversations. You remain the only employer, taxes file under your EIN, and rules from agencies like the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">Department of Labor Wage and Hour Division</a> get translated into policies built for your company rather than a template averaged across thousands of clients. HRO assumes you can buy your own benefits; what it adds is the HR department you do not have, at a fraction of the headcount cost.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The pricing shapes tell you who profits from your growth</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Strip the acronyms and three pricing shapes remain. PEOs are quote-gated, commonly a percent of payroll, so the fee climbs with every raise you give even when service stays identical. ASOs charge flat per-employee fees that scale with headcount, not wages. HRO in the BEG model is a flat monthly fee by headcount band and plan level, estimated on screen before anyone calls you. The diagnostic question is simple: when my payroll grows 20 percent, what happens to this bill? Any vendor who cannot answer that in one sentence is telling you something useful about the proposal you are about to receive.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Most companies are choosing between two, not three</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>In practice the three-way decision collapses fast. If sponsored benefits buying power is the priority, you are choosing among PEOs and the other two models are irrelevant. If you already have benefits handled, you are choosing between administration (ASO) and administration plus HR expertise (HRO), and the deciding variable is how often you face judgment calls: terminations, accommodations, leave disputes, multi-state hires. Companies with real employee-relations volume outgrow pure administration quickly. The <Link href="/services/hr-outsourcing">HR outsourcing overview</Link> shows how BEG structures that expertise layer, and <Link href="/services/hr-outsourcing/hr-outsourcing-vs-hiring-hr-manager">HR outsourcing vs hiring an HR manager</Link> covers the build-or-buy version of the same question.</p>
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
                  title: 'You want one bundled bill including sponsored health plans',
                  body: 'That is a PEO, and we will tell you so on the call. No ASO or HRO can pool benefits the way co-employment allows. Just price the exit before you sign the entrance.',
                },
                {
                  title: 'Payroll admin is drowning you but HR questions are rare',
                  body: 'ASO-style administration may be all you need today. Buy the smaller thing first; you can add the expertise layer when terminations and leave cases start finding you.',
                },
                {
                  title: 'You keep facing judgment calls with nobody qualified to make them',
                  body: 'That is HRO. Multi-state compliance, a defensible handbook, live HR professionals for the hard conversations, while your employment structure stays exactly as it is. This is the BEG model.',
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
              <h2>HRO depth, no co-employment, price on screen</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing, powered by isolved, is the no-co-employment model: certified HR professionals, a handbook built for your states, and compliance monitoring across all 50, while you remain the only employer your team ever has. Answer six questions and your flat monthly estimate appears in about ninety seconds. Construction firms comparing models under prevailing-wage pressure can start at <Link href="/services/hr-outsourcing/construction">HR outsourcing for construction</Link>.
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
              <h2>PEO vs ASO vs HRO, answered</h2>
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
