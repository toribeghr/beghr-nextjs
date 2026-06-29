import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Law Firm Partner Recruiters | 23-35 Days | BEG',
  description: 'Lateral partner placement for law firms in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day replacement guarantee.',
  alternates: { canonical: 'https://www.beghr.com/services/job-placement/legal/partner' },
  openGraph: {
    title: 'Law Firm Partner Recruiters | 23-35 Days | BEG',
    description: 'Lateral partner placement for law firms in 23-35 days at roughly 50% less than contingency. Milestone billing, 45-day replacement guarantee.',
    url: 'https://www.beghr.com/services/job-placement/legal/partner',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Law Firm Partner Recruiters | 23-35 Days | BEG', description: 'Lateral partner placement for law firms in 23-35 days at roughly 50% less than contingency.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('placement-legal-partner');

export default function PlacementLegalPartnerPage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Legal · Partner"
      title="A lateral partner search requires a different approach than an associate search."
      description="Lateral partners are never on job boards. They are running books of business and fielding private conversations, not responding to postings. We conduct confidential lateral partner searches in 23-35 days at roughly 50% less than contingency firms."
      calendlyLink={CALENDLY}
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
              <li>Lateral partners with portable books are never on job boards. Reaching them requires direct, confidential outreach.</li>
              <li>BEG sources passive lateral partner candidates and fills searches in 23-35 days, with an 86% fill rate.</li>
              <li>Milestone billing costs roughly 50% less than contingency, with a 45-day replacement guarantee.</li>
            </ul>
          </aside>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' }, serviceType: 'Law firm partner placement', name: 'Law Firm Partner Placement', areaServed: { '@type': 'Country', name: 'United States' }, url: 'https://www.beghr.com/services/job-placement/legal/partner', description: 'Permanent lateral partner placement for law firms in 23-35 days at roughly 50% less than contingency, with a 45-day replacement guarantee.' }) }} />

      {/* WHY THIS ROLE IS HARD TO FILL */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why Partner Searches Are Different</p>
            <h2>A lateral partner search is a private conversation, not a posting</h2>
          </div>
          <p className="reveal" style={{ fontSize: '1rem', color: '#444444', lineHeight: 1.8, marginTop: '1.5rem' }}>
            Partners with portable business are the most sought-after candidates in legal and the least likely to surface through traditional channels. They are running active client matters, managing teams, and fielding quiet conversations from other firms, not browsing job listings. Reaching them requires a sourcing approach built around confidential outreach to people who are not in the market but who might be open to the right platform, culture, or opportunity. That is the only way a partner search moves faster than the industry average.
          </p>
          <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
            {[
              {
                stat: '$25,000+',
                label: 'Per week in deferred business development',
                sub: 'A partner-level vacancy is not just a billing gap. It is client relationships that go unattended and referrals that do not materialize.',
              },
              {
                stat: '6-12 months',
                label: 'Average partner search at many firms',
                sub: 'Traditional lateral partner searches drag because they rely on candidates who surface on their own. Direct outreach collapses the timeline.',
              },
              {
                stat: 'Confidential',
                label: 'Outreach only, no public listing',
                sub: 'A visible posting signals to clients and colleagues that the partnership is in flux. Confidential sourcing avoids that entirely.',
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
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Hiring Tool</p>
            <h2>Recruiting a lateral partner? Start with a strong opportunity profile.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>A vague or generic opportunity profile kills partner interest before the conversation starts. Paste your role description and get an instant 0 to 100 score, plus the fixes that make a strong candidate take the call. Free, instant, and nothing you paste leaves your browser.</p>
          </div>
        </div>
      </section>
      <JobDescriptionGrader />

      {/* SCARCITY */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="beg-grid-2 reveal">
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Math on Waiting</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>A delayed partner search compounds.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Every month without the right partner means deferred originations, uncovered practice areas, and client relationships that drift to other firms. The cost is not just in billable hours. It is in the business that never materializes because no one was there to originate it.
              </p>
            </div>
            <div>
              <p className="eyebrow" style={{ color: '#ECAC60' }}>The Conversation Window</p>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', fontWeight: '800', marginBottom: '1rem' }}>The right lateral is talking to someone right now.</h2>
              <p style={{ color: '#cccccc', lineHeight: '1.7', fontSize: '0.97rem' }}>
                Partners with portable books get approached regularly. When one is genuinely open to a move, the conversations accelerate and the decision comes within weeks, not months. The firm that wins is the one already in the conversation. A search that waits for a candidate to surface never gets there.
              </p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a 15-Minute Discovery Call
            </Link>
            <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>No commitment. We will tell you exactly what we can do for your lateral partner search and what it costs.</p>
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
            <Link href="/services/job-placement/legal/paralegal" style={{ color: '#000000', fontWeight: 600 }}>Paralegal</Link>,{' '}
            <Link href="/services/job-placement/legal/general-counsel" style={{ color: '#000000', fontWeight: 600 }}>General Counsel</Link>.
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How long does a lateral partner search take?', acceptedAnswer: { '@type': 'Answer', text: 'On average 23-35 days from discovery call to placed hire, with an 86% fill rate on active searches.' } },
          { '@type': 'Question', name: 'Do you handle confidential lateral partner searches?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our outreach is confidential. We do not post a visible listing, which protects the firm and gives passive candidates the privacy they need to engage.' } },
          { '@type': 'Question', name: 'What size law firms do you work with for partner placement?', acceptedAnswer: { '@type': 'Answer', text: 'Law firms with 11 to 200 attorneys are our core market for partner placement. We focus on the mid-market where a single lateral partner can meaningfully move the firm forward.' } },
          { '@type': 'Question', name: 'How does milestone-based pricing work for a partner search?', acceptedAnswer: { '@type': 'Answer', text: 'Payments are tied to defined milestones rather than a single lump-sum contingency fee. Total cost is roughly 50% less than a standard contingency arrangement. The exact structure is covered on your discovery call.' } },
        ],
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Job Placement', item: 'https://www.beghr.com/services/job-placement' },
          { '@type': 'ListItem', position: 3, name: 'Legal', item: 'https://www.beghr.com/services/job-placement/legal' },
          { '@type': 'ListItem', position: 4, name: 'Partner', item: 'https://www.beghr.com/services/job-placement/legal/partner' },
        ],
      }) }} />
    </ServicePage>
  );
}
