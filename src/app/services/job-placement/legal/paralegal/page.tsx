import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Paralegal Recruiters | 23-35 Days | BEG',
  description: 'Paralegal placement for law firms in 23-35 days at roughly 50% less than contingency. Practice-area-specific sourcing, 45-day replacement guarantee.',
  alternates: { canonical: 'https://www.beghr.com/services/job-placement/legal/paralegal' },
  openGraph: {
    title: 'Paralegal Recruiters | 23-35 Days | BEG',
    description: 'Paralegal placement for law firms in 23-35 days at roughly 50% less than contingency. Practice-area-specific sourcing, 45-day replacement guarantee.',
    url: 'https://www.beghr.com/services/job-placement/legal/paralegal',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Paralegal Recruiters | 23-35 Days | BEG', description: 'Paralegal placement for law firms in 23-35 days at roughly 50% less than contingency.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-legal-paralegal');

export default function PlacementLegalParalegalPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Legal · Paralegal"
      title="A paralegal vacancy is a bottleneck your attorneys feel every day."
      description="Experienced paralegals who can own a docket, manage discovery, and run closings without hand-holding are in short supply. We place permanent paralegals in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="job-placement" industry="legal" />}
      heroStats={[
        { value: '23-35', label: 'Days to fill on average' },
        { value: '86%', label: 'Fill rate on active searches' },
        { value: '~50%', label: 'Less than contingency pricing' },
      ]}
    >
      {/* KEY TAKEAWAYS */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Paralegal skill sets vary sharply by practice area. Generic job boards surface generalists, not specialists.</li>
              <li>BEG sources practice-area-matched paralegal candidates directly and places permanent hires in 23-35 days.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' }, serviceType: 'Paralegal placement', name: 'Paralegal Placement', areaServed: { '@type': 'Country', name: 'United States' }, url: 'https://www.beghr.com/services/job-placement/legal/paralegal', description: 'Permanent paralegal placement for law firms in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.' }) }} />

      {/* WHY THIS ROLE IS HARD TO FILL */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why This Role Is Hard To Fill</p>
            <h2>Paralegal skill sets are not interchangeable</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            A litigation paralegal who can manage complex discovery is not the same as a corporate paralegal who can run a deal closing. Job boards surface whichever paralegals happen to be between positions, which is rarely the person you need for your specific practice area. We source candidates matched to your exact requirements, including matter types, software, and experience level, and deliver a shortlist of qualified candidates who are not actively job hunting.
          </p>
          <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
            {[
              {
                stat: '$3,500+',
                label: 'Per week in attorney time lost to admin',
                sub: 'When the paralegal seat is empty, attorneys absorb the work. That is billed time going to filing, scheduling, and drafting instead of clients.',
              },
              {
                stat: '60-90 days',
                label: 'Typical paralegal search using job boards',
                sub: 'Posting and filtering through unqualified applicants is slow. Direct sourcing of passive candidates cuts that timeline by half.',
              },
              {
                stat: 'Practice-area specific',
                label: 'Sourcing matched to your docket',
                sub: 'We filter by practice area from the first conversation, so the shortlist reflects what you actually need, not what happened to apply.',
              },
            ].map(({ stat, label, sub }) => (
              <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB DESCRIPTION GRADER */}

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every week without a paralegal costs attorney time.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                When the paralegal seat is open, attorneys absorb the administrative and paralegal work. That is billable time going to tasks that should not cost $300-$600 per hour. At 60-90 days open, that absorbed cost often exceeds what a placement would have cost entirely.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Experienced paralegals get snapped up fast.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Experienced paralegals with the right practice-area background are actively recruited. When one opens up to a new role, they typically have multiple conversations within two to three weeks. A passive search that waits for applications almost never reaches the best candidates before someone else does.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="job-placement" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>No commitment. We will tell you exactly what we can do for your paralegal search and what it costs.</p>
          </div>
        </div>
      </section>

      {/* RELATED ROLES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Related Searches</p>
            <h2>Other legal roles we place</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/legal" style={{ color: '#000000', fontWeight: 600 }}>legal placement service</Link>, or explore:{' '}
            <Link href="/services/job-placement/legal/litigation-associate" style={{ color: '#000000', fontWeight: 600 }}>Litigation Associate</Link>,{' '}
            <Link href="/services/job-placement/legal/partner" style={{ color: '#000000', fontWeight: 600 }}>Partner</Link>,{' '}
            <Link href="/services/job-placement/legal/general-counsel" style={{ color: '#000000', fontWeight: 600 }}>General Counsel</Link>.
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How long does it take to place a paralegal?', acceptedAnswer: { '@type': 'Answer', text: 'On average 23-35 days from discovery call to placed hire, with an 86% fill rate on active searches.' } },
          { '@type': 'Question', name: 'What practice areas do you place paralegals in?', acceptedAnswer: { '@type': 'Answer', text: 'Litigation, corporate, real estate, employment, family law, and other practice areas at law firms from 11 to 200 attorneys. We match candidates to your specific practice area requirements.' } },
          { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct hire permanent placement with milestone-based pricing. We are not a staffing or temp agency. You hire the candidate directly.' } },
          { '@type': 'Question', name: 'What does the 45-day guarantee cover?', acceptedAnswer: { '@type': 'Answer', text: 'If the placed candidate does not work out within 45 days of their start date for any performance-related reason, we conduct a replacement search at no additional charge.' } },
        ],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Job Placement', item: 'https://www.beghr.com/services/job-placement' },
          { '@type': 'ListItem', position: 3, name: 'Legal', item: 'https://www.beghr.com/services/job-placement/legal' },
          { '@type': 'ListItem', position: 4, name: 'Paralegal', item: 'https://www.beghr.com/services/job-placement/legal/paralegal' },
        ],
      }) }} />
    </ServicePage>
  );
}
