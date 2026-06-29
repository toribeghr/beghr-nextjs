import { Metadata } from 'next';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Technology Placement Case Study | BEG',
  description: 'How BEG filled a senior software engineer role in 31 days at roughly 50% less than contingency, with milestone-based placement powered by isolved.',
  alternates: { canonical: 'https://www.beghr.com/case-studies/placement-technology' },
  openGraph: {
    title: 'Technology Placement Case Study | BEG',
    description: 'How BEG filled a senior software engineer role in 31 days at roughly 50% less than contingency, with milestone-based placement powered by isolved.',
    url: 'https://www.beghr.com/case-studies/placement-technology',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Technology Placement Case Study | BEG', description: 'How BEG filled a senior software engineer role in 31 days at roughly 50% less than contingency, with milestone-based placement powered by isolved.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

export default function PlacementTechnologyCaseStudyPage() {
  return (
    <article>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Case Study &middot; Technology Placement</p>
              <h1>How a SaaS Company Filled a Senior Engineer Role in 31 Days</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                A growth-stage SaaS company had a senior software engineer seat open for months while the roadmap slipped. BEG filled it permanently in 31 days at roughly 50% less than contingency.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap' }}>
                <span><strong>Industry:</strong> Technology</span>
                <span><strong>Role:</strong> Senior Software Engineer</span>
                <span><strong>Time to fill:</strong> 31 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', lineHeight: '1.8', fontSize: '1.05rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', margin: '0 0 3rem' }}>
            {[
              { stat: '31 days', label: 'Time to fill the open role' },
              { stat: '~50%', label: 'Less than contingency cost' },
              { stat: '45 days', label: 'Replacement guarantee' },
              { stat: '86%', label: 'BEG fill rate across placements' },
            ].map(({ stat, label }, i) => (
              <div key={i} style={{ background: '#000', color: '#ECAC60', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, lineHeight: 1, marginBottom: '0.4rem' }}>{stat}</div>
                <div style={{ fontSize: '0.82rem', color: '#ddd', lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Challenge
          </h2>
          <p>
            A growth-stage SaaS company had a senior software engineer position open for months. The product roadmap was slipping because the existing team was stretched, and the engineering manager was spending time on interviews instead of shipping. The job board applicants were a mismatch on the specific stack and seniority the team needed, while the engineers who were a strong fit were already employed and not applying anywhere.
          </p>
          <p>
            The company needed a permanent senior engineer who could own a part of the codebase, not a contract developer billed by the hour. It also wanted to avoid the contingency recruiting fee, which for senior technical roles often runs 20% to 30% of first-year salary, and it wanted a guarantee in case the hire did not stick. Engineering time spent screening unqualified resumes was its own hidden cost.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The BEG Approach
          </h2>
          <p>
            BEG places permanent employees on a milestone-based model. The engagement runs in visible stages: role calibration, sourcing and pre-screening, a shortlist of vetted finalists, and the final hire backed by a 45-day replacement guarantee. The company paid against milestones it could track rather than a single contingency fee at the finish line.
          </p>
          <p>
            BEG calibrated the role tightly with the engineering manager: the core stack, the systems the engineer would own, seniority and scope, remote or onsite expectations, and the team&apos;s working style. Because the strongest senior engineers were employed and passive, BEG sourced beyond the job boards and reached candidates who were not actively looking, pre-screening them against the team&apos;s technical bar before any engineer spent time interviewing.
          </p>
          <p>
            BEG targets a 23 to 35 day time to fill and maintains an 86% fill rate across its placements. This senior engineer search closed in 31 days, inside that window.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Result
          </h2>
          <p>
            BEG delivered a shortlist of pre-screened senior engineers matched to the company&apos;s stack and seniority. The company hired an engineer who had not been actively job hunting and would not have surfaced through a job board. Time to fill was 31 days from kickoff to signed offer, inside the 23 to 35 day target and far faster than the months the seat had already been open.
          </p>
          <p>
            Total placement cost came in at roughly 50% less than a contingency recruiter would have charged for the same hire. As a permanent placement backed by BEG&apos;s 45-day replacement guarantee, the company carried no hourly markup and no risk of paying twice if the fit failed early. The new engineer started, took ownership of part of the codebase, and the roadmap got moving again.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            BEG-Delivered, isolved-Powered
          </h2>
          <p>
            BEG is a permanent placement partner and an authorized reseller of isolved Job Placement Services. This outcome is BEG-delivered and isolved-powered: BEG owns the milestone process and the client relationship while drawing on isolved&apos;s placement infrastructure and candidate network to reach passive, hard-to-find technical talent.
          </p>
          <p>
            isolved reports an 87% average candidate placement success rate for specialized positions and a 21 to 27 day time-to-fill for critical roles, which it describes as more than 40% faster than the industry standard. One isolved manufacturing customer, Zund America, reported cutting cost-per-hire by up to 65% using isolved talent acquisition. Those references appear on{' '}
            <a href="https://www.isolvedhcm.com/talent-acquisition/services/job-placement-services" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontWeight: 600 }}>
              isolved Job Placement Services
            </a>
            . BEG&apos;s technology placements run on that engine and are delivered through BEG&apos;s milestone model.
          </p>

          <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
            <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Open engineering seat slowing the roadmap?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Book a short discovery call. We will scope the role, give you a milestone-based plan, and show you how we fill it in 23 to 35 days at roughly 50% less than contingency.
            </p>
            <a
              href={getCalendlyLink('placement-technology')}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}
            >
              Book a Free Discovery Call
            </a>
          </div>

          <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0', fontSize: '0.93rem' }}>
            <strong>Related:</strong>{' '}
            <Link href="/services/job-placement/technology" style={{ color: '#000', fontWeight: 600 }}>
              Technology Job Placement
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
        headline: 'How a SaaS Company Filled a Senior Engineer Role in 31 Days',
        description: 'BEG filled a senior software engineer role in 31 days at roughly 50% less than contingency using milestone-based permanent placement powered by isolved.',
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        url: 'https://www.beghr.com/case-studies/placement-technology',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.beghr.com/case-studies' },
          { '@type': 'ListItem', position: 3, name: 'Technology Placement Case Study', item: 'https://www.beghr.com/case-studies/placement-technology' },
        ],
      }) }} />
    </article>
  );
}
