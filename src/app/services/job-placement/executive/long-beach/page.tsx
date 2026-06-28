import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Executive Recruiters in Long Beach | BEG',
  description: 'Executive placement in Long Beach. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/executive/long-beach' },
  openGraph: { title: 'Executive Recruiters in Long Beach | BEG', description: 'Executive placement in Long Beach in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/executive/long-beach', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Executive Recruiters in Long Beach | BEG', description: 'Executive placement in Long Beach in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-executive-long-beach');

export default function PlacementExecutiveLongbeachPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Executive · Long Beach"
      title="That open executive role in Long Beach is costing you every week."
      description="Long Beach is a logistics, healthcare, and port-economy market drawing from the same pool as greater Los Angeles. We source passive executive candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than traditional executive search"}]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Long Beach Talent Market</p>
            <h2>Why executive roles are hard to fill in Long Beach</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Long Beach sits in the West and is a logistics, healthcare, and port-economy market drawing from the same pool as greater Los Angeles. The strongest executive candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive executive talent in Long Beach and the surrounding CA market directly, before they ever see a listing.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that Long Beach seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>An empty C-suite seat rarely stays quiet. Organizations fill the gap with external consultants ($200-$400/hour), fractional executives, or board member time - all of which cost more than the role itself. Beyond the direct cost, strategic decisions get delayed, teams lose direction, and competitors gain ground. The longer the vacancy, the more expensive the outcome.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>Senior executives are never on job boards. A CEO or VP who is open to a new opportunity is having private conversations, not submitting applications. Our sourcing approach is built around confidential outreach - proactively identifying and approaching passive candidates who would never surface through a posting.</p>
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
            <h2>Executive placement near Long Beach</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/executive" style={{ color: '#000000', fontWeight: 600 }}>executive placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/executive/los-angeles" style={{ color: '#000000', fontWeight: 600 }}>Los Angeles</Link>.
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
              { '@type': 'Question', name: 'Do you place executive candidates in Long Beach?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent executive searches in Long Beach and across California, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
