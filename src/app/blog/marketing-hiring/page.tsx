import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marketing Hiring | BEG Blog',
  description: 'Marketing talent trends, hiring a marketing director, demand gen recruiting, and salary insights for leaders who need to fill marketing roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/marketing-hiring' },
  openGraph: {
    title: 'Marketing Hiring | BEG Blog',
    description: 'Marketing talent trends, hiring a marketing director, demand gen recruiting, and salary insights for leaders who need to fill marketing roles fast.',
    url: 'https://www.beghr.com/blog/marketing-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Marketing Hiring | BEG Blog', description: 'Marketing talent trends, hiring a marketing director, demand gen recruiting, and salary insights for leaders who need to fill marketing roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Marketing Talent Trends 2026: What Hiring Leaders Need to Know',
    description: 'The marketing skill set is shifting fast and the best people are passive. What the 2026 talent market means for hiring and how to fill roles anyway.',
    slug: '/blog/marketing-hiring/marketing-talent-trends',
  },
  {
    title: 'How to Hire a Marketing Director Fast (Without Settling)',
    description: 'A vacant marketing director seat stalls pipeline, brand, and growth. A practical playbook to hire a marketing director in 23-35 days.',
    slug: '/blog/marketing-hiring/hiring-a-marketing-director',
  },
  {
    title: 'Demand Gen Recruiting: How to Fill Pipeline-Driving Roles',
    description: 'Demand gen talent is measured on pipeline and revenue, which makes the best people hard to win. How to recruit demand gen managers fast.',
    slug: '/blog/marketing-hiring/demand-gen-recruiting',
  },
  {
    title: 'Marketing Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Marketing comp is climbing, but the best marketers are passive and pay is only part of the decision. What actually closes a marketing hire.',
    slug: '/blog/marketing-hiring/marketing-salary-trends',
  },
  {
    title: 'Marketing Interview Questions That Reveal Revenue Impact and Executional Depth',
    description: 'Every marketing candidate has a campaign story. These interview questions reveal whether that campaign moved pipeline, generated qualified leads, and had an ROI someone would defend to a CFO.',
    slug: '/blog/marketing-hiring/marketing-interview-questions',
  },
];

export default function BlogMarketingHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Marketing Hiring</p>
              <h1>Marketing Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent trends, marketing director and demand gen hiring strategies, recruiting playbooks, and compensation insights for leaders who need to fill marketing roles fast.
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
            <Link href="/services/job-placement/marketing" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Marketing Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Marketing Hiring', item: 'https://www.beghr.com/blog/marketing-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
