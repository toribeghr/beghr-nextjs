import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Biotech & Life Sciences Hiring | BEG Blog',
  description: 'Biotech talent shortage trends, regulatory affairs and clinical research recruiting, and comp insights for teams that need to fill roles fast.',
  alternates: { canonical: 'https://beghr.com/blog/biotech-hiring' },
  openGraph: {
    title: 'Biotech & Life Sciences Hiring | BEG Blog',
    description: 'Biotech talent shortage trends, regulatory affairs and clinical research recruiting, and comp insights for teams that need to fill roles fast.',
    url: 'https://beghr.com/blog/biotech-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Biotech & Life Sciences Hiring | BEG Blog', description: 'Biotech talent shortage trends, regulatory affairs and clinical research recruiting, and comp insights for teams that need to fill roles fast.', images: ['https://beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Biotech Talent Shortage in 2026: What Hiring Leaders Need to Know',
    description: 'Specialized roles, fierce competition, and a thin pipeline define biotech hiring. What the shortage means and how to fill roles anyway.',
    slug: '/blog/biotech-hiring/biotech-talent-shortage',
  },
  {
    title: 'How to Hire a Regulatory Affairs Manager Fast (Without Settling)',
    description: 'A vacant regulatory affairs seat stalls submissions and risks compliance. A practical playbook to hire in 23-35 days without lowering the bar.',
    slug: '/blog/biotech-hiring/hiring-regulatory-affairs',
  },
  {
    title: 'Clinical Research Recruiting: How to Find and Close CRA Talent',
    description: 'Clinical research associates keep trials on track and on time, and they are scarce. How to source and close CRA talent in a tight market.',
    slug: '/blog/biotech-hiring/clinical-research-recruiting',
  },
  {
    title: 'Biotech Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Biotech comp is climbing, but the best candidates are passive and pay is only part of the decision. What actually closes a biotech hire.',
    slug: '/blog/biotech-hiring/biotech-salary-trends',
  },
];

export default function BlogBiotechHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Biotech &amp; Life Sciences Hiring</p>
              <h1>Biotech &amp; Life Sciences Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent shortage trends, regulatory affairs and clinical research recruiting strategies, and compensation insights for biotech and life sciences teams that need to fill critical roles fast.
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
            <Link href="/services/job-placement/biotech" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Biotech &amp; Life Sciences Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Biotech Hiring', item: 'https://beghr.com/blog/biotech-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
