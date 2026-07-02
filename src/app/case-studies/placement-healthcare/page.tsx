import { Metadata } from 'next';
import Link from 'next/link';
import PricingCta from '@/components/pricing/PricingCta';

export const metadata: Metadata = {
  title: 'Healthcare Placement Case Study | BEG',
  description: 'How BEG filled a nurse practitioner role in 29 days at roughly 50% less than contingency, with milestone-based placement powered by isolved.',
  alternates: { canonical: 'https://www.beghr.com/case-studies/placement-healthcare' },
  openGraph: {
    title: 'Healthcare Placement Case Study | BEG',
    description: 'How BEG filled a nurse practitioner role in 29 days at roughly 50% less than contingency, with milestone-based placement powered by isolved.',
    url: 'https://www.beghr.com/case-studies/placement-healthcare',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Healthcare Placement Case Study | BEG', description: 'How BEG filled a nurse practitioner role in 29 days at roughly 50% less than contingency, with milestone-based placement powered by isolved.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

export default function PlacementHealthcareCaseStudyPage() {
  return (
    <article>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Case Study &middot; Healthcare Placement</p>
              <h1>How a Clinic Filled a Hard-to-Fill Nurse Practitioner Role in 29 Days</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                A multi-site outpatient clinic had a nurse practitioner seat open long enough that patient scheduling was backing up. BEG filled it permanently in 29 days at roughly 50% less than contingency.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap' }}>
                <span><strong>Industry:</strong> Healthcare</span>
                <span><strong>Role:</strong> Nurse Practitioner</span>
                <span><strong>Time to fill:</strong> 29 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', lineHeight: '1.8', fontSize: '1.05rem' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', margin: '0 0 3rem' }}>
            {[
              { stat: '29 days', label: 'Time to fill the open role' },
              { stat: '~50%', label: 'Less than contingency cost' },
              { stat: '45 days', label: 'Replacement guarantee' },
              { stat: '1 hire', label: 'Permanent placement, not a locum' },
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
            A multi-site outpatient clinic had a nurse practitioner position open long enough that patient scheduling was visibly backing up. Clinical staff were covering the gap, appointment lead times were stretching, and the practice was at risk of turning away patients it could not see. The roles in highest demand in healthcare are also the hardest to fill, and the strongest candidates were already employed and not browsing job boards.
          </p>
          <p>
            The clinic needed a permanent nurse practitioner, not a locum or a travel contractor billed at a premium hourly rate. It wanted a clinician who would stay, fit the care model, and carry a panel. The leadership team was also wary of contingency recruiting fees, which run 20% to 30% of first-year compensation for a single clinical hire, and wanted a guarantee in case a placement did not work out.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The BEG Approach
          </h2>
          <p>
            BEG places permanent employees on a milestone-based model rather than a staffing markup. The engagement runs in visible stages: role calibration, sourcing and pre-screening, a shortlist of vetted finalists, and the final hire backed by a 45-day replacement guarantee. The clinic paid against milestones it could track, not a single contingency fee at the end.
          </p>
          <p>
            BEG started by calibrating the role with the clinical leadership: licensure and certification, specialty experience, the patient panel the NP would carry, scheduling expectations, and the practice culture. Because the best nurse practitioners were employed and passive, BEG sourced beyond the job boards, reaching clinicians who were not actively looking, then pre-screening them against the clinic&apos;s exact requirements before any provider sat through an interview.
          </p>
          <p>
            BEG targets a 23 to 35 day time to fill and runs an 86% fill rate across its placements. This nurse practitioner search closed in 29 days, inside that window.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Result
          </h2>
          <p>
            BEG delivered a shortlist of pre-screened, properly credentialed nurse practitioners. The clinic hired an NP who had not been actively job hunting and would not have appeared through a job board post. Time to fill was 29 days from kickoff to signed offer, inside the 23 to 35 day target and fast enough to relieve the scheduling backlog before it cost the practice patients.
          </p>
          <p>
            Total placement cost came in at roughly 50% less than a contingency recruiter would have charged for the same clinical hire. As a permanent placement backed by BEG&apos;s 45-day replacement guarantee, the clinic carried no premium hourly markup and no risk of paying twice if the fit failed early. The new NP started, picked up a patient panel, and appointment lead times came back down.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            BEG-Delivered, isolved-Powered
          </h2>
          <p>
            BEG is a permanent placement partner and an authorized reseller of isolved Job Placement Services. This outcome is BEG-delivered and isolved-powered: BEG owns the milestone process and the client relationship while drawing on isolved&apos;s placement infrastructure and candidate network to reach passive, hard-to-find clinical talent.
          </p>
          <p>
            isolved reports an 87% average candidate placement success rate for specialized positions and a 21 to 27 day time-to-fill for critical roles, which it describes as more than 40% faster than the industry standard. isolved also serves healthcare specifically through its{' '}
            <a href="https://www.isolvedhcm.com/industries/healthcare" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontWeight: 600 }}>
              healthcare solutions
            </a>
            , and the placement figures appear on{' '}
            <a href="https://www.isolvedhcm.com/talent-acquisition/services/job-placement-services" target="_blank" rel="noopener noreferrer" style={{ color: '#000', fontWeight: 600 }}>
              isolved Job Placement Services
            </a>
            . BEG&apos;s healthcare placements run on that engine and are delivered through BEG&apos;s milestone model.
          </p>

          <div style={{ background: '#000', color: '#fff', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
            <h3 style={{ color: '#ECAC60', margin: '0 0 0.75rem' }}>Carrying an open clinical seat?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              Answer a few quick questions and get a real placement quote on screen in 90 seconds. Filled in 23 to 35 days at roughly 50% less than contingency. No call required.
            </p>
            <PricingCta service="job-placement" subline={false} />
          </div>

          <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0', fontSize: '0.93rem' }}>
            <strong>Related:</strong>{' '}
            <Link href="/services/job-placement/healthcare" style={{ color: '#000', fontWeight: 600 }}>
              Healthcare Job Placement
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
        headline: 'How a Clinic Filled a Hard-to-Fill Nurse Practitioner Role in 29 Days',
        description: 'BEG filled a nurse practitioner role in 29 days at roughly 50% less than contingency using milestone-based permanent placement powered by isolved.',
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        url: 'https://www.beghr.com/case-studies/placement-healthcare',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.beghr.com/case-studies' },
          { '@type': 'ListItem', position: 3, name: 'Healthcare Placement Case Study', item: 'https://www.beghr.com/case-studies/placement-healthcare' },
        ],
      }) }} />
    </article>
  );
}
