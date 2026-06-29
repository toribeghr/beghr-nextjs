import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Trucking Payroll | Driver Pay & DOT Compliance. Handled. | BEG',
  description: 'Trucking payroll fully managed at $25–45 PEPM. Per diem rules, W-2 vs. 1099 driver classification, and multi-state DOT compliance included.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/trucking' },
  openGraph: {
    title: 'Trucking Payroll | Driver Pay & DOT Compliance. Handled. | BEG',
    description: 'Trucking payroll fully managed at $25–45 PEPM. Per diem rules, W-2 vs. 1099 driver classification, and multi-state DOT compliance included.',
    url: 'https://www.beghr.com/services/managed-payroll/trucking',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Trucking Payroll | Driver Pay & DOT Compliance. Handled. | BEG', description: 'Trucking payroll fully managed at $25–45 PEPM. Per diem rules, W-2 vs. 1099 driver classification, and multi-state DOT compliance included.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = getCalendlyLink('payroll-trucking');

export default function PayrollTruckingPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/trucking.svg"
      imageAlt="Trucking company with fully managed driver payroll"
      eyebrow="Managed Payroll · Trucking & Transportation"
      title="Managed Payroll for Trucking Companies"
      description="Trucking payroll is not like other payroll. Per diem rules, W-2 versus owner-operator classification, DOT compliance, and routes crossing a dozen state lines create a payroll environment no generic provider is built to handle. We manage all of it at $25–$45 per employee per month -- so you focus on moving freight, not managing payroll."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25–$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered, including multi-state DOT routes' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>Where trucking payroll goes wrong -- and how much it costs when it does.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>W-2 vs. 1099</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Driver misclassification is one of the most litigated payroll issues in transportation</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Treating an employee driver as an independent contractor exposes your company to back employment taxes, DOL penalties, and IRS reclassification audits stretching years back. One misclassified driver can trigger a fleet-wide review.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Per diem</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>IRS per diem rules for drivers must be applied exactly right or the payments become taxable wages</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>The IRS allows a per diem rate for long-haul drivers away from home. When it is structured incorrectly -- wrong documentation, wrong amounts, or wrong pay code -- the entire per diem gets reclassified as ordinary wages, triggering back payroll taxes plus interest.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Multi-state</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Routes crossing state lines create tax nexus in every state where drivers stop and work</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>A driver running from Texas to Ohio and back creates payroll tax obligations in every state along the route. Most carriers handle this incorrectly or not at all -- until a state audit surfaces the exposure.</div>
                </div>
              ))()
            }
          </div>
        </div>
      </section>

      {/* WHY TRUCKING PAYROLL IS DIFFERENT */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Industry Reality</p>
            <h2>What makes trucking payroll different from every other industry</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Mixed workforce structure', body: 'Company drivers (W-2), leased owner-operators (1099), and lease-purchase drivers may all run in your fleet simultaneously. Each category has different pay structures, tax treatment, and paperwork requirements.' },
              { title: 'Per diem compliance', body: 'Long-haul per diem rates, day-cab exclusions, and the DOT 80/20 rule governing per diem eligibility require precise tracking and documentation every pay cycle.' },
              { title: 'State apportionment', body: 'Interstate carriers are subject to the IFTA for fuel but also face complex state payroll tax apportionment rules when drivers work across multiple jurisdictions.' },
              { title: 'Seasonal headcount swings', body: 'Holiday freight peaks and seasonal contracts mean headcount jumps and contracts with the calendar. Your payroll model needs to scale without re-contracting every 90 days.' },
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
            <h2>Three steps to fully managed trucking payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your driver roster, owner-operator agreements, per diem structure, and multi-state route patterns. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure your W-2 driver pay, per diem pay codes, owner-operator 1099 processing, and state registrations. No migration required -- we work in your existing system.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every state filing, every per diem calculation, every year-end 1099 and W-2 -- fully managed by BEG. Your team approves, we execute.' },
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
            <h2>Three things most payroll vendors do not offer trucking companies</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "Switching payroll systems disrupts dispatch and fleet management integrations."',
                body: 'We do not require you to change TMS or payroll platforms. BEG operates as your managed payroll team inside your current system. If you want to upgrade to iSolved or a better platform, we can handle that transition -- but it is never a prerequisite to getting started.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. No surprise fees.',
                objection: 'Common objection: "Payroll services bill extra for multi-state filings, 1099 processing, and per diem tracking."',
                body: 'The $25–$45 PEPM rate covers it all: W-2 processing, owner-operator 1099s, multi-state tax filings, per diem tracking, year-end W-2s and 1099-NECs, and BEG support. No per-run fees, no state filing surcharges, no year-end invoices.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who knows transportation payroll.',
                objection: 'Common objection: "Generic payroll support does not understand per diem rules or owner-operator agreements."',
                body: 'Your BEG payroll specialist is your ongoing contact -- not a call center that routes you to whoever is available. When you add a driver, change a per diem structure, or register in a new state, one message to your BEG contact gets it handled.',
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
            <h2>From scope review to live trucking payroll in 3–5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your driver roster, per diem structure, multi-state routes, and owner-operator agreements -- and give you a fixed monthly price.' },
              { day: 'Days 1–2', title: 'Onboarding', body: 'Agreement signed, system access granted, driver roster and classification structure reviewed.' },
              { day: 'Days 2–4', title: 'Configuration', body: 'Per diem pay codes, W-2 and 1099 classification, and multi-state tax registrations configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed trucking pay run -- BEG executes, your team approves. No migration required.' },
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>One IRS audit costs more than years of managed payroll.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Driver misclassification audits routinely result in back employment taxes, penalties, and interest covering three to five years. A single reclassification assessment on 20 misclassified drivers can exceed $200,000. Fully managed payroll at $25–$45 PEPM on a 50-driver operation costs $15,000–$21,000 per year -- less than the interest on one audit settlement.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix payroll is before the next audit notice arrives.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Payroll transitions take 30–60 days. Clean cutover at quarter-start or January 1 requires starting the scope review now. Every quarter you defer is a quarter of per diem exposure, misclassification risk, and multi-state filing gaps that compound if the IRS or DOL comes knocking.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your driver roster, per diem structure, and multi-state exposure -- and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from trucking and transportation companies</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Can you handle both W-2 company drivers and 1099 owner-operators on the same payroll?</h3>
              <p>Yes. We manage W-2 payroll processing and 1099-NEC filing for owner-operators in the same pay cycle. We also help you review your classification structure to make sure the line between employee and independent contractor holds up to IRS and DOL scrutiny.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle per diem pay for long-haul drivers?</h3>
              <p>We set up your per diem pay codes correctly under IRS guidelines, track eligible days, apply the current per diem rate, and document everything required to keep the payments non-taxable. If your current per diem structure has gaps, we flag them before they become an audit issue.</p>
            </div>
            <div className="faq-item">
              <h3>What multi-state compliance is included?</h3>
              <p>All of it: state tax registrations, multi-state withholding, quarterly filings, and year-end reconciliation. We cover all 50 states. If your routes create new nexus in a state you have not registered in, we handle the registration as part of the service.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option if you want to upgrade, never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>What if driver headcount changes seasonally?</h3>
              <p>Your monthly rate adjusts with headcount at the same per-employee rate. Seasonal spikes and off-peak reductions update your cost automatically. No renegotiation required.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle payroll for lease-purchase drivers?</h3>
              <p>Lease-purchase drivers occupy a gray zone between employee and independent contractor. The structure of the agreement -- not the label -- determines classification. We review your lease-purchase agreements, determine the correct tax treatment for each driver in the program, and process pay accurately. Misclassification of lease-purchase drivers is a frequent IRS and DOL enforcement target in the trucking industry.</p>
            </div>
            <div className="faq-item">
              <h3>Which states create the most payroll tax complexity for trucking companies?</h3>
              <p>California, New York, Illinois, and Washington have the most aggressive payroll tax enforcement and the most complex apportionment rules for interstate carriers. California in particular has its own driver classification standards under AB5 that are stricter than federal criteria. Multi-state route planning needs to factor in payroll compliance, not just fuel taxes and road fees.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to get started with managed trucking payroll?</h3>
              <p>From signed agreement to live payroll: 3–5 business days. The scope review call is 15 minutes. We review your driver roster, per diem structure, and multi-state routes, then configure everything in your existing system. Most trucking operations are running fully managed payroll within a week of the first call.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LINK BACK TO HUB */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related articles</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li><Link href="/blog/payroll/trucking/truck-driver-payroll-taxes" style={{ color: '#ECAC60' }}>Truck Driver Payroll Taxes: What Carriers Must Withhold and Report</Link></li>
            <li><Link href="/blog/payroll/trucking/per-diem-pay-truck-drivers" style={{ color: '#ECAC60' }}>Per Diem Pay for Truck Drivers: IRS Rules and Payroll Setup</Link></li>
            <li><Link href="/blog/payroll/trucking/managed-payroll-vs-in-house" style={{ color: '#ECAC60' }}>Managed Payroll vs. Hiring In-House for Trucking Companies</Link></li>
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
              { '@type': 'Question', name: 'Can you handle both W-2 company drivers and 1099 owner-operators on the same payroll?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manage W-2 payroll processing and 1099-NEC filing for owner-operators in the same pay cycle.' } },
              { '@type': 'Question', name: 'How do you handle per diem pay for long-haul drivers?', acceptedAnswer: { '@type': 'Answer', text: 'We set up per diem pay codes under IRS guidelines, track eligible days, apply the current per diem rate, and document everything required to keep payments non-taxable.' } },
              { '@type': 'Question', name: 'What multi-state compliance is included?', acceptedAnswer: { '@type': 'Answer', text: 'All of it: state tax registrations, multi-state withholding, quarterly filings, and year-end reconciliation across all 50 states.' } },
              { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What if driver headcount changes seasonally?', acceptedAnswer: { '@type': 'Answer', text: 'Your monthly rate adjusts with headcount at the same per-employee rate. No renegotiation required.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Trucking & Transportation', item: 'https://www.beghr.com/services/managed-payroll/trucking' },
            ],
          }),
        }}
      />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Trucking Company Payroll Taxes: What Every Fleet Owner Needs to Know',
            excerpt: 'FUTA, SUTA, FICA, and state withholding rules for company drivers vs. owner-operators. What fleet operators get wrong and the penalties that follow.',
            href: '/blog/payroll/trucking/truck-driver-payroll-taxes',
          },
          {
            category: 'Payroll compliance',
            title: 'Per Diem Pay for Truck Drivers: IRS Rules and Payroll Setup',
            excerpt: 'Per diem reduces taxable income for drivers but must be set up correctly to avoid IRS scrutiny. How to structure it in payroll and what the 2026 rates are.',
            href: '/blog/payroll/trucking/per-diem-pay-truck-drivers',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. Hiring In-House for Trucking Companies',
            excerpt: 'What fleet operators spend managing payroll in-house -- including HOS compliance, driver classification, and state filings -- vs. what outsourcing costs.',
            href: '/blog/payroll/trucking/managed-payroll-vs-in-house',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Running Trucking payroll? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Trucking employers get nickel-and-dimed on per-run, off-cycle, and year-end fees. Enter your numbers to see your real cost per employee, what you may be overpaying, and what to get in writing. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
