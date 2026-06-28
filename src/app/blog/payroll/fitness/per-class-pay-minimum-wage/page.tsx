import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Per-Class Pay & Minimum Wage | Fitness Studio Compliance | BEG',
  description: 'How to calculate minimum wage compliance for fitness instructors paid per class -- what counts as compensable time, how to calculate the floor, and what.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/fitness/per-class-pay-minimum-wage' },
  openGraph: {
    title: 'Per-Class Pay & Minimum Wage | Fitness Studio Compliance | BEG',
    description: 'How to calculate minimum wage compliance for fitness instructors paid per class -- what counts as compensable time, how to calculate the floor, and what ...',
    url: 'https://beghr.com/blog/payroll/fitness/per-class-pay-minimum-wage',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Per-Class Pay & Minimum Wage | Fitness Studio Compliance | BEG', description: 'How to calculate minimum wage compliance for fitness instructors paid per class -- what counts as compensable time, how to calculate the floor, and what ...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'Do instructors have to be paid for time spent preparing for a class?',
    a: 'Preparation time is compensable if it is integral and indispensable to the principal activity -- meaning the instructor cannot perform the class without it, and the preparation is primarily for the employer\'s benefit. A 5-minute equipment setup between classes is generally compensable. A 2-hour personal practice session an instructor chooses to do before their shift is generally not. The distinction often turns on whether the preparation is required by the employer.',
  },
  {
    q: 'What counts as a compensable "hour worked" for an instructor paid per class?',
    a: 'All time that is controlled by or required for the employer is compensable. This includes: the class itself, required meeting or check-in time before the class, mandatory post-class cleanup, and any other activities the employer requires. Time the instructor spends at the studio voluntarily or for personal reasons does not count.',
  },
  {
    q: 'Can a studio pay a lower rate for non-class time (setup, cleanup) than for class time?',
    a: 'Yes. Employers can pay different rates for different types of work, as long as each type of work is paid at least minimum wage. If an instructor earns $30 for a class and $10/hour for setup time, both rates are evaluated separately against the applicable minimum wage. There is no requirement that setup time be paid at the same rate as class time.',
  },
  {
    q: 'Do state minimum wages apply even if federal minimum wage is lower?',
    a: 'Yes. Where a state minimum wage is higher than the federal minimum of $7.25/hour, employers must pay the higher state rate. This matters significantly for fitness studios in California ($16.50/hour in 2025), Washington, New York, Colorado, and other high-minimum-wage states. Always use the higher of federal or state for compliance.',
  },
];

export default function PerClassPayMinimumWagePage() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Per-Class Pay & Minimum Wage | Fitness Studio Compliance | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://beghr.com/blog/payroll/fitness/per-class-pay-minimum-wage"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Fitness</p>
              <h1>Per-Class Pay and Minimum Wage: Payroll Compliance for Fitness Studios</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Fitness studios often pay instructors per class. When total per-class earnings divided by actual hours worked falls below minimum wage, the studio owes additional wages -- whether or not it tracks those hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Paying instructors per class is simple from a scheduling standpoint -- $25 for a 45-minute class, $40 for a 60-minute class, and so on. The problem is that "per class" pay triggers minimum wage compliance analysis: the total compensation paid divided by total hours worked must meet or exceed the applicable minimum wage. Most studios do not track this, which means they do not know whether they are in compliance.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>How to Calculate the Minimum Wage Floor for Per-Class Instructors</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Here is the calculation process for each pay period:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2rem' }}>
          {[
            'Add up all per-class earnings for the pay period.',
            'Add up all compensable hours worked -- including class time, required setup/cleanup, and required meeting time.',
            'Divide total earnings by total hours. This is the effective hourly rate.',
            'Compare the effective hourly rate to the applicable minimum wage (state or federal, whichever is higher).',
            'If the effective rate is below minimum wage, calculate the shortfall (minimum wage × hours worked − per-class earnings) and add it to the paycheck as a minimum wage supplement.',
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '24px', height: '24px', background: '#000', borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ECAC60', fontSize: '0.75rem', fontWeight: 700 }}>{i + 1}</div>
              <p style={{ margin: 0, lineHeight: '1.6', color: '#444', paddingTop: '2px' }}>{step}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>A Worked Example</h2>
        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Item</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Classes taught this week', '6 classes × $25/class = $150'],
                ['Class minutes (6 × 60 min)', '360 minutes = 6.0 hours'],
                ['Required setup/cleanup (6 × 15 min)', '90 minutes = 1.5 hours'],
                ['Total compensable hours', '7.5 hours'],
                ['Effective hourly rate', '$150 ÷ 7.5 hours = $20.00/hr'],
                ['State minimum wage (California example)', '$16.50/hr'],
                ['Shortfall?', 'No -- $20.00 > $16.50 ✓'],
                ['Revised example: 6 classes × $18/class = $108', ''],
                ['Effective rate: $108 ÷ 7.5 hours = $14.40/hr', 'Below $16.50 -- shortfall: $1.65 × 7.5 = $12.38 owed'],
              ].map(([label, val], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '10px 14px', fontWeight: i === 7 ? 700 : 400 }}>{label}</td>
                  <td style={{ padding: '10px 14px', color: i === 8 ? '#c0392b' : '#444', fontWeight: i === 8 ? 700 : 400 }}>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Time That Must Be Tracked and Paid</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          For the calculation above to work, studios must track all compensable time -- not just class time. The most commonly missed time categories:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.5rem' }}>
          {[
            'Mandatory pre-class setup -- equipment arrangement, microphone testing, class planning',
            'Post-class cleanup -- resetting equipment, sanitizing, returning items to storage',
            'Required check-in time before the first class of the day',
            'Mandatory all-staff meetings or training sessions',
            'Time spent waiting between back-to-back classes if the studio requires the instructor to remain on premises',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', background: '#ECAC60', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
              <p style={{ margin: 0, lineHeight: '1.6', color: '#444' }}>{item}</p>
            </div>
          ))}
        </div>

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
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Stop calculating this manually every pay period</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages fitness studio payroll including per-class pay, minimum wage floor calculations, and year-end W-2s. 15-minute call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/fitness">Managed Payroll for Fitness Studios</Link> -- full service details</li>
            <li><Link href="/blog/payroll/fitness/fitness-trainer-w2-vs-1099">Fitness Trainer W-2 vs. 1099 Classification</Link> -- IRS rules</li>
            <li><Link href="/blog/payroll/fitness/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Fitness Studios</Link> -- cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Per-Class Pay Minimum Wage', item: 'https://beghr.com/blog/payroll/fitness/per-class-pay-minimum-wage' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}