import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'SOC Analyst Recruiters | 23-35 Days | BEG',
  description: 'SOC Analyst placement in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day replacement guarantee.',
  alternates: { canonical: 'https://www.beghr.com/services/job-placement/cybersecurity/soc-analyst' },
  openGraph: { title: 'SOC Analyst Recruiters | 23-35 Days | BEG', description: 'SOC Analyst placement in 23-35 days at roughly 50% less than contingency.', url: 'https://www.beghr.com/services/job-placement/cybersecurity/soc-analyst', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'SOC Analyst Recruiters | 23-35 Days | BEG', description: 'SOC Analyst placement in 23-35 days at roughly 50% less than contingency.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-cybersecurity-soc-analyst');

export default function PlacementCybersecuritySocanalystPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Cybersecurity · SOC Analyst"
      title="Your soc analyst search has been open too long."
      description="SOC analysts are in chronic short supply as threat volume keeps rising. We place permanent soc analyst candidates in 23-35 days at roughly 50% less than contingency firms, with a 45-day replacement guarantee."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="job-placement" industry="cybersecurity" />}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>SOC Analyst searches stall because the best candidates are passive and field multiple offers.</li>
              <li>BEG sources them directly and places permanent hires in 23-35 days, with an 86% fill rate.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"url\":\"https://www.beghr.com\"},\"serviceType\":\"SOC Analyst placement\",\"name\":\"SOC Analyst Placement\",\"areaServed\":{\"@type\":\"Country\",\"name\":\"United States\"},\"url\":\"https://www.beghr.com/services/job-placement/cybersecurity/soc-analyst\",\"description\":\"Permanent soc analyst placement in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.\"}" }} />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why This Role Is Hard To Fill</p>
            <h2>The best soc analyst candidates are not on job boards</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            SOC analysts are in chronic short supply as threat volume keeps rising. That is why a posting-and-waiting search rarely fills a soc analyst seat with the right person. We source passive soc analyst candidates directly, screen them against your specific criteria, and deliver a shortlist of 3 to 5 people, not a stack of resumes.
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
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>An open security role is risk you are carrying in real time. Alerts go uninvestigated, audit and compliance deadlines slip, and the work piles onto an already-stretched team that starts eyeing the exit. A security engineer seat open for 90 days can mean missed audit windows, deferred remediation, and roughly $45,000 in absorbed risk and overhead before the search ends.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The right candidate is available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>The best security professionals are employed, performing, and contacted by recruiters constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever reached them first. A posting-and-waiting search misses that person every time.</p>
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
            <h2>Other cybersecurity roles we place</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/cybersecurity" style={{ color: '#000000', fontWeight: 600 }}>cybersecurity placement service</Link>, or explore: <Link href="/services/job-placement/cybersecurity/ciso" style={{ color: '#000000', fontWeight: 600 }}>CISO</Link>, <Link href="/services/job-placement/cybersecurity/security-engineer" style={{ color: '#000000', fontWeight: 600 }}>Security Engineer</Link>, <Link href="/services/job-placement/cybersecurity/security-architect" style={{ color: '#000000', fontWeight: 600 }}>Security Architect</Link>, <Link href="/services/job-placement/cybersecurity/grc-analyst" style={{ color: '#000000', fontWeight: 600 }}>GRC Analyst</Link>.
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
              { '@type': 'Question', name: 'How long does it take to place a soc analyst?', acceptedAnswer: { '@type': 'Answer', text: 'On average 23-35 days from discovery call to placed hire, with an 86% fill rate on active searches.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
