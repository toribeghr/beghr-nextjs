import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'New York Minimum Wage 2026: NYC vs Rest of State | BEG',
  description: 'New York minimum wage 2026 is $17.00 in NYC, Nassau, Suffolk, Westchester and $16.00 elsewhere. See the full breakdown and get a free payroll quote.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/new-york-minimum-wage-2026' },
  openGraph: {
    title: 'New York Minimum Wage 2026: NYC vs Rest of State | BEG',
    description: 'New York minimum wage 2026 is $17.00 in NYC, Nassau, Suffolk, Westchester and $16.00 elsewhere. See the full breakdown and get a free payroll quote.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/new-york-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-minimum-wage-new-york-minimum-wage-2026.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New York Minimum Wage 2026: NYC vs Rest of State | BEG', description: 'New York minimum wage 2026 is $17.00 in NYC, Nassau, Suffolk, Westchester and $16.00 elsewhere. See the full breakdown and get a free payroll quote.', images: ['https://www.beghr.com/blog-images/blog-payroll-minimum-wage-new-york-minimum-wage-2026.webp'] },
};

const faqs = [
  {
    question: 'What is the New York minimum wage in 2026?',
    answer: 'New York pays $17.00 per hour in New York City, Nassau, Suffolk, and Westchester counties, and $16.00 per hour in the rest of the state. Both rates are well above the federal $7.25 minimum.',
  },
  {
    question: 'Why does New York have two different minimum wage rates?',
    answer: 'New York sets a higher regional rate for New York City and the downstate counties of Nassau, Suffolk, and Westchester, reflecting higher cost of living in those areas. The remainder of the state pays the standard statewide rate.',
  },
  {
    question: 'What is the overtime rule in New York?',
    answer: 'New York follows a weekly overtime standard of 1.5x the regular rate for hours over 40, with a 44-hour threshold for residential (live-in) workers before overtime applies.',
  },
  {
    question: 'What are spread-of-hours and split-shift rules?',
    answer: 'New York requires an extra hour of pay at the minimum wage in certain spread-of-hours and split-shift scenarios, generally when a workday spans more than 10 hours or includes a non-consecutive shift. Confirm applicability with the state labor office for your specific pay practices.',
  },
  {
    question: 'Does New York require paid sick leave and paid family leave?',
    answer: 'Yes to both. New York has a statewide paid sick leave law and a state paid family and medical leave (PFML) program that provides job-protected paid leave for qualifying family and medical events.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-minimum-wage-new-york-minimum-wage-2026.webp", "headline": "New York Minimum Wage 2026: NYC vs Rest of State", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/new-york-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>New York Minimum Wage 2026: NYC vs Rest of State</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-minimum-wage-new-york-minimum-wage-2026.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>New York's 2026 minimum wage is $17.00 per hour in NYC, Nassau, Suffolk, and Westchester, and $16.00 in the rest of the state, per the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor's state minimum wage chart</a>.</p>

        <p>New York is one of a handful of states with regional minimum wage variants, which makes payroll setup more complex for employers with workers spread across multiple counties. This guide breaks down both rates, overtime rules, and what New York requires for 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>New York Minimum Wage by Region for 2026</h2>

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
                ['New York City', '$17.00'],
                ['Nassau County', '$17.00'],
                ['Suffolk County', '$17.00'],
                ['Westchester County', '$17.00'],
                ['Rest of New York State', '$16.00'],
                ['Federal minimum wage (FLSA)', '$7.25'],
              ].map(([label, rate], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem 0.75rem', fontWeight: '600' }}>{label}</td>
                  <td style={{ padding: '0.65rem 0.75rem', textAlign: 'right' }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>Employers must apply the rate tied to where the employee physically works, not where the business is headquartered. A company based upstate with employees commuting into NYC must pay the NYC rate for hours worked there.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in New York</h2>

        <p>New York applies a weekly overtime standard: non-exempt employees earn 1.5x their regular rate for hours worked over 40 in a workweek. Residential (live-in) workers have a higher threshold, with overtime owed only after 44 hours in a week.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Spread-of-Hours and Split-Shift Pay</h2>

        <p>New York has additional wage rules beyond standard overtime. Spread-of-hours and split-shift rules can require an extra hour of pay at the minimum wage in certain scheduling scenarios, adding complexity for employers with irregular shifts. These rules layer on top of regional minimum wage and standard overtime, so payroll systems need to flag qualifying schedules rather than rely on a flat hourly calculation.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Sick Leave and Paid Family Leave</h2>

        <p>New York requires paid sick leave statewide and operates a paid family and medical leave (PFML) program that provides job-protected, partially paid leave for qualifying family and medical events. Both programs run alongside the wage requirements above and require separate payroll deductions and tracking.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Employees and Local Ordinances</h2>

        <p>New York permits a tip credit for certain tipped occupations, with cash wage minimums that vary by region and industry. Because tipped wage floors and any additional local requirements can change independently of the standard minimum wage, confirm current tipped wage rules through the <a href="https://www.dol.gov/agencies/whd/state/contacts">DOL state labor office contacts page</a> before setting pay rates.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>New York payroll compliance means applying the correct regional rate per employee, tracking weekly and residential overtime thresholds separately, administering spread-of-hours and split-shift pay where it applies, and running both paid sick leave and PFML deductions correctly. For employers with staff across multiple New York counties, manual tracking of regional rate boundaries is where most errors happen.</p>

        <p>BEG's managed payroll service applies New York's regional wage rates, overtime rules, and paid leave programs automatically at every payroll close, so multi-county compliance does not fall on your internal team.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>New York Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/new-york" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              New York Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/new-york" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              New York HR Outsourcing &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the New York minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"New York pays $17.00 per hour in New York City, Nassau, Suffolk, and Westchester counties, and $16.00 per hour in the rest of the state. Both rates are well above the federal $7.25 minimum."}},{"@type":"Question","name":"Why does New York have two different minimum wage rates?","acceptedAnswer":{"@type":"Answer","text":"New York sets a higher regional rate for New York City and the downstate counties of Nassau, Suffolk, and Westchester, reflecting higher cost of living in those areas. The remainder of the state pays the standard statewide rate."}},{"@type":"Question","name":"What is the overtime rule in New York?","acceptedAnswer":{"@type":"Answer","text":"New York follows a weekly overtime standard of 1.5x the regular rate for hours over 40, with a 44-hour threshold for residential (live-in) workers before overtime applies."}},{"@type":"Question","name":"What are spread-of-hours and split-shift rules?","acceptedAnswer":{"@type":"Answer","text":"New York requires an extra hour of pay at the minimum wage in certain spread-of-hours and split-shift scenarios, generally when an employee's workday spans more than 10 hours or includes a non-consecutive shift. Confirm applicability with the state labor office for your specific pay practices."}},{"@type":"Question","name":"Does New York require paid sick leave and paid family leave?","acceptedAnswer":{"@type":"Answer","text":"Yes to both. New York has a statewide paid sick leave law and a state paid family and medical leave (PFML) program that provides job-protected paid leave for qualifying family and medical events."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"New York Minimum Wage 2026: NYC vs Rest of State","description":"New York minimum wage 2026 is $17.00 in NYC, Nassau, Suffolk, Westchester and $16.00 elsewhere. See the full breakdown and get a free payroll quote.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/new-york-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/new-york-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"New York Minimum Wage 2026: NYC vs Rest of State","item":"https://www.beghr.com/blog/payroll/minimum-wage/new-york-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "New Mexico Minimum Wage 2026: What Employers Owe", excerpt: "New Mexico's 2026 minimum wage is $12.00 per hour, well above the federal $7.25 floor. Santa Fe and Albuquerque set...", href: "/blog/payroll/minimum-wage/new-mexico-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive. Get a free...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "More Payroll Guides", excerpt: "Explore state minimum wage rules, payroll cost breakdowns, and compliance guides for employers nationwide...", href: "/blog/payroll" },
      ]} />
    </article>
  );
}
