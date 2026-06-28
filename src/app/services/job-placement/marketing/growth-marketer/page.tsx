import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Growth Marketer Recruiters | 23-35 Days | BEG',
  description: 'Growth Marketer placement in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day replacement guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/marketing/growth-marketer' },
  openGraph: { title: 'Growth Marketer Recruiters | 23-35 Days | BEG', description: 'Growth Marketer placement in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/marketing/growth-marketer', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Growth Marketer Recruiters | 23-35 Days | BEG', description: 'Growth Marketer placement in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-marketing-growth-marketer');

export default function PlacementMarketingGrowthmarketerPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Marketing · Growth Marketer"
      title="Your growth marketer search has been open too long."
      description="Proven growth marketers field constant inbound and are sourced, not posted. We place permanent growth marketer candidates in 23-35 days at roughly 50% less than contingency firms, with a 45-day replacement guarantee."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Growth Marketer searches stall because the best candidates are passive and field multiple offers.</li>
              <li>BEG sources them directly and places permanent hires in 23-35 days, with an 86% fill rate.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"url\":\"https://beghr.com\"},\"serviceType\":\"Growth Marketer placement\",\"name\":\"Growth Marketer Placement\",\"areaServed\":{\"@type\":\"Country\",\"name\":\"United States\"},\"url\":\"https://beghr.com/services/job-placement/marketing/growth-marketer\",\"description\":\"Permanent growth marketer placement in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.\"}" }} />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why This Role Is Hard To Fill</p>
            <h2>The best growth marketer candidates are not on job boards</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Proven growth marketers field constant inbound and are sourced, not posted. That is why a posting-and-waiting search rarely fills a growth marketer seat with the right person. We source passive growth marketer candidates directly, screen them against your specific criteria, and deliver a shortlist of 3 to 5 people, not a stack of resumes.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week this seat is open has a cost.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>A marketing vacancy does not just sit idle. It freezes campaigns, lets pipeline targets slip, and pushes strategy onto a team that is already executing at capacity. A director seat open for 90 days can cost a company a quarter of lost demand, drifting brand work, and roughly $28,500 in absorbed overhead before the search even ends.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The right candidate is available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>The best marketing leaders and growth operators are employed, performing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time.</p>
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
            <p className="eyebrow">Related Searches</p>
            <h2>Other marketing roles we place</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/marketing" style={{ color: '#000000', fontWeight: 600 }}>marketing placement service</Link>, or explore: <Link href="/services/job-placement/marketing/marketing-director" style={{ color: '#000000', fontWeight: 600 }}>Marketing Director</Link>, <Link href="/services/job-placement/marketing/demand-gen-manager" style={{ color: '#000000', fontWeight: 600 }}>Demand Generation Manager</Link>, <Link href="/services/job-placement/marketing/brand-manager" style={{ color: '#000000', fontWeight: 600 }}>Brand Manager</Link>, <Link href="/services/job-placement/marketing/content-lead" style={{ color: '#000000', fontWeight: 600 }}>Content Lead</Link>.
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
              { '@type': 'Question', name: 'How long does it take to place a growth marketer?', acceptedAnswer: { '@type': 'Answer', text: 'On average 23-35 days from discovery call to placed hire, with an 86% fill rate on active searches.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
