import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Business Executive Group',
  description: 'Payroll compliance, legal hiring, HCM software, and entrepreneur resources from the BEG team.',
  alternates: {
    canonical: 'https://beghr.com/blog',
  },
  openGraph: {
    title: 'Blog | Business Executive Group',
    description: 'Payroll compliance, legal hiring, HCM software, and entrepreneur resources from the BEG team.',
    url: 'https://beghr.com/blog',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'BEG Blog — Payroll, HR & Legal Hiring Resources' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Blog | Business Executive Group', description: 'Payroll compliance, legal hiring, HCM software, and entrepreneur resources from the BEG team.', images: ['https://beghr.com/assets/og-image.png'] },
};

const categories = [
  {
    slug: 'payroll',
    title: 'Payroll & HR Compliance',
    description: 'Tax law changes, payroll regulations, compliance tips, and best practices for businesses nationwide.',
  },
  {
    slug: 'legal-hiring',
    title: 'Legal Hiring & Recruiting',
    description: 'Attorney market trends, law firm hiring strategies, and placement insights.',
  },
  {
    slug: 'hcm-software',
    title: 'HCM Software & HR Tech',
    description: 'iSolved features, HR automation, and software comparisons for growing businesses.',
  },
  {
    slug: 'entrepreneur',
    title: 'Business & Entrepreneur Resources',
    description: 'BEG network content, entrepreneur tips, and business community updates.',
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog</p>
              <h1>Insights for growing businesses.</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Payroll compliance, legal hiring, HCM software, and entrepreneur resources — straight from the BEG team.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="head center reveal">
            <h2>Browse by Topic</h2>
          </div>
          <div className="cards">
            {categories.map((cat) => (
              <article key={cat.slug} className="card reveal">
                <h3><Link href={`/blog/${cat.slug}`}>{cat.title}</Link></h3>
                <p>{cat.description}</p>
                <Link href={`/blog/${cat.slug}`} className="btn btn--gold" style={{ marginTop: '16px', display: 'inline-block' }}>
                  View Posts
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
