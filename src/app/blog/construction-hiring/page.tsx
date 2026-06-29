import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Construction Management Hiring | BEG Blog',
  description: 'Skilled construction shortage trends, project manager and estimator hiring, and comp insights for builders who need to fill management roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/construction-hiring' },
  openGraph: {
    title: 'Construction Management Hiring | BEG Blog',
    description: 'Skilled construction shortage trends, project manager and estimator hiring, and comp insights for builders who need to fill management roles fast.',
    url: 'https://www.beghr.com/blog/construction-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Construction Management Hiring | BEG Blog', description: 'Skilled construction shortage trends, project manager and estimator hiring, and comp insights for builders who need to fill management roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Construction Labor Shortage in 2026: What Builders Need to Know',
    description: 'Skilled trades are retiring, fewer workers are entering the field, and management roles sit open for months. What the shortage means for hiring.',
    slug: '/blog/construction-hiring/construction-labor-shortage',
  },
  {
    title: 'How to Hire Construction Project Managers Who Deliver On Time',
    description: 'A vacant PM seat puts your schedule and budget at risk. A practical playbook to source and hire a construction project manager in 23-35 days.',
    slug: '/blog/construction-hiring/hiring-project-managers',
  },
  {
    title: 'Estimator Recruiting: Why It Is the Hardest Construction Role to Fill',
    description: 'A weak estimate sinks a project before it starts. Why estimators are the toughest construction hire and how to fill the role without settling.',
    slug: '/blog/construction-hiring/estimator-recruiting',
  },
  {
    title: 'Construction Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Construction management comp is climbing, but the best candidates are passive and pay is only part of the decision. What actually closes a hire.',
    slug: '/blog/construction-hiring/construction-salary-trends',
  },
  {
    title: 'How to Write a Construction Management Job Description That Attracts Top PMs',
    description: 'The best construction PMs and superintendents are always employed. Here is what to write, and what to skip, in a construction job description to move your search faster.',
    slug: '/blog/construction-hiring/construction-job-description',
  },
];

export default function BlogConstructionHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Construction Management Hiring</p>
              <h1>Construction Management Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Skilled labor shortage trends, project manager and estimator hiring strategies, and compensation insights for builders and developers who need to fill management roles fast.
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
            <Link href="/services/job-placement/construction-management" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Construction Management Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Construction Hiring', item: 'https://www.beghr.com/blog/construction-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
