import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Plant Supervisor Recruiters | 23-35 Days | BEG',
  description: 'Plant Supervisor placement in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day replacement guarantee.',
  alternates: { canonical: 'https://www.beghr.com/services/job-placement/trades/plant-supervisor' },
  openGraph: { title: 'Plant Supervisor Recruiters | 23-35 Days | BEG', description: 'Plant Supervisor placement in 23-35 days at roughly 50% less than contingency.', url: 'https://www.beghr.com/services/job-placement/trades/plant-supervisor', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Plant Supervisor Recruiters | 23-35 Days | BEG', description: 'Plant Supervisor placement in 23-35 days at roughly 50% less than contingency.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-trades-plant-supervisor');

export default function PlacementTradesPlantsupervisorPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Skilled Trades · Plant Supervisor"
      title="Your plant supervisor search has been open too long."
      description="Plant and site supervisors with a safety and output track record are rarely on the market. We place permanent plant supervisor candidates in 23-35 days at roughly 50% less than contingency firms, with a 45-day replacement guarantee."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="job-placement" industry="trades" />}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Plant Supervisor searches stall because the best candidates are passive and field multiple offers.</li>
              <li>BEG sources them directly and places permanent hires in 23-35 days, with an 86% fill rate.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"url\":\"https://www.beghr.com\"},\"serviceType\":\"Plant Supervisor placement\",\"name\":\"Plant Supervisor Placement\",\"areaServed\":{\"@type\":\"Country\",\"name\":\"United States\"},\"url\":\"https://www.beghr.com/services/job-placement/trades/plant-supervisor\",\"description\":\"Permanent plant supervisor placement in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.\"}" }} />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why This Role Is Hard To Fill</p>
            <h2>The best plant supervisor candidates are not on job boards</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Plant and site supervisors with a safety and output track record are rarely on the market. That is why a posting-and-waiting search rarely fills a plant supervisor seat with the right person. We source passive plant supervisor candidates directly, screen them against your specific criteria, and deliver a shortlist of 3 to 5 people, not a stack of resumes.
          </p>
        </div>
      </section>
      {/* JOB DESCRIPTION GRADER */}


      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week this seat is open has a cost.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>Overtime to cover one unfilled trades position costs $3,000-$5,000 per week at 1.5x base pay rates. At 12 weeks, that is $36,000-$60,000 in excess labor cost - before counting missed production quotas, reduced throughput, and equipment underutilization. A 23-35 day search eliminates the bulk of that exposure.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The right candidate is available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>Licensed and certified tradespeople - electricians, HVAC techs, welders, machinists - are in short supply and high demand. When a certified tradesperson becomes available, multiple employers reach out immediately. A reactive search that waits for applications will consistently miss the most qualified candidates.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="job-placement" subline={false} />
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Related Searches</p>
            <h2>Other skilled trades roles we place</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/trades" style={{ color: '#000000', fontWeight: 600 }}>skilled trades placement service</Link>, or explore: <Link href="/services/job-placement/trades/electrician" style={{ color: '#000000', fontWeight: 600 }}>Electrician</Link>, <Link href="/services/job-placement/trades/hvac-technician" style={{ color: '#000000', fontWeight: 600 }}>HVAC Technician</Link>, <Link href="/services/job-placement/trades/maintenance-technician" style={{ color: '#000000', fontWeight: 600 }}>Maintenance Technician</Link>, <Link href="/services/job-placement/trades/production-supervisor" style={{ color: '#000000', fontWeight: 600 }}>Production Supervisor</Link>.
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
              { '@type': 'Question', name: 'How long does it take to place a plant supervisor?', acceptedAnswer: { '@type': 'Answer', text: 'On average 23-35 days from discovery call to placed hire, with an 86% fill rate on active searches.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
