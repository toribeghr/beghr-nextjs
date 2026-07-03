import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payroll How-To Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for businesses nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/how-to' },
  openGraph: {
    title: 'Payroll How-To Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for businesses nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/how-to',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Payroll How-To Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for businesses nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "How to Calculate Overtime Pay Correctly",
    "description": "How to Calculate Overtime Pay Correctly. Step-by-step guidance from BEG managed payroll specialists. Questions? Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-calculate-overtime-pay"
  },
  {
    "title": "How to Calculate Payroll Taxes: Employer Guide",
    "description": "How to Calculate Payroll Taxes: Employer Guide. Step-by-step guidance from BEG managed payroll specialists. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-calculate-payroll-taxes"
  },
  {
    "title": "How to Handle Year-End Payroll and W-2 Preparation",
    "description": "How to Handle Year-End Payroll and W-2 Preparation. Step-by-step guidance from BEG managed payroll specialists. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-do-year-end-payroll-w2"
  },
  {
    "title": "How to Fix a Payroll Mistake: Step-by-Step Guide",
    "description": "How to Fix a Payroll Mistake: Step-by-Step Guide. Step-by-step guidance from BEG managed payroll specialists. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-fix-payroll-mistake"
  },
  {
    "title": "How to Handle a Final Paycheck When an Employee Leaves",
    "description": "How to Handle a Final Paycheck When an Employee Leaves. Step-by-step guidance from BEG managed payroll specialists. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-handle-final-paycheck"
  },
  {
    "title": "How to Handle Payroll During FMLA or Medical Leave",
    "description": "How to Handle Payroll During FMLA or Medical Leave. Step-by-step guidance from BEG managed payroll specialists. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-handle-payroll-during-leave"
  },
  {
    "title": "How to Handle Payroll for Remote Employees",
    "description": "How to Handle Payroll for Remote Employees. Step-by-step guidance from BEG managed payroll specialists. Questions? Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-handle-payroll-for-remote-employees"
  },
  {
    "title": "How to Handle Wage Garnishments in Payroll",
    "description": "How to Handle Wage Garnishments in Payroll. Step-by-step guidance from BEG managed payroll specialists. Questions? Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-handle-payroll-garnishments"
  },
  {
    "title": "How to Manage Payroll Across Multiple States",
    "description": "How to Manage Payroll Across Multiple States. Step-by-step guidance from BEG managed payroll specialists. Questions? Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-manage-payroll-multiple-states"
  },
  {
    "title": "How to Manage Tip Credit in Payroll",
    "description": "How to Manage Tip Credit in Payroll. Step-by-step guidance from BEG managed payroll specialists. Questions? Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-manage-tip-credit-payroll"
  },
  {
    "title": "How to Onboard a New Employee in Your Payroll System",
    "description": "How to Onboard a New Employee in Your Payroll System. Step-by-step guidance from BEG managed payroll specialists. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-onboard-new-employee-payroll"
  },
  {
    "title": "How to Process Commission-Based Payroll",
    "description": "How to Process Commission-Based Payroll. Step-by-step guidance from BEG managed payroll specialists. Questions? Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-process-commission-payroll"
  },
  {
    "title": "How to Process Payroll for Independent Contractors",
    "description": "How to Process Payroll for Independent Contractors. Step-by-step guidance from BEG managed payroll specialists. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-process-payroll-for-contractors"
  },
  {
    "title": "How to Read a Payroll Report: Guide for Business Own..",
    "description": "How to Read a Payroll Report: Guide for Business Owners. Step-by-step guidance from BEG managed payroll specialists. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-read-payroll-report"
  },
  {
    "title": "How to Run Your First Payroll: Step-by-Step Guide",
    "description": "How to Run Your First Payroll: Step-by-Step Guide. Step-by-step guidance from BEG managed payroll specialists. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-run-first-payroll"
  },
  {
    "title": "How to Set Up Direct Deposit for Employees",
    "description": "How to Set Up Direct Deposit for Employees. Step-by-step guidance from BEG managed payroll specialists. Questions? Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-set-up-direct-deposit"
  },
  {
    "title": "How to Set Up Payroll Deductions for Benefits",
    "description": "How to Set Up Payroll Deductions for Benefits. Step-by-step guidance from BEG managed payroll specialists. Questions? Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-set-up-payroll-deductions"
  },
  {
    "title": "How to Set Up Payroll for a New Business",
    "description": "How to Set Up Payroll for a New Business. Step-by-step guidance from BEG managed payroll specialists. Questions? Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-set-up-payroll-new-business"
  },
  {
    "title": "How to Switch Payroll Providers Without Losing Data",
    "description": "How to Switch Payroll Providers Without Losing Data. Step-by-step guidance from BEG managed payroll specialists. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-switch-payroll-providers"
  },
  {
    "title": "How to Transition from Manual Payroll to Outsourcing",
    "description": "How to Transition from Manual Payroll to Outsourcing. Step-by-step guidance from BEG managed payroll specialists. Get instant pricing at beghr.com.",
    "slug": "/blog/payroll/how-to/how-to-transition-from-manual-payroll"
  }
];

export default function HowToPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Payroll How-To Resources</p>
              <h1>Payroll How-To Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for businesses nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Payroll How-To Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for businesses.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Payroll How-To Resources', item: 'https://www.beghr.com/blog/payroll/how-to' },
            ],
          })
        }}
      />
    </>
  );
}
