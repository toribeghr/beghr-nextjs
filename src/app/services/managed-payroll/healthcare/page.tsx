import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Healthcare Payroll | Shift Differential. Done Right. | BEG',
  description: 'Healthcare payroll fully managed at $25–$45 PEPM. Shift differentials, compliance, and on-time filings included. Request a free scope review.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/healthcare' },
  openGraph: {
    title: 'Healthcare Payroll | Shift Differential. Done Right. | BEG',
    description: 'Healthcare payroll fully managed at $25–$45 PEPM. Shift differentials, compliance, and on-time filings included. Request a free scope review.',
    url: 'https://beghr.com/services/managed-payroll/healthcare',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Healthcare Payroll | Shift Differential. Done Right. | BEG', description: 'Healthcare payroll fully managed at $25–$45 PEPM. Shift differentials, compliance, and on-time filings included. Request a free scope review.', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-healthcare');

export default function PayrollHealthcarePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/healthcare.svg"
      imageAlt="Healthcare organization with fully managed payroll"
      eyebrow="Managed Payroll · Healthcare"
      title="Healthcare payroll never stops. Neither do we."
      description="24/7 schedules, shift differentials, clinical overtime rules, and multi-state licensure make healthcare payroll the most complex in any industry. We manage it all at $25–$45 per employee per month -- fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25–$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house payroll actually cost your organization?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$70K–$100K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of one internal healthcare payroll specialist</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Healthcare payroll specialists command premium salaries due to complexity. Fully managed service at $25–$45 PEPM replaces that headcount.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Shift diff</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Differentials, on-call, and overtime rules your system must calculate perfectly</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>One missed shift differential or overtime miscalculation triggers employee complaints, corrections, and potential DOL exposure.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>All 50 states</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Multi-state compliance for distributed clinical teams</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Healthcare organizations operating across state lines face different tax rules, licensure, and overtime thresholds in every jurisdiction.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>Three steps to fully managed payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your current payroll process, employee roster, and complexity. You get a fixed monthly cost -- no surprises.' },
              { num: '02', title: 'We map your shift structure, differential rates, on-call schedules, and multi-state employee roster before running your first payroll cycle.', body: 'We configure and run your first payroll cycles. No migration required -- we work in your existing system. Transition takes 30–60 days.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every filing, every compliance update -- fully managed by BEG. Your team touches nothing.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#f9f9f9', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE DEEP DIVE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Compliance Requirements</p>
            <h2>Healthcare payroll complexity that software listicles do not cover</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Shift differentials, on-call pay, and call-back calculations</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Healthcare organizations pay shift differentials to compensate clinical staff for working undesirable hours. A night differential of $3–$5 per hour, a weekend differential of $4–$6 per hour, and a holiday premium of 1.5x to 2.5x base pay are common structures -- but rates vary by classification, and in unionized facilities they are set by collective bargaining agreement. On-call pay follows different rules: on-call time (waiting at home ready to be called in) may or may not be compensable under the FLSA depending on how severely the employer restricts the employee during that period. Call-back pay (hours actually worked after being called in) is always compensable and may trigger overtime calculations separately from the regular shift hours. Payroll must handle on-call and call-back correctly to avoid DOL wage and hour exposure.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Credential-based pay tiers and specialty certification differentials</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Many healthcare organizations pay differently based on education level and clinical certifications. A BSN-credentialed RN may earn a base wage premium over an ADN-credentialed RN in the same role. Specialty certifications -- CCRN, CEN, PALS, CCP, and others -- add hourly or salary differentials on top of base wages. Managing credential-based tiers requires the payroll system to be configured with each credential and its pay adjustment, updated when employees earn or renew credentials, and audited to ensure the correct tier is applied to each clinical staff member. When an employee lets a certification lapse, the differential must be removed promptly from payroll.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>HIPAA and payroll data security at healthcare organizations</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>HIPAA applies to payroll records at healthcare organizations because payroll files often contain or are linked to protected health information -- employee names tied to medical leave records, ADA accommodation documentation, workers compensation injury records, and FMLA-related absence records. Payroll system access that is not appropriately restricted creates HIPAA exposure. BEG manages payroll under access protocols consistent with healthcare employer obligations, limiting access to designated personnel with legitimate need and maintaining records under policies appropriate for a HIPAA-covered or business-associate environment.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Per-diem clinical staff and travel nurses</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Per-diem clinical staff -- nurses, technicians, and allied health workers called in on an as-needed basis -- have variable hours, irregular pay periods, and may work across multiple facilities within the same organization. Travel nurses and allied health travelers engaged through staffing agencies are typically the agency employees -- but some healthcare systems directly employ travel staff under a travel contract model. For directly employed travelers, the tax-home rules, per-diem reimbursement tax treatment, and state tax registration for temporary workers must all be managed correctly. BEG handles per-diem and travel staff payroll under the correct treatment for each employment arrangement.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-facility healthcare organizations and rotating staff</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Hospital systems with multiple clinics, urgent care centers, and physician practices often have clinical staff who rotate between facilities in the same pay period. This creates questions about which cost center captures the labor expense, whether different union agreements or wage scales apply at different facilities, and whether multi-site work triggers any tax or licensure obligations. BEG configures payroll to track facility-level labor allocation so cost reports reconcile at the facility and cost-center level without requiring manual adjustments after each pay cycle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who This Serves</p>
            <h2>Healthcare organizations where payroll runs 24/7 and errors have clinical consequences</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Medical practices and physician groups', body: 'Multi-provider practices with clinical and administrative staff, productivity-based physician compensation, and credential-based pay differentials for clinical support staff.' },
              { title: 'Dental and specialty practices', body: 'Production-based associate dentist compensation, clinical staff shift differentials, and multi-location staff scheduling that affects payroll allocation.' },
              { title: 'Outpatient clinics and surgery centers', body: 'Per-diem staff management, on-call scheduling for surgical cases, and credential-based RN and surgical tech compensation tiers.' },
              { title: 'Home health agencies', body: 'Field-based clinical staff with variable hours, mileage reimbursement, and multi-county service area state payroll tax compliance.' },
              { title: 'Behavioral health organizations', body: 'Clinical staff with varied licensure levels (LCSW, LPC, Psy.D., MD) that affect compensation tiers, billing rates, and supervision requirements.' },
              { title: 'Healthcare organizations at 15 to 300 employees', body: 'Large enough to need specialized clinical payroll management, small enough that an internal payroll specialist who understands healthcare compliance is difficult to hire and retain.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem' }}>
                <strong style={{ display: 'block', fontSize: '0.95rem', marginBottom: '0.4rem' }}>{item.title}</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#666666', lineHeight: '1.55' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things most payroll vendors do not offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "Switching payroll systems is too disruptive."',
                body: 'We do not require you to switch platforms. BEG operates as your managed payroll team inside your current system. If you want to move to a better platform, we can handle that too -- but it is never a requirement to get started.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. No surprise fees.',
                objection: 'Common objection: "Payroll services always add fees for every little thing."',
                body: 'The $25–$45 PEPM rate is all-inclusive: payroll processing, tax filing, compliance updates, year-end W-2s, and support. There are no per-run fees, no year-end surcharges, and no module upsells. One number, everything included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact. Not a support queue.',
                objection: 'Common objection: "Payroll vendors disappear after onboarding."',
                body: 'Your BEG payroll specialist is your ongoing contact. When something changes -- a new hire, a state registration, a compliance update -- you send one message. There is no ticket queue, no chatbot, and no calling a 1-800 number. Your team has a real person who knows your account.',
              },
            ].map(({ badge, title, objection, body }) => (
              <div key={badge} className="beg-grid-bonus" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.75rem' }}>
                <div>
                  <span style={{ display: 'inline-block', background: '#ECAC60', color: '#000000', fontWeight: '700', fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', marginBottom: '0.6rem', letterSpacing: '0.05em' }}>{badge}</span>
                  <strong style={{ display: 'block', fontSize: '1.05rem', lineHeight: '1.4' }}>{title}</strong>
                </div>
                <div>
                  <p style={{ margin: '0 0 0.6rem', fontSize: '0.82rem', color: '#888888', fontStyle: 'italic' }}>{objection}</p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#444444', lineHeight: '1.65' }}>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every month you wait is money you are not getting back.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An internal payroll specialist at your healthcare organization costs $60,000–$100,000 per year in fully-loaded compensation. Fully managed payroll at $25–$45 PEPM on a 50-person team costs $15,000–$21,000 per year. Every month your team handles payroll manually is a month of compliance exposure, corrections, and staff time that should be going to patient care -- not spreadsheets.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is before the next quarter starts.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30–60 days. If you want a clean cutover at Q3, Q4, or January 1 -- the window to start is now. Companies that miss the quarter-start timing typically wait another 3 months. The savings you defer are gone for good.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your payroll, give you a fixed monthly cost, and show you what transition looks like.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Who do you run payroll for?</h3>
              <p>RNs, LPNs, clinical staff, PRN employees, administrative staff, and all healthcare team members across any org size.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. We operate as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include?</h3>
              <p>Everything: payroll processing, federal and state tax filing, compliance updates, year-end W-2s, and dedicated BEG support. No add-on fees, no per-run charges, no year-end surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>How long does the transition take?</h3>
              <p>30–60 days from scope review to first managed payroll run. We handle setup, testing, and go-live. Your team reviews and approves before anything goes live.</p>
            </div>
            <div className="faq-item">
              <h3>What if our headcount changes?</h3>
              <p>Your rate adjusts with headcount. Adding or removing employees updates your monthly cost at the same per-employee rate. No contracts to renegotiate.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle shift differential calculations for nursing and clinical staff?</h3>
              <p>BEG configures shift differentials for each clinical role -- night, weekend, and holiday rates -- and applies them automatically based on the hours worked and shift schedule. In unionized facilities, differential rates are taken from the applicable collective bargaining agreement. Differential pay is included in the regular rate for overtime calculations per FLSA rules.</p>
            </div>
            <div className="faq-item">
              <h3>Does HIPAA apply to payroll data at a healthcare organization?</h3>
              <p>Yes. Payroll files at healthcare employers often contain or are linked to protected health information -- medical leave documentation, ADA accommodations, FMLA records, and workers compensation records. BEG manages payroll access under policies appropriate for a HIPAA-sensitive environment, limiting system access to designated personnel with a legitimate need.</p>
            </div>
            <div className="faq-item">
              <h3>How are per-diem clinical staff handled differently from full-time employees?</h3>
              <p>Per-diem staff have variable hours and may not work every pay period. BEG tracks per-diem staff hours correctly across irregular schedules, ensures ACA measurement period hours are tracked for eligibility purposes, and applies the correct tax treatment for any per-diem reimbursements paid alongside hourly wages.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG manage payroll for clinical staff who rotate between multiple facilities?</h3>
              <p>Yes. BEG configures payroll to track labor allocation by facility or cost center within the same organization. Clinical staff working at multiple locations in the same pay period are allocated correctly so facility-level cost reports reconcile without manual adjustments after each cycle.</p>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, tax filing, compliance updates, W-2s, and support. No add-on fees.' } },
              { '@type': 'Question', name: 'How long does the transition take?', acceptedAnswer: { '@type': 'Answer', text: '30-60 days from scope review to first managed payroll run.' } },
              { '@type': 'Question', name: 'How does BEG handle shift differentials for clinical staff?', acceptedAnswer: { '@type': 'Answer', text: 'BEG configures shift differentials for each clinical role and applies them automatically based on hours worked and shift schedule. In unionized facilities, rates come from the applicable CBA. Differential pay is included in the regular rate for overtime calculations.' } },
              { '@type': 'Question', name: 'Does HIPAA apply to payroll data at a healthcare organization?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Payroll files at healthcare employers often contain or link to PHI -- medical leave records, ADA accommodations, FMLA records. BEG manages payroll access under policies appropriate for a HIPAA-sensitive environment.' } },
            ],
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Healthcare', item: 'https://beghr.com/services/managed-payroll/healthcare' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Medical Practice Payroll Outsourcing: Cost vs. Hiring HR Coordinator (2026)',
            excerpt: 'What physician practices, urgent care groups, and medical offices pay to run payroll in-house vs. what fully managed outsourcing costs.',
            href: '/blog/payroll/healthcare/medical-practices',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Dental Office Payroll Outsourcing: Cost vs. Hiring HR Coordinator (2026)',
            excerpt: 'Hygienist pay, provider bonuses, and part-time scheduling make dental payroll harder than it looks. Here is the in-house vs. outsourced cost breakdown.',
            href: '/blog/payroll/healthcare/dental',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Healthcare Clinic Payroll Outsourcing: Managing Clinical Staff Pay (2026)',
            excerpt: 'Credential-based pay, shift differentials, and HIPAA data requirements make healthcare payroll its own category. What growing clinic groups are doing.',
            href: '/blog/payroll/healthcare-general/clinics-payroll',
          },
        ]}
      />
    </ServicePage>
  );
}
