import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Agency Payroll Guides | Commission + Producer Pay | BEG',
  description: 'Insurance agency payroll guides covering producer commission, W-2 vs 1099 agents, compliance, and outsourcing. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/insurance-agency' },
  openGraph: {
    title: 'Insurance Agency Payroll Guides | Commission + Producer Pay | BEG',
    description: 'Insurance agency payroll guides covering producer commission, W-2 vs 1099 agents, compliance, and outsourcing. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://beghr.com/blog/payroll/insurance-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Insurance Agency Payroll Guides | Commission + Producer Pay | BEG', description: 'Insurance agency payroll guides covering producer commission, W-2 vs 1099 agents, compliance, and outsourcing. BEG managed payroll at $25-$45 PEPM.', images: ['https://beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: "Insurance Agency Payroll Guide: Producer Commission, Draws, and W-2 vs 1099 Agents (2026)",
    description: "Producer commission timing and reconciliation, draw vs commission payroll, W-2 captive agents vs 1099 independent agents, E&O deduction tracking, and multi-state compliance.",
    slug: "/blog/payroll/insurance-agency/insurance-agency-payroll-guide",
  },
  {
    title: "Insurance Producer Commission Payroll: How to Manage Timing, Draws, and Reconciliation",
    description: "How to handle commission timing when carriers pay 30-60 days after policy issue, draw accounting, clawback treatment, and reconciliation at year-end.",
    slug: "/blog/payroll/insurance-agency/insurance-producer-commission-payroll",
  },
  {
    title: "Captive vs. Independent Insurance Agent Payroll: W-2 vs 1099 Classification",
    description: "IRS common law test applied to insurance agents, statutory employee category, behavioral and financial control factors, and the VCSP path for agencies with misclassification risk.",
    slug: "/blog/payroll/insurance-agency/captive-vs-independent-agent-payroll",
  },
  {
    title: "Insurance Agency Payroll Compliance: State Producer Licensing, ERISA, and Benefits Administration",
    description: "FLSA exemptions by role, ERISA notice requirements, state commission timing laws, and how multi-state licensed producers create payroll compliance obligations.",
    slug: "/blog/payroll/insurance-agency/insurance-agency-payroll-compliance",
  },
  {
    title: "Why Insurance Agencies Outsource Payroll - Especially When Commission Is Involved",
    description: "The complexity of commission-based payroll, what triggers the outsourcing decision, and what changes immediately when an insurance agency moves to managed payroll.",
    slug: "/blog/payroll/insurance-agency/outsource-insurance-agency-payroll",
  }
];

export default function InsuranceAgencyPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Insurance Agencies</p>
              <h1>Insurance Agency Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Producer commission timing, captive vs independent agent classification, compliance guides, and outsourcing resources for insurance agencies nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Insurance Agency Payroll Resources</h2>
            <p>Guides covering commission payroll timing, draw reconciliation, W-2 vs 1099 classification, ERISA, and state producer licensing compliance.</p>
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
              { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
              { '@type': 'ListItem', position: 4, name: 'Insurance Agencies', item: 'https://beghr.com/blog/payroll/insurance-agency' },
            ],
          })
        }}
      />
    </>
  );
}
