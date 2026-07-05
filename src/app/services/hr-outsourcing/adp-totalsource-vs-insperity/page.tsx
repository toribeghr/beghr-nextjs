import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'ADP TotalSource vs Insperity: An Honest Comparison | BEG';
const DESC = 'Two giant certified PEOs refereed honestly: ADP TotalSource ecosystem scale vs Insperity high-touch service, plus when neither model fits.';
const URL = 'https://www.beghr.com/services/hr-outsourcing/adp-totalsource-vs-insperity';

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

const CALENDLY = getCalendlyLink('hr-outsourcing-adp-totalsource-vs-insperity');

const FAQS: [string, string][] = [
  [
    'Are ADP TotalSource and Insperity both certified PEOs?',
    'Both market themselves as IRS-certified PEOs, which you can verify on the IRS CPEO public registry. Certification covers federal employment tax responsibility; it does not grade service quality, so the decision still comes down to model fit.',
  ],
  [
    'What does co-employment mean with either of these PEOs?',
    'Under both published models, the PEO becomes the employer of record for tax and benefits purposes while you direct the day-to-day work. Your staff appear under the PEO for payroll taxes, and benefits typically move onto PEO-sponsored plans.',
  ],
  [
    'Which is cheaper, ADP TotalSource or Insperity?',
    'Neither publishes pricing. Both quote per company based on headcount, payroll, state mix, and benefits selections, so the only honest answer is to get both quotes on the same census and compare the all-in administrative fee plus benefits costs line by line.',
  ],
  [
    'Can we keep our current benefits broker and plans with either one?',
    'The core value of both models is PEO-sponsored master benefits plans, so in the typical arrangement your existing plans are replaced. If keeping your own plans and broker matters to you, that is a signal to compare the PEO model itself against HR outsourcing before comparing vendors.',
  ],
  [
    'Where does BEG fit in an ADP TotalSource vs Insperity decision?',
    'BEG is not a PEO and does not compete on co-employment. If you want certified HR professionals handling compliance, handbooks, and manager support while you stay the employer and keep your own benefits, BEG HR outsourcing, powered by isolved, is the alternative model, with an instant on-screen estimate instead of a sales quote.',
  ],
];

export default function AdpTotalsourceVsInsperityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'ADP TotalSource vs Insperity: An Honest Comparison',
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
              { '@type': 'ListItem', position: 3, name: 'ADP TotalSource vs Insperity', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Compared"
        title="ADP TotalSource or Insperity: which giant PEO actually fits your company?"
        description="Both are certified PEOs built on co-employment. ADP TotalSource leans on the scale of the broader ADP ecosystem; Insperity built its reputation on service intensity. Honest referee breakdown."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Not a PEO', label: 'No co-employment ever' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: ADP TOTALSOURCE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>ADP TotalSource: the PEO with the biggest ecosystem behind it</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.adp.com/what-we-offer/products/adp-totalsource.aspx" target="_blank" rel="noopener noreferrer">ADP TotalSource</a> is the PEO arm of ADP, one of the largest payroll and HR technology companies in the world, and it positions itself as among the largest certified PEOs by worksite employees. Its structural advantage is the ecosystem: TotalSource sits inside the broader ADP stack, so payroll technology, HR tools, and reporting come from the same vendor that already runs payroll for a huge share of American businesses. Per its published model, TotalSource is a co-employment arrangement: ADP becomes the employer of record for tax and benefits purposes and your team moves onto ADP-sponsored benefits plans.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                That scale cuts both ways. Buyers who want one giant vendor for payroll technology, benefits, workers compensation, and HR support get exactly that. Buyers who want a named team that knows their company sometimes find that scale feels like scale. Pricing is quote-gated: you provide a census and go through a sales process to learn what it costs. Certification status is verifiable on the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS CPEO registry</a>.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: INSPERITY */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>Insperity: the PEO that sells service intensity</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.insperity.com" target="_blank" rel="noopener noreferrer">Insperity</a> has been in the PEO business for decades, and its published positioning is built around the human layer: dedicated service teams, HR specialists assigned to your account, and hands-on guidance rather than a portal and a phone tree. Like TotalSource, the Insperity model is co-employment, with Insperity-sponsored benefits plans and Insperity as the employer of record for tax purposes. Companies that choose Insperity over larger rivals usually cite the service reputation as the deciding factor.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The tradeoff is the mirror image of the ADP pitch. Insperity does not bring the same sprawling technology ecosystem; its platform exists to serve the PEO relationship, not the other way around. And service intensity is priced in: Insperity is widely regarded as a premium option, though like TotalSource it publishes no pricing and quotes each company individually. If you want to know what either costs, plan on two sales processes and a spreadsheet.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>ADP TotalSource vs Insperity, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>ADP TotalSource</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Insperity</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Model', 'Certified PEO, co-employment', 'Certified PEO, co-employment'],
                    ['Who employs your staff', 'ADP becomes employer of record for tax and benefits', 'Insperity becomes employer of record for tax and benefits'],
                    ['Benefits approach', 'ADP-sponsored master plans, big-carrier access via ADP scale', 'Insperity-sponsored master plans, service team helps administer'],
                    ['Pricing visibility', 'Quote-gated, census and sales call required', 'Quote-gated, census and sales call required'],
                    ['Ideal company size', 'Mid-size and up, especially existing ADP payroll users', 'Growing companies that want hands-on HR guidance'],
                    ['Platform', 'The broader ADP technology stack', 'Insperity platform built around the service relationship'],
                    ['Exit friction', 'High: unwind co-employment, replace benefits, migrate payroll', 'High: unwind co-employment, replace benefits, rebuild HR support'],
                  ].map(([factor, adp, insperity], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{adp}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{insperity}</td>
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
                  title: 'You already run ADP payroll and want one vendor',
                  body: 'Lean TotalSource. The whole pitch is ecosystem continuity: same vendor, connected technology, benefits and workers compensation folded in. Moving to Insperity would mean adding a vendor, not consolidating one.',
                },
                {
                  title: 'You want a named HR team that knows your business',
                  body: 'Lean Insperity. Its published model is built around dedicated service teams and hands-on guidance. If your last HR vendor experience felt like a ticket queue, that is the pain Insperity prices against.',
                },
                {
                  title: 'You are under about 30 employees or want to keep your benefits',
                  body: 'Pause before picking either. Both models replace your benefits plans and take employer of record status, and both tend to fit best at scale. Read a model comparison like PEO vs HR outsourcing before you sit through two sales cycles.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Weighing size fit instead? See <Link href="/services/hr-outsourcing/justworks-vs-adp-totalsource">Justworks vs ADP TotalSource</Link> or <Link href="/services/hr-outsourcing/insperity-vs-trinet">Insperity vs TriNet</Link>.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Both answers assume you want co-employment. Do you?</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If co-employment is what you want, pick from these two and negotiate hard: they are both credible, certified operators. But notice what both quotes will have in common. Your company hands over employer of record status, your benefits plans get replaced by theirs, and the price arrives only after a sales process. If what you actually want is the HR expertise without any of that, you are shopping the wrong model, and the honest move is to compare <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs HR outsourcing</Link> before comparing PEO logos.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                That second model is what BEG sells. <Link href="/services/hr-outsourcing">BEG HR outsourcing</Link>, powered by isolved, puts certified HR professionals on your handbook, compliance, leave administration, and manager questions while you stay the employer and your benefits stay yours. No co-employment, no benefits takeover, and no quote gate: answer six questions and your estimate appears on screen in about 90 seconds.
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
              <h2>ADP TotalSource vs Insperity, answered</h2>
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
