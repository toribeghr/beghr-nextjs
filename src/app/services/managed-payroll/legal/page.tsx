import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Law Firms | $25–$35 PEPM | BEG',
  description: 'Outsource law firm payroll for $25–$35 PEPM. Partner distributions, trust accounting, and tax filings included. Request a free scope review.',
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
      description="Partner distributions, trust account tracking, IOLTA compliance, and multi-tier compensation structures make legal payroll unlike any other. We manage all of it as a fully managed service at $25–$35 per employee per month — less than the cost of one payroll specialist."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25–$35', label: 'Per employee per month, all-inclusive' },
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
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Salary, benefits, PTO, training, and turnover risk. Fully managed payroll at $25–$35 PEPM replaces that headcount entirely.</div>
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
                body: 'The $25–$35 PEPM rate is all-inclusive: payroll processing, tax filing, compliance updates, year-end W-2s, and support. There are no per-run fees, no year-end surcharges, and no module upsells. One number, everything included.',
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
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An internal payroll specialist at your law firm costs $60,000–$100,000 per year in fully-loaded compensation. Fully managed payroll at $25–$35 PEPM on a 50-person team costs $15,000–$21,000 per year. Every month you run payroll manually or pay an internal specialist is a month you are overpaying for a function that costs $25–$35 PEPM fully managed.</p>
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
              <h3>What does $25–$35 PEPM include?</h3>
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
              { '@type': 'Question', name: 'What does $25-$35 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, tax filing, compliance updates, W-2s, and support. No add-on fees.' } },
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Legal', item: 'https://beghr.com/services/managed-payroll/legal' },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
