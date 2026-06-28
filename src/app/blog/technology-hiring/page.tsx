import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Technology Hiring | BEG Blog',
  description: 'Tech talent shortage trends, software engineer hiring, data science recruiting, and tech comp insights for leaders who need to fill roles fast.',
  alternates: { canonical: 'https://beghr.com/blog/technology-hiring' },
  openGraph: {
    title: 'Technology Hiring | BEG Blog',
    description: 'Tech talent shortage trends, software engineer hiring, data science recruiting, and tech comp insights for leaders who need to fill roles fast.',
    url: 'https://beghr.com/blog/technology-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Technology Hiring | BEG Blog', description: 'Tech talent shortage trends, software engineer hiring, data science recruiting, and tech comp insights for leaders who need to fill roles fast.', images: ['https://beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Tech Talent Shortage in 2026: What Leaders Need to Know',
    description: 'Specialized engineering demand keeps climbing and the qualified pool stays thin. What the tech shortage means for hiring and how to fill roles anyway.',
    slug: '/blog/technology-hiring/tech-talent-shortage',
  },
  {
    title: 'How to Hire Software Engineers Fast (Without Settling)',
    description: 'A vacant engineering seat stalls your roadmap and overloads your team. A practical playbook to hire a software engineer in 23-35 days.',
    slug: '/blog/technology-hiring/hiring-software-engineers',
  },
  {
    title: 'Data Science Recruiting: Filling Roles a Posting Cannot',
    description: 'The strongest data scientists are employed and passive. How to recruit data and ML talent without relying on job boards.',
    slug: '/blog/technology-hiring/data-science-recruiting',
  },
  {
    title: 'Tech Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Tech comp is high, but the best candidates are passive and pay is only part of the decision. What actually closes a technology hire.',
    slug: '/blog/technology-hiring/tech-salary-trends',
  },
];

export default function BlogTechnologyHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Technology Hiring</p>
              <h1>Technology Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Tech talent shortage trends, software engineer and data science hiring strategies, recruiting playbooks, and compensation insights for technology leaders who need to fill roles fast.
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
            <Link href="/services/job-placement/technology" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Technology Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Technology Hiring', item: 'https://beghr.com/blog/technology-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
