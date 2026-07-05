import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Home Services HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for home services: technician screening, on-call pay policies, and piece-rate overtime math handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/home-services' },
  openGraph: {
    title: 'Home Services HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for home services: technician screening, on-call pay policies, and piece-rate overtime math handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/home-services',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Home Services HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for home services: technician screening, on-call pay policies, and piece-rate overtime math handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-home-services');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for a home services company?',
    'Certified HR professionals handle your handbook, technician screening and background check workflows, on-call and call-back pay policies, commission plan documentation, and manager coaching, sized to a local operator instead of a franchise system.',
  ],
  [
    'Does it cover background checks for technicians?',
    'Yes at the process level: consistent screening criteria, FCRA-compliant disclosure and adverse-action steps, and documentation that answers negligent-hiring questions before a lawyer asks them.',
  ],
  [
    'How does overtime work on piece rate or commission?',
    'Overtime is still owed. Piece-rate and commission earnings set the regular rate each week, and time past forty gets a premium on top. HR professionals set up policies that get the math right.',
  ],
  [
    'Is this a PEO for home services companies?',
    'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does home services HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingHomeServicesPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Home Services', item: 'https://www.beghr.com/services/hr-outsourcing/home-services' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Home Services"
        title="Your techs work inside customer homes. Your HR should be ready for what that means."
        description="Every dispatch sends your company into a private residence: screening decisions, on-call rotations, piece-rate math, and a company van, all riding on employment paperwork that usually lives in a truck cab. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
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
              <p className="eyebrow">The Home Services HR Problem</p>
              <h2>The trucks get maintained. The employment files get whatever fits between calls.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before field-service complexity',
                  sub: 'Operators under a couple hundred employees rarely make that hire, so HR lands on the owner or the office manager, dispatched between everything else.',
                },
                {
                  stat: 'Every dispatch',
                  label: 'How often negligent-hiring exposure walks through a door',
                  sub: 'When an employee harms a customer in their own home, the first legal question is what the employer knew, or should have known, at hire. The screening file is the answer.',
                },
                {
                  stat: 'Weekly',
                  label: 'How often piece-rate and commission overtime must be recalculated',
                  sub: 'Flat-rate tickets and sales commissions change the regular rate every single week, and the overtime premium rides on top. Skipping the math builds liability one pay period at a time.',
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
              Source: <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, Wage and Hour Division, overtime pay</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Home Services HR Compliance</p>
              <h2>The employment problems specific to home services, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Screening for people who work inside customers&apos; homes</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Sending an employee into a private residence raises the stakes on every hiring decision. If a technician harms a customer or steals from a home, negligent-hiring claims turn on what a reasonable screening process would have found, and juries have little patience for a hiring file that is one interview and a handshake. At the same time, background checks trigger FCRA obligations: standalone disclosure, written authorization, and the two-step adverse-action sequence before a report costs anyone a job. HR outsourcing builds the whole workflow, consistent criteria by role, compliant paperwork, and documentation that shows diligence without drifting into blanket policies that create discrimination exposure of their own.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>On-call rotations and call-back pay, written down before the dispute</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Emergency service is the business model, and on-call time is its wage-and-hour minefield. Whether waiting time is compensable depends on how restricted the technician actually is, and the after-midnight call-back raises questions a handshake policy cannot answer: when does paid time start, does drive time from home count, what does a two-hour minimum apply to, how does the on-call stipend feed the overtime calculation? Different answers are defensible; undocumented answers are not. HR outsourcing writes the on-call and call-back policy, aligns it with the FLSA and stricter state rules, and trains dispatch so practice matches paper.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Piece rate, flat rate, and commission, with the overtime math on top</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Home services pay plans reward production: flat-rate tickets for HVAC techs, piece rates for installs, commissions for sales-heavy roles. Every one of them still sits on top of minimum wage and overtime law. Weekly earnings divided by hours worked set the regular rate, the overtime premium is owed on top, and unpaid shop time, meetings, and drive time between jobs quietly drag the effective rate below legal floors. Some states restrict piece-rate structures further, requiring separate pay for nonproductive time. HR outsourcing documents each plan in writing, sets the timekeeping that makes the math possible, and reconciles incentives with the law before an auditor reconciles them for you.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Company vehicles and tools, as policy instead of assumption</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The wrapped van is a rolling employment question. Personal use rules, take-home vehicle expectations, motor vehicle record checks on a schedule instead of once at hire, phone use while driving, accident reporting, and what happens when a customer complaint arrives about how the van was driven: all of it needs written policy. Tools raise their own issues, because deductions for lost or damaged equipment can violate state wage deduction laws and can never cut a non-exempt paycheck below minimum wage. HR outsourcing drafts vehicle and tool policies that protect the equipment without creating wage claims, and wires them into onboarding acknowledgments.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Seasonal demand swings without seasonal compliance swings</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>HVAC peaks in July and January, landscaping in spring, roofing after storm season: home services headcount breathes with the weather. Each ramp-up means fast hiring with complete files, I-9s done right, and recruiting that does not cut corners on screening because the phones are ringing. Each ramp-down means layoff selections that can be explained, final paychecks on state deadlines, and rehire lists handled consistently when demand returns. Unemployment claims spike in the troughs and need timely, documented responses. HR outsourcing gives the seasonal cycle a repeatable process, so growing and shrinking twice a year stops generating a new compliance mess each time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Home services companies big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'HVAC companies', body: 'Flat-rate techs, brutal seasonal peaks, and on-call rotations that generate wage questions every summer.' },
                { title: 'Plumbing and electrical contractors', body: 'Licensed trades, apprentice tracking, and emergency dispatch with call-back pay nobody ever wrote down.' },
                { title: 'Pest control and lawn care', body: 'Route-based techs in customer yards and homes, seasonal hiring waves, and commission add-ons with overtime implications.' },
                { title: 'Cleaning and maid services', body: 'High turnover, screening that carries real negligent-hiring weight, and piece-rate or per-home pay structures.' },
                { title: 'Garage door, roofing, and exterior services', body: 'Storm-driven demand spikes, fast crews, and commission-paid sales reps in customer living rooms.' },
                { title: 'Appliance repair and handyman services', body: 'Small dispatch-driven teams where the owner is also the recruiter, the scheduler, and the HR department.' },
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
                Essential is answers on demand from live HR professionals. Expert adds the done-for-you compliance assets: your handbook, posters, new hire packets, and leave guidance. Elite adds a dedicated HR Business Partner with proactive compliance alerts. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/home-services">managed payroll for home services</Link>. Bidding bigger jobs with crews? See <Link href="/services/hr-outsourcing/construction">HR outsourcing for construction</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Home services HR outsourcing, answered</h2>
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
