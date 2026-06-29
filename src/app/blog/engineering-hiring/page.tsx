import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Engineering Hiring | BEG Blog',
  description: 'Engineering talent shortage trends, mechanical and project engineer recruiting, and comp insights for leaders who need to fill engineering roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/engineering-hiring' },
  openGraph: {
    title: 'Engineering Hiring | BEG Blog',
    description: 'Engineering talent shortage trends, mechanical and project engineer recruiting, and comp insights for leaders who need to fill engineering roles fast.',
    url: 'https://www.beghr.com/blog/engineering-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Engineering Hiring | BEG Blog', description: 'Engineering talent shortage trends, mechanical and project engineer recruiting, and comp insights for leaders who need to fill engineering roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Engineering Talent Shortage in 2026: What Leaders Need to Know',
    description: 'Engineering retirements are up, the pipeline is thin, and demand keeps rising. What the shortage means for hiring and how to fill roles anyway.',
    slug: '/blog/engineering-hiring/engineering-talent-shortage',
  },
  {
    title: 'How to Hire Mechanical Engineers Fast (Without Settling)',
    description: 'A vacant mechanical engineer seat stalls your product and your projects. A practical playbook to hire mechanical engineers in 23-35 days.',
    slug: '/blog/engineering-hiring/hiring-mechanical-engineers',
  },
  {
    title: 'Project Engineer Recruiting: How to Find People Who Deliver',
    description: 'Strong project engineers are passive, in demand, and rarely on job boards. How to source and close the people who keep projects on time and on budget.',
    slug: '/blog/engineering-hiring/project-engineer-recruiting',
  },
  {
    title: 'Engineering Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Engineering comp is climbing, but the best candidates are passive and pay is only part of the decision. What actually closes an engineering hire.',
    slug: '/blog/engineering-hiring/engineering-salary-trends',
  },
  {
    title: 'Engineering Interview Questions That Reveal Real Problem-Solving Ability',
    description: 'Whiteboard tests reveal one thing. These structured engineering interview questions surface design judgment, cross-functional collaboration, and real project delivery track record.',
    slug: '/blog/engineering-hiring/engineering-interview-questions',
  },
];

export default function BlogEngineeringHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Engineering Hiring</p>
              <h1>Engineering Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent shortage trends, mechanical and project engineer recruiting strategies, and compensation insights for leaders who need to fill engineering roles fast.
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
            <Link href="/services/job-placement/engineering" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Engineering Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Engineering Hiring', item: 'https://www.beghr.com/blog/engineering-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
