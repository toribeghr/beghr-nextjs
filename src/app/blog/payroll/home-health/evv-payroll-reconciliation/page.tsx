import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Electronic Visit Verification and Payroll: How to Reconcile EVV Data | BEG',
  description: 'How to reconcile EVV system data with payroll for home health agencies — the most common discrepancy types, how to resolve them, and how to stay Medicaid-compliant.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/home-health/evv-payroll-reconciliation' },,
  openGraph: {
    title: 'Electronic Visit Verification and Payroll: How to Reconcile EVV Data | BEG',
    description: 'How to reconcile EVV system data with payroll for home health agencies — the most common discrepancy types, how to resolve them, and how to stay Medicai...',
    url: 'https://beghr.com/blog/payroll/home-health/evv-payroll-reconciliation',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Electronic Visit Verification and Payroll: How to Reconcile EVV Data | BEG', description: 'How to reconcile EVV system data with payroll for home health agencies — the most common discrepancy types, how to resolve them, and how to stay Medicai...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'Does EVV data have to match payroll exactly?',
    a: 'EVV data must match claims submitted for Medicaid reimbursement. Payroll does not have to match EVV timestamps exactly, but the payroll hours should not be significantly different from EVV-captured service delivery time without a documented explanation. Auditors look for large, unexplained discrepancies between EVV visit data and payroll records as a potential billing fraud indicator.',
  },
  {
    q: 'What happens when an aide forgets to clock out in EVV?',
    a: 'A missed clock-out creates an open visit that will not export cleanly to the billing system. Most agencies have a policy requiring the supervisor to close the visit manually with a note explaining the override. That manual correction should also be documented in the aide\'s payroll record so the actual hours worked are captured correctly.',
  },
  {
    q: 'Can we use EVV timestamps directly as payroll hours?',
    a: 'EVV timestamps can be a useful starting point, but they typically need adjustment before payroll entry — rounding to the agency\'s time rounding policy, adding inter-client travel time, and removing device-on/off timestamps that do not reflect actual service delivery time. Treat EVV data as source material that requires review, not a direct feed to payroll.',
  },
  {
    q: 'What is the penalty for EVV non-compliance?',
    a: 'States that fail to implement EVV for Medicaid-funded personal care and home health services face Federal Medical Assistance Percentage reductions. Agencies that submit Medicaid claims without corresponding EVV data risk claim denials, recoupments, and in cases of pattern non-compliance, exclusion from the Medicaid program.',
  },
];

export default function EVVPayrollPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Home Health</p>
              <h1>Electronic Visit Verification and Payroll: How to Reconcile EVV Data</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                EVV captures visit data for Medicaid compliance — but EVV timestamps and payroll hours do not always match. Here is how to reconcile them without creating billing or wage violations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          The 21st Century Cures Act requires states to implement Electronic Visit Verification for Medicaid-funded personal care and home health services. EVV systems capture the date, time, location, and identity of each visit — creating a digital record that must align with claims submitted for reimbursement.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The challenge: EVV data and payroll often diverge. Aides who forget to clock out, visit verification timestamps that do not capture travel time, clients who ask for tasks outside the scheduled window, and system errors all create discrepancies that need to be resolved before both payroll and claims are finalized.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Common EVV-to-Payroll Discrepancy Types</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Missed clock-out', body: 'Aide clocked in but did not clock out. EVV shows an open visit. Payroll cannot pull hours until the visit is closed. Resolution: supervisor closes the visit manually with documented actual end time.' },
            { label: 'Wrong location GPS pin', body: 'EVV captured location flag because the aide\'s phone GPS was off or the device was not in the correct location when clocking in. Resolution: agency overrides with documented explanation. Excessive location exceptions create audit risk.' },
            { label: 'Extended visit beyond scheduled hours', body: 'Client needed additional assistance; aide stayed longer than the authorized visit window. EVV captures actual time; authorized hours are shorter. Resolution: document the reason, submit an authorization update if required, and pay actual hours worked.' },
            { label: 'Inter-client travel not captured', body: 'EVV typically captures only client-site time. Inter-client travel is compensable (see travel time guide) but is not in the EVV record. Payroll must add travel time separately based on travel logs or scheduling system data.' },
            { label: 'Substitute aide used instead of scheduled aide', body: 'EVV captures identity data. If a different aide performed the visit than the one authorized, the EVV record flags the discrepancy. Both billing compliance and payroll must reflect the actual aide who worked.' },
          ].map(({ label, body }) => (
            <div key={label} style={{ border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{label}</strong>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.6', fontSize: '0.9rem' }}>{body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>A Practical EVV-to-Payroll Workflow</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.5rem' }}>
          {[
            'Export EVV visit data at the end of each pay period.',
            'Run an exception report: identify all open visits, location exceptions, and visits that exceed or fall short of scheduled hours by more than a defined threshold.',
            'Resolve exceptions before payroll processing: supervisors close open visits, document location overrides, confirm substitute aide assignments.',
            'Add inter-client travel time to total paid hours for each aide based on travel logs or scheduling gap data.',
            'Compare total EVV-reconciled hours to preliminary payroll hours. Flag and investigate significant differences.',
            'Process payroll from reconciled hours. Archive the EVV export and reconciliation documentation for audit trail.',
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '24px', height: '24px', background: '#000', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ECAC60', fontSize: '0.75rem', fontWeight: 700, marginTop: '1px' }}>{i + 1}</div>
              <p style={{ margin: 0, lineHeight: '1.6', color: '#444', paddingTop: '2px' }}>{step}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{q}</strong>
              <p style={{ margin: 0, lineHeight: '1.65', color: '#444' }}>{a}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>EVV reconciliation adds hours to every payroll cycle — let BEG absorb it</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages home health payroll including EVV data reconciliation, travel time, and year-end W-2s. 15-minute discovery call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/home-health">Managed Payroll for Home Health Agencies</Link> — full service details</li>
            <li><Link href="/blog/payroll/home-health/home-health-travel-time">Inter-Client Travel Time</Link> — FLSA guide</li>
            <li><Link href="/blog/payroll/home-health/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Home Health</Link> — cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'EVV Payroll Reconciliation', item: 'https://beghr.com/blog/payroll/home-health/evv-payroll-reconciliation' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}
