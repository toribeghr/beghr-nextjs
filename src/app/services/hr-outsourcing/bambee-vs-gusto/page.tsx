import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Bambee vs Gusto: Software or a Human HR Layer? | BEG';
const DESC = 'Bambee vs Gusto refereed honestly: flat-fee HR manager service vs payroll software with HR add-ons. The real question is software or humans.';
const URL = 'https://www.beghr.com/services/hr-outsourcing/bambee-vs-gusto';

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

const CALENDLY = getCalendlyLink('hr-outsourcing-bambee-vs-gusto');

const FAQS: [string, string][] = [
  [
    'Is Bambee or Gusto a PEO?',
    'Neither. There is no co-employment with either one: your company stays the employer of record in both cases. Bambee is a subscription HR manager service and Gusto is payroll software with HR add-ons, which is exactly why this comparison is really about software vs humans.',
  ],
  [
    'Can Gusto replace an HR manager?',
    'Gusto automates the transactional layer: payroll, onboarding checklists, document storage, and benefits administration tied to its payroll. It does not judge a termination risk, coach a struggling manager, or investigate a complaint. Software executes; it does not advise.',
  ],
  [
    'Does Bambee run payroll?',
    'Bambee is built around the HR manager relationship: policies, handbooks, employee relations guidance, and compliance audits per its published model. It is not primarily a payroll platform, which is why many small companies pair an HR service with separate payroll software.',
  ],
  [
    'Do Bambee and Gusto publish pricing?',
    'Both publish their plan structures on their own websites, which is more transparency than most of the HR outsourcing market. Check their sites for current rates, since plans and tiers change.',
  ],
  [
    'Where does BEG fit in a Bambee vs Gusto decision?',
    'BEG sits on the human side of this comparison, with more depth than a starter HR subscription: certified HR professionals for compliance, handbooks, leave administration, and manager coaching, powered by isolved, with no co-employment and an instant on-screen estimate.',
  ],
];

export default function BambeeVsGustoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Bambee vs Gusto: Software or a Human HR Layer?',
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
              { '@type': 'ListItem', position: 3, name: 'Bambee vs Gusto', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Compared"
        title="Bambee or Gusto: do you need HR software or an HR human?"
        description="These two are not even the same category. Gusto is payroll software with HR add-ons; Bambee is a flat-fee human HR manager service. The real question is which layer you are missing."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Not a PEO', label: 'No co-employment ever' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROFILE: BAMBEE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender One</p>
              <h2>Bambee: a human HR manager on subscription</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://www.bambee.com" target="_blank" rel="noopener noreferrer">Bambee</a> sells a specific thing: a dedicated HR manager for small businesses, on a flat monthly subscription, per its published model. The service is built around the human relationship: HR policies written for your company, a compliance audit of your current practices, guidance on hiring and terminations, and someone to call when an employee situation turns delicate. It is not a PEO, so there is no co-employment: your company stays the employer of record and keeps its own benefits.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                The honest limits: Bambee is an HR layer, not an operations platform. It is not primarily payroll software, and companies that need deep systems for time, benefits administration, and reporting will still need those systems somewhere. Bambee publishes its plan structure on its own site, tiered by headcount, so you can see how it is packaged before talking to anyone.
              </p>
            </div>
          </div>
        </section>

        {/* PROFILE: GUSTO */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Contender Two</p>
              <h2>Gusto: payroll software that added HR features</h2>
            </div>
            <div className="reveal" style={{ marginTop: '1.5rem' }}>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>
                <a href="https://gusto.com" target="_blank" rel="noopener noreferrer">Gusto</a> comes at the problem from the opposite direction. It started as small-business payroll software and grew outward: onboarding workflows, benefits administration tied to its payroll, time tracking, and HR tooling as add-ons on higher tiers, per its published model. Like Bambee, it is not a PEO: no co-employment, and you stay the employer of record. Gusto publishes its plan structure on its own site.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                What Gusto is not, at its core, is a human HR advisor. The software executes payroll and workflows very well, and higher tiers offer access to HR resources, but nobody at a software company is reviewing your termination decision at ten at night before you make it. Buyers who love Gusto tend to already know what they want done; buyers who need someone to tell them what should be done are shopping for a different product.
              </p>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side by Side</p>
              <h2>Bambee vs Gusto, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Bambee</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Gusto</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Model', 'Flat-fee HR manager service, not a PEO', 'Payroll software with HR add-ons, not a PEO'],
                    ['Who employs your staff', 'You do, always', 'You do, always'],
                    ['Benefits approach', 'Not a benefits provider; you keep your own plans', 'Benefits administration add-ons tied to its payroll'],
                    ['Pricing visibility', 'Plan structure published on its own site', 'Plan structure published on its own site'],
                    ['Ideal company size', 'Small teams with people problems and no HR person', 'Small teams whose main need is clean payroll and workflows'],
                    ['Platform', 'Light tooling around the HR manager relationship', 'Full payroll and workflow platform, HR advice is not the core'],
                    ['Exit friction', 'Low: end the subscription, keep your documents', 'Moderate: migrating payroll history and benefits setup'],
                  ].map(([factor, bambee, gusto], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#333333' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{bambee}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{gusto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Based on each company&apos;s published model; check their sites for current plans and rates.
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
                  title: 'Payroll is your actual pain and HR is quiet',
                  body: 'Lean Gusto. If runs are late, taxes are stressful, and onboarding is paper, you have a software problem, and Gusto is built for exactly that. Add the HR layer when the people problems arrive.',
                },
                {
                  title: 'You just had your first scary employee situation',
                  body: 'Lean Bambee, or any human HR layer. A complaint, a termination you were not sure was legal, a handbook that does not exist: software does not fix judgment problems. You need a person with HR credentials on your side.',
                },
                {
                  title: 'You honestly need both layers',
                  body: 'Common at 10 to 50 employees: payroll software for execution plus a human HR service for judgment. Budget for them as two different line items solving two different risks, and choose each on its own merits.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '1.5rem', lineHeight: '1.7' }}>
              Considering the PEO route instead of either? Start with <Link href="/services/hr-outsourcing/trinet-vs-justworks">TriNet vs Justworks</Link> to see what co-employment buys and costs you.
            </p>
          </div>
        </section>

        {/* REFEREE CLOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="reveal" style={{ background: '#ffffff', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem' }}>
              <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>The Referee&apos;s Close</p>
              <h2 style={{ marginTop: 0 }}>Software or humans is the right question. Here is the third option it opens.</h2>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                Neither of these is a PEO, so unlike most matchups in this space, nobody is asking for employer of record status or your benefits plans; if co-employment is what you actually want, that is a different aisle, and <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs HR outsourcing</Link> is the page to read. Within this matchup, buy Gusto for execution, buy Bambee for judgment, and be honest with yourself about which one your last three HR headaches needed.
              </p>
              <p style={{ color: '#444444', lineHeight: '1.7', fontSize: '0.97rem', marginTop: '1rem' }}>
                If the judgment layer is what you need but you want more depth than a starter subscription, that is where <Link href="/services/hr-outsourcing">BEG HR outsourcing</Link> sits: certified HR professionals on your handbook, compliance, leave administration, and manager coaching, powered by isolved, with your company staying the employer throughout. No co-employment, no sales gauntlet: answer six questions and your estimate appears on screen in about 90 seconds.
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
              <h2>Bambee vs Gusto, answered</h2>
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
