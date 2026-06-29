import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Human Resources Hiring | BEG Blog',
  description: 'People-ops hiring trends, HR director and people-operations recruiting, and comp insights for leaders who need to fill HR roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-hiring' },
  openGraph: {
    title: 'Human Resources Hiring | BEG Blog',
    description: 'People-ops hiring trends, HR director and people-operations recruiting, and comp insights for leaders who need to fill HR roles fast.',
    url: 'https://www.beghr.com/blog/hr-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Human Resources Hiring | BEG Blog', description: 'People-ops hiring trends, HR director and people-operations recruiting, and comp insights for leaders who need to fill HR roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'HR Talent Trends 2026: The People-Ops Hiring Market',
    description: 'The people-ops function is being asked to do more with leaner teams. What the 2026 HR hiring market looks like and how to fill roles anyway.',
    slug: '/blog/hr-hiring/hr-talent-trends',
  },
  {
    title: 'How to Hire an HR Director (Confidential Search)',
    description: 'A vacant HR director seat puts culture, compliance, and retention at risk. What good looks like and how to run a confidential search in 23-35 days.',
    slug: '/blog/hr-hiring/hiring-an-hr-director',
  },
  {
    title: 'People-Operations Recruiting: Leaders Who Blend HR and Systems',
    description: 'Modern people-ops leaders pair HR judgment with systems and data fluency. How to source the rare candidates who do both.',
    slug: '/blog/hr-hiring/people-operations-recruiting',
  },
  {
    title: 'HR Salary Trends 2026: Why Speed Beats Salary',
    description: 'HR comp is climbing, but the best candidates are passive and pay is only part of the decision. Why a fast process beats a bigger number.',
    slug: '/blog/hr-hiring/hr-salary-trends',
  },
  {
    title: 'HR Interview Questions That Reveal Strategic People Leadership',
    description: 'HR directors and CHROs who can describe programs but not outcomes are administrators, not partners. These interview questions surface strategic impact, ER judgment, and retention track record.',
    slug: '/blog/hr-hiring/hr-interview-questions',
  },
];

export default function BlogHrHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Human Resources Hiring</p>
              <h1>Human Resources Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                People-ops market trends, HR director and people-operations recruiting strategies, confidential search guidance, and compensation insights for leaders who need to fill HR roles fast.
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
            <Link href="/services/job-placement/hr" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Human Resources Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'HR Hiring', item: 'https://www.beghr.com/blog/hr-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
