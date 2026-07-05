import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CPA Firm Payroll Guides | Partner Draws + Busy Season | BEG',
  description: 'CPA and accounting firm payroll guides covering partner draws, busy season overtime, remote staff, and outsourcing. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/accounting-cpa' },
  openGraph: {
    title: 'CPA Firm Payroll Guides | Partner Draws + Busy Season | BEG',
    description: 'CPA and accounting firm payroll guides covering partner draws, busy season overtime, remote staff, and outsourcing. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/accounting-cpa',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'CPA Firm Payroll Guides | Partner Draws + Busy Season | BEG', description: 'CPA and accounting firm payroll guides covering partner draws, busy season overtime, remote staff, and outsourcing. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: "CPA and Accounting Firm Payroll Guide: Partner Draws, Busy Season, and 401(k) Administration (2026)",
    description: "Partner draw vs K-1 vs W-2 by entity type, busy season overtime for staff accountants, billing-code payroll allocation, 401(k) matching tied to variable comp, and multi-state remote staff.",
    slug: "/blog/payroll/accounting-cpa/cpa-firm-payroll-guide",
  },
  {
    title: "Partner Draw and Compensation Payroll for Accounting Firms: K-1, W-2, and Reasonable Comp",
    description: "How entity type (LLP, LLC, S-corp, PC) determines whether partners take guaranteed payments, W-2 wages, or distributions, and what reasonable compensation means for S-corp owners.",
    slug: "/blog/payroll/accounting-cpa/accounting-firm-partner-draw-payroll",
  },
  {
    title: "CPA Firm Busy Season Payroll: Overtime Rules, Exempt vs Non-Exempt Staff, and FLSA Compliance",
    description: "FLSA exemption thresholds by staff level, how non-discretionary busy season bonuses affect overtime calculations, and how to classify junior staff correctly.",
    slug: "/blog/payroll/accounting-cpa/cpa-busy-season-payroll-overtime",
  },
  {
    title: "CPA Firm Payroll Compliance: Multi-State Remote Staff, 401(k), and Year-End Close",
    description: "State nexus obligations for remote staff, 401(k) and payroll system integration, and the year-end close timeline for accounting firms running their own payroll.",
    slug: "/blog/payroll/accounting-cpa/accounting-firm-payroll-compliance",
  },
  {
    title: "Why Accounting Firms Outsource Payroll (Hint: They Know What It Costs to Do It Wrong)",
    description: "The irony of accounting firms handling their own payroll, the compliance risks they know better than anyone, and what triggers the outsourcing decision.",
    slug: "/blog/payroll/accounting-cpa/outsource-accounting-firm-payroll",
  }
];

export default function AccountingCpaPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · CPA and Accounting Firms</p>
              <h1>CPA and Accounting Firm Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Partner draw and K-1 structures, busy season overtime compliance, multi-state remote staff, and outsourcing resources for accounting and CPA firms nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>CPA Firm Payroll Resources</h2>
            <p>Guides covering partner compensation by entity type, busy season FLSA compliance, 401(k) intersection, and when to outsource your own payroll.</p>
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
        { category: "Payroll", title: "Farm & Agriculture Payroll Guides | H-2A + Seasonal", excerpt: "Agriculture payroll guides covering H-2A workers, seasonal crews, piece rate compliance, MSPA...", href: "/blog/payroll/agriculture" },
        { category: "Payroll", title: "Architecture Firm Payroll Guides | Project Billing + Partners", excerpt: "Architecture firm payroll guides covering project-coded billing, licensed staff, partner draws, and...", href: "/blog/payroll/architecture" },
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
              { '@type': 'ListItem', position: 4, name: 'CPA and Accounting Firms', item: 'https://www.beghr.com/blog/payroll/accounting-cpa' },
            ],
          })
        }}
      />
    </>
  );
}
