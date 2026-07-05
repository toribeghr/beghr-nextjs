import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Brewery & Distillery Payroll Guides | Taproom + Production | BEG",
  description: "Payroll guides for craft breweries and distilleries: taproom tip credit, production staff overtime, TTB record-keeping, and compliance.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/brewery" },
  openGraph: {
    title: "Brewery & Distillery Payroll Guides | Taproom + Production | BEG",
    description: "Payroll guides for craft breweries and distilleries: taproom tip credit, production staff overtime, TTB record-keeping, and compliance.",
    url: "https://www.beghr.com/blog/payroll/brewery",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/blog-images/blog-payroll-brewery.webp", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Brewery & Distillery Payroll Guides | Taproom + Production | BEG", description: "Payroll guides for craft breweries: taproom tips, production staff, sales reps, and compliance.", images: ["https://www.beghr.com/blog-images/blog-payroll-brewery.webp"] },
};

const posts = [
  {
    slug: "brewery-distillery-payroll-guide",
    title: "Brewery and Distillery Payroll Guide: Taproom Tips, Production Staff, and Sales Reps (2026)",
    description: "A complete guide to brewery and distillery payroll: taproom tip credit, production staff vs taproom payroll differences, sales rep commissions, seasonal staffing, and TTB record-keeping.",
  },
  {
    slug: "taproom-tip-credit-payroll",
    title: "Taproom Tip Credit and Tip Reporting: How Breweries Handle It Correctly",
    description: "How craft breweries apply the FLSA tip credit for taproom servers, tip pooling rules, tip reporting requirements, and state-by-state variations that affect brewery payroll.",
  },
  {
    slug: "brewery-production-payroll",
    title: "Brewery Production Staff Payroll: Shift Pay, Overtime, and Safety Incentive Administration",
    description: "How to process payroll for brewery production staff: shift differentials, overtime calculation for long production runs, and how safety incentives are handled in payroll.",
  },
  {
    slug: "craft-brewery-payroll-compliance",
    title: "Craft Brewery Payroll Compliance: TTB Record-Keeping, State Liquor License Labor Rules, and W-2s",
    description: "Compliance requirements for craft brewery payroll: TTB record-keeping obligations, state liquor license labor conditions, and correct W-2 reporting for breweries.",
  },
  {
    slug: "outsource-brewery-payroll",
    title: "Why Breweries and Distilleries Outsource Payroll",
    description: "What drives craft breweries and distilleries to outsource payroll, what to look for in a provider, and what changes immediately after making the switch.",
  },
];

export default function BreweryPayrollHubPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Brewery and Distillery</p>
              <h1>Brewery and Distillery Payroll Guides</h1>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginTop: "1rem", color: "#444" }}>
                Brewery and distillery payroll spans two very different employee types: taproom service staff subject to tip credit and tip pooling rules, and production staff whose overtime calculations and shift differentials require careful configuration. These guides cover the full compliance picture for craft beverage employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-brewery.webp" alt={`Brewery & Distillery Payroll Guides`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          {posts.map((post, i) => (
            <div key={i} style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: i < posts.length - 1 ? "1px solid #eee" : "none" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                <Link href={`/blog/payroll/brewery/${post.slug}`} style={{ color: "#000", textDecoration: "underline" }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ lineHeight: "1.7", color: "#444" }}>{post.description}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Managed Payroll for Craft Breweries and Distilleries</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages brewery and distillery payroll at $25 to $45 per employee per month, including tip credit configuration, production staff overtime, and sales rep commission processing. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/brewery"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Brewery Payroll Services
            </Link>
            <PricingCta service="managed-payroll" subline={false} />
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://www.beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Brewery", "item": "https://www.beghr.com/blog/payroll/brewery" },
        ]
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <p style={{ fontSize: '0.85rem', color: '#666666', margin: '2.5rem 0 0' }}>Authoritative source: <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">U.S. Department of Labor: Wage and Hour Division</a></p>
          <RelatedPosts posts={[
        { category: "Payroll", title: "CPA Firm Payroll Guides | Partner Draws + Busy Season", excerpt: "CPA and accounting firm payroll guides covering partner draws, busy season overtime, remote staff,...", href: "/blog/payroll/accounting-cpa" },
        { category: "Payroll", title: "Farm & Agriculture Payroll Guides | H-2A + Seasonal", excerpt: "Agriculture payroll guides covering H-2A workers, seasonal crews, piece rate compliance, MSPA...", href: "/blog/payroll/agriculture" },
        { category: "Payroll", title: "Architecture Firm Payroll Guides | Project Billing + Partners", excerpt: "Architecture firm payroll guides covering project-coded billing, licensed staff, partner draws, and...", href: "/blog/payroll/architecture" },
      ]} />
      </article>
  );
}
