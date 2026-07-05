import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Justworks vs ADP TotalSource: An Honest Comparison | BEG';
const DESC = 'Justworks vs ADP TotalSource refereed honestly: simple transparent-pricing PEO for small teams vs enterprise PEO ecosystem. Which one fits?';
const URL = 'https://www.beghr.com/services/hr-outsourcing/justworks-vs-adp-totalsource';

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

const CALENDLY = getCalendlyLink('hr-outsourcing-justworks-vs-adp-totalsource');

const FAQS: [string, string][] = [
  [
    'Do Justworks and ADP TotalSource both use co-employment?',
    'Yes. Both are certified PEOs, and under both published models the PEO becomes the employer of record for tax and benefits purposes while you direct the work. Your team moves onto PEO-sponsored benefits plans with either vendor.',
  ],
  [
    'Why does Justworks publish pricing when ADP TotalSource does not?',
    'It is a deliberate positioning choice. Justworks publishes per-employee rates on its pricing page and sells simplicity to small teams. TotalSource quotes per company after a census and sales process, which is the industry norm at enterprise scale.',
  ],
  [
    'Can a small company use ADP TotalSource?',
    'Companies do, especially ones already inside the ADP ecosystem for payroll. But the model, the sales motion, and the platform are all tuned for bigger organizations, and many small teams find the Justworks buying experience a better match for their stage.',
  ],
  [
    'What does leaving either PEO involve?',
    'The same structural work with both: taking back employer of record status, replacing PEO-sponsored benefits, and re-standing payroll and HR support. Exit friction is a property of the co-employment model itself, not of one vendor.',
  ],
  [
    'Where does BEG fit in a Justworks vs ADP TotalSource decision?',
    'BEG is not a PEO and never takes co-employment. If you want certified HR professionals on compliance, handbooks, and manager support while you stay the employer and keep your own benefits, that is BEG HR outsourcing, powered by isolved, with an instant on-screen estimate instead of a sales cycle.',
  ],
];

export default function JustworksVsAdpTotalsourcePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Justworks vs ADP TotalSource: An Honest Comparison',
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
              { '@type': 'ListItem', position: 3, name: 'Justworks vs ADP TotalSource', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Compared"
        title="Justworks or ADP TotalSource: simple PEO or enterprise ecosystem?"
        description="Both are certified PEOs built on co-employment. Justworks sells simplicity and published per-employee pricing to small teams; ADP TotalSource sells the scale of the whole ADP ecosystem."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Not a PEO', label: 'No co-employment ever' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: JUSTWORKS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Justworks: the small-team PEO with the price on the website</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.justworks.com" target="_blank" rel="noopener noreferrer">Justworks</a> is the PEO that broke the industry habit of hiding the price: per-employee rates sit on its public <a href="https://www.justworks.com/pricing" target="_blank" rel="noopener noreferrer">pricing page</a>, and the whole product follows that philosophy. It is a clean, simple platform aimed at small teams and first-time PEO buyers, bundling payroll, benefits access, and compliance support into a certified co-employment arrangement: Justworks becomes the employer of record for tax purposes and sponsors the benefits plans your team enrolls in.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The honest limits track the positioning. Justworks is built for simplicity, not for enterprise depth, and it does not bring a sprawling technology ecosystem behind it. Teams that grow into complex multi-entity structures, heavy reporting needs, or industry-specific requirements can find themselves shopping upmarket in a few years. For its intended buyer, though, being able to see the number before the first sales call is a genuinely rare feature in this market.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: ADP TOTALSOURCE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>ADP TotalSource: the PEO inside the biggest HR machine</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.adp.com/what-we-offer/products/adp-totalsource.aspx" target="_blank" rel="noopener noreferrer">ADP TotalSource</a> is the PEO arm of ADP and positions itself as among the largest certified PEOs in the country. Its pitch is the opposite of boutique: one giant vendor whose payroll technology already runs a huge share of American businesses, with the PEO layered on top so benefits, workers compensation, and HR support flow through the same ecosystem. Like Justworks, the structure is certified co-employment: ADP becomes the employer of record for tax and benefits purposes, and its certification is verifiable on the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS CPEO registry</a>.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Scale is the sell and scale is the complaint. Buyers get big-carrier benefits access and technology depth a small vendor cannot match; they also get an enterprise sales process, quote-gated pricing built per company from a census, and a platform that can feel like more machine than a 15-person team needs. TotalSource fits best when your company is, or plans to become, the kind of organization ADP built it for.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Justworks vs ADP TotalSource, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Justworks</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>ADP TotalSource</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Model', 'Certified PEO, co-employment, simplicity-first', 'Certified PEO, co-employment, ecosystem-first'],
                    ['Who employs your staff', 'Justworks becomes employer of record for tax and benefits', 'ADP becomes employer of record for tax and benefits'],
                    ['Benefits approach', 'Justworks-sponsored plans, straightforward menu', 'ADP-sponsored master plans, big-carrier access via ADP scale'],
                    ['Pricing visibility', 'Published per-employee rates on its pricing page', 'Quote-gated, census and sales call required'],
                    ['Ideal company size', 'Small teams and first-time PEO buyers', 'Mid-size and up, especially existing ADP payroll users'],
                    ['Platform', 'Simple and self-serve by design', 'The broader ADP technology stack'],
                    ['Exit friction', 'High: unwind co-employment and replace benefits', 'High: unwind co-employment, replace benefits, migrate payroll'],
                  ].map(([factor, justworks, adp], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{justworks}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{adp}</td>
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
                  title: 'You are a 10-person team buying your first PEO',
                  body: 'Lean Justworks. You can budget from the public rate card, onboarding is built for teams like yours, and you are not paying for enterprise machinery you will not touch. Revisit the decision when your headcount does.',
                },
                {
                  title: 'You already run ADP payroll and are scaling past 50',
                  body: 'Lean TotalSource. Ecosystem continuity is real: same vendor, connected systems, benefits and workers compensation folded in, and a platform that will not need replacing at the next growth stage.',
                },
                {
                  title: 'You want HR expertise but not a new employer of record',
                  body: 'Then step back before choosing either, because both replace your benefits plans and take employer of record status. The model-level comparison, PEO vs HR outsourcing, is the decision hiding underneath this one.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Comparing the giants against each other? See <Link href="/services/hr-outsourcing/adp-totalsource-vs-insperity">ADP TotalSource vs Insperity</Link>. Justworks against its closer rival? <Link href="/services/hr-outsourcing/trinet-vs-justworks">TriNet vs Justworks</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Small and simple or big and deep: both still mean co-employment</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If co-employment is the structure you want, this matchup mostly decides itself on company size and ecosystem: Justworks for the small team that values a visible price and a simple platform, TotalSource for the organization that wants one giant vendor and is big enough to get its attention. Both are certified, both are credible. And both come with the same fine print: employer of record status moves to the PEO, and your benefits plans become their benefits plans. If that trade is the part you are unsure about, read <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs HR outsourcing</Link> before booking either demo.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The alternative model is <Link href="/services/hr-outsourcing">BEG HR outsourcing</Link>, powered by isolved: certified HR professionals on your handbook, compliance, leave administration, and manager questions, while your company stays the employer and your benefits stay yours. No co-employment ever, and no sales cycle to learn the price: answer six questions and your estimate appears on screen in about 90 seconds.
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
              <h2>Justworks vs ADP TotalSource, answered</h2>
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
