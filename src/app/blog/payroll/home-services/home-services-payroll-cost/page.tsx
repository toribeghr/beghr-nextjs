import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home Services Payroll Costs, In-House vs Managed | BEG',
  description: 'How much does payroll cost for a home services company? Compare in-house payroll specialist ($60K-$100K) vs managed payroll at $25-$45 PEPM. Real numbers and ROI.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/home-services/home-services-payroll-cost' },
  openGraph: {
    title: 'Home Services Payroll Costs, In-House vs Managed | BEG',
    description: 'How much does payroll cost for a home services company? Compare in-house payroll specialist vs managed payroll at $25-$45 PEPM with real numbers.',
    url: 'https://www.beghr.com/blog/payroll/home-services/home-services-payroll-cost',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Home Services Payroll Costs, In-House vs Managed | BEG', description: 'Real cost comparison of in-house vs managed payroll for home services companies.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the average cost to process payroll in-house for a 25-person home services company?',
    answer: 'For a 25-person home services company, in-house payroll typically requires a part-time bookkeeper or office administrator who handles payroll as part of a broader role. This person earns $45,000 to $65,000 per year with benefits totaling $55,000 to $80,000 in employment cost. However, unless this person has payroll compliance expertise specifically, there is significant risk of errors in areas like flat-rate overtime, drive time compensability, and multi-state registration. Payroll software adds $5,000 to $15,000 per year. Total in-house cost: $60,000 to $95,000 per year. Managed payroll for 25 employees at $25-$45 PEPM: $7,500 to $13,500 per year.',
  },
  {
    question: 'Are there per-run fees with managed payroll?',
    answer: 'BEG managed payroll has no per-run fees. The $25-$45 PEPM rate is all-inclusive regardless of how often payroll is processed. Companies that run weekly payroll during peak season and bi-weekly during the offseason pay the same monthly rate. There are no additional charges for direct deposit, ACH transfers, tax filings, or year-end W-2 production.',
  },
  {
    question: 'What is the breakeven point where in-house payroll becomes cost-competitive with managed?',
    answer: 'For home services companies, managed payroll is almost always more cost-effective at sizes below 100 employees. At 100 employees, managed payroll at $25-$45 PEPM costs $30,000 to $54,000 per year. In-house at this size would require a dedicated payroll specialist at $60,000 to $85,000 in total employment cost plus software. The managed cost advantage grows when compliance risk exposure is factored in. Above 200 employees, the cost curves begin to converge, but compliance experience and operational continuity still favor managed payroll for most home services companies.',
  },
  {
    question: 'What software costs are included in BEG managed payroll?',
    answer: 'All payroll processing software, tax filing infrastructure, direct deposit processing, and year-end W-2 production software are included in BEG\'s per-employee monthly fee. Clients access their payroll data and reports through a client portal. There are no separate software subscription costs. Companies that were previously paying $300-$800 per month for payroll software subscriptions typically eliminate that cost entirely when switching to BEG managed payroll.',
  },
  {
    question: 'How does seasonal headcount affect managed payroll cost?',
    answer: 'BEG managed payroll pricing adjusts with active employee count each month. During peak season with 30 active employees, you pay for 30. During the offseason with 18 active employees, you pay for 18. There is no minimum headcount requirement and no penalty for seasonal fluctuation. This makes managed payroll particularly economical for home services companies that staff up significantly for peak periods and scale back in slower months.',
  },
  {
    question: 'What is the cost of a payroll compliance failure for a home services company?',
    answer: 'DOL investigations for overtime violations typically assess back wages for up to two or three years for affected employees. For a 20-person HVAC company where overtime was consistently miscalculated, two years of back wages at $50-$150 per employee per week could reach $50,000 to $150,000 plus liquidated damages (an additional equal amount in many cases). Add attorney fees, DOL investigation costs, and the disruption of responding to an investigation during peak season, and the total cost of a compliance failure easily exceeds the lifetime cost of managed payroll for most companies.',
  },
];

