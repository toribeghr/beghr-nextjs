import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'HR Outsourcing vs Hiring an HR Manager | BEG';
const DESCRIPTION = 'HR outsourcing vs a $60K-$100K in-house HR manager: cost, bench depth, turnover risk, and when the in-house hire actually wins.';
const URL = 'https://www.beghr.com/services/hr-outsourcing/hr-outsourcing-vs-hiring-hr-manager';
const H1 = 'Outsource HR, or hire an HR manager?';

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

const CALENDLY = getCalendlyLink('hr-outsourcing-hr-outsourcing-vs-hiring-hr-manager');

const FAQS: [string, string][] = [
  [
    'How much does an in-house HR manager cost?',
    'Plan on $60K-$100K per year all-in for one experienced generalist, before benefits complexity, before software, and before you find out which HR specialties that one person does not have.',
  ],
  [
    'Is HR outsourcing cheaper than hiring?',
    'Almost always at small and mid headcounts. A flat monthly fee buys a team of certified HR professionals for a fraction of one salary. The instant estimate shows your exact range.',
  ],
  [
    'When does an in-house HR hire make more sense?',
    'Around 200-plus employees, or when daily employee-relations volume fills a desk: constant investigations, heavy hourly turnover, union questions. Many companies at that stage keep outsourced backup for compliance depth.',
  ],
  [
    'What happens when my one HR person quits?',
    'That is the quiet risk of the in-house route: institutional knowledge, open investigations, and compliance calendars walk out together. An outsourced team does not resign, and coverage never gaps.',
  ],
  [
    'Can I combine an HR manager with outsourcing?',
    'Yes, and past 200 employees it is often the strongest setup: your person handles culture and daily employee relations while the outsourced team covers compliance monitoring and specialist questions.',
  ],
];

