import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Security Company Payroll Guides | Guard Shifts + SCA | BEG",
  description: "Payroll guides for security companies: SCA compliance, 24/7 guard shift payroll, overtime, high-volume W-2s, and compliance. BEG managed payroll at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/security" },
  openGraph: {
    title: "Security Company Payroll Guides | Guard Shifts + SCA | BEG",
    description: "Payroll guides for security companies: SCA compliance, 24/7 guard shift payroll, overtime, and high-volume W-2 production. BEG managed payroll at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/security",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Security Company Payroll Guides | Guard Shifts + SCA | BEG", description: "Payroll guides for security companies: SCA compliance, shift payroll, overtime, and W-2 production.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const posts = [
  {
    slug: "security-company-payroll-guide",
    title: "Security Company Payroll Guide: Guard Shifts, SCA Compliance, and High-Volume W-2s (2026)",
    description: "A complete guide to security company payroll: Service Contract Act compliance for federal contracts, 24/7 shift processing, overtime for long shifts, and high-turnover W-2 production.",
  },
  {
    slug: "service-contract-act-security-payroll",
    title: "Service Contract Act Compliance for Security Companies: Pay Rates, Benefits, and Reporting",
    description: "How security companies comply with the Service Contract Act on federal contracts: prevailing wage determination, health and welfare benefits, and certified payroll reporting.",
  },
  {
    slug: "security-guard-overtime-payroll",
    title: "Security Guard Overtime and Shift Payroll: FLSA Rules for 24/7 Operations",
    description: "How to calculate overtime correctly for security guards working 24/7 operations: shift differentials in the regular rate, long-shift overtime, and state daily overtime rules.",
  },
  {
    slug: "security-company-payroll-compliance",
    title: "Security Company Payroll Compliance: State Licensing, Workers Comp, and Guard Payroll Rules",
    description: "Payroll compliance requirements for security companies: state guard licensing rules, workers compensation classifications, and multi-state payroll obligations.",
  },
  {
    slug: "outsource-security-company-payroll",
    title: "Why Security Companies Outsource Payroll - and What Changes Immediately",
    description: "What drives security companies to outsource payroll, what to look for in a provider experienced with SCA and 24/7 shift operations, and what changes immediately after switching.",
  },
];

export default function SecurityPayrollHubPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Security Companies</p>
              <h1>Security Company Payroll Guides</h1>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginTop: "1rem", color: "#444" }}>
                Security company payroll involves some of the most complex compliance requirements in the industry: Service Contract Act obligations on federal contracts, 24/7 shift overtime calculations, state guard licensing labor rules, and high-volume W-2 production driven by high turnover. These guides cover the full compliance picture for private security employers.
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
                <Link href={`/blog/payroll/security/${post.slug}`} style={{ color: "#000", textDecoration: "underline" }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ lineHeight: "1.7", color: "#444" }}>{post.description}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Managed Payroll for Security Companies</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages security company payroll at $25 to $45 per employee per month, including SCA compliance, 24/7 shift processing, and high-volume W-2 production. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/security"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Security Company Payroll Services
            </Link>
            <a
              href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
              style={{ display: "inline-block", background: "#ECAC60", color: "#000", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Book a Discovery Call
            </a>
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
          { "@type": "ListItem", "position": 4, "name": "Security", "item": "https://www.beghr.com/blog/payroll/security" },
        ]
      }) }} />
    </article>
  );
}
