import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Litigation Associate Recruiters | 23-35 Days | BEG',
  description: 'Litigation associate placement in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day replacement guarantee. Book a discovery call.',
  alternates: { canonical: 'https://www.beghr.com/services/job-placement/legal/litigation-associate' },
  openGraph: {
    title: 'Litigation Associate Recruiters | 23-35 Days | BEG',
    description: 'Litigation associate placement in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day replacement guarantee.',
    url: 'https://www.beghr.com/services/job-placement/legal/litigation-associate',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Litigation Associate Recruiters | 23-35 Days | BEG', description: 'Litigation associate placement in 23-35 days at roughly 50% less than contingency.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-legal-litigation-associate');

export default function PlacementLegalLitigationAssociatePage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Legal · Litigation Associate"
      title="That litigation associate seat is costing you billable hours every week."
      description="Strong litigation associates are passive and fielding offers from multiple firms. We place permanent litigation associates in 23-35 days at roughly 50% less than contingency firms, with a 45-day replacement guarantee."
      calendlyLink={CALENDLY}
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
              <li>Litigation associate searches stall because the best candidates are passive and rarely posting their resume.</li>
              <li>BEG sources them directly and places permanent hires in 23-35 days, with an 86% fill rate.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' }, serviceType: 'Litigation associate placement', name: 'Litigation Associate Placement', areaServed: { '@type': 'Country', name: 'United States' }, url: 'https://www.beghr.com/services/job-placement/legal/litigation-associate', description: 'Permanent litigation associate placement in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.' }) }} />

      {/* WHY THIS ROLE IS HARD TO FILL */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why This Role Is Hard To Fill</p>
            <h2>The best litigation associates are not on job boards</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Associates who can manage discovery, handle depositions, and step into a trial role are employed, performing, and fielding calls from other firms constantly. A job posting reaches whoever is between positions, not whoever is quietly open to the right opportunity at the right firm. We source passive litigation associates directly, screen them against your practice area, bar status, and billing requirements, and deliver a shortlist of 3 to 5 pre-qualified candidates.
          </p>
          <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
            {[
              {
                stat: '$8,000+',
                label: 'Per week in lost billable capacity',
                sub: 'One associate billing 40 hours at $200 per hour. Every week the seat is empty, that capacity disappears.',
              },
              {
                stat: '90+ days',
                label: 'Average litigation search at most firms',
                sub: 'Posting and waiting is slow by design. It depends on active job seekers, who are rarely the attorneys you actually want.',
              },
              {
                stat: '2-4 weeks',
                label: 'Window before a strong candidate is gone',
                sub: 'When a lateral associate opens up to a move, they typically accept an offer within a month. A slow process misses them.',
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
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Hiring Tool</p>
            <h2>Hiring a litigation associate? Grade your job description first.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>A weak posting quietly kills your pipeline. Paste your litigation associate job description and get an instant 0 to 100 score, plus the exact fixes that get strong candidates to apply. Free, instant, and nothing you paste leaves your browser.</p>
          </div>
        </div>
      </section>
      <JobDescriptionGrader />

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every week this seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                One unfilled litigation associate seat billing 40 hours at $200 per hour is $8,000 per week in lost billable capacity. At 12 weeks, that is $96,000 absorbed before the search closes. Partner time covering associate work costs even more. A 23-35 day search eliminates most of that exposure.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Strong laterals are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                The best litigation associates are employed and quietly fielding calls. When one opens up to a move, the decision window is two to four weeks. The offer usually comes from whichever firm was already in their ear. A search that depends on a posting almost never reaches that candidate in time.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a 15-Minute Discovery Call
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>No commitment. We will tell you exactly what we can do for your search and what it costs.</p>
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
            <Link href="/services/job-placement/legal/partner" style={{ color: '#000000', fontWeight: 600 }}>Partner</Link>,{' '}
            <Link href="/services/job-placement/legal/paralegal" style={{ color: '#000000', fontWeight: 600 }}>Paralegal</Link>,{' '}
            <Link href="/services/job-placement/legal/general-counsel" style={{ color: '#000000', fontWeight: 600 }}>General Counsel</Link>.
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How long does it take to place a litigation associate?', acceptedAnswer: { '@type': 'Answer', text: 'On average 23-35 days from discovery call to placed hire, with an 86% fill rate on active searches.' } },
          { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. We are not a staffing or temp agency. You hire the candidate directly.' } },
          { '@type': 'Question', name: 'What does the 45-day guarantee cover?', acceptedAnswer: { '@type': 'Answer', text: 'If the placed candidate does not work out within 45 days of their start date for any performance-related reason, we conduct a replacement search at no additional charge.' } },
          { '@type': 'Question', name: 'What practice areas do you cover?', acceptedAnswer: { '@type': 'Answer', text: 'Litigation associates across practice areas including commercial litigation, employment litigation, insurance defense, and civil litigation, at law firms from 11 to 200 attorneys.' } },
        ],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Job Placement', item: 'https://www.beghr.com/services/job-placement' },
          { '@type': 'ListItem', position: 3, name: 'Legal', item: 'https://www.beghr.com/services/job-placement/legal' },
          { '@type': 'ListItem', position: 4, name: 'Litigation Associate', item: 'https://www.beghr.com/services/job-placement/legal/litigation-associate' },
        ],
      }) }} />
    </ServicePage>
  );
}
