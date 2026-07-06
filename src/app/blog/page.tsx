import { Metadata } from 'next';
import Link from 'next/link';
import InlineSearch from '@/components/InlineSearch';

export const metadata: Metadata = {
  title: 'Blog | Business Executive Group',
  description: 'Payroll compliance, legal hiring, HCM software, and entrepreneur resources from the BEG team.',
  alternates: {
    canonical: 'https://www.beghr.com/blog',
  },
  openGraph: {
    title: 'Blog | Business Executive Group',
    description: 'Payroll compliance, legal hiring, HCM software, and entrepreneur resources from the BEG team.',
    url: 'https://www.beghr.com/blog',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'BEG Blog -- Payroll, HR & Legal Hiring Resources' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Blog | Business Executive Group', description: 'Payroll compliance, legal hiring, HCM software, and entrepreneur resources from the BEG team.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const labelize = (s: string) =>
  s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

const topicGroups = [
  {
    heading: 'Payroll, HCM & Compliance',
    items: [
      { slug: 'payroll', title: 'Payroll by Industry', description: 'Industry-by-industry guides to managed payroll, pricing, compliance, and cost calculators.' },
      { slug: 'hcm-software', title: 'HCM Software & HR Tech', description: 'isolved features, the Connector for Claude, HR automation, and platform comparisons.' },
      { slug: 'compare', title: 'Compare Alternatives', description: 'Honest comparisons of BEG and isolved against the major payroll, HCM, and recruiting alternatives.' },
    ],
  },
  {
    heading: 'Hiring & Recruiting by Industry',
    items: [
      'accounting', 'architecture', 'banking', 'biotech', 'construction',
      'cybersecurity', 'dental', 'energy', 'engineering', 'executive',
      'finance', 'government', 'healthcare', 'hospitality', 'hr',
      'insurance', 'legal', 'manufacturing', 'marketing', 'nonprofit',
      'real-estate', 'sales', 'supply-chain', 'technology', 'trades', 'veterinary',
    ].map((k) => {
      const label = k === 'hr' ? 'HR' : labelize(k);
      return {
        slug: `${k}-hiring`,
        title: `${label} Hiring`,
        description: `Market trends, salary data, and how to fill ${label.toLowerCase() === 'hr' ? 'HR' : label.toLowerCase()} roles faster.`,
      };
    }),
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
                Payroll compliance, legal hiring, HCM software, and entrepreneur resources -- straight from the BEG team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SITE SEARCH — search band beneath the blog hero */}
      <InlineSearch
        heading="Search the BEG library"
        subhead="Payroll, HR, hiring, and compliance answers across 3,000+ pages."
        chips={['payroll by industry', 'legal hiring', 'compare alternatives', 'HCM technology']}
      />

      {topicGroups.map((group) => (
        <section key={group.heading} className="section section--soft">
          <div className="container">
            <div className="head center reveal">
              <h2>{group.heading}</h2>
            </div>
            <div className="cards">
              {group.items.map((cat) => (
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
      ))}
    </>
  );
}
