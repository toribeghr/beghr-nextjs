import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Manufacturing Recruiters in Washington | BEG',
  description: 'Manufacturing placement in Washington. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/manufacturing/washington-dc' },
  openGraph: { title: 'Manufacturing Recruiters in Washington | BEG', description: 'Manufacturing placement in Washington in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/manufacturing/washington-dc', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Manufacturing Recruiters in Washington | BEG', description: 'Manufacturing placement in Washington in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-manufacturing-washington-dc');

export default function PlacementManufacturingWashingtondcPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Manufacturing · Washington"
      title="That open manufacturing role in Washington is costing you every week."
      description="Washington is a legal, government-contracting, and association market where cleared and credentialed talent is scarce. We source passive manufacturing candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Manufacturing roles in Washington stay open because the best candidates are passive and rarely on job boards.</li>
              <li>BEG sources manufacturing talent in Washington directly and fills permanent roles in 23-35 days.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"url\":\"https://beghr.com\"},\"serviceType\":\"Manufacturing placement\",\"name\":\"Manufacturing Placement in Washington\",\"areaServed\":{\"@type\":\"City\",\"name\":\"Washington\"},\"url\":\"https://beghr.com/services/job-placement/manufacturing/washington-dc\",\"description\":\"Permanent manufacturing placement in Washington in 23-35 days at roughly 50% less than contingency.\"}" }} />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Washington Talent Market</p>
            <h2>Why manufacturing roles are hard to fill in Washington</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Washington sits in the Northeast and is a legal, government-contracting, and association market where cleared and credentialed talent is scarce. The strongest manufacturing candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive manufacturing talent in Washington and the surrounding DC market directly, before they ever see a listing.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that Washington seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>A manufacturing vacancy does not just sit idle. It drags throughput, strains safety and quality oversight, and pushes line decisions onto supervisors already covering their own work. A plant leadership seat open for 90 days can cost a company missed output, scrap and rework, and roughly $30,000 in absorbed overhead before the search even ends.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>The best plant managers, operations directors, and quality leaders are employed, performing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a 15-Minute Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Keep Exploring</p>
            <h2>Manufacturing placement near Washington</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/manufacturing" style={{ color: '#000000', fontWeight: 600 }}>manufacturing placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/manufacturing/baltimore" style={{ color: '#000000', fontWeight: 600 }}>Baltimore</Link>.
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Do you place manufacturing candidates in Washington?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent manufacturing searches in Washington and across District of Columbia, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
