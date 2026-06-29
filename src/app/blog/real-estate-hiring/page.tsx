import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Real Estate Hiring | BEG Blog',
  description: 'Real estate talent trends, hiring a property manager, asset manager recruiting, and salary insights for leaders who need to fill roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/real-estate-hiring' },
  openGraph: {
    title: 'Real Estate Hiring | BEG Blog',
    description: 'Real estate talent trends, hiring a property manager, asset manager recruiting, and salary insights for leaders who need to fill roles fast.',
    url: 'https://www.beghr.com/blog/real-estate-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Real Estate Hiring | BEG Blog', description: 'Real estate talent trends, hiring a property manager, asset manager recruiting, and salary insights for leaders who need to fill roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Real Estate Talent Trends in 2026: What Owners and Operators Need to Know',
    description: 'A thin bench of property and asset management talent is reshaping real estate hiring. What the 2026 picture means and how to fill roles anyway.',
    slug: '/blog/real-estate-hiring/real-estate-talent-trends',
  },
  {
    title: 'How to Hire a Property Manager Fast (Without Settling)',
    description: 'A vacant property manager seat risks tenant retention, NOI, and asset value. A practical playbook to hire a property manager in 23-35 days.',
    slug: '/blog/real-estate-hiring/hiring-a-property-manager',
  },
  {
    title: 'Asset Manager Recruiting: Hiring the Role That Protects Returns',
    description: 'A vacant asset manager seat puts portfolio performance at risk. How to recruit and close a strong asset manager fast.',
    slug: '/blog/real-estate-hiring/asset-manager-recruiting',
  },
  {
    title: 'Real Estate Salary Trends 2026: Why Pay Alone Does Not Close Hires',
    description: 'Real estate comp is climbing and the best candidates are passive. What actually closes a real estate hire beyond the salary number.',
    slug: '/blog/real-estate-hiring/real-estate-salary-trends',
  },
];

export default function BlogRealEstateHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Real Estate Hiring</p>
              <h1>Real Estate Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent trends, property manager and asset manager recruiting strategies, and compensation insights for owners and operators who need to fill roles fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="head center reveal">
            <h2>Featured Posts</h2>
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
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/services/job-placement/real-estate" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Real Estate Placement &rarr;
            </Link>
          </div>
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
              { '@type': 'ListItem', position: 3, name: 'Real Estate Hiring', item: 'https://www.beghr.com/blog/real-estate-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
