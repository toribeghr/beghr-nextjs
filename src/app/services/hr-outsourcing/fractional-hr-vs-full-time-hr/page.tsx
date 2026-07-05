import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'Fractional HR vs Full-Time HR: Which Do You Need? | BEG';
const DESCRIPTION = 'Fractional HR vs full-time HR: what fractional means, when it fits, when a full-time hire wins, and how hybrid models actually work.';
const URL = 'https://www.beghr.com/services/hr-outsourcing/fractional-hr-vs-full-time-hr';
const H1 = 'Fractional HR, or a full-time HR hire?';

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

const CALENDLY = getCalendlyLink('hr-outsourcing-fractional-hr-vs-full-time-hr');

const FAQS: [string, string][] = [
  [
    'What is fractional HR?',
    'Senior HR expertise purchased in the amount you actually need: a certified professional or team handling your compliance, policies, and people questions on a recurring basis, without a full-time salary.',
  ],
  [
    'What size company fits fractional HR?',
    'Roughly 10 to 200 employees. Below that, on-demand answers may be enough; above it, daily employee-relations volume usually justifies someone in the building, often with fractional backup retained.',
  ],
  [
    'Is fractional HR the same as HR outsourcing?',
    'Fractional HR is one flavor of HR outsourcing. The BEG model delivers the same outcome as a fractional leader plus a team behind them, with flat monthly pricing instead of hourly rates.',
  ],
  [
    'When does a full-time HR hire win?',
    'When there is a desk worth of daily work: heavy hourly turnover, frequent investigations, constant scheduling friction, or 200-plus employees. Presence in the building becomes the deciding advantage.',
  ],
  [
    'Can fractional and full-time work together?',
    'Yes, and the hybrid is common: an in-house generalist owns culture and daily employee relations while the fractional team covers multi-state compliance, leave administration, and specialist questions.',
  ],
];

export default function FractionalHrVsFullTimeHrPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Fractional HR vs Full-Time HR', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Compared"
        title={H1}
        description="Fractional HR gives you senior HR expertise for the hours you actually need, typically between 10 and 200 employees. Full-time HR wins when daily employee-relations volume fills a desk."
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
              <h2>Fractional vs full-time HR, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Fractional HR</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Full-Time HR Hire</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Cost', 'A fraction of a salary; flat monthly in the BEG model', '$60K-$100K per year all-in for one generalist'],
                    ['Seniority for the money', 'Senior-level judgment at partial-hours pricing', 'The same budget buys mid-level, full-time presence'],
                    ['Bench depth', 'A team behind the lead: leave, compliance, multi-state specialists', 'One background, one set of strengths and gaps'],
                    ['Availability', 'Scheduled plus on-demand; no PTO gaps, no resignation risk', 'In the building daily, out when sick or gone'],
                    ['Sweet spot', 'Roughly 10 to 200 employees', '200-plus employees or heavy daily employee-relations volume'],
                    ['Ramp time', 'Weeks; playbooks and templates already exist', 'A search measured in months, then a build from scratch'],
                    ['Culture presence', 'Visits and video, not the hallway', 'Reads the room every day: the honest advantage'],
                    ['Scaling', 'Turn the dial up or down with headcount', 'Each stage change means another hire or a layoff'],
                  ].map(([factor, fractional, fulltime], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{fractional}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{fulltime}</td>
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
              <h2>How to actually make this call</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>What fractional HR actually means</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Fractional HR borrows its name from fractional CFOs: senior expertise purchased in the quantity you need instead of the quantity a salary forces on you. A fractional HR leader or team owns your compliance calendar, handbook, leave process, and manager coaching on a recurring basis, present enough to know your business, without occupying a desk five days a week. It is not a hotline you call after something breaks, and it is not a consultant who ships a binder and disappears. The defining feature is ongoing ownership of the HR function at partial-time cost, with employment law obligations from agencies like the <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">Department of Labor</a> tracked continuously, not annually.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The 10-to-200 window where fractional dominates</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Around ten employees, HR stops being an occasional errand: you have a handbook to defend, leave requests with legal deadlines, and terminations that can turn into charges. But the workload does not fill a full-time desk until somewhere around 200 employees, and often later in calm white-collar environments. Inside that window, a full-time hire spends real hours underemployed while costing $60K-$100K, and the roles companies can afford at that stage tend to be junior exactly when the questions are hardest. Fractional flips the ratio: senior judgment, sized to actual volume. That window is where most BEG HR outsourcing clients live.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Where full-time honestly wins</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Some HR work only happens in person. Reading a shop floor after a difficult announcement, catching a brewing conflict before it becomes a complaint, being the door someone knocks on at 4pm with something they were not going to put in writing: no remote model replicates that. When daily employee-relations volume is high, think frequent investigations, heavy hourly turnover, constant scheduling friction, or any union environment, a full-time presence stops being overhead and becomes infrastructure. Past roughly 200 employees this is the normal state, and pretending otherwise would be selling, not advising. The full build-or-buy math lives at <Link href="/services/hr-outsourcing/hr-outsourcing-vs-hiring-hr-manager">HR outsourcing vs hiring an HR manager</Link>.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The hybrid: one person inside, a team behind them</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The strongest configuration for growing companies is rarely either extreme. A common pattern: hire one in-house HR generalist or people-ops coordinator for presence, culture, and daily employee relations, and keep a fractional team behind them for the fifty-state compliance surface, leave administration edge cases, and the questions a solo practitioner should not answer alone. The in-house person gets a bench instead of a void; the company gets coverage without building a department. This also de-risks the solo hire, because when that person takes leave or resigns, the HR function does not go dark. The dial turns gradually instead of flipping.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Watch the pricing model, not just the label</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Fractional HR is sold three ways: hourly, which punishes you for calling; retainers with hour caps, which turn every February into a true-up negotiation; and flat monthly fees, which make the cost boring and predictable. BEG uses the third: a flat monthly price by headcount and plan level, estimated on screen before anyone calls you. Also confirm what is behind the fractional person. A solo consultant is a single point of failure with a template folder; the BEG model, detailed on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>, puts certified HR professionals and a full compliance stack behind every account. Marketing agencies sizing this exact decision can start at <Link href="/services/hr-outsourcing/marketing-agency">HR outsourcing for marketing agencies</Link>.</p>
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
                  title: '10 to 200 employees, no HR department, growing compliance surface',
                  body: 'Fractional fits. You get senior HR ownership of the handbook, leave, and compliance for a fraction of a salary, and the plan level moves with your headcount.',
                },
                {
                  title: 'Daily employee-relations volume that fills a desk',
                  body: 'Hire full-time, and we mean it. Investigations every week, high hourly turnover, or 200-plus employees need someone in the building. Fractional backup still covers the specialist gaps.',
                },
                {
                  title: 'You want one bundled bill including sponsored health plans',
                  body: 'Neither fractional nor full-time HR delivers that: it is a PEO, and we will tell you so on the call. Fractional expertise and pooled benefits are different purchases.',
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
              <h2>Fractional-grade expertise, flat monthly, no co-employment</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing, powered by isolved, delivers what fractional HR promises with a team instead of a single consultant: certified HR professionals on your policies, compliance monitoring across all 50 states, and a dedicated HR Business Partner on the top plan. You stay the only employer; there is never co-employment. Answer six questions and your flat monthly estimate appears on screen in about ninety seconds.
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
              <h2>Fractional vs full-time HR, answered</h2>
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
