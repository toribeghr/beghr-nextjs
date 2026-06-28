import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HCM Technology & HR Software Guides | BEG Blog',
  description: 'HCM platform reviews, HR automation guides, and payroll compliance updates for growing businesses. Powered by isolved and managed by BEG.',
  alternates: { canonical: 'https://beghr.com/blog/hcm-technology' },
  openGraph: {
    title: 'HCM Technology & HR Software Guides | BEG Blog',
    description: 'HCM platform reviews, HR automation guides, and payroll compliance updates for growing businesses. Powered by isolved and managed by BEG.',
    url: 'https://beghr.com/blog/hcm-technology',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Technology & HR Software Guides | BEG Blog', description: 'HCM platform reviews, HR automation guides, and payroll compliance updates for growing businesses. Powered by isolved and managed by BEG.', images: ['https://beghr.com/assets/og-image.png'] },

};

const posts = [
  {
    title: 'iSolved HCM Platform: Cloud Payroll & HR for Growing Companies (2026)',
    description: 'Full isolved platform review — payroll, benefits, time and attendance, talent management, and the Connector for Claude. Who isolved fits best and how BEG manages it for you.',
    slug: '/blog/hcm-technology/isolved-platform',
  },
  {
    title: 'HR Automation: What to Automate, What Not To, and How Much Time You Save (2026)',
    description: 'HR automation guide for growing companies. Payroll, benefits, onboarding, and compliance workflows. Time savings by function, what to automate first, and when to outsource instead.',
    slug: '/blog/hcm-technology/hr-automation',
  },
  {
    title: 'Payroll Tax Compliance 2026: What Changed and What Your System Must Handle',
    description: '2026 payroll compliance guide. Federal and state changes, FLSA thresholds, ACA requirements, multi-state employer obligations, and how managed payroll keeps you current.',
    slug: '/blog/hcm-technology/payroll-compliance',
  },
];

export default function BlogHcmTechnologyPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HCM Technology</p>
              <h1>HCM Technology Guides</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Platform reviews, HR automation how-tos, and payroll compliance updates for growing businesses.
              </p>
              <Link
                href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--gold"
              >
                Talk to a Payroll Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <p className="eyebrow">HCM Technology</p>
            <h2>Platform Reviews &amp; HR Automation Guides</h2>
            <p>Everything you need to evaluate, implement, and get more from your HCM platform.</p>
          </div>
          <div className="cards">
            {posts.map((post) => (
              <article key={post.slug} className="card reveal">
                <h3>
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <Link href={post.slug} className="btn btn--gold" style={{ marginTop: '16px', display: 'inline-block' }}>
                  Read Guide
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <p className="eyebrow">Managed by BEG</p>
          <h2>You do not have to run isolved yourself.</h2>
          <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '2rem' }}>
            BEG configures and fully manages the isolved platform for your organization — payroll processing, benefits administration, compliance updates, and year-end filings. No system to learn, no implementation project to manage. We handle it at $25–$45 per employee per month, all-inclusive.
          </p>
          <Link
            href="/services/managed-payroll"
            className="btn btn--gold"
          >
            See Managed Payroll Service
          </Link>
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
              { '@type': 'ListItem', position: 3, name: 'HCM Technology', item: 'https://beghr.com/blog/hcm-technology' },
            ],
          }),
        }}
      />
    </>
  );
}
