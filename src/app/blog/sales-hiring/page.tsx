import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sales Hiring & Recruiting | BEG Blog',
  description: 'B2B sales hiring trends, VP of Sales and AE recruiting, comp insights, and turnover strategy for leaders who need to fill quota-carrying roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/sales-hiring' },
  openGraph: {
    title: 'Sales Hiring & Recruiting | BEG Blog',
    description: 'B2B sales hiring trends, VP of Sales and AE recruiting, comp insights, and turnover strategy for leaders who need to fill quota-carrying roles fast.',
    url: 'https://www.beghr.com/blog/sales-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Sales Hiring & Recruiting | BEG Blog', description: 'B2B sales hiring trends, VP of Sales and AE recruiting, comp insights, and turnover strategy for leaders who need to fill quota-carrying roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The B2B Sales Talent Shortage in 2026: Why Job Postings Are Failing You',
    description: 'Sales turnover is high, tenure is short, and the best reps are passive. What the sales hiring crunch means and how to fill quota-carrying roles anyway.',
    slug: '/blog/sales-hiring/sales-talent-shortage',
  },
  {
    title: 'How to Hire a VP of Sales (Without Betting the Number on a Bad Fit)',
    description: 'A VP of Sales hire shapes your revenue for years. What good looks like, why confidential search matters, and how to fill the seat in 23-35 days.',
    slug: '/blog/sales-hiring/hiring-vp-of-sales',
  },
  {
    title: 'Account Executive Recruiting: Landing Quota-Carriers in a Poaching Market',
    description: 'Strong AEs field multiple offers and rarely answer postings. How to source, screen, and close quota-carrying account executives before a competitor does.',
    slug: '/blog/sales-hiring/account-executive-recruiting',
  },
  {
    title: 'Sales Compensation Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'OTE is climbing, but the best reps weigh more than the number. What sales comp trends mean for hiring and what actually closes a sales candidate.',
    slug: '/blog/sales-hiring/sales-compensation-trends',
  },
];

export default function BlogSalesHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Sales Hiring &amp; Recruiting</p>
              <h1>Sales Hiring &amp; Recruiting</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent shortage trends, VP of Sales and account executive recruiting strategies, compensation insights, and turnover playbooks for revenue leaders who need to fill quota-carrying roles fast.
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
            <Link href="/services/job-placement/sales" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Sales Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Sales Hiring', item: 'https://www.beghr.com/blog/sales-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
