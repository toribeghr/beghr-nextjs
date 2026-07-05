import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'TriNet vs Justworks: An Honest PEO Comparison | BEG';
const DESC = 'TriNet vs Justworks refereed honestly: industry-vertical enterprise PEO vs simple transparent-pricing PEO for small teams. Which one fits?';
const URL = 'https://www.beghr.com/services/hr-outsourcing/trinet-vs-justworks';

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

const CALENDLY = getCalendlyLink('hr-outsourcing-trinet-vs-justworks');

const FAQS: [string, string][] = [
  [
    'Are TriNet and Justworks both PEOs with co-employment?',
    'Yes. Under both published models the PEO becomes the employer of record for tax and benefits purposes, your team moves onto PEO-sponsored benefits plans, and you keep running the day-to-day work. The difference is who each one is built for, not the underlying structure.',
  ],
  [
    'Does Justworks really publish its pricing?',
    'Yes. Justworks publishes per-employee rates on its own pricing page, which is unusual in the PEO industry. TriNet does not publish pricing; it quotes each company individually after a census and a sales process.',
  ],
  [
    'Is TriNet overkill for a ten-person company?',
    'Often, yes, and that is not an insult to TriNet. Its vertical packaging and enterprise-leaning benefits are aimed at companies competing for talent at scale. Many ten-person teams choose Justworks precisely because it is simpler to buy and simpler to run.',
  ],
  [
    'What happens to our benefits if we leave either PEO?',
    'Both models sponsor the benefits plans your employees use, so leaving means replacing coverage, not just switching software. That is the biggest piece of exit friction with any PEO and it deserves a line in your decision memo before you sign.',
  ],
  [
    'Where does BEG fit in a TriNet vs Justworks decision?',
    'BEG is not a PEO. If what you want is certified HR professionals on compliance, handbooks, and manager support while you stay the employer and keep your own benefits, BEG HR outsourcing, powered by isolved, is the alternative model, and the estimate is instant and on screen instead of quote-gated.',
  ],
];

export default function TrinetVsJustworksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'TriNet vs Justworks: An Honest PEO Comparison',
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
              { '@type': 'ListItem', position: 3, name: 'TriNet vs Justworks', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Compared"
        title="TriNet or Justworks: which PEO fits the size of your team?"
        description="Both are PEOs built on co-employment. TriNet packages enterprise-leaning benefits by industry vertical; Justworks sells simplicity and published per-employee pricing for smaller teams. Honest breakdown."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Not a PEO', label: 'No co-employment ever' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: TRINET */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>TriNet: the enterprise-leaning vertical PEO</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.trinet.com" target="_blank" rel="noopener noreferrer">TriNet</a> is a certified PEO that organizes its entire offering by industry vertical: technology, life sciences, financial services, nonprofits, and more, each with benefits packages and HR guidance framed for that segment. The structure underneath is standard co-employment, verifiable on the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS CPEO registry</a>: TriNet becomes the employer of record for tax and benefits purposes and your team moves onto TriNet-sponsored plans.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                TriNet&apos;s natural buyer is a company competing for talent against bigger employers: the pitch is enterprise-grade benefits and vertical fluency without building an HR department. The tradeoffs are the classic enterprise ones. Pricing is quote-gated behind a census and a sales process, the platform can feel like more machine than a small team needs, and the vertical packaging matters less if your company does not fit one of the verticals.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: JUSTWORKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>Justworks: the PEO that shows you the price</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.justworks.com" target="_blank" rel="noopener noreferrer">Justworks</a> built its reputation on doing the one thing PEOs almost never do: publishing per-employee rates on its own <a href="https://www.justworks.com/pricing" target="_blank" rel="noopener noreferrer">pricing page</a>. The product matches the pricing philosophy: a clean, simple platform aimed at small teams and first-time PEO buyers, with payroll, benefits access, and compliance support bundled into the co-employment arrangement. Structurally it is the same certified PEO model as TriNet: Justworks becomes the employer of record for tax purposes and sponsors the benefits plans.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The honest limits: Justworks is built for simplicity, not depth. There is no industry-vertical packaging, and companies that outgrow the small-team profile or need heavyweight, hands-on HR guidance can find themselves shopping again in a few years. But for a founder who wants to see the price before talking to sales and be running in weeks, the appeal is obvious.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>TriNet vs Justworks, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>TriNet</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Justworks</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Model', 'Certified PEO, co-employment, industry-vertical', 'Certified PEO, co-employment, simplicity-first'],
                    ['Who employs your staff', 'TriNet becomes employer of record for tax and benefits', 'Justworks becomes employer of record for tax and benefits'],
                    ['Benefits approach', 'TriNet-sponsored plans framed per industry vertical', 'Justworks-sponsored plans, straightforward menu for small teams'],
                    ['Pricing visibility', 'Quote-gated, census and sales call required', 'Published per-employee rates on its pricing page'],
                    ['Ideal company size', 'Venture-backed and enterprise-leaning teams in a covered vertical', 'Small teams and first-time PEO buyers'],
                    ['Platform', 'Enterprise-leaning, built to scale', 'Simple and self-serve by design'],
                    ['Exit friction', 'High: unwind co-employment and replace benefits', 'High: same co-employment unwind, simpler platform to leave'],
                  ].map(([factor, trinet, justworks], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{trinet}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{justworks}</td>
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
                  title: 'You are under 25 employees and want to move this quarter',
                  body: 'Lean Justworks. Published rates mean you can budget before the first sales call, and the platform is built for teams your size. Save the enterprise evaluation for when you have an enterprise problem.',
                },
                {
                  title: 'You are a funded company hiring against big-brand offers',
                  body: 'Lean TriNet. Vertical packaging and enterprise-leaning benefits are the point: your candidates compare benefits line by line, and a PEO tuned to your industry is easier to sell internally to a board.',
                },
                {
                  title: 'You want HR help but do not want a new employer of record',
                  body: 'Then neither is the answer yet, because both replace your benefits plans and take employer of record status. Read a model-level comparison, PEO vs HR outsourcing, before spending time on vendor demos.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Comparing TriNet upmarket instead? See <Link href="/services/hr-outsourcing/insperity-vs-trinet">Insperity vs TriNet</Link>. Justworks against the biggest ecosystem? <Link href="/services/hr-outsourcing/justworks-vs-adp-totalsource">Justworks vs ADP TotalSource</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Size fit matters. Model fit matters more.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If co-employment is what you want, this one is genuinely about stage: Justworks for the small team that values simplicity and a visible price, TriNet for the funded company that needs vertical depth and benefits firepower. Both are credible picks. But both also share the same fine print: your company stops being the employer of record, and your benefits plans become their benefits plans. If that is the part giving you pause, compare <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs HR outsourcing</Link> before you compare these two again.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                <Link href="/services/hr-outsourcing">BEG HR outsourcing</Link>, powered by isolved, is that other model: certified HR professionals on your handbook, compliance, leave administration, and manager questions, while you stay the employer and keep your own benefits and broker. And in the spirit of the Justworks column, there is no quote gate: answer six questions and your estimate appears on screen in about 90 seconds.
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
              <h2>TriNet vs Justworks, answered</h2>
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
