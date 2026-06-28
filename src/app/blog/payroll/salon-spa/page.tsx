import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Salon & Spa Payroll Guides | Booth Rental + Tips | BEG",
  description: "Payroll guides for salons and spas: booth rental classification, commission payroll, tip credit, and W-2 vs 1099 rules. BEG managed payroll at $25-$45 PEPM.",
  alternates: { canonical: "https://beghr.com/blog/payroll/salon-spa" },
  openGraph: {
    title: "Salon & Spa Payroll Guides | Booth Rental + Tips | BEG",
    description: "Payroll guides for salons and spas: booth rental classification, commission payroll, tip credit, and W-2 vs 1099 rules. BEG managed payroll at $25-$45 PEPM.",
    url: "https://beghr.com/blog/payroll/salon-spa",
    siteName: "Business Executive Group",
    images: [{ url: "https://beghr.com/assets/og-image.png", width: 1200, height: 630, alt: "Business Executive Group" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Salon & Spa Payroll Guides | Booth Rental + Tips | BEG", description: "Salon and spa payroll guides: booth rental, commission, tips, and worker classification.", images: ["https://beghr.com/assets/og-image.png"] },
};

const posts = [
  {
    slug: "salon-spa-payroll-guide",
    title: "Salon and Spa Payroll Guide: Booth Rental, Commission, Tips, and W-2 vs 1099 (2026)",
    description: "A complete guide to salon and spa payroll: IRS booth rental classification, W-2 employee stylist payroll, commission structures, tip credit, and cosmetology minimum wage rules.",
  },
  {
    slug: "salon-booth-rental-payroll-classification",
    title: "Salon Booth Rental vs Employee: How to Classify Stylists for Payroll and Taxes",
    description: "The IRS test for independent contractor vs employee classification in salon settings, what booth rental contracts must say to support IC status, and the risks of misclassification.",
  },
  {
    slug: "salon-commission-payroll",
    title: "Salon Commission Payroll: How to Handle Percentage Splits, Product Chargebacks, and Tip Pooling",
    description: "How to correctly process salon stylist commission payroll: percentage splits, product sales chargebacks, tip pooling, and minimum wage compliance for commission-based employees.",
  },
  {
    slug: "spa-payroll-compliance",
    title: "Day Spa Payroll Compliance: Massage Therapist Classification, Tip Reporting, and State Wage Laws",
    description: "Payroll compliance for day spas: correct classification of massage therapists and estheticians, tip reporting obligations, and state-specific wage rules for spa employees.",
  },
  {
    slug: "outsource-salon-spa-payroll",
    title: "Why Salons and Spas Outsource Payroll - and What to Look For in a Provider",
    description: "What drives salons and spas to outsource payroll, what to look for in a provider experienced with commission and tip-based compensation, and what changes immediately after switching.",
  },
];

export default function SalonSpaPayrollHubPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Salon and Spa</p>
              <h1>Salon and Spa Payroll Guides</h1>
              <p style={{ fontSize: "1.05rem", lineHeight: "1.7", marginTop: "1rem", color: "#444" }}>
                Salon and spa payroll sits at the intersection of worker classification rules, commission-based pay, tip credit law, and cosmetology licensing requirements. Whether you have W-2 stylists, booth renters, or both, these guides cover everything you need to stay compliant.
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
                <Link href={`/blog/payroll/salon-spa/${post.slug}`} style={{ color: "#000", textDecoration: "underline" }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ lineHeight: "1.7", color: "#444" }}>{post.description}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#f5f0e8", border: "2px solid #ECAC60", borderRadius: "8px", padding: "2rem", marginBottom: "2.5rem" }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.75rem" }}>Managed Payroll for Salons and Spas</h3>
          <p style={{ lineHeight: "1.7", marginBottom: "1rem" }}>
            BEG manages salon and spa payroll at $25 to $45 per employee per month, including commission payroll, tip credit, and mixed W-2 and booth-renter configurations. Setup in 3 to 5 business days.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href="/services/managed-payroll/salon-spa"
              style={{ display: "inline-block", background: "#000", color: "#fff", fontWeight: 700, padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none" }}
            >
              Salon and Spa Payroll Services
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
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://beghr.com" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://beghr.com/blog" },
          { "@type": "ListItem", "position": 3, "name": "Payroll", "item": "https://beghr.com/blog/payroll" },
          { "@type": "ListItem", "position": 4, "name": "Salon and Spa", "item": "https://beghr.com/blog/payroll/salon-spa" },
        ]
      }) }} />
    </article>
  );
}
