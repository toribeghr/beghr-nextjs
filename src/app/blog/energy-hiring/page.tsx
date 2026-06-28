import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Energy Hiring | BEG Blog',
  description: 'Energy talent shortage trends, hiring energy project managers, field engineer recruiting, and salary insights for leaders who need to fill roles fast.',
  alternates: { canonical: 'https://beghr.com/blog/energy-hiring' },
  openGraph: {
    title: 'Energy Hiring | BEG Blog',
    description: 'Energy talent shortage trends, hiring energy project managers, field engineer recruiting, and salary insights for leaders who need to fill roles fast.',
    url: 'https://beghr.com/blog/energy-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Energy Hiring | BEG Blog', description: 'Energy talent shortage trends, hiring energy project managers, field engineer recruiting, and salary insights for leaders who need to fill roles fast.', images: ['https://beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Energy Talent Shortage in 2026: What Leaders Need to Know',
    description: 'Retirements, the energy transition, and a thin technical pipeline are reshaping hiring. What the shortage means and how to fill roles anyway.',
    slug: '/blog/energy-hiring/energy-talent-shortage',
  },
  {
    title: 'How to Hire Energy Project Managers Fast (Without Settling)',
    description: 'A vacant project manager seat puts schedule, budget, and safety at risk. A practical playbook to hire energy project managers in 23-35 days.',
    slug: '/blog/energy-hiring/hiring-energy-project-managers',
  },
  {
    title: 'Field Engineer Recruiting: Filling the Roles That Keep Projects Moving',
    description: 'A vacant field engineer seat stalls execution in the field. How to recruit and close strong energy field engineers fast.',
    slug: '/blog/energy-hiring/field-engineer-recruiting',
  },
  {
    title: 'Energy Salary Trends 2026: Why Pay Alone Does Not Close Hires',
    description: 'Energy comp is climbing and the best candidates are passive. What actually closes an energy hire beyond the salary number.',
    slug: '/blog/energy-hiring/energy-salary-trends',
  },
];

export default function BlogEnergyHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Energy Hiring</p>
              <h1>Energy Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent shortage trends, project manager and field engineer recruiting strategies, and compensation insights for energy leaders who need to fill roles fast.
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
            <Link href="/services/job-placement/energy" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Energy Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Energy Hiring', item: 'https://beghr.com/blog/energy-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
