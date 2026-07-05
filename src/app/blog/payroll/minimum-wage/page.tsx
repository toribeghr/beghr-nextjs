import Link from 'next/link';
import { Metadata } from 'next';
import RelatedPosts from '@/components/RelatedPosts';
import stateData from '@/lib/hrStateData.json';

export const metadata: Metadata = {
  title: 'State Minimum Wage 2026: Rates by State | BEG Blog',
  description: 'Minimum wage 2026 for all 50 states: current rates, scheduled increases, and overtime rules. BEG managed payroll at $25-$45 PEPM, all-inclusive.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage' },
  openGraph: {
    title: 'State Minimum Wage 2026: Rates by State | BEG Blog',
    description: 'Minimum wage 2026 for all 50 states: current rates, scheduled increases, and overtime rules. BEG managed payroll at $25-$45 PEPM, all-inclusive.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'State Minimum Wage 2026: Rates by State | BEG Blog', description: 'Minimum wage 2026 for all 50 states: current rates, scheduled increases, and overtime rules. BEG managed payroll at $25-$45 PEPM, all-inclusive.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

type StateRow = { n: string; w: string };
const data = stateData as Record<string, StateRow>;

const posts = Object.entries(data)
  .map(([slug, v]) => ({
    title: `${v.n} Minimum Wage 2026`,
    wage: v.w,
    slug: `/blog/payroll/minimum-wage/${slug}-minimum-wage-2026`,
  }))
  .sort((a, b) => a.title.localeCompare(b.title));

export default function MinimumWageHubPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Payroll Management &middot; Minimum Wage 2026</p>
              <h1>State Minimum Wage 2026: Rates and Rules by State</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Current 2026 minimum wage, scheduled increases, and overtime rules for all 50 states. Rates verified against the U.S. Department of Labor. For the federal picture, see the{' '}
                <a href="https://www.dol.gov/agencies/whd/minimum-wage/state" target="_blank" rel="noopener noreferrer">DOL state minimum wage table</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center reveal">
            <h2>Minimum Wage by State</h2>
            <p>Pick your state for the 2026 rate, overtime premium rule, scheduled increases, and what it means for payroll compliance.</p>
          </div>
          <div className="cards">
            {posts.map((post) => (
              <article key={post.slug} className="card reveal">
                <h3>
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                <p>{post.wage}</p>
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
          <h2>Multi-state payroll, handled.</h2>
          <p style={{ marginBottom: '1.5rem' }}>BEG applies the correct minimum wage, overtime, and tax rules in every state you run payroll, at $25-$45 per employee per month, all-inclusive. Live in 3-5 business days, no system migration.</p>
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
              { '@type': 'ListItem', position: 4, name: 'Minimum Wage 2026', item: 'https://www.beghr.com/blog/payroll/minimum-wage' },
            ],
          })
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Payroll Calendars: 2026, 2027, and Schedules", excerpt: "Biweekly and semimonthly pay dates, weekly schedules, and 2026 payroll tax deadlines.", href: "/blog/payroll/calendars" },
        { category: "Payroll", title: "Payroll Cost and Pricing Guides", excerpt: "What payroll costs across in-house, software, PEO, and managed models.", href: "/blog/payroll/cost" },
        { category: "Payroll", title: "Managed Payroll Services", excerpt: "Fully managed payroll at $25-$45 PEPM, all-inclusive, in all 50 states.", href: "/services/managed-payroll" },
      ]} />
    </>
  );
}
