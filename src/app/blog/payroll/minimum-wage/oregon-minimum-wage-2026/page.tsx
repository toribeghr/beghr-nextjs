import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Oregon Minimum Wage 2026: Portland vs Standard vs Rural | BEG',
  description: 'Oregon minimum wage 2026 is $15.05 standard, $16.30 Portland metro, $14.05 non-urban. Rates adjust each July 1. Get a free managed payroll quote.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/oregon-minimum-wage-2026' },
  openGraph: {
    title: 'Oregon Minimum Wage 2026: Portland vs Standard vs Rural | BEG',
    description: 'Oregon minimum wage 2026 is $15.05 standard, $16.30 Portland metro, $14.05 non-urban. Rates adjust each July 1. Get a free managed payroll quote.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/oregon-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Oregon Minimum Wage 2026: Portland vs Standard vs Rural | BEG', description: 'Oregon minimum wage 2026 is $15.05 standard, $16.30 Portland metro, $14.05 non-urban. Rates adjust each July 1. Get a free managed payroll quote.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the Oregon minimum wage in 2026?',
    answer: 'Oregon has three regional rates in 2026: $16.30 per hour in the Portland metro area, $15.05 in the standard region, and $14.05 in non-urban counties.',
  },
  {
    question: 'Why does Oregon have three different minimum wage rates?',
    answer: 'Oregon divides the state into three wage zones: Portland metro, a standard zone covering most of the state, and non-urban counties. Each zone has its own rate to reflect regional cost-of-living differences.',
  },
  {
    question: 'When does the Oregon minimum wage change?',
    answer: 'Oregon adjusts its minimum wage rates every year on July 1, not January 1 like most states. Employers should build a mid-year rate check into their payroll calendar.',
  },
  {
    question: 'What is the overtime rule in Oregon?',
    answer: 'Oregon generally follows the weekly overtime standard of 1.5x the regular rate for hours over 40, with additional daily overtime rules applying in some mills and factories.',
  },
  {
    question: 'Does Oregon require paid sick leave and paid family leave?',
    answer: 'Yes to both. Oregon has a statewide paid sick leave law and a state paid family and medical leave (PFML) program providing job-protected paid leave for qualifying events.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Oregon Minimum Wage 2026: Portland vs Standard vs Rural", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/oregon-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Oregon Minimum Wage 2026: Portland vs Standard vs Rural</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Oregon's 2026 minimum wage is $15.05 standard, $16.30 in the Portland metro area, and $14.05 in non-urban counties, per the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor's state minimum wage chart</a>.</p>

        <p>Oregon runs a three-tier regional wage system that adjusts every July 1, making it one of the more complex states for multi-location payroll. This guide breaks down all three rates, the annual adjustment timing, and overtime rules for 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Oregon Minimum Wage by Region for 2026</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Region</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>Hourly Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Portland metro area', '$16.30'],
                ['Standard region (most of the state)', '$15.05'],
                ['Non-urban counties', '$14.05'],
                ['Federal minimum wage (FLSA)', '$7.25'],
              ].map(([label, rate], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{label}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{rate}</td>
                </tr>
              ))}
              <tr style={{ background: '#fff7ec', borderBottom: '1px solid #e5e5e5' }}>
                <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>Scheduled adjustment</td>
                <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>Adjusted each July 1</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Employers must apply the rate tied to the region where the employee physically works. Businesses operating in more than one Oregon wage zone need to track employee work locations carefully rather than applying a single company-wide rate.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The July 1 Annual Adjustment</h2>

        <p>Unlike most states that adjust minimum wage on January 1, Oregon updates all three regional rates every year on July 1. This means Oregon employers need a mid-year compliance check built into their payroll calendar, separate from the annual review most other states require at year-end.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Oregon</h2>

        <p>Oregon generally follows a weekly overtime standard: 1.5x the regular rate of pay for hours worked over 40 in a workweek. Additional daily overtime rules apply in some mills and factories, so employers in manufacturing settings should confirm whether those daily rules apply to their operation.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Paid Family Leave</h2>

        <p>Oregon requires paid sick leave statewide and operates a paid family and medical leave (PFML) program that provides job-protected, partially paid leave for qualifying family and medical events. Both run independently of the regional wage structure and require separate payroll tracking.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Employees and Local Ordinances</h2>

        <p>Oregon does not allow a tip credit against minimum wage; tipped employees must be paid the full applicable regional minimum wage in addition to any tips they receive. Because regional boundaries and rate levels can shift with each July 1 adjustment, confirm current figures through the <a href="https://www.dol.gov/agencies/whd/state/contacts">DOL state labor office contacts page</a> before setting pay rates for any location.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Oregon payroll compliance means tracking which of three wage zones each employee works in, updating all three rates every July 1, applying overtime correctly including any daily rules in manufacturing, and administering paid sick leave and PFML deductions. The July 1 timing is the detail most out-of-state employers miss, since it does not align with a typical calendar-year compliance cycle.</p>

        <p>BEG's managed payroll service tracks Oregon's regional wage zones and July 1 adjustment automatically at every payroll close, so multi-zone compliance does not fall on your internal team.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Oregon Payroll, Handled.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG manages payroll at $25-$45 per employee per month, all-inclusive. Get an instant cost comparison for your business.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Frequently Asked Questions</h2>

        <div className="faq" style={{ marginTop: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/managed-payroll/oregon" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Oregon Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/oregon" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Oregon HR Outsourcing &rarr;
            </a>
            <a href="/blog/payroll/minimum-wage" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              More Minimum Wage Guides &rarr;
            </a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads payroll solutions at Business Executive Group, a national managed payroll firm serving businesses across industries. BEG manages payroll at $25-$45 PEPM, all-inclusive, with deep expertise in compliance, multi-state filing, and state-specific wage and hour requirements. Get instant pricing at beghr.com.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the Oregon minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"Oregon has three regional rates in 2026: $16.30 per hour in the Portland metro area, $15.05 in the standard region, and $14.05 in non-urban counties."}},{"@type":"Question","name":"Why does Oregon have three different minimum wage rates?","acceptedAnswer":{"@type":"Answer","text":"Oregon divides the state into three wage zones: Portland metro, a standard zone covering most of the state, and non-urban counties. Each zone has its own rate to reflect regional cost-of-living differences."}},{"@type":"Question","name":"When does the Oregon minimum wage change?","acceptedAnswer":{"@type":"Answer","text":"Oregon adjusts its minimum wage rates every year on July 1, not January 1 like most states. Employers should build a mid-year rate check into their payroll calendar."}},{"@type":"Question","name":"What is the overtime rule in Oregon?","acceptedAnswer":{"@type":"Answer","text":"Oregon generally follows the weekly overtime standard of 1.5x the regular rate for hours over 40, with additional daily overtime rules applying in some mills and factories."}},{"@type":"Question","name":"Does Oregon require paid sick leave and paid family leave?","acceptedAnswer":{"@type":"Answer","text":"Yes to both. Oregon has a statewide paid sick leave law and a state paid family and medical leave (PFML) program providing job-protected paid leave for qualifying events."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Oregon Minimum Wage 2026: Portland vs Standard vs Rural","description":"Oregon minimum wage 2026 is $15.05 standard, $16.30 Portland metro, $14.05 non-urban. Rates adjust each July 1. Get a free managed payroll quote.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/oregon-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/oregon-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Oregon Minimum Wage 2026: Portland vs Standard vs Rural","item":"https://www.beghr.com/blog/payroll/minimum-wage/oregon-minimum-wage-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Pennsylvania Minimum Wage 2026: What Employers Owe", excerpt: "Pennsylvania's 2026 minimum wage is $7.25 per hour, matching the federal floor. Philadelphia and Pittsburgh have local sick leave rules...", href: "/blog/payroll/minimum-wage/pennsylvania-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive. Get a free...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "More Payroll Guides", excerpt: "Explore state minimum wage rules, payroll cost breakdowns, and compliance guides for employers nationwide...", href: "/blog/payroll" },
      ]} />
    </article>
  );
}
