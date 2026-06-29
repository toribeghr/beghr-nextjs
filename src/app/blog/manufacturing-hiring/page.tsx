import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Manufacturing Hiring | BEG Blog',
  description: 'Manufacturing talent shortage trends, plant manager and quality engineer hiring, and salary insights for operations leaders who fill roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/manufacturing-hiring' },
  openGraph: {
    title: 'Manufacturing Hiring | BEG Blog',
    description: 'Manufacturing talent shortage trends, plant manager and quality engineer hiring, and salary insights for operations leaders who fill roles fast.',
    url: 'https://www.beghr.com/blog/manufacturing-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Manufacturing Hiring | BEG Blog', description: 'Manufacturing talent shortage trends, plant manager and quality engineer hiring, and salary insights for operations leaders who fill roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Manufacturing Talent Shortage in 2026: What Operations Leaders Need to Know',
    description: 'Skilled trades are retiring faster than they can be replaced and the pipeline is thin. What the shortage means for hiring and how to fill roles anyway.',
    slug: '/blog/manufacturing-hiring/manufacturing-talent-shortage',
  },
  {
    title: 'How to Hire a Plant Manager Fast (Without Settling)',
    description: 'A vacant plant manager seat puts throughput, safety, and margins at risk. A practical playbook to hire a plant manager in 23-35 days.',
    slug: '/blog/manufacturing-hiring/hiring-a-plant-manager',
  },
  {
    title: 'Quality Engineer Recruiting: How to Find and Close Strong Candidates',
    description: 'Quality engineers protect your compliance and your customers. How to source and close strong quality talent in a tight manufacturing market.',
    slug: '/blog/manufacturing-hiring/quality-engineer-recruiting',
  },
  {
    title: 'Manufacturing Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Manufacturing comp is climbing, but the best candidates are passive and pay is only part of the decision. What actually closes a manufacturing hire.',
    slug: '/blog/manufacturing-hiring/manufacturing-salary-trends',
  },
  {
    title: 'Manufacturing Interview Questions for Plant Managers, Quality Leaders, and Ops Directors',
    description: 'Every manufacturing candidate can discuss lean. These interview questions reveal whether they have actually improved OEE, reduced scrap, or turned around a struggling plant and sustained the gain.',
    slug: '/blog/manufacturing-hiring/manufacturing-interview-questions',
  },
];

export default function BlogManufacturingHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Manufacturing Hiring</p>
              <h1>Manufacturing Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent shortage trends, plant manager and quality engineer hiring strategies, and compensation insights for operations leaders who need to fill roles fast.
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
            <Link href="/services/job-placement/manufacturing" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Manufacturing Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Manufacturing Hiring', item: 'https://www.beghr.com/blog/manufacturing-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
