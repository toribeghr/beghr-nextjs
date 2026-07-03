import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trucking Payroll Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for trucking company nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/trucking' },
  openGraph: {
    title: 'Trucking Payroll Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for trucking company nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/trucking',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Trucking Payroll Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for trucking company nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "Managed Payroll vs. Hiring In-House for Trucking Companies",
    "description": "Trucking payroll outsourcing vs. hiring a payroll manager in-house. Real cost comparison for fleets of 10-200 drivers. Driver classification, per diem.",
    "slug": "/blog/payroll/trucking/managed-payroll-vs-in-house"
  },
  {
    "title": "Per Diem Pay for Truck Drivers: IRS Rules and Payroll Setup",
    "description": "How to structure per diem pay for truck drivers correctly - IRS accountable plan rules, the 2025 rate, how per diem reduces payroll taxes, and common.",
    "slug": "/blog/payroll/trucking/per-diem-pay-truck-drivers"
  },
  {
    "title": "Trucking Payroll Taxes | What Fleet Owners Need to Know",
    "description": "A plain-English guide to payroll taxes for trucking companies - FUTA, SUTA, Social Security, Medicare, multi-state withholding, and what changes when.",
    "slug": "/blog/payroll/trucking/truck-driver-payroll-taxes"
  },
  {
    "title": "Trucking Payroll: Benefits Integration",
    "description": "Managed payroll for trucking. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-benefits-integration-payroll"
  },
  {
    "title": "Trucking Payroll: Direct Deposit Setup",
    "description": "Managed payroll for trucking. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-direct-deposit-setup"
  },
  {
    "title": "Trucking Payroll: Employee Classification Guide",
    "description": "Managed payroll for trucking. Employee Classification for Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-employee-classification-guide"
  },
  {
    "title": "Trucking Payroll: Hourly vs. Salaried Guide",
    "description": "Managed payroll for trucking. Hourly vs. Salaried Employee Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-hourly-vs-salaried-payroll"
  },
  {
    "title": "Trucking Payroll: How to Switch Providers",
    "description": "Managed payroll for trucking. How to Switch Payroll Providers. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-how-to-switch-payroll-providers"
  },
  {
    "title": "Trucking Payroll: For Mid-Size Business (25-100 EE)",
    "description": "Managed payroll for trucking. Managed Payroll for Mid-Size Businesses (25-100 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at",
    "slug": "/blog/payroll/trucking/trucking-managed-payroll-mid-size"
  },
  {
    "title": "Trucking Payroll: For Small Business (<25 EE)",
    "description": "Managed payroll for trucking. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at",
    "slug": "/blog/payroll/trucking/trucking-managed-payroll-small-business"
  },
  {
    "title": "Trucking Payroll: Multi-Location Payroll Guide",
    "description": "Managed payroll for trucking. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-multi-location-payroll"
  },
  {
    "title": "Trucking Payroll: New Hire Onboarding",
    "description": "Managed payroll for trucking. New Hire Payroll Onboarding. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-new-hire-payroll-onboarding"
  },
  {
    "title": "Trucking Payroll: Overtime Rules 2026",
    "description": "Managed payroll for trucking. Overtime Rules and Payroll Compliance. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-overtime-rules-payroll"
  },
  {
    "title": "Trucking Payroll: Part-Time Workers",
    "description": "Managed payroll for trucking. Managing Part-Time Worker Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-part-time-worker-payroll"
  },
  {
    "title": "Trucking Payroll: Compliance Guide 2026",
    "description": "Managed payroll for trucking. Payroll Compliance Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-payroll-compliance-guide"
  },
  {
    "title": "Trucking Payroll: Cost Calculator Guide",
    "description": "Managed payroll for trucking. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-payroll-cost-calculator"
  },
  {
    "title": "Trucking Payroll: Must-Have Features",
    "description": "Managed payroll for trucking. Payroll Features Every Business Needs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-payroll-features-needed"
  },
  {
    "title": "Trucking Payroll: Garnishments Guide",
    "description": "Managed payroll for trucking. Payroll Garnishments: What You Need to Know. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-payroll-garnishments-guide"
  },
  {
    "title": "Trucking Payroll: Mistakes to Avoid",
    "description": "Managed payroll for trucking. Payroll Mistakes to Avoid. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-payroll-mistakes-to-avoid"
  },
  {
    "title": "Trucking Payroll: Outsourcing Cost vs. In-House",
    "description": "Managed payroll for trucking. Payroll Outsourcing Cost vs. In-House Hire. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-payroll-outsourcing-cost"
  },
  {
    "title": "Trucking Payroll: Managing Peak Season Payroll",
    "description": "Managed payroll for trucking. Managing Payroll During Peak Season. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-payroll-peak-season"
  },
  {
    "title": "Trucking Payroll: Recordkeeping Requirements",
    "description": "Managed payroll for trucking. Payroll Recordkeeping Requirements. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-payroll-recordkeeping"
  },
  {
    "title": "Trucking Payroll: Payroll Setup Guide",
    "description": "Managed payroll for trucking. Payroll Setup Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-payroll-setup-guide"
  },
  {
    "title": "Trucking Payroll: Software vs. Managed Service",
    "description": "Managed payroll for trucking. Payroll Software vs. Managed Payroll Service. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-payroll-software-vs-managed"
  },
  {
    "title": "Trucking Payroll: Payroll Tax Guide 2026",
    "description": "Managed payroll for trucking. Payroll Tax Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-payroll-tax-guide"
  },
  {
    "title": "Trucking Payroll: State Compliance Guide",
    "description": "Managed payroll for trucking. State Payroll Compliance Issues. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-state-payroll-compliance"
  },
  {
    "title": "Trucking Payroll: When to Outsource",
    "description": "Managed payroll for trucking. Signs Your Business Needs to Outsource Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-when-to-outsource-payroll"
  },
  {
    "title": "Trucking Payroll: Year-End Checklist",
    "description": "Managed payroll for trucking. Year-End Payroll Checklist. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/trucking/trucking-year-end-payroll-checklist"
  }
];

export default function TruckingPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Trucking Companies</p>
              <h1>Trucking Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for trucking company nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Trucking Payroll Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for trucking company.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Trucking Companies', item: 'https://www.beghr.com/blog/payroll/trucking' },
            ],
          })
        }}
      />
    </>
  );
}
