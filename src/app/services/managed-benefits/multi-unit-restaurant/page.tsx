import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Restaurant Benefits Administration | Instant Estimate | BEG',
  description: 'Benefits administration for restaurants: variable-hour ACA tracking, tipped and part-time enrollment, COBRA at turnover volume. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/multi-unit-restaurant' },
  openGraph: {
    title: 'Restaurant Benefits Administration | Instant Estimate | BEG',
    description: 'Benefits administration for restaurants: variable-hour ACA tracking, tipped and part-time enrollment, COBRA at turnover volume. Get your instant estimate.',
    url: 'https://www.beghr.com/services/managed-benefits/multi-unit-restaurant',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Restaurant Benefits Administration | Instant Estimate | BEG', description: 'Benefits administration for restaurants: variable-hour ACA tracking, tipped and part-time enrollment, COBRA at turnover volume. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-multi-unit-restaurant');

const FAQS: [string, string][] = [
  [
    'What does benefits administration include for a restaurant group?',
    'Plan setup across every location, online enrollment for tipped and hourly crews, variable-hour ACA eligibility tracking, Forms 1094-C and 1095-C produced for you, life-event changes, carrier updates, and COBRA support scoped to your states.',
  ],
  [
    'How does ACA eligibility work for variable-hour restaurant employees?',
    'IRS rules let employers use a lookback measurement method: hours are measured over a defined period, and employees who average 30 or more per week must be offered coverage for the following stability period. The tracking runs continuously in the system instead of a spreadsheet.',
  ],
  [
    'Can it keep up with restaurant turnover and COBRA notices?',
    'Yes. Every termination triggers the required election notice workflow, and elections and timelines are tracked. At restaurant turnover volume, notice volume is exactly the kind of repetitive deadline work that belongs in a managed service, not on a GM.',
  ],
  [
    'Do we have to leave our insurance broker?',
    'No. Your broker keeps advising you and placing your coverage. BEG Managed Benefits handles the administration behind those plans: enrollment, eligibility data, changes, and compliance filings. Most brokers welcome it.',
  ],
  [
    'Is this a PEO for restaurants?',
    'No. There is no co-employment and your plans stay the plans you and your broker chose. BEG Managed Benefits, powered by isolved, administers them while your restaurant group stays the employer.',
  ],
  [
    'What does restaurant benefits administration cost?',
    'A monthly per-employee cost far below an internal benefits hire. Answer five questions in the estimate form and your monthly range appears on screen, including restaurant-specific packages; exact pricing is confirmed on your discovery call.',
  ],
  [
    'We operate several franchise entities under common ownership. Do we count as one employer for ACA?',
    'Often, yes. Under IRS controlled group rules, legally separate entities with common ownership can be treated as a single employer for ACA purposes, meaning full-time and full-time-equivalent headcounts across every entity are combined to determine applicable large employer status. Franchisees who track eligibility entity by entity are the most common ACA misstep in the industry. Aggregation across your full ownership structure is scoped on your discovery call.',
  ],
];

export default function ManagedBenefitsMultiUnitRestaurantPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Multi-Unit Restaurants', item: 'https://www.beghr.com/services/managed-benefits/multi-unit-restaurant' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Multi-Unit Restaurants"
        title="Variable hours, tipped crews, constant turnover. ACA was practically written about your roster."
        description="A restaurant group is the hardest benefits administration case there is: part-time-heavy schedules that flirt with the 30-hour line, tipped employees across locations, and turnover that turns COBRA into a weekly event. BEG Managed Benefits, powered by isolved, runs it all while your broker keeps doing what brokers do. Answer five questions, see your instant estimate on screen."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Broker-friendly', label: 'You keep your broker, we do the admin' },
          { value: '1094-C/1095-C', label: 'ACA forms produced for you' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Restaurant Benefits Problem</p>
              <h2>The workforce that makes ACA tracking hardest is the one restaurants run every day.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '30 hrs/wk',
                  label: 'The ACA full-time line your crews cross unpredictably',
                  sub: 'Under IRS employer shared responsibility rules, an employee averaging 30 hours a week is full-time. Servers and cooks drift over and under that line with every schedule, which is exactly what lookback measurement exists to handle.',
                },
                {
                  stat: 'Highest',
                  label: 'Quits rate of any major sector: accommodation and food services',
                  sub: 'BLS JOLTS data consistently shows food service with the highest quits rate of any major industry. Every departure is a benefits event: coverage end dates, carrier updates, and a COBRA or state continuation notice on a deadline.',
                },
                {
                  stat: '60 days',
                  label: 'The COBRA election window every departure can open',
                  sub: 'Federal COBRA rules give qualified beneficiaries at least 60 days to elect continuation coverage, with notice deadlines on the employer side. At restaurant turnover volume, that is a standing weekly workload, not an occasional task.',
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
              Sources: <a href="https://www.irs.gov/affordable-care-act/employers/employer-shared-responsibility-provisions" target="_blank" rel="noopener noreferrer">IRS, employer shared responsibility provisions</a>, <a href="https://www.bls.gov/jlt/" target="_blank" rel="noopener noreferrer">BLS JOLTS</a>, and <a href="https://www.dol.gov/agencies/ebsa/laws-and-regulations/laws/cobra" target="_blank" rel="noopener noreferrer">DOL, COBRA continuation coverage</a>.
            </p>
          </div>
        </section>

        {/* WHAT GETS HANDLED */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What Gets Handled</p>
              <h2>Restaurant benefits problems, mapped to the plan that solves them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Enrollment that works for a workforce that never sits at a desk</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Paper enrollment packets die in restaurant break rooms. The Benefits Admin Software plan puts plan comparison and enrollment on the phone in a server&apos;s pocket: employees research options, get AI-guided recommendations that balance cost and coverage, and enroll themselves. Life events like a marriage or a new baby run through self-service workflows instead of a stack of forms at the manager station, and deductions sync to payroll so a mid-period plan change does not become a paycheck dispute during a dinner rush.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Variable-hour ACA measurement, done the way the IRS describes it</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Restaurants are the textbook variable-hour case: a host hired at 22 hours a week who picks up shifts all summer, a line cook who drops to part-time in January. The Software + ACA Compliance plan runs lookback measurement continuously: measurement periods, administrative periods, and stability periods applied consistently across every location, so you always know who must be offered coverage and when. Forms 1094-C and 1095-C are produced for you at filing time, built from hours data that was tracked all year instead of reconstructed in a panic each winter.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>COBRA volume treated as the production line it is</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The industry with the highest quits rate generates continuation events at a pace no office manager can track on a spreadsheet. Terminations trigger the required notices, election windows are tracked, and coverage end dates flow to carriers without someone at each location remembering to send a form. State continuation rules for smaller locations are scoped exactly on your discovery call, so the process matches the states you actually operate in.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fully Managed: a dedicated team instead of a shared spreadsheet</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>On the Fully Managed plan, a dedicated Managed Benefits Specialist runs open enrollment start to finish across every location, processes changes, and chases carrier updates, while a Benefits Auditing Analyst checks your data for the errors that quietly cost money: terminated employees still on the invoice, deductions that do not match elections, dependents past eligibility. For a group where every GM is already doing three jobs, this is the difference between benefits running and benefits smoldering.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>A restaurant-specific package, priced in about 90 seconds</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Restaurants get priority depth here for a reason: a restaurant-specific package that bundles benefits administration with ACA and COBRA support exists behind the estimate form. Answer five questions about your locations and headcount and your monthly range appears on screen, no demo gate and no sales call required to see a number. Exact pricing is confirmed on one 15-minute discovery call, and your broker stays exactly where they are.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Restaurant operators carrying real ACA exposure without a benefits department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Multi-unit franchisees', body: 'QSR and fast-casual operators whose combined headcount crossed the applicable-large-employer line locations ago, with ACA tracking still happening store by store.' },
                { title: 'Independent restaurant groups', body: 'Full-service concepts under one ownership where enrollment, eligibility, and COBRA notices depend on which manager remembers.' },
                { title: 'Fast-casual and QSR operators', body: 'Part-time-heavy rosters that live right at the 30-hour line, which is precisely the workforce lookback measurement was designed for.' },
                { title: 'Bars and breweries with kitchens', body: 'Tipped front of house and hourly back of house on different schedules, one set of ACA obligations covering both.' },
                { title: 'Catering and events companies', body: 'Headcount that surges around event season, with seasonal and variable-hour rules deciding who must be offered coverage.' },
                { title: 'Growing groups near 50 FTEs', body: 'Operators approaching applicable-large-employer status who want measurement and offer processes in place before the obligations attach.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Benefits Admin Software puts enrollment online for every location. Software + ACA Compliance adds variable-hour tracking and Forms 1094-C and 1095-C. Fully Managed puts a dedicated specialist and auditing analyst on all of it, with restaurant-specific packages behind the estimate form. Full detail on the <Link href="/services/managed-benefits">managed benefits overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Tip credits and multi-location pay runs the bigger fire? That is <Link href="/services/managed-payroll/multi-unit-restaurant">managed payroll for multi-unit restaurants</Link>; for GM coaching and policy problems, see <Link href="/services/hr-outsourcing/multi-unit-restaurant">restaurant HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Restaurant benefits administration, answered</h2>
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
