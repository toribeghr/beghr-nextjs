import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business & Entrepreneur Resources | BEG Blog',
  description: 'BEG network content, entrepreneur tips, and business community updates.',
  alternates: { canonical: 'https://www.beghr.com/blog/entrepreneur' },
  openGraph: {
    title: 'Business & Entrepreneur Resources | BEG Blog',
    description: 'BEG network content, entrepreneur tips, and business community updates.',
    url: 'https://www.beghr.com/blog/entrepreneur',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Business & Entrepreneur Resources | BEG Blog', description: 'BEG network content, entrepreneur tips, and business community updates.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const posts = [
  {
    title: 'Startup Hiring 101: Building Your First Team',
    description: 'How to hire your first employees as a founder. Recruiting strategy, offer structures, and building company culture early.',
    slug: '/blog/entrepreneur-resources/startup-hiring',
  },
  {
    title: 'Managing Remote Teams: What Founders Need to Know',
    description: 'Build and manage remote teams effectively. Hiring remote talent, HR compliance, and culture in a distributed company.',
    slug: '/blog/entrepreneur-resources/remote-team-management',
  },
];

export default function BlogEntrepreneurPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Business &amp; Entrepreneur Resources</p>
              <h1>Business &amp; Entrepreneur Resources</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Entrepreneur tips, hiring strategies, and business community insights from the BEG network.
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
              { '@type': 'ListItem', position: 3, name: 'Entrepreneur', item: 'https://www.beghr.com/blog/entrepreneur' },
            ],
          }),
        }}
      />
    </>
  );
}
