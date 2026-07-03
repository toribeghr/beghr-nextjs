import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managed Payroll by Company Size | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for businesses of all sizes nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/company-size' },
  openGraph: {
    title: 'Managed Payroll by Company Size | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for businesses of all sizes nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/company-size',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Managed Payroll by Company Size | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for businesses of all sizes nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "Managed Payroll for 10-Employee Businesses",
    "description": "Managed Payroll for 10-Employee Businesses. BEG managed payroll at $25-$45 PEPM all-inclusive. Find out what it costs for your headcount at beghr.com.",
    "slug": "/blog/payroll/company-size/managed-payroll-10-employees"
  },
  {
    "title": "Managed Payroll for 100-Employee Businesses",
    "description": "Managed Payroll for 100-Employee Businesses. BEG managed payroll at $25-$45 PEPM all-inclusive. Find out what it costs for your headcount at beghr.com.",
    "slug": "/blog/payroll/company-size/managed-payroll-100-employees"
  },
  {
    "title": "Managed Payroll for 20-Employee Businesses",
    "description": "Managed Payroll for 20-Employee Businesses. BEG managed payroll at $25-$45 PEPM all-inclusive. Find out what it costs for your headcount at beghr.com.",
    "slug": "/blog/payroll/company-size/managed-payroll-20-employees"
  },
  {
    "title": "Managed Payroll for 30-Employee Businesses",
    "description": "Managed Payroll for 30-Employee Businesses. BEG managed payroll at $25-$45 PEPM all-inclusive. Find out what it costs for your headcount at beghr.com.",
    "slug": "/blog/payroll/company-size/managed-payroll-30-employees"
  },
  {
    "title": "Managed Payroll for 50-Employee Businesses",
    "description": "Managed Payroll for 50-Employee Businesses. BEG managed payroll at $25-$45 PEPM all-inclusive. Find out what it costs for your headcount at beghr.com.",
    "slug": "/blog/payroll/company-size/managed-payroll-50-employees"
  },
  {
    "title": "Managed Payroll for 75-Employee Businesses",
    "description": "Managed Payroll for 75-Employee Businesses. BEG managed payroll at $25-$45 PEPM all-inclusive. Find out what it costs for your headcount at beghr.com.",
    "slug": "/blog/payroll/company-size/managed-payroll-75-employees"
  },
  {
    "title": "Managed Payroll for Fast-Growing Companies",
    "description": "Managed Payroll for Fast-Growing Companies. BEG managed payroll at $25-$45 PEPM all-inclusive. Find out what it costs for your headcount at beghr.com.",
    "slug": "/blog/payroll/company-size/managed-payroll-growing-company"
  },
  {
    "title": "Managed Payroll for Mid-Market Companies (100-500 Em..",
    "description": "Managed Payroll for Mid-Market Companies (100-500 Employees). BEG managed payroll at $25-$45 PEPM all-inclusive. Find out what it costs for your headcount",
    "slug": "/blog/payroll/company-size/managed-payroll-mid-market-100-500"
  },
  {
    "title": "Managed Payroll for Businesses Under 10 Employees",
    "description": "Managed Payroll for Businesses Under 10 Employees. BEG managed payroll at $25-$45 PEPM all-inclusive. Find out what it costs for your headcount at",
    "slug": "/blog/payroll/company-size/managed-payroll-small-business-under-10"
  },
  {
    "title": "Managed Payroll for Startups: What to Know Before Yo..",
    "description": "Managed Payroll for Startups: What to Know Before You Hire. BEG managed payroll at $25-$45 PEPM all-inclusive. Find out what it costs for your headcount",
    "slug": "/blog/payroll/company-size/managed-payroll-startup"
  }
];

export default function CompanySizePayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Businesses by Size</p>
              <h1>Managed Payroll by Company Size</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for businesses of all sizes nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Managed Payroll by Company Size</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for businesses of all sizes.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Businesses by Size', item: 'https://www.beghr.com/blog/payroll/company-size' },
            ],
          })
        }}
      />
    </>
  );
}
