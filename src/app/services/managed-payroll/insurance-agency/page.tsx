import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import RelatedPosts from '@/components/RelatedPosts';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Insurance Agency Payroll | Instant Quote | BEG',
  description: 'Insurance agency payroll fully managed at $25–$45 PEPM. Producer commissions, draw reconciliation, W-2 and 1099 support, and compliance included.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/insurance-agency' },
  openGraph: {
    title: 'Insurance Agency Payroll | Instant Quote | BEG',
    description: 'Insurance agency payroll fully managed at $25–$45 PEPM. Producer commissions, draw reconciliation, W-2 and 1099 support, and compliance included.',
    url: 'https://www.beghr.com/services/managed-payroll/insurance-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insurance Agency Payroll | Instant Quote | BEG',
    description: 'Insurance agency payroll fully managed at $25–$45 PEPM. Producer commissions, draw reconciliation, W-2 and 1099 support, and compliance included.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = getCalendlyLink('insurance-agency-payroll');

export default function PayrollInsuranceAgencyPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Insurance agency with fully managed payroll"
      eyebrow="Managed Payroll · Insurance Agency"
      title="Insurance agency payroll mixes W-2 salaries, producer commissions, and draws. We manage all three."
      description="Producer commission timing, draw reconciliation, W-2 captive agents alongside 1099 independent producers, E&O deduction tracking, and multi-state licensed producer compliance. BEG manages all of it at $25–$45 per employee per month. Fully managed, no migration required."
      calendlyLink={CALENDLY}
      showHeroImage={false}
      heroStats={[
        { value: 'Commission', label: 'Producer payroll managed' },
        { value: 'Draw recon', label: 'Reconciliation handled' },
        { value: 'W-2 + 1099', label: 'Both structures supported' },
      ]}
    >

      {/* PAIN */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Cost of Running It Yourself</p>
            <h2>What does in-house insurance agency payroll actually cost your business?</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>Draw errors</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Draw vs. commission reconciliation errors create disputes and compliance problems every payroll cycle</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>When commission timing does not align with draw payments, producers receive incorrect net pay and the agency carries an unreconciled draw balance that compounds over time. Most agencies handle this manually each cycle, and manual reconciliation creates errors.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>1099 risk</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Independent producer classification is an active IRS audit area in the insurance industry</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Independent agents who work primarily for one agency, follow agency procedures, and use agency systems are increasingly scrutinized as potential employees under IRS classification rules. A reclassification assessment means back payroll taxes, interest, and penalties on every affected producer.</div>
                </div>
              ))()
            }
            {
              (() => (
                <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>$65K–$90K</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>Annual cost of one administrator who can manage commission payroll correctly for a mid-size insurance agency</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>Fully managed payroll at $25–$45 PEPM replaces that headcount, handles draw reconciliation automatically, and keeps classification compliant without requiring your office manager to become a payroll expert.</div>
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
            <h2>Three steps to fully managed insurance agency payroll</h2>
          </div>
          <div className="beg-grid-3 reveal">
            {[
              { num: '01', title: 'Scope review', body: 'We map your producer roster, commission structures, draw arrangements, W-2 vs. 1099 split, and any multi-state licensed producer obligations. You get a fixed monthly cost before anything changes.' },
              { num: '02', title: 'Configuration and setup', body: 'We configure commission payroll with draw reconciliation logic, W-2 and 1099 processing for the correct producer types, E&O deduction tracking, and multi-state registrations. No migration required.' },
              { num: '03', title: 'Ongoing managed service', body: 'Every commission cycle, every draw reconciliation, every 1099-NEC filing, and every year-end W-2. Fully managed by BEG. Your office manager touches nothing.' },
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

      {/* WHAT BEG HANDLES */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">What BEG Handles</p>
            <h2>Everything insurance agency payroll requires</h2>
          </div>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Producer commission payroll with variable timing</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Insurance producer commissions are often received from carriers at irregular intervals that do not align with payroll cycles. Agencies that pass commissions through to producers must reconcile carrier payment timing with payroll run dates, calculate the correct commission amount per producer per cycle, and apply any split arrangements with sub-producers or referring agents. BEG manages commission payroll by reconciling carrier payments to producer entitlements each cycle and processing producer commission pay accurately regardless of how commission timing from carriers varies month to month.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Draw vs. commission reconciliation</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Many insurance agencies pay new or growing producers a draw (a guaranteed minimum payment) that is later reconciled against earned commissions. The draw creates a running balance between what the agency has advanced and what the producer has earned. When commission earnings exceed the draw, producers may receive a true-up payment. When commissions fall short, the unreconciled draw balance must be tracked and either carried forward or collected. BEG manages draw tracking and reconciliation against commission earnings each cycle, eliminating the spreadsheet-based manual process that most agencies use and that produces reconciliation errors when commission timing is irregular.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>W-2 captive agents and 1099 independent producers</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Insurance agencies often employ a mix of W-2 captive agents who are full employees and independent producers who operate under 1099 contractor arrangements. Each group requires different payroll or payments processing, different tax treatment, and different year-end reporting: W-2s for employees and 1099-NEC forms for independent contractors. BEG manages W-2 payroll for your employed agents and 1099-NEC reporting for your independent producers, and can review the classification of producers whose arrangement falls in a gray area to reduce your risk of an IRS reclassification assessment.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>E&O deduction and benefit tracking</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Some insurance agencies require producers to contribute to Errors and Omissions insurance premiums through payroll deductions. Managing E&O deductions requires tracking each producer's deduction amount, ensuring deductions are taken correctly each cycle, and reconciling the total E&O deduction pool against the agency's E&O premium obligation. BEG configures E&O deductions in payroll for all applicable producers and manages the deduction and reconciliation process as part of the standard payroll cycle.</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Multi-state licensed producer compliance</h3>
              <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Insurance producers licensed in multiple states may create payroll tax nexus in states where they are actively writing business, even if the agency's office is not located there. State payroll tax obligations depend on where the work is performed, not just where the employer's office is located. BEG monitors the states where your producers are actively working and writing policies, determines when payroll tax registration and withholding obligations arise in each state, and manages registration and remittance to keep you in compliance with every state where your producers create payroll nexus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Comparison</p>
            <h2>BEG vs. in-house vs. software</h2>
          </div>
          <div className="reveal" style={{ overflowX: 'auto', marginTop: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', fontWeight: '700' }}>Capability</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700' }}>BEG Managed</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700' }}>In-House</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', fontWeight: '700' }}>Software Only</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Commission payroll with variable carrier timing', '✓', 'Manual reconciliation', '✗'],
                  ['Draw vs. commission reconciliation', '✓', 'Spreadsheet-based', '✗'],
                  ['W-2 + 1099 producer management', '✓', 'Expertise required', 'Self-service'],
                  ['E&O deduction tracking', '✓', 'Manual tracking', 'Partial'],
                  ['Multi-state licensed producer nexus', '✓', 'Compliance risk', 'Self-service'],
                  ['Year-end W-2 + 1099-NEC production', '✓', 'Admin-heavy', 'Self-service'],
                  ['No migration required', '✓', 'N/A', 'Migration often required'],
                  ['Fixed all-inclusive monthly cost', '✓', '✗', '✗'],
                ].map(([feature, beg, inhouse, software], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9f9f9', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '500' }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#2a7a2a', fontWeight: '700' }}>{beg}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#666666' }}>{inhouse}</td>
                    <td style={{ padding: '0.75rem 1rem', textAlign: 'center', color: '#666666' }}>{software}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every cycle of manual draw reconciliation is a cycle where errors compound.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>Insurance agencies that reconcile draw balances manually in spreadsheets accumulate small errors that become large disputes when a producer leaves or challenges their commission statement. Clean draw tracking from day one avoids those disputes entirely. The cost of a managed payroll service that handles it automatically is less than the time your office manager spends on one quarterly reconciliation.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>Your Next Transition Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best time to fix your commission payroll structure is before adding the next producer.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>BEG transitions take 30–60 days. Agencies that get commission payroll right before growing their producer roster avoid carrying bad reconciliation practices into a larger workforce. Schedule a scope review and we will map exactly what your current setup is getting right and what needs to change.</p>
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
            <h2>Common questions about insurance agency payroll</h2>
          </div>
          <div className="faq reveal">
            <div className="faq-item">
              <h3>How does BEG handle commission payroll when carrier payments arrive on irregular schedules?</h3>
              <p>BEG reconciles carrier commission payments to producer entitlements each payroll cycle regardless of when carriers remit. We track what each producer has earned, apply draw arrangements where they exist, and process the correct commission payment each cycle based on what has been received and reconciled from carriers.</p>
            </div>
            <div className="faq-item">
              <h3>How does draw reconciliation work when a producer leaves the agency?</h3>
              <p>When a producer exits with an unreconciled draw balance, BEG provides a final draw reconciliation statement showing the outstanding balance, the commissions earned against it, and the net amount. We coordinate with your management team on how to handle any remaining balance under the terms of the producer agreement. A clean reconciliation process from day one makes this calculation straightforward instead of a research project.</p>
            </div>
            <div className="faq-item">
              <h3>Do we have to change our payroll system to work with BEG?</h3>
              <p>No. BEG operates as your managed payroll team inside your existing system. Migration is an option, never a requirement.</p>
            </div>
            <div className="faq-item">
              <h3>What does $25–$45 PEPM include for insurance agencies?</h3>
              <p>Everything: commission payroll, draw reconciliation, W-2 and 1099-NEC processing, E&O deduction tracking, multi-state compliance, year-end filing, and dedicated BEG support. No per-run fees, no year-end surcharges.</p>
            </div>
            <div className="faq-item">
              <h3>Can BEG help us determine whether our independent producers are correctly classified?</h3>
              <p>Yes. BEG reviews the working arrangement of producers in gray-area classification situations against the IRS common-law test and applicable state tests. We identify producers who may be misclassified as 1099 contractors when they should be W-2 employees, so you can correct those arrangements before an IRS audit or state labor agency inquiry does it for you at a much higher cost.</p>
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
              { '@type': 'Question', name: 'How does BEG handle commission payroll when carrier payments arrive irregularly?', acceptedAnswer: { '@type': 'Answer', text: 'BEG reconciles carrier commission payments to producer entitlements each cycle, tracking what each producer earned, applying draw arrangements, and processing correct payment based on what has been received and reconciled.' } },
              { '@type': 'Question', name: 'How does draw reconciliation work when a producer leaves?', acceptedAnswer: { '@type': 'Answer', text: 'BEG provides a final reconciliation statement showing the outstanding draw balance, commissions earned against it, and the net amount, coordinating with management on handling any remaining balance.' } },
              { '@type': 'Question', name: 'Do we have to change our payroll system?', acceptedAnswer: { '@type': 'Answer', text: 'No. BEG operates inside your existing system. Migration is an option, never a requirement.' } },
              { '@type': 'Question', name: 'What does $25-$45 PEPM include?', acceptedAnswer: { '@type': 'Answer', text: 'Commission payroll, draw reconciliation, W-2 and 1099-NEC processing, E&O deductions, multi-state compliance, year-end filing, and dedicated support. No per-run or year-end fees.' } },
              { '@type': 'Question', name: 'Can BEG help determine if independent producers are correctly classified?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. BEG reviews working arrangements against the IRS common-law test and applicable state tests, identifying misclassified producers before an audit forces correction at a much higher cost.' } },
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
              { '@type': 'ListItem', position: 3, name: 'Insurance Agency', item: 'https://www.beghr.com/services/managed-payroll/insurance-agency' },
            ],
          }),
        }}
      />

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'Managed Payroll',
            title: 'Producer Commission Payroll for Insurance Agencies: Draw Reconciliation Guide',
            excerpt: 'How commission timing, draw advances, and carrier payment schedules interact in insurance agency payroll, and what managed payroll handles automatically.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'W-2 vs. 1099 for Insurance Producers: Classification Risk Guide (2026)',
            excerpt: 'IRS worker classification rules for insurance producers, which arrangements trigger employee reclassification, and what agencies need to review.',
            href: '/blog/payroll',
          },
          {
            category: 'Managed Payroll',
            title: 'Managed Payroll vs. In-House for Insurance Agencies (2026)',
            excerpt: 'What insurance agency owners spend managing commission payroll in-house versus a fully managed service that handles draw reconciliation and 1099 compliance.',
            href: '/services/managed-payroll',
          },
        ]}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Running Insurance Agency payroll? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Insurance Agency employers get nickel-and-dimed on per-run, off-cycle, and year-end fees. Enter your numbers to see your real cost per employee, what you may be overpaying, and what to get in writing. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
