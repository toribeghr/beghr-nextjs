import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Managed Payroll for Home Health Agencies | Caregiver & FLSA Compliance | BEG',
  description: 'Home health agency payroll fully managed at $25–$45 PEPM. Caregiver classification, live-in aide FLSA rules, and Medicaid wage compliance handled. Request a free scope review.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/home-health' },
};

const CALENDLY = getCalendlyLink('payroll-home-health');

export default function PayrollHomeHealthPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/home-health.svg"
      imageAlt="Home health agency with fully managed caregiver payroll"
      eyebrow="Managed Payroll · Home Health Agencies"
      title="Managed Payroll for Home Health Agencies"
      description="Home care payroll has FLSA rules most agencies are still getting wrong. In 2015, the DOL eliminated the companionship exemption for third-party home health employers — meaning most home care agencies can no longer exempt caregivers from minimum wage and overtime. Many agencies have not updated their payroll accordingly. We manage home health payroll correctly at $25–$45 per employee per month, including FLSA compliance, live-in aide rules, and Medicaid wage requirements."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25–$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered, including Medicaid wage requirements' },
        { value: 'No migration', label: 'Works in your existing system' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Home Health Payroll Problem</p>
            <h2>Three FLSA and compliance issues home health agencies commonly get wrong.</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>2015 DOL rule</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>The companionship exemption no longer applies to third-party home health employers</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Prior to 2015, home health agencies could exempt direct care workers from FLSA minimum wage and overtime using the companionship services exemption. That changed. Third-party employers — meaning agencies, not individual households — can no longer use this exemption. Caregivers must be paid minimum wage and overtime. Many agencies still have not updated their pay practices.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Live-in rules</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Live-in domestic workers have different overtime calculations under FLSA</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Live-in aides are entitled to FLSA protections but overtime calculations differ: employers may exclude sleep time, meal breaks, and off-duty periods under specific FLSA rules if documented correctly. Applying standard overtime calculations to live-in employees — or ignoring their overtime entirely — both create wage exposure.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Medicaid wages</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>State Medicaid reimbursement rates increasingly include wage requirements for funded caregivers</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Many states with Medicaid-funded home care programs set minimum wage requirements for caregivers serving Medicaid clients. Failure to meet those rates risks recoupment of Medicaid payments and agency contract termination. Your payroll must track Medicaid versus private-pay client hours to maintain compliance.</div>
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
            <h2>Every caregiver category, handled correctly</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { title: 'Home health aides and CNAs', body: 'Hourly W-2 employees with FLSA minimum wage and overtime calculated correctly. Travel time between client visits is compensable work time and must be included in hours for overtime purposes.' },
              { title: 'Live-in domestic workers', body: 'FLSA live-in employee rules applied correctly, including exclusion of documented sleep time, meal periods, and off-duty time from compensable hours. Written agreements and documentation maintained.' },
              { title: 'Private duty nurses', body: 'RN and LPN private duty staff with correct overtime calculations. Private duty nursing overtime is frequently miscalculated by agencies that apply the wrong exemption test.' },
              { title: 'Medicaid vs. private pay tracking', body: 'Client funding source tracked alongside caregiver payroll to ensure Medicaid wage requirements are met and documentation is available for state compliance reviews and contract renewals.' },
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
            <h2>Three steps to fully managed home health payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your caregiver roster, live-in arrangements, travel time policies, Medicaid client ratio, and current overtime practices. You get a fixed monthly cost and a compliance gap report before we start.' },
              { num: '02', title: 'Payroll configuration', body: 'We correct your FLSA overtime calculations, document live-in agreements, set up Medicaid wage tracking, and configure state registrations. No migration required — we work in your existing system.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every pay cycle, every overtime calculation, every state filing, and every Medicaid wage record — fully managed by BEG. Your team approves, we execute.' },
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
            <h2>Three things most payroll vendors do not offer home health agencies</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              {
                badge: 'Bonus 01',
                title: 'No migration. We work in your existing system.',
                objection: 'Common objection: "We cannot disrupt our EVV system and scheduling platform to switch payroll."',
                body: 'We do not require you to change your EVV or scheduling platforms. BEG operates as your managed payroll team, pulling the time and visit data we need from your existing systems to run payroll correctly.',
              },
              {
                badge: 'Bonus 02',
                title: 'All-inclusive flat rate. No surprise fees.',
                objection: 'Common objection: "Payroll services add fees for travel time calculations, live-in documentation, and Medicaid tracking."',
                body: 'The $25–$45 PEPM rate covers it all: FLSA-compliant overtime, live-in employee documentation, Medicaid wage tracking, state filings, year-end W-2s, and BEG support. No per-run fees, no compliance surcharges, no year-end invoices.',
              },
              {
                badge: 'Bonus 03',
                title: 'A dedicated BEG contact who understands home care payroll law.',
                objection: 'Common objection: "Generic payroll support does not understand the 2015 DOL companionship rule change or live-in aide FLSA rules."',
                body: 'Your BEG payroll specialist is your ongoing contact. When your state updates its Medicaid wage requirements, when you add live-in clients, or when a DOL inquiry arrives — one message to your BEG contact handles it.',
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
            <h2>From scope review to FLSA-compliant home health payroll in 3–5 business days</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
            {[
              { day: 'Day 1', title: 'Scope review call', body: '15 minutes. We map your caregiver roster, live-in arrangements, travel time policies, and Medicaid client ratio — and give you a fixed monthly price.' },
              { day: 'Days 1–2', title: 'Onboarding', body: 'Agreement signed, EVV and scheduling access granted, caregiver roster and overtime practices reviewed.' },
              { day: 'Days 2–4', title: 'Configuration', body: 'FLSA overtime corrections, live-in aide documentation, and Medicaid wage tracking configured in your existing system.' },
              { day: 'Day 5', title: 'First live payroll', body: 'Your first fully managed, FLSA-compliant home health pay run — BEG executes, your team approves.' },
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
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>A DOL wage and hour investigation is far more expensive than fixing payroll now.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Home health and home care agencies are a DOL Wage and Hour Division enforcement priority. Back wages, liquidated damages, and civil penalties in a single investigation can exceed the cost of years of managed payroll. Agencies that corrected their FLSA practices proactively are not the ones facing enforcement.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix caregiver payroll is before a state licensing audit.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>State licensing renewals and Medicaid compliance reviews increasingly include payroll documentation. Getting compliant before your next renewal window requires starting now — transitions take 30–60 days and we do a compliance gap review as part of the scope process.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Request a Free Scope Review
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>15 minutes. We scope your caregiver payroll, FLSA practices, and Medicaid compliance — and give you a fixed monthly cost.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions from home health and home care agencies</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>Are our caregivers still exempt from overtime under the companionship exemption?</h3>
              <p>If your agency is a third-party employer — meaning you employ the caregiver and place them with clients — then no. The DOL eliminated the companionship exemption for third-party employers in 2015. Your caregivers are entitled to federal minimum wage and overtime. We review your current practices and correct any gaps as part of onboarding.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle overtime for live-in aides?</h3>
              <p>Live-in domestic workers have specific FLSA rules that allow exclusion of sleep time, meal periods, and off-duty time from compensable hours — if documented correctly with written agreements. We set up the correct documentation and apply the live-in overtime rules specific to your state, which may be more protective than federal law.</p>
            </div>
            <div className="faq-item">
              <h3>Can you track Medicaid versus private-pay clients for wage compliance?</h3>
              <p>Yes. We maintain client funding source records alongside caregiver payroll to ensure Medicaid wage requirements are met and documentation is available for compliance reviews and state contract renewals.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change payroll or EVV systems?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. We work with your EVV and scheduling data as inputs. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include?</h3>
              <p>Everything: payroll processing, FLSA-compliant overtime calculations, live-in aide documentation, Medicaid wage tracking, state filings, year-end W-2s, and BEG support. No per-run fees, no compliance surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>How do you handle travel time pay between client visits?</h3>
              <p>Travel time between client visits is compensable work time under FLSA and must be included in hours for overtime purposes. Many home health agencies exclude travel time from hourly calculations — that is an FLSA violation. We include travel time in your overtime calculations, set up the tracking process, and make sure every caregiver's total compensable hours are correctly calculated each pay cycle.</p>
            </div>
            <div className="faq-item">
              <h3>What if our agency operates in multiple states?</h3>
              <p>Multi-state home health agencies are managed as a single engagement. We handle state-specific wage requirements, Medicaid wage compliance for each state program, and payroll tax registrations and filings in every state you operate. Some states have home care wage requirements that exceed federal FLSA minimums — we apply whichever standard is higher for each caregiver in each state.</p>
            </div>
            <div className="faq-item">
              <h3>How long does it take to correct FLSA issues and get started with managed home health payroll?</h3>
              <p>From signed agreement to compliant managed payroll: 3–5 business days. The scope call identifies your current compliance gaps. Configuration corrects overtime calculations, sets up live-in aide documentation, and puts Medicaid wage tracking in place. Your first managed pay cycle runs correctly — fixing what was wrong without disrupting your caregiving operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related articles</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
            <li><Link href="/blog/payroll/home-health/home-health-travel-time" style={{ color: '#ECAC60' }}>Home Health Travel Time: When Must Agencies Pay Between Client Visits?</Link></li>
            <li><Link href="/blog/payroll/home-health/evv-payroll-reconciliation" style={{ color: '#ECAC60' }}>EVV and Payroll Reconciliation: Resolving the Five Most Common Discrepancy Types</Link></li>
            <li><Link href="/blog/payroll/home-health/managed-payroll-vs-in-house" style={{ color: '#ECAC60' }}>Managed Payroll vs. Hiring In-House for Home Health Agencies</Link></li>
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [{ '@type': 'Question', name: 'Are our caregivers exempt from overtime under the companionship exemption?', acceptedAnswer: { '@type': 'Answer', text: 'No. The DOL eliminated the companionship exemption for third-party employers in 2015. Caregivers are entitled to minimum wage and overtime.' } }, { '@type': 'Question', name: 'How do you handle overtime for live-in aides?', acceptedAnswer: { '@type': 'Answer', text: 'We apply FLSA live-in employee rules, documenting sleep time and off-duty periods correctly, and apply state-specific rules where more protective.' } }, { '@type': 'Question', name: 'Do we have to change payroll or EVV systems?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } }] }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' }, { '@type': 'ListItem', position: 2, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' }, { '@type': 'ListItem', position: 3, name: 'Home Health Agencies', item: 'https://beghr.com/services/managed-payroll/home-health' }] }) }} />
      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Payroll compliance',
            title: 'Electronic Visit Verification and Payroll: How to Reconcile EVV Data',
            excerpt: 'Medicaid EVV mandates require matching visit timestamps to payroll. Most home health agencies do this manually. Here is a better approach.',
            href: '/blog/payroll/home-health/evv-payroll-reconciliation',
          },
          {
            category: 'Payroll compliance',
            title: 'Home Health Agency Payroll: How to Handle Travel Time Between Clients',
            excerpt: 'FLSA requires compensating home health aides for travel time between clients. What counts, what the rate should be, and how to track it in payroll.',
            href: '/blog/payroll/home-health/home-health-travel-time',
          },
          {
            category: 'Payroll outsourcing',
            title: 'Managed Payroll vs. Hiring In-House for Home Health Agencies',
            excerpt: 'What home health operators spend on internal payroll vs. what outsourcing costs — including EVV reconciliation, Medicaid reporting, and compliance coverage.',
            href: '/blog/payroll/home-health/managed-payroll-vs-in-house',
          },
        ]}
      />
    </ServicePage>
  );
}
