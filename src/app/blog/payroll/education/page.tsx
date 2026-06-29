import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "School & Education Payroll Guides | Private + Charter | BEG",
  description: "Payroll guides for private schools, charter schools, and education employers. 403(b), substitute pay, salary spreads, and compliance at $25-$45 PEPM.",
  alternates: { canonical: "https://www.beghr.com/blog/payroll/education" },
  openGraph: {
    title: "School & Education Payroll Guides | Private + Charter | BEG",
    description: "Payroll guides for private schools, charter schools, and education employers. 403(b), substitute pay, salary spreads, and compliance at $25-$45 PEPM.",
    url: "https://www.beghr.com/blog/payroll/education",
    siteName: "Business Executive Group",
    images: [{ url: "https://www.beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "School & Education Payroll Guides | Private + Charter | BEG", description: "Payroll guides for private schools, charter schools, and education employers. 403(b), substitute pay, salary spreads, and compliance.", images: ["https://www.beghr.com/assets/og-image.png"] },
};

const posts = [
  {
    slug: "private-school-payroll-guide",
    title: "Private School Payroll Guide: 10-Month Teacher Pay, Substitutes, and 403(b) Administration",
    description: "How private and charter schools handle 10-month salary spread over 12, summer benefit continuation, substitute payroll, and 403(b) vs 401(k) retirement plans.",
  },
  {
    slug: "teacher-payroll-compliance",
    title: "Teacher Payroll Compliance: Salary Spread Rules, Tax Withholding, and Benefits Administration",
    description: "The compliance rules governing teacher salary spreads, correct tax withholding treatment, and benefits administration for private school employees.",
  },
  {
    slug: "school-substitute-teacher-payroll",
    title: "How to Run Payroll for Substitute Teachers: Daily Pay, W-2 Requirements, and ACA Tracking",
    description: "Substitute teachers are W-2 employees with daily pay structures and ACA eligibility tracking requirements. Here is how to handle it correctly.",
  },
  {
    slug: "education-payroll-cost",
    title: "How Much Does It Cost to Run Payroll for a Private School? In-House vs Managed",
    description: "A cost comparison of in-house payroll administration vs managed payroll for private and charter schools, including hidden costs most administrators miss.",
  },
  {
    slug: "outsource-education-payroll",
    title: "Why Private and Charter Schools Outsource Payroll - and What to Look For",
    description: "What drives private and charter schools to outsource payroll, what to look for in a provider, and how managed payroll compares to doing it in-house.",
  },
];

export default function EducationPayrollHubPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Business Executive Group", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Education</p>
              <h1>School and Education Payroll Guides</h1>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginTop: "1rem", color: "#444" }}>
                Payroll for private schools, charter schools, and education employers comes with unique complexity: 10-month salary spreads, substitute daily pay, 403(b) administration, and ACA tracking for variable-hour staff. These guides cover every layer of education payroll compliance.
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
                <Link href={`/blog/payroll/education/${post.slug}`} style={{ color: "#000", textDecoration: "underline" }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ lineHeight: "1.7", color: "#444" }}>{post.description}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Managed Payroll for Schools and Education Employers</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG handles education payroll at $25 to $45 per employee per month, including 10-month salary spreads, substitute tracking, and 403(b) administration. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/education"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Education Payroll Services
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
          { "@type": "ListItem", "position": 4, "name": "Education", "item": "https://www.beghr.com/blog/payroll/education" },
        ]
      }) }} />
    </article>
  );
}
