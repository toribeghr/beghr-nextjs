import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Trucking Companies | Driver Pay & DOT Compliance | BEG',
  description: 'Trucking payroll fully managed at $25–$45 PEPM. Per diem rules, W-2 vs. 1099 driver classification, and multi-state DOT compliance included. Request a free scope review.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/trucking' },
};

const CALENDLY = getCalendlyLink('payroll-trucking');

export default function PayrollTruckingPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/trucking.svg"
      imageAlt="Trucking company with fully managed driver payroll"
      eyebrow="Managed Payroll · Trucking & Transportation"
      title="Managed Payroll for Trucking Companies"
      description="Trucking payroll is not like other payroll. Per diem rules, W-2 versus owner-operator classification, DOT compliance, and routes crossing a dozen state lines create a payroll environment no generic provider is built to handle. We manage all of it at $25–$45 per employee per month — so you focus on moving freight, not managing payroll."
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
            <h2>Where trucking payroll goes wrong — and how much it costs when it does.</h2>
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
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>The IRS allows a per diem rate for long-haul drivers away from home. When it is structured incorrectly — wrong documentation, wrong amounts, or wrong pay code — the entire per diem gets reclassified as ordinary wages, triggering back payroll taxes plus interest.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Multi-state</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Routes crossing state lines create tax nexus in every state where drivers stop and work</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>A driver running from Texas to Ohio and back creates payroll tax obligations in every state along the route. Most carriers handle this incorrectly or not at all — until a state audit surfaces the exposure.</div>
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
              { num: '02', title: 'Payroll configuration', body: 'We configure your W-2 driver pay, per diem pay codes, owner-operator 1099 processing, and state registrations. No migration required — we work in your existing system.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every state filing, every per diem calculation, every year-end 1099 and W-2 — fully managed by BEG. Your team approves, we execute.' },
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
                body: 'We do not require you to change TMS or payroll platforms. BEG operates as your managed payroll team inside your current system. If you want to upgrade to iSolved or a better platform, we can handle that transition — but it is never a prerequisite to getting started.',
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
                body: 'Your BEG payroll specialist is your ongoing contact — not a call center that routes you to whoever is available. When you add a driver, change a per diem structure, or register in a new state, one message to your BEG contact gets it handled.',
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>One IRS audit costs more than years of managed payroll.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Driver misclassification audits routinely result in back employment taxes, penalties, and interest covering three to five years. A single reclassification assessment on 20 misclassified drivers can exceed $200,000. Fully managed payroll at $25–$45 PEPM on a 50-driver operation costs $15,000–$21,000 per year — less than the interest on one audit settlement.</p>
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
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your driver roster, per diem structure, and multi-state exposure — and give you a fixed monthly cost.</p>
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
          </div>
        </div>
      </section>

      {/* LINK BACK TO HUB */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <p style={{ color: '#666666', fontSize: '0.95rem' }}>
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 3, name: 'Trucking & Transportation', item: 'https://beghr.com/services/managed-payroll/trucking' },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
