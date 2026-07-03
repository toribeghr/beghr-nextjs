import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Health Payroll, Handling Travel Time Pay | BEG',
  description: 'FLSA rules on compensable travel time for home health aides and visiting nurses -- what must be paid, what is excluded, and how to set up travel time.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/home-health/home-health-travel-time' },
  openGraph: {
    title: 'Home Health Payroll, Handling Travel Time Pay | BEG',
    description: 'FLSA rules on compensable travel time for home health aides and visiting nurses -- what must be paid, what is excluded, and how to set up travel time tra...',
    url: 'https://www.beghr.com/blog/payroll/home-health/home-health-travel-time',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Home Health Payroll, Handling Travel Time Pay | BEG', description: 'FLSA rules on compensable travel time for home health aides and visiting nurses -- what must be paid, what is excluded, and how to set up travel time tra...', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'Do I have to pay aides for travel from their home to the first client?',
    a: 'Generally no. The normal commute from an employee\'s home to the first worksite of the day is not compensable under FLSA -- it is ordinary home-to-work travel. However, if an aide is required to report to the agency\'s office first before going to the client, time spent traveling from the office to the first client is compensable.',
  },
  {
    q: 'What if a home health aide works only one client per day?',
    a: 'If an aide travels from home directly to one client, works the assignment, and travels home, that is a normal commute situation -- only the hours actually working with the client are compensable. But if that single assignment is at a location significantly further than the aide\'s normal place of business would be, the analysis can become more complex.',
  },
  {
    q: 'How should travel time between clients be recorded and paid?',
    a: 'Best practice is to have aides record the time they leave one client\'s location and the time they arrive at the next. The total minutes in transit should be logged and added to their compensable hours for the day. This can be done via a paper travel log, a timekeeping app, or EVV system timestamps if the system captures both departure and arrival.',
  },
  {
    q: 'Can I pay a lower rate for travel time than for client care time?',
    a: 'FLSA permits employers to pay a lower rate for certain non-productive time, including travel, as long as the arrangement is established in advance and the travel rate does not fall below minimum wage. If you pay a lower travel rate, this must be documented in your payroll policies and communicated to employees before they perform the work.',
  },
];

export default function HomeHealthTravelTimePage() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>See what your payroll provider really charges</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Most providers hide per-run and add-on fees. Audit your real cost per employee in about 30 seconds, free.</p>
          <a href="/resources/payroll-fee-auditor" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Run the Payroll Fee Auditor &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Home Health Payroll | How to Handle Travel Time Pay | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/home-health/home-health-travel-time"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Home Health</p>
              <h1>Home Health Agency Payroll: How to Handle Travel Time Between Clients</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                FLSA requires home health agencies to pay aides for travel time between client locations -- but not for commuting from home. The line between these two categories is where most agencies have compliance gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Home health aides often see multiple clients per day, traveling between locations between visits. Whether that travel time is compensable depends on where the aide starts, where they end, and how many clients they see. Getting this wrong is one of the most common wage-and-hour violations in home health -- and the Department of Labor has actively enforced it.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The FLSA Travel Time Framework for Home Health</h2>
        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Travel Type</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Compensable?</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Home to first client', 'No', 'Normal commute; not compensable'],
                ['Between clients (back-to-back)', 'Yes', 'Must be paid at least minimum wage'],
                ['Client to home after last visit', 'No', 'Normal commute; not compensable'],
                ['Home to office, then to first client', 'Partial -- office to client is compensable', 'If required to check in at office'],
                ['Travel during a continuous workday (lunch or break)', 'Depends', 'If travel is during bona fide meal break, generally no'],
                ['Overnight travel for multi-day assignment', 'Partial -- travel during work hours is compensable', 'Complex; consult counsel for specifics'],
              ].map(([type, comp, notes], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 500 }}>{type}</td>
                  <td style={{ padding: '10px 14px', color: comp === 'Yes' ? '#27ae60' : comp === 'No' ? '#c0392b' : '#f39c12', fontWeight: 600, fontSize: '0.85rem' }}>{comp}</td>
                  <td style={{ padding: '10px 14px', color: '#555' }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>How to Track and Pay Inter-Client Travel</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Most home health agencies use one of three approaches to capture inter-client travel time:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {[
            { label: 'EVV system timestamps', body: 'Many EVV platforms capture both clock-out from the prior client and clock-in at the next client. The gap between these timestamps is the inter-client travel time. This is the most reliable method -- the data exists in the system and can be exported for payroll calculation.' },
            { label: 'Mobile timekeeping apps', body: 'Apps like When I Work, Homebase, or TSheets allow aides to log departure from one site and arrival at the next. Many home health agencies use their existing scheduling app for this purpose.' },
            { label: 'Paper travel logs', body: 'A simple paper form that aides complete showing departure time, mileage, and arrival time. Functional but creates a manual data-entry step in payroll. More prone to after-the-fact completion and accuracy issues.' },
          ].map(({ label, body }) => (
            <div key={label} style={{ border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{label}</strong>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.6', fontSize: '0.9rem' }}>{body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Impact on Overtime</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Including inter-client travel in paid hours increases total weekly hours -- and can push full-time aides over the 40-hour threshold for overtime. Agencies that do not track or pay travel time are typically also underreporting total hours, which means their overtime exposure is compounded.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          When the DOL investigates a home health agency for travel time violations, they typically look at records for two years back (three if willful). Back pay owed to all affected employees, plus an equal amount in liquidated damages, is the standard result of a sustained investigation. For agencies with 30 to 100 aides, this can be a material financial liability.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{q}</strong>
              <p style={{ margin: 0, lineHeight: '1.65', color: '#444' }}>{a}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Fix travel time tracking before it becomes a DOL investigation</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages home health payroll including inter-client travel time, EVV reconciliation, and multi-state compliance. 15-minute call.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/home-health">Managed Payroll for Home Health Agencies</Link> -- full service details</li>
            <li><Link href="/blog/payroll/home-health/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Home Health</Link> -- cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Home Health Travel Time', item: 'https://www.beghr.com/blog/payroll/home-health/home-health-travel-time' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "EVV Payroll Reconciliation, Fixing Data Mismatches", excerpt: "How to reconcile EVV system data with payroll for home health agencies -- the most common...", href: "/blog/payroll/home-health/evv-payroll-reconciliation" },
        { category: "Payroll", title: "Home Health Payroll, Integrating Benefits Right", excerpt: "Managed payroll for home health. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive....", href: "/blog/payroll/home-health/home-health-benefits-integration-payroll" },
        { category: "Payroll", title: "Home Health Payroll, Direct Deposit Setup Steps", excerpt: "Managed payroll for home health. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Book a free...", href: "/blog/payroll/home-health/home-health-direct-deposit-setup" },
      ]} />
      </article>
  );
}