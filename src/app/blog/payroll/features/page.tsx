import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Managed Payroll Features Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for managed payroll nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/features' },
  openGraph: {
    title: 'Managed Payroll Features Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for managed payroll nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/features',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Managed Payroll Features Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for managed payroll nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "Benefits Deductions in Managed Payroll: What Gets Ha..",
    "description": "Benefits Deductions in Managed Payroll: What Gets Handled. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/benefits-deductions-payroll"
  },
  {
    "title": "How Managed Payroll Handles Bonus Pay",
    "description": "How Managed Payroll Handles Bonus Pay. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/bonus-payroll-processing"
  },
  {
    "title": "Direct Deposit in Managed Payroll: How It Works",
    "description": "Direct Deposit in Managed Payroll: How It Works. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/direct-deposit-managed-payroll"
  },
  {
    "title": "Wage Garnishment Processing in Managed Payroll",
    "description": "Wage Garnishment Processing in Managed Payroll. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/garnishment-processing-managed-payroll"
  },
  {
    "title": "Multi-State Payroll Tax Filing: What Managed Payroll..",
    "description": "Multi-State Payroll Tax Filing: What Managed Payroll Handles. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at",
    "slug": "/blog/payroll/features/multi-state-payroll-tax-filing"
  },
  {
    "title": "New Hire Paperwork and Payroll Onboarding",
    "description": "New Hire Paperwork and Payroll Onboarding. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/new-hire-paperwork-payroll-onboarding"
  },
  {
    "title": "Off-Cycle Payroll Runs: When and How They Work",
    "description": "Off-Cycle Payroll Runs: When and How They Work. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/off-cycle-payroll-runs"
  },
  {
    "title": "Payroll for Commission-Only and Draw-Against Employees",
    "description": "Payroll for Commission-Only and Draw-Against Employees. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/payroll-for-commission-employees"
  },
  {
    "title": "Managing Payroll Across Multiple EINs or Entities",
    "description": "Managing Payroll Across Multiple EINs or Entities. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/payroll-for-multiple-ein"
  },
  {
    "title": "Managed Payroll for Tipped Employees: Full Compliance",
    "description": "Managed Payroll for Tipped Employees: Full Compliance. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/payroll-for-tipped-employees"
  },
  {
    "title": "Payroll Integration with QuickBooks and Accounting S..",
    "description": "Payroll Integration with QuickBooks and Accounting Software. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at",
    "slug": "/blog/payroll/features/payroll-integration-accounting-software"
  },
  {
    "title": "Payroll Reports Every Business Owner Should Review",
    "description": "Payroll Reports Every Business Owner Should Review. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/payroll-reporting-for-business-owners"
  },
  {
    "title": "Weekly, Bi-Weekly, Semi-Monthly Payroll: Which Is Be..",
    "description": "Weekly, Bi-Weekly, Semi-Monthly Payroll: Which Is Best?. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/payroll-run-frequency-options"
  },
  {
    "title": "Payroll Tax Credits: What Managed Payroll Can Capture",
    "description": "Payroll Tax Credits: What Managed Payroll Can Capture. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/payroll-tax-credits-managed"
  },
  {
    "title": "How Managed Payroll Handles IRS and State Tax Notices",
    "description": "How Managed Payroll Handles IRS and State Tax Notices. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/payroll-tax-notices-handled"
  },
  {
    "title": "Pay Stub Requirements by State: 2026 Compliance Guide",
    "description": "Pay Stub Requirements by State: 2026 Compliance Guide. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/paystub-requirements-by-state"
  },
  {
    "title": "PTO Accrual Tracking in Managed Payroll Systems",
    "description": "PTO Accrual Tracking in Managed Payroll Systems. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/pto-accrual-tracking-payroll"
  },
  {
    "title": "Same-Day Payroll Processing: When It Matters",
    "description": "Same-Day Payroll Processing: When It Matters. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/same-day-payroll-processing"
  },
  {
    "title": "Voluntary Payroll Deductions: 401k, FSA, HSA, and More",
    "description": "Voluntary Payroll Deductions: 401k, FSA, HSA, and More. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/voluntary-deductions-payroll"
  },
  {
    "title": "W-2 and 1099 Filing Through Managed Payroll",
    "description": "W-2 and 1099 Filing Through Managed Payroll. Expert guidance from BEG managed payroll at $25-$45 PEPM. Book a free 15-min call at beghr.com.",
    "slug": "/blog/payroll/features/w2-1099-filing-managed-payroll"
  }
];

export default function FeaturesPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Payroll Features</p>
              <h1>Managed Payroll Features Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for managed payroll nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Managed Payroll Features Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for managed payroll.</p>
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
              { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
              { '@type': 'ListItem', position: 4, name: 'Payroll Features', item: 'https://www.beghr.com/blog/payroll/features' },
            ],
          })
        }}
      />
    </>
  );
}
