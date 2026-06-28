import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Associate Dentist Recruiters | 23-35 Days | BEG',
  description: 'Associate Dentist placement in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day replacement guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/dental/associate-dentist' },
  openGraph: { title: 'Associate Dentist Recruiters | 23-35 Days | BEG', description: 'Associate Dentist placement in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/dental/associate-dentist', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Associate Dentist Recruiters | 23-35 Days | BEG', description: 'Associate Dentist placement in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-dental-associate-dentist');

export default function PlacementDentalAssociatedentistPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Dental · Associate Dentist"
      title="Your associate dentist search has been open too long."
      description="Associate dentists field multiple offers, so a slow hiring process loses them every time. We place permanent associate dentist candidates in 23-35 days at roughly 50% less than contingency firms, with a 45-day replacement guarantee."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why This Role Is Hard To Fill</p>
            <h2>The best associate dentist candidates are not on job boards</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Associate dentists field multiple offers, so a slow hiring process loses them every time. That is why a posting-and-waiting search rarely fills a associate dentist seat with the right person. We source passive associate dentist candidates directly, screen them against your specific criteria, and deliver a shortlist of 3 to 5 people, not a stack of resumes.
          </p>
        </div>
      </section>

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
            <h2>Other dental roles we place</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/dental" style={{ color: '#000000', fontWeight: 600 }}>dental placement service</Link>, or explore: <Link href="/services/job-placement/dental/dental-specialist" style={{ color: '#000000', fontWeight: 600 }}>Dental Specialist</Link>, <Link href="/services/job-placement/dental/practice-manager" style={{ color: '#000000', fontWeight: 600 }}>Practice Manager</Link>, <Link href="/services/job-placement/dental/hygienist-lead" style={{ color: '#000000', fontWeight: 600 }}>Lead Hygienist</Link>, <Link href="/services/job-placement/dental/treatment-coordinator" style={{ color: '#000000', fontWeight: 600 }}>Treatment Coordinator</Link>.
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
              { '@type': 'Question', name: 'How long does it take to place a associate dentist?', acceptedAnswer: { '@type': 'Answer', text: 'On average 23-35 days from discovery call to placed hire, with an 86% fill rate on active searches.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
