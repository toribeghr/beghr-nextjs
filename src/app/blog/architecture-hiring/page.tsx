import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Architecture Hiring | BEG Blog',
  description: 'Architecture talent shortage trends, project architect and BIM manager hiring, and design comp insights for firm leaders who need to fill roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/architecture-hiring' },
  openGraph: {
    title: 'Architecture Hiring | BEG Blog',
    description: 'Architecture talent shortage trends, project architect and BIM manager hiring, and design comp insights for firm leaders who need to fill roles fast.',
    url: 'https://www.beghr.com/blog/architecture-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Architecture Hiring | BEG Blog', description: 'Architecture talent shortage trends, project architect and BIM manager hiring, and design comp insights for firm leaders who need to fill roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Architecture Talent Shortage in 2026: What Firm Leaders Need to Know',
    description: 'Licensure is down, retirements are up, and the pipeline is thin. What the architecture shortage means for hiring and how to fill roles anyway.',
    slug: '/blog/architecture-hiring/architecture-talent-shortage',
  },
  {
    title: 'How to Hire a Project Architect Fast (Without Settling)',
    description: 'A vacant project architect seat puts your deadlines and client trust at risk. A practical playbook to hire a project architect in 23-35 days.',
    slug: '/blog/architecture-hiring/hiring-a-project-architect',
  },
  {
    title: 'BIM Manager Recruiting: Finding the Person Who Runs Your Models',
    description: 'A strong BIM manager keeps your documentation, standards, and coordination on track. How to recruit one when the talent pool is thin.',
    slug: '/blog/architecture-hiring/bim-manager-recruiting',
  },
  {
    title: 'Architecture Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Architecture comp is climbing, but the best candidates are passive and pay is only part of the decision. What actually closes a design hire.',
    slug: '/blog/architecture-hiring/architecture-salary-trends',
  },
  {
    title: 'Architecture Interview Questions That Reveal Real Talent',
    description: 'A strong portfolio is a minimum bar, not a hire signal. The structured questions that surface design judgment, delivery record, and client management skill in an architecture interview.',
    slug: '/blog/architecture-hiring/architecture-interview-questions',
  },
];

export default function BlogArchitectureHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Architecture Hiring</p>
              <h1>Architecture Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent shortage trends, project architect and BIM manager hiring strategies, and compensation insights for design firm leaders who need to fill roles fast.
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
            <Link href="/services/job-placement/architecture" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Architecture Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Architecture Hiring', item: 'https://www.beghr.com/blog/architecture-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
