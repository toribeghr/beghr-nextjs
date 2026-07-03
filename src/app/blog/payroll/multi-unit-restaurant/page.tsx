import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multi-Location Restaurant Payroll Guides | Tip Credit + Compliance | BEG',
  description: 'Multi-location restaurant payroll guides covering tip credit by state, consolidated reporting, compliance, and outsourcing. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/multi-unit-restaurant' },
  openGraph: {
    title: 'Multi-Location Restaurant Payroll Guides | Tip Credit + Compliance | BEG',
    description: 'Multi-location restaurant payroll guides covering tip credit by state, consolidated reporting, compliance, and outsourcing. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/multi-unit-restaurant',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Multi-Location Restaurant Payroll Guides | Tip Credit + Compliance | BEG', description: 'Multi-location restaurant payroll guides covering tip credit by state, consolidated reporting, compliance, and outsourcing. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: "Multi-Location Restaurant Payroll Guide: Consolidated Payroll, Tip Credit, and State Compliance (2026)",
    description: "Consolidated reporting across locations, tip credit by state, high-volume W-2 production for high turnover, per-location P&L reporting, and franchise vs independent multi-unit payroll.",
    slug: "/blog/payroll/multi-unit-restaurant/multi-location-restaurant-payroll-guide",
  },
  {
    title: "Multi-State Restaurant Tip Credit: How to Handle Different Rules Across Your Locations",
    description: "State-by-state breakdown of tip credit rules, shortfall calculation when tips fall short, and tip pool compliance for multi-unit restaurant operators.",
    slug: "/blog/payroll/multi-unit-restaurant/restaurant-tip-credit-multi-state",
  },
  {
    title: "Per-Location Payroll Reporting for Multi-Unit Restaurants: What Your Operators Actually Need",
    description: "How to structure payroll reporting so operators get the per-location labor data they need while finance gets consolidated visibility across the group.",
    slug: "/blog/payroll/multi-unit-restaurant/multi-location-restaurant-payroll-reporting",
  },
  {
    title: "Payroll Compliance for Multi-Unit Restaurant Groups: Tip Pools, Minimum Wage, and Overtime",
    description: "Manager tip pool prohibition, local minimum wage hierarchy across locations, daily overtime states, and FLSA compliance for restaurant groups.",
    slug: "/blog/payroll/multi-unit-restaurant/restaurant-group-payroll-compliance",
  },
  {
    title: "Why Multi-Unit Restaurant Groups Outsource Payroll",
    description: "The compliance complexity, high turnover W-2 volume, and multi-state tip credit rules that push restaurant groups toward managed payroll.",
    slug: "/blog/payroll/multi-unit-restaurant/outsource-multi-location-restaurant-payroll",
  }
];

export default function MultiUnitRestaurantPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Multi-Unit Restaurants</p>
              <h1>Multi-Location Restaurant Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Consolidated payroll reporting, multi-state tip credit management, compliance guides, and outsourcing resources for multi-unit restaurant groups nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Multi-Unit Restaurant Payroll Resources</h2>
            <p>Guides covering consolidated reporting across locations, tip credit variations by state, overtime compliance, and per-location P&L visibility.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Multi-Unit Restaurants', item: 'https://www.beghr.com/blog/payroll/multi-unit-restaurant' },
            ],
          })
        }}
      />
    </>
  );
}