export default function HrOutsourcingVsHiringHrManagerPage() {
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
              { '@type': 'ListItem', position: 3, name: 'HR Outsourcing vs Hiring an HR Manager', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Compared"
        title={H1}
        description="An in-house HR manager runs $60K-$100K per year for one person and one skill set. HR outsourcing delivers a certified team for a fraction of that, until headcount justifies both."
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
              <h2>Outsourced HR vs the in-house hire, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>HR Outsourcing</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>In-House HR Manager</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Annual cost', 'Flat monthly fee, instant estimate, a fraction of a salary', '$60K-$100K all-in for one experienced generalist'],
                    ['Bench depth', 'A team: compliance, leave, employee relations, multi-state specialists', 'One person, one background, one set of blind spots'],
                    ['Coverage', 'No vacations, no resignations, no coverage gaps', 'Out sick, on PTO, or gone in two weeks with the knowledge'],
                    ['Multi-state compliance', 'Monitored across all 50 states as part of the service', 'Only as current as one person and their reading time'],
                    ['Ramp time', 'Productive in weeks, playbooks already built', 'Months to hire, then months to build HR from scratch'],
                    ['Presence in the building', 'Remote experts, scheduled and on-demand', 'In the hallway, reading the room daily: a real advantage'],
                    ['Culture and daily employee relations', 'Guidance and documentation, but not physically present', 'Strongest exactly here, especially at high headcount'],
                    ['Scales with you', 'Plan level moves up or down with headcount', 'Each growth stage means another salary, another search'],
                  ].map(([factor, outsourced, inhouse], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{outsourced}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{inhouse}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">US Department of Labor, Wage and Hour Division</a> · <a href="https://www.napeo.org" target="_blank" rel="noopener noreferrer">NAPEO industry data</a>
            </p>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Tradeoffs</p>
              <h2>What the salary comparison misses in both directions</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The $60K-$100K buys one skill set, and HR is not one skill</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>An experienced HR generalist costs $60K-$100K per year all-in, and here is the uncomfortable part: HR is at least six disciplines wearing one job title. Wage and hour compliance under <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">Department of Labor rules</a>, leave administration, benefits, employee relations, investigations, and multi-state employment law each punish amateurs differently. Your one hire will be strong in two or three of these and improvising in the rest, and you will not find out which is which until something breaks. An outsourced team assigns the leave question to a leave specialist and the California question to someone who lives in California rules.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Turnover risk: your HR department can resign</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A one-person HR department has a single point of failure, and it takes two weeks of notice to trigger it. When your HR manager leaves, the compliance calendar, the open investigation notes, the informal knowledge of who was warned about what, and the handbook maintenance schedule all walk out at once, and the replacement search costs months during which nobody owns any of it. An outsourced team carries none of that fragility: documentation lives in the platform, coverage is continuous, and no single resignation can empty your HR function. For growing companies, that continuity is often worth more than the fee difference.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Where in-house honestly wins: presence and volume</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Fair is fair: an outsourced professional is not standing in your hallway noticing that a supervisor and a direct report have stopped speaking. Past roughly 200 employees, or in operations with heavy daily employee-relations volume, someone senior should be physically inside the culture: hourly workforces with constant scheduling friction, plants running investigations weekly, environments with union activity. At that volume, the in-house hire stops being a luxury and becomes infrastructure. The strongest configuration at that stage is usually in-house presence plus outsourced backup, so your person handles the hallway while the outside team covers the fifty-state compliance surface no individual can track alone.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Ramp time: months of building vs weeks of onboarding</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Hiring an HR manager is a project before it is a solution: write the job description, run a two-to-three month search, pay for it, then wait while your new hire builds a handbook, a compliance calendar, and personnel file architecture from nothing, learning your business on your payroll. HR outsourcing arrives with the playbooks already written. In the BEG model the handbook build, poster compliance, and new-hire packet templates start in the first weeks, because they have been built hundreds of times before. If your HR gap is urgent because something already went wrong, the ramp difference is not a detail. It is the whole decision.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The decision is a stage, not a forever answer</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The honest framing: outsourcing dominates from your first employees until somewhere in the low hundreds, the hybrid dominates after that, and a fully internal HR department only makes sense at a scale where you are effectively running your own outsourcing firm inside the company. Choosing outsourced HR at 40 employees does not mean never hiring HR; it means not spending $60K-$100K before the volume exists to keep that person busy. If you want the middle path priced out, see <Link href="/services/hr-outsourcing/fractional-hr-vs-full-time-hr">fractional HR vs full-time HR</Link>, and the plan structure is on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.</p>
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
                  title: 'Under 200 employees, HR lands on whoever is nearest',
                  body: 'Outsource. You get a certified team for a fraction of one salary, the compliance surface is covered immediately, and nobody has to become an HR expert against their will.',
                },
                {
                  title: '200-plus employees or daily employee-relations fires',
                  body: 'Hire in-house, honestly. Presence matters at that volume. Keep outsourced backup for multi-state compliance depth and specialist questions; the hybrid beats either alone.',
                },
                {
                  title: 'You want one bundled bill including sponsored health plans',
                  body: 'Then neither answer on this page is yours: that is a PEO, and we will tell you so on the call. Start with our PEO vs HR outsourcing comparison before you decide.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Weighing the co-employment route instead? Read <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs HR outsourcing</Link> first.
            </p>
          </div>
        </section>

        {/* BEG POSITIONING */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where BEG Fits</p>
              <h2>A full HR team, without the salary or the co-employer</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing, powered by isolved, puts certified HR professionals on your handbook, compliance monitoring, leave guidance, and manager questions across all 50 states, with no co-employment and no employer-of-record change. Pricing is a flat monthly fee: answer six questions and your estimate appears on screen in about ninety seconds. Technology companies running this exact math can start at <Link href="/services/hr-outsourcing/technology">HR outsourcing for technology companies</Link>.
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
              <h2>Outsourcing vs hiring, answered</h2>
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
