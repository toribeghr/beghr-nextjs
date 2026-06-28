import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Technology Recruiters in Baltimore | BEG',
  description: 'Technology placement in Baltimore. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/technology/baltimore' },
  openGraph: { title: 'Technology Recruiters in Baltimore | BEG', description: 'Technology placement in Baltimore in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/technology/baltimore', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Technology Recruiters in Baltimore | BEG', description: 'Technology placement in Baltimore in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-technology-baltimore');

export default function PlacementTechnologyBaltimorePage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Technology · Baltimore"
      title="That open technology role in Baltimore is costing you every week."
      description="Baltimore is a healthcare, biotech, and government-adjacent market where credentialed talent is in short supply. We source passive technology candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Baltimore Talent Market</p>
            <h2>Why technology roles are hard to fill in Baltimore</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Baltimore sits in the Northeast and is a healthcare, biotech, and government-adjacent market where credentialed talent is in short supply. The strongest technology candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive technology talent in Baltimore and the surrounding MD market directly, before they ever see a listing.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that Baltimore seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>A senior engineer billing at $150,000-$200,000 per year represents $4,000-$7,500 per week in sprint capacity. A vacant seat for 12 weeks means roughly $48,000-$90,000 in unshipped product or absorbed overload - before you factor in the compounding effect on the rest of the team.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>Software engineers and data scientists with in-demand skills receive multiple recruiter outreaches daily. When a strong candidate decides to make a move, they typically have an offer within two weeks. Passive candidates are the best candidates - and they are not responding to job board postings.</p>
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
            <h2>Technology placement near Baltimore</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/technology" style={{ color: '#000000', fontWeight: 600 }}>technology placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/technology/washington-dc" style={{ color: '#000000', fontWeight: 600 }}>Washington</Link>.
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
              { '@type': 'Question', name: 'Do you place technology candidates in Baltimore?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent technology searches in Baltimore and across Maryland, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
