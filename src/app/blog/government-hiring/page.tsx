import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Government Contractor Hiring | BEG Blog',
  description: 'Government contractor hiring trends, program and contracts manager strategies, and cleared-talent comp insights for GovCon leaders who fill roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/government-hiring' },
  openGraph: {
    title: 'Government Contractor Hiring | BEG Blog',
    description: 'Government contractor hiring trends, program and contracts manager strategies, and cleared-talent comp insights for GovCon leaders who fill roles fast.',
    url: 'https://www.beghr.com/blog/government-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Government Contractor Hiring | BEG Blog', description: 'Government contractor hiring trends, program and contracts manager strategies, and cleared-talent comp insights for GovCon leaders who fill roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'Government Contractor Hiring Trends in 2026: What GovCon Leaders Need to Know',
    description: 'Cleared talent is scarce, award timelines are tight, and competition is fierce. What the GovCon hiring market means and how to staff awards fast.',
    slug: '/blog/government-hiring/government-contractor-hiring-trends',
  },
  {
    title: 'How to Hire Program Managers for Government Contracts Fast',
    description: 'A new award with no program manager puts performance and CPARS at risk. A practical playbook to hire a PM in 23-35 days without settling.',
    slug: '/blog/government-hiring/hiring-program-managers',
  },
  {
    title: 'Recruiting a Contracts Manager Who Keeps You Compliant',
    description: 'The right contracts manager protects your margin and your compliance posture. How to find and hire a strong contracts manager fast.',
    slug: '/blog/government-hiring/contracts-manager-recruiting',
  },
  {
    title: 'Government Contractor Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'GovCon comp is climbing, especially for cleared talent, but pay is only part of the decision. What actually closes a government contractor hire.',
    slug: '/blog/government-hiring/government-salary-trends',
  },
];

export default function BlogGovernmentHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Government Contractor Hiring</p>
              <h1>Government Contractor Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent market trends, program manager and contracts manager hiring strategies, and compensation insights for government contractors and GovCon leaders who need to staff awards fast.
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
            <Link href="/services/job-placement/government" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Government Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Government Hiring', item: 'https://www.beghr.com/blog/government-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
