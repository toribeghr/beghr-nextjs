import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Nonprofit Hiring | BEG Blog',
  description: 'Nonprofit talent trends, hiring an executive director, development director recruiting, and salary insights for leaders who need to fill roles fast.',
  alternates: { canonical: 'https://beghr.com/blog/nonprofit-hiring' },
  openGraph: {
    title: 'Nonprofit Hiring | BEG Blog',
    description: 'Nonprofit talent trends, hiring an executive director, development director recruiting, and salary insights for leaders who need to fill roles fast.',
    url: 'https://beghr.com/blog/nonprofit-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Nonprofit Hiring | BEG Blog', description: 'Nonprofit talent trends, hiring an executive director, development director recruiting, and salary insights for leaders who need to fill roles fast.', images: ['https://beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Nonprofit Talent Trends in 2026: What Boards and EDs Need to Know',
    description: 'Burnout, turnover, and a thin leadership pipeline are reshaping nonprofit hiring. What the 2026 talent picture means and how to fill roles anyway.',
    slug: '/blog/nonprofit-hiring/nonprofit-talent-trends',
  },
  {
    title: 'How to Hire an Executive Director (Without a Year-Long Search)',
    description: 'An open executive director seat stalls strategy, fundraising, and the board. A practical playbook to hire an ED in 23-35 days.',
    slug: '/blog/nonprofit-hiring/hiring-an-executive-director',
  },
  {
    title: 'Development Director Recruiting: Filling the Role That Funds the Mission',
    description: 'A vacant development director seat puts your fundraising at risk. How to recruit and close a strong development leader fast.',
    slug: '/blog/nonprofit-hiring/development-director-recruiting',
  },
  {
    title: 'Nonprofit Salary Trends 2026: Why Mission Alone Does Not Close Hires',
    description: 'Nonprofit pay is climbing and the best candidates are passive. What actually closes a nonprofit leadership hire beyond the mission.',
    slug: '/blog/nonprofit-hiring/nonprofit-salary-trends',
  },
];

export default function BlogNonprofitHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Nonprofit Hiring</p>
              <h1>Nonprofit Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent trends, executive director and development director recruiting strategies, and compensation insights for boards and nonprofit leaders who need to fill roles fast.
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
            <Link href="/services/job-placement/nonprofit" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Nonprofit Placement &rarr;
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
              { '@type': 'ListItem', position: 3, name: 'Nonprofit Hiring', item: 'https://beghr.com/blog/nonprofit-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
