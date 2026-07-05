import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Treatment Coordinator Recruiters | 23-35 Days | BEG',
  description: 'Treatment Coordinator direct hire placement in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day replacement guarantee.',
  alternates: { canonical: 'https://www.beghr.com/services/job-placement/dental/treatment-coordinator' },
  openGraph: { title: 'Treatment Coordinator Recruiters | 23-35 Days | BEG', description: 'Treatment Coordinator placement in 23-35 days at roughly 50% less than contingency.', url: 'https://www.beghr.com/services/job-placement/dental/treatment-coordinator', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Treatment Coordinator Recruiters | 23-35 Days | BEG', description: 'Treatment Coordinator placement in 23-35 days at roughly 50% less than contingency.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-dental-treatment-coordinator');

export default function PlacementDentalTreatmentcoordinatorPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Dental · Treatment Coordinator"
      title="Your treatment coordinator search has been open too long."
      description="Treatment coordinators who drive case acceptance are in constant demand across practices. We place permanent treatment coordinator candidates in 23-35 days at roughly 50% less than contingency firms, with a 45-day replacement guarantee."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="job-placement" industry="dental" />}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      {/* KEY TAKEAWAYS (AEO) */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>Treatment Coordinator searches stall because the best candidates are passive and field multiple offers.</li>
              <li>BEG sources them directly and places permanent hires in 23-35 days, with an 86% fill rate.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Service\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Business Executive Group\",\"url\":\"https://www.beghr.com\"},\"serviceType\":\"Treatment Coordinator placement\",\"name\":\"Treatment Coordinator Placement\",\"areaServed\":{\"@type\":\"Country\",\"name\":\"United States\"},\"url\":\"https://www.beghr.com/services/job-placement/dental/treatment-coordinator\",\"description\":\"Permanent treatment coordinator placement in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.\"}" }} />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why This Role Is Hard To Fill</p>
            <h2>The best treatment coordinator candidates are not on job boards</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Treatment coordinators who drive case acceptance are in constant demand across practices. That is why a posting-and-waiting search rarely fills a treatment coordinator seat with the right person. Our recruiters source passive treatment coordinator candidates directly, screen them against your specific criteria, and deliver a shortlist of 3 to 5 people, not a stack of resumes.
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
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>A dental vacancy does not just sit idle. It leaves chairs empty, pushes patients out on the schedule, and loads clinical and front-office work onto a team already covering gaps. An associate or manager seat open for 90 days can cost a practice lost production, delayed treatment plans, and roughly $25,500 in absorbed overhead before the search even ends.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The right candidate is available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>The best associate dentists, specialists, and practice managers are employed, producing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time.</p>
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
            <h2>Other dental roles we place</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/dental" style={{ color: '#000000', fontWeight: 600 }}>dental placement service</Link>, or explore: <Link href="/services/job-placement/dental/associate-dentist" style={{ color: '#000000', fontWeight: 600 }}>Associate Dentist</Link>, <Link href="/services/job-placement/dental/dental-specialist" style={{ color: '#000000', fontWeight: 600 }}>Dental Specialist</Link>, <Link href="/services/job-placement/dental/practice-manager" style={{ color: '#000000', fontWeight: 600 }}>Practice Manager</Link>, <Link href="/services/job-placement/dental/hygienist-lead" style={{ color: '#000000', fontWeight: 600 }}>Lead Hygienist</Link>.
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
              { '@type': 'Question', name: 'How long does it take to place a treatment coordinator?', acceptedAnswer: { '@type': 'Answer', text: 'On average 23-35 days from discovery call to placed hire, with an 86% fill rate on active searches.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct hire permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
