import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Executive Payroll Services | Deferred Comp & Benefits | BEG',
  description: 'Executive compensation managed discreetly at $25–$45 PEPM. Deferred comp, executive benefits, and complex arrangements handled. Request a call.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/executive' },
};

const CALENDLY = getCalendlyLink('payroll-executive');

export default function PayrollExecutivePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/executive.svg"
      imageAlt="Organization with executive compensation managed payroll"
      eyebrow="Managed Payroll · Executive"
      title="Executive compensation requires discretion and precision."
      description="Deferred compensation plans, executive benefit structures, non-qualified plans, and complex bonus arrangements require a payroll partner who understands how to handle them — accurately and discreetly. We manage executive payroll at $25–$45 per employee per month."
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
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>NQDC plans</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Non-qualified deferred compensation requires specialized handling</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>NQDC plan distributions, timing elections, and 409A compliance all touch payroll. One miscalculation creates significant tax liability.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Discretion</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Executive payroll cannot go through standard HR workflows</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Compensation details for C-suite and board members require restricted access and separate processing.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$80K–$120K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of an executive compensation specialist</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Organizations large enough to need specialized executive payroll often cannot justify the headcount. Fully managed service solves this.</div>
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
              { num: '01', title: 'Scope review', body: 'We map your current payroll process, employee roster, and complexity. You get a fixed monthly cost — no surprises.' },
              { num: '02', title: 'We document your NQDC plans, deferred comp elections, executive benefit structures, and access restrictions before processing a single payroll cycle.', body: 'We configure and run your first payroll cycles. No migration required — we work in your existing system. Transition takes 30–60 days.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every filing, every compliance update — fully managed by BEG. Your team touches nothing.' },
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
            <h2>What executive compensation payroll actually requires — and where generic vendors fail</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Non-qualified deferred compensation and IRC Section 409A</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Non-qualified deferred compensation (NQDC) plans allow executives to defer salary and bonus into a future tax year. IRC Section 409A governs these plans strictly: timing elections must be made before the calendar year in which the compensation is earned (with narrow exceptions), and distributions must follow a fixed schedule or triggering event specified in the plan document. If an election is missed, voided, or improperly structured, the entire deferred balance becomes immediately taxable plus a 20% excise tax plus interest. Payroll must coordinate with the NQDC plan document and the plan administrator on every deferral election and every distribution event to ensure the correct amounts are processed on the correct dates.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Equity compensation payroll — RSU vesting and option exercises</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When restricted stock units vest, the fair market value of the shares on the vest date is ordinary income subject to federal withholding, FICA, Medicare, and state income tax withholding. The company must withhold taxes at the time of vesting — typically through a sell-to-cover arrangement or flat supplemental rate withholding — and remit to the IRS with the next scheduled payroll deposit. Non-qualified stock option (NQSO) exercises create the same event: the spread between the exercise price and fair market value is ordinary income requiring immediate payroll withholding. Missing the withholding window or applying the wrong rate creates a payroll tax restatement and potential penalties.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Executive fringe benefits and imputed income</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Several common executive benefits create taxable income that must be added to W-2 gross wages: group term life insurance above $50,000 face value (using IRS Table I rates), personal use of a company vehicle (calculated using the annual lease value or cents-per-mile method), employer-paid club memberships (fully imputed unless the club is used primarily for business), and certain supplemental executive retirement plan (SERP) benefits. Each of these has a different valuation method and a different inclusion timing. A payroll partner who does not understand the fringe benefit rules will either understate executive W-2 income — creating audit exposure — or handle them inconsistently across the executive team.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Change-of-control and golden parachute gross-up calculations</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>IRC Section 280G imposes a 20% excise tax on "excess parachute payments" — compensation paid in connection with a change of control that exceeds one times the executive's average annual compensation over the preceding five years. When a transaction is anticipated, payroll must coordinate with legal and tax advisors to calculate the 280G exposure for each covered executive, apply any gross-up provisions contained in their employment agreements, and ensure the correct withholding is applied to parachute payments when they are made. This is a low-frequency but high-dollar event where a payroll error has significant consequences.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Access controls and discretion in executive payroll processing</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>C-suite and board member compensation should not flow through the same payroll system access that HR generalists use for regular employee records. Total compensation for senior executives — including base salary, deferred comp balances, equity grant values, and benefits — is sensitive information that should be restricted to a narrow group. BEG processes executive payroll under a restricted-access model, separate from general employee payroll workflows, with access limited to designated contacts on both sides.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who This Serves</p>
            <h2>Organizations with complex executive compensation structures</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Private equity-backed companies', body: 'Management incentive plans, carried interest arrangements, and rollover equity create payroll complexity that most HR systems are not configured to handle.' },
              { title: 'Family-owned enterprises with active boards', body: 'Board member compensation, deferred comp plans for founders, and separation agreements for transitioning executives all require specialized payroll handling.' },
              { title: 'Pre-IPO companies', body: 'RSU grants, option pools, and equity compensation events that accelerate in the months before a public offering require payroll precision that scales with the event.' },
              { title: 'Professional services firms', body: 'Managing partner compensation, non-equity partner salaries, and senior director bonus arrangements that vary by year and role classification.' },
              { title: 'Healthcare systems and nonprofits', body: 'Executive SERP plans, deferred compensation elections, and incentive compensation tied to organizational performance metrics.' },
              { title: 'Companies at 25 to 500 employees', body: 'Large enough to have a senior executive team with complex arrangements, small enough that an internal specialist for executive payroll alone is not justifiable.' },
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
                body: 'We do not require you to switch platforms. BEG operates as your managed payroll team inside your current system. If you want to move to a better platform, we can handle that too — but it is never a requirement to get started.',
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
                body: 'Your BEG payroll specialist is your ongoing contact. When something changes — a new hire, a state registration, a compliance update — you send one message. There is no ticket queue, no chatbot, and no calling a 1-800 number. Your team has a real person who knows your account.',
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
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An internal payroll specialist at your executive team costs $60,000–$100,000 per year in fully-loaded compensation. Fully managed payroll at $25–$45 PEPM on a 50-person team costs $15,000–$21,000 per year. Executive compensation errors — missed 409A elections, late NQDC distributions, or incorrect withholding on executive benefits — create significant tax liability and potential IRS scrutiny.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is before the next quarter starts.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30–60 days. If you want a clean cutover at Q3, Q4, or January 1 — the window to start is now. Companies that miss the quarter-start timing typically wait another 3 months. The savings you defer are gone for good.</p>
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
              <p>C-suite executives, board members, senior vice presidents, directors, and other leadership with complex compensation arrangements.</p>
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
              <h3>What happens if a 409A election is missed or improperly structured?</h3>
              <p>Under IRC Section 409A, an improperly structured deferred compensation arrangement causes the entire deferred amount to become immediately taxable plus a 20% excise tax plus interest — regardless of whether the executive has received the funds. BEG coordinates every NQDC deferral and distribution event with your plan document and administrator to prevent timing errors.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle payroll withholding on RSU vesting events?</h3>
              <p>When shares vest, BEG processes the supplemental payroll withholding on the spread (shares times fair market value on vest date) as ordinary income. We coordinate the withholding method — sell-to-cover or flat supplemental rate — with your equity plan administrator and remit withholding with the next scheduled payroll deposit. The vesting income is reflected on the executive W-2.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG process executive payroll separately from our general employee payroll?</h3>
              <p>Yes. BEG manages executive payroll under a restricted-access model, separate from the general employee payroll workflow. Compensation details for C-suite and board members are handled with access limited to designated contacts on both sides — not routed through standard HR workflows.</p>
            </div>
            <div className="faq-item">
              <h3>Does BEG handle the imputed income calculation for executive fringe benefits?</h3>
              <p>Yes. BEG calculates imputed income for common executive fringe benefits — group term life above $50K, personal vehicle use, club memberships, and SERP contributions — and adds them to W-2 gross wages using the correct IRS valuation method for each benefit type.</p>
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
              { '@type': 'Question', name: 'What happens if a 409A election is missed?', acceptedAnswer: { '@type': 'Answer', text: 'Under IRC Section 409A, an improperly structured deferred compensation arrangement causes the entire deferred amount to become immediately taxable plus a 20% excise tax. BEG coordinates every NQDC event with your plan document and administrator.' } },
              { '@type': 'Question', name: 'How does BEG handle RSU vesting events?', acceptedAnswer: { '@type': 'Answer', text: 'BEG processes supplemental payroll withholding on the spread at vesting, coordinates the withholding method with your equity plan administrator, and reflects the income on the executive W-2.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Executive', item: 'https://beghr.com/services/managed-payroll/executive' },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
