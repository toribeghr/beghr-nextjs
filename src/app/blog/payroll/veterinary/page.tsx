import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veterinary Payroll Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for veterinary practice nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/veterinary' },
  openGraph: {
    title: 'Veterinary Payroll Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for veterinary practice nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/veterinary',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Veterinary Payroll Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for veterinary practice nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "How to Set Up DVM Salary and Production Bonuses in Payroll",
    "description": "A practical guide to DVM compensation structures in payroll - base salary, production bonus calculation, associate vs. owner pay, and the most common.",
    "slug": "/blog/payroll/veterinary/dvm-compensation-payroll"
  },
  {
    "title": "Vet Practice Payroll | Managed vs. In-House. $25-$45 PEPM.",
    "description": "Veterinary practice payroll outsourcing vs. hiring an HR coordinator. Real cost comparison for practices with 10-100 staff. Mixed pay structures, ACA.",
    "slug": "/blog/payroll/veterinary/managed-payroll-vs-in-house"
  },
  {
    "title": "Vet Practice Payroll: Benefits Integration",
    "description": "Managed payroll for veterinary. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-benefits-integration-payroll"
  },
  {
    "title": "Vet Practice Payroll: Direct Deposit Setup",
    "description": "Managed payroll for veterinary. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-direct-deposit-setup"
  },
  {
    "title": "Vet Practice Payroll: Employee Classification Guide",
    "description": "Managed payroll for veterinary. Employee Classification for Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-employee-classification-guide"
  },
  {
    "title": "Vet Practice Payroll: Hourly vs. Salaried Guide",
    "description": "Managed payroll for veterinary. Hourly vs. Salaried Employee Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-hourly-vs-salaried-payroll"
  },
  {
    "title": "Vet Practice Payroll: How to Switch Providers",
    "description": "Managed payroll for veterinary. How to Switch Payroll Providers. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-how-to-switch-payroll-providers"
  },
  {
    "title": "Vet Practice Payroll: For Mid-Size Business (25-100 ..",
    "description": "Managed payroll for veterinary. Managed Payroll for Mid-Size Businesses (25-100 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call",
    "slug": "/blog/payroll/veterinary/veterinary-managed-payroll-mid-size"
  },
  {
    "title": "Vet Practice Payroll: For Small Business (<25 EE)",
    "description": "Managed payroll for veterinary. Managed Payroll for Small Businesses (Under 25 Employees). $25-$45 PEPM all-inclusive. Book a free 15-min discovery call",
    "slug": "/blog/payroll/veterinary/veterinary-managed-payroll-small-business"
  },
  {
    "title": "Vet Practice Payroll: Multi-Location Payroll Guide",
    "description": "Managed payroll for veterinary. Multi-Location Payroll Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-multi-location-payroll"
  },
  {
    "title": "Vet Practice Payroll: New Hire Onboarding",
    "description": "Managed payroll for veterinary. New Hire Payroll Onboarding. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-new-hire-payroll-onboarding"
  },
  {
    "title": "Vet Practice Payroll: Overtime Rules 2026",
    "description": "Managed payroll for veterinary. Overtime Rules and Payroll Compliance. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-overtime-rules-payroll"
  },
  {
    "title": "Vet Practice Payroll: Part-Time Workers",
    "description": "Managed payroll for veterinary. Managing Part-Time Worker Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-part-time-worker-payroll"
  },
  {
    "title": "Vet Practice Payroll: Compliance Guide 2026",
    "description": "Managed payroll for veterinary. Payroll Compliance Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-payroll-compliance-guide"
  },
  {
    "title": "Vet Practice Payroll: Cost Calculator Guide",
    "description": "Managed payroll for veterinary. How to Calculate Your Payroll Costs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-payroll-cost-calculator"
  },
  {
    "title": "Vet Practice Payroll: Must-Have Features",
    "description": "Managed payroll for veterinary. Payroll Features Every Business Needs. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-payroll-features-needed"
  },
  {
    "title": "Vet Practice Payroll: Garnishments Guide",
    "description": "Managed payroll for veterinary. Payroll Garnishments: What You Need to Know. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-payroll-garnishments-guide"
  },
  {
    "title": "Vet Practice Payroll: Mistakes to Avoid",
    "description": "Managed payroll for veterinary. Payroll Mistakes to Avoid. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-payroll-mistakes-to-avoid"
  },
  {
    "title": "Vet Practice Payroll: Outsourcing Cost vs. In-House",
    "description": "Managed payroll for veterinary. Payroll Outsourcing Cost vs. In-House Hire. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-payroll-outsourcing-cost"
  },
  {
    "title": "Vet Practice Payroll: Managing Peak Season Payroll",
    "description": "Managed payroll for veterinary. Managing Payroll During Peak Season. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-payroll-peak-season"
  },
  {
    "title": "Vet Practice Payroll: Recordkeeping Requirements",
    "description": "Managed payroll for veterinary. Payroll Recordkeeping Requirements. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-payroll-recordkeeping"
  },
  {
    "title": "Vet Practice Payroll: Payroll Setup Guide",
    "description": "Managed payroll for veterinary. Payroll Setup Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-payroll-setup-guide"
  },
  {
    "title": "Vet Practice Payroll: Software vs. Managed Service",
    "description": "Managed payroll for veterinary. Payroll Software vs. Managed Payroll Service. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-payroll-software-vs-managed"
  },
  {
    "title": "Vet Practice Payroll: Payroll Tax Guide 2026",
    "description": "Managed payroll for veterinary. Payroll Tax Guide. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-payroll-tax-guide"
  },
  {
    "title": "Vet Staff Overtime Rules | FLSA for Veterinary Practices",
    "description": "Which veterinary employees are exempt from FLSA overtime - and which are not. Covers DVMs, veterinary technicians, receptionists, and the most common.",
    "slug": "/blog/payroll/veterinary/veterinary-staff-overtime-rules"
  },
  {
    "title": "Vet Practice Payroll: State Compliance Guide",
    "description": "Managed payroll for veterinary. State Payroll Compliance Issues. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-state-payroll-compliance"
  },
  {
    "title": "Vet Practice Payroll: When to Outsource",
    "description": "Managed payroll for veterinary. Signs Your Business Needs to Outsource Payroll. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-when-to-outsource-payroll"
  },
  {
    "title": "Vet Practice Payroll: Year-End Checklist",
    "description": "Managed payroll for veterinary. Year-End Payroll Checklist. $25-$45 PEPM all-inclusive. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/veterinary/veterinary-year-end-payroll-checklist"
  }
];

export default function VeterinaryPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Veterinary Practices</p>
              <h1>Veterinary Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for veterinary practice nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Veterinary Payroll Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for veterinary practice.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Veterinary Practices', item: 'https://www.beghr.com/blog/payroll/veterinary' },
            ],
          })
        }}
      />
    </>
  );
}
