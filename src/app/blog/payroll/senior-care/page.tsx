import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Senior Care Payroll Guides | CNA Overtime + Compliance | BEG',
  description: 'Senior care payroll guides covering CNA overtime, shift differentials, CMS compliance, memory care, assisted living, and outsourcing. BEG at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/senior-care' },
  openGraph: {
    title: 'Senior Care Payroll Guides | CNA Overtime + Compliance | BEG',
    description: 'Senior care payroll guides covering CNA overtime, shift differentials, CMS compliance, memory care, assisted living, and outsourcing. BEG at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/senior-care',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Senior Care Payroll Guides | BEG', description: 'Senior care payroll guides: CNA overtime, shift differentials, CMS compliance, and outsourcing.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Senior Care Facility Payroll Guide: CNA Overtime, Shift Differentials, and CMS Compliance (2026)',
    description: 'Complete senior care payroll guide covering CNA and nurse overtime rules, shift differential configuration, CMS staffing requirements, and payroll compliance for nursing homes, ALFs, and memory care.',
    slug: '/blog/payroll/senior-care/senior-care-payroll-guide',
  },
  {
    title: 'Nursing Home Payroll Compliance: CMS Staffing Requirements, FLSA, and State Wage Laws',
    description: 'How nursing homes meet CMS minimum staffing mandates while staying compliant with FLSA overtime rules, state nursing home wage laws, and ACA reporting requirements.',
    slug: '/blog/payroll/senior-care/nursing-home-payroll-compliance',
  },
  {
    title: 'How to Handle Shift Differential Payroll in Senior Care Facilities',
    description: 'Step-by-step guide to configuring night, weekend, and holiday shift differentials in senior care payroll, calculating blended overtime rates, and documenting differentials for compliance.',
    slug: '/blog/payroll/senior-care/senior-care-shift-differential-payroll',
  },
  {
    title: 'Memory Care and Assisted Living Payroll: What Makes It Different and How to Manage It',
    description: 'Payroll differences between memory care units, assisted living facilities, and nursing homes, including staffing ratios, wage premiums, high-turnover onboarding, and state licensing requirements.',
    slug: '/blog/payroll/senior-care/memory-care-assisted-living-payroll',
  },
  {
    title: 'Should Senior Care Facilities Outsource Payroll? What Operators Need to Know',
    description: 'Why senior care operators outsource payroll, what a managed provider covers, cost comparison vs in-house, and how BEG onboards senior care facilities in 3-5 business days.',
    slug: '/blog/payroll/senior-care/outsource-senior-care-payroll',
  },
];

export default function SeniorCarePayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Senior Care</p>
              <h1>Senior Care Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                CNA overtime, shift differential payroll, CMS compliance, and outsourcing guides for nursing homes, assisted living, and memory care facilities nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Senior Care Payroll Resources</h2>
            <p>Guides covering the payroll challenges specific to senior care operations, from shift differentials to CMS staffing compliance.</p>
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
          <h2>Managed Payroll for Senior Care Facilities</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
            BEG handles senior care payroll at $25-$45 per employee per month, all-inclusive. CNA overtime, shift differentials, multi-location facilities, and year-end tax forms. Setup takes 3-5 business days.
          </p>
          <Link href="/services/managed-payroll/senior-care" className="btn btn--gold">
            Senior Care Payroll Services
          </Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Senior Care', item: 'https://www.beghr.com/blog/payroll/senior-care' },
        ],
      }) }} />
    </>
  );
}
