import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Engineering Payroll | Instant Quote | BEG',
  description: 'Engineering payroll managed at $25-$45 PEPM. Prevailing wage, certified payroll, and project tracking all included. Request a scope review.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/engineering' },
  openGraph: {
    title: 'Engineering Payroll | Instant Quote | BEG',
    description: 'Engineering payroll managed at $25-$45 PEPM. Prevailing wage, certified payroll, and project tracking all included. Request a scope review.',
    url: 'https://www.beghr.com/services/managed-payroll/engineering',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Engineering Payroll | Instant Quote | BEG', description: 'Engineering payroll managed at $25-$45 PEPM. Prevailing wage, certified payroll, and project tracking all included. Request a scope review.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-engineering');

export default function PayrollEngineeringPage() {
  return (
    <ServicePage
      heroVideoId="aG_goNwZX7w"
      imageSrc="/assets/hero-images/engineering.svg"
      imageAlt="Engineering firm with certified payroll managed service"
      eyebrow="Managed Payroll · Engineering"
      title="Certified payroll and prevailing wage should not consume your team."
      description="Government projects require certified payroll reports. Davis-Bacon and state prevailing wage rules vary by project. One error in a certified payroll submission delays payment or triggers a compliance review. We manage all of it at $25-$45 per employee per month -- fully managed, nothing to touch."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
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
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Certified</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Payroll reporting required on every government contract</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Weekly certified payroll reports, fringe benefit tracking, and compliance documentation -- all required, all auditable.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$60K-$85K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of an internal payroll specialist with certified payroll experience</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Finding someone who understands Davis-Bacon and prevailing wage is difficult. Managing it as a service is easier.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Project-based</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Labor tracking across multiple active projects simultaneously</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Engineering firms run multiple projects with different wage requirements. One system needs to handle all of them cleanly.</div>
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
              { num: '02', title: 'We document your active project roster, prevailing wage rates, fringe benefit structures, and certified payroll submission schedule before your first managed run.', body: 'We configure and run your first payroll cycles. No migration required -- we work in your existing system. Transition takes 30-60 days.' },
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
            <h2>What engineering firm payroll actually requires -- and what most vendors miss</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Davis-Bacon Act and state prevailing wage laws</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When your engineering firm holds a federal or federally assisted contract -- highways, bridges, federal buildings, water infrastructure -- the Davis-Bacon Act requires you to pay workers at the prevailing wage rate set by the Department of Labor for each specific job classification in that specific county. Forty-three states have their own prevailing wage laws covering state-funded public works projects. The rates change by project type, by county, and by trade classification. A civil engineer on a federal highway project in one county may have a different required wage than the same classification on a water infrastructure project in an adjacent county. Managing prevailing wage manually across multiple active projects is where most engineering payroll errors originate.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>WH-347 certified payroll reporting -- weekly, auditable, no exceptions</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Federal contractors must submit a WH-347 Certified Payroll Report every week there are workers on a Davis-Bacon project -- including weeks with no work performed, where a no-work certification is still required. The WH-347 lists every worker, their job classification, hours worked each day, gross wages paid, all deductions taken, and fringe benefits provided or paid in cash. One error -- a misclassified worker, an incorrect fringe credit, or a missing submission week -- can trigger a DOL compliance investigation, withholding of contract payments by the contracting agency, or debarment from future federal contracting. BEG manages the WH-347 submission schedule for every active government project in your roster.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Fringe benefit compliance under Davis-Bacon</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Davis-Bacon allows contractors to satisfy the fringe benefit component of prevailing wage through bona fide benefit plans -- health insurance, pension contributions, apprenticeship training fund contributions. If your benefit plan provides less than the required fringe dollar amount per hour worked, the difference must be paid as additional cash wages on top of base pay. Miscalculating the fringe credit creates both underpayment liability and inaccuracy in your certified payroll report. BEG calculates the fringe credit value from your benefit plans against the required fringe rate for each classification on each project, and tracks whether additional cash fringe is owed each pay period.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-state job site registration and tracking</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>An engineering firm with active projects in multiple states must maintain a separate employer tax registration in each state where employees work -- even temporarily. Each state requires a distinct employer income tax withholding account, a state unemployment insurance (SUI) account, and new-hire reporting compliance. Missing a registration triggers automatic penalties from the date the first employee began working in that state -- not from when the oversight was discovered. BEG handles state registration and keeps your payroll configuration current as your project map changes. When a project ends in one state and begins in another, we initiate the new registration before the first employee works on site.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Project-based labor cost allocation</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Engineering firms track labor costs by project for billing, fee analysis, and contract management. Payroll must code every hour worked to the correct project number so labor cost reports reconcile against your project accounting system. When an employee splits time across multiple active contracts in the same pay period, the split must reflect both correct wages and correct certified payroll reporting for each project. BEG configures payroll to align with your project accounting structure so labor cost allocation is captured at the source rather than estimated after the fact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who This Serves</p>
            <h2>Engineering and infrastructure firms that carry government contracts</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Civil and structural engineering firms', body: 'Public infrastructure projects -- highways, bridges, water systems -- carry Davis-Bacon and certified payroll requirements on every federally funded contract.' },
              { title: 'MEP engineering contractors', body: 'Mechanical, electrical, and plumbing contractors on federally funded building projects must comply with Davis-Bacon wage determinations specific to each trade classification.' },
              { title: 'Environmental and geotechnical firms', body: 'Government agency contracts for site assessment, remediation, and geotechnical investigation typically carry prevailing wage requirements.' },
              { title: 'Survey and land development companies', body: 'Survey crews working on federal or state land projects operate under prevailing wage rules that vary by state and project type.' },
              { title: 'Multi-state project firms', body: 'Any engineering firm with active projects in more than one state needs payroll configured for multiple tax jurisdictions simultaneously.' },
              { title: 'Firms at 15 to 200 employees', body: 'Large enough to carry real compliance exposure, too small to justify a full-time certified payroll specialist on staff.' },
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
                body: 'The $25-$45 PEPM rate is all-inclusive: payroll processing, tax filing, compliance updates, year-end W-2s, and support. One number, everything included.',
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
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An internal payroll specialist at your engineering firm costs $60,000-$100,000 per year in fully-loaded compensation. Fully managed payroll at $25-$45 PEPM on a 50-person team costs $15,000-$27,000 per year. Every government project your team manages requires certified payroll compliance. One missed submission or calculation error puts your contract payment at risk.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is before the next quarter starts.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30-60 days. If you want a clean cutover at Q3, Q4, or January 1 -- the window to start is now. Companies that miss the quarter-start timing typically wait another 3 months. The savings you defer are gone for good.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" subline={false} />
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
              <p>Engineers, project managers, field technicians, administrative staff, and project labor at engineering and construction firms.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. We operate as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include?</h3>
              <p>Everything: payroll processing, federal and state tax filing, compliance updates, year-end W-2s, and dedicated BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>How long does the transition take?</h3>
              <p>30-60 days from scope review to first managed payroll run. We handle setup, testing, and go-live. Your team reviews and approves before anything goes live.</p>
            </div>
            <div className="faq-item">
              <h3>What if our headcount changes?</h3>
              <p>Your rate adjusts with headcount. Adding or removing employees updates your monthly cost at the same per-employee rate. No contracts to renegotiate.</p>
            </div>
            <div className="faq-item">
              <h3>What is a WH-347 and what happens if we miss a submission?</h3>
              <p>The WH-347 is the federal certified payroll report form required weekly on Davis-Bacon projects. Missing a submission can trigger payment withholding by the contracting agency and a DOL compliance review. BEG manages the WH-347 submission schedule for every active government contract in your project roster.</p>
            </div>
            <div className="faq-item">
              <h3>Do state prevailing wage laws apply if our project is not federally funded?</h3>
              <p>In most states, yes. Forty-three states have prevailing wage laws that cover state-funded public works projects independently of federal Davis-Bacon requirements. The applicable wage determination depends on the funding source, the state, and the project type. BEG tracks the correct wage schedule for each project in each jurisdiction.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle fringe benefit compliance on Davis-Bacon projects?</h3>
              <p>BEG calculates the fringe credit value from your benefit plans against the required fringe rate per job classification. If your plan value falls short, we calculate and apply additional cash fringe payments on top of base wages. This calculation is tracked per project and reflected accurately in your certified payroll reports.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG handle payroll across multiple active projects simultaneously?</h3>
              <p>Yes. BEG configures payroll to track hours by project code so labor costs allocate correctly to each contract. Employees who split time across projects in the same pay period are handled with accurate per-project certified payroll reporting and correct wage application for each project jurisdiction.</p>
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
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, tax filing, compliance updates, W-2s, and support.' } },
              { '@type': 'Question', name: 'How long does the transition take?', acceptedAnswer: { '@type': 'Answer', text: '30-60 days from scope review to first managed payroll run.' } },
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Engineering', item: 'https://www.beghr.com/services/managed-payroll/engineering' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Construction Payroll Outsourcing: Cost vs. Hiring Payroll Manager (2026)',
            excerpt: 'Certified payroll, prevailing wage, and multi-project tracking are not standard payroll features. Here is what outsourcing actually costs vs. hiring.',
            href: '/blog/payroll/construction/contractors-payroll',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Manufacturing Payroll Outsourcing: Cost vs. Hiring HR Manager (2026)',
            excerpt: 'Shift differentials, overtime tiers, and union fringes make manufacturing payroll complex. The real cost of in-house vs. outsourced.',
            href: '/blog/payroll/manufacturing/outsourcing-payroll',
          },
          {
            category: 'Payroll outsourcing',
            title: "PEO vs. Managed Payroll: What's the Difference and Which Do You Need? (2026)",
            excerpt: 'PEOs co-employ your team. Managed payroll does not. For engineering firms that want to keep control, here is what each actually delivers.',
            href: '/blog/compare/peo-vs-managed-payroll',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
