import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';


export const metadata: Metadata = {
  title: 'ASO vs PEO: What Is the Actual Difference? | BEG',
  description: 'ASO vs PEO explained: employer of record, liability, benefit plan ownership, cost shape, and what leaving each model really looks like.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/aso-vs-peo' },
  openGraph: {
    title: 'ASO vs PEO: What Is the Actual Difference? | BEG',
    description: 'ASO vs PEO explained: employer of record, liability, benefit plan ownership, cost shape, and what leaving each model really looks like.',
    url: 'https://www.beghr.com/services/hr-outsourcing/aso-vs-peo',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'ASO vs PEO: What Is the Actual Difference? | BEG', description: 'ASO vs PEO explained: employer of record, liability, benefit plan ownership, cost shape, and what leaving each model really looks like.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-aso-vs-peo');

const FAQS: [string, string][] = [
  [
    'What does ASO stand for?',
    'Administrative Services Organization. An ASO administers HR, payroll, and benefits paperwork as a service while your company remains the sole employer of record for every legal and tax purpose.',
  ],
  [
    'Is an ASO the same as HR outsourcing?',
    'They overlap heavily. ASO is the industry label for administration-focused service without co-employment. HR outsourcing, the BEG model, adds certified HR professionals, compliance guidance, and strategy on the same no-co-employment foundation.',
  ],
  [
    'Who is liable for payroll taxes under each model?',
    'Under an ASO you are, filing under your own EIN. Under a certified PEO, the CPEO takes on federal employment tax liability for wages it pays, per IRS certification rules.',
  ],
  [
    'Can an ASO get me better health insurance rates?',
    'Not the way a PEO can. An ASO administers the plans you buy through your own broker. A PEO sponsors master plans pooled across clients, which is its genuine pricing advantage.',
  ],
  [
    'Which is easier to leave, an ASO or a PEO?',
    'An ASO, by a wide margin. Nothing structural moved, so you cancel the service. Leaving a PEO means migrating benefits, payroll accounts, and unemployment history back under your own name.',
  ],
];

