import Link from 'next/link';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';

export const metadata: Metadata = {
  title: 'Payroll Calendars 2026 and 2027: Pay Dates | BEG Blog',
  description: 'Payroll calendars for 2026 and 2027: biweekly and semimonthly pay dates, weekly schedules, and tax deadlines. BEG managed payroll at $25-$45 PEPM.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/calendars' },
  openGraph: {
    title: 'Payroll Calendars 2026 and 2027: Pay Dates | BEG Blog',
    description: 'Payroll calendars for 2026 and 2027: biweekly and semimonthly pay dates, weekly schedules, and tax deadlines. BEG managed payroll at $25-$45 PEPM.',
    url: 'https://www.beghr.com/blog/payroll/calendars',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Payroll Calendars 2026 and 2027: Pay Dates | BEG Blog', description: 'Payroll calendars for 2026 and 2027: biweekly and semimonthly pay dates, weekly schedules, and tax deadlines. BEG managed payroll at $25-$45 PEPM.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const posts = [
  {
    title: '2026 Payroll Calendar: Every Pay Date',
    description: 'The full 2026 payroll calendar with biweekly and semimonthly pay dates, holidays, and processing lead times.',
    slug: '/blog/payroll/calendars/2026-payroll-calendar',
  },
  {
    title: '2027 Payroll Calendar: Every Pay Date',
    description: 'The full 2027 payroll calendar with biweekly and semimonthly pay dates and how many pay periods to plan for.',
    slug: '/blog/payroll/calendars/2027-payroll-calendar',
  },
  {
    title: 'Biweekly Payroll Calendar 2026: All 26 Pay Dates',
    description: 'All 26 biweekly pay dates for 2026 with pay-period start and end dates, plus how to handle the extra pay period.',
    slug: '/blog/payroll/calendars/biweekly-payroll-calendar-2026',
  },
  {
    title: 'Semimonthly vs. Biweekly Payroll: Which to Run',
    description: 'Semimonthly (24) vs. biweekly (26) payroll compared on budgeting, overtime alignment, and administrative load.',
    slug: '/blog/payroll/calendars/semimonthly-vs-biweekly-payroll',
  },
  {
    title: 'Weekly Payroll Schedule Guide: 52 Pay Runs',
    description: 'How a weekly payroll schedule works across 52 pay runs, who it fits, and the cost and compliance tradeoffs.',
    slug: '/blog/payroll/calendars/weekly-payroll-schedule-guide',
  },
  {
    title: 'Payroll Tax Deadlines 2026: Deposits and Filings',
    description: 'Federal payroll tax deposit schedules and Form 941 and 940 filing patterns for 2026, with the IRS source linked.',
    slug: '/blog/payroll/calendars/payroll-tax-deadlines-2026',
  },
];

export default function CalendarsHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Payroll Calendars</p>
              <h1>Payroll Calendars: 2026, 2027, and Pay Schedules</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Pay-date calendars for 2026 and 2027, biweekly and semimonthly schedules, and payroll tax deadlines. Every date computed, not guessed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Payroll Calendars and Schedules</h2>
            <p>Plan your pay dates, choose a pay frequency, and stay ahead of federal payroll tax deadlines.</p>
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

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
          <h2>Never miss a pay date or a filing again.</h2>
          <p style={{ marginBottom: '1.5rem' }}>BEG runs every payroll cycle on your schedule and files every deposit on time, at $25-$45 per employee per month, all-inclusive.</p>
          <Link href="/services/managed-payroll" className="btn btn--gold">Learn About BEG Managed Payroll</Link>
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
              { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
              { '@type': 'ListItem', position: 4, name: 'Payroll Calendars', item: 'https://www.beghr.com/blog/payroll/calendars' },
            ],
          })
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "State Minimum Wage 2026: Rates by State", excerpt: "2026 minimum wage, scheduled increases, and overtime rules for all 50 states.", href: "/blog/payroll/minimum-wage" },
        { category: "Payroll", title: "Payroll Cost and Pricing Guides", excerpt: "What payroll costs across in-house, software, PEO, and managed models.", href: "/blog/payroll/cost" },
        { category: "Payroll", title: "Managed Payroll Services", excerpt: "Fully managed payroll at $25-$45 PEPM, all-inclusive, in all 50 states.", href: "/services/managed-payroll" },
      ]} />
    </>
  );
}
