import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Insurance Hiring | BEG Blog',
  description: 'Insurance talent crisis trends, underwriter and producer recruiting, and comp insights for carriers and agencies who need to fill roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/insurance-hiring' },
  openGraph: {
    title: 'Insurance Hiring | BEG Blog',
    description: 'Insurance talent crisis trends, underwriter and producer recruiting, and comp insights for carriers and agencies who need to fill roles fast.',
    url: 'https://www.beghr.com/blog/insurance-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Insurance Hiring | BEG Blog', description: 'Insurance talent crisis trends, underwriter and producer recruiting, and comp insights for carriers and agencies who need to fill roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Insurance Talent Crisis in 2026: The Aging Workforce and the Hiring Gap',
    description: 'A third of the insurance workforce is near retirement and the pipeline behind them is thin. What the talent crisis means for hiring and how to fill roles anyway.',
    slug: '/blog/insurance-hiring/insurance-talent-crisis',
  },
  {
    title: 'How to Hire Commercial Underwriters in a Scarce Market',
    description: 'Experienced underwriters are some of the hardest roles in insurance to fill. A practical playbook to source and close scarce underwriters in 23-35 days.',
    slug: '/blog/insurance-hiring/hiring-commercial-underwriters',
  },
  {
    title: 'Producer Recruiting: Hiring Producers With a Book of Business',
    description: 'Recruiting a producer with a portable book is delicate and confidential. How to source revenue-generating producers without tipping off their current agency.',
    slug: '/blog/insurance-hiring/producer-recruiting',
  },
  {
    title: 'Insurance Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Insurance comp is climbing, but the best candidates are passive and pay is only part of the decision. What actually closes an insurance hire.',
    slug: '/blog/insurance-hiring/insurance-salary-trends',
  },
  {
    title: 'Insurance Interview Questions for Underwriters, Producers, and Claims Leaders',
    description: 'Insurance hires carry long lead times before their full impact shows. These interview questions surface underwriting discipline, book portability, and claims leadership quality before the offer.',
    slug: '/blog/insurance-hiring/insurance-interview-questions',
  },
];

export default function BlogInsuranceHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Insurance Hiring</p>
              <h1>Insurance Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent crisis trends, underwriter and producer recruiting strategies, confidential search guidance, and compensation insights for carriers and agencies that need to fill roles fast.
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
            <Link href="/services/job-placement/insurance" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Insurance Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Insurance Hiring', item: 'https://www.beghr.com/blog/insurance-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