export default function AsoVsPeoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ASO vs PEO: what actually changes when you sign?',
            description: 'ASO vs PEO explained: employer of record, liability, benefit plan ownership, cost shape, and what leaving each model really looks like.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/hr-outsourcing/aso-vs-peo',
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
              { '@type': 'ListItem', position: 3, name: 'ASO vs PEO', item: 'https://www.beghr.com/services/hr-outsourcing/aso-vs-peo' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Compared"
        title={'ASO vs PEO: what actually changes when you sign?'}
        description="An ASO administers HR and payroll while you remain the sole employer. A PEO enters co-employment, sponsors benefit plans under its own name, and shares employment tax responsibility."
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
              <h2>ASO vs PEO, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>ASO</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>PEO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Employer of record', 'You, for everything: taxes, benefits, liability', 'Co-employment: the PEO for tax and benefits purposes'],
                    ['Payroll tax filing', 'Under your EIN, your rates, your history', 'Under the PEO structure; CPEO rules allocate federal liability'],
                    ['Benefits plans', 'Your plans, bought through your own broker, administered for you', 'PEO-sponsored master plans with pooled buying power'],
                    ['Workers compensation', 'Your policy, sometimes administered by the ASO', 'Typically the PEO master policy'],
                    ['Compliance liability', 'Yours, with the ASO handling administration and paperwork', 'Shared and allocated by contract; read the agreement closely'],
                    ['Cost shape', 'Flat fee, typically per employee or per month', 'Quote-gated, often a percent of payroll'],
                    ['State unemployment', 'Your SUTA account and experience rating stay yours', 'Often runs under the PEO, then resets when you leave'],
                    ['Leaving', 'Cancel the service; your structure never moved', 'Unwind co-employment: benefits, payroll accounts, tax wage bases'],
                  ].map(([factor, aso, peo], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{aso}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{peo}</td>
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
              <h2>Where the two models genuinely diverge</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Employer of record: the line everything else follows</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>An ASO is an administrator. It processes payroll, files paperwork, and manages benefits enrollment, all in your name and under your EIN. A PEO is a co-employer: your staff become worksite employees of the PEO for tax and benefits purposes, a structure explained in plain language on our <Link href="/services/hr-outsourcing/what-is-co-employment">what is co-employment</Link> page. That single legal distinction drives liability, benefits access, cost shape, and exit friction. When a salesperson blurs the two models together, ask one question: whose EIN do my payroll taxes file under? The answer sorts every vendor in the market into one of these two columns.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Liability: who the IRS looks at first</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Under an ASO, tax and compliance liability stays with you; the ASO does the work but you sign the returns. Under a certified PEO, the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS CPEO program</a> makes the certified PEO solely liable for federal employment taxes on wages it pays to worksite employees. That sounds like pure upside for the PEO client, and for tax remittance risk it genuinely is. But most employment liability is not tax remittance: wrongful termination, wage and hour claims, and discrimination charges still land on the business that made the decision, whichever model it uses. Neither structure buys immunity from managing people badly.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits: plan ownership is the honest tradeoff</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A PEO sponsors master health and retirement plans pooled across its whole client base, and <a href="https://www.napeo.org" target="_blank" rel="noopener noreferrer">NAPEO</a> is right that this buying power is the model&apos;s strongest card: a small company can offer plans it could never negotiate alone. The tradeoff is control. The PEO picks the carriers, the plan lineup can change at renewal, and if you leave, the plans leave with it. Under an ASO you keep your own broker and your own plans, portable and yours, administered by someone else. Richer menu on rented terms, or your own menu on owned terms: that is the actual choice.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Cost shape: flat fee vs percent of payroll</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>ASO pricing is usually a flat fee per employee or per month, visible up front and stable as wages rise. PEO pricing is quote-gated and commonly structured as a percent of total payroll, which means the fee climbs with every raise and bonus you pay, whether or not the PEO did anything extra that month. PEO proposals also bundle benefits, administration, and service fees into one number, which makes comparison shopping genuinely hard. Neither shape is a scam, but they reward different behavior: flat fees reward growth, percent-of-payroll pricing quietly taxes it. Model the fee at your headcount two years from now, not today.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Leaving: the exit tells you what you signed</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Ending an ASO relationship is administrative: hand off the payroll calendar, export your records, done, because your EIN, benefit plans, and state accounts never moved. Ending a PEO relationship is a project. Employees must migrate off PEO-sponsored plans, payroll re-establishes under your accounts, and state unemployment wage bases can restart, which is why PEO exits cluster around January 1. None of this makes PEOs wrong; it makes them sticky, and stickiness is worth pricing before you enter rather than after. If you want the fuller three-model landscape, see <Link href="/services/hr-outsourcing/peo-vs-aso-vs-hro">PEO vs ASO vs HRO</Link>.</p>
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
                  title: 'Benefits are your recruiting weapon and you are under 50 employees',
                  body: 'A PEO is probably your answer. The pooled plans are real, and no ASO or HR outsourcing firm can match that buying power. We will tell you the same thing on a discovery call.',
                },
                {
                  title: 'You have a broker you trust and want the admin burden gone',
                  body: 'ASO-style service fits. You keep plan ownership and your EIN while the administration moves off your desk. BEG delivers this plus certified HR pros for compliance and employee relations.',
                },
                {
                  title: 'You mostly need HR judgment, not just administration',
                  body: 'Look past the ASO label to full HR outsourcing: handbook, leave guidance, manager coaching, compliance monitoring. Administration alone does not answer the 9pm termination question.',
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
              <h2>The ASO side of the line, with real HR depth</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing, powered by isolved, sits firmly on the no-co-employment side: you stay the employer of record while certified HR professionals handle the handbook, compliance monitoring, and day-to-day HR questions across all 50 states. Pricing is a flat monthly fee with an instant on-screen estimate, not a quote-gated proposal. Full plan detail lives on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>, and manufacturers weighing this exact choice can start with <Link href="/services/hr-outsourcing/manufacturing">HR outsourcing for manufacturing</Link>.
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
              <h2>ASO vs PEO, answered</h2>
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
