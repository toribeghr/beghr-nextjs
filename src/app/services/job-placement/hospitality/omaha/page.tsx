import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Hospitality Recruiters in Omaha | BEG',
  description: 'Hospitality placement in Omaha. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/hospitality/omaha' },
  openGraph: { title: 'Hospitality Recruiters in Omaha | BEG', description: 'Hospitality placement in Omaha in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/hospitality/omaha', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Hospitality Recruiters in Omaha | BEG', description: 'Hospitality placement in Omaha in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-hospitality-omaha');

export default function PlacementHospitalityOmahaPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Hospitality · Omaha"
      title="That open hospitality role in Omaha is costing you every week."
      description="Omaha is an insurance, finance, and healthcare market where employers compete hard for a limited candidate pool. We source passive hospitality candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Omaha Talent Market</p>
            <h2>Why hospitality roles are hard to fill in Omaha</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Omaha sits in the Midwest and is an insurance, finance, and healthcare market where employers compete hard for a limited candidate pool. The strongest hospitality candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive hospitality talent in Omaha and the surrounding NE market directly, before they ever see a listing.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that Omaha seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>A vacant leadership seat does not just create gaps in the schedule. It lets service quality slip, loosens cost control, and pushes the team toward turnover. A general manager seat open for 90 days can cost a property soft reviews, rising labor costs, and roughly $24,000 in absorbed overhead before a hire is made.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>The best hospitality leaders are employed, running strong operations, and recruited constantly across brands. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever reached them first. A posting-and-waiting search misses that person every time.</p>
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
            <h2>Hospitality placement near Omaha</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/hospitality" style={{ color: '#000000', fontWeight: 600 }}>hospitality placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/hospitality/kansas-city" style={{ color: '#000000', fontWeight: 600 }}>Kansas City</Link>.
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
              { '@type': 'Question', name: 'Do you place hospitality candidates in Omaha?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent hospitality searches in Omaha and across Nebraska, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
