import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Staffing Agency Payroll Guides | W-2, 1099 & Compliance | BEG',
  description: 'Staffing agency payroll guides covering W-2 vs 1099 classification, compliance, costs, and outsourcing. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/staffing-agency' },
  openGraph: {
    title: 'Staffing Agency Payroll Guides | W-2, 1099 & Compliance | BEG',
    description: 'Staffing agency payroll guides covering W-2 vs 1099 classification, compliance, costs, and outsourcing. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://beghr.com/blog/payroll/staffing-agency',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Staffing Agency Payroll Guides | BEG', description: 'Staffing agency payroll guides covering W-2 vs 1099 classification, compliance, costs, and outsourcing.', images: ['https://beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Staffing Agency Payroll: The Complete Guide to W-2 and 1099 Management (2026)',
    description: 'W-2 vs 1099 classification, weekly payroll cycles, co-employment risk, multi-state compliance, and year-end volume management for staffing agencies.',
    slug: '/blog/payroll/staffing-agency/staffing-agency-payroll-guide',
  },
  {
    title: 'Staffing Agency Payroll Compliance: IRS Classification, FLSA, and State Requirements (2026)',
    description: 'IRS worker classification test, FLSA application to temp workers, state registration for placed workers, workers comp, and multi-state new hire reporting.',
    slug: '/blog/payroll/staffing-agency/staffing-agency-payroll-compliance',
  },
  {
    title: 'How Much Does Staffing Agency Payroll Cost? In-House vs Managed Service',
    description: 'Compare the true cost of an in-house payroll specialist ($60K-$100K+) versus managed payroll at $25-$45 PEPM for staffing agencies of all sizes.',
    slug: '/blog/payroll/staffing-agency/staffing-agency-payroll-cost',
  },
  {
    title: 'Should You Outsource Staffing Agency Payroll? What to Know Before You Decide',
    description: 'What outsourcing covers, how it handles W-2 vs 1099 classification, weekly cycle management, and how BEG onboards staffing agencies in 3-5 business days.',
    slug: '/blog/payroll/staffing-agency/outsource-staffing-agency-payroll',
  },
  {
    title: 'The 7 Most Common Staffing Agency Payroll Problems (and How to Fix Them)',
    description: 'Misclassification, missing state registrations, late W-2 filing, overtime errors, garnishment processing, multi-state SUI, and year-end W-2 volume issues.',
    slug: '/blog/payroll/staffing-agency/staffing-agency-payroll-problems',
  },
];

export default function StaffingAgencyPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Staffing Agencies</p>
              <h1>Staffing Agency Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                W-2 and 1099 management, compliance, cost comparisons, and outsourcing guides for staffing and recruiting agencies nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Staffing Agency Payroll Resources</h2>
            <p>Guides covering every major payroll challenge staffing agencies face, from worker classification to multi-state compliance.</p>
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
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <h2>Managed Payroll for Staffing Agencies</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
            BEG handles staffing agency payroll at $25-$45 per employee per month, all-inclusive. Weekly payroll cycles, W-2 and 1099 processing, multi-state filings, and year-end tax forms. Setup takes 3-5 business days.
          </p>
          <Link href="/services/managed-payroll/staffing-agency" className="btn btn--gold">
            Staffing Agency Payroll Services
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Staffing Agency', item: 'https://beghr.com/blog/payroll/staffing-agency' },
        ],
      }) }} />
    </>
  );
}