export default function HomeServicesPayrollCostPage() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>Estimate your managed payroll cost</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Enter your headcount and current spend to see what fully managed payroll would cost at $25 to $45 PEPM.</p>
          <a href="/services/managed-payroll/cost-calculator" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Open the Cost Calculator &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Home Services Payroll Costs | In-House vs Managed | BEG", "datePublished": "2026-06-28", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/home-services/home-services-payroll-cost"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Management · Home Services</p>
              <h1>How Much Does It Cost to Run Payroll for a Home Services Company?</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> June 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Home services company owners frequently underestimate what payroll actually costs. They think of it as the monthly software fee or the hour their office manager spends running payroll each week. The real cost includes the person's salary and benefits, the software, the time spent on quarterly and annual tax filings, the compliance risk of getting flat-rate overtime wrong, and the cost of fixing errors when they surface. Getting a clear picture of the total cost is the starting point for deciding whether in-house or managed payroll makes more financial sense.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The True In-House Payroll Cost for Home Services Companies</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Most home services companies with fewer than 30 employees do not have a dedicated payroll specialist. Payroll is handled by an office manager, bookkeeper, or administrative employee as part of a broader role. The payroll portion of their job is rarely accounted for separately, but it has a real cost.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          An office manager earning $50,000 per year who spends 25% of their time on payroll contributes $12,500 in salary cost toward the payroll function, plus a proportional share of benefits. Add payroll software at $3,000 to $10,000 per year, and the in-house cost for a small home services company reaches $15,000 to $25,000 per year for what appears to be a simple payroll operation.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Larger home services companies with 30-80 employees typically employ a part-time or full-time payroll coordinator. A dedicated payroll coordinator with home services experience earns $45,000 to $65,000 in base salary, plus benefits at $10,000 to $20,000 per year. Total employment cost: $55,000 to $85,000, plus software.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Managed Payroll Cost by Company Size</h2>

        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Company Size</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>BEG Managed Cost/Year</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>In-House Estimate/Year</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Annual Savings</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['10 employees', '$3,000 - $5,400', '$15,000 - $22,000', '$10,000 - $17,000'],
                ['25 employees', '$7,500 - $13,500', '$20,000 - $30,000', '$12,500 - $17,000'],
                ['50 employees', '$15,000 - $27,000', '$60,000 - $90,000', '$33,000 - $63,000'],
                ['80 employees', '$24,000 - $43,200', '$70,000 - $100,000', '$26,800 - $56,000'],
              ].map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                  {row.map((cell, j) => (
                    <td key={j} style={{ padding: '10px 14px', borderBottom: '1px solid #eee', color: j === 3 ? '#006600' : 'inherit', fontWeight: j === 3 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Hidden Costs In-House Payroll Misses</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The comparison above understates the in-house disadvantage because it does not capture compliance failure costs. For home services specifically, the most common failure modes are:
        </p>
        <ul style={{ lineHeight: '1.8', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
          <li>Flat-rate overtime miscalculation. A technician who is owed overtime on the weighted average regular rate but receives overtime on only the base rate is systematically underpaid every overtime week. Two years of back wages for 20 technicians is a significant liability.</li>
          <li>Drive time not compensated. Between-job drive time that is not included in weekly hours causes systematic overtime underpayment for technicians who travel between multiple calls daily.</li>
          <li>Multi-state registration failures. Companies that send crews to other states without registering face back state income tax, SUI, and penalties in each state.</li>
        </ul>

        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          <Link href="/services/managed-payroll/home-services" style={{ color: '#ECAC60' }}>BEG Managed Payroll</Link> handles all of these compliance areas as part of the base service, eliminating the hidden liability that accumulates when in-house payroll staff lack specific expertise in home services compliance.
        </p>

        <div style={{ background: '#f5f0e8', border: '2px solid #ECAC60', borderRadius: '8px', padding: '2rem', marginBottom: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>See the Cost for Your Company</h3>
          <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
            BEG manages home services payroll at $25-$45 PEPM, all-inclusive. Book a 15-minute call to get a cost comparison for your current employee count.
          </p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: i < faqs.length - 1 ? '1px solid #eee' : 'none' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{faq.question}</h3>
              <p style={{ lineHeight: '1.7', color: '#444' }}>{faq.answer}</p>
            </div>
          ))}
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } }))
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'How Much Does It Cost to Run Payroll for a Home Services Company?',
        author: { '@type': 'Person', name: 'Anthony Moretti' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        url: 'https://www.beghr.com/blog/payroll/home-services/home-services-payroll-cost',
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Home Services', item: 'https://www.beghr.com/blog/payroll/home-services' },
          { '@type': 'ListItem', position: 5, name: 'Home Services Payroll Cost', item: 'https://www.beghr.com/blog/payroll/home-services/home-services-payroll-cost' },
        ]
      }) }} />
    </article>
  );
}
