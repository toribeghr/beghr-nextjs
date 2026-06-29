import { Metadata } from 'next';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Sales Placement Case Study | BEG',
  description: 'How BEG filled an account executive role in 23 days at roughly 50% less than contingency, using milestone-based permanent placement powered by isolved.',
  alternates: { canonical: 'https://www.beghr.com/case-studies/placement-sales' },
  openGraph: {
    title: 'Sales Placement Case Study | BEG',
    description: 'How BEG filled an account executive role in 23 days at roughly 50% less than contingency, using milestone-based permanent placement powered by isolved.',
    url: 'https://www.beghr.com/case-studies/placement-sales',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Sales Placement Case Study | BEG', description: 'How BEG filled an account executive role in 23 days at roughly 50% less than contingency, using milestone-based permanent placement powered by isolved.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

export default function PlacementSalesCaseStudyPage() {
  return (
    <article>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Case Study &middot; Sales Placement</p>
              <h1>How a B2B Company Filled an Account Executive Role in 23 Days</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                A B2B company had a quota-carrying account executive seat open, and pipeline was going uncovered. BEG filled it permanently in 23 days at roughly 50% less than contingency.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap' }}>
                <span><strong>Industry:</strong> Sales</span>
                <span><strong>Role:</strong> Account Executive</span>
                <span><strong>Time to fill:</strong> 23 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', lineHeight: '1.8', fontSize: '1.05rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', margin: '0 0 3rem' }}>
            {[
              { stat: '23 days', label: 'Time to fill the open role' },
              { stat: '~50%', label: 'Less than contingency cost' },
              { stat: '45 days', label: 'Replacement guarantee' },
              { stat: '1 hire', label: 'Permanent placement, not a temp' },
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
            A B2B company had a quota-carrying account executive seat open, and the territory&apos;s pipeline was going uncovered. Every week the role stayed empty was deals not worked and a number the sales leader still had to hit. Strong closers were already employed and rarely browse job boards, so the inbound applicants skewed junior or were a poor fit for the company&apos;s deal size and sales motion.
          </p>
          <p>
            The company needed a permanent account executive who could ramp and carry a quota, not a temporary contractor. It also wanted to avoid the contingency recruiting fee, which for sales hires often runs 20% to 30% of first-year on-target earnings, and it wanted a guarantee in case the hire did not work out. A bad sales hire is expensive twice: once in fee and once in the quarter of lost production.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The BEG Approach
          </h2>
          <p>
            BEG places permanent employees on a milestone-based model rather than a staffing markup. The engagement runs in visible stages: role calibration, sourcing and pre-screening, a shortlist of vetted finalists, and the final hire backed by a 45-day replacement guarantee. The company paid against milestones it could track, not a single contingency fee at the end.
          </p>
          <p>
            BEG calibrated the role with the sales leader: deal size, sales cycle, the motion the AE would run, quota and territory, and the traits of the reps who had succeeded there before. Because the strongest closers were employed and passive, BEG sourced beyond the job boards and reached candidates who were not actively looking, pre-screening them against the company&apos;s profile before the sales leader spent time interviewing.
          </p>
          <p>
            BEG targets a 23 to 35 day time to fill and runs an 86% fill rate across its placements. This account executive search closed at the fast end of that range, in 23 days.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Result
          </h2>
          <p>
            BEG delivered a shortlist of pre-screened account executives matched to the company&apos;s deal size and sales motion. The company hired a closer who had not been actively job hunting and would not have surfaced through a job board. Time to fill was 23 days from kickoff to signed offer, at the fast end of the 23 to 35 day target, so the territory pipeline got covered quickly.
          </p>
          <p>
            Total placement cost came in at roughly 50% less than a contingency recruiter would have charged for the same hire. As a permanent placement backed by BEG&apos;s 45-day replacement guarantee, the company carried no markup and no risk of paying twice if the fit failed early. The new AE started, took the open territory, and the sales leader stopped covering pipeline personally.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            BEG-Delivered, isolved-Powered
          </h2>
          <p>
            BEG is a permanent placement partner and an authorized reseller of isolved Job Placement Services. This outcome is BEG-delivered and isolved-powered: BEG owns the milestone process and the client relationship while drawing on isolved&apos;s placement infrastructure and candidate network to reach passive, hard-to-find sales talent.
          </p>
          <p>
            isolved reports an 87% average candidate placement success rate for specialized and executive positions, a 21 to 27 day time-to-fill for critical roles that it describes as more than 40% faster than the industry standard, and 50-plus hours of productivity saved by hiring managers who use its placement team rather than running the search themselves. Those figures appear on{' '}
            <a href="https://www.isolvedhcm.com/talent-acquisition/services/job-placement-services" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontWeight: 600 }}>
              isolved Job Placement Services
            </a>
            . BEG&apos;s sales placements run on that engine and are delivered through BEG&apos;s milestone model.
          </p>

          <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
            <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Quota seat sitting open?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Book a short discovery call. We will scope the role, give you a milestone-based plan, and show you how we fill it in 23 to 35 days at roughly 50% less than contingency.
            </p>
            <a
              href={getCalendlyLink('placement-sales')}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}
            >
              Book a Free Discovery Call
            </a>
          </div>

          <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0', fontSize: '0.93rem' }}>
            <strong>Related:</strong>{' '}
            <Link href="/services/job-placement/sales" style={{ color: '#000', fontWeight: 600 }}>
              Sales Job Placement
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
        headline: 'How a B2B Company Filled an Account Executive Role in 23 Days',
        description: 'BEG filled an account executive role in 23 days at roughly 50% less than contingency using milestone-based permanent placement powered by isolved.',
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        url: 'https://www.beghr.com/case-studies/placement-sales',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.beghr.com/case-studies' },
          { '@type': 'ListItem', position: 3, name: 'Sales Placement Case Study', item: 'https://www.beghr.com/case-studies/placement-sales' },
        ],
      }) }} />
    </article>
  );
}
