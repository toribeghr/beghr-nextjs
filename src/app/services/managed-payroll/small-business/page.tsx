import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Small Business Payroll | Instant Quote | BEG',
  description: 'Small business payroll fully managed at $25-$45 PEPM. No HR staff needed, no penalties, no migration. Get an instant quote.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/small-business' },
  openGraph: {
    title: 'Small Business Payroll | Instant Quote | BEG',
    description: 'Small business payroll fully managed at $25-$45 PEPM. No HR staff needed, no penalties, no migration. Get an instant quote.',
    url: 'https://www.beghr.com/services/managed-payroll/small-business',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Small Business Payroll | Instant Quote | BEG', description: 'Small business payroll fully managed at $25-$45 PEPM. No HR staff needed, no penalties, no migration. Get an instant quote.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-small-business');

export default function PayrollSmallBusinessPage() {
  return (
    <ServicePage
      heroVideoId="FSoecGhFdaE"
      imageSrc="/assets/hero-images/healthcare.svg"
      imageAlt="Small business owner with fully managed payroll"
      eyebrow="Managed Payroll · Small Business"
      title="You did not start a business to become a payroll clerk."
      description="Every Friday you stop running your business to run payroll instead. One missed filing, one miscalculated withholding, and the IRS is your problem. BEG runs small business payroll for you at $25-$45 per employee per month, fully managed, no migration required."
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
            <h2>What does doing payroll yourself actually cost your small business?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$70K-$100K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of one internal payroll specialist</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Most small businesses cannot justify a full-time payroll hire. Fully managed service at $25-$45 PEPM replaces that headcount for a fraction of the cost.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>33%</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Of small businesses pay IRS penalties tied to payroll errors</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>A missed filing deadline or miscalculated withholding triggers penalties fast, and owners without HR staff catch the mistake after the notice arrives, not before.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>No HR staff</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Owners and office managers doing payroll on top of their real job</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Most small businesses have no dedicated HR or payroll role. Payroll falls to whoever has time, which means it rarely gets the attention compliance requires.</div>
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
            <h2>Three steps to fully managed small business payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your team size, pay schedule, and current process. You get a fixed monthly cost -- no surprises, no per-run fees.' },
              { num: '02', title: 'BEG-managed onboarding', body: 'We configure and run your first payroll cycles. No migration required -- we work in your existing system. Transition takes 30-60 days.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every filing, every compliance update -- fully managed by BEG. You approve payroll. That is the only thing left on your plate.' },
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

      {/* WHAT'S INCLUDED */}
      <section className="section">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What's Included</p>
            <h2>Everything a small business needs from payroll, handled at one flat rate</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Payroll processing without hiring anyone</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Most small businesses cannot justify a full-time payroll specialist at $70,000-$100,000 a year, so payroll ends up on the owner's desk or bolted onto someone's existing job. BEG becomes your payroll department for $25-$45 per employee per month. We run gross-to-net calculations, direct deposit, and pay stub delivery every cycle. You approve the run. We handle the rest.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Tax filings and penalty protection</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Roughly a third of small businesses incur an IRS penalty related to payroll at some point, usually a missed deposit deadline or an incorrect filing caught after the fact. BEG handles federal and state tax withholding, quarterly 941 and annual 940 filings, and state unemployment insurance (SUTA) as part of the standard service. Deadlines do not depend on whether the owner remembered.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>No HR staff required</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Small businesses without an HR department still have to handle new hire reporting, garnishment orders, employee paycheck questions, and year-end W-2s. BEG manages all of it directly. Employees with a paycheck question call BEG, not the owner. New hires get reported in all 50 states without anyone on your team looking up the rules.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Works in your existing system, no migration required</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>You do not have to rip out your current payroll software to get a managed service. BEG can operate inside your existing system, whatever you run today, or in our isolved account if you prefer a single platform. Most small business clients keep their current setup. Migration is available if you want it, never required to get started.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>A flat rate that scales with your headcount, not surprise fees</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Small business owners frequently tell us their last payroll provider charged extra for every off-cycle run, every W-2, every correction. BEG's $25-$45 PEPM rate is all-inclusive, with a $500 monthly minimum. One number covers processing, filings, compliance updates, and support. Add or remove an employee and your monthly cost adjusts at the same per-employee rate. No renegotiating a contract.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS SERVES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who This Serves</p>
            <h2>Small businesses where payroll should not require a full-time hire</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Owner-operated businesses', body: 'The owner currently runs payroll personally, on top of sales, operations, and everything else that actually grows the business.' },
              { title: 'Businesses with an office manager doing double duty', body: 'Payroll landed on whoever had bandwidth. That person is doing two jobs and payroll is not the one they were hired for.' },
              { title: 'Growing teams outgrowing DIY software', body: 'A self-service platform worked at 5 employees. At 15 to 50, the time cost and error risk of running it yourself start adding up fast.' },
              { title: 'Multi-state small businesses', body: 'Even a handful of remote or out-of-state employees creates separate state tax registrations and filing obligations most owners never expected.' },
              { title: 'Seasonal and variable-hour businesses', body: 'Retail, restaurants, and service businesses with fluctuating headcount need payroll that flexes without a fixed per-run fee eating the savings.' },
              { title: 'Small businesses at 2 to 50 employees', body: 'Large enough that payroll errors carry real financial and legal risk, small enough that a dedicated in-house payroll hire does not pencil out.' },
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
            <h2>Three things most payroll providers for small businesses do not offer</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "Switching payroll systems sounds like a headache I do not have time for."',
                body: 'We do not require you to switch platforms. BEG operates as your managed payroll team inside your current system. If you want to move to a better platform later, we can handle that too -- but it is never a requirement to get started.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate, no per-run fees.',
                objection: 'Common objection: "Every payroll company charges extra the moment I need something outside the basic run."',
                body: 'The $25-$45 PEPM rate ($500 monthly minimum) is all-inclusive: payroll processing, tax filing, compliance updates, year-end W-2s, and support. One number, everything included, no surprise line items.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact. Not a support queue.',
                objection: 'Common objection: "I do not want to explain my business to a new rep every time I call."',
                body: 'Your BEG payroll specialist is your ongoing contact. When something changes -- a new hire, a raise, a state registration -- you send one message. There is no ticket queue, no chatbot, and no 1-800 number. Your business has a real person who knows your account.',
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every month you run payroll yourself is a month you are not getting back.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>An internal payroll hire costs $70,000-$100,000 per year in fully loaded compensation, a number most small businesses cannot justify. Fully managed payroll at $25-$45 PEPM on a 15-person team costs roughly $4,500-$8,100 per year. Every month you handle payroll manually is a month of penalty exposure and hours that should be going toward running your business, not spreadsheets.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to switch is before the next quarter starts.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30-60 days. If you want a clean cutover at Q3, Q4, or January 1 -- the window to start is now. Small businesses that miss the quarter-start timing typically wait another 3 months, and the penalties and hours you saved by waiting are gone for good.</p>
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
              <h3>What is a fair price for payroll services for a small business?</h3>
              <p>BEG's fully managed payroll runs $25-$45 per employee per month, all-inclusive, with a $500 monthly minimum. That covers processing, tax filing, compliance, and support. Compare that to a $70,000-$100,000 annual hire or a self-service platform where you still absorb the time and error risk.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change our current payroll system?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration to isolved is available if you want it, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM actually include?</h3>
              <p>Everything: payroll processing, federal and state tax filing, compliance updates, year-end W-2s, new hire reporting, and dedicated BEG support. No per-run add-on fees.</p>
            </div>
            <div className="faq-item">
              <h3>How long does the transition take?</h3>
              <p>30-60 days from scope review to first managed payroll run. We handle setup, testing, and go-live. You review and approve before anything goes live.</p>
            </div>
            <div className="faq-item">
              <h3>We do not have an HR person. Can BEG still manage our payroll?</h3>
              <p>Yes. That is exactly who this service is built for. BEG handles new hire reporting, garnishment orders, employee paycheck questions, and W-2s directly, so you do not need a dedicated HR or payroll hire on staff.</p>
            </div>
            <div className="faq-item">
              <h3>What if our headcount changes throughout the year?</h3>
              <p>Your rate adjusts with headcount at the same per-employee price. Adding or removing employees updates your monthly cost automatically. No contracts to renegotiate, no annual minimums beyond the $500 monthly floor.</p>
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
              { '@type': 'Question', name: 'What is a fair price for payroll services for a small business?', acceptedAnswer: { '@type': 'Answer', text: "BEG's fully managed payroll runs $25-$45 per employee per month, all-inclusive, with a $500 monthly minimum. That covers processing, tax filing, compliance, and support." } },
              { '@type': 'Question', name: 'Do we have to change our current payroll system?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Everything: payroll processing, tax filing, compliance updates, W-2s, new hire reporting, and support. No per-run add-on fees.' } },
              { '@type': 'Question', name: 'How long does the transition take?', acceptedAnswer: { '@type': 'Answer', text: '30-60 days from scope review to first managed payroll run.' } },
              { '@type': 'Question', name: 'We do not have an HR person. Can BEG still manage our payroll?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG handles new hire reporting, garnishment orders, employee paycheck questions, and W-2s directly, so no dedicated HR or payroll hire is needed.' } },
              { '@type': 'Question', name: 'What if our headcount changes throughout the year?', acceptedAnswer: { '@type': 'Answer', text: 'Your rate adjusts with headcount at the same per-employee price, with a $500 monthly minimum. No contracts to renegotiate.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Small Business', item: 'https://www.beghr.com/services/managed-payroll/small-business' },
            ],
          }),
        }}
      />

      {/* CROSS-SILO: HR OUTSOURCING */}
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <p className="reveal" style={{ fontSize: '0.97rem', color: '#555555', textAlign: 'center', lineHeight: '1.7', margin: 0 }}>
            Payroll handled but handbooks, compliance, and hiring paperwork still landing on your desk? BEG also delivers <Link href="/services/hr-outsourcing">HR outsourcing, powered by isolved</Link>: certified HR professionals for a fraction of an in-house HR hire.
          </p>
        </div>
      </section>

      {/* LEARN MORE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Learn More</p>
            <h2>See the numbers and the plans for yourself</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            <Link href="/services/managed-payroll/pricing" className="card-link">
              <span className="tag">Pricing</span>
              <h3>Managed Payroll Pricing</h3>
              <p>See exactly how the $25-$45 PEPM rate breaks down and what is included at every tier.</p>
            </Link>
            <Link href="/services/managed-payroll/cost-calculator" className="card-link">
              <span className="tag">Calculator</span>
              <h3>Payroll Cost Calculator</h3>
              <p>Plug in your headcount and get an instant estimate of your monthly managed payroll cost.</p>
            </Link>
            <Link href="/services/managed-payroll/healthcare" className="card-link">
              <span className="tag">Industry</span>
              <h3>Healthcare Payroll</h3>
              <p>Running a small medical or dental practice? See how BEG handles industry-specific payroll needs.</p>
            </Link>
          </div>
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll outsourcing',
            title: 'Why SaaS Companies Outsource Payroll Instead of Hiring In-House',
            excerpt: 'A full-time payroll manager costs $60K-$100K before benefits. Here is the math on what outsourcing actually costs and what you get.',
            href: '/blog/payroll/technology/saas-payroll-outsourcing',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Medical Practice Payroll Outsourcing: Cost vs. Hiring HR Coordinator (2026)',
            excerpt: 'What small medical practices pay to run payroll in-house vs. what fully managed outsourcing costs.',
            href: '/blog/payroll/healthcare/medical-practices',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Accounting Firm Payroll: Why Internal Teams Are Moving It Out',
            excerpt: 'Firms that manage client payroll often have the messiest internal payroll. A look at the common gaps and how outsourcing closes them.',
            href: '/blog/payroll/professional-services/accounting',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
