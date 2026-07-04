import { Metadata } from 'next';
import Link from 'next/link';
import PricingCta from '@/components/pricing/PricingCta';

export const metadata: Metadata = {
  title: 'Franchise Scales Payroll Across 6 Units | BEG Case Study',
  description: 'A multi-unit franchise operator with 6 locations and 110 employees across 3 states dropped payroll time from 20+ hours/month to zero.',
  alternates: { canonical: 'https://www.beghr.com/case-studies/franchise' },
  openGraph: {
    title: 'Franchise Scales Payroll Across 6 Units | BEG Case Study',
    description: 'A multi-unit franchise operator with 6 locations and 110 employees across 3 states dropped payroll time from 20+ hours/month to zero.',
    url: 'https://www.beghr.com/case-studies/franchise',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Franchise Scales Payroll Across 6 Units | BEG Case Study', description: 'A multi-unit franchise operator with 6 locations and 110 employees across 3 states dropped payroll time from 20+ hours/month to zero.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

export default function FranchiseCaseStudyPage() {
  return (
    <article>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Case Study · Franchise / Multi-Unit Operations</p>
              <h1>How a Multi-Location Franchise Owner Scaled Payroll Across 6 Units</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                6 locations, 110 employees, 3 states, franchise-specific reporting requirements. By unit 4, payroll was consuming 20+ hours every month. The fix: hand it to BEG. Scalable to 15+ units with zero additional payroll burden.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap' }}>
                <span><strong>Industry:</strong> Franchise / Multi-Unit</span>
                <span><strong>Employees:</strong> 110</span>
                <span><strong>Units:</strong> 6</span>
                <span><strong>States:</strong> 3</span>
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
              { stat: '20+ hrs', label: 'Monthly payroll time eliminated' },
              { stat: '6 units', label: 'Consolidated into one managed process' },
              { stat: '15+', label: 'Units scalable with zero added burden' },
              { stat: '0 hrs', label: 'Payroll time added per new unit' },
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
            Multi-unit franchise operators face a payroll scaling problem that becomes visible around the third or fourth unit. Each new location adds employees, a new set of schedules, potentially a new state, and additional franchise-required reporting obligations. The operator who started with one location and handled payroll in two hours a week finds themselves, by unit four, spending most of a workday every pay period just keeping payroll current across the portfolio.
          </p>
          <p>
            This franchise operator came to BEG with six active locations, 110 employees distributed across three states, and a payroll process that had become a full-time coordination project. The franchise brand required specific payroll reporting formats for labor cost tracking and compliance documentation, adding a layer of complexity that general-purpose payroll software handled poorly or not at all.
          </p>
          <p>
            The problem was not that payroll had gotten hard. It was that payroll had stopped being something the operator could absorb alongside the actual job of running and growing a multi-unit franchise. Growth had made payroll its own operational problem.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Challenge
          </h2>
          <p>
            At six locations and 110 employees across three states, the payroll workload included consolidating hours from six separate location management systems, handling state-specific compliance for all three jurisdictions, producing per-location labor cost reports, and generating the franchise brand's required reporting format for each pay period.
          </p>
          <p>
            By the operator's own estimate, payroll coordination was consuming 20 to 25 hours per month by the time they reached six units. That number included time from the operator directly and time from a part-time bookkeeper who was increasingly dedicated to payroll across locations rather than to the financial functions she had originally been hired to handle.
          </p>
          <p>
            The franchise's required reporting format was a particular pain point. The brand required labor cost data broken down by location and role category in a specific layout. The operator was producing this manually each pay period by exporting from the payroll system, reformatting in a spreadsheet, and submitting to the franchisor. When locations had schedule anomalies, those had to be corrected before the report could be submitted. The process was error-prone and time-consuming in a way that scaled directly with the number of active locations.
          </p>
          <p>
            The practical consequence of the time burden was that the operator was not spending time on unit 7 and unit 8. The acquisition pipeline was on hold because adding units meant adding payroll complexity that the operator did not have the bandwidth to absorb.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Solution
          </h2>
          <p>
            BEG consolidated all six locations into a single managed payroll process with per-location reporting built in from the first cycle. The franchise brand's required reporting format was configured into the BEG process so that compliant reports were produced automatically each pay period without requiring the operator or bookkeeper to reformat exports manually.
          </p>
          <p>
            All three states' compliance requirements were absorbed into the managed service during onboarding. State unemployment rates, withholding accounts, and local tax obligations for each jurisdiction were configured and are updated by BEG when regulatory changes occur. The operator's team has no standing compliance monitoring obligation.
          </p>
          <p>
            The per-location labor cost reporting the operator uses for unit-level financial analysis is produced each cycle by BEG and delivered in a consistent format. The operator can see total payroll cost across all six units and drill down to per-location detail without pulling or reformatting any data themselves.
          </p>
          <p>
            When units 5 and 6 were added during the engagement, the onboarding process for each new location's employees and compliance configuration was handled entirely by BEG. The operator did not need to learn a new process or add payroll setup to the list of tasks that come with opening a new location.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Result
          </h2>
          <p>
            Payroll processing time for the operator's team dropped from 20 or more hours per month to zero. The bookkeeper who had been spending most of her time on payroll coordination across locations was redeployed to accounts payable, vendor management, and financial reporting. The operator's time that had been going to payroll oversight was redirected to the acquisition pipeline.
          </p>
          <p>
            The franchise brand's required reporting has been submitted on time every period since BEG took over. The operator has not been late on a franchisor reporting deadline since the transition.
          </p>
          <p>
            The operator is currently evaluating units 7 and 8. The calculation they made before BEG was that each new unit added meaningful payroll complexity. The calculation after BEG is that new units add employees at $25 to $45 per employee per month, and nothing else. The payroll burden of expansion is now flat regardless of how many units are added.
          </p>

          <blockquote style={{ borderLeft: '4px solid #ECAC60', paddingLeft: '1.5rem', margin: '2.5rem 0', fontStyle: 'italic', color: '#333', fontSize: '1.1rem', lineHeight: '1.7' }}>
            "BEG scaled with us. When we added units 5 and 6, payroll did not get harder. It stayed exactly the same for our team."
          </blockquote>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            What They Said
          </h2>
          <p>
            The operator's framing of the change was straightforward: before BEG, every new unit was a payroll problem. After BEG, new units are just new employees. That shift in how the operator thinks about expansion reflects what managed payroll is actually supposed to do for a growing multi-unit operator. Payroll should scale with the business without adding operational burden.
          </p>
          <p>
            The bookkeeper noted that she had spent more than a year thinking of herself primarily as the person who runs payroll across six locations. After the transition, she returned to the financial functions she was hired for. The change in her own role within the organization was as significant as the hours saved.
          </p>

          <div style={{ background: '#000', color: '#fff', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
            <h3 style={{ color: '#ECAC60', margin: '0 0 0.75rem' }}>Growing a franchise portfolio and dreading the payroll math?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              In 15 minutes we can scope your current payroll load, give you a fixed monthly rate at $25 to $45 per employee, and show you what scaling looks like when payroll is off your plate.
            </p>
            <PricingCta service="managed-payroll" subline={false} />
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
        headline: 'How a Multi-Location Franchise Owner Scaled Payroll Across 6 Units',
        description: 'A multi-unit franchise operator with 6 locations and 110 employees across 3 states eliminated 20+ hours/month of payroll work and is now scalable to 15+ units.',
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        url: 'https://www.beghr.com/case-studies/franchise',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.beghr.com/case-studies' },
          { '@type': 'ListItem', position: 3, name: 'Franchise Case Study', item: 'https://www.beghr.com/case-studies/franchise' },
        ],
      }) }} />
    </article>
  );
}
