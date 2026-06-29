import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nonprofit Payroll Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for nonprofit nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/nonprofits' },
  openGraph: {
    title: 'Nonprofit Payroll Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for nonprofit nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/nonprofits',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Nonprofit Payroll Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for nonprofit nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "501(c)(3) Payroll Compliance | Nonprofit FICA, FUTA & 990",
    "description": "501(c)(3) payroll compliance: FICA exemptions, FUTA rules, executive comp reporting on Form 990, and volunteer vs employee rules. BEG at $25-$45 PEPM.",
    "slug": "/blog/payroll/nonprofits/501c3-payroll-compliance"
  },
  {
    "title": "Nonprofit Payroll | Grant Allocation & 990. Done Right.",
    "description": "Nonprofit payroll outsourcing for 501(c)(3) organizations. Grant-funded payroll, Form 990, FUTA exemption, PSLF certification. Save $50K-$85K annually.",
    "slug": "/blog/payroll/nonprofits/charity-payroll"
  },
  {
    "title": "Grant-Funded Payroll | Cost Allocation & Audit Compliance",
    "description": "Grant-funded payroll: cost allocation, time tracking for funder compliance, and single audit requirements. BEG at $25-$45 PEPM.",
    "slug": "/blog/payroll/nonprofits/grant-funded-payroll"
  },
  {
    "title": "Nonprofit Payroll: Benefits Integration",
    "description": "Managed payroll for nonprofits. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-benefits-integration-payroll"
  },
  {
    "title": "Nonprofit Payroll: Direct Deposit Setup",
    "description": "Managed payroll for nonprofits. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-direct-deposit-setup"
  },
  {
    "title": "Nonprofit Payroll: Employee Classification Guide",
    "description": "Managed payroll for nonprofits. Employee Classification for Payroll. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-employee-classification-guide"
  },
  {
    "title": "Nonprofit Payroll: Hourly vs. Salaried Guide",
    "description": "Managed payroll for nonprofits. Hourly vs. Salaried Employee Payroll. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-hourly-vs-salaried-payroll"
  },
  {
    "title": "Nonprofit Payroll: How to Switch Providers",
    "description": "Managed payroll for nonprofits. How to Switch Payroll Providers. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-how-to-switch-payroll-providers"
  },
  {
    "title": "Nonprofit Payroll: For Mid-Size Business (25-100 EE)",
    "description": "Managed payroll for nonprofits. Managed Payroll for Mid-Size Businesses (25-100 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call",
    "slug": "/blog/payroll/nonprofits/nonprofits-managed-payroll-mid-size"
  },
  {
    "title": "Nonprofit Payroll: For Small Business (<25 EE)",
    "description": "Managed payroll for nonprofits. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call",
    "slug": "/blog/payroll/nonprofits/nonprofits-managed-payroll-small-business"
  },
  {
    "title": "Nonprofit Payroll: Multi-Location Payroll Guide",
    "description": "Managed payroll for nonprofits. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-multi-location-payroll"
  },
  {
    "title": "Nonprofit Payroll: New Hire Onboarding",
    "description": "Managed payroll for nonprofits. New Hire Payroll Onboarding. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-new-hire-payroll-onboarding"
  },
  {
    "title": "Nonprofit Payroll: Overtime Rules 2026",
    "description": "Managed payroll for nonprofits. Overtime Rules and Payroll Compliance. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-overtime-rules-payroll"
  },
  {
    "title": "Nonprofit Payroll: Part-Time Workers",
    "description": "Managed payroll for nonprofits. Managing Part-Time Worker Payroll. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-part-time-worker-payroll"
  },
  {
    "title": "Nonprofit Payroll: Compliance Guide 2026",
    "description": "Managed payroll for nonprofits. Payroll Compliance Guide. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-payroll-compliance-guide"
  },
  {
    "title": "Nonprofit Payroll: Cost Calculator Guide",
    "description": "Managed payroll for nonprofits. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-payroll-cost-calculator"
  },
  {
    "title": "Nonprofit Payroll: Must-Have Features",
    "description": "Managed payroll for nonprofits. Payroll Features Every Business Needs. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-payroll-features-needed"
  },
  {
    "title": "Nonprofit Payroll: Garnishments Guide",
    "description": "Managed payroll for nonprofits. Payroll Garnishments: What You Need to Know. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-payroll-garnishments-guide"
  },
  {
    "title": "Nonprofit Payroll: Mistakes to Avoid",
    "description": "Managed payroll for nonprofits. Payroll Mistakes to Avoid. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-payroll-mistakes-to-avoid"
  },
  {
    "title": "Nonprofit Payroll: Outsourcing Cost vs. In-House",
    "description": "Managed payroll for nonprofits. Payroll Outsourcing Cost vs. In-House Hire. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-payroll-outsourcing-cost"
  },
  {
    "title": "Nonprofit Payroll: Managing Peak Season Payroll",
    "description": "Managed payroll for nonprofits. Managing Payroll During Peak Season. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-payroll-peak-season"
  },
  {
    "title": "Nonprofit Payroll: Recordkeeping Requirements",
    "description": "Managed payroll for nonprofits. Payroll Recordkeeping Requirements. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-payroll-recordkeeping"
  },
  {
    "title": "Nonprofit Payroll: Payroll Setup Guide",
    "description": "Managed payroll for nonprofits. Payroll Setup Guide. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-payroll-setup-guide"
  },
  {
    "title": "Nonprofit Payroll: Software vs. Managed Service",
    "description": "Managed payroll for nonprofits. Payroll Software vs. Managed Payroll Service. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-payroll-software-vs-managed"
  },
  {
    "title": "Nonprofit Payroll: Payroll Tax Guide 2026",
    "description": "Managed payroll for nonprofits. Payroll Tax Guide. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-payroll-tax-guide"
  },
  {
    "title": "Nonprofit Payroll: State Compliance Guide",
    "description": "Managed payroll for nonprofits. State Payroll Compliance Issues. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-state-payroll-compliance"
  },
  {
    "title": "Nonprofit Payroll: When to Outsource",
    "description": "Managed payroll for nonprofits. Signs Your Business Needs to Outsource Payroll. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-when-to-outsource-payroll"
  },
  {
    "title": "Nonprofit Payroll: Year-End Checklist",
    "description": "Managed payroll for nonprofits. Year-End Payroll Checklist. $25-$45 PEPM all-inclusive. Book a free 15-min discovery call at beghr.com.",
    "slug": "/blog/payroll/nonprofits/nonprofits-year-end-payroll-checklist"
  }
];

export default function NonprofitsPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Nonprofits</p>
              <h1>Nonprofit Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for nonprofit nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Nonprofit Payroll Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for nonprofit.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Nonprofits', item: 'https://www.beghr.com/blog/payroll/nonprofits' },
            ],
          })
        }}
      />
    </>
  );
}
