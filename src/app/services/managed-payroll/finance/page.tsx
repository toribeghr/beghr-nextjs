import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Finance Firms | $25–$45 PEPM | BEG',
  description: 'Finance and accounting payroll fully managed. Bonus structures, commission tracking, zero-error filings at $25–$45 PEPM. Request a scope review.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/finance' },
  openGraph: {
    title: 'Managed Payroll for Finance Firms | $25–$45 PEPM | BEG',
    description: 'Finance and accounting payroll fully managed. Bonus structures, commission tracking, zero-error filings at $25–$45 PEPM. Request a scope review.',
    url: 'https://www.beghr.com/services/managed-payroll/finance',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Managed Payroll for Finance Firms | $25–$45 PEPM | BEG', description: 'Finance and accounting payroll fully managed. Bonus structures, commission tracking, zero-error filings at $25–$45 PEPM. Request a scope review.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-finance');

export default function PayrollFinancePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/finance.svg"
      imageAlt="Finance firm with fully managed payroll service"
      eyebrow="Managed Payroll · Finance"
      title="Finance firm payroll has zero tolerance for errors. Neither do we."
      description="Bonus cycles, commission structures, deferred compensation, and performance-based pay make finance payroll a zero-error environment. One mistake in a filing is an audit trigger. We manage it all at $25–$45 per employee per month -- fully managed, nothing to touch."
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
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$65K–$95K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of a dedicated finance payroll specialist</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Salary, benefits, and turnover risk for one internal role. Fully managed payroll at $25–$45 PEPM replaces that headcount.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Bonus cycles</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>And commission structures that must calculate flawlessly</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>An error in a bonus or commission payout triggers correction requests, employee complaints, and potential payroll tax restatements.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Audit risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Every payroll filing error is a potential trigger</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Finance firms operate in a regulated environment. Payroll compliance is not optional -- it is a fiduciary obligation.</div>
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
              { num: '02', title: 'We document your bonus structures, commission schedules, and deferred comp arrangements before your first managed payroll run.', body: 'We configure and run your first payroll cycles. No migration required -- we work in your existing system. Transition takes 30–60 days.' },
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
            <h2>What finance firm payroll actually requires -- and the risk of getting it wrong</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>SOX payroll controls and records retention</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>For public companies and companies preparing for a public offering, Sarbanes-Oxley Section 404 requires adequate internal controls over financial reporting -- and payroll records are explicitly in scope. Payroll transactions represent a significant portion of operating expenses, and the controls around payroll authorization, processing, reconciliation, and record retention must be documented and testable. A managed payroll service that maintains compliant record-keeping, audit trails, and access controls supports your SOX 404 controls framework. BEG maintains payroll records with the access controls and retention policies appropriate for a SOX-sensitive environment.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Advisor and analyst compensation structures -- bonus, commission, and grid pay</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Finance firms pay their professionals in ways that standard payroll systems are not designed for. Financial advisors on a grid-based model receive commission payouts calculated against trailing production -- the payroll system must pull from production reports and apply the correct grid percentage to each advisor's production level. Portfolio managers may receive performance fees paid as W-2 supplemental compensation or as partnership distributions. Traders may receive discretionary bonuses calculated by desk against P&L. Each of these compensation types has different withholding treatment, different payment timing, and different W-2 reporting requirements. BEG configures payroll to handle each compensation type correctly for each role classification.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>RIA and broker-dealer employee classification</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Investment advisers commonly engage independent contractors alongside W-2 employees -- financial planners, compliance consultants, research analysts, and registered representatives. The IRS 20-factor test, the ABC test in states that apply it, and FINRA guidance on associated persons create a complex framework for determining who must receive a W-2 versus a 1099. Misclassification of an employee as an independent contractor creates employment tax liability for the uncollected FICA, potential FINRA regulatory consequences, and exposure under state wage and hour laws. BEG reviews classification for each role type during the scope review and flags any arrangements that carry reclassification risk.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>IRC Section 162(m) and deductibility of executive compensation</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>For public finance companies, IRC Section 162(m) limits the corporate tax deduction for compensation paid to covered employees (CEO, CFO, and the three highest-paid other officers) above $1 million per year. While 162(m) is primarily a tax planning issue, the payroll records must be maintained in a way that allows your tax advisors to identify covered employees, calculate the deductible versus non-deductible portions of each compensation element, and make the necessary adjustments in the corporate return. BEG maintains compensation records at the individual level with enough detail to support this analysis.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-state compliance for distributed advisor teams</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Finance firms with advisors or analysts in multiple states face the standard multi-state payroll compliance requirements -- separate employer tax registrations, different withholding rates, different SUI rates, different new-hire reporting -- plus additional considerations specific to financial services. Some states impose specific licensing and registration requirements on financial professionals working in those states. The employer tax registration in those states must be in place before the professional begins client-facing work. BEG manages state-by-state registration proactively as your team geography changes, so you are never operating in a state without the required employer registrations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who This Serves</p>
            <h2>Finance firms where payroll errors are an audit trigger</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Registered investment advisers (RIAs)', body: 'Complex compensation structures including grid pay, performance fees, and advisor deferred comp require payroll that understands the RIA compensation model.' },
              { title: 'Broker-dealers', body: 'FINRA-regulated compensation, commission structures, associated person classification, and multi-state licensing make broker-dealer payroll unlike any other industry.' },
              { title: 'Accounting and CPA firms', body: 'Partner distributions, senior manager bonus cycles, and multi-state professional staff require a payroll partner who understands partnership and professional service firm compensation.' },
              { title: 'Hedge funds and private equity firms', body: 'Management company W-2 payroll alongside carried interest and incentive allocations requires payroll coordinated with fund administration and tax advisors.' },
              { title: 'Wealth management firms', body: 'Advisor grid pay, client service associate compensation, and transition packages for recruited advisors are finance industry payroll scenarios that standard platforms handle poorly.' },
              { title: 'Financial services firms at 15 to 200 employees', body: 'Large enough to have real compliance exposure from compensation complexity, too small to justify a dedicated payroll compliance specialist internally.' },
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
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An internal payroll specialist at your finance firm costs $60,000–$100,000 per year in fully-loaded compensation. Fully managed payroll at $25–$45 PEPM on a 50-person team costs $15,000–$21,000 per year. Every payroll cycle your team manages manually is compliance exposure. The cost of one IRS penalty or restatement exceeds what fully managed payroll costs for a year.</p>
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
              <p>Partners, analysts, associates, portfolio managers, advisors, and administrative staff at investment firms, accounting firms, and financial services organizations.</p>
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
              <h3>Are payroll records in scope for SOX Section 404 internal controls?</h3>
              <p>Yes. Payroll represents a major category of operating expense, and the controls around payroll authorization, processing, and record retention are typically tested in a SOX 404 audit. BEG maintains payroll records with the access controls and audit trails appropriate for a SOX-sensitive environment.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle commission payroll for advisors on a grid model?</h3>
              <p>BEG configures payroll to apply the correct grid percentage to each advisor based on their production level each period. Commission payouts are processed as supplemental wages with the appropriate federal and state withholding. W-2 reporting reflects the correct allocation between base salary and commission income.</p>
            </div>
            <div className="faq-item">
              <h3>What is the risk of misclassifying an investment professional as an independent contractor?</h3>
              <p>Misclassification creates employment tax liability for the uncollected FICA on all payments made, potential state wage and hour violations, and -- for FINRA-registered representatives -- potential regulatory consequences. The IRS 20-factor test and FINRA guidance both create risk for arrangements that look more like employment than true independent contracting. BEG flags classification risk during the scope review.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG handle year-end W-2 complexity for finance professionals with multiple income types?</h3>
              <p>Yes. Finance professionals often have base salary, discretionary bonus, commission, equity income, and fringe benefit imputed income all on the same W-2. BEG manages each income type with the correct withholding treatment throughout the year so year-end W-2 reconciliation is accurate and does not require restatement.</p>
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
              { '@type': 'Question', name: 'Are payroll records in scope for SOX Section 404?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Payroll controls are typically tested in a SOX 404 audit. BEG maintains payroll records with the access controls and audit trails appropriate for a SOX-sensitive environment.' } },
              { '@type': 'Question', name: 'How does BEG handle advisor grid commission payroll?', acceptedAnswer: { '@type': 'Answer', text: 'BEG configures payroll to apply the correct grid percentage to each advisor based on their production level each period, processed as supplemental wages with appropriate withholding.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Finance', item: 'https://www.beghr.com/services/managed-payroll/finance' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Financial Services Payroll Outsourcing: Managing Commission, Deferred Comp, and Compliance (2026)',
            excerpt: 'Grid pay, deferred bonuses, and RIA classification rules make financial services payroll more complex than most systems handle. Here is what outsourcing solves.',
            href: '/blog/payroll/financial-services/wealth-firms',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Accounting Firm Payroll Outsourcing: Cost vs. Hiring HR Manager (2026)',
            excerpt: 'What professional services firms are paying for in-house payroll vs. fully managed outsourcing -- and why most are making the switch.',
            href: '/blog/payroll/professional-services/accounting',
          },
          {
            category: 'Payroll outsourcing',
            title: 'ADP vs. Managed Payroll: Is ADP Still Worth It for Mid-Size Companies? (2026)',
            excerpt: 'ADP charges platform fees plus per-transaction fees. BEG charges one flat rate per employee. Here is what that difference looks like at 25, 50, and 100 employees.',
            href: '/blog/compare/managed-payroll-vs-adp',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Running Finance payroll? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Finance employers get nickel-and-dimed on per-run, off-cycle, and year-end fees. Enter your numbers to see your real cost per employee, what you may be overpaying, and what to get in writing. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
