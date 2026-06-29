import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dental Hiring | BEG Blog',
  description: 'Dental staffing shortage trends, associate dentist and practice manager hiring, and salary insights for practice owners who need to fill roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/dental-hiring' },
  openGraph: {
    title: 'Dental Hiring | BEG Blog',
    description: 'Dental staffing shortage trends, associate dentist and practice manager hiring, and salary insights for practice owners who need to fill roles fast.',
    url: 'https://www.beghr.com/blog/dental-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Dental Hiring | BEG Blog', description: 'Dental staffing shortage trends, associate dentist and practice manager hiring, and salary insights for practice owners who need to fill roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Dental Staffing Shortage in 2026: What Practice Owners Need to Know',
    description: 'Hygienists and associates are scarce and the pipeline is thin. What the dental shortage means for hiring and how to fill roles anyway.',
    slug: '/blog/dental-hiring/dental-staffing-shortage',
  },
  {
    title: 'How to Hire an Associate Dentist Fast (Without Settling)',
    description: 'An empty operatory means lost production and longer waits. A practical playbook to hire an associate dentist in 23-35 days.',
    slug: '/blog/dental-hiring/hiring-associate-dentists',
  },
  {
    title: 'Practice Manager Recruiting: How to Find and Close Strong Candidates',
    description: 'A strong practice manager runs the business so you can run the chair. How to source and close practice management talent fast.',
    slug: '/blog/dental-hiring/practice-manager-recruiting',
  },
  {
    title: 'Dental Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Dental comp is climbing, but the best candidates are passive and pay is only part of the decision. What actually closes a dental hire.',
    slug: '/blog/dental-hiring/dental-salary-trends',
  },
];

export default function BlogDentalHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Dental Hiring</p>
              <h1>Dental Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Staffing shortage trends, associate dentist and practice manager hiring strategies, and compensation insights for practice owners who need to fill roles fast.
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
            <Link href="/services/job-placement/dental" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Dental Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Dental Hiring', item: 'https://www.beghr.com/blog/dental-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
