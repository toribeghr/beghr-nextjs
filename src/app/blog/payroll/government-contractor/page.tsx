import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Government Contractor Payroll Guides | SCA + Davis-Bacon | BEG',
  description: 'Government contractor payroll guides covering Davis-Bacon, Service Contract Act, fringe benefits, DoD requirements, and outsourcing. BEG at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/government-contractor' },
  openGraph: {
    title: 'Government Contractor Payroll Guides | SCA + Davis-Bacon | BEG',
    description: 'Government contractor payroll guides covering Davis-Bacon, Service Contract Act, fringe benefits, DoD requirements, and outsourcing. BEG at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/government-contractor',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Government Contractor Payroll Guides | BEG', description: 'Government contractor payroll guides: SCA, Davis-Bacon, fringe benefits, DoD compliance, and outsourcing.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Government Contractor Payroll Guide: Certified Payroll, SCA, and Davis-Bacon Compliance (2026)',
    description: 'Overview guide to government contractor payroll covering certified payroll reporting, Service Contract Act applicability, Davis-Bacon prevailing wages, and contract-specific compliance requirements.',
    slug: '/blog/payroll/government-contractor/government-contractor-payroll-guide',
  },
  {
    title: 'Service Contract Act (SCA) Payroll Compliance: What Government Service Contractors Must Know',
    description: 'Complete SCA payroll guide: wage determination applicability, health and welfare benefits, contractor compliance obligations, enforcement, and how managed payroll handles SCA requirements.',
    slug: '/blog/payroll/government-contractor/service-contract-act-payroll',
  },
  {
    title: 'Fringe Benefit Requirements for Government Contractors: SCA and Davis-Bacon Explained',
    description: 'How government contractors satisfy fringe benefit requirements under SCA and Davis-Bacon: bona fide benefits vs cash-in-lieu, health and welfare rates, pension contributions, and documentation.',
    slug: '/blog/payroll/government-contractor/government-contractor-fringe-benefits-payroll',
  },
  {
    title: 'DoD Contractor Payroll: ITAR, Security Clearance Labor Tracking, and Compliance Requirements',
    description: 'Payroll requirements specific to Department of Defense contractors: cleared employee tracking, ITAR labor cost documentation, DCAA audit readiness, and indirect cost allocation.',
    slug: '/blog/payroll/government-contractor/dod-contractor-payroll-requirements',
  },
  {
    title: 'Why Government Contractors Outsource Payroll (And What to Look For in a Provider)',
    description: 'Why government contractors outsource payroll, what a managed provider covers for SCA and Davis-Bacon compliance, and how BEG onboards contractors in 3-5 business days.',
    slug: '/blog/payroll/government-contractor/outsource-government-contractor-payroll',
  },
];

export default function GovernmentContractorPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Government Contractor</p>
              <h1>Government Contractor Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Certified payroll, SCA compliance, Davis-Bacon fringe benefits, DoD requirements, and payroll outsourcing guides for federal and state government contractors nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Government Contractor Payroll Resources</h2>
            <p>Guides covering the compliance requirements specific to government contractors, from prevailing wages to fringe benefits and DCAA audit readiness.</p>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
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
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <h2>Managed Payroll for Government Contractors</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
            BEG handles government contractor payroll at $25-$45 per employee per month, all-inclusive. SCA compliance, Davis-Bacon certified payroll, fringe benefit tracking, and year-end tax forms. Setup takes 3-5 business days.
          </p>
          <Link href="/services/managed-payroll/government-contractor" className="btn btn--gold">
            Government Contractor Payroll Services
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
          { '@type': 'ListItem', position: 4, name: 'Government Contractor', item: 'https://www.beghr.com/blog/payroll/government-contractor' },
        ],
      }) }} />
    </>
  );
}
