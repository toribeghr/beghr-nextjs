import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Insperity vs TriNet: An Honest PEO Comparison | BEG';
const DESC = 'Insperity vs TriNet refereed honestly: high-touch generalist PEO vs industry-vertical PEO. Both co-employment, both quote-gated. Which fits?';
const URL = 'https://www.beghr.com/services/hr-outsourcing/insperity-vs-trinet';

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

const CALENDLY = getCalendlyLink('hr-outsourcing-insperity-vs-trinet');

const FAQS: [string, string][] = [
  [
    'Do Insperity and TriNet both use co-employment?',
    'Yes. Under both published models, the PEO becomes the employer of record for tax and benefits purposes, your team moves onto PEO-sponsored benefits plans, and you keep directing the day-to-day work. That structure is the product, with either vendor.',
  ],
  [
    'What does TriNet mean by industry-vertical PEO?',
    'TriNet organizes its offering around specific industries, such as technology, life sciences, financial services, and nonprofits, with benefits packages and HR guidance framed for each vertical. Insperity positions itself as a high-service generalist across industries instead.',
  ],
  [
    'Which costs more, Insperity or TriNet?',
    'Neither publishes pricing, so there is no honest general answer. Both quote per company based on census, states, and benefits selections. The only reliable comparison is two quotes on the same data, read all-in: administrative fees plus what employees actually pay for benefits.',
  ],
  [
    'Can we leave a PEO like Insperity or TriNet easily?',
    'Leaving either means unwinding co-employment: taking back employer of record status, replacing PEO-sponsored benefits mid-relationship, and standing up payroll and HR support again. It is doable, and companies do it, but plan for real transition work.',
  ],
  [
    'Where does BEG fit in an Insperity vs TriNet decision?',
    'BEG is not a PEO. If the co-employment structure is the part you are hesitating on, BEG HR outsourcing, powered by isolved, delivers certified HR professionals for compliance, handbooks, and manager support while you stay the employer and keep your own benefits, with an instant on-screen estimate.',
  ],
];

export default function InsperityVsTrinetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Insperity vs TriNet: An Honest PEO Comparison',
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
              { '@type': 'ListItem', position: 2, name: 'HR Outsourcing', item: 'https://www.beghr.com/services/hr-outsourcing' },
              { '@type': 'ListItem', position: 3, name: 'Insperity vs TriNet', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Compared"
        title="Insperity or TriNet: high-touch generalist or industry specialist?"
        description="Both are certified PEOs and both put your team into co-employment. Insperity sells service intensity across any industry; TriNet organizes its entire offer around specific industry verticals."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Not a PEO', label: 'No co-employment ever' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: INSPERITY */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Insperity: the high-touch generalist</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.insperity.com" target="_blank" rel="noopener noreferrer">Insperity</a> is one of the longest-running names in the PEO industry, and its published positioning has been consistent for years: the differentiator is service, not software. Clients get dedicated service teams and assigned HR specialists rather than a self-serve portal with a support queue. The underlying structure is standard certified PEO co-employment, verifiable on the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS CPEO registry</a>: Insperity becomes the employer of record for tax and benefits purposes and your team moves onto Insperity-sponsored plans.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Insperity does not specialize by industry. That is a feature if your business does not map neatly to a vertical, and a gap if you want an account team that already speaks your industry&apos;s language on day one. It is widely regarded as a premium-priced option, though nothing is published: pricing is quote-gated, built per company from your census and benefits selections.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: TRINET */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>TriNet: the PEO organized by industry</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.trinet.com" target="_blank" rel="noopener noreferrer">TriNet</a> takes the opposite bet: instead of one service model for everyone, it packages its PEO by industry vertical, with offerings framed for technology, life sciences, financial services, nonprofits, and other segments. The pitch is that a startup competing for engineers and a nonprofit managing grant-funded headcount need different benefits and different HR guidance, so the vendor should arrive pre-tuned. Structurally it is the same certified PEO model: co-employment, TriNet-sponsored benefits plans, TriNet as employer of record for tax purposes.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                TriNet leans enterprise in feel: strong benefits access aimed at companies competing for talent, with technology and process built to scale. Companies that want the hands-on, named-team relationship Insperity markets sometimes find TriNet more transactional; companies that want vertical fluency sometimes find generalists slower to understand them. Like Insperity, TriNet publishes no pricing: expect a census, a sales process, and a custom quote.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Insperity vs TriNet, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Insperity</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>TriNet</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Model', 'Certified PEO, co-employment, generalist', 'Certified PEO, co-employment, industry-vertical'],
                    ['Who employs your staff', 'Insperity becomes employer of record for tax and benefits', 'TriNet becomes employer of record for tax and benefits'],
                    ['Benefits approach', 'Insperity-sponsored master plans, service team administers', 'TriNet-sponsored plans framed per industry vertical'],
                    ['Pricing visibility', 'Quote-gated, census and sales call required', 'Quote-gated, census and sales call required'],
                    ['Ideal company size', 'Growing companies that want hands-on HR guidance', 'Venture-backed and enterprise-leaning teams in a covered vertical'],
                    ['Platform', 'Insperity platform built around the service relationship', 'TriNet platform built to scale, more self-serve in feel'],
                    ['Exit friction', 'High: unwind co-employment and replace benefits', 'High: unwind co-employment and replace benefits'],
                  ].map(([factor, insperity, trinet], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{insperity}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{trinet}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on each company&apos;s published model. Verify certification on the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS CPEO registry</a>.
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
                  title: 'You are a tech or life sciences company competing for talent',
                  body: 'Lean TriNet. Its whole model is pre-packaging benefits and HR guidance for verticals like yours, and candidates comparing offers will be comparing benefits. A generalist can serve you; a specialist arrives already fluent.',
                },
                {
                  title: 'Your managers need coaching, not just a benefits card',
                  body: 'Lean Insperity. Its published model is dedicated service teams and hands-on HR guidance across any industry. If the value you want from a PEO is the human help, buy the vendor that prices around the human help.',
                },
                {
                  title: 'You mainly want the HR expertise, not a new employer of record',
                  body: 'Then the vertical vs generalist question is the wrong question. Both options here replace your benefits and take employer of record status. Compare the models first: PEO vs HR outsourcing is the decision underneath this one.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Sizing up the giants instead? See <Link href="/services/hr-outsourcing/adp-totalsource-vs-insperity">ADP TotalSource vs Insperity</Link>. Smaller team? Start with <Link href="/services/hr-outsourcing/trinet-vs-justworks">TriNet vs Justworks</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Either way, you are buying co-employment. Decide that first.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If co-employment is the structure you want, both of these are serious, certified operators: pick the one whose service model matches how you like to be served, and make each quote compete against the other. But service style is the second decision. The first is whether you want to hand over employer of record status and move your people onto a PEO&apos;s benefits plans at all. If the answer is no, the honest comparison is <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs HR outsourcing</Link>, not Insperity vs TriNet.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The other model is <Link href="/services/hr-outsourcing">BEG HR outsourcing</Link>, powered by isolved: certified HR professionals on your handbook, compliance, leave administration, and manager questions, while you stay the employer and your benefits stay yours. No co-employment, and no quote gate: answer six questions and your estimate is on screen in about 90 seconds.
              </p>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <PricingCta service="hr-outsourcing" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Insperity vs TriNet, answered</h2>
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
