import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Skilled Trades Hiring | BEG Blog',
  description: 'Skilled trades shortage trends, hiring electricians, maintenance tech recruiting, and trades salary insights for employers who need to fill roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/trades-hiring' },
  openGraph: {
    title: 'Skilled Trades Hiring | BEG Blog',
    description: 'Skilled trades shortage trends, hiring electricians, maintenance tech recruiting, and trades salary insights for employers who need to fill roles fast.',
    url: 'https://www.beghr.com/blog/trades-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Skilled Trades Hiring | BEG Blog', description: 'Skilled trades shortage trends, hiring electricians, maintenance tech recruiting, and trades salary insights for employers who need to fill roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Skilled Trades Shortage in 2026: What Employers Need to Know',
    description: 'Retirements are up, the pipeline is thin, and demand keeps climbing. What the skilled trades shortage means for hiring and how to fill roles anyway.',
    slug: '/blog/trades-hiring/skilled-trades-shortage',
  },
  {
    title: 'How to Hire Electricians Fast (Without Settling)',
    description: 'Licensed electricians are scarce and in demand. A practical playbook to source and hire qualified electricians in 23-35 days.',
    slug: '/blog/trades-hiring/hiring-electricians',
  },
  {
    title: 'Maintenance Tech Recruiting: Filling the Roles That Keep You Running',
    description: 'A vacant maintenance tech seat means more downtime and overtime. How to recruit and hire reliable maintenance technicians fast.',
    slug: '/blog/trades-hiring/maintenance-tech-recruiting',
  },
  {
    title: 'Skilled Trades Salary Trends 2026: Why Pay Alone Does Not Win',
    description: 'Trades pay is climbing, but the best candidates are working and passive, and pay is only part of the decision. What actually closes a trades hire.',
    slug: '/blog/trades-hiring/trades-salary-trends',
  },
];

export default function BlogTradesHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Skilled Trades Hiring</p>
              <h1>Skilled Trades Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent shortage trends, electrician and maintenance tech hiring strategies, recruiting playbooks, and compensation insights for employers who need to fill skilled trades roles fast.
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
            <Link href="/services/job-placement/trades" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Skilled Trades Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Trades Hiring', item: 'https://www.beghr.com/blog/trades-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
