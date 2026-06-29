import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accounting & CPA Hiring | BEG Blog',
  description: 'CPA shortage trends, controller hiring, busy-season staffing, and accounting comp insights for finance leaders who need to fill roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/accounting-hiring' },
  openGraph: {
    title: 'Accounting & CPA Hiring | BEG Blog',
    description: 'CPA shortage trends, controller hiring, busy-season staffing, and accounting comp insights for finance leaders who need to fill roles fast.',
    url: 'https://www.beghr.com/blog/accounting-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Accounting & CPA Hiring | BEG Blog', description: 'CPA shortage trends, controller hiring, busy-season staffing, and accounting comp insights for finance leaders who need to fill roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Accounting Talent Shortage in 2026: What Finance Leaders Need to Know',
    description: 'CPA exam candidates are down, retirements are up, and the pipeline is thin. What the accounting shortage means for hiring and how to fill roles anyway.',
    slug: '/blog/accounting-hiring/cpa-shortage',
  },
  {
    title: 'How to Hire a Controller Fast (Without Settling)',
    description: 'A vacant controller seat puts your close, your audit, and your reporting at risk. A practical playbook to hire a controller in 23-35 days.',
    slug: '/blog/accounting-hiring/controller-hiring',
  },
  {
    title: 'Busy-Season Staffing: Planning Ahead of Tax Season',
    description: 'The firms that survive busy season hire before the crunch, not during it. How to plan accounting and tax staffing months ahead.',
    slug: '/blog/accounting-hiring/busy-season-staffing',
  },
  {
    title: 'Accounting Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Accounting comp is climbing, but the best candidates are passive and pay is only part of the decision. What actually closes an accounting hire.',
    slug: '/blog/accounting-hiring/accounting-salary-trends',
  },
  {
    title: 'How to Write an Accounting Job Description That Attracts Qualified Candidates',
    description: 'A vague accounting JD filters in weak candidates and filters out strong ones. What every accounting job description must include to bring in credentialed, passive talent.',
    slug: '/blog/accounting-hiring/accounting-job-description',
  },
];

export default function BlogAccountingHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Accounting &amp; CPA Hiring</p>
              <h1>Accounting &amp; CPA Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent shortage trends, controller and CPA hiring strategies, busy-season planning, and compensation insights for finance leaders who need to fill roles fast.
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
            <Link href="/services/job-placement/accounting-cpa" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Accounting &amp; CPA Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Accounting Hiring', item: 'https://www.beghr.com/blog/accounting-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
