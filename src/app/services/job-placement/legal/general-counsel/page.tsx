import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'General Counsel Recruiters | 23-35 Days | BEG',
  description: 'General counsel search for companies and in-house legal teams. Permanent placement in 23-35 days at roughly 50% less than contingency.',
  alternates: { canonical: 'https://www.beghr.com/services/job-placement/legal/general-counsel' },
  openGraph: {
    title: 'General Counsel Recruiters | 23-35 Days | BEG',
    description: 'General counsel search for companies and in-house legal teams. Permanent placement in 23-35 days at roughly 50% less than contingency.',
    url: 'https://www.beghr.com/services/job-placement/legal/general-counsel',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'General Counsel Recruiters | 23-35 Days | BEG', description: 'General counsel search in 23-35 days at roughly 50% less than contingency.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-legal-general-counsel');

export default function PlacementLegalGeneralCounselPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Legal · General Counsel"
      title="A general counsel search is one of the most consequential hires your company will make."
      description="The right GC owns legal risk across the entire business. They are never on job boards. We run confidential general counsel searches in 23-35 days at roughly 50% less than contingency firms, with a 45-day replacement guarantee."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="job-placement" industry="legal" />}
      heroStats={[
        { value: '23-35', label: 'Days to fill on average' },
        { value: '86%', label: 'Fill rate on active searches' },
        { value: '~50%', label: 'Less than contingency pricing' },
      ]}
    >
      {/* KEY TAKEAWAYS */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
            <p style={{ fontWeight: 800, color: '#000000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
            <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333333' }}>
              <li>General counsel candidates are never on job boards. Reaching them requires direct, confidential outreach.</li>
              <li>BEG sources passive GC candidates and fills searches in 23-35 days, with an 86% fill rate.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' }, serviceType: 'General counsel placement', name: 'General Counsel Placement', areaServed: { '@type': 'Country', name: 'United States' }, url: 'https://www.beghr.com/services/job-placement/legal/general-counsel', description: 'Permanent general counsel placement in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.' }) }} />

      {/* WHY THIS ROLE IS HARD TO FILL */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why General Counsel Searches Are Different</p>
            <h2>A GC who fits is not searchable. They are sourceable.</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            A general counsel candidate needs to fit the company, the CEO relationship, the industry context, and the legal risk profile, all at once. That specificity rules out most candidates who happen to be between positions. The right GC is employed, satisfied, and not looking. Reaching them means confidential, direct outreach built around the specific opportunity you can offer. That is the only way a general counsel search moves at speed without sacrificing quality.
          </p>
          <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
            {[
              {
                stat: '$50,000+',
                label: 'Per month in unmanaged legal risk',
                sub: 'Without GC oversight, legal decisions default to outside counsel at full rack rates, or to no one at all. Both outcomes are expensive.',
              },
              {
                stat: '6-18 months',
                label: 'Average GC search without direct sourcing',
                sub: 'Companies that wait for the right candidate to surface spend a year absorbing outside counsel fees and unmanaged risk.',
              },
              {
                stat: 'Confidential',
                label: 'Outreach only, never a visible listing',
                sub: 'A public posting for a GC role signals instability to investors, lenders, and counterparties. We keep the search private.',
              },
            ].map(({ stat, label, sub }) => (
              <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOB DESCRIPTION GRADER */}

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>Every month without a GC is outside counsel fees plus unmanaged risk.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Companies in GC transition often manage the gap with outside counsel at $400-$900 per hour. A six-month gap commonly costs $100,000 or more in outside legal spend, on top of every contract, negotiation, and compliance decision that went unreviewed or unadvised.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Conversation Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The best GC candidates decide quickly when approached right.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Senior legal leaders evaluate new opportunities privately and move faster than most hiring managers expect once the right opportunity surfaces. The company that wins is the one that reached them first with a compelling, well-framed pitch, not a job posting they never saw.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <PricingCta service="job-placement" subline={false} />
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>No commitment. We will tell you exactly what we can do for your general counsel search and what it costs.</p>
          </div>
        </div>
      </section>

      {/* RELATED ROLES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Related Searches</p>
            <h2>Other legal roles we place</h2>
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '1rem', color: '#444444' }}>
            See our <Link href="/services/job-placement/legal" style={{ color: '#000000', fontWeight: 600 }}>legal placement service</Link>, or explore:{' '}
            <Link href="/services/job-placement/legal/litigation-associate" style={{ color: '#000000', fontWeight: 600 }}>Litigation Associate</Link>,{' '}
            <Link href="/services/job-placement/legal/partner" style={{ color: '#000000', fontWeight: 600 }}>Partner</Link>,{' '}
            <Link href="/services/job-placement/legal/paralegal" style={{ color: '#000000', fontWeight: 600 }}>Paralegal</Link>.
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How long does a general counsel search take?', acceptedAnswer: { '@type': 'Answer', text: 'On average 23-35 days from discovery call to placed hire, with an 86% fill rate on active searches.' } },
          { '@type': 'Question', name: 'Do you handle confidential GC searches?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our outreach is always confidential. We do not post a visible listing, which protects the company and gives passive candidates the privacy they need to engage.' } },
          { '@type': 'Question', name: 'What size companies do you place GCs for?', acceptedAnswer: { '@type': 'Answer', text: 'We place general counsel and senior legal officers for companies across industries, typically those growing to the point where in-house legal leadership is becoming essential.' } },
          { '@type': 'Question', name: 'How does milestone-based pricing work for a GC search?', acceptedAnswer: { '@type': 'Answer', text: 'Payments are tied to defined milestones rather than a single lump-sum contingency fee. Total cost is roughly 50% less than a standard contingency arrangement. The exact structure is covered on your discovery call.' } },
        ],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Job Placement', item: 'https://www.beghr.com/services/job-placement' },
          { '@type': 'ListItem', position: 3, name: 'Legal', item: 'https://www.beghr.com/services/job-placement/legal' },
          { '@type': 'ListItem', position: 4, name: 'General Counsel', item: 'https://www.beghr.com/services/job-placement/legal/general-counsel' },
        ],
      }) }} />
    </ServicePage>
  );
}
