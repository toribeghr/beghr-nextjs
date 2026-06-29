import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Veterinary Hiring | BEG Blog',
  description: 'Veterinary talent shortage trends, associate and practice manager hiring strategies, and vet comp insights for practice owners who need to fill roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/veterinary-hiring' },
  openGraph: {
    title: 'Veterinary Hiring | BEG Blog',
    description: 'Veterinary talent shortage trends, associate and practice manager hiring strategies, and vet comp insights for practice owners who need to fill roles fast.',
    url: 'https://www.beghr.com/blog/veterinary-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Veterinary Hiring | BEG Blog', description: 'Veterinary talent shortage trends, associate and practice manager hiring strategies, and vet comp insights for practice owners who need to fill roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Veterinary Talent Shortage in 2026: What Practice Owners Need to Know',
    description: 'Vet school output is flat, demand keeps climbing, and burnout drives turnover. What the veterinary shortage means for hiring and how to fill roles anyway.',
    slug: '/blog/veterinary-hiring/veterinary-talent-shortage',
  },
  {
    title: 'How to Hire Associate Veterinarians Fast (Without Settling)',
    description: 'An open DVM seat means longer waits, lost revenue, and a stretched team. A practical playbook to hire an associate veterinarian in 23-35 days.',
    slug: '/blog/veterinary-hiring/hiring-associate-veterinarians',
  },
  {
    title: 'Recruiting a Veterinary Practice Manager Who Actually Runs the Practice',
    description: 'The right practice manager protects your margin, your team, and your sanity. How to find and hire a strong veterinary practice manager fast.',
    slug: '/blog/veterinary-hiring/veterinary-practice-manager-recruiting',
  },
  {
    title: 'Veterinary Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Veterinary comp is climbing, but the best DVMs are passive and pay is only part of the decision. What actually closes a veterinary hire.',
    slug: '/blog/veterinary-hiring/veterinary-salary-trends',
  },
];

export default function BlogVeterinaryHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Veterinary Hiring</p>
              <h1>Veterinary Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Talent shortage trends, associate veterinarian and practice manager hiring strategies, and compensation insights for practice owners and hospital directors who need to fill roles fast.
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
            <Link href="/services/job-placement/veterinary" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Veterinary Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Veterinary Hiring', item: 'https://www.beghr.com/blog/veterinary-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
