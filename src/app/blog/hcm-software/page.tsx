import { Metadata } from 'next';
import Link from 'next/link';
import HeroImageBox from '@/components/HeroImageBox';

export const metadata: Metadata = {
  title: 'HCM Software & HR Tech | BEG Blog',
  description: 'iSolved features, HR automation, and software comparisons for growing businesses.',
  alternates: { canonical: 'https://beghr.com/blog/hcm-software' },
};

const posts = [
  {
    title: 'iSolved HCM Platform: Cloud Payroll & HR for Growing Companies',
    description: 'iSolved payroll and HRIS solutions for mid-market companies. Centralized HR, payroll, benefits, and talent management in one platform.',
    slug: '/blog/hcm-technology/isolved-platform',
  },
  {
    title: 'HR Automation: Save 200+ Hours Per Year',
    description: 'Automate payroll, benefits, onboarding, and compliance. See how HR automation saves time and eliminates errors.',
    slug: '/blog/hcm-technology/hr-automation',
  },
  {
    title: 'Payroll Tax Compliance: 2026 Updates & What Changed',
    description: 'Tax law changes, new payroll requirements, and what HR teams need to know about payroll compliance in 2026.',
    slug: '/blog/hcm-technology/payroll-compliance',
  },
];

export default function BlogHcmPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · HCM Software &amp; HR Tech</p>
              <h1>HCM Software &amp; HR Tech</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                iSolved guides, HR automation tips, and software comparisons for growing businesses.
              </p>
            </div>
            <HeroImageBox src="/assets/hero-images/hcm-software.svg" alt="HCM Software & HR Tech" />
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
    </>
  );
}
