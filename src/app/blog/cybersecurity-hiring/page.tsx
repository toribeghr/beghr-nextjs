import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cybersecurity Hiring & Recruiting | BEG Blog',
  description: 'Security skills shortage trends, CISO and security engineer recruiting, comp insights, and hiring strategy for leaders filling security roles fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/cybersecurity-hiring' },
  openGraph: {
    title: 'Cybersecurity Hiring & Recruiting | BEG Blog',
    description: 'Security skills shortage trends, CISO and security engineer recruiting, comp insights, and hiring strategy for leaders filling security roles fast.',
    url: 'https://www.beghr.com/blog/cybersecurity-hiring',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Cybersecurity Hiring & Recruiting | BEG Blog', description: 'Security skills shortage trends, CISO and security engineer recruiting, comp insights, and hiring strategy for leaders filling security roles fast.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: 'The Cybersecurity Talent Gap in 2026: What Security Leaders Need to Know',
    description: 'The security skills shortage is widening while threats grow. What the talent gap means for hiring and how to fill security roles in 23-35 days anyway.',
    slug: '/blog/cybersecurity-hiring/cybersecurity-talent-gap',
  },
  {
    title: 'How to Hire a CISO (Without Broadcasting It to the Market)',
    description: 'A CISO hire carries board-level stakes. What to look for, why confidential search matters, and how to fill the seat in 23-35 days.',
    slug: '/blog/cybersecurity-hiring/hiring-a-ciso',
  },
  {
    title: 'Security Engineer Recruiting: Winning Talent That Fields Multiple Offers',
    description: 'Strong security engineers field several offers at once and ignore postings. How to source, screen, and close them before a competitor does.',
    slug: '/blog/cybersecurity-hiring/security-engineer-recruiting',
  },
  {
    title: 'Cybersecurity Salary Trends 2026: Why Speed Beats Salary',
    description: 'Security comp is climbing, but the best candidates weigh more than pay. What cyber salary trends mean for hiring and why speed wins the hire.',
    slug: '/blog/cybersecurity-hiring/cybersecurity-salary-trends',
  },
  {
    title: 'How to Write a Cybersecurity Job Description That Attracts Security Talent',
    description: 'Listing 20 certifications as required scares off the best candidates. How to write a CISO, security engineer, or GRC analyst job description that actually works.',
    slug: '/blog/cybersecurity-hiring/cybersecurity-job-description',
  },
];

export default function BlogCybersecurityHiringPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Cybersecurity Hiring &amp; Recruiting</p>
              <h1>Cybersecurity Hiring &amp; Recruiting</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Security skills shortage trends, CISO and security engineer recruiting strategies, compensation insights, and hiring playbooks for security and technology leaders who need to fill critical roles fast.
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
            <Link href="/services/job-placement/cybersecurity" className="btn btn--gold" style={{ display: 'inline-block' }}>
              See BEG Cybersecurity Placement &rarr;
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
              { '@type': 'ListItem', position: 3, name: 'Cybersecurity Hiring', item: 'https://www.beghr.com/blog/cybersecurity-hiring' },
            ],
          }),
        }}
      />
    </>
  );
}
