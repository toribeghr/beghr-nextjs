import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Practice Cuts Payroll Processing to Zero | BEG Case Study',
  description: 'A 45-employee multi-specialty medical practice eliminated payroll errors and reclaimed 8 hours/week after BEG took over shift differentials and multi-state compliance.',
  alternates: { canonical: 'https://www.beghr.com/case-studies/healthcare' },
  openGraph: {
    title: 'Healthcare Practice Cuts Payroll Processing to Zero | BEG Case Study',
    description: 'A 45-employee multi-specialty medical practice eliminated payroll errors and reclaimed 8 hours/week after BEG took over shift differentials and multi-state compliance.',
    url: 'https://www.beghr.com/case-studies/healthcare',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Healthcare Practice Cuts Payroll Processing to Zero | BEG Case Study', description: 'A 45-employee multi-specialty medical practice eliminated payroll errors and reclaimed 8 hours/week after BEG took over shift differentials and multi-state compliance.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

export default function HealthcareCaseStudyPage() {
  return (
    <article>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Case Study · Healthcare / Medical Practice</p>
              <h1>How a Healthcare Practice Cut Payroll Processing Time to Zero</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                A multi-specialty practice with 45 employees, shift differentials, and multi-state providers was averaging one payroll error per quarter. Two years after switching to BEG: zero errors, zero admin hours.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap' }}>
                <span><strong>Industry:</strong> Healthcare / Medical Practice</span>
                <span><strong>Employees:</strong> 45</span>
                <span><strong>Roles:</strong> Physicians, NPs, MAs, Admin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', lineHeight: '1.8', fontSize: '1.05rem' }}>

          {/* Result snapshot */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', margin: '0 0 3rem' }}>
            {[
              { stat: '0', label: 'Payroll errors in 24 months' },
              { stat: '8 hrs/wk', label: 'Practice manager time reclaimed' },
              { stat: '3 days', label: 'Time to go live' },
              { stat: '$0', label: 'Error correction costs since transition' },
            ].map(({ stat, label }, i) => (
              <div key={i} style={{ background: '#000', color: '#ECAC60', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, lineHeight: 1, marginBottom: '0.4rem' }}>{stat}</div>
                <div style={{ fontSize: '0.82rem', color: '#ddd', lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Situation
          </h2>
          <p>
            A multi-specialty medical practice employed 45 people across physician, nurse practitioner, medical assistant, and administrative roles. Clinical staff worked varying schedules that included shift differentials for evening and weekend coverage. Several providers held licenses in adjacent states and occasionally saw patients in those jurisdictions, creating multi-state employment compliance considerations.
          </p>
          <p>
            The practice manager was the operational hub of the organization. She handled scheduling, credentialing coordination, billing oversight, and a number of other administrative functions that a practice of this size requires someone to own. Payroll was one more item on that list, and it was not a small one. Shift differential calculations were done in Excel each pay period, cross-referenced against the schedule manually before being entered into the payroll system.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Challenge
          </h2>
          <p>
            The manual shift differential process was the primary source of payroll errors. Calculating differentials from a schedule spreadsheet and entering them into the payroll system by hand introduced multiple points where a transposition, a missed row, or an incorrect rate could produce a wrong paycheck. Over the prior year, the practice had averaged one payroll error per quarter. Each error required investigation, a corrected pay run, and communication with the affected employee.
          </p>
          <p>
            Beyond the errors themselves, the correction process consumed additional practice manager time that was not budgeted. An error that took 20 minutes to make typically took two to three hours to resolve: identifying the discrepancy, pulling the relevant schedule data, calculating the correct amount, processing the correction, and communicating with the provider or staff member involved.
          </p>
          <p>
            The practice also had no clean process for handling multi-state compliance for providers licensed in adjacent states. The regulatory requirements for payroll in those jurisdictions were being tracked manually, and the practice manager acknowledged that this was one area where she was not confident the practice was fully current.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Solution
          </h2>
          <p>
            BEG onboarded the practice in three business days. The first priority was configuring shift differential tiers at the system level so that differentials were applied automatically based on scheduled hours rather than calculated manually each period. Evening, weekend, and holiday differential rates for each clinical role were loaded into the system and tested against a full pay cycle before going live.
          </p>
          <p>
            Overtime tracking for clinical staff was also configured during onboarding, ensuring that providers working extended shifts were correctly identified for overtime calculations under applicable federal and state rules. Multi-state compliance for providers licensed and working in adjacent states was reviewed, and BEG handled the applicable tax registrations and withholding configuration for those jurisdictions.
          </p>
          <p>
            The practice did not need to migrate to a new payroll platform. BEG operates in the client's existing system where feasible, which meant the clinical and administrative team did not need to learn new software or change how they viewed their pay information. The change was that BEG ran the payroll each cycle instead of the practice manager.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Result
          </h2>
          <p>
            In the 24 months following the transition, the practice recorded zero payroll errors. The shift differential configuration that had been the source of quarterly errors was now running automatically, with no manual calculation step and no opportunity for entry errors. Providers and clinical staff received correct pay each cycle from the first BEG-managed payroll onward.
          </p>
          <p>
            The practice manager reclaimed eight hours per week that had been going to payroll-related tasks: running the pay cycle, checking the differential calculations, entering corrections, and responding to employee pay questions. That time was redirected to credentialing, scheduling, and the operational initiatives that had been getting pushed to the following week indefinitely.
          </p>
          <p>
            Total payroll cost including BEG's managed service fee came in lower than the prior all-in cost when internal staff time was factored alongside the previous software expense. Multi-state compliance is now handled entirely by BEG.
          </p>

          <blockquote style={{ borderLeft: '4px solid #ECAC60', paddingLeft: '1.5rem', margin: '2.5rem 0', fontStyle: 'italic', color: '#333', fontSize: '1.1rem', lineHeight: '1.7' }}>
            "The shift differential setup alone was worth switching. BEG got it right the first cycle and has not missed since."
          </blockquote>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            What They Said
          </h2>
          <p>
            The practice manager described the first payroll cycle after transition as the first time in years she had not spent any time thinking about differential calculations. The schedule went to BEG, BEG ran the payroll, and she reviewed the summary before approval. No spreadsheets, no manual cross-reference, no waiting for corrections to process.
          </p>
          <p>
            After two years, the practice team treats payroll as something that simply happens on schedule. For a clinical organization where staff and provider attention belongs on patient care and practice operations, that outcome is exactly what BEG managed payroll is designed to deliver.
          </p>

          <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
            <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Calculating shift differentials manually every pay cycle?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              In 15 minutes we can scope your payroll setup, give you a fixed monthly rate at $25 to $45 per employee, and show you what a clean transition looks like.
            </p>
            <a
              href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}
            >
              Book a Free 15-Minute Call
            </a>
          </div>

          <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0', fontSize: '0.93rem' }}>
            <strong>Related:</strong>{' '}
            <Link href="/services/managed-payroll" style={{ color: '#000', fontWeight: 600 }}>
              BEG Managed Payroll
            </Link>
            {' '}|{' '}
            <Link href="/case-studies" style={{ color: '#000', fontWeight: 600 }}>
              All Case Studies
            </Link>
          </div>

        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How a Healthcare Practice Cut Payroll Processing Time to Zero',
        description: 'A 45-employee multi-specialty medical practice eliminated payroll errors and reclaimed 8 hours/week after BEG configured shift differentials and took over all payroll management.',
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        url: 'https://www.beghr.com/case-studies/healthcare',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.beghr.com/case-studies' },
          { '@type': 'ListItem', position: 3, name: 'Healthcare Case Study', item: 'https://www.beghr.com/case-studies/healthcare' },
        ],
      }) }} />
    </article>
  );
}
