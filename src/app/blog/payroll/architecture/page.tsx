import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Architecture Firm Payroll Guides | Project Billing | BEG',
  description: 'Architecture firm payroll guides covering project-coded billing, licensed staff, partner draws, and multi-state compliance.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/architecture' },
  openGraph: {
    title: 'Architecture Firm Payroll Guides | Project Billing | BEG',
    description: 'Architecture firm payroll guides covering project-coded billing, licensed staff, partner draws, and multi-state compliance.',
    url: 'https://www.beghr.com/blog/payroll/architecture',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Architecture Firm Payroll Guides | Project Billing | BEG', description: 'Architecture firm payroll guides covering project-coded billing, licensed staff, partner draws, and multi-state compliance.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: "Architecture Firm Payroll Guide: Project Billing, Licensed Staff, and Partner Draws (2026)",
    description: "AIA project-coded payroll, licensed architect and PE tracking, partner draw structures, multi-state staff, and overtime during deadline sprints.",
    slug: "/blog/payroll/architecture/architecture-firm-payroll-guide",
  },
  {
    title: "Project-Coded Payroll for Architecture Firms: How to Align Labor Costs with AIA Billing",
    description: "How to set up payroll cost codes that map directly to AIA billing phases so every labor dollar ties to a project deliverable.",
    slug: "/blog/payroll/architecture/architecture-project-payroll-allocation",
  },
  {
    title: "Payroll for Licensed Architects and Engineers: State License Tracking and Compliance",
    description: "Multi-state license tracking, FLSA exempt vs non-exempt classification for licensed professionals, and state-specific compliance obligations.",
    slug: "/blog/payroll/architecture/licensed-professional-payroll-tracking",
  },
  {
    title: "Architecture Partnership Payroll: Managing Partner Draws, W-2 Salaries, and K-1 Distributions",
    description: "How architecture partnerships handle the interplay between partner draws, W-2 wages, K-1 distributions, and reasonable compensation requirements.",
    slug: "/blog/payroll/architecture/architecture-partner-draw-payroll",
  },
  {
    title: "Why Architecture Firms Outsource Payroll",
    description: "The cost math, compliance risks, and operational triggers that lead architecture firms to hand off payroll to a managed provider.",
    slug: "/blog/payroll/architecture/outsource-architecture-firm-payroll",
  }
];

export default function ArchitecturePayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Architecture Firms</p>
              <h1>Architecture Firm Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Project-coded payroll, licensed architect compliance, partner draw structures, and outsourcing guides for architecture and engineering firms nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Architecture Firm Payroll Resources</h2>
            <p>Guides covering AIA billing alignment, PE tracking, partner draws, and when to outsource.</p>
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
        { category: "Payroll", title: "Auto Dealership Payroll Guides", excerpt: "Payroll guides, compliance resources, and managed payroll insights for auto dealership nationwide....", href: "/blog/payroll/auto-dealership" },
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
              { '@type': 'ListItem', position: 4, name: 'Architecture Firms', item: 'https://www.beghr.com/blog/payroll/architecture' },
            ],
          })
        }}
      />
    </>
  );
}
