import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Farm & Agriculture Payroll Guides | H-2A + Seasonal | BEG',
  description: 'Agriculture payroll guides covering H-2A workers, seasonal crews, piece rate compliance, MSPA requirements, and farm payroll outsourcing.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/agriculture' },
  openGraph: {
    title: 'Farm & Agriculture Payroll Guides | H-2A + Seasonal | BEG',
    description: 'Agriculture payroll guides covering H-2A workers, seasonal crews, piece rate compliance, MSPA requirements, and farm payroll outsourcing.',
    url: 'https://www.beghr.com/blog/payroll/agriculture',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Farm & Agriculture Payroll Guides | BEG', description: 'Agriculture payroll guides: H-2A workers, seasonal crews, piece rate, and farm payroll outsourcing.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Farm and Agriculture Payroll Guide: H-2A Workers, Seasonal Crews, and MSPA Compliance (2026)',
    description: 'Complete guide to agricultural payroll covering H-2A visa workers, seasonal crew pay, FLSA agricultural exemptions, and Migrant and Seasonal Agricultural Worker Protection Act requirements.',
    slug: '/blog/payroll/agriculture/agriculture-farm-payroll-guide',
  },
  {
    title: 'H-2A Agricultural Worker Payroll: Housing Deductions, Piece Rate, and DOL Compliance',
    description: 'How to process H-2A worker wages, calculate allowable housing and meal deductions, handle piece rate and Adverse Effect Wage Rate requirements, and stay DOL compliant.',
    slug: '/blog/payroll/agriculture/h2a-worker-payroll-compliance',
  },
  {
    title: 'Seasonal Agricultural Payroll: How to Hire, Pay, and Terminate Farm Workers at Scale',
    description: 'Operational guide to managing payroll for seasonal agricultural workers from first hire to year-end. FLSA agricultural exemptions, peak-season ramp-up, and end-of-season offboarding.',
    slug: '/blog/payroll/agriculture/seasonal-agricultural-payroll',
  },
  {
    title: 'Piece Rate Payroll for Agricultural Workers: How to Calculate It Correctly',
    description: 'Step-by-step piece rate calculation for farm workers, minimum wage floor requirements, overtime for piece rate workers, and record-keeping obligations under FLSA.',
    slug: '/blog/payroll/agriculture/piece-rate-payroll-farms',
  },
  {
    title: 'Why Farm and Agriculture Businesses Outsource Payroll (And What to Look For)',
    description: 'Why agriculture operations outsource payroll, what a managed provider covers, and how BEG handles H-2A compliance, seasonal volumes, and piece rate processing at $25-$45 PEPM.',
    slug: '/blog/payroll/agriculture/farm-payroll-outsourcing',
  },
];

export default function AgriculturePayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Agriculture</p>
              <h1>Farm and Agriculture Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                H-2A compliance, seasonal crew management, piece rate payroll, and outsourcing guides for farm and agricultural operations nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Agriculture Payroll Resources</h2>
            <p>Guides covering the unique payroll challenges farm operations face, from H-2A visa workers to seasonal ramp-up and piece rate compliance.</p>
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
        { category: "Payroll", title: "Architecture Firm Payroll Guides | Project Billing + Partners", excerpt: "Architecture firm payroll guides covering project-coded billing, licensed staff, partner draws, and...", href: "/blog/payroll/architecture" },
        { category: "Payroll", title: "Auto Dealership Payroll Guides", excerpt: "Payroll guides, compliance resources, and managed payroll insights for auto dealership nationwide....", href: "/blog/payroll/auto-dealership" },
      ]} />
      </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <h2>Managed Payroll for Agricultural Operations</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
            BEG handles farm and agriculture payroll at $25-$45 per employee per month, all-inclusive. H-2A compliance, piece rate calculations, seasonal volume management, and year-end tax forms. Setup takes 3-5 business days.
          </p>
          <Link href="/services/managed-payroll/agriculture" className="btn btn--gold">
            Agriculture Payroll Services
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
          { '@type': 'ListItem', position: 4, name: 'Agriculture', item: 'https://www.beghr.com/blog/payroll/agriculture' },
        ],
      }) }} />
    </>
  );
}
