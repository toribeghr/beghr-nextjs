import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Engineering Recruiters in Milwaukee | BEG',
  description: 'Engineering placement in Milwaukee. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/engineering/milwaukee' },
  openGraph: { title: 'Engineering Recruiters in Milwaukee | BEG', description: 'Engineering placement in Milwaukee in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/engineering/milwaukee', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Engineering Recruiters in Milwaukee | BEG', description: 'Engineering placement in Milwaukee in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-engineering-milwaukee');

export default function PlacementEngineeringMilwaukeePage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Engineering · Milwaukee"
      title="That open engineering role in Milwaukee is costing you every week."
      description="Milwaukee is a manufacturing, finance, and healthcare market where mid-sized employers compete with Chicago. We source passive engineering candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Milwaukee Talent Market</p>
            <h2>Why engineering roles are hard to fill in Milwaukee</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Milwaukee sits in the Midwest and is a manufacturing, finance, and healthcare market where mid-sized employers compete with Chicago. The strongest engineering candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive engineering talent in Milwaukee and the surrounding WI market directly, before they ever see a listing.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that Milwaukee seat stays open is a choice.</h2>
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
            <h2>Engineering placement near Milwaukee</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/engineering" style={{ color: '#000000', fontWeight: 600 }}>engineering placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/engineering/chicago" style={{ color: '#000000', fontWeight: 600 }}>Chicago</Link>.
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
              { '@type': 'Question', name: 'Do you place engineering candidates in Milwaukee?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent engineering searches in Milwaukee and across Wisconsin, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
