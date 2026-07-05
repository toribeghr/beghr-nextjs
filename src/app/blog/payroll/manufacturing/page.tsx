import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing Payroll Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for manufacturer nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/manufacturing' },
  openGraph: {
    title: 'Manufacturing Payroll Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for manufacturer nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/manufacturing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Manufacturing Payroll Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for manufacturer nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "Manufacturing Payroll Outsourcing | $25 PEPM vs. $80K Hire",
    "description": "Manufacturing payroll outsourcing vs. hiring in-house. Real cost comparison: shift differentials, overtime, union CBA compliance. Save $55K-$100K annually.",
    "slug": "/blog/payroll/manufacturing/outsourcing-payroll"
  },
  {
    "title": "Shift Work Payroll | Differentials, Overtime & 24/7 Ops",
    "description": "Manufacturing shift work payroll: shift differentials, rotating schedules, overtime rules, and FLSA compliance. BEG at $25-$45 PEPM.",
    "slug": "/blog/payroll/manufacturing/shift-work-payroll"
  },
  {
    "title": "Union Manufacturing Payroll | CBA Rates & Fringes",
    "description": "Union manufacturing payroll: CBA wage schedules, fringe remittances, grievance documentation, and NLRA compliance. BEG at $25-$45 PEPM.",
    "slug": "/blog/payroll/manufacturing/union-manufacturing-payroll"
  }
];

export default function ManufacturingPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Manufacturers</p>
              <h1>Manufacturing Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for manufacturer nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Manufacturing Payroll Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for manufacturer.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Manufacturers', item: 'https://www.beghr.com/blog/payroll/manufacturing' },
            ],
          })
        }}
      />
    </>
  );
}
