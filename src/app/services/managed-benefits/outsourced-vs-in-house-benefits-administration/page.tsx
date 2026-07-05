import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';


export const metadata: Metadata = {
  title: 'Outsourced vs In-House Benefits Admin: The Real Math | BEG',
  description: 'Outsourcing benefits administration vs keeping it in-house: true headcount cost, error exposure, open enrollment load, and when each choice wins.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/outsourced-vs-in-house-benefits-administration' },
  openGraph: {
    title: 'Outsourced vs In-House Benefits Admin: The Real Math | BEG',
    description: 'Outsourcing benefits administration vs keeping it in-house: true headcount cost, error exposure, open enrollment load, and when each choice wins.',
    url: 'https://www.beghr.com/services/managed-benefits/outsourced-vs-in-house-benefits-administration',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Outsourced vs In-House Benefits Admin: The Real Math | BEG', description: 'Outsourcing benefits administration vs keeping it in-house: true headcount cost, error exposure, open enrollment load, and when each choice wins.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-outsourced-vs-in-house');

const FAQS: [string, string][] = [
  [
    'What does outsourcing benefits administration mean?',
    'A service provider runs the operations behind your benefit plans: setup, open enrollment, life events, eligibility data, carrier updates, and compliance filings. Your plans, broker, and employer status stay exactly as they are.',
  ],
  [
    'What does in-house benefits administration really cost?',
    'The visible cost is the salary of whoever owns it; per BLS, compensation and benefits specialists average well into five figures. The hidden cost is error exposure, penalty risk, and everything that person is not doing instead.',
  ],
  [
    'When does keeping benefits administration in-house make sense?',
    'When you have enough benefits-eligible headcount to keep a specialist genuinely busy, real HRIS tooling instead of spreadsheets, and coverage for the person who owns COBRA deadlines when they take vacation.',
  ],
  [
    'Is outsourcing benefits administration the same as buying software?',
    'No. Software gives your team better tools and keeps the work on your desk. An administration service takes the work itself. Many companies buy software believing they bought the service.',
  ],
  [
    'Can we outsource benefits administration and keep our broker?',
    'Yes, and you should. The broker advises on plan design and placement; the administration service runs operations behind those plans. BEG Managed Benefits is built to work alongside your broker, not around them.',
  ],
];

export default function OutsourcedVsInHouseBenefitsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Outsourced vs in-house benefits administration: the real math',
            description: 'Outsourcing benefits administration vs keeping it in-house: true headcount cost, error exposure, open enrollment load, and when each choice wins.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/outsourced-vs-in-house-benefits-administration',
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
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: 'Outsourced vs In-House', item: 'https://www.beghr.com/services/managed-benefits/outsourced-vs-in-house-benefits-administration' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Compared"
        title={'Outsourced vs in-house benefits administration: the real math'}
        description="In-house benefits administration costs a salary you can see and an error exposure you cannot. Outsourcing costs a monthly fee you can see on screen in 90 seconds. Here is the honest comparison."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side By Side</p>
              <h2>In-house vs outsourced, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>In-House</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Outsourced Administration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Cost shape', 'A salary plus benefits plus tools, whether busy or not', 'Per-employee monthly fee that scales with headcount'],
                    ['Depth of bench', 'One person; vacation and turnover are single points of failure', 'A team; deadlines do not depend on one calendar'],
                    ['Open enrollment', 'A month of nights for whoever owns it', 'Run as a process, with self-service and guidance for employees'],
                    ['ACA and COBRA deadlines', 'Tracked in whatever system that person built', 'Tracked systematically; forms produced as a plan feature'],
                    ['Data quality', 'Spreadsheets reconciled by hand against carrier bills', 'One system of record, synced with payroll'],
                    ['Scaling to a new state or acquisition', 'Research project for one person', 'Already in scope, all 50 states'],
                    ['Institutional knowledge', 'Walks out the door with the hire', 'Documented in the system and the service'],
                    ['Leaving', 'Severance, rehire, retrain', 'Stop the service; your plans never moved'],
                  ].map(([factor, inh, out], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{inh}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{out}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.bls.gov/oes/current/oes131141.htm" target="_blank" rel="noopener noreferrer">BLS OES, compensation, benefits, and job analysis specialists</a> · <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">DOL, COBRA continuation coverage</a>
            </p>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Real Math</p>
              <h2>What each model actually costs</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The in-house cost you can see, and the one you cannot</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The visible cost of in-house benefits administration is a salary: <a href="https://www.bls.gov/oes/current/oes131141.htm" target="_blank" rel="noopener noreferrer">BLS wage data for compensation and benefits specialists</a> puts the dedicated version of this role well into five figures before benefits and overhead, and in most companies under a few hundred employees the work lands on an HR generalist or office manager who was hired for something else. The invisible cost is exposure. A missed COBRA notice accrues penalties per day per beneficiary under <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">federal COBRA rules</a>, ACA forms carry per-form penalties, and an enrollment error surfaces months later as a carrier bill dispute or an employee without the coverage they elected. None of that appears on a budget line until the year it does.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The honest case for keeping it in-house</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>In-house wins when the role is real. If your benefits-eligible headcount is large enough to keep a specialist genuinely occupied, if you run an HRIS instead of spreadsheets, and if a second person can cover deadlines during vacations and departures, an internal owner gives you speed and institutional intimacy no vendor matches. The failure mode is not the dedicated specialist; it is the fractional version, where benefits administration is one-fifth of someone&apos;s job, done in the gaps, with every deadline resting on one memory. If that sentence describes your company, the question is not whether the work moves, only whether it moves before or after the first penalty letter.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Software is not the same decision as service</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Plenty of companies believe they outsourced benefits administration when they actually bought benefits administration software. The software moves the work into a better tool; your team still does the work. That is a fine choice, and it is the entry tier of <Link href="/services/managed-benefits">BEG Managed Benefits</Link> for teams that want self-service enrollment with payroll sync. A managed service is a different purchase: a dedicated specialist runs enrollment, changes, and carrier updates, and an auditing analyst checks the data behind them. Price both before assuming which one you need; the estimate form shows all three tiers side by side for your headcount.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The broker stays either way</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Neither choice on this page touches your broker relationship. Brokers advise on plan design, negotiate renewals, and place coverage; almost none are staffed to run your enrollment data, chase carrier updates, or produce ACA forms, and the good ones say so out loud. Outsourced administration takes exactly the work brokers do not want, which is why the arrangement tends to make the broker relationship better, not worse. If a benefits vendor requires displacing your broker to work with them, you are not looking at an administration service; you are looking at a <Link href="/services/managed-benefits/tpa-vs-peo">different model entirely</Link>.</p>
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
                  title: 'Benefits admin is one-fifth of someone’s job',
                  body: 'Outsource it. The fractional model is where deadlines slip and penalties live. The person gets their week back, and the deadlines get a team.',
                },
                {
                  title: 'You have a real benefits specialist who is drowning seasonally',
                  body: 'Consider the software tier plus enrollment support at open enrollment, keeping your specialist as the owner. Not every outsourcing decision is all or nothing.',
                },
                {
                  title: 'You are past a few hundred employees with a benefits team',
                  body: 'In-house probably wins on the day-to-day. The gaps worth outsourcing are audits, ACA production at scale, and COBRA volume, priced as add-ons, not a takeover.',
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
              <h2>Outsourced administration with the price on screen</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG Managed Benefits, powered by isolved, is the outsourced column of this page as a service: three tiers from self-service software to a fully managed dedicated team, your broker intact, all 50 states. The category quotes this work behind demos; BEG shows your monthly estimate on screen in about 90 seconds, then confirms exact pricing on one 15-minute call. Full plan detail lives on the <Link href="/services/managed-benefits">Managed Benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Outsourcing benefits administration, answered</h2>
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
