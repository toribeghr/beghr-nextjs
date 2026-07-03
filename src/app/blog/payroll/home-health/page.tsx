import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Health Payroll Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for home health agency nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/home-health' },
  openGraph: {
    title: 'Home Health Payroll Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for home health agency nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/home-health',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Home Health Payroll Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for home health agency nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "EVV and Payroll Reconciliation | How to Handle EVV Data",
    "description": "How to reconcile EVV system data with payroll for home health agencies - the most common discrepancy types, how to resolve them, and how to stay.",
    "slug": "/blog/payroll/home-health/evv-payroll-reconciliation"
  },
  {
    "title": "Home Health Payroll: Benefits Integration",
    "description": "Managed payroll for home health. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-benefits-integration-payroll"
  },
  {
    "title": "Home Health Payroll: Direct Deposit Setup",
    "description": "Managed payroll for home health. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-direct-deposit-setup"
  },
  {
    "title": "Home Health Payroll: Employee Classification Guide",
    "description": "Managed payroll for home health. Employee Classification for Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-employee-classification-guide"
  },
  {
    "title": "Home Health Payroll: Hourly vs. Salaried Guide",
    "description": "Managed payroll for home health. Hourly vs. Salaried Employee Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-hourly-vs-salaried-payroll"
  },
  {
    "title": "Home Health Payroll: How to Switch Providers",
    "description": "Managed payroll for home health. How to Switch Payroll Providers. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-how-to-switch-payroll-providers"
  },
  {
    "title": "Home Health Payroll: For Mid-Size Business (25-100 EE)",
    "description": "Managed payroll for home health. Managed Payroll for Mid-Size Businesses (25-100 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call",
    "slug": "/blog/payroll/home-health/home-health-managed-payroll-mid-size"
  },
  {
    "title": "Home Health Payroll: For Small Business (<25 EE)",
    "description": "Managed payroll for home health. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call",
    "slug": "/blog/payroll/home-health/home-health-managed-payroll-small-business"
  },
  {
    "title": "Home Health Payroll: Multi-Location Payroll Guide",
    "description": "Managed payroll for home health. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-multi-location-payroll"
  },
  {
    "title": "Home Health Payroll: New Hire Onboarding",
    "description": "Managed payroll for home health. New Hire Payroll Onboarding. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-new-hire-payroll-onboarding"
  },
  {
    "title": "Home Health Payroll: Overtime Rules 2026",
    "description": "Managed payroll for home health. Overtime Rules and Payroll Compliance. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-overtime-rules-payroll"
  },
  {
    "title": "Home Health Payroll: Part-Time Workers",
    "description": "Managed payroll for home health. Managing Part-Time Worker Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-part-time-worker-payroll"
  },
  {
    "title": "Home Health Payroll: Compliance Guide 2026",
    "description": "Managed payroll for home health. Payroll Compliance Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-payroll-compliance-guide"
  },
  {
    "title": "Home Health Payroll: Cost Calculator Guide",
    "description": "Managed payroll for home health. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-payroll-cost-calculator"
  },
  {
    "title": "Home Health Payroll: Must-Have Features",
    "description": "Managed payroll for home health. Payroll Features Every Business Needs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-payroll-features-needed"
  },
  {
    "title": "Home Health Payroll: Garnishments Guide",
    "description": "Managed payroll for home health. Payroll Garnishments: What You Need to Know. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-payroll-garnishments-guide"
  },
  {
    "title": "Home Health Payroll: Mistakes to Avoid",
    "description": "Managed payroll for home health. Payroll Mistakes to Avoid. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-payroll-mistakes-to-avoid"
  },
  {
    "title": "Home Health Payroll: Outsourcing Cost vs. In-House",
    "description": "Managed payroll for home health. Payroll Outsourcing Cost vs. In-House Hire. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-payroll-outsourcing-cost"
  },
  {
    "title": "Home Health Payroll: Managing Peak Season Payroll",
    "description": "Managed payroll for home health. Managing Payroll During Peak Season. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-payroll-peak-season"
  },
  {
    "title": "Home Health Payroll: Recordkeeping Requirements",
    "description": "Managed payroll for home health. Payroll Recordkeeping Requirements. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-payroll-recordkeeping"
  },
  {
    "title": "Home Health Payroll: Payroll Setup Guide",
    "description": "Managed payroll for home health. Payroll Setup Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-payroll-setup-guide"
  },
  {
    "title": "Home Health Payroll: Software vs. Managed Service",
    "description": "Managed payroll for home health. Payroll Software vs. Managed Payroll Service. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-payroll-software-vs-managed"
  },
  {
    "title": "Home Health Payroll: Payroll Tax Guide 2026",
    "description": "Managed payroll for home health. Payroll Tax Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-payroll-tax-guide"
  },
  {
    "title": "Home Health Payroll: State Compliance Guide",
    "description": "Managed payroll for home health. State Payroll Compliance Issues. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-state-payroll-compliance"
  },
  {
    "title": "Home Health Payroll | How to Handle Travel Time Pay",
    "description": "FLSA rules on compensable travel time for home health aides and visiting nurses - what must be paid, what is excluded, and how to set up travel time.",
    "slug": "/blog/payroll/home-health/home-health-travel-time"
  },
  {
    "title": "Home Health Payroll: When to Outsource",
    "description": "Managed payroll for home health. Signs Your Business Needs to Outsource Payroll. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at",
    "slug": "/blog/payroll/home-health/home-health-when-to-outsource-payroll"
  },
  {
    "title": "Home Health Payroll: Year-End Checklist",
    "description": "Managed payroll for home health. Year-End Payroll Checklist. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/home-health/home-health-year-end-payroll-checklist"
  },
  {
    "title": "Home Health Payroll | Managed vs. In-House. $25-$45 PEPM.",
    "description": "Home health agency payroll outsourcing vs. hiring in-house. Real cost comparison for agencies with 15-150 staff. Travel time compensation, EVV.",
    "slug": "/blog/payroll/home-health/managed-payroll-vs-in-house"
  }
];

export default function HomeHealthPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Home Health Agencies</p>
              <h1>Home Health Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for home health agency nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Home Health Payroll Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for home health agency.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Home Health Agencies', item: 'https://www.beghr.com/blog/payroll/home-health' },
            ],
          })
        }}
      />
    </>
  );
}
