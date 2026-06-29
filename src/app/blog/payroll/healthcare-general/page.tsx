import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Payroll Guides | BEG Blog',
  description: 'Payroll guides, compliance resources, and managed payroll insights for healthcare business nationwide. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/healthcare-general' },
  openGraph: {
    title: 'Healthcare Payroll Guides | BEG Blog',
    description: 'Payroll guides, compliance resources, and managed payroll insights for healthcare business nationwide. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/healthcare-general',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Healthcare Payroll Guides | BEG Blog', description: 'Payroll guides, compliance resources, and managed payroll insights for healthcare business nationwide. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    "title": "Healthcare Clinic Payroll | Clinical Staff Pay. Done Right.",
    "description": "Healthcare clinic payroll outsourcing for urgent care, outpatient, and specialty clinics. Shift differentials, RVU comp, ACA tracking. Save $55K-$95K.",
    "slug": "/blog/payroll/healthcare-general/clinics-payroll"
  }
];

export default function HealthcareGeneralPayrollHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Healthcare General</p>
              <h1>Healthcare Payroll Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll guides, compliance resources, and managed payroll insights for healthcare business nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Healthcare Payroll Guides</h2>
            <p>Guides covering payroll compliance, cost comparisons, and best practices for healthcare business.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Healthcare General', item: 'https://www.beghr.com/blog/payroll/healthcare-general' },
            ],
          })
        }}
      />
    </>
  );
}
