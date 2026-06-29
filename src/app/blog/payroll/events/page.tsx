import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Company Payroll Guides | Seasonal + Multi-State | BEG',
  description: 'Event company payroll guides covering seasonal crews, W-2 vs 1099 classification, multi-state compliance, and California AB5. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/events' },
  openGraph: {
    title: 'Event Company Payroll Guides | Seasonal + Multi-State | BEG',
    description: 'Event company payroll guides covering seasonal crews, W-2 vs 1099 classification, multi-state compliance, and California AB5. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/events',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Event Company Payroll Guides | Seasonal + Multi-State | BEG', description: 'Event company payroll guides covering seasonal crews, W-2 vs 1099 classification, multi-state compliance, and California AB5. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: "Event Company Payroll Guide: Seasonal Crews, 1099 vs W-2, and Multi-State Compliance (2026)",
    description: "Seasonal mass hire/terminate, same-day or weekly payroll for event workers, W-2 vs 1099 classification, and multi-state compliance for touring or destination events.",
    slug: "/blog/payroll/events/event-company-payroll-guide",
  },
  {
    title: "Event Staff Classification: When to Issue W-2 vs 1099 for Crew and Vendors",
    description: "IRS common law test applied to recurring event crew, sound engineers, AV techs, and other event workers who blur the employee/contractor line.",
    slug: "/blog/payroll/events/event-staff-w2-vs-1099-classification",
  },
  {
    title: "Multi-State Payroll for Event Companies: Compliance for Touring Productions and Destination Events",
    description: "SUTA exposure, state payroll tax registration, filing calendars, and nexus triggers for event companies working across multiple states.",
    slug: "/blog/payroll/events/multi-state-event-payroll-compliance",
  },
  {
    title: "California Event Payroll: AB5, 1-Day Worker Rules, and How to Stay Compliant",
    description: "California AB5 ABC test, daily overtime, meal and rest break rules, PAGA exposure, and local minimum wage compliance for event companies working in California.",
    slug: "/blog/payroll/events/california-event-payroll-rules",
  },
  {
    title: "Why Event Companies Outsource Payroll - and How Fast They Can Onboard",
    description: "The seasonal cost structure of event payroll, why in-house becomes unmanageable at scale, and what to expect from a managed payroll provider.",
    slug: "/blog/payroll/events/outsource-event-company-payroll",
  }
];

export default function EventsPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Event Companies</p>
              <h1>Event Company Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Seasonal crew payroll, worker classification, multi-state compliance, and outsourcing guides for event production and entertainment companies nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Event Company Payroll Resources</h2>
            <p>Guides covering seasonal mass hire/terminate, W-2 vs 1099 classification, multi-state touring, and California AB5 compliance.</p>
          </div>
          <div className="cards">
            {posts.map((post) => (
              <article key={post.slug} className="card reveal">
                <h3>
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <Link href={post.slug} className="btn btn--gold" style={{ marginTop: '16px', display: 'inline-block' }}>
                  Read Post
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <h2>Hand off payroll. Keep your focus where it belongs.</h2>
          <p style={{ marginBottom: '1.5rem' }}>BEG Managed Payroll handles everything at $25-$45 per employee per month. Implementation in 3-5 business days. No system migration required.</p>
          <Link href="/services/managed-payroll" className="btn btn--gold">Learn About BEG Managed Payroll</Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
              { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
              { '@type': 'ListItem', position: 4, name: 'Event Companies', item: 'https://www.beghr.com/blog/payroll/events' },
            ],
          })
        }}
      />
    </>
  );
}
