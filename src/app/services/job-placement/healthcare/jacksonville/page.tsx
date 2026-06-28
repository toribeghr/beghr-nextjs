import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Healthcare Recruiters in Jacksonville | BEG',
  description: 'Healthcare placement in Jacksonville. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/healthcare/jacksonville' },
  openGraph: { title: 'Healthcare Recruiters in Jacksonville | BEG', description: 'Healthcare placement in Jacksonville in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/healthcare/jacksonville', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Healthcare Recruiters in Jacksonville | BEG', description: 'Healthcare placement in Jacksonville in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-healthcare-jacksonville');

export default function PlacementHealthcareJacksonvillePage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Healthcare · Jacksonville"
      title="That open healthcare role in Jacksonville is costing you every week."
      description="Jacksonville is a growing finance and healthcare market with a widening gap between open roles and local supply. We source passive healthcare candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Jacksonville Talent Market</p>
            <h2>Why healthcare roles are hard to fill in Jacksonville</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Jacksonville sits in the South and is a growing finance and healthcare market with a widening gap between open roles and local supply. The strongest healthcare candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive healthcare talent in Jacksonville and the surrounding FL market directly, before they ever see a listing.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that Jacksonville seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>One travel nurse covering a permanent vacancy costs $15,000-$30,000 per month more than a permanent hire. A 90-day vacancy managed with travel staff can cost your organization $45,000-$90,000 in excess spend before the search even closes.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>Strong clinical candidates are actively recruited by multiple health systems. A passive nurse who opens up to a new opportunity typically accepts an offer within 2-3 weeks. A search process that takes 90 days is not competing for those candidates - it is competing for whoever is left.</p>
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
            <h2>Healthcare placement near Jacksonville</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/healthcare" style={{ color: '#000000', fontWeight: 600 }}>healthcare placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/healthcare/orlando" style={{ color: '#000000', fontWeight: 600 }}>Orlando</Link>, <Link href="/services/job-placement/healthcare/tampa" style={{ color: '#000000', fontWeight: 600 }}>Tampa</Link>.
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
              { '@type': 'Question', name: 'Do you place healthcare candidates in Jacksonville?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent healthcare searches in Jacksonville and across Florida, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
