import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dealer Commission Payroll | How to Process Draw & Clawback | BEG',
  description: 'How to process draw-against-commission pay, F&I chargebacks, and flat-rate compensation in auto dealership payroll -- and how to avoid the most common.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/auto-dealership/dealer-commission-payroll' },
  openGraph: {
    title: 'Dealer Commission Payroll | How to Process Draw & Clawback | BEG',
    description: 'How to process draw-against-commission pay, F&I chargebacks, and flat-rate compensation in auto dealership payroll -- and how to avoid the most common co...',
    url: 'https://beghr.com/blog/payroll/auto-dealership/dealer-commission-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Dealer Commission Payroll | How to Process Draw & Clawback | BEG', description: 'How to process draw-against-commission pay, F&I chargebacks, and flat-rate compensation in auto dealership payroll -- and how to avoid the most common co...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'Can I deduct a negative draw balance from a salesperson\'s future commissions?',
    a: 'It depends on state law. Some states permit draw recovery from future earnings; others treat the draw as guaranteed wages that cannot be recouped. Before implementing any draw recovery practice, confirm the rules in your state. In states that prohibit recovery, you absorb the draw shortfall as a business expense.',
  },
  {
    q: 'Are F&I chargebacks deductible from a finance manager\'s paycheck?',
    a: 'This is highly state-specific. Most states that permit wage deductions require the employee\'s written consent, and some states prohibit deductions that reduce pay below minimum wage. Even where chargebacks are permissible, deducting them in the same paycheck where the deal was funded creates timing issues. Most dealers track chargebacks and net them against future commissions rather than creating a negative check.',
  },
  {
    q: 'Do auto dealership salespeople qualify for the FLSA retail sales exemption from overtime?',
    a: 'Dealership salespeople who are primarily engaged in making sales to retail customers and who regularly earn more than 1.5x the minimum wage, with more than half their compensation from commissions, may qualify for the FLSA retail establishment overtime exemption. This is a specific exemption with specific conditions. Service advisors were the subject of Supreme Court litigation (Encino Motorcars v. Navarro) and the Court held they are exempt. Consult your payroll or legal advisor to evaluate your specific roles.',
  },
  {
    q: 'How are commission draws reported on a W-2?',
    a: 'Commission draws and earned commissions paid through payroll are all reported as W-2 wages in Box 1 -- there is no separate box for commission income. Total wages reported on the W-2 should match the cumulative gross pay processed through payroll for the year.',
  },
];

export default function DealerCommissionPayrollPage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Dealer Commission Payroll | How to Process Draw & Clawback | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com/blog/payroll/auto-dealership/dealer-commission-payroll"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Auto Dealerships</p>
              <h1>Auto Dealership Commission and Draw Payroll: How to Process It Correctly</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Draw-against-commission, flat-rate mechanics, F&I chargebacks, and floorplan bonuses all require specific payroll treatment. Here is how each works -- and where most dealerships get it wrong.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Dealerships employ multiple pay structures across different departments -- and almost none of them process cleanly in a standard payroll system without configuration. Sales staff on draw-plus-commission, F&I managers with chargeback provisions, flat-rate technicians with minimum wage floors, and fixed-salary office staff all live in the same payroll run. Each has its own compliance requirements.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Draw Against Commission</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          The draw is a guaranteed weekly or bi-weekly advance against future commissions. Most dealerships pay salespeople a draw of $500 to $1,500 per pay period. When commissions are calculated (typically monthly), the draw advances are netted against earned commissions. If earned commissions exceed draws, the salesperson receives the difference. If draws exceed commissions, the salesperson has a negative balance.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          In payroll, the draw is processed as wages and subject to all withholding -- federal and state income tax, Social Security, Medicare. When commissions are paid and netted against the draw, only the net commission above the draw is processed as additional wages. The total annual W-2 reflects all draws plus net commissions actually paid.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The key compliance question is what happens when a salesperson's cumulative draw exceeds their commissions at separation. Whether that balance is recoverable depends on your state's wage deduction laws -- see the FAQ below.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>F&I Chargebacks</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Finance and insurance managers earn income from products sold on each deal. When a customer cancels a product (extended warranty, GAP coverage, credit insurance) during the chargeback period, the dealer is obligated to return the premium -- and dealers typically pass that chargeback back to the F&I manager.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The most reliable way to handle chargebacks in payroll is to track them separately and net them against future commissions rather than creating negative pay. Attempting to deduct chargebacks directly from a paycheck creates wage deduction compliance risk in many states and can produce paychecks that fall below minimum wage -- which is never permissible.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Flat-Rate Mechanics and the Minimum Wage Floor</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Service technicians typically earn a flat rate per book hour -- regardless of actual time. When a technician has a slow week with few flat hours, their total pay can fall below minimum wage for hours actually worked. FLSA requires that you make up the difference.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          In payroll, this requires tracking both flat-rate pay and actual hours worked. At the end of each pay period, compare: flat-rate earnings / actual hours worked. If that figure falls below the applicable minimum wage rate, you must pay a minimum wage supplement for the difference. Failing to track actual hours for flat-rate techs is the most common compliance gap in service department payroll.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{q}</strong>
              <p style={{ margin: 0, lineHeight: '1.65', color: '#444' }}>{a}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Get dealership payroll done right</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages commission, draw, and flat-rate payroll for auto dealerships. 15-minute call to discuss your setup.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/auto-dealership">Managed Payroll for Auto Dealerships</Link> -- full service details</li>
            <li><Link href="/blog/payroll/auto-dealership/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Dealerships</Link> -- cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Dealer Commission Payroll', item: 'https://beghr.com/blog/payroll/auto-dealership/dealer-commission-payroll' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}