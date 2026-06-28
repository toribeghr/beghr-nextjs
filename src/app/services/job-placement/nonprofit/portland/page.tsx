import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Nonprofit Recruiters in Portland | BEG',
  description: 'Nonprofit placement in Portland. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/nonprofit/portland' },
  openGraph: { title: 'Nonprofit Recruiters in Portland | BEG', description: 'Nonprofit placement in Portland in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/nonprofit/portland', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Nonprofit Recruiters in Portland | BEG', description: 'Nonprofit placement in Portland in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-nonprofit-portland');

export default function PlacementNonprofitPortlandPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Nonprofit · Portland"
      title="That open nonprofit role in Portland is costing you every week."
      description="Portland is a tech, manufacturing, and healthcare market where specialized candidates weigh lifestyle heavily. We source passive nonprofit candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Portland Talent Market</p>
            <h2>Why nonprofit roles are hard to fill in Portland</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Portland sits in the West and is a tech, manufacturing, and healthcare market where specialized candidates weigh lifestyle heavily. The strongest nonprofit candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive nonprofit talent in Portland and the surrounding OR market directly, before they ever see a listing.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that Portland seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>A vacant leadership seat does not just pause work. It stalls grant cycles, lets donor relationships cool, and pushes program delivery onto staff who are already underpaid and overextended. A development director seat open for 90 days can mean a missed grant deadline, a lapsed major-gift ask, and roughly $25,000 in absorbed overhead before a hire is made.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>The strongest nonprofit leaders are employed, committed to a current mission, and quietly courted by larger organizations. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever reached them first. A job board posting almost never reaches that person.</p>
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
            <h2>Nonprofit placement near Portland</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/nonprofit" style={{ color: '#000000', fontWeight: 600 }}>nonprofit placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/nonprofit/seattle" style={{ color: '#000000', fontWeight: 600 }}>Seattle</Link>.
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
              { '@type': 'Question', name: 'Do you place nonprofit candidates in Portland?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent nonprofit searches in Portland and across Oregon, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
