import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Sales Recruiters in Omaha | BEG',
  description: 'Sales placement in Omaha. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/sales/omaha' },
  openGraph: { title: 'Sales Recruiters in Omaha | BEG', description: 'Sales placement in Omaha in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/sales/omaha', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Sales Recruiters in Omaha | BEG', description: 'Sales placement in Omaha in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-sales-omaha');

export default function PlacementSalesOmahaPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Sales · Omaha"
      title="That open sales role in Omaha is costing you every week."
      description="Omaha is an insurance, finance, and healthcare market where employers compete hard for a limited candidate pool. We source passive sales candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Sales roles in Omaha stay open because the best candidates are passive and rarely on job boards.</li>
              <li>BEG sources sales talent in Omaha directly and fills permanent roles in 23-35 days.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"url\":\"https://beghr.com\"},\"serviceType\":\"Sales placement\",\"name\":\"Sales Placement in Omaha\",\"areaServed\":{\"@type\":\"City\",\"name\":\"Omaha\"},\"url\":\"https://beghr.com/services/job-placement/sales/omaha\",\"description\":\"Permanent sales placement in Omaha in 23-35 days at roughly 50% less than contingency.\"}" }} />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Omaha Talent Market</p>
            <h2>Why sales roles are hard to fill in Omaha</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Omaha sits in the Midwest and is an insurance, finance, and healthcare market where employers compete hard for a limited candidate pool. The strongest sales candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive sales talent in Omaha and the surrounding NE market directly, before they ever see a listing.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that Omaha seat stays open is a choice.</h2>
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
            <h2>Sales placement near Omaha</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/sales" style={{ color: '#000000', fontWeight: 600 }}>sales placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/sales/kansas-city" style={{ color: '#000000', fontWeight: 600 }}>Kansas City</Link>.
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
              { '@type': 'Question', name: 'Do you place sales candidates in Omaha?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent sales searches in Omaha and across Nebraska, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
