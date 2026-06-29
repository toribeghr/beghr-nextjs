import { Metadata } from 'next';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Legal Placement Case Study | BEG',
  description: 'How BEG filled an open associate attorney role in 26 days at roughly 50% less than contingency, with milestone-based placement powered by isolved.',
  alternates: { canonical: 'https://www.beghr.com/case-studies/placement-legal' },
  openGraph: {
    title: 'Legal Placement Case Study | BEG',
    description: 'How BEG filled an open associate attorney role in 26 days at roughly 50% less than contingency, with milestone-based placement powered by isolved.',
    url: 'https://www.beghr.com/case-studies/placement-legal',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Legal Placement Case Study | BEG', description: 'How BEG filled an open associate attorney role in 26 days at roughly 50% less than contingency, with milestone-based placement powered by isolved.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

export default function PlacementLegalCaseStudyPage() {
  return (
    <article>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Case Study &middot; Legal Placement</p>
              <h1>How a Law Firm Filled an Open Associate Role in 26 Days</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                A mid-sized litigation firm had carried an open associate attorney seat for four months. BEG filled it in 26 days at roughly 50% less than a contingency recruiter would have charged.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap' }}>
                <span><strong>Industry:</strong> Legal</span>
                <span><strong>Role:</strong> Associate Attorney</span>
                <span><strong>Time to fill:</strong> 26 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', lineHeight: '1.8', fontSize: '1.05rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', margin: '0 0 3rem' }}>
            {[
              { stat: '26 days', label: 'Time to fill the open role' },
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
            A mid-sized litigation firm had an associate attorney seat open for roughly four months. The partners were carrying the unbilled work themselves, paralegals were stretched, and two contingency recruiters had sent resumes that did not match the firm&apos;s practice area or culture. Every week the role stayed open meant billable hours walking out the door and senior attorneys doing work a mid-level associate should have owned.
          </p>
          <p>
            The firm did not want a temp or a contract lawyer. It needed a permanent associate who could carry a caseload, fit the firm&apos;s litigation style, and stay. The partners also balked at the standard contingency fee, which can run 20% to 30% of first-year salary for a single legal hire. They wanted a predictable cost and a real guarantee, not a resume firehose.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The BEG Approach
          </h2>
          <p>
            BEG runs permanent placement on a milestone-based model, not a staffing-agency markup. Work is structured into defined stages: intake and role calibration, sourcing and pre-screening, a shortlist of vetted finalists, and the final hire backed by a 45-day replacement guarantee. The firm paid against milestones it could see, not a single contingency fee triggered at the finish line.
          </p>
          <p>
            The first milestone was a tight calibration of the role: practice area, years of experience, court exposure, writing standard, and the working style the partners actually wanted. From there BEG leaned on passive sourcing rather than reposting the same job board ad. The strongest mid-level litigators were not actively applying, so BEG reached the candidates who were employed and not browsing openings, then pre-screened them against the firm&apos;s exact criteria before any partner spent time on an interview.
          </p>
          <p>
            BEG targets a 23 to 35 day time to fill on roles like this, and across its placements maintains an 86% fill rate. The litigation associate search landed inside that window at 26 days from kickoff to signed offer.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Result
          </h2>
          <p>
            BEG delivered a shortlist of three pre-screened associates. The partners interviewed all three, and the firm extended an offer to a mid-level litigator who had not been actively job hunting and would never have surfaced through a job board post. Time to fill was 26 days, comfortably inside the 23 to 35 day target and a fraction of the four months the seat had already sat empty.
          </p>
          <p>
            Total placement cost came in at roughly 50% less than what a contingency recruiter would have charged for the same hire. Because BEG places permanent employees and stands behind each placement with a 45-day replacement guarantee, the firm carried no markup-on-hours and no risk of paying twice if the fit failed early. The associate started, picked up an active caseload, and the partners stopped absorbing mid-level work.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            BEG-Delivered, isolved-Powered
          </h2>
          <p>
            BEG is a permanent placement partner and an authorized reseller of isolved Job Placement Services. The outcome above is BEG-delivered and isolved-powered: BEG owns the milestone process, calibration, and client relationship, while drawing on isolved&apos;s placement infrastructure and candidate network to source hard-to-fill roles faster.
          </p>
          <p>
            isolved reports an 87% average candidate placement success rate for executive and specialized positions and a 21 to 27 day time-to-fill for critical roles, which it describes as more than 40% faster than the industry standard. See{' '}
            <a href="https://www.isolvedhcm.com/talent-acquisition/services/job-placement-services" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontWeight: 600 }}>
              isolved Job Placement Services
            </a>
            {' '}for those figures. BEG&apos;s legal placements are built on that engine and delivered through BEG&apos;s milestone model.
          </p>

          <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
            <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Carrying an open legal seat?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Book a short discovery call. We will scope the role, give you a milestone-based plan, and show you how we fill it in 23 to 35 days at roughly 50% less than contingency.
            </p>
            <a
              href={getCalendlyLink('placement-legal')}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}
            >
              Book a Free Discovery Call
            </a>
          </div>

          <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0', fontSize: '0.93rem' }}>
            <strong>Related:</strong>{' '}
            <Link href="/services/job-placement/legal" style={{ color: '#000', fontWeight: 600 }}>
              Legal Job Placement
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
        headline: 'How a Law Firm Filled an Open Associate Role in 26 Days',
        description: 'BEG filled an open associate attorney role in 26 days at roughly 50% less than contingency using milestone-based permanent placement powered by isolved.',
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        url: 'https://www.beghr.com/case-studies/placement-legal',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.beghr.com/case-studies' },
          { '@type': 'ListItem', position: 3, name: 'Legal Placement Case Study', item: 'https://www.beghr.com/case-studies/placement-legal' },
        ],
      }) }} />
    </article>
  );
}
