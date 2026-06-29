import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HCM Software & HR Tech | BEG Blog',
  description: 'isolved features, HR automation, and software comparisons for growing businesses.',
  alternates: { canonical: 'https://www.beghr.com/blog/hcm-software' },
  openGraph: {
    title: 'HCM Software & HR Tech | BEG Blog',
    description: 'isolved features, HR automation, and software comparisons for growing businesses.',
    url: 'https://www.beghr.com/blog/hcm-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HCM Software & HR Tech | BEG Blog', description: 'isolved features, HR automation, and software comparisons for growing businesses.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const posts = [
  {
    title: 'isolved HCM Platform: Cloud Payroll & HR for Growing Companies',
    description: 'isolved payroll and HRIS solutions for mid-market companies. Centralized HR, payroll, benefits, and talent management in one platform.',
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
  {
    title: 'AI Payroll in 2026: What It Can and Cannot Do',
    description: 'An honest 2026 look at AI in payroll. What AI can reliably handle, where humans stay in control, and how task-completing connectors change the daily HR workflow.',
    slug: '/blog/hcm-software/ai-payroll-what-it-can-do',
  },
  {
    title: 'Benefits Administration with isolved: Open Enrollment and ACA',
    description: 'isolved benefits administration covers open enrollment, carrier connections, ACA tracking, FSA/HSA management, and life events. BEG at $25-$45 PEPM.',
    slug: '/blog/hcm-software/benefits-administration-isolved',
  },
  {
    title: 'Chatbots Answer. isolved Completes the Task.',
    description: 'The difference between an HR chatbot and a platform that completes the work. Why that gap decides how much time your team actually saves, with the isolved Connector.',
    slug: '/blog/hcm-software/chatbots-answer-isolved-does-the-task',
  },
  {
    title: 'isolved Connector for Claude: What It Is and What It Does',
    description: 'A plain-language guide to the isolved Connector for Claude. What it is, what it actually does inside the HCM platform, and why it completes HR tasks for your team.',
    slug: '/blog/hcm-software/isolved-connector-for-claude',
  },
  {
    title: 'Time and Attendance Tracking Software: isolved Timekeeping',
    description: 'isolved time and attendance: punch methods, overtime alerts, geofencing, scheduling, and direct payroll integration. BEG at $25-$45 PEPM.',
    slug: '/blog/hcm-software/time-attendance-tracking',
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
                isolved guides, HR automation tips, and software comparisons for growing businesses.
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
