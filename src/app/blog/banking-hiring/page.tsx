import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Banking & Finance Hiring | BEG Blog',
  description: 'Banking talent trends, commercial lender and credit analyst recruiting, and compensation insights for banks that need to fill roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/banking-hiring' },
  openGraph: {
    title: 'Banking & Finance Hiring | BEG Blog',
    description: 'Banking talent trends, commercial lender and credit analyst recruiting, and compensation insights for banks that need to fill roles fast.',
    url: 'https://www.beghr.com/blog/banking-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Banking & Finance Hiring | BEG Blog', description: 'Banking talent trends, commercial lender and credit analyst recruiting, and compensation insights for banks that need to fill roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Banking Talent Trends in 2026: What Hiring Leaders Need to Know',
    description: 'Retirements, fintech competition, and a thin lending bench are reshaping bank hiring. What the talent market means and how to fill roles anyway.',
    slug: '/blog/banking-hiring/banking-talent-trends',
  },
  {
    title: 'How to Hire Commercial Lenders Fast (Without Settling)',
    description: 'A vacant commercial lender seat stalls your loan pipeline and hands relationships to competitors. A playbook to hire lenders in 23-35 days.',
    slug: '/blog/banking-hiring/hiring-commercial-lenders',
  },
  {
    title: 'Credit Analyst Recruiting: How to Find and Close Strong Candidates',
    description: 'Credit analysts are the backbone of sound lending, and they are hard to find. How to source and close credit talent in a tight market.',
    slug: '/blog/banking-hiring/credit-analyst-recruiting',
  },
  {
    title: 'Banking Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Banking comp is climbing, but the best candidates are passive and pay is only part of the decision. What actually closes a banking hire.',
    slug: '/blog/banking-hiring/banking-salary-trends',
  },
  {
    title: 'Banking Interview Questions That Identify High-Performing Candidates',
    description: 'Credit judgment, book-building track record, and regulatory awareness are what banking hires are really evaluated on. The interview questions that surface all three.',
    slug: '/blog/banking-hiring/banking-interview-questions',
  },
];

export default function BlogBankingHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Banking &amp; Finance Hiring</p>
              <h1>Banking &amp; Finance Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent trends, commercial lender and credit analyst recruiting strategies, and compensation insights for banks and lenders that need to fill critical roles fast.
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
            <Link href="/services/job-placement/banking" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Banking &amp; Finance Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Banking Hiring', item: 'https://www.beghr.com/blog/banking-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
