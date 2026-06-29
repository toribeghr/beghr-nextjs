import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Executive Search & Hiring | BEG Blog',
  description: 'Confidential executive search insights: hiring a COO, CEO succession, executive comp trends, and search strategy for leaders filling senior seats.',
  alternates: { canonical: 'https://www.beghr.com/blog/executive-hiring' },
  openGraph: {
    title: 'Executive Search & Hiring | BEG Blog',
    description: 'Confidential executive search insights: hiring a COO, CEO succession, executive comp trends, and search strategy for leaders filling senior seats.',
    url: 'https://www.beghr.com/blog/executive-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Executive Search & Hiring | BEG Blog', description: 'Confidential executive search insights: hiring a COO, CEO succession, executive comp trends, and search strategy for leaders filling senior seats.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Executive Search Trends 2026: What Boards and CEOs Need to Know',
    description: 'Confidential, relationship-led search is replacing the post-and-pray model at the top. The trends reshaping how senior leaders get hired in 2026.',
    slug: '/blog/executive-hiring/executive-search-trends',
  },
  {
    title: 'How to Hire a COO (Without Tipping Off Your Team)',
    description: 'A COO search is high stakes and often confidential. A practical playbook to define, source, and close the right COO in 23-35 days.',
    slug: '/blog/executive-hiring/hiring-a-coo',
  },
  {
    title: 'CEO Succession Planning: Building the Bench Before You Need It',
    description: 'CEO transitions are the highest-stakes hire a board makes. How to plan succession early, confidentially, and without destabilizing the company.',
    slug: '/blog/executive-hiring/ceo-succession-planning',
  },
  {
    title: 'Executive Compensation Trends 2026: What It Takes to Close',
    description: 'Executive pay is rising and the package is more than base. What boards and CEOs need to offer to close senior leaders in a tight market.',
    slug: '/blog/executive-hiring/executive-compensation-trends',
  },
  {
    title: 'Executive Interview Questions That Reveal Leadership Track Record',
    description: 'Every executive candidate can describe a vision. These interview questions reveal whether they have actually executed one, what the results were, and what happened when things went wrong.',
    slug: '/blog/executive-hiring/executive-interview-questions',
  },
];

export default function BlogExecutiveHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Executive Search &amp; Hiring</p>
              <h1>Executive Search &amp; Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Confidential, relationship-led search insights for boards and CEOs: hiring a COO, planning CEO succession, executive compensation trends, and how senior seats get filled fast and discreetly.
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
            <Link href="/services/job-placement/executive" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Executive Search &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Executive Hiring', item: 'https://www.beghr.com/blog/executive-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
