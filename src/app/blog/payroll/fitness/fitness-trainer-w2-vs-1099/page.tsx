import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fitness Trainer W-2 vs. 1099 | IRS Classification Rules | BEG',
  description: 'How to correctly classify fitness trainers as employees or independent contractors — the IRS factors, state law differences, and what happens if a',
  alternates: { canonical: 'https://beghr.com/blog/payroll/fitness/fitness-trainer-w2-vs-1099' },
  openGraph: {
    title: 'Fitness Trainer W-2 vs. 1099 | IRS Classification Rules | BEG',
    description: 'How to correctly classify fitness trainers as employees or independent contractors — the IRS factors, state law differences, and what happens if a studi...',
    url: 'https://beghr.com/blog/payroll/fitness/fitness-trainer-w2-vs-1099',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Fitness Trainer W-2 vs. 1099 | IRS Classification Rules | BEG', description: 'How to correctly classify fitness trainers as employees or independent contractors — the IRS factors, state law differences, and what happens if a studi...', images: ['https://beghr.com/assets/og-image.png'] },

};

const faqs = [
  {
    q: 'Can a personal trainer be both a W-2 employee and a 1099 contractor for the same gym?',
    a: 'It is possible but unusual and complicated. If a trainer teaches group classes (gym-scheduled, gym-branded, gym-controlled) and also runs their own personal training clients from the gym\'s space under a rental arrangement, the two roles could theoretically have different treatment. In practice, mixing the statuses for the same person creates more audit risk than it resolves. Consult a tax advisor before attempting a split classification.',
  },
  {
    q: 'Does having a trainer sign an independent contractor agreement make them a 1099?',
    a: 'No. The IRS does not recognize the label an employer and worker attach to their relationship — it applies its own economic reality and behavioral control tests. A trainer who works a gym-set schedule, teaches the gym\'s branded classes, uses the gym\'s equipment, and is supervised by the gym\'s management is likely an employee regardless of what the contract says.',
  },
  {
    q: 'What states have stricter tests for contractor classification than the IRS?',
    a: 'California, Massachusetts, New Jersey, and Illinois (among others) use an "ABC test" for classifying workers, which is significantly harder to satisfy than the IRS common law test. Under the ABC test, a worker is an employee unless: they are free from the company\'s direction and control, their work is outside the usual course of the company\'s business, and they are customarily engaged in an independently established trade. Under this test, most gym trainers who teach classes would be employees.',
  },
  {
    q: 'What is the cost of misclassifying a fitness trainer as a 1099 contractor?',
    a: 'If the IRS or a state labor agency reclassifies trainers as employees, the business is liable for: back employer FICA taxes on all wages paid to misclassified workers (typically two to three years), failure-to-withhold penalties, potential employment tax interest, state income tax withholding liability, and state unemployment insurance. Depending on the number of trainers and the time period, this can be a material liability for a studio or gym.',
  },
];

export default function FitnessTrainerClassificationPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Fitness</p>
              <h1>Fitness Trainer W-2 vs. 1099: IRS Classification Rules for Studios and Gyms</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Fitness studios and gyms frequently misclassify trainers as independent contractors. The IRS looks at behavioral control, financial control, and the type of relationship — not the paperwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Personal trainers are one of the most commonly misclassified worker categories in the fitness industry. Studios issue 1099s to trainers who work fixed schedules, teach the studio's branded classes, and have no real independence in how they operate — and hope no one looks closely. The IRS does look closely, particularly for businesses in industries with high contractor usage.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The IRS Classification Test: Behavioral Control</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          The most important IRS factor is whether the business controls how the worker does their job — not just the outcome. For fitness trainers, the behavioral control questions are:
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Factor</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Points Toward Employee</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Points Toward Contractor</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Schedule control', 'Studio assigns class times, client appointments', 'Trainer sets own hours, rents space by the hour'],
                ['Client ownership', 'Studio owns the client relationship', 'Trainer brings their own clients'],
                ['Equipment', 'Studio provides all equipment', 'Trainer uses own equipment or pays to rent studio equipment'],
                ['Training/instruction', 'Studio trains trainers on its methods', 'Trainer sets their own methodology independently'],
                ['Exclusivity', 'Trainer works only at this studio', 'Trainer works at multiple gyms or studios'],
                ['Branding', 'Trainer teaches under studio brand', 'Trainer has their own brand and business'],
                ['Cancellation', 'Either party can end at will', 'Trainer has contracts with clients, not just the studio'],
              ].map(([factor, emp, cont], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 500 }}>{factor}</td>
                  <td style={{ padding: '10px 14px', color: '#c0392b', fontSize: '0.85rem' }}>{emp}</td>
                  <td style={{ padding: '10px 14px', color: '#27ae60', fontSize: '0.85rem' }}>{cont}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Who Is Almost Certainly an Employee</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
          {[
            'Group fitness instructors who teach the studio\'s branded classes on the studio\'s schedule',
            'Personal trainers who only work with clients booked through the studio\'s system',
            'Front desk staff and studio assistants regardless of how they are paid',
            'Trainers who use the studio\'s assessment protocols, class formats, and branding',
            'Trainers required to attend studio meetings, training sessions, or mandatory events',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', background: '#c0392b', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
              <p style={{ margin: 0, lineHeight: '1.6', color: '#444' }}>{item}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Who May Legitimately Be a Contractor</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.5rem' }}>
          {[
            'Personal trainers who rent studio space by the hour, bring their own clients, set their own rates',
            'Yoga or pilates instructors who teach the same style at multiple studios independently',
            'Specialty workshop leaders brought in for one-time or infrequent events',
            'Online coaches who use the studio space incidentally but have an independent coaching business',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', background: '#27ae60', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
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
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Fix classification now before an audit does it for you</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages payroll for fitness studios including trainer classification review, per-class pay processing, and year-end W-2s. 15-minute call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/fitness">Managed Payroll for Fitness Studios</Link> — full service details</li>
            <li><Link href="/blog/payroll/fitness/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Fitness Studios</Link> — cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Fitness Trainer Classification', item: 'https://beghr.com/blog/payroll/fitness/fitness-trainer-w2-vs-1099' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}
