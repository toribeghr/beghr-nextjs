import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cannabis Business Payroll Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for cannabis business nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/cannabis' },
  openGraph: {
    title: 'Cannabis Business Payroll Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for cannabis business nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/cannabis',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Cannabis Business Payroll Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for cannabis business nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "Cannabis Payroll: Benefits Integration",
    "description": "Managed payroll for cannabis. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-benefits-integration-payroll"
  },
  {
    "title": "Cannabis Payroll: Direct Deposit Setup",
    "description": "Managed payroll for cannabis. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-direct-deposit-setup"
  },
  {
    "title": "Cannabis Payroll: Employee Classification Guide",
    "description": "Managed payroll for cannabis. Employee Classification for Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-employee-classification-guide"
  },
  {
    "title": "Cannabis Payroll: Hourly vs. Salaried Guide",
    "description": "Managed payroll for cannabis. Hourly vs. Salaried Employee Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-hourly-vs-salaried-payroll"
  },
  {
    "title": "Cannabis Payroll: How to Switch Providers",
    "description": "Managed payroll for cannabis. How to Switch Payroll Providers. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-how-to-switch-payroll-providers"
  },
  {
    "title": "Cannabis Payroll: For Mid-Size Business (25-100 EE)",
    "description": "Managed payroll for cannabis. Managed Payroll for Mid-Size Businesses (25-100 Employees). $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-managed-payroll-mid-size"
  },
  {
    "title": "Cannabis Payroll: For Small Business (<25 EE)",
    "description": "Managed payroll for cannabis. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-managed-payroll-small-business"
  },
  {
    "title": "Cannabis Payroll: Multi-Location Payroll Guide",
    "description": "Managed payroll for cannabis. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-multi-location-payroll"
  },
  {
    "title": "Cannabis Payroll: New Hire Onboarding",
    "description": "Managed payroll for cannabis. New Hire Payroll Onboarding. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-new-hire-payroll-onboarding"
  },
  {
    "title": "Cannabis Payroll: Overtime Rules 2026",
    "description": "Managed payroll for cannabis. Overtime Rules and Payroll Compliance. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-overtime-rules-payroll"
  },
  {
    "title": "Cannabis Payroll: Part-Time Workers",
    "description": "Managed payroll for cannabis. Managing Part-Time Worker Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-part-time-worker-payroll"
  },
  {
    "title": "Cannabis 280E & Payroll | What You Can and Can",
    "description": "How 280E affects cannabis payroll: COGS deductions, disallowed expenses, and how to structure compensation to minimize your tax exposure.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-280e"
  },
  {
    "title": "Cannabis Payroll & Banking | Pay Employees When Banks Won",
    "description": "Cannabis payroll banking options: cannabis-friendly banks, payroll processors, and cash compliance when traditional banks won\\",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-banking"
  },
  {
    "title": "Cannabis Payroll: Compliance Guide 2026",
    "description": "Managed payroll for cannabis. Payroll Compliance Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-compliance-guide"
  },
  {
    "title": "Cannabis Payroll: Cost Calculator Guide",
    "description": "Managed payroll for cannabis. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-cost-calculator"
  },
  {
    "title": "Cannabis Payroll: Must-Have Features",
    "description": "Managed payroll for cannabis. Payroll Features Every Business Needs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-features-needed"
  },
  {
    "title": "Cannabis Payroll: Garnishments Guide",
    "description": "Managed payroll for cannabis. Payroll Garnishments: What You Need to Know. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-garnishments-guide"
  },
  {
    "title": "Cannabis Payroll: Mistakes to Avoid",
    "description": "Managed payroll for cannabis. Payroll Mistakes to Avoid. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-mistakes-to-avoid"
  },
  {
    "title": "Cannabis Payroll: Outsourcing Cost vs. In-House",
    "description": "Managed payroll for cannabis. Payroll Outsourcing Cost vs. In-House Hire. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-outsourcing-cost"
  },
  {
    "title": "Cannabis Payroll: Managing Peak Season Payroll",
    "description": "Managed payroll for cannabis. Managing Payroll During Peak Season. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-peak-season"
  },
  {
    "title": "Cannabis Payroll: Recordkeeping Requirements",
    "description": "Managed payroll for cannabis. Payroll Recordkeeping Requirements. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-recordkeeping"
  },
  {
    "title": "Cannabis Payroll: Payroll Setup Guide",
    "description": "Managed payroll for cannabis. Payroll Setup Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-setup-guide"
  },
  {
    "title": "Cannabis Payroll: Software vs. Managed Service",
    "description": "Managed payroll for cannabis. Payroll Software vs. Managed Payroll Service. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-software-vs-managed"
  },
  {
    "title": "Cannabis Payroll: Payroll Tax Guide 2026",
    "description": "Managed payroll for cannabis. Payroll Tax Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-payroll-tax-guide"
  },
  {
    "title": "Cannabis Payroll: State Compliance Guide",
    "description": "Managed payroll for cannabis. State Payroll Compliance Issues. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-state-payroll-compliance"
  },
  {
    "title": "Cannabis Payroll: When to Outsource",
    "description": "Managed payroll for cannabis. Signs Your Business Needs to Outsource Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-when-to-outsource-payroll"
  },
  {
    "title": "Cannabis Payroll: Year-End Checklist",
    "description": "Managed payroll for cannabis. Year-End Payroll Checklist. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/cannabis/cannabis-year-end-payroll-checklist"
  },
  {
    "title": "Managed Payroll vs. Hiring In-House for Cannabis Businesses",
    "description": "Cannabis business payroll outsourcing vs. hiring in-house. Real cost comparison for dispensaries, cultivators, and processors. 280E, cash payroll.",
    "slug": "/blog/payroll/cannabis/managed-payroll-vs-in-house"
  }
];

export default function CannabisPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Cannabis Businesses</p>
              <h1>Cannabis Business Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for cannabis business nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Cannabis Business Payroll Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for cannabis business.</p>
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
      <p style={{ fontSize: '0.85rem', color: '#666666', margin: '2.5rem 0 0' }}>Authoritative source: <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor: Wage and Hour Division</a></p>
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
              { '@type': 'ListItem', position: 4, name: 'Cannabis Businesses', item: 'https://www.beghr.com/blog/payroll/cannabis' },
            ],
          })
        }}
      />
    </>
  );
}
