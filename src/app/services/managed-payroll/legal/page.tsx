import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Law Firms | $25–$45 PEPM | BEG',
  description: 'Outsource law firm payroll for $25–$45 PEPM. Partner distributions, trust accounting, and tax filings included. Request a free scope review.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/legal' },
};

const CALENDLY = getCalendlyLink('payroll-legal');

export default function PayrollLegalPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/legal.svg"
      imageAlt="Law firm with managed payroll service"
      eyebrow="Managed Payroll · Legal"
      title="Law firm payroll is complex. Your team should not be running it."
      description="Partner distributions, trust account tracking, IOLTA compliance, and multi-tier compensation structures make legal payroll unlike any other. We manage all of it as a fully managed service at $25–$45 per employee per month — less than the cost of one payroll specialist."
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
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$60K–$100K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of one internal payroll specialist</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Salary, benefits, PTO, training, and turnover risk. Fully managed payroll at $25–$45 PEPM replaces that headcount entirely.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>IOLTA</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Trust accounting compliance that most payroll systems miss</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Legal payroll requires separation of operating and trust funds. Generic payroll systems are not built for this.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$1,000+</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Average IRS penalty per payroll filing error</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>One missed deadline or miscalculated withholding triggers penalties, notices, and audit exposure.</div>
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
              { num: '02', title: 'We map your partner distribution schedule, trust account structure, and compensation tiers before we touch a payroll run.', body: 'We configure and run your first payroll cycles. No migration required — we work in your existing system. Transition takes 30–60 days.' },
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
            <h2>What law firm payroll actually requires — and what generic systems get wrong</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Partner draws versus W-2 compensation — getting the structure right</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Law firm compensation is not one-size-fits-all. Equity partners in a partnership or LLP typically receive guaranteed payments and profit distributions reported on Schedule K-1 — not W-2 wages. Non-equity partners and of-counsel attorneys at the same firm may receive fixed salaries on W-2s. Associate attorneys receive base salary plus merit or productivity-based bonuses on W-2. Law firms structured as professional corporations or professional associations issue W-2s to all attorney-shareholders. Managing multiple compensation structures in the same payroll system requires separate pay codes, separate tax treatment, and correct year-end reporting for each type — a configuration that most generic payroll systems are not designed to handle cleanly.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>IOLTA trust account segregation and payroll banking</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>IOLTA (Interest on Lawyer Trust Accounts) accounts hold client funds — retainers, settlement proceeds, advance cost deposits. State bar rules require strict separation between IOLTA accounts and the firm operating account. Payroll draws only from the operating account. A payroll processing error that creates an overdraft in the operating account — causing funds to be inadvertently drawn from a linked account structure — can trigger a misappropriation of client funds finding if any IOLTA account is in the banking relationship. BEG manages payroll banking integrations with full awareness of trust account segregation requirements and confirms operating account sufficiency before each payroll run.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Billing rate versus salary reconciliation</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Law firms track realization rates — the ratio of fees collected to fees billed, and fees billed to the theoretical value of hours worked. Managing attorney billing data against payroll cost per attorney is a core function in profitability analysis and discretionary bonus determination. BEG maintains payroll records at the individual attorney level in a format that supports this reconciliation: total compensation, hours worked, gross wages by period, and bonus amounts — structured so that finance and managing partners can calculate cost per billable hour without requiring custom payroll exports or manual data assembly.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-office law firms and multi-state payroll compliance</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Law firms with offices in multiple states face the same multi-state employer tax compliance requirements as any other multi-state employer — separate registrations, different withholding rates, different SUI rates — plus some additional considerations. Remote attorneys who work from home states different from the office jurisdiction may create employer nexus in those states. Associates who relocate trigger new state registrations. Lateral hires from other states bring their own state compliance requirements. BEG manages state-by-state registration as your attorney roster changes, and monitors the states where your attorneys physically work so registrations are in place before the first payroll is run.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Year-end W-2 complexity at law firms with variable compensation</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Law firm year-end payroll includes several items that require careful handling: discretionary bonuses paid in December (the year-end bonus cycle at most firms), reimbursements that exceed the accountable plan limits and must be added to W-2 gross income, partner guaranteed payments that need K-1 coordination with the firm accountants, and any attorney who departed mid-year and received a separation payment. BEG manages each of these elements through the year-end process so W-2s are accurate on the first issuance and do not require corrections that create confusion for attorneys during tax season.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who This Serves</p>
            <h2>Law firms where payroll complexity matches the sophistication of the practice</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Mid-size regional law firms', body: 'Firms with 15 to 100 attorneys managing partners, associates, paralegals, and administrative staff across mixed compensation structures.' },
              { title: 'Boutique specialty practices', body: 'Litigation boutiques, IP firms, transactional practices, and family law offices where billable hour tracking and bonus structures require payroll coordination.' },
              { title: 'Multi-office law firms', body: 'Practices with attorneys in multiple states face multi-state registration, variable withholding rates, and remote attorney nexus questions that require proactive management.' },
              { title: 'Plaintiff litigation firms', body: 'Contingency-based practices with large staff swings around active litigation cycles and settlement distributions that affect firm cash flow and payroll timing.' },
              { title: 'Growing firms hiring lateral attorneys', body: 'Each lateral hire from another state may create new payroll tax registration requirements and compensation structure questions that need resolution before the first paycheck.' },
              { title: 'Law firms at 11 to 200 attorneys', body: 'The sweet spot for managed payroll — large enough to have real compensation complexity, not large enough to justify a dedicated payroll compliance function internally.' },
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
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An internal payroll specialist at your law firm costs $60,000–$100,000 per year in fully-loaded compensation. Fully managed payroll at $25–$45 PEPM on a 50-person team costs $15,000–$21,000 per year. Every month you run payroll manually or pay an internal specialist is a month you are overpaying for a function that costs $25–$45 PEPM fully managed.</p>
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
              <p>Partners, associates, paralegals, legal administrators, and support staff at law firms of all sizes.</p>
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
              <h3>How does BEG handle partner draws versus W-2 salaries at the same firm?</h3>
              <p>BEG manages both compensation types within the same engagement. Equity partner guaranteed payments and distributions are documented and coordinated with the firm accountants for K-1 reporting. Non-equity partner and associate salaries are processed on W-2 with standard withholding. Each compensation type gets the correct tax treatment without requiring separate payroll relationships.</p>
            </div>
            <div className="faq-item">
              <h3>What is the IOLTA risk in law firm payroll processing?</h3>
              <p>An overdraft in the firm operating account — caused by a payroll timing error — can inadvertently cause funds to be drawn from a linked trust account, creating a potential client funds misappropriation issue under state bar rules. BEG confirms operating account sufficiency before each payroll run and manages banking integrations with full awareness of trust account segregation requirements.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG maintain payroll records in a format compatible with billing rate reconciliation?</h3>
              <p>Yes. BEG maintains compensation data at the individual attorney level — total compensation, hours worked, bonus amounts by period — in a format that supports cost-per-billable-hour analysis without requiring custom exports. Managing partners and finance directors can run the reconciliation without pulling additional data from the payroll system.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG handle the year-end bonus cycle that most law firms run in December?</h3>
              <p>BEG processes year-end bonus payrolls as supplemental payroll runs with the correct federal and state supplemental withholding rates. We coordinate the bonus payroll schedule with your normal payroll cycle so year-end tax deposits are made on time and W-2s reflect the full year compensation — including the December bonus — accurately on the first issuance.</p>
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
              { '@type': 'Question', name: 'How does BEG handle partner draws versus W-2 salaries at the same firm?', acceptedAnswer: { '@type': 'Answer', text: 'BEG manages both compensation types. Equity partner guaranteed payments coordinate with firm accountants for K-1 reporting. Non-equity partner and associate salaries are processed on W-2 with standard withholding. Each type gets correct tax treatment.' } },
              { '@type': 'Question', name: 'What is the IOLTA risk in law firm payroll?', acceptedAnswer: { '@type': 'Answer', text: 'An operating account overdraft caused by a payroll timing error can inadvertently draw from a linked trust account, creating a client funds misappropriation issue under state bar rules. BEG confirms account sufficiency before each run.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Legal', item: 'https://beghr.com/services/managed-payroll/legal' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Law Firm Payroll Outsourcing: Cost vs. Hiring HR Manager (2026)',
            excerpt: 'Partner draws, associate salaries, and paralegal hourly pay all run on different tracks. What managing partners are paying to handle this in-house vs. outsourced.',
            href: '/blog/payroll/professional-services/law-firm-payroll-outsourcing',
          },
          {
            category: 'Legal hiring',
            title: '2026 Attorney Market Trends: What Managing Partners Need to Know',
            excerpt: 'Law school enrollment is down 30% since 2010 and the best candidates are passive. What the talent market looks like and how firms are responding.',
            href: '/blog/legal-hiring/attorney-market-trends',
          },
          {
            category: 'Payroll outsourcing',
            title: 'ADP vs. Managed Payroll: Is ADP Still Worth It for Mid-Size Companies? (2026)',
            excerpt: 'ADP's per-transaction pricing adds up fast for firms processing partner draws, bonuses, and multi-office payroll. Here is the side-by-side cost comparison.',
            href: '/blog/compare/managed-payroll-vs-adp',
          },
        ]}
      />
    </ServicePage>
  );
}
