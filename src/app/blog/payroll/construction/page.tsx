import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Construction Payroll Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for construction company nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/construction' },
  openGraph: {
    title: 'Construction Payroll Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for construction company nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/construction',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Construction Payroll Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for construction company nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "Certified Payroll & Prevailing Wage | Davis-Bacon Handled.",
    "description": "Certified payroll reporting and prevailing wage compliance for construction contractors on federal and state public works projects. BEG at $25-$45 PEPM.",
    "slug": "/blog/payroll/construction/certified-payroll-prevailing-wage"
  },
  {
    "title": "Construction Payroll: Benefits Integration",
    "description": "Managed payroll for construction. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-benefits-integration-payroll"
  },
  {
    "title": "Construction Payroll: Direct Deposit Setup",
    "description": "Managed payroll for construction. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-direct-deposit-setup"
  },
  {
    "title": "Construction Payroll: Employee Classification Guide",
    "description": "Managed payroll for construction. Employee Classification for Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-employee-classification-guide"
  },
  {
    "title": "Construction Payroll: Hourly vs. Salaried Guide",
    "description": "Managed payroll for construction. Hourly vs. Salaried Employee Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-hourly-vs-salaried-payroll"
  },
  {
    "title": "Construction Payroll: How to Switch Providers",
    "description": "Managed payroll for construction. How to Switch Payroll Providers. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-how-to-switch-payroll-providers"
  },
  {
    "title": "Construction Payroll: For Mid-Size Business (25-100 ..",
    "description": "Managed payroll for construction. Managed Payroll for Mid-Size Businesses (25-100 Employees). $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-managed-payroll-mid-size"
  },
  {
    "title": "Construction Payroll: For Small Business (<25 EE)",
    "description": "Managed payroll for construction. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-managed-payroll-small-business"
  },
  {
    "title": "Construction Payroll: Multi-Location Payroll Guide",
    "description": "Managed payroll for construction. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-multi-location-payroll"
  },
  {
    "title": "Construction Payroll: New Hire Onboarding",
    "description": "Managed payroll for construction. New Hire Payroll Onboarding. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-new-hire-payroll-onboarding"
  },
  {
    "title": "Construction Payroll: Overtime Rules 2026",
    "description": "Managed payroll for construction. Overtime Rules and Payroll Compliance. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-overtime-rules-payroll"
  },
  {
    "title": "Construction Payroll: Part-Time Workers",
    "description": "Managed payroll for construction. Managing Part-Time Worker Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-part-time-worker-payroll"
  },
  {
    "title": "Construction Payroll: Compliance Guide 2026",
    "description": "Managed payroll for construction. Payroll Compliance Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-payroll-compliance-guide"
  },
  {
    "title": "Construction Payroll: Cost Calculator Guide",
    "description": "Managed payroll for construction. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-payroll-cost-calculator"
  },
  {
    "title": "Construction Payroll: Must-Have Features",
    "description": "Managed payroll for construction. Payroll Features Every Business Needs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-payroll-features-needed"
  },
  {
    "title": "Construction Payroll: Garnishments Guide",
    "description": "Managed payroll for construction. Payroll Garnishments: What You Need to Know. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-payroll-garnishments-guide"
  },
  {
    "title": "Construction Payroll: Mistakes to Avoid",
    "description": "Managed payroll for construction. Payroll Mistakes to Avoid. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-payroll-mistakes-to-avoid"
  },
  {
    "title": "Construction Payroll: Outsourcing Cost vs. In-House",
    "description": "Managed payroll for construction. Payroll Outsourcing Cost vs. In-House Hire. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-payroll-outsourcing-cost"
  },
  {
    "title": "Construction Payroll: Managing Peak Season Payroll",
    "description": "Managed payroll for construction. Managing Payroll During Peak Season. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-payroll-peak-season"
  },
  {
    "title": "Construction Payroll: Recordkeeping Requirements",
    "description": "Managed payroll for construction. Payroll Recordkeeping Requirements. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-payroll-recordkeeping"
  },
  {
    "title": "Construction Payroll: Payroll Setup Guide",
    "description": "Managed payroll for construction. Payroll Setup Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-payroll-setup-guide"
  },
  {
    "title": "Construction Payroll: Software vs. Managed Service",
    "description": "Managed payroll for construction. Payroll Software vs. Managed Payroll Service. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-payroll-software-vs-managed"
  },
  {
    "title": "Construction Payroll: Payroll Tax Guide 2026",
    "description": "Managed payroll for construction. Payroll Tax Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-payroll-tax-guide"
  },
  {
    "title": "Construction Payroll: State Compliance Guide",
    "description": "Managed payroll for construction. State Payroll Compliance Issues. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-state-payroll-compliance"
  },
  {
    "title": "Construction Payroll: When to Outsource",
    "description": "Managed payroll for construction. Signs Your Business Needs to Outsource Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-when-to-outsource-payroll"
  },
  {
    "title": "Construction Payroll: Year-End Checklist",
    "description": "Managed payroll for construction. Year-End Payroll Checklist. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/construction/construction-year-end-payroll-checklist"
  },
  {
    "title": "Construction Payroll Outsourcing | $25 PEPM vs. $80K Hire",
    "description": "Construction payroll outsourcing vs. hiring in-house. Real cost comparison for contractors: certified payroll, Davis-Bacon, union wages, multi-job.",
    "slug": "/blog/payroll/construction/contractors-payroll"
  },
  {
    "title": "Union Construction Payroll | Davis-Bacon & CBA",
    "description": "Union construction payroll: certified payroll, collective bargaining agreement rates, fringe tracking, and remittance reporting. BEG at $25-$45 PEPM.",
    "slug": "/blog/payroll/construction/union-payroll-construction"
  }
];

export default function ConstructionPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Construction Companies</p>
              <h1>Construction Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for construction company nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Construction Payroll Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for construction company.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Construction Companies', item: 'https://www.beghr.com/blog/payroll/construction' },
            ],
          })
        }}
      />
    </>
  );
}
