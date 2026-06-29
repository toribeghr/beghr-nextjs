import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Supply Chain Hiring | BEG Blog',
  description: 'Supply chain talent shortage trends, hiring a supply chain manager, logistics recruiting, and salary insights for operations leaders filling roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/supply-chain-hiring' },
  openGraph: {
    title: 'Supply Chain Hiring | BEG Blog',
    description: 'Supply chain talent shortage trends, hiring a supply chain manager, logistics recruiting, and salary insights for operations leaders filling roles fast.',
    url: 'https://www.beghr.com/blog/supply-chain-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Supply Chain Hiring | BEG Blog', description: 'Supply chain talent shortage trends, hiring a supply chain manager, logistics recruiting, and salary insights for operations leaders filling roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Supply Chain Talent Shortage in 2026: What Operations Leaders Need to Know',
    description: 'Demand for supply chain talent is outpacing supply. What the shortage means for hiring and how to fill operations roles in 23-35 days anyway.',
    slug: '/blog/supply-chain-hiring/supply-chain-talent-shortage',
  },
  {
    title: 'How to Hire a Supply Chain Manager Fast (Without Settling)',
    description: 'A vacant supply chain manager seat puts service levels, cost, and inventory at risk. A practical playbook to hire one in 23-35 days.',
    slug: '/blog/supply-chain-hiring/hiring-a-supply-chain-manager',
  },
  {
    title: 'Logistics Recruiting: How to Fill Distribution and Transportation Roles',
    description: 'Logistics and distribution roles turn over fast and stay open longer. How to recruit logistics managers when the market is this tight.',
    slug: '/blog/supply-chain-hiring/logistics-recruiting',
  },
  {
    title: 'Supply Chain Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Supply chain comp is climbing, but the best operators are passive and pay is only part of the decision. What actually closes a supply chain hire.',
    slug: '/blog/supply-chain-hiring/supply-chain-salary-trends',
  },
];

export default function BlogSupplyChainHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Supply Chain Hiring</p>
              <h1>Supply Chain Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent shortage trends, supply chain manager and logistics hiring strategies, recruiting playbooks, and compensation insights for operations leaders who need to fill roles fast.
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
            <Link href="/services/job-placement/supply-chain" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Supply Chain Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Supply Chain Hiring', item: 'https://www.beghr.com/blog/supply-chain-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
