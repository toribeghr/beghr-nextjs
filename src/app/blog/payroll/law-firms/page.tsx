import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Law Firm Payroll Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for law firm nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/law-firms' },
  openGraph: {
    title: 'Law Firm Payroll Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for law firm nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/law-firms',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Law Firm Payroll Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for law firm nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "Law Firms: Integrating Benefits with Payroll",
    "description": "Managed payroll for law firms. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-benefits-integration-payroll"
  },
  {
    "title": "Law Firms: Setting Up Direct Deposit",
    "description": "Managed payroll for law firms. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-direct-deposit-setup"
  },
  {
    "title": "Law Firms: Employee Classification for Payroll",
    "description": "Managed payroll for law firms. Employee Classification for Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-employee-classification-guide"
  },
  {
    "title": "Law Firms: Hourly vs. Salaried Employee Payroll",
    "description": "Managed payroll for law firms. Hourly vs. Salaried Employee Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-hourly-vs-salaried-payroll"
  },
  {
    "title": "Law Firms: How to Switch Payroll Providers",
    "description": "Managed payroll for law firms. How to Switch Payroll Providers. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-how-to-switch-payroll-providers"
  },
  {
    "title": "Law Firms: Managed Payroll for Mid-Size Businesses (25-100 E",
    "description": "Managed payroll for law firms. Managed Payroll for Mid-Size Businesses (25-100 Employees). $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-managed-payroll-mid-size"
  },
  {
    "title": "Law Firms: Managed Payroll for Small Businesses (Under 25 Em",
    "description": "Managed payroll for law firms. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-managed-payroll-small-business"
  },
  {
    "title": "Law Firms: Multi-Location Payroll Guide",
    "description": "Managed payroll for law firms. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-multi-location-payroll"
  },
  {
    "title": "Law Firms: New Hire Payroll Onboarding",
    "description": "Managed payroll for law firms. New Hire Payroll Onboarding. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-new-hire-payroll-onboarding"
  },
  {
    "title": "Law Firms: Overtime Rules and Payroll Compliance",
    "description": "Managed payroll for law firms. Overtime Rules and Payroll Compliance. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-overtime-rules-payroll"
  },
  {
    "title": "Law Firms: Managing Part-Time Worker Payroll",
    "description": "Managed payroll for law firms. Managing Part-Time Worker Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-part-time-worker-payroll"
  },
  {
    "title": "Law Firms: Payroll Compliance Guide",
    "description": "Managed payroll for law firms. Payroll Compliance Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-payroll-compliance-guide"
  },
  {
    "title": "Law Firms: How to Calculate Your Payroll Costs",
    "description": "Managed payroll for law firms. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-payroll-cost-calculator"
  },
  {
    "title": "Law Firms: Payroll Features Every Business Needs | B",
    "description": "Managed payroll for law firms. Payroll Features Every Business Needs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-payroll-features-needed"
  },
  {
    "title": "Law Firms: Payroll Garnishments: What You Need to Know",
    "description": "Managed payroll for law firms. Payroll Garnishments: What You Need to Know. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-payroll-garnishments-guide"
  },
  {
    "title": "Law Firms: Payroll Mistakes to Avoid",
    "description": "Managed payroll for law firms. Payroll Mistakes to Avoid. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-payroll-mistakes-to-avoid"
  },
  {
    "title": "Law Firms: Payroll Outsourcing Cost vs. In-House Hire",
    "description": "Managed payroll for law firms. Payroll Outsourcing Cost vs. In-House Hire. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-payroll-outsourcing-cost"
  },
  {
    "title": "Law Firms: Managing Payroll During Peak Season",
    "description": "Managed payroll for law firms. Managing Payroll During Peak Season. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-payroll-peak-season"
  },
  {
    "title": "Law Firms: Payroll Recordkeeping Requirements",
    "description": "Managed payroll for law firms. Payroll Recordkeeping Requirements. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-payroll-recordkeeping"
  },
  {
    "title": "Law Firms: Payroll Setup Guide",
    "description": "Managed payroll for law firms. Payroll Setup Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-payroll-setup-guide"
  },
  {
    "title": "Law Firms: Payroll Software vs. Managed Payroll Service | BE",
    "description": "Managed payroll for law firms. Payroll Software vs. Managed Payroll Service. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-payroll-software-vs-managed"
  },
  {
    "title": "Law Firms: Payroll Tax Guide",
    "description": "Managed payroll for law firms. Payroll Tax Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-payroll-tax-guide"
  },
  {
    "title": "Law Firms: State Payroll Compliance Issues",
    "description": "Managed payroll for law firms. State Payroll Compliance Issues. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-state-payroll-compliance"
  },
  {
    "title": "Law Firms: Signs Your Business Needs to Outsource Payroll |",
    "description": "Managed payroll for law firms. Signs Your Business Needs to Outsource Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-when-to-outsource-payroll"
  },
  {
    "title": "Law Firms: Year-End Payroll Checklist",
    "description": "Managed payroll for law firms. Year-End Payroll Checklist. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/law-firms/law-firms-year-end-payroll-checklist"
  }
];

export default function LawFirmsPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Law Firms</p>
              <h1>Law Firm Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for law firm nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Law Firm Payroll Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for law firm.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Law Firms', item: 'https://www.beghr.com/blog/payroll/law-firms' },
            ],
          })
        }}
      />
    </>
  );
}
