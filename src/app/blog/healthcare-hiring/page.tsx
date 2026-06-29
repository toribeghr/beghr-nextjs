import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Healthcare Hiring | BEG Blog',
  description: 'Clinical talent shortage trends, nurse practitioner hiring, clinical staff recruiting, and healthcare comp insights for leaders who fill roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/healthcare-hiring' },
  openGraph: {
    title: 'Healthcare Hiring | BEG Blog',
    description: 'Clinical talent shortage trends, nurse practitioner hiring, clinical staff recruiting, and healthcare comp insights for leaders who fill roles fast.',
    url: 'https://www.beghr.com/blog/healthcare-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Healthcare Hiring | BEG Blog', description: 'Clinical talent shortage trends, nurse practitioner hiring, clinical staff recruiting, and healthcare comp insights for leaders who fill roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Healthcare Talent Shortage in 2026: What Leaders Need to Know',
    description: 'Clinician retirements are up, the pipeline is thin, and demand keeps climbing. What the healthcare shortage means for hiring and how to fill roles anyway.',
    slug: '/blog/healthcare-hiring/healthcare-talent-shortage',
  },
  {
    title: 'How to Hire Nurse Practitioners Fast (Without Settling)',
    description: 'A vacant NP seat strains your panel, your access, and your team. A practical playbook to hire a nurse practitioner in 23-35 days.',
    slug: '/blog/healthcare-hiring/hiring-nurse-practitioners',
  },
  {
    title: 'Clinical Staff Recruiting: Filling Roles a Posting Cannot',
    description: 'The strongest clinical candidates are employed and passive. How to recruit nurses, NPs, and clinical leaders without relying on job boards.',
    slug: '/blog/healthcare-hiring/clinical-staff-recruiting',
  },
  {
    title: 'Healthcare Salary Trends 2026: Why Pay Alone Does Not Win Candidates',
    description: 'Clinical comp is climbing, but the best candidates are passive and pay is only part of the decision. What actually closes a healthcare hire.',
    slug: '/blog/healthcare-hiring/healthcare-salary-trends',
  },
  {
    title: 'Healthcare Interview Questions for Nurses, NPs, and Clinical Directors',
    description: 'Clinical credentials are a starting point. These healthcare interview questions reveal patient safety judgment, communication style, and the retention signals that predict whether a hire will stay.',
    slug: '/blog/healthcare-hiring/healthcare-interview-questions',
  },
];

export default function BlogHealthcareHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Healthcare Hiring</p>
              <h1>Healthcare Hiring</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Clinical talent shortage trends, nurse practitioner and clinical staff hiring strategies, recruiting playbooks, and compensation insights for healthcare leaders who need to fill roles fast.
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
            <Link href="/services/job-placement/healthcare" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Healthcare Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Healthcare Hiring', item: 'https://www.beghr.com/blog/healthcare-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
