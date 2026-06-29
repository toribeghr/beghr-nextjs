import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Hospitality Hiring | BEG Blog',
  description: 'Hospitality talent shortage trends, general manager and F&B hiring, and comp insights for operators who need to fill leadership roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/hospitality-hiring' },
  openGraph: {
    title: 'Hospitality Hiring | BEG Blog',
    description: 'Hospitality talent shortage trends, general manager and F&B hiring, and comp insights for operators who need to fill leadership roles fast.',
    url: 'https://www.beghr.com/blog/hospitality-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Hospitality Hiring | BEG Blog', description: 'Hospitality talent shortage trends, general manager and F&B hiring, and comp insights for operators who need to fill leadership roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Hospitality Talent Shortage in 2026: What Operators Need to Know',
    description: 'Turnover is high, the leadership pipeline is thin, and demand has bounced back. What the hospitality shortage means for hiring and how to fill roles anyway.',
    slug: '/blog/hospitality-hiring/hospitality-talent-shortage',
  },
  {
    title: 'How to Hire a General Manager Fast (Without Settling)',
    description: 'A vacant GM seat puts your service, your numbers, and your team at risk. A practical playbook to hire a general manager in 23-35 days.',
    slug: '/blog/hospitality-hiring/hiring-a-general-manager',
  },
  {
    title: 'Food and Beverage Recruiting: Finding Leaders Who Run the Floor and the Margin',
    description: 'A strong F&B leader protects guest experience and profit at once. How to recruit one when the leadership pool is thin.',
    slug: '/blog/hospitality-hiring/food-and-beverage-recruiting',
  },
  {
    title: 'Hospitality Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Hospitality comp is climbing, but the best leaders are passive and pay is only part of the decision. What actually closes a hospitality hire.',
    slug: '/blog/hospitality-hiring/hospitality-salary-trends',
  },
];

export default function BlogHospitalityHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Hospitality Hiring</p>
              <h1>Hospitality Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent shortage trends, general manager and food and beverage hiring strategies, and compensation insights for hospitality operators who need to fill leadership roles fast.
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
            <Link href="/services/job-placement/hospitality" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Hospitality Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Hospitality Hiring', item: 'https://www.beghr.com/blog/hospitality-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
