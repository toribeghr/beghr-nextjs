import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Legal Hiring & Recruiting | BEG Blog',
  description: 'Attorney market trends, law firm hiring strategies, and placement insights.',
  alternates: { canonical: 'https://beghr.com/blog/legal-hiring' },
};

const posts = [
  {
    title: 'Law Firm Associate Hiring: Filling Roles Fast',
    description: 'Struggling to hire associates? See how top law firms fill attorney roles in 23-35 days. Lateral candidates, market insights, and hiring strategies.',
    slug: '/blog/legal-hiring/associate-hiring',
  },
  {
    title: 'Law Firm Paralegal Hiring: Skills to Look For',
    description: 'Find qualified paralegals fast. What to look for, where to search, and how to assess paralegal candidates quickly.',
    slug: '/blog/legal-hiring/paralegal-recruiting',
  },
  {
    title: 'In-House Counsel Hiring: Building Your Legal Department',
    description: 'Hire your first or next in-house counsel. What to look for, where to find candidates, and how to fill the role fast.',
    slug: '/blog/legal-hiring/in-house-counsel',
  },
  {
    title: 'Solo Lawyer Expansion: Hiring Your First Associate',
    description: 'Growing from solo practice to a small firm? Learn how to hire your first associate without breaking the bank.',
    slug: '/blog/legal-hiring/solo-firm-growth',
  },
  {
    title: '2026 Attorney Market Trends: What Law Firms Need to Know',
    description: 'Law school enrollment trends, lateral market dynamics, and what it means for law firm hiring in 2026.',
    slug: '/blog/legal-hiring/attorney-market-trends',
  },
];

export default function BlogLegalHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Legal Hiring &amp; Recruiting</p>
              <h1>Legal Hiring &amp; Recruiting</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Attorney market trends, law firm hiring strategies, and placement insights.
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
              { '@type': 'ListItem', position: 3, name: 'Legal Hiring', item: 'https://beghr.com/blog/legal-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
