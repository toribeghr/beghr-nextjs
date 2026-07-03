import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'State Payroll Compliance Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for businesses across states nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/state' },
  openGraph: {
    title: 'State Payroll Compliance Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for businesses across states nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/state',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'State Payroll Compliance Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for businesses across states nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "Payroll Outsourcing in Arizona for Growing Businesses",
    "description": "Payroll Outsourcing in Arizona for Growing Businesses. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-arizona"
  },
  {
    "title": "Payroll Outsourcing in California: Compliance Guide",
    "description": "Payroll Outsourcing in California: Compliance Guide. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-california"
  },
  {
    "title": "Payroll Outsourcing in Colorado: New Laws and Requir..",
    "description": "Payroll Outsourcing in Colorado: New Laws and Requirements. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-colorado"
  },
  {
    "title": "Payroll Outsourcing in Florida: What to Know",
    "description": "Payroll Outsourcing in Florida: What to Know. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-florida"
  },
  {
    "title": "Payroll Outsourcing in Georgia for Small Businesses",
    "description": "Payroll Outsourcing in Georgia for Small Businesses. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-georgia"
  },
  {
    "title": "Payroll Outsourcing in Illinois: Employer Guide",
    "description": "Payroll Outsourcing in Illinois: Employer Guide. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-illinois"
  },
  {
    "title": "Payroll Outsourcing in Massachusetts: What Changed i..",
    "description": "Payroll Outsourcing in Massachusetts: What Changed in 2026. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-massachusetts"
  },
  {
    "title": "Payroll Outsourcing in Michigan: What Employers Need..",
    "description": "Payroll Outsourcing in Michigan: What Employers Need to Know. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-michigan"
  },
  {
    "title": "Payroll Outsourcing in Minnesota: Employer Checklist",
    "description": "Payroll Outsourcing in Minnesota: Employer Checklist. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-minnesota"
  },
  {
    "title": "Multi-State Payroll Outsourcing: Guide for Businesse..",
    "description": "Multi-State Payroll Outsourcing: Guide for Businesses in 2+ States. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-multi-state"
  },
  {
    "title": "Payroll Outsourcing in Nevada for Service Businesses",
    "description": "Payroll Outsourcing in Nevada for Service Businesses. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-nevada"
  },
  {
    "title": "Payroll Outsourcing in New York: Compliance Requirem..",
    "description": "Payroll Outsourcing in New York: Compliance Requirements. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-new-york"
  },
  {
    "title": "Payroll Outsourcing in North Carolina",
    "description": "Payroll Outsourcing in North Carolina. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-north-carolina"
  },
  {
    "title": "Payroll Outsourcing in Ohio: Requirements and Options",
    "description": "Payroll Outsourcing in Ohio: Requirements and Options. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-ohio"
  },
  {
    "title": "Payroll Outsourcing in Oregon: Paid Leave and More",
    "description": "Payroll Outsourcing in Oregon: Paid Leave and More. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-oregon"
  },
  {
    "title": "Payroll Outsourcing in Pennsylvania: Compliance Over..",
    "description": "Payroll Outsourcing in Pennsylvania: Compliance Overview. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-pennsylvania"
  },
  {
    "title": "Payroll Outsourcing in Tennessee for Small Businesses",
    "description": "Payroll Outsourcing in Tennessee for Small Businesses. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-tennessee"
  },
  {
    "title": "Payroll Outsourcing in Texas: What Businesses Need t..",
    "description": "Payroll Outsourcing in Texas: What Businesses Need to Know. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-texas"
  },
  {
    "title": "Payroll Outsourcing in Virginia",
    "description": "Payroll Outsourcing in Virginia. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-virginia"
  },
  {
    "title": "Payroll Outsourcing in Washington State",
    "description": "Payroll Outsourcing in Washington State. BEG provides managed payroll nationwide. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/state/payroll-outsourcing-washington"
  }
];

export default function StatePayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; State-Specific Payroll</p>
              <h1>State Payroll Compliance Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for businesses across states nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>State Payroll Compliance Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for businesses across states.</p>
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
              { '@type': 'ListItem', position: 4, name: 'State-Specific Payroll', item: 'https://www.beghr.com/blog/payroll/state' },
            ],
          })
        }}
      />
    </>
  );
}
