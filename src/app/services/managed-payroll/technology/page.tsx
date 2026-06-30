import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Tech Company Payroll | Remote Teams. Multi-State. Handled. | BEG',
  description: 'Tech company payroll managed at $25–$45 PEPM. Remote teams, multi-state compliance, and equity compensation included. Request a free scope review.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/technology' },
  openGraph: {
    title: 'Tech Company Payroll | Remote Teams. Multi-State. Handled. | BEG',
    description: 'Tech company payroll managed at $25–$45 PEPM. Remote teams, multi-state compliance, and equity compensation included. Request a free scope review.',
    url: 'https://www.beghr.com/services/managed-payroll/technology',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Tech Company Payroll | Remote Teams. Multi-State. Handled. | BEG', description: 'Tech company payroll managed at $25–$45 PEPM. Remote teams, multi-state compliance, and equity compensation included. Request a free scope review.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-technology');

export default function PayrollTechnologyPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/technology.svg"
      imageAlt="Tech company with distributed remote team payroll managed"
      eyebrow="Managed Payroll · Technology"
      title="Remote team payroll across 12 states should not be your problem."
      description="Multi-state remote teams, equity compensation events, contractor vs. employee classification, and rapid headcount scaling make tech payroll a moving target. We manage all of it at $25–$45 per employee per month -- so your team focuses on shipping, not spreadsheets."
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
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>12+ states</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Average number of tax jurisdictions for a 50-person remote tech team</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Every state your employees work in has different tax registration, withholding, and filing requirements. Missing one triggers back penalties.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$65K–$90K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of an internal payroll or HR ops hire</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Tech companies often staff up for payroll complexity during scaling. Fully managed service at $25–$45 PEPM is the cleaner option.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Equity events</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>RSU vesting and option exercises create payroll tax complexity</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Stock compensation events require immediate payroll tax withholding. Miss the window and you have a restatement.</div>
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
              { num: '02', title: 'We map your multi-state employee distribution, equity compensation schedule, and contractor roster before your first managed payroll run.', body: 'We configure and run your first payroll cycles. No migration required -- we work in your existing system. Transition takes 30–60 days.' },
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
            <h2>Remote teams, equity events, and state nexus -- what tech company payroll actually requires</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>State tax nexus for remote employees -- the most common gap in tech payroll</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When a tech company hires a remote employee who works from a state where the company has no other presence, the hire creates employer tax nexus in that state. This requires registering for a new employer withholding account, a state unemployment insurance (SUI) account, and new-hire reporting in that state -- before the first paycheck is issued. Every state has different registration processes, different UI new-employer rates, and different payroll tax thresholds. Missing a registration triggers automatic penalties from the date the employee began working in that state, not from when the oversight was discovered. On a 50-person remote team spread across 12 states, managing state registrations manually is a full-time task. BEG handles state registration proactively -- when you make the hire, we initiate the registration before the first payroll run.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>RSU vesting events and same-day payroll withholding</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When restricted stock units vest, the number of shares multiplied by the fair market value on the vest date is ordinary income subject to federal withholding, FICA, Medicare, and state income tax. The company must withhold taxes at the time of vesting -- typically through a sell-to-cover arrangement or flat supplemental rate -- and remit with the next scheduled payroll deposit. Missing the vest date or withholding at the wrong rate creates a payroll tax restatement, potential IRS penalties, and employee W-2 errors. BEG coordinates vest event processing with your equity plan administrator so withholding is calculated correctly at the time of each vest, reflected in the payroll deposit, and reported on the employee W-2 without requiring manual corrections at year-end.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>NQSO exercises and ISO disqualifying dispositions</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Non-qualified stock option (NQSO) exercises create ordinary income equal to the spread between the exercise price and the fair market value on the exercise date -- taxable and subject to FICA at the time of exercise. Incentive stock options (ISOs) do not create a regular income tax event at exercise (though they trigger AMT), but a disqualifying disposition -- selling ISO shares before the holding period requirements are met -- converts the gain to ordinary income that must be reported on the employee W-2. BEG manages both NQSO exercises and ISO disqualifying dispositions in coordination with your equity plan records so the correct amounts appear on the W-2 and are properly deposited.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Contractor-to-employee conversion as your team scales from 25 to 200</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Tech companies at 25 to 200 employees often have a mix of W-2 employees and 1099 contractors. As the company scales and contractor engagement patterns change -- higher hours, more control, dedicated project assignment -- some contractor relationships begin to look more like employment under the IRS classification tests. The cost of misclassifying an employee as a contractor is the uncollected FICA (both employee and employer share) plus penalties and interest for every open tax year. BEG reviews contractor arrangements during the scope review and flags any relationships where the classification carries elevated risk, so you can address them proactively rather than in an audit.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Payroll compliance for domestic tech companies at 25 to 200 employees</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG serves domestic tech companies -- US-based employees across multiple states -- and does not manage international employer of record or PEO arrangements for overseas employees. The domestic focus means BEG is purpose-built for the compliance challenges that a 25-to-200-person US tech company actually faces: multi-state registration, equity event payroll processing, contractor classification, and remote team scaling. If your team is distributed across 8 to 15 US states with quarterly equity vesting events and a mix of salaried employees and contractors, this is exactly the payroll profile BEG is designed to manage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who This Serves</p>
            <h2>US-based tech companies scaling from 25 to 200 employees</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'SaaS companies with distributed engineering teams', body: 'Remote engineers across 8 to 15 states with RSU grants and quarterly vesting create the exact multi-state, equity-event payroll complexity BEG manages.' },
              { title: 'Series A through Series C funded startups', body: 'Post-Series A companies scaling headcount rapidly, onboarding employees across new states every quarter, and managing equity compensation for the first time.' },
              { title: 'Tech-enabled services companies', body: 'B2B software and tech-enabled services businesses with a mix of W-2 engineers, customer success employees, and 1099 contractors working on specific deliverables.' },
              { title: 'Digital marketing and agency tech companies', body: 'Creative and technology agencies with distributed teams, freelancer-heavy workflows, and contractor classification questions that require regular review.' },
              { title: 'Fintech and insurtech companies', body: 'Financial technology companies that combine distributed tech teams with regulated employee classifications -- compliance obligations from both industries.' },
              { title: 'Pre-IPO companies preparing for equity events', body: 'Companies with equity plans that will accelerate vesting or exercise at a liquidity event, requiring payroll coordination with the cap table and transfer agent.' },
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
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An internal payroll specialist at your tech company costs $60,000–$100,000 per year in fully-loaded compensation. Fully managed payroll at $25–$45 PEPM on a 50-person team costs $15,000–$27,000 per year. Every month you scale headcount without a managed payroll partner is a month of increasing compliance exposure across more and more state tax jurisdictions.</p>
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
              <p>Full-time employees, part-time staff, and W-2 contractors across all functions at technology companies of any stage.</p>
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
              <h3>How does BEG handle state tax registration when we hire a remote employee in a new state?</h3>
              <p>When you notify us of a new hire in a state where you are not already registered, BEG initiates the employer withholding and SUI registrations in that state before the first payroll run. We track the registration status and confirm it is complete before any wages are paid. You are never in a position of running payroll in an unregistered state.</p>
            </div>
            <div className="faq-item">
              <h3>What is the process for payroll withholding on RSU vesting events?</h3>
              <p>BEG coordinates with your equity plan administrator to receive vest event data -- shares vesting, employee, vest date, fair market value. We calculate the ordinary income amount, determine the correct withholding (federal supplemental rate or aggregate method, plus state and FICA), process the withholding payroll run on or near the vest date, and remit with the next scheduled deposit. The income is reflected on the employee W-2 in the correct box.</p>
            </div>
            <div className="faq-item">
              <h3>How does BEG manage contractor-to-employee conversions as our team scales?</h3>
              <p>During the scope review, BEG reviews your contractor roster against the IRS classification factors. Any relationship that shows elevated reclassification risk is flagged so you can address it proactively. When a contractor is converted to W-2 status, BEG handles the payroll configuration update, ensures the new employee is enrolled in withholding correctly, and coordinates the transition of any benefits that need to start at conversion.</p>
            </div>
            <div className="faq-item">
              <h3>Does BEG manage international employees or employer of record for overseas workers?</h3>
              <p>No. BEG manages domestic US payroll -- W-2 employees working in US states. International employer of record, global payroll, and overseas entity compliance are outside our service scope. BEG is purpose-built for US-based tech companies at 25 to 200 domestic employees.</p>
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
              { '@type': 'Question', name: 'How does BEG handle state registration for remote employees in new states?', acceptedAnswer: { '@type': 'Answer', text: 'When you notify us of a new hire in a new state, BEG initiates employer withholding and SUI registrations before the first payroll run. You are never running payroll in an unregistered state.' } },
              { '@type': 'Question', name: 'What is the process for RSU vesting payroll withholding?', acceptedAnswer: { '@type': 'Answer', text: 'BEG coordinates with your equity plan administrator, calculates ordinary income on the vest date, determines correct withholding amounts, processes the withholding payroll run, and reflects the income accurately on the employee W-2.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Technology', item: 'https://www.beghr.com/services/managed-payroll/technology' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'SaaS Payroll Outsourcing: Cost vs. Hiring Payroll Ops Manager (2026)',
            excerpt: 'A payroll operations manager costs $70K-$100K before benefits. Here is what SaaS companies are outsourcing instead -- and what they pay per employee.',
            href: '/blog/payroll/technology/saas-payroll-outsourcing',
          },
          {
            category: 'Payroll comparison',
            title: 'Managed Payroll vs. Deel: What Growing Companies Need to Know (2026)',
            excerpt: 'Deel requires migrating your payroll to their platform. BEG runs in your existing system. Here is what that difference means for tech companies with distributed teams.',
            href: '/blog/compare/managed-payroll-vs-deel',
          },
          {
            category: 'Payroll outsourcing',
            title: "PEO vs. Managed Payroll: What's the Difference and Which Do You Need? (2026)",
            excerpt: 'PEOs co-employ your team and take on employer liability. Managed payroll does not. For fast-growing tech companies, here is what each option actually delivers.',
            href: '/blog/compare/peo-vs-managed-payroll',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Running Technology payroll? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Technology employers get nickel-and-dimed on per-run, off-cycle, and year-end fees. Enter your numbers to see your real cost per employee, what you may be overpaying, and what to get in writing. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
