import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Engineering Recruiters in San Francisco | BEG',
  description: 'Engineering placement in San Francisco. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://www.beghr.com/services/job-placement/engineering/san-francisco' },
  openGraph: { title: 'Engineering Recruiters in San Francisco | BEG', description: 'Engineering placement in San Francisco in 23-35 days at roughly 50% less than contingency.', url: 'https://www.beghr.com/services/job-placement/engineering/san-francisco', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Engineering Recruiters in San Francisco | BEG', description: 'Engineering placement in San Francisco in 23-35 days at roughly 50% less than contingency.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-engineering-san-francisco');

export default function PlacementEngineeringSanfranciscoPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Engineering · San Francisco"
      title="That open engineering role in San Francisco is costing you every week."
      description="San Francisco is a premium tech and finance market where the best candidates are passive and rarely on job boards. We source passive engineering candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Engineering roles in San Francisco stay open because the best candidates are passive and rarely on job boards.</li>
              <li>BEG sources engineering talent in San Francisco directly and fills permanent roles in 23-35 days.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"url\":\"https://www.beghr.com\"},\"serviceType\":\"Engineering placement\",\"name\":\"Engineering Placement in San Francisco\",\"areaServed\":{\"@type\":\"City\",\"name\":\"San Francisco\"},\"url\":\"https://www.beghr.com/services/job-placement/engineering/san-francisco\",\"description\":\"Permanent engineering placement in San Francisco in 23-35 days at roughly 50% less than contingency.\"}" }} />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The San Francisco Talent Market</p>
            <h2>Why engineering roles are hard to fill in San Francisco</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            San Francisco sits in the West and is a premium tech and finance market where the best candidates are passive and rarely on job boards. The strongest engineering candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive engineering talent in San Francisco and the surrounding CA market directly, before they ever see a listing.
          </p>
        </div>
      </section>
      {/* JOB DESCRIPTION GRADER */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Hiring Tool</p>
            <h2>Hiring Engineering in San Francisco? Grade your job description first.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>A weak posting quietly kills your pipeline. Paste your engineering job description and get an instant 0 to 100 score, plus the exact fixes that get strong candidates to apply. Free, instant, and nothing you paste leaves your browser.</p>
          </div>
        </div>
      </section>
      <JobDescriptionGrader />


      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that San Francisco seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>A vacant engineering seat does not just mean one person\'s workload goes uncovered - it means project milestones slip, client commitments get missed, and your firm\'s reputation takes the hit. For most engineering firms, a delayed project costs more per week than the annual salary of the role that needs to be filled.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>Licensed engineers, especially PE-stamped professionals, are scarce and passively employed. They are not posting their resume on Indeed. When one opens up to a new opportunity, they receive offers quickly. A proactive sourcing approach is the only reliable way to reach this candidate pool.</p>
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
            <h2>Engineering placement near San Francisco</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/engineering" style={{ color: '#000000', fontWeight: 600 }}>engineering placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/engineering/san-jose" style={{ color: '#000000', fontWeight: 600 }}>San Jose</Link>, <Link href="/services/job-placement/engineering/oakland" style={{ color: '#000000', fontWeight: 600 }}>Oakland</Link>.
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
              { '@type': 'Question', name: 'Do you place engineering candidates in San Francisco?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent engineering searches in San Francisco and across California, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
