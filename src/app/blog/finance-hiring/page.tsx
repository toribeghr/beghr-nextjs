import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Finance & FP&A Hiring | BEG Blog',
  description: 'Corporate finance talent trends, FP&A recruiting, finance manager hiring, and comp insights for leaders who need to fill finance roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/finance-hiring' },
  openGraph: {
    title: 'Finance & FP&A Hiring | BEG Blog',
    description: 'Corporate finance talent trends, FP&A recruiting, finance manager hiring, and comp insights for leaders who need to fill finance roles fast.',
    url: 'https://www.beghr.com/blog/finance-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Finance & FP&A Hiring | BEG Blog', description: 'Corporate finance talent trends, FP&A recruiting, finance manager hiring, and comp insights for leaders who need to fill finance roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Finance Talent Trends 2026: What Hiring Leaders Need to Know',
    description: 'FP&A demand is rising while the supply of analytical finance talent stays tight. The trends shaping corporate finance hiring and how to stay ahead.',
    slug: '/blog/finance-hiring/finance-talent-trends',
  },
  {
    title: 'How to Hire a Finance Manager Fast (Without Settling)',
    description: 'A vacant finance manager seat slows your forecast and your board reporting. A practical playbook to hire a finance manager in 23-35 days.',
    slug: '/blog/finance-hiring/hiring-a-finance-manager',
  },
  {
    title: 'FP&A Recruiting: How to Find Analysts Who Drive Decisions',
    description: 'Strong FP&A analysts are passive, in demand, and rarely on job boards. How to source and close the people who turn data into decisions.',
    slug: '/blog/finance-hiring/fpa-recruiting',
  },
  {
    title: 'Finance Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Corporate finance comp is climbing, but the best candidates are passive and pay is only part of the decision. What actually closes a finance hire.',
    slug: '/blog/finance-hiring/finance-salary-trends',
  },
];

export default function BlogFinanceHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Finance &amp; FP&amp;A Hiring</p>
              <h1>Finance &amp; FP&amp;A Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Corporate finance talent trends, FP&amp;A recruiting, finance manager hiring strategies, and compensation insights for leaders who need to fill finance roles fast.
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
            <Link href="/services/job-placement/finance" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Finance Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Finance Hiring', item: 'https://www.beghr.com/blog/finance-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
