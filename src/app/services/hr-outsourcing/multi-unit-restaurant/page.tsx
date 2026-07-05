import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Restaurant HR Outsourcing | Multi-Unit | Instant Estimate | BEG',
  description: 'HR outsourcing for multi-unit restaurants: minor labor rules, tip policies, manager coaching, and turnover paperwork handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/multi-unit-restaurant' },
  openGraph: {
    title: 'Restaurant HR Outsourcing | Multi-Unit | Instant Estimate | BEG',
    description: 'HR outsourcing for multi-unit restaurants: minor labor rules, tip policies, manager coaching, and turnover paperwork handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/multi-unit-restaurant',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Restaurant HR Outsourcing | Multi-Unit | Instant Estimate | BEG', description: 'HR outsourcing for multi-unit restaurants: minor labor rules, tip policies, manager coaching, and turnover paperwork handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-multi-unit-restaurant');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a restaurant group?',
    'Certified HR professionals build your handbook and tip and scheduling policies, compliant hiring paperwork for high-volume turnover, minor work rules by state, and coach your GMs through discipline and terminations.',
  ],
  [
    'Does it cover tip pooling and tip credit compliance?',
    'At the policy level, yes: written tip pooling rules, tip credit notices where states allow the credit, and manager rules that keep supervisors out of the pool per federal law.',
  ],
  [
    'Can it handle employees under 18?',
    'Yes. Minor labor is a top restaurant violation area: hour restrictions, prohibited tasks, and work permit rules differ by state, and your policies and manager training reflect the states you operate in.',
  ],
  [
    'Is this a PEO for restaurants?',
    'No. There is no co-employment and no employer-of-record change. Your restaurant group stays the employer; the HR professionals support your managers. Powered by isolved.',
  ],
  [
    'What does restaurant HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingMultiUnitRestaurantPage() {
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
              { '@type': 'ListItem', position: 2, name: 'HR Outsourcing', item: 'https://www.beghr.com/services/hr-outsourcing' },
              { '@type': 'ListItem', position: 3, name: 'Multi-Unit Restaurants', item: 'https://www.beghr.com/services/hr-outsourcing/multi-unit-restaurant' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Multi-Unit Restaurants"
        title="Every location runs HR its own way. That is the problem."
        description="High turnover, teenage crew members, tip rules, and GMs making employment decisions on the fly across locations: restaurant groups carry enterprise-level HR risk on small-business staffing. BEG HR outsourcing, powered by isolved, standardizes it for a fraction of an in-house HR hire."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: '8AM-8PM ET', label: 'Live HR pro access, weekdays' },
          { value: 'Not a PEO', label: 'You stay the employer' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Restaurant HR Problem</p>
              <h2>The industry with the most employees per HR person, and the most rules per employee.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '~70%/yr',
                  label: 'Hourly turnover restaurants routinely absorb',
                  sub: 'Every departure and hire is a paperwork event: offer, I-9, notices, separation documentation. At restaurant volume, HR admin scales with turnover, not headcount.',
                },
                {
                  stat: 'Minors',
                  label: 'The most-cited restaurant labor violation area',
                  sub: 'Hour limits on school nights, prohibited equipment, and work permits vary by state. A 16-year-old closing on a Tuesday can be a federal violation with per-minor penalties.',
                },
                {
                  stat: 'Per GM',
                  label: 'Employment decisions made daily without HR review',
                  sub: 'Each general manager hires, disciplines, and fires. Without shared policies and coaching, every location invents its own employment law.',
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
              Sources: <a href="https://www.bls.gov/jlt/" target="_blank" rel="noopener noreferrer">BLS JOLTS, accommodation and food services turnover</a> and <a href="https://www.dol.gov/agencies/whd/youthrules" target="_blank" rel="noopener noreferrer">DOL YouthRules, minor employment</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Restaurant HR Compliance</p>
              <h2>The employment problems specific to restaurant groups, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Tip policies that survive a wage and hour complaint</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Tips generate more restaurant wage litigation than any other issue. Federal law bars managers and supervisors from tip pools, states split on whether a tip credit exists at all and at what rate, and written notice requirements apply before a credit is taken. Add service charges versus tips, tip-outs to back of house where allowed, and dual-job rules for tipped employees doing non-tipped work, and a policy written from memory is a liability. HR outsourcing writes the tip policies for your states, the notices that go with them, and the manager rules that keep supervisors out of the pool.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Minor labor rules your schedulers can actually follow</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Restaurants are one of the largest employers of workers under 18, and minor labor is a DOL enforcement priority with penalties assessed per minor. The rules are specific and stateful: hour caps on school days, curfews that shift when school is out, equipment prohibitions like slicers and certain fryers for under-18s, and work permit requirements in some states. HR outsourcing turns that matrix into plain scheduling rules per location, poster-backed policies, and manager training, so the person building Tuesday&apos;s schedule does not need to interpret federal regulations to stay legal.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>High-volume hiring and separation paperwork, standardized</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>At restaurant turnover rates, hiring paperwork is a production line: I-9s completed on deadline while a new hire is already on the floor, state new hire reporting, meal and rest break acknowledgments in states that require them, and separation documentation that decides unemployment claims. Multiply by locations and the failure mode is inconsistency: one store does it right, one does not, and the group inherits the worst store&apos;s file quality in any dispute. The Expert plan standardizes packets and files across every location, set up in isolved onboarding so each store runs the identical compliant process.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Predictive scheduling and paid sick leave, city by city</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Fair workweek laws in cities like New York, Chicago, Seattle, Philadelphia, and Los Angeles, and in Oregon statewide, require advance schedule posting, predictability pay for changes, and rest between closing and opening shifts, aimed squarely at food service. Paid sick leave mandates layer on top with their own accrual math and documentation limits. A restaurant group with locations in different jurisdictions can face three different scheduling regimes at once. HR professionals track which rules apply to which location and keep policies and manager practices current as cities add rules.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Coaching GMs before the termination, not after the claim</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>In a restaurant group, the general manager is the employment decision-maker: hiring, discipline, scheduling cuts, terminations, and the first response to a harassment complaint. Most GMs were promoted for running great shifts, not for employment judgment, and one bad termination or mishandled complaint can cost more than a year of HR support. The Elite plan puts performance management coaching behind your managers: one-on-one guidance on progressive discipline, documentation that holds up, and a certified HR professional to call before the hard conversation happens, not after it goes wrong.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Restaurant operators running real headcount without an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Multi-unit franchisees', body: 'QSR and fast-casual operators running 3 to 30 locations, where brand standards exist for food but not for employment practices.' },
                { title: 'Independent restaurant groups', body: 'Full-service concepts under one ownership, each location with its own GM, culture, and inherited HR habits.' },
                { title: 'Fast-casual and QSR operators', body: 'Teenage crew members, high turnover, and scheduling rules that differ across every city you operate in.' },
                { title: 'Bars and breweries with kitchens', body: 'Tipped front of house, hourly back of house, late-night scheduling, and alcohol-service policies as employment rules.' },
                { title: 'Catering and events companies', body: 'Variable-hour staff, event-based scheduling, and hiring surges that need compliant paperwork at speed.' },
                { title: 'Ghost kitchens and virtual brands', body: 'Lean teams across delivery-only units, often multi-state, with nobody owning the employment side.' },
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
                Essential is answers on demand from live HR professionals. Expert adds the done-for-you compliance assets: your handbook, posters, new hire packets, and leave guidance. Elite adds a dedicated HR Business Partner with proactive compliance alerts. Restaurant-specific packages exist behind the estimate form. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Tip credits and multi-location payroll the bigger fire? That is <Link href="/services/managed-payroll/multi-unit-restaurant">managed payroll for multi-unit restaurants</Link>. Also in this silo: <Link href="/services/hr-outsourcing/construction">construction HR outsourcing</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Restaurant HR outsourcing, answered</h2>
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
