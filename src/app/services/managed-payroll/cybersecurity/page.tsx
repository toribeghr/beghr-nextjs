import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Cybersecurity Company Payroll | Instant Quote, $25-45 PEPM | BEG',
  description: 'Cybersecurity firm payroll fully managed at $25-$45 PEPM. Contractor classification, on-call overtime rules, multi-state and government contract recordkeeping handled.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/cybersecurity' },
  openGraph: {
    title: 'Cybersecurity Company Payroll | Instant Quote, $25-45 PEPM | BEG',
    description: 'Cybersecurity firm payroll fully managed at $25-$45 PEPM. Contractor classification, on-call overtime rules, multi-state and government contract recordkeeping handled.',
    url: 'https://www.beghr.com/services/managed-payroll/cybersecurity',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Cybersecurity Company Payroll | Instant Quote, $25-45 PEPM | BEG', description: 'Cybersecurity firm payroll fully managed at $25-$45 PEPM. Contractor classification, on-call overtime rules, multi-state and government contract recordkeeping handled.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('payroll-cybersecurity');

export default function PayrollCybersecurityPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/technology.svg"
      imageAlt="Cybersecurity company with fully managed payroll"
      eyebrow="Managed Payroll · Cybersecurity Companies"
      title="Cybersecurity firms run on 1099 talent, on-call staff, and government contracts. Your payroll should handle all three."
      description="Heavy contractor usage alongside W-2 staff, overtime triggered by after-hours incident response, multi-state and multi-country remote teams, and auditable recordkeeping for cleared staff on government contracts make cybersecurity payroll uniquely demanding. BEG manages all of it at $25-$45 per employee per month, fully managed, no migration required."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" industry="cybersecurity" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered for remote security teams' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <p className="tldr" style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '6px', padding: '1.25rem 1.5rem', fontSize: '0.95rem', lineHeight: '1.6', color: '#333333' }}>
            <strong>Bottom line up front:</strong> Cybersecurity company payroll has four failure points most vendors miss: 1099 contractor and consultant misclassification risk alongside W-2 staff, overtime triggered by after-hours incident response work, multi-state and multi-country remote workforce compliance, and auditable payroll recordkeeping for staff supporting government contracts. BEG manages all of it at $25-$45 PEPM, fully managed, no migration required.
          </p>
        </div>
      </section>

      {/* PAIN */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Cybersecurity Payroll Is Different</p>
            <h2>What makes payroll harder for cybersecurity companies than most tech firms?</h2>
            <p className="lede" style={{ margin: '12px auto 0', maxWidth: '700px', textAlign: 'center' }}>
              Heavy reliance on 1099 contractors, overtime rules triggered by after-hours incident response, a workforce spread across states and countries, and recordkeeping standards tied to government contract compliance.
            </p>
          </div>
          <div className="beg-grid-3 reveal">
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Misclassification risk</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Heavy 1099 contractor and consultant use alongside W-2 staff makes worker classification the top compliance risk</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Cybersecurity firms routinely mix penetration testers, incident-response consultants, and specialized contractors with core W-2 engineering and operations staff. The IRS applies a behavioral, financial, and relationship-based test to determine worker status, and misclassifying a contractor who should be a W-2 employee exposes the company to back payroll taxes, penalties, and potential wage claims. Getting this reviewed correctly at onboarding, not after an audit, is the difference.</div>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Incident-response overtime</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>After-hours incident response can trigger overtime for non-exempt staff that many payroll processes never capture</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Under the Fair Labor Standards Act, non-exempt employees called in for after-hours incident response, on-call monitoring, or breach containment must generally be paid for that time, and hours worked beyond 40 in a workweek trigger overtime. Cybersecurity operations teams work irregular, event-driven hours, and payroll built for a standard 9-to-5 schedule frequently misses this time entirely, creating unpaid-overtime exposure.</div>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Multi-jurisdiction workforce</div>
              <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Security talent works remotely across many states and often outside the U.S. entirely</div>
              <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Cybersecurity firms hire globally for specialized talent, and even the domestic footprint alone often spans dozens of states. Every state where an employee lives generally requires its own withholding registration and unemployment insurance account, and international staff raise entirely separate questions about whether they should be W-2, contractor, or handled through an employer-of-record arrangement.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Government Contract Compliance</p>
            <h2>Why does government contract work raise the bar on payroll recordkeeping?</h2>
            <p className="lede" style={{ margin: '12px auto 0', maxWidth: '700px', textAlign: 'center' }}>
              Cybersecurity firms supporting federal contracts, including staff in clearance-adjacent roles, often need precise, auditable payroll and timekeeping records to satisfy contract compliance and cost-accounting requirements.
            </p>
          </div>
          <div className="reveal" style={{ maxWidth: '760px', margin: '2rem auto 0' }}>
            <p style={{ fontSize: '0.97rem', color: '#444444', lineHeight: '1.7' }}>
              Contractors and subcontractors performing work on many federal contracts must comply with wage and recordkeeping standards enforced by the{' '}
              <a href="https://www.dol.gov/agencies/whd/government-contracts" target="_blank" rel="noopener noreferrer">U.S. Department of Labor's Wage and Hour Division</a>, and cost-reimbursement or time-and-materials contracts often require detailed, auditable time and payroll records tying labor costs to specific contracts or task orders. Staff in security clearance-adjacent roles add another layer: their employment and compensation records may be reviewed as part of routine contract audits or facility clearance processes. Payroll built without this in mind creates gaps that surface at the worst possible time, during a contract audit. BEG structures payroll recordkeeping to hold up under that scrutiny from day one.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE PAY */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Who We Manage Payroll For</p>
            <h2>Every worker category on your team, classified and paid correctly</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'SOC analysts and incident responders', body: 'On-call and after-hours incident response time captured and paid correctly, with overtime triggered accurately for non-exempt staff.' },
              { title: 'Penetration testers and security consultants', body: 'Worker classification reviewed for every engagement, W-2 or 1099, so contractor relationships hold up if questioned.' },
              { title: 'Engineering and product staff', body: 'Standard W-2 payroll with equity compensation withholding handled correctly for venture-backed and public security companies alike.' },
              { title: 'Cleared and government-contract staff', body: 'Auditable timekeeping and payroll recordkeeping structured to satisfy federal contract compliance and cost-accounting review.' },
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
            <h2>Three steps to fully managed cybersecurity company payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your W-2 and 1099 worker mix, on-call and incident-response pay structures, state and country footprint, and any government contract recordkeeping requirements. You get a fixed monthly cost before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We configure overtime capture for after-hours incident response, review contractor classifications, and complete multi-state registrations. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every state filing, every contractor review, and audit-ready timekeeping records for your government-contract staff -- fully managed by BEG.' },
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
            <h2>Three things most payroll vendors do not offer cybersecurity companies</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "We integrated our payroll with our timekeeping and contract-cost tools. We cannot rip that out."',
                body: 'BEG operates as your managed payroll team inside your current system. No platform switch required. If you eventually want isolved for deeper HCM functionality, we can manage that transition, but it is never a requirement.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate.',
                objection: 'Common objection: "Our current vendor charges extra for multi-state filings and contractor payments."',
                body: 'The $25-$45 PEPM rate covers everything: W-2 and 1099 processing, overtime capture for incident response, multi-state filings, year-end forms, and BEG support. One number, everything included.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands security-firm payroll.',
                objection: 'Common objection: "Every payroll rep we talk to has never heard of an incident-response call-out or a cleared employee."',
                body: 'Your BEG payroll specialist is your ongoing contact, not a call center. When a contractor engagement needs classification review, an analyst gets called in overnight, or your auditors want your government-contract recordkeeping, one message to your BEG contact gets it handled.',
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
            <h2>From scope review to compliant cybersecurity company payroll in 3-5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your W-2 and 1099 mix, on-call pay structures, and government-contract recordkeeping needs, and give you a fixed monthly price.' },
              { day: 'Days 1-2', title: 'Onboarding', body: 'Agreement signed, system access granted, contractor classifications and timekeeping documentation reviewed.' },
              { day: 'Days 2-4', title: 'Configuration', body: 'Overtime capture for after-hours response, multi-state registrations, and audit-ready recordkeeping configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed cybersecurity company pay run, with clean classification and recordkeeping from cycle one.' },
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Worker misclassification is one of the most expensive audit findings a cybersecurity firm can get.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>The IRS can reclassify a misclassified 1099 worker as a W-2 employee and assess back payroll taxes, penalties, and interest, and state agencies frequently follow with their own unemployment insurance assessments, per guidance from{' '}
                <a href="https://www.irs.gov/businesses/small-businesses-self-employed/independent-contractor-self-employed-or-employee" target="_blank" rel="noopener noreferrer sponsored" style={{ color: '#ECAC60' }}>the IRS</a>. Managed payroll reviews classification at onboarding, before it becomes an audit finding.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix recordkeeping gaps is before your next government contract audit.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Transitions take 30-60 days. Starting the scope review now means audit-ready payroll recordkeeping in place well before your next contract compliance review.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="managed-payroll" industry="cybersecurity" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your contractor mix, on-call pay structures, and recordkeeping needs, and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Explore More</p>
            <h2>More managed payroll resources</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { title: 'Managed Payroll Overview', href: '/services/managed-payroll', desc: 'How BEG fully managed payroll works for any industry.' },
              { title: 'Technology & SaaS Payroll', href: '/services/managed-payroll/technology', desc: 'Equity, remote-first compliance, and contractor payroll for tech companies.' },
              { title: 'Engineering Payroll', href: '/services/managed-payroll/engineering', desc: 'Certified payroll, prevailing wage, and project workforce handled without the headache.' },
            ].map((link, i) => (
              <Link key={i} href={link.href} style={{ display: 'block', padding: '1.25rem', background: '#ffffff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', textDecoration: 'none' }}>
                <strong style={{ display: 'block', fontSize: '0.95rem', color: '#000000', marginBottom: '0.3rem' }}>{link.title}</strong>
                <span style={{ fontSize: '0.85rem', color: '#666666', lineHeight: '1.5' }}>{link.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from cybersecurity companies</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How do you handle worker classification for our contractors and consultants?</h3>
              <p>We review each engagement against IRS and Department of Labor worker classification standards before onboarding and on an ongoing basis. Heavy 1099 usage alongside W-2 staff is one of the most common audit triggers in this industry, and BEG manages classification from day one so you are not exposed.</p>
            </div>
            <div className="faq-item">
              <h3>Do you capture overtime for after-hours incident response?</h3>
              <p>Yes. Non-exempt employees called in for overnight or after-hours incident response, breach containment, or on-call monitoring must generally be paid for that time under the FLSA, and hours beyond 40 in a workweek trigger overtime. We build capture of this time into your payroll process so it is never missed.</p>
            </div>
            <div className="faq-item">
              <h3>We have staff in multiple states and countries. Can you handle that?</h3>
              <p>Yes, for U.S. multi-state compliance: BEG manages state withholding registration and unemployment insurance accounts as your team grows across state lines. For staff outside the U.S., we can discuss whether a W-2, contractor, or employer-of-record structure fits your situation on your scope review call.</p>
            </div>
            <div className="faq-item">
              <h3>Can you support payroll recordkeeping for our government contract work?</h3>
              <p>Yes. We structure timekeeping and payroll recordkeeping to be auditable and tied to your contract and task order structure, which supports the review standards that apply to many federal contracts and to staff in clearance-adjacent roles.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll systems?</h3>
              <p>No. BEG operates inside your existing system. Migration to isolved is available if you want a more capable platform, but it is never a requirement to get started.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25-$45 PEPM include?</h3>
              <p>Everything: W-2 and 1099 processing, overtime capture for incident response, multi-state filings, year-end forms, and BEG support.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to set up managed cybersecurity company payroll?</h3>
              <p>From signed agreement to live payroll: 3-5 business days. We configure worker classification, overtime capture, and multi-state registrations in your existing system.</p>
            </div>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do you handle worker classification for our contractors and consultants?', acceptedAnswer: { '@type': 'Answer', text: 'We review each engagement against IRS and DOL classification standards before onboarding and on an ongoing basis to prevent misclassification exposure.' } },
          { '@type': 'Question', name: 'Do you capture overtime for after-hours incident response?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, non-exempt employees called in after hours must generally be paid for that time, and BEG builds capture of it into payroll so it is never missed.' } },
          { '@type': 'Question', name: 'Can you support payroll recordkeeping for our government contract work?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we structure timekeeping and payroll records to be auditable and tied to your contract structure.' } },
          { '@type': 'Question', name: 'Do we have to change payroll systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is optional, never required.' } },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
          { '@type': 'ListItem', position: 3, name: 'Cybersecurity Companies', item: 'https://www.beghr.com/services/managed-payroll/cybersecurity' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
        url: 'https://www.beghr.com/services/managed-payroll/cybersecurity',
      }) }} />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Worker Classification for Cybersecurity Firms: W-2 vs. 1099 Done Right',
            excerpt: 'Why heavy contractor use is the top audit risk for security companies, and how to review classification before it becomes a problem.',
            href: '/blog/payroll/cybersecurity/worker-classification-cybersecurity',
          },
          {
            category: 'Payroll compliance',
            title: 'Incident Response Overtime: When After-Hours Work Triggers FLSA Pay',
            excerpt: 'How on-call and overnight incident response time gets captured correctly for non-exempt security staff.',
            href: '/blog/payroll/cybersecurity/incident-response-overtime',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. In-House for Cybersecurity Companies',
            excerpt: 'What security firms actually spend on in-house payroll administration versus fully managed outsourcing.',
            href: '/blog/payroll/cybersecurity/managed-payroll-vs-in-house',
          },
        ]}
      />
    </ServicePage>
  );
}
