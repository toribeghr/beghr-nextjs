import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Design Director Recruiters | 23-35 Days | BEG',
  description: 'Design Director placement in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day replacement guarantee.',
  alternates: { canonical: 'https://www.beghr.com/services/job-placement/architecture/design-director' },
  openGraph: { title: 'Design Director Recruiters | 23-35 Days | BEG', description: 'Design Director placement in 23-35 days at roughly 50% less than contingency.', url: 'https://www.beghr.com/services/job-placement/architecture/design-director', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Design Director Recruiters | 23-35 Days | BEG', description: 'Design Director placement in 23-35 days at roughly 50% less than contingency.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-architecture-design-director');

export default function PlacementArchitectureDesigndirectorPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Architecture · Design Director"
      title="Your design director search has been open too long."
      description="Design directors who set a studio\'s creative direction are scarce and quickly off the market. We place permanent design director candidates in 23-35 days at roughly 50% less than contingency firms, with a 45-day replacement guarantee."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="job-placement" industry="architecture" />}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Design Director searches stall because the best candidates are passive and field multiple offers.</li>
              <li>BEG sources them directly and places permanent hires in 23-35 days, with an 86% fill rate.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"url\":\"https://www.beghr.com\"},\"serviceType\":\"Design Director placement\",\"name\":\"Design Director Placement\",\"areaServed\":{\"@type\":\"Country\",\"name\":\"United States\"},\"url\":\"https://www.beghr.com/services/job-placement/architecture/design-director\",\"description\":\"Permanent design director placement in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.\"}" }} />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why This Role Is Hard To Fill</p>
            <h2>The best design director candidates are not on job boards</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Design directors who set a studio\'s creative direction are scarce and quickly off the market. That is why a posting-and-waiting search rarely fills a design director seat with the right person. We source passive design director candidates directly, screen them against your specific criteria, and deliver a shortlist of 3 to 5 people, not a stack of resumes.
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
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>A vacant architect seat does not just slow a project. It pushes deadlines, forces a firm to decline new commissions, and stretches the remaining team past capacity. A project architect seat open for 90 days can cost a firm lost billable hours, a turned-down project, and roughly $28,500 in absorbed overhead before the search closes.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The right candidate is available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>The best architects and design leaders are employed, working on projects they care about, and recruited regularly by competing firms. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time.</p>
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
            <h2>Other architecture roles we place</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/architecture" style={{ color: '#000000', fontWeight: 600 }}>architecture placement service</Link>, or explore: <Link href="/services/job-placement/architecture/project-architect" style={{ color: '#000000', fontWeight: 600 }}>Project Architect</Link>, <Link href="/services/job-placement/architecture/bim-manager" style={{ color: '#000000', fontWeight: 600 }}>BIM Manager</Link>, <Link href="/services/job-placement/architecture/project-manager" style={{ color: '#000000', fontWeight: 600 }}>Architecture Project Manager</Link>, <Link href="/services/job-placement/architecture/principal" style={{ color: '#000000', fontWeight: 600 }}>Principal</Link>.
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
              { '@type': 'Question', name: 'How long does it take to place a design director?', acceptedAnswer: { '@type': 'Answer', text: 'On average 23-35 days from discovery call to placed hire, with an 86% fill rate on active searches.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
