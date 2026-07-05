import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Benefits Administration for Trades | Instant Estimate | BEG',
  description: 'Benefits administration for the trades: field crews and seasonal hours tracked for ACA, rehires handled right. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/trades' },
  openGraph: {
    title: 'Benefits Administration for Trades | Instant Estimate | BEG',
    description: 'Benefits administration for the trades: field crews and seasonal hours tracked for ACA, rehires handled right. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/trades',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Administration for Trades | Instant Estimate | BEG', description: 'Benefits administration for the trades: field crews and seasonal hours tracked for ACA, rehires handled right. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-trades');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a trades contractor?',
    'Plan setup, online enrollment crews complete from the truck, ACA eligibility tracking through seasonal hour swings, Forms 1094-C and 1095-C produced for you, rehire classification handled under IRS rules, life-event changes, carrier updates, and COBRA support.',
  ],
  [
    'How does ACA eligibility work when hours drop in the slow season?',
    'IRS rules allow a lookback measurement method: hours are averaged over a defined period, and employees at 30 or more per week on average must be offered coverage for the following stability period. A tech who slows down in February does not automatically lose eligibility mid-stability-period.',
  ],
  [
    'What happens when we rehire a crew member for the busy season?',
    'IRS break-in-service rules decide whether a returning worker is a continuing employee or a new hire for ACA purposes, based on the length of the gap. The system applies those rules consistently, so seasonal rehires do not reset eligibility by accident or by habit.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility data, changes, and compliance filings. Most brokers welcome it.',
  ],
  [
    'Is this a PEO for trades businesses?',
    'No. There is no co-employment and your plans stay the plans you and your broker chose. BEG Managed Benefits, powered by isolved, administers them while your company stays the employer.',
  ],
  [
    'What does trades benefits administration cost?',
    'A monthly per-employee cost far below an internal benefits hire. Answer five questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function ManagedBenefitsTradesPage() {
  return (
    <>
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
              { '@type': 'ListItem', position: 3, name: 'Trades', item: 'https://www.beghr.com/services/managed-benefits/trades' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Trades"
        title="Your crews follow the work. Your benefits admin has to follow the crews."
        description="HVAC, electrical, plumbing, roofing: trades businesses mix year-round field crews with seasonal surges, and every busy-season hire and slow-season layoff is a benefits event. BEG Managed Benefits, powered by isolved, tracks eligibility through the swings, runs enrollment from the field, and handles the notices while your broker keeps placing your coverage."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: 'Seasonal', label: 'Hour swings and rehires tracked for ACA' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Trades Benefits Problem</p>
              <h2>Seasonal hours, busy-season rehires, and an office manager doing benefits between invoices.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '13 weeks',
                  label: 'The IRS break-in-service line that decides how rehires are treated',
                  sub: 'Under IRS employer shared responsibility rules, an employee rehired after a break of at least 13 consecutive weeks may be treated as a new hire; shorter gaps generally mean a continuing employee. Trades rehire constantly, and getting this wrong distorts every downstream offer of coverage.',
                },
                {
                  stat: 'Seasonal',
                  label: 'Construction and trades separations swing with the calendar',
                  sub: 'BLS JOLTS data shows construction hires and separations moving with the season year after year. Every layoff and callback is an eligibility, coverage, and notice event, not just a scheduling one.',
                },
                {
                  stat: '30 hrs/wk',
                  label: 'The ACA line weather and workload push crews across',
                  sub: 'A service tech at 45 hours all summer and 22 in the slow months is the textbook variable-hour case. Averaged hours decide who must be offered coverage, and averaging by hand across a crew roster is how mistakes happen.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.irs.gov/affordable-care-act/employers/employer-shared-responsibility-provisions" target="_blank" rel="noopener noreferrer">IRS, employer shared responsibility provisions</a> and <a href="https://www.bls.gov/jlt/" target="_blank" rel="noopener noreferrer">BLS JOLTS</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Trades benefits problems, mapped to the plan that solves them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment from the truck, not the break room</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Field crews do not sit at desks, and enrollment packets left in the shop get enrolled by whoever wanders past the counter. The Benefits Admin Software plan puts plan comparison and enrollment on the phone: crew members research options, get AI-guided recommendations that balance cost and coverage, and enroll between jobs. Life events run through self-service workflows, and deductions sync to payroll so a coverage change never turns into a Friday paycheck argument.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>ACA measurement built for seasonal swings and rehires</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The Software + ACA Compliance plan runs lookback measurement continuously: summer overtime and winter slowdowns average into a defensible eligibility answer, seasonal hires are evaluated under the rules written for them, and returning crew members are classified under IRS break-in-service rules instead of whatever the office did last year. Forms 1094-C and 1095-C are produced for you at filing time from hours the system tracked all year.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Layoff season without notice-season panic</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When the season ends and the roster shrinks, every covered separation opens continuation obligations on federal deadlines. Election notices go out on the required timelines, windows are tracked, and coverage end dates flow to carriers, whether it is one tech leaving in July or fifteen at the end of the season. State continuation rules for smaller shops are scoped exactly on your discovery call.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: a dedicated team instead of the office manager&apos;s fourth job</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>In most trades businesses, benefits administration belongs to whoever also does billing, permits, and dispatch. On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish, processes the seasonal adds and drops, and chases carrier updates, while a Benefits Auditing Analyst checks your data for the errors churn creates: laid-off crew still on the invoice, elections that never reached the carrier, dependents past eligibility. The office runs the business; the benefits team runs benefits.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Benefits Admin Software puts enrollment in the field. Software + ACA Compliance adds seasonal-hour tracking and Forms 1094-C and 1095-C. Fully Managed puts a dedicated specialist and auditing analyst on all of it. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Job costing and certified payroll the bigger fire? That is <Link href="/services/managed-payroll/trades">managed payroll for the trades</Link>; for crew policies and safety-adjacent HR, see <Link href="/services/hr-outsourcing/trades">trades HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Trades benefits administration, answered</h2>
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
