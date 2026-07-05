import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pennsylvania Minimum Wage 2026: Federal Floor, Local Rules | BEG',
  description: 'Pennsylvania minimum wage 2026 is $7.25/hour, matching the federal floor. Philadelphia and Pittsburgh have local sick leave rules. Get a free quote.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/minimum-wage/pennsylvania-minimum-wage-2026' },
  openGraph: {
    title: 'Pennsylvania Minimum Wage 2026: Federal Floor, Local Rules | BEG',
    description: 'Pennsylvania minimum wage 2026 is $7.25/hour, matching the federal floor. Philadelphia and Pittsburgh have local sick leave rules. Get a free quote.',
    url: 'https://www.beghr.com/blog/payroll/minimum-wage/pennsylvania-minimum-wage-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Pennsylvania Minimum Wage 2026: Federal Floor, Local Rules | BEG', description: 'Pennsylvania minimum wage 2026 is $7.25/hour, matching the federal floor. Philadelphia and Pittsburgh have local sick leave rules. Get a free quote.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the Pennsylvania minimum wage in 2026?',
    answer: 'Pennsylvania\'s minimum wage is $7.25 per hour in 2026, matching the federal minimum wage. The state has not enacted a minimum wage above the federal floor.',
  },
  {
    question: 'Do Philadelphia and Pittsburgh have their own minimum wage?',
    answer: 'Philadelphia and Pittsburgh have local paid sick leave ordinances, but the base minimum wage in both cities still follows the $7.25 state and federal rate. Employers in those cities need to comply with the local sick leave rules in addition to the wage floor.',
  },
  {
    question: 'What is the overtime rule in Pennsylvania?',
    answer: 'Pennsylvania follows the standard weekly overtime rule: 1.5x the regular rate of pay for hours worked over 40 in a workweek.',
  },
  {
    question: 'Does Pennsylvania require paid sick leave statewide?',
    answer: 'No, Pennsylvania does not have a statewide paid sick leave law or a state paid family and medical leave (PFML) program. However, Philadelphia and Pittsburgh each have their own local paid sick leave ordinances that apply to employers within city limits.',
  },
  {
    question: 'Where can Pennsylvania employers confirm current local ordinance requirements?',
    answer: 'The U.S. Department of Labor publishes a state-by-state minimum wage chart, and its state contacts directory links directly to the Pennsylvania labor office, which can point employers to the specific Philadelphia or Pittsburgh ordinance text.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Pennsylvania Minimum Wage 2026: Federal Floor, Local Rules", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/minimum-wage/pennsylvania-minimum-wage-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management</p>
              <h1>Pennsylvania Minimum Wage 2026: Federal Floor, Local Rules</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Pennsylvania's 2026 minimum wage is $7.25 per hour, matching the federal floor exactly, per the <a href="https://www.dol.gov/agencies/whd/minimum-wage/state">U.S. Department of Labor's state minimum wage chart</a>.</p>

        <p>While Pennsylvania's base wage rate is simple, Philadelphia and Pittsburgh each layer on local paid sick leave ordinances that statewide employers do not have to navigate. This guide covers the wage floor, overtime rules, and local caveats for 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Pennsylvania Minimum Wage Rates for 2026</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.93rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.75rem', textAlign: 'left' }}>Wage Floor</th>
                <th style={{ padding: '0.75rem', textAlign: 'right' }}>Hourly Rate</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Pennsylvania state minimum wage', '$7.25'],
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

        <p>Because Pennsylvania's state rate matches the federal minimum, the wage floor itself is straightforward. The complexity in Pennsylvania comes from local ordinances layered on top of that base rate, not from the wage rate itself.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Overtime Rules in Pennsylvania</h2>

        <p>Pennsylvania follows the standard weekly overtime rule: non-exempt employees earn 1.5x their regular rate of pay for hours worked over 40 in a workweek. There is no daily overtime threshold under state law.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Philadelphia and Pittsburgh Paid Sick Leave Ordinances</h2>

        <p>Pennsylvania does not have a statewide paid sick leave law, but Philadelphia and Pittsburgh each have their own local paid sick leave ordinances that apply to employers with workers physically located in those cities. These ordinances typically set accrual rates and usage rules independent of state law, so a Pennsylvania employer with locations in both cities and elsewhere in the state may need to run different sick leave policies by location. Confirm the current ordinance requirements directly, since city rules can be updated separately from state law.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Paid Family Leave in Pennsylvania</h2>

        <p>Pennsylvania does not operate a state paid family and medical leave (PFML) program. Employers rely on federal FMLA protections where applicable.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Tipped Employees and Local Ordinances</h2>

        <p>Tip credit provisions allow eligible employers to pay tipped employees a lower direct cash wage as long as tips bring total compensation up to at least minimum wage. Because Philadelphia and Pittsburgh both maintain their own local labor ordinances beyond sick leave, confirm current tipped wage rules and any applicable local requirements through the <a href="https://www.dol.gov/agencies/whd/state/contacts">DOL state labor office contacts page</a>.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>What This Means for Payroll Compliance</h2>

        <p>Pennsylvania payroll compliance means applying a simple statewide wage floor correctly, while separately tracking Philadelphia and Pittsburgh paid sick leave ordinances for any employees working in those cities. Multi-location Pennsylvania employers face more local ordinance complexity than the flat wage rate suggests.</p>

        <p>BEG's managed payroll service tracks Pennsylvania's wage floor and the Philadelphia and Pittsburgh sick leave ordinances automatically at every payroll close, so location-specific compliance does not fall on your internal team.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>Pennsylvania Payroll, Handled.</h3>
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
            <a href="/services/managed-payroll/pennsylvania" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Pennsylvania Managed Payroll &rarr;
            </a>
            <a href="/services/hr-outsourcing/pennsylvania" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Pennsylvania HR Outsourcing &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the Pennsylvania minimum wage in 2026?","acceptedAnswer":{"@type":"Answer","text":"Pennsylvania's minimum wage is $7.25 per hour in 2026, matching the federal minimum wage. The state has not enacted a minimum wage above the federal floor."}},{"@type":"Question","name":"Do Philadelphia and Pittsburgh have their own minimum wage?","acceptedAnswer":{"@type":"Answer","text":"Philadelphia and Pittsburgh have local paid sick leave ordinances, but the base minimum wage in both cities still follows the $7.25 state and federal rate. Employers in those cities need to comply with the local sick leave rules in addition to the wage floor."}},{"@type":"Question","name":"What is the overtime rule in Pennsylvania?","acceptedAnswer":{"@type":"Answer","text":"Pennsylvania follows the standard weekly overtime rule: 1.5x the regular rate of pay for hours worked over 40 in a workweek."}},{"@type":"Question","name":"Does Pennsylvania require paid sick leave statewide?","acceptedAnswer":{"@type":"Answer","text":"No, Pennsylvania does not have a statewide paid sick leave law or a state paid family and medical leave (PFML) program. However, Philadelphia and Pittsburgh each have their own local paid sick leave ordinances that apply to employers within city limits."}},{"@type":"Question","name":"Where can Pennsylvania employers confirm current local ordinance requirements?","acceptedAnswer":{"@type":"Answer","text":"The U.S. Department of Labor publishes a state-by-state minimum wage chart, and its state contacts directory links directly to the Pennsylvania labor office, which can point employers to the specific Philadelphia or Pittsburgh ordinance text."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Pennsylvania Minimum Wage 2026: Federal Floor, Local Rules","description":"Pennsylvania minimum wage 2026 is $7.25/hour, matching the federal floor. Philadelphia and Pittsburgh have local sick leave rules. Get a free quote.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/minimum-wage/pennsylvania-minimum-wage-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/minimum-wage/pennsylvania-minimum-wage-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Minimum Wage","item":"https://www.beghr.com/blog/payroll/minimum-wage"},{"@type":"ListItem","position":5,"name":"Pennsylvania Minimum Wage 2026: Federal Floor, Local Rules","item":"https://www.beghr.com/blog/payroll/minimum-wage/pennsylvania-minimum-wage-2026"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll", title: "Rhode Island Minimum Wage 2026: What Employers Owe", excerpt: "Rhode Island's 2026 minimum wage is $16.00 per hour, well above the federal floor. See Sunday and holiday premium rules...", href: "/blog/payroll/minimum-wage/rhode-island-minimum-wage-2026" },
        { category: "Payroll", title: "PEPM Pricing Explained: What Providers Leave Out", excerpt: "PEPM Pricing Explained: What Per-Employee-Per-Month Means. Managed payroll at $25-$45 PEPM all-inclusive. Get a free...", href: "/blog/payroll/cost/pepm-pricing-explained" },
        { category: "Payroll", title: "More Payroll Guides", excerpt: "Explore state minimum wage rules, payroll cost breakdowns, and compliance guides for employers nationwide...", href: "/blog/payroll" },
      ]} />
    </article>
  );
}
