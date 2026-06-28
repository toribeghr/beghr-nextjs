import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Auto Dealership Payroll | Commission & Clawback. Handled. | BEG',
  description: 'Auto dealership payroll fully managed at $25–45 PEPM. Commission draws, flat-rate tech pay, clawbacks, and demo vehicle taxes handled.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/auto-dealership' },
  openGraph: {
    title: 'Auto Dealership Payroll | Commission & Clawback. Handled. | BEG',
    description: 'Auto dealership payroll fully managed at $25–45 PEPM. Commission draws, flat-rate tech pay, clawbacks, and demo vehicle taxes handled.',
    url: 'https://beghr.com/services/managed-payroll/auto-dealership',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Auto Dealership Payroll | Commission & Clawback. Handled. | BEG', description: 'Auto dealership payroll fully managed at $25–45 PEPM. Commission draws, flat-rate tech pay, clawbacks, and demo vehicle taxes handled.', images: ['https://beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-auto-dealership');

export default function PayrollAutoDealershipPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/auto-dealership.svg"
      imageAlt="Auto dealership with fully managed commission and flat-rate payroll"
      eyebrow="Managed Payroll · Auto Dealerships"
      title="Managed Payroll for Auto Dealerships"
      description="Commission draws, flat-rate techs, and finance clawbacks -- fully managed. Auto dealerships run one of the most complex compensation environments of any industry: sales commission draws with advances, flat-rate service writer pay, finance manager charge-backs, and demo vehicle tax implications -- all on the same bi-weekly payroll. We manage all of it at $25–$45 per employee per month."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25–$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered, including multi-rooftop operations' },
        { value: 'No migration', label: 'Works alongside your DMS' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Dealership Payroll Problem</p>
            <h2>Five compensation structures. One payroll run. Any one of them can trigger a wage claim.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Draw clawbacks</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Commission draw advances and deal fallthrough clawbacks must hit the right pay period</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Sales staff receive draw advances against future commissions. When a vehicle is returned or a deal falls through, the clawback must be applied to the correct pay period and documented properly. Errors create wage claim exposure under state labor laws that prohibit unauthorized deductions.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Flat-rate FLSA</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Service technician flat-rate pay creates complex overtime calculations under FLSA</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Flat-rate (flag hour) pay for service technicians is not the same as hourly pay. Overtime must be calculated on actual hours worked -- not flat hours billed -- using the regular rate of pay calculation. Getting this wrong means FLSA back wage exposure for every tech on your floor.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Demo taxes</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Demo vehicles, loaner programs, and comp services must be taxed as fringe benefits</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Demo vehicles provided to salespeople and managers have taxable value under IRS fringe benefit rules. Failure to include annual lease value or actual mileage in W-2 income is a common dealership audit finding -- and a personal tax liability for employees who did not know the benefit was taxable.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* WHAT WE MANAGE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What We Manage</p>
            <h2>Every compensation structure on your lot, handled correctly</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Sales commission + draw', body: 'Commission calculations, draw advance tracking, clawback processing, monthly or bi-monthly pack structures, and documentation required to prevent unauthorized deduction claims.' },
              { title: 'F&I manager compensation', body: 'Finance manager compensation often includes base plus per-deal bonuses, back-end product commissions, and charge-backs on unwound deals. We reconcile the full structure each pay period.' },
              { title: 'Flat-rate service technicians', body: 'Flat-rate pay with FLSA-compliant overtime calculations. We pull flagged hours from your DMS, apply the regular rate of pay formula, and calculate overtime correctly under the fluctuating workweek rules that apply to flag-hour employees.' },
              { title: 'Demo vehicle tax reporting', body: 'Annual lease value or cents-per-mile tracking for demo vehicles, added to W-2 Box 1 at year-end. We maintain the records throughout the year so nothing gets missed at W-2 time.' },
            ].map(({ title, body }) => (
              <div key={title} style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.97rem', marginBottom: '0.5rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">How It Works</p>
            <h2>Three steps to fully managed dealership payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your commission structure, flat-rate rules, F&I compensation plan, demo vehicle program, and full employee roster. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure commission draw tracking, flat-rate FLSA calculations, clawback procedures, and fringe benefit reporting. No DMS migration required -- we integrate with your existing process.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every commission calculation, every clawback, every state filing, every year-end W-2 with demo vehicle income -- fully managed by BEG.' },
            ].map(({ num, title, body }) => (
              <div key={num} style={{ position: 'relative', padding: '1.5rem', background: '#ffffff', borderRadius: '8px' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '900', color: '#ECAC60', lineHeight: 1, marginBottom: '0.75rem', opacity: 0.8 }}>{num}</div>
                <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.6' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE BONUSES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What You Get</p>
            <h2>Three things most payroll vendors do not offer dealerships</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work alongside your DMS.',
                objection: 'Common objection: "We cannot disrupt our CDK or Reynolds and Reynolds integration."',
                body: 'We do not require you to change your DMS or payroll platform. BEG operates as your managed payroll team, pulling the data we need from your existing systems. If you want to move to iSolved for a cleaner payroll and HR platform, we can manage that transition -- but it is never a requirement to get started.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. No surprise fees.',
                objection: 'Common objection: "Payroll companies charge extra for commission processing, clawbacks, and year-end fringe benefit reporting."',
                body: 'The $25–$45 PEPM rate covers it all: commission processing, clawback handling, flat-rate FLSA calculations, demo vehicle fringe benefit reporting, multi-state filings, year-end W-2s, and BEG support. One number. Everything included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands dealership compensation.',
                objection: 'Common objection: "Generic payroll support does not understand flat-rate pay or commission draw structures."',
                body: 'Your BEG payroll specialist is your ongoing point of contact -- not a call center. When your commission plan changes, when you add a rooftop, or when you need to handle a deal unwind mid-cycle -- one message to your BEG contact gets it resolved before the next pay run.',
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

      {/* IMPLEMENTATION TIMELINE */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Getting Started</p>
            <h2>From scope review to live dealership payroll in 3–5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your commission structure, flat-rate tech pay, F&I compensation plan, and demo vehicle program -- and give you a fixed monthly price.' },
              { day: 'Days 1–2', title: 'Onboarding', body: 'Agreement signed, DMS access granted, commission structures and employee roster reviewed.' },
              { day: 'Days 2–4', title: 'Configuration', body: 'Commission draw tracking, flat-rate FLSA calculations, and demo vehicle fringe benefit reporting configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed dealership pay run -- BEG executes, your team approves. No migration required.' },
            ].map(({ day, title, body }) => (
              <div key={day} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#ECAC60', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>{day}</div>
                <strong style={{ display: 'block', fontSize: '0.97rem', marginBottom: '0.4rem' }}>{title}</strong>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#666666', lineHeight: '1.5' }}>{body}</p>
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>One FLSA back wage claim costs more than a year of managed payroll.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>DOL investigations into flat-rate technician overtime are one of the most common enforcement actions in auto retail. A single investigation covering three years of service tech payroll, on a shop floor of 12 technicians, routinely results in six-figure back wage assessments plus liquidated damages. Fully managed payroll at $25–$45 PEPM on a 60-person dealership costs under $25,000 per year -- less than the legal fees on one DOL investigation.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix flat-rate calculations is before the next DOL audit.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30–60 days. Quarter-start cutovers require starting the scope review now. Every month your shop floor runs on incorrect flat-rate overtime calculations is a month of liability that compounds if a complaint or audit surfaces.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your commission structure, flat-rate pay, and demo vehicle program -- and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from auto dealerships</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Can you handle commission draws, advances, and clawbacks on the same payroll?</h3>
              <p>Yes. We track draw balances, process commission payouts, apply clawbacks to the correct pay period, and maintain the documentation required to defend deductions under state labor law. If your current process relies on manual spreadsheets for commission tracking, we replace that with a managed system.</p>
            </div>
            <div className="faq-item">
              <h3>How do you calculate flat-rate pay for service technicians?</h3>
              <p>We apply the FLSA regular rate of pay calculation to flat-rate technicians, using actual hours worked (not flagged hours) to determine overtime eligibility. We pull flagged time from your DMS, calculate straight-time and overtime pay correctly, and document the methodology so you can show compliance if the DOL asks.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle demo vehicles and other taxable perks?</h3>
              <p>We track demo vehicle use throughout the year using either the annual lease value or cents-per-mile method, and include the taxable amount in employee W-2 Box 1 at year-end. We also handle other fringe benefits like vehicle allowances, gas cards, and manufacturer incentive trips if applicable.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change our DMS or payroll platform?</h3>
              <p>No. BEG integrates with your existing dealer management system and payroll platform. Migration is an option if you want a better platform -- never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>What if we add a second or third rooftop?</h3>
              <p>Multi-rooftop payroll is managed as a single engagement. We handle separate state registrations for each location, consolidate reporting, and scale the PEPM rate with total headcount across all locations.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle F&I manager compensation -- base salary, per-deal bonuses, and charge-backs?</h3>
              <p>F&I manager pay is one of the most complex compensation structures in auto retail. We reconcile base salary, per-deal product bonuses, back-end commissions, and charge-backs on unwound deals each pay period. Each component is applied to the correct period with documentation that prevents unauthorized deduction claims under state wage laws -- a common source of F&I wage disputes.</p>
            </div>
            <div className="faq-item">
              <h3>What does managed payroll cost for a dealership with 80 employees?</h3>
              <p>At $25 PEPM in your existing system, an 80-person dealership pays $2,000 per month all-inclusive. At $45 PEPM on BEG's iSolved platform, that's $3,600 per month -- still less than the fully-loaded cost of one payroll administrator and a fraction of the legal fees on a single DOL flat-rate overtime investigation targeting your service department.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to set up managed payroll for a dealership?</h3>
              <p>From signed agreement to live payroll: 3–5 business days. We map your commission structures, flat-rate pay rules, F&I compensation plan, and DMS integration during onboarding, then configure everything in your existing system. Most dealerships complete their first fully managed pay cycle within a week of the scope review call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LINK BACK TO HUB */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related articles</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li><Link href="/blog/payroll/auto-dealership/dealer-commission-payroll" style={{ color: '#ECAC60' }}>Auto Dealer Commission Payroll: Draw-Against, Chargebacks, and Flat-Rate</Link></li>
            <li><Link href="/blog/payroll/auto-dealership/dealership-overtime-minimum-wage" style={{ color: '#ECAC60' }}>Dealership Overtime and Minimum Wage: FLSA Rules for F&I, Service Advisors, and Technicians</Link></li>
            <li><Link href="/blog/payroll/auto-dealership/managed-payroll-vs-in-house" style={{ color: '#ECAC60' }}>Managed Payroll vs. Hiring In-House for Auto Dealerships</Link></li>
          </ul>
          <p style={{ color: '#666666', fontSize: '0.95rem', textAlign: 'center' }}>
            Looking for managed payroll for a different industry?{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>
              See all managed payroll services
            </Link>
            .
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Can you handle commission draws, advances, and clawbacks on the same payroll?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We track draw balances, process commissions, apply clawbacks to the correct pay period, and maintain documentation required under state labor law.' } },
              { '@type': 'Question', name: 'How do you calculate flat-rate pay for service technicians?', acceptedAnswer: { '@type': 'Answer', text: 'We apply the FLSA regular rate of pay calculation using actual hours worked, not flagged hours, and document the methodology for DOL compliance.' } },
              { '@type': 'Question', name: 'How do you handle demo vehicles and taxable perks?', acceptedAnswer: { '@type': 'Answer', text: 'We track demo vehicle use using annual lease value or cents-per-mile and include taxable amounts in W-2 Box 1 at year-end.' } },
              { '@type': 'Question', name: 'Do we have to change our DMS or payroll platform?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG integrates with your existing systems. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What if we add a second or third rooftop?', acceptedAnswer: { '@type': 'Answer', text: 'Multi-rooftop payroll is managed as a single engagement with separate state registrations and consolidated reporting.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Auto Dealerships', item: 'https://beghr.com/services/managed-payroll/auto-dealership' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Auto Dealership Commission and Draw Payroll: How to Process It Correctly',
            excerpt: 'Variable pay, dealer draws, and spiff bonuses each have different withholding rules. Here is how to process them without errors.',
            href: '/blog/payroll/auto-dealership/dealer-commission-payroll',
          },
          {
            category: 'Payroll compliance',
            title: 'Dealership Overtime and Minimum Wage: FLSA Rules for F&I, Service Advisors, and Technicians',
            excerpt: 'Which dealership roles qualify for the 7(i) exemption and which do not. What misclassification costs in back pay and penalties.',
            href: '/blog/payroll/auto-dealership/dealership-overtime-minimum-wage',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. Hiring In-House for Auto Dealerships',
            excerpt: 'The real cost of a payroll coordinator vs. outsourcing. What dealership groups are switching to and why.',
            href: '/blog/payroll/auto-dealership/managed-payroll-vs-in-house',
          },
        ]}
      />
    </ServicePage>
  );
}
