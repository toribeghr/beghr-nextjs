import { Metadata } from 'next';
import Link from 'next/link';
import PricingCta from '@/components/pricing/PricingCta';

export const metadata: Metadata = {
  title: 'Contractor Passes DOL Audit After Switching to BEG | Case Study',
  description: 'A 60-employee commercial contractor with 3 federal projects passed a DOL compliance review after BEG took over certified payroll and prevailing wage',
  alternates: { canonical: 'https://www.beghr.com/case-studies/construction' },
  openGraph: {
    title: 'Contractor Passes DOL Audit After Switching to BEG | Case Study',
    description: 'A 60-employee commercial contractor with 3 federal projects passed a DOL compliance review after BEG took over certified payroll and prevailing wage',
    url: 'https://www.beghr.com/case-studies/construction',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Contractor Passes DOL Audit After Switching to BEG | Case Study', description: 'A 60-employee commercial contractor with 3 federal projects passed a DOL compliance review after BEG took over certified payroll and prevailing wage', images: ['https://www.beghr.com/assets/og-image.png'] },
};

export default function ConstructionCaseStudyPage() {
  return (
    <article>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Case Study · Construction / Federal Contracting</p>
              <h1>How a Regional Contractor Passed a DOL Audit After Switching to BEG</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                60 employees, 3 federally funded projects, 4 states. A DOL compliance review was triggered mid-project. BEG stepped in, implemented certified payroll, and got the contractor to a clean result.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap' }}>
                <span><strong>Industry:</strong> Commercial Construction</span>
                <span><strong>Employees:</strong> 60</span>
                <span><strong>States:</strong> 4</span>
                <span><strong>Federal Projects:</strong> 3</span>
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
              { stat: '0', label: 'DOL violations found' },
              { stat: '3', label: 'Federal projects certified concurrently' },
              { stat: '5 days', label: 'Time to go live mid-project' },
              { stat: '0 hrs', label: 'Internal payroll time each cycle' },
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
            A commercial construction firm operating across four states had built a steady pipeline of federally funded projects. With 60 employees distributed across active project sites and home office functions, the company had grown into a position where certified payroll was no longer optional. Three concurrent federal projects required WH-347 certified payroll reporting, prevailing wage rate compliance, and fringe benefit documentation for every applicable trade classification on those jobs.
          </p>
          <p>
            The firm's previous payroll vendor was a general-purpose provider with no certified payroll capability. The office manager handling payroll did not have a background in Davis-Bacon Act compliance, WH-347 reporting, or prevailing wage rate schedules. Until this point, the compliance exposure had not materialized into a concrete problem. Then a subcontractor complaint triggered a DOL compliance review.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Challenge
          </h2>
          <p>
            Certified payroll under the Davis-Bacon Act requires contractors on federally funded projects to pay workers at prevailing wage rates determined by the Department of Labor for each trade classification in the project's geographic area. Those rates must be documented on WH-347 forms and submitted weekly to the contracting agency for every pay period during project work. Errors in trade classification, fringe benefit treatment, or rate application create direct liability.
          </p>
          <p>
            The firm's previous process was entirely manual. Prevailing wage rate schedules were printed from the relevant wage determinations, and the office manager calculated wages against those rates by hand each pay cycle. There was no system-level configuration to enforce correct rate application, no automated WH-347 generation, and no audit trail that would hold up under a DOL review.
          </p>
          <p>
            With the DOL compliance review underway and three active federal projects running simultaneously, the firm needed a managed payroll provider that understood certified payroll from day one. Their previous vendor had already confirmed it could not support the WH-347 filing requirement. The firm needed to transition during an active project cycle, with no room for payroll disruption on federally funded work.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Solution
          </h2>
          <p>
            BEG transitioned the firm in five business days while all three federal projects were active. The implementation included certified payroll reporting configuration for each project, prevailing wage rate tracking by trade classification using the applicable wage determinations for each project's location, and fringe benefit allocation documentation.
          </p>
          <p>
            BEG handled WH-347 form generation and submission from the first pay cycle under management. Prevailing wage rates for each applicable trade classification were loaded into the system and applied automatically, replacing the manual rate-lookup process that had created the compliance gap. Employee trade classifications were reviewed and corrected where the prior process had applied rates inconsistently.
          </p>
          <p>
            The firm's multi-state tax compliance across four states was also consolidated into the managed service during the same transition. The internal team's payroll workload dropped to zero. BEG handled all processing, filing, and certified payroll documentation while the DOL review was ongoing.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Result
          </h2>
          <p>
            The DOL compliance review concluded with no violations. The documentation BEG produced from the first managed cycle onward was complete, accurate, and formatted correctly for review. The transition had created a clean break between the firm's prior manual process and the correctly configured managed service, and the reviewer was able to confirm compliance from the point of BEG's involvement.
          </p>
          <p>
            All three concurrent federal projects continued submitting certified payroll on schedule throughout the transition and the review period. There was no gap in WH-347 filing, no project disruption, and no missed submission window during the five-day implementation.
          </p>
          <p>
            The firm's internal payroll workload dropped to zero. The office manager who had been managing the manual process was reassigned to project coordination. Multi-state compliance for all four states is now managed by BEG. As the firm pursues additional federal contracts, certified payroll capability is already in place at no additional setup cost.
          </p>

          <blockquote style={{ borderLeft: '4px solid #ECAC60', paddingLeft: '1.5rem', margin: '2.5rem 0', fontStyle: 'italic', color: '#333', fontSize: '1.1rem', lineHeight: '1.7' }}>
            "BEG knew certified payroll in a way our previous vendor did not. They handled the WH-347 filing from day one."
          </blockquote>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            What They Said
          </h2>
          <p>
            The firm's leadership credited the clean DOL result not just to BEG's payroll setup, but to the fact that the transition created an immediate, documented break from the prior process. Auditors reviewing the certified payroll records from BEG's managed cycles found correctly applied prevailing wage rates, complete fringe benefit documentation, and properly formatted WH-347 submissions. That paper trail did not exist before.
          </p>
          <p>
            The operations team described the transition itself as unremarkable, which they meant as a compliment. During one of the most stressful periods the firm had navigated, payroll ran without incident, certified reports went out on schedule, and employees at all four project sites were paid correctly and on time.
          </p>

          <div style={{ background: '#000', color: '#fff', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
            <h3 style={{ color: '#ECAC60', margin: '0 0 0.75rem' }}>Running federal projects and managing certified payroll manually?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              In 15 minutes we can scope your payroll and certified payroll requirements, give you a fixed monthly rate at $25 to $45 per employee, and show you what a clean transition looks like.
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
        headline: 'How a Regional Contractor Passed a DOL Audit After Switching to BEG',
        description: 'A 60-employee commercial contractor with 3 concurrent federal projects passed a DOL compliance review after BEG implemented certified payroll and prevailing wage tracking.',
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        url: 'https://www.beghr.com/case-studies/construction',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.beghr.com/case-studies' },
          { '@type': 'ListItem', position: 3, name: 'Construction Case Study', item: 'https://www.beghr.com/case-studies/construction' },
        ],
      }) }} />
    </article>
  );
}
