import RelatedPosts from '@/components/RelatedPosts';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Services Payroll Guides | HVAC Plumbing Field Tech | BEG',
  description: 'Home services payroll guides for HVAC, plumbing, electrical, and field tech companies. Overtime, travel time, seasonal spikes, and outsourcing.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/home-services' },
  openGraph: {
    title: 'Home Services Payroll Guides | HVAC Plumbing Field Tech | BEG',
    description: 'Home services payroll guides for HVAC, plumbing, electrical, and field tech companies. Overtime, travel time, seasonal spikes, and outsourcing.',
    url: 'https://www.beghr.com/blog/payroll/home-services',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Home Services Payroll Guides | BEG', description: 'Home services payroll guides: field tech overtime, travel time, seasonal spikes, and cost comparisons.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Home Services Payroll Guide: HVAC, Plumbing, Electrical, and Field Tech Pay (2026)',
    description: 'Complete home services payroll guide covering field technician pay structures, overtime rules, drive time compensation, tool reimbursement, and seasonal workforce management.',
    slug: '/blog/payroll/home-services/home-services-payroll-guide',
  },
  {
    title: 'Field Technician Payroll Compliance: Overtime, Drive Time, and Tool Reimbursement Rules',
    description: 'FLSA compliance for field technicians: when drive time is compensable, overtime calculation for service techs, tool reimbursement minimum wage implications, and on-call pay rules.',
    slug: '/blog/payroll/home-services/field-technician-payroll-compliance',
  },
  {
    title: 'HVAC Company Payroll: Managing Seasonal Spikes, Overtime, and Multi-State Crews',
    description: 'How HVAC companies manage payroll through summer and winter demand spikes, handle overtime for seasonal technicians, and stay compliant with multi-state licensing and payroll requirements.',
    slug: '/blog/payroll/home-services/hvac-company-payroll',
  },
  {
    title: 'How Much Does It Cost to Run Payroll for a Home Services Company?',
    description: 'Real cost comparison of in-house payroll for home services companies: payroll specialist cost ($60K-$100K), software, compliance risk, versus managed payroll at $25-$45 PEPM.',
    slug: '/blog/payroll/home-services/home-services-payroll-cost',
  },
  {
    title: 'Outsourcing Payroll for Home Services Companies: What to Expect',
    description: 'What outsourced payroll covers for home services businesses, how it handles field tech overtime and drive time, and how BEG onboards home services companies in 3-5 business days.',
    slug: '/blog/payroll/home-services/outsource-home-services-payroll',
  },
];

export default function HomeServicesPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Home Services</p>
              <h1>Home Services Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Field technician overtime, drive time compliance, seasonal spikes, and payroll outsourcing guides for HVAC, plumbing, electrical, and home services companies nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Home Services Payroll Resources</h2>
            <p>Guides covering the payroll challenges specific to field-service businesses, from drive time compensation to seasonal staffing management.</p>
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
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <h2>Managed Payroll for Home Services Companies</h2>
          <p style={{ lineHeight: '1.7', marginBottom: '1.5rem' }}>
            BEG handles home services payroll at $25-$45 per employee per month, all-inclusive. Field tech overtime, drive time, seasonal volume management, and year-end tax forms. Setup takes 3-5 business days.
          </p>
          <Link href="/services/managed-payroll/home-services" className="btn btn--gold">
            Home Services Payroll Services
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
          { '@type': 'ListItem', position: 4, name: 'Home Services', item: 'https://www.beghr.com/blog/payroll/home-services' },
        ],
      }) }} />
    </>
  );
}
