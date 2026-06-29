import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HCM Software & HR Tech | BEG Blog',
  description: 'iSolved features, HR automation, and software comparisons for growing businesses.',
  alternates: { canonical: 'https://www.beghr.com/blog/hcm-software' },
  openGraph: {
    title: 'HCM Software & HR Tech | BEG Blog',
    description: 'iSolved features, HR automation, and software comparisons for growing businesses.',
    url: 'https://www.beghr.com/blog/hcm-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software & HR Tech | BEG Blog', description: 'iSolved features, HR automation, and software comparisons for growing businesses.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const posts = [
  {
    title: 'iSolved HCM Platform: Cloud Payroll & HR for Growing Companies',
    description: 'iSolved payroll and HRIS solutions for mid-market companies. Centralized HR, payroll, benefits, and talent management in one platform.',
    slug: '/blog/hcm-software/isolved-platform',
  },
  {
    title: 'HR Automation: Save 200+ Hours Per Year',
    description: 'Automate payroll, benefits, onboarding, and compliance. See how HR automation saves time and eliminates errors.',
    slug: '/blog/hcm-software/hr-automation',
  },
  {
    title: 'Payroll Tax Compliance: 2026 Updates & What Changed',
    description: 'Tax law changes, new payroll requirements, and what HR teams need to know about payroll compliance in 2026.',
    slug: '/blog/hcm-software/payroll-compliance',
  },
];

export default function BlogHcmPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-single">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HCM Software &amp; HR Tech</p>
              <h1>HCM Software &amp; HR Tech</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                iSolved guides, HR automation tips, and software comparisons for growing businesses.
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
              { '@type': 'ListItem', position: 3, name: 'HCM Software', item: 'https://www.beghr.com/blog/hcm-software' },
            ],
          }),
        }}
      />
    </>
  );
}
