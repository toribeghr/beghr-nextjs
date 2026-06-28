import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Sales Recruiters in Denver | BEG',
  description: 'Sales placement in Denver. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/sales/denver' },
  openGraph: { title: 'Sales Recruiters in Denver | BEG', description: 'Sales placement in Denver in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/sales/denver', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Sales Recruiters in Denver | BEG', description: 'Sales placement in Denver in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-sales-denver');

export default function PlacementSalesDenverPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Sales · Denver"
      title="That open sales role in Denver is costing you every week."
      description="Denver is a fast-growing relocation magnet where employers compete with lifestyle-driven candidate expectations. We source passive sales candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Sales roles in Denver stay open because the best candidates are passive and rarely on job boards.</li>
              <li>BEG sources sales talent in Denver directly and fills permanent roles in 23-35 days.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"url\":\"https://beghr.com\"},\"serviceType\":\"Sales placement\",\"name\":\"Sales Placement in Denver\",\"areaServed\":{\"@type\":\"City\",\"name\":\"Denver\"},\"url\":\"https://beghr.com/services/job-placement/sales/denver\",\"description\":\"Permanent sales placement in Denver in 23-35 days at roughly 50% less than contingency.\"}" }} />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Denver Talent Market</p>
            <h2>Why sales roles are hard to fill in Denver</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Denver sits in the West and is a fast-growing relocation magnet where employers compete with lifestyle-driven candidate expectations. The strongest sales candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive sales talent in Denver and the surrounding CO market directly, before they ever see a listing.
          </p>
        </div>
      </section>
      {/* JOB DESCRIPTION GRADER */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Hiring Tool</p>
            <h2>Hiring Sales in Denver? Grade your job description first.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>A weak posting quietly kills your pipeline. Paste your sales job description and get an instant 0 to 100 score, plus the exact fixes that get strong candidates to apply. Free, instant, and nothing you paste leaves your browser.</p>
          </div>
        </div>
      </section>
      <JobDescriptionGrader />


      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that Denver seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>An open sales seat is not a paused cost, it is lost revenue. The territory goes uncovered, the pipeline that rep should be building never gets built, and deals that needed an owner slip to next quarter. An AE seat carrying a $600K number that sits open for 90 days can quietly cost the business $150,000 in unbooked pipeline before the search even closes.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>The reps and leaders worth hiring are already employed, hitting their number, and contacted by recruiters constantly. When one of them opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time.</p>
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
            <h2>Sales placement near Denver</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/sales" style={{ color: '#000000', fontWeight: 600 }}>sales placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/sales/colorado-springs" style={{ color: '#000000', fontWeight: 600 }}>Colorado Springs</Link>.
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
              { '@type': 'Question', name: 'Do you place sales candidates in Denver?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent sales searches in Denver and across Colorado, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
