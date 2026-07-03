import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Property Management Payroll Guides | BEG HR",
  description: "Payroll guides for property management companies: housing allowances, leasing commissions, multi-property consolidation, and compliance. BEG at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/property-management" },
  openGraph: {
    title: "Property Management Payroll Guides | BEG HR",
    description: "Payroll guides for property management companies: housing allowances, leasing commissions, multi-property consolidation, and compliance. BEG at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/property-management",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Property Management Payroll Guides | BEG HR", description: "Payroll guides for property management: housing allowances, commissions, multi-property consolidation, and compliance.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const posts = [
  {
    slug: "property-management-payroll-guide",
    title: "Property Management Payroll Guide: Housing Allowances, Commission, and Multi-Property Compliance (2026)",
    description: "A complete guide to property management payroll: resident manager housing allowances under IRC Section 119, leasing commission processing, maintenance overtime, and multi-property consolidated payroll.",
  },
  {
    slug: "resident-manager-housing-allowance-payroll",
    title: "Resident Manager Housing Allowances: How to Handle Them Correctly in Payroll",
    description: "IRC Section 119 rules for resident manager housing allowances, what qualifies as excludable, what must be treated as taxable income, and how to configure it in payroll.",
  },
  {
    slug: "property-management-commission-payroll",
    title: "Leasing Agent Commission Payroll: How to Handle Splits, Chargebacks, and Reconciliation",
    description: "How to process leasing agent commissions through payroll correctly: commission splits, chargeback rules, pay timing, and reconciliation between commission earned and wages paid.",
  },
  {
    slug: "multi-property-payroll-management",
    title: "Multi-Property Payroll: How to Consolidate Without Losing Per-Property Visibility",
    description: "How property management companies with multiple properties or entities run consolidated payroll while maintaining per-property cost allocation and reporting.",
  },
  {
    slug: "outsource-property-management-payroll",
    title: "Why Property Management Companies Outsource Payroll",
    description: "What drives property management companies to outsource payroll, what to look for in a provider, and what changes immediately after making the switch.",
  },
];

export default function PropertyManagementPayrollHubPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Property Management</p>
              <h1>Property Management Payroll Guides</h1>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginTop: "1rem", color: "#444" }}>
                Property management payroll sits at the intersection of employment law, real estate tax rules, and multi-entity accounting. Housing allowances, leasing commissions, maintenance overtime, and per-property cost allocation all require careful payroll configuration. These guides cover every major compliance area for property management employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "820px", paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div style={{ marginBottom: "2.5rem" }}>
          {posts.map((post, i) => (
            <div key={i} style={{ marginBottom: "2rem", paddingBottom: "2rem", borderBottom: i < posts.length - 1 ? "1px solid #eee" : "none" }}>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                <Link href={`/blog/payroll/property-management/${post.slug}`} style={{ color: "#000", textDecoration: "underline" }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ lineHeight: "1.7", color: "#444" }}>{post.description}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Managed Payroll for Property Management Companies</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG handles property management payroll at $25 to $45 per employee per month, including housing allowance configuration, commission processing, and multi-property cost allocation. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/property-management"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Property Management Payroll Services
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
          { "@type": "ListItem", "position": 4, "name": "Property Management", "item": "https://www.beghr.com/blog/payroll/property-management" },
        ]
      }) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "CPA Firm Payroll Guides | Partner Draws + Busy Season", excerpt: "CPA and accounting firm payroll guides covering partner draws, busy season overtime, remote staff,...", href: "/blog/payroll/accounting-cpa" },
        { category: "Payroll", title: "Farm & Agriculture Payroll Guides | H-2A + Seasonal", excerpt: "Agriculture payroll guides covering H-2A workers, seasonal crews, piece rate compliance, MSPA...", href: "/blog/payroll/agriculture" },
        { category: "Payroll", title: "Architecture Firm Payroll Guides | Project Billing + Partners", excerpt: "Architecture firm payroll guides covering project-coded billing, licensed staff, partner draws, and...", href: "/blog/payroll/architecture" },
      ]} />
      </article>
  );
}
