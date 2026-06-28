import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Accounting & CPA Recruiters in Fort Worth | BEG',
  description: 'Accounting & CPA placement in Fort Worth. Permanent hires in 23-35 days at roughly 50% less than contingency. 45-day guarantee.',
  alternates: { canonical: 'https://beghr.com/services/job-placement/accounting-cpa/fort-worth' },
  openGraph: { title: 'Accounting & CPA Recruiters in Fort Worth | BEG', description: 'Accounting & CPA placement in Fort Worth in 23-35 days at roughly 50% less than contingency.', url: 'https://beghr.com/services/job-placement/accounting-cpa/fort-worth', siteName: 'Business Executive Group', images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Accounting & CPA Recruiters in Fort Worth | BEG', description: 'Accounting & CPA placement in Fort Worth in 23-35 days at roughly 50% less than contingency.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-accounting-cpa-fort-worth');

export default function PlacementAccountingcpaFortworthPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Accounting & CPA · Fort Worth"
      title="That open accounting & cpa role in Fort Worth is costing you every week."
      description="Fort Worth is a fast-growing DFW market where employers compete with Dallas for the same shortlist of candidates. We source passive accounting & cpa candidates directly and place permanent hires in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
      heroStats={[{"value":"23-35","label":"Days to fill on average"},{"value":"86%","label":"Fill rate on active searches"},{"value":"~50%","label":"Less than contingency pricing"}]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Fort Worth Talent Market</p>
            <h2>Why accounting & cpa roles are hard to fill in Fort Worth</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Fort Worth sits in the South and is a fast-growing DFW market where employers compete with Dallas for the same shortlist of candidates. The strongest accounting & cpa candidates here are already employed and are contacted constantly, which means a job posting reaches the people who are easiest to find, not the ones you actually want. We reach the passive accounting & cpa talent in Fort Worth and the surrounding TX market directly, before they ever see a listing.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>Every week that Fort Worth seat stays open is a choice.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>A senior accounting vacancy does not just sit idle. It delays month-end close, stretches audit timelines, and pushes work onto a team that is already at capacity. A controller seat open for 90 days can cost a company a late close, a strained audit, and roughly $33,000 in absorbed overhead before the search even ends.</p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Talent Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem' }}>The best candidates are available for a few weeks.</h2>
              <p style={{ color: '#cccccc', lineHeight: 1.7, fontSize: '0.97rem' }}>The best accountants and CPAs are employed, performing well, and contacted constantly. When one opens up to a move, the decision window is two to three weeks, and the offer usually comes from whoever was already in front of them. A posting-and-waiting search misses that person every time.</p>
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
            <h2>Accounting & CPA placement near Fort Worth</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/accounting-cpa" style={{ color: '#000000', fontWeight: 600 }}>accounting & cpa placement service</Link>, or explore nearby markets: <Link href="/services/job-placement/accounting-cpa/dallas" style={{ color: '#000000', fontWeight: 600 }}>Dallas</Link>, <Link href="/services/job-placement/accounting-cpa/arlington" style={{ color: '#000000', fontWeight: 600 }}>Arlington</Link>.
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
              { '@type': 'Question', name: 'Do you place accounting & cpa candidates in Fort Worth?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We run permanent accounting & cpa searches in Fort Worth and across Texas, sourcing passive candidates directly. Average time to fill is 23-35 days.' } },
              { '@type': 'Question', name: 'How is this different from a staffing agency?', acceptedAnswer: { '@type': 'Answer', text: 'Direct permanent placement with milestone-based pricing. Not a staffing or temp agency.' } },
              { '@type': 'Question', name: 'What does it cost?', acceptedAnswer: { '@type': 'Answer', text: 'Roughly 50% less than a standard contingency arrangement, billed against defined milestones.' } },
            ],
          }),
        }}
      />
    </ServicePage>
  );
}
