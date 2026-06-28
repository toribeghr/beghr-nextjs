import { Metadata } from 'next';
import Link from 'next/link';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Accounting Placement Case Study | BEG',
  description: 'How BEG filled a senior accountant role in 24 days at roughly 50% less than contingency, using milestone-based permanent placement powered by isolved.',
  alternates: { canonical: 'https://beghr.com/case-studies/placement-accounting' },
  openGraph: {
    title: 'Accounting Placement Case Study | BEG',
    description: 'How BEG filled a senior accountant role in 24 days at roughly 50% less than contingency, using milestone-based permanent placement powered by isolved.',
    url: 'https://beghr.com/case-studies/placement-accounting',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Accounting Placement Case Study | BEG', description: 'How BEG filled a senior accountant role in 24 days at roughly 50% less than contingency, using milestone-based permanent placement powered by isolved.', images: ['https://beghr.com/assets/og-image.png'] },
};

export default function PlacementAccountingCaseStudyPage() {
  return (
    <article>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Case Study &middot; Accounting Placement</p>
              <h1>How a CPA Firm Filled a Senior Accountant Role Before Busy Season</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                A growing public accounting firm needed a senior accountant in place before tax season. BEG filled the role in 24 days at roughly 50% less than a contingency recruiter would have charged.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap' }}>
                <span><strong>Industry:</strong> Accounting / CPA</span>
                <span><strong>Role:</strong> Senior Accountant</span>
                <span><strong>Time to fill:</strong> 24 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', lineHeight: '1.8', fontSize: '1.05rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', margin: '0 0 3rem' }}>
            {[
              { stat: '24 days', label: 'Time to fill the open role' },
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
            A growing public accounting firm needed a senior accountant in seat before busy season ramped up. The role had been posted on the major job boards for weeks, but the qualified CPAs the firm wanted were already employed and not applying. The applicants who did come through were either too junior to carry the workload or looking for a level the firm was not hiring for.
          </p>
          <p>
            The stakes were time-bound. If the seat stayed empty into busy season, the firm&apos;s managers would absorb the senior-level review work on top of their own books, client deadlines would tighten, and the firm risked burning out the staff it already had. The partners wanted a permanent hire who could own client engagements, not a temporary contractor billed by the hour, and they did not want to pay a contingency fee of 20% to 30% of salary for a single accounting hire.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The BEG Approach
          </h2>
          <p>
            BEG places permanent employees on a milestone-based model. The engagement is broken into visible stages: role calibration, sourcing and pre-screening, a shortlist of vetted finalists, and the final hire backed by a 45-day replacement guarantee. The firm paid against milestones rather than a single contingency fee, which gave the partners a predictable cost and a process they could track.
          </p>
          <p>
            BEG began by calibrating the role precisely: certification status, public-accounting experience, the engagement types the senior would own, software fluency, and the firm&apos;s working culture. Because the strongest senior accountants were employed and passive, BEG sourced beyond the job boards and reached candidates who were not actively looking, pre-screening them against the firm&apos;s criteria before the partners spent a minute on interviews.
          </p>
          <p>
            BEG targets a 23 to 35 day time to fill and runs an 86% fill rate across its placements. This senior accountant search closed in 24 days, with time to spare before busy season.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Result
          </h2>
          <p>
            BEG delivered a shortlist of pre-screened senior accountants, all matched to the firm&apos;s certification and experience requirements. The firm hired a CPA who had not been actively job hunting and would not have surfaced through a job board. Time to fill was 24 days from kickoff to signed offer, inside the 23 to 35 day target and well ahead of busy season.
          </p>
          <p>
            Total placement cost came in at roughly 50% less than a contingency recruiter would have charged for the same hire. As a permanent placement backed by BEG&apos;s 45-day replacement guarantee, the firm took on no hourly markup and no risk of paying twice if the fit failed early. The new senior started before the busy-season crunch and took client review work off the managers&apos; plates.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            BEG-Delivered, isolved-Powered
          </h2>
          <p>
            BEG is a permanent placement partner and an authorized reseller of isolved Job Placement Services. The outcome here is BEG-delivered and isolved-powered: BEG owns the milestone process and the client relationship while drawing on isolved&apos;s placement infrastructure and candidate network to reach passive, hard-to-find accounting talent.
          </p>
          <p>
            isolved reports an 87% average candidate placement success rate for specialized positions and a 21 to 27 day time-to-fill for critical roles, which it describes as more than 40% faster than the industry standard. Those figures appear on{' '}
            <a href="https://www.isolvedhcm.com/talent-acquisition/services/job-placement-services" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontWeight: 600 }}>
              isolved Job Placement Services
            </a>
            . BEG&apos;s accounting placements run on that engine and are delivered through BEG&apos;s milestone model.
          </p>

          <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
            <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Need an accountant in seat before busy season?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Book a short discovery call. We will scope the role, give you a milestone-based plan, and show you how we fill it in 23 to 35 days at roughly 50% less than contingency.
            </p>
            <a
              href={getCalendlyLink('placement-accounting')}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}
            >
              Book a Free Discovery Call
            </a>
          </div>

          <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0', fontSize: '0.93rem' }}>
            <strong>Related:</strong>{' '}
            <Link href="/services/job-placement/accounting-cpa" style={{ color: '#000', fontWeight: 600 }}>
              Accounting &amp; CPA Job Placement
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
        headline: 'How a CPA Firm Filled a Senior Accountant Role Before Busy Season',
        description: 'BEG filled a senior accountant role in 24 days at roughly 50% less than contingency using milestone-based permanent placement powered by isolved.',
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
        url: 'https://beghr.com/case-studies/placement-accounting',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://beghr.com/case-studies' },
          { '@type': 'ListItem', position: 3, name: 'Accounting Placement Case Study', item: 'https://beghr.com/case-studies/placement-accounting' },
        ],
      }) }} />
    </article>
  );
}
