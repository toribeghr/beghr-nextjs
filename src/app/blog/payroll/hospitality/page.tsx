import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hospitality Payroll Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for restaurant and hospitality nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/hospitality' },
  openGraph: {
    title: 'Hospitality Payroll Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for restaurant and hospitality nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/hospitality',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Hospitality Payroll Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for restaurant and hospitality nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "Bar & Nightclub Payroll | Tip Pools & Late-Night Staff",
    "description": "Bar and nightclub payroll outsourcing: tip credits, tip pools, late-night shift rules, bartender classification. BEG manages it all at $25-$45 PEPM.",
    "slug": "/blog/payroll/hospitality/bar-nightclub-payroll"
  },
  {
    "title": "Hotel Payroll | Tipped Staff, Shifts & Multi-State",
    "description": "Hotel payroll outsourcing: tip credits, banquet overtime, multi-department classification, multi-state compliance. BEG manages it all at $25-$45 PEPM.",
    "slug": "/blog/payroll/hospitality/hotel-payroll"
  },
  {
    "title": "Restaurant Payroll | Tipped Staff & Tip Pools. Handled.",
    "description": "Restaurant payroll outsourcing vs. hiring in-house. Tip credit rules, FLSA tip pooling, split-shift premiums, high-turnover W-2 volume. Save $55K-$90K.",
    "slug": "/blog/payroll/hospitality/restaurant"
  },
  {
    "title": "Restaurant Payroll: Benefits Integration",
    "description": "Managed payroll for restaurants. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-benefits-integration-payroll"
  },
  {
    "title": "Restaurant Payroll: Direct Deposit Setup",
    "description": "Managed payroll for restaurants. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-direct-deposit-setup"
  },
  {
    "title": "Restaurant Payroll: Employee Classification Guide",
    "description": "Managed payroll for restaurants. Employee Classification for Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-employee-classification-guide"
  },
  {
    "title": "Restaurant Payroll: Hourly vs. Salaried Guide",
    "description": "Managed payroll for restaurants. Hourly vs. Salaried Employee Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-hourly-vs-salaried-payroll"
  },
  {
    "title": "Restaurant Payroll: How to Switch Providers",
    "description": "Managed payroll for restaurants. How to Switch Payroll Providers. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-how-to-switch-payroll-providers"
  },
  {
    "title": "Restaurant Payroll: For Mid-Size Business (25-100 EE)",
    "description": "Managed payroll for restaurants. Managed Payroll for Mid-Size Businesses (25-100 Employees). $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-managed-payroll-mid-size"
  },
  {
    "title": "Restaurant Payroll: For Small Business (<25 EE)",
    "description": "Managed payroll for restaurants. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-managed-payroll-small-business"
  },
  {
    "title": "Restaurant Payroll: Multi-Location Payroll Guide",
    "description": "Managed payroll for restaurants. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-multi-location-payroll"
  },
  {
    "title": "Restaurant Payroll: New Hire Onboarding",
    "description": "Managed payroll for restaurants. New Hire Payroll Onboarding. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-new-hire-payroll-onboarding"
  },
  {
    "title": "Restaurant Payroll: Overtime Rules 2026",
    "description": "Managed payroll for restaurants. Overtime Rules and Payroll Compliance. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-overtime-rules-payroll"
  },
  {
    "title": "Restaurant Payroll: Part-Time Workers",
    "description": "Managed payroll for restaurants. Managing Part-Time Worker Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-part-time-worker-payroll"
  },
  {
    "title": "Restaurant Payroll: Compliance Guide 2026",
    "description": "Managed payroll for restaurants. Payroll Compliance Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-payroll-compliance-guide"
  },
  {
    "title": "Restaurant Payroll: Cost Calculator Guide",
    "description": "Managed payroll for restaurants. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-payroll-cost-calculator"
  },
  {
    "title": "Restaurant Payroll: Must-Have Features",
    "description": "Managed payroll for restaurants. Payroll Features Every Business Needs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-payroll-features-needed"
  },
  {
    "title": "Restaurant Payroll: Garnishments Guide",
    "description": "Managed payroll for restaurants. Payroll Garnishments: What You Need to Know. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-payroll-garnishments-guide"
  },
  {
    "title": "Restaurant Payroll: Mistakes to Avoid",
    "description": "Managed payroll for restaurants. Payroll Mistakes to Avoid. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-payroll-mistakes-to-avoid"
  },
  {
    "title": "Restaurant Payroll: Outsourcing Cost vs. In-House",
    "description": "Managed payroll for restaurants. Payroll Outsourcing Cost vs. In-House Hire. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-payroll-outsourcing-cost"
  },
  {
    "title": "Restaurant Payroll: Managing Peak Season Payroll",
    "description": "Managed payroll for restaurants. Managing Payroll During Peak Season. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-payroll-peak-season"
  },
  {
    "title": "Restaurant Payroll: Recordkeeping Requirements",
    "description": "Managed payroll for restaurants. Payroll Recordkeeping Requirements. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-payroll-recordkeeping"
  },
  {
    "title": "Restaurant Payroll: Payroll Setup Guide",
    "description": "Managed payroll for restaurants. Payroll Setup Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-payroll-setup-guide"
  },
  {
    "title": "Restaurant Payroll: Software vs. Managed Service",
    "description": "Managed payroll for restaurants. Payroll Software vs. Managed Payroll Service. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-payroll-software-vs-managed"
  },
  {
    "title": "Restaurant Payroll: Payroll Tax Guide 2026",
    "description": "Managed payroll for restaurants. Payroll Tax Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-payroll-tax-guide"
  },
  {
    "title": "Restaurant Payroll: State Compliance Guide",
    "description": "Managed payroll for restaurants. State Payroll Compliance Issues. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-state-payroll-compliance"
  },
  {
    "title": "Restaurant Payroll: When to Outsource",
    "description": "Managed payroll for restaurants. Signs Your Business Needs to Outsource Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-when-to-outsource-payroll"
  },
  {
    "title": "Restaurant Payroll: Year-End Checklist",
    "description": "Managed payroll for restaurants. Year-End Payroll Checklist. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/hospitality/restaurants-year-end-payroll-checklist"
  }
];

export default function HospitalityPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Hospitality Businesses</p>
              <h1>Hospitality Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for restaurant and hospitality nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Hospitality Payroll Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for restaurant and hospitality.</p>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
                    <RelatedPosts posts={[
        { category: "Payroll", title: "CPA Firm Payroll Guides | Partner Draws + Busy Season", excerpt: "CPA and accounting firm payroll guides covering partner draws, busy season overtime, remote staff,...", href: "/blog/payroll/accounting-cpa" },
        { category: "Payroll", title: "Farm & Agriculture Payroll Guides | H-2A + Seasonal", excerpt: "Agriculture payroll guides covering H-2A workers, seasonal crews, piece rate compliance, MSPA...", href: "/blog/payroll/agriculture" },
        { category: "Payroll", title: "Architecture Firm Payroll Guides | Project Billing + Partners", excerpt: "Architecture firm payroll guides covering project-coded billing, licensed staff, partner draws, and...", href: "/blog/payroll/architecture" },
      ]} />
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
              { '@type': 'ListItem', position: 4, name: 'Hospitality Businesses', item: 'https://www.beghr.com/blog/payroll/hospitality' },
            ],
          })
        }}
      />
    </>
  );
}
