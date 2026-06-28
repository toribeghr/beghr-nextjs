import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Restaurant Group Eliminates Payroll Admin | BEG Case Study',
  description: 'A 4-location, 85-employee restaurant group cut payroll admin from 12 hours/week to zero. BEG handled tip compliance, multi-state taxes, and every pay cycle.',
  alternates: { canonical: 'https://beghr.com/case-studies/restaurant' },
  openGraph: {
    title: 'Restaurant Group Eliminates Payroll Admin | BEG Case Study',
    description: 'A 4-location, 85-employee restaurant group cut payroll admin from 12 hours/week to zero. BEG handled tip compliance, multi-state taxes, and every pay cycle.',
    url: 'https://beghr.com/case-studies/restaurant',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Restaurant Group Eliminates Payroll Admin | BEG Case Study', description: 'A 4-location, 85-employee restaurant group cut payroll admin from 12 hours/week to zero. BEG handled tip compliance, multi-state taxes, and every pay cycle.', images: ['https://beghr.com/assets/og-image.png'] },
};

export default function RestaurantCaseStudyPage() {
  return (
    <article>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Case Study · Restaurant / Food Service</p>
              <h1>How a Multi-Location Restaurant Group Eliminated Payroll Admin</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                4 locations, 85 employees, tip-eligible staff, and operations in 2 states. Payroll was consuming 12 hours every week. Then they handed it to BEG.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap' }}>
                <span><strong>Industry:</strong> Restaurant / Food Service</span>
                <span><strong>Employees:</strong> 85</span>
                <span><strong>Locations:</strong> 4</span>
                <span><strong>States:</strong> 2</span>
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
              { stat: '12 hrs/wk', label: 'Payroll admin eliminated' },
              { stat: '$8K', label: 'Tip liability uncovered and resolved' },
              { stat: '$0', label: 'Payroll errors in 18 months' },
              { stat: '4 days', label: 'Time to go live' },
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
            A regional restaurant group operating four locations across two states came to BEG with a straightforward problem: payroll was running their office manager into the ground. The group employed 85 people in a mix of front-of-house, back-of-house, and management roles. A meaningful portion of staff were tip-eligible, and operations crossed state lines, each with its own tax registration and compliance obligations.
          </p>
          <p>
            The business was running well by most measures. Revenue was growing, customer counts were up, and management was adding hours at two of the four locations. But none of that growth was showing up in the operations team's capacity. Payroll alone was consuming 12 or more hours every week, every pay cycle, with no end in sight.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Challenge
          </h2>
          <p>
            Multi-location restaurant payroll carries complexity that most payroll software vendors do not fully account for. Tip credit calculations differ by state, and applying them incorrectly creates direct wage and hour liability. In this case, a routine audit surfaced an $8,000 underpayment liability caused by tip credit miscalculations that had accumulated unnoticed over several pay periods. Nobody had done anything wrong intentionally. The process was just too manual to catch the error before it compounded.
          </p>
          <p>
            Beyond the tip credit issue, multi-state compliance was being managed entirely through spreadsheets. Each state has its own unemployment tax rates, withholding requirements, and registration obligations. As the group expanded its second-state footprint, tracking these differences manually was becoming unsustainable. The office manager who understood the payroll setup was the only person in the organization who could run it, which meant vacations and sick days created operational risk.
          </p>
          <p>
            The previous payroll software handled basic processing well but offered no meaningful support for tip credit compliance, multi-location consolidated reporting, or multi-state tax complexity at the configuration level. The burden of getting it right stayed entirely with the internal team.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Solution
          </h2>
          <p>
            BEG completed onboarding and ran the first managed payroll cycle in four business days. The transition included a full configuration of tip credit calculations for all four locations per the applicable state law in each jurisdiction, consolidated multi-location reporting so the ownership group could see total labor cost and per-location breakdowns in a single view, and multi-state tax registration handled entirely by BEG.
          </p>
          <p>
            The tip liability identified during the audit was documented, corrected, and the pay records were reconciled before BEG ran the first full cycle. Going forward, tip credit was configured at the system level rather than calculated manually each period, eliminating the source of the original error.
          </p>
          <p>
            BEG operates in the client's existing systems where possible, and this transition required no platform migration. The operations team did not need to learn new software. They stopped doing payroll and BEG started doing it instead.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Result
          </h2>
          <p>
            The most immediate result was the 12 hours per week that stopped going to payroll administration. That time was reclaimed immediately. The office manager who had been running payroll shifted focus to hiring, scheduling, and vendor management, areas where the business actually needed attention.
          </p>
          <p>
            Tip compliance was cleaned up from the first BEG-managed cycle. The $8,000 liability discovered on audit was corrected and documented. In the 18 months following the transition, the group recorded zero payroll errors across all four locations and both states.
          </p>
          <p>
            Total payroll cost, including BEG's service fee, came in at roughly 40 percent less than the previous setup when internal staff time was factored in alongside the software costs. Multi-state compliance is now managed entirely by BEG. Adding the second-state footprint further did not add operational complexity for the client's team.
          </p>

          <blockquote style={{ borderLeft: '4px solid #ECAC60', paddingLeft: '1.5rem', margin: '2.5rem 0', fontStyle: 'italic', color: '#333', fontSize: '1.1rem', lineHeight: '1.7' }}>
            "We did not realize how much time we were spending on payroll until we handed it off. The first cycle BEG ran, nothing came back from our managers. It just worked."
          </blockquote>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            What They Said
          </h2>
          <p>
            The ownership group described the transition as smoother than expected. Their previous concern was that handing off payroll would introduce new problems during the cutover period. Instead, the first cycle ran cleanly, managers at all four locations confirmed the accuracy of their team's pay, and the weekly hours that had been going to payroll simply disappeared from the office manager's workload.
          </p>
          <p>
            By month three, the group had stopped thinking about payroll entirely. For a business where the operators are focused on food, service, and guests, that is exactly the outcome BEG is designed to deliver.
          </p>

          <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
            <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Running payroll yourself?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              In 15 minutes we can scope your payroll, give you a fixed monthly rate at $25 to $45 per employee, and walk you through what transition looks like. No commitment required.
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
        headline: 'How a Multi-Location Restaurant Group Eliminated Payroll Admin',
        description: 'A 4-location, 85-employee restaurant group cut payroll admin from 12 hours/week to zero and resolved an $8K tip compliance liability after switching to BEG managed payroll.',
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
        url: 'https://beghr.com/case-studies/restaurant',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://beghr.com/case-studies' },
          { '@type': 'ListItem', position: 3, name: 'Restaurant Case Study', item: 'https://beghr.com/case-studies/restaurant' },
        ],
      }) }} />
    </article>
  );
}
