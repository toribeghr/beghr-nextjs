import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regular Rate of Pay (Overtime) | Payroll Glossary | BEG',
  description: 'The hourly rate used to calculate overtime, including all compensation except specific FLSA exclusions such as discretionary bonuses and vacation pay.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/overtime-regular-rate' },
  openGraph: { title: 'Regular Rate of Pay (Overtime) | Payroll Glossary | BEG', description: 'The hourly rate used to calculate overtime, including all compensation except specific FLSA exclusions such as discretionary bonuses and vacation pay.', url: 'https://www.beghr.com/resources/payroll-glossary/overtime-regular-rate', siteName: 'Business Executive Group', images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Regular Rate of Pay (Overtime) | Payroll Glossary | BEG', description: 'The hourly rate used to calculate overtime, including all compensation except specific FLSA exclusions such as discretionary bonuses and vacation pay.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: "Does a non-discretionary bonus affect overtime pay?", a: "Yes. Non-discretionary bonuses must be included in the regular rate of pay and retroactively increase overtime premiums for the period the bonus covers. Discretionary bonuses are excluded." },
  { q: "How is the regular rate calculated for a salaried non-exempt employee?", a: "Divide the weekly salary by total hours worked that week to get the regular rate. Overtime premium is then 0.5 times that rate times overtime hours (since the salary already covers straight-time for all hours)." },
  { q: "What makes a bonus discretionary vs. non-discretionary?", a: "A bonus is discretionary if both the decision to pay it and the amount are determined solely by the employer at or after the end of the period, with no prior promise. Bonuses announced in advance or tied to performance metrics are non-discretionary." },
];

export default function OvertimeRegularRatePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Regular Rate of Pay (Overtime)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>
        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>The regular rate of pay is the weighted average hourly rate used to calculate overtime, including most forms of compensation but excluding specific FLSA-permitted items.</p>
        </div>
        <h2>Why the regular rate matters for employers</h2>
        <p>The FLSA requires overtime at 1.5 times the regular rate - not simply 1.5 times the base hourly rate. The regular rate includes virtually all compensation paid to an employee for hours worked in a workweek, with specific statutory exclusions.</p>
        <p>For hourly employees working at a single rate with no other compensation, the regular rate equals the hourly rate. But when employees receive additional forms of pay, those amounts must be included in the regular rate calculation. Common inclusions: non-discretionary bonuses (productivity, attendance, safety), shift differentials, piece-rate earnings, on-call differentials, and commissions.</p>
        <p>FLSA-permitted exclusions from the regular rate include: gifts, vacation and holiday pay, overtime premium pay itself, discretionary bonuses (decided at the employer's sole discretion after the period ends), reimbursement for actual business expenses, and contributions to bona fide retirement, health, or life insurance plans.</p>
        <p>The regular rate for a workweek is calculated by dividing total compensation (minus excluded amounts) by total hours worked. The overtime premium due is then half the regular rate times overtime hours (the other half being the straight-time rate already paid for those hours).</p>
        <p>The 2020 DOL rule clarified the treatment of several compensation types and provided a safe harbor for certain wellness programs, gym memberships, and other benefit payments. Employers who fail to include non-discretionary bonuses in the regular rate systematically underpay overtime - a common and expensive compliance failure.</p>
        <h2>How BEG calculates regular rate correctly for clients</h2>
        <p>BEG Managed Payroll calculates weighted regular rates incorporating all required compensation components, ensuring correct overtime amounts as part of fully managed payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>
        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        {faqs.map((faq, i) => (
          <div key={i} style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>{faq.q}</h3>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>{faq.a}</p>
          </div>
        ))}
        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want payroll fully managed?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>BEG handles everything at $25-$45 PEPM. Book a 15-minute discovery call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" style={{ background: 'linear-gradient(135deg,#ECAC60,#d4924a)', color: '#000', fontWeight: '700', padding: '0.85rem 2rem', borderRadius: '6px', textDecoration: 'none', display: 'inline-block' }}>Book a Free Discovery Call</a>
        </div>
        <p style={{ marginTop: '2rem' }}><Link href="/resources/payroll-glossary" style={{ color: '#ECAC60' }}>Back to Payroll Glossary</Link></p>
        <div style={{ borderTop: '1px solid #e5e5e5', marginTop: '3rem', paddingTop: '1.5rem' }}>
          <p style={{ margin: '0 0 0.35rem', fontWeight: '700' }}>About the author</p>
          <p style={{ margin: '0 0 0.5rem', color: '#444', fontSize: '0.9rem', lineHeight: '1.7' }}>Anthony Moretti is VP of Sales at Business Executive Group, where he builds BEG&apos;s managed payroll and HR service verticals for employers across Dallas-Fort Worth and nationwide. He writes the BEG Payroll Glossary to give employers plain-English answers on payroll and compliance.</p>
          <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>Connect with Anthony on LinkedIn &rarr;</a>
        </div>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/overtime-regular-rate', url: 'https://www.beghr.com/resources/payroll-glossary/overtime-regular-rate', name: 'Regular Rate of Pay (Overtime) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Regular Rate of Pay (Overtime)', description: 'The hourly rate used to calculate overtime, including all compensation except specific FLSA exclusions such as discretionary bonuses and vacation pay.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Regular Rate of Pay (Overtime)', item: 'https://www.beghr.com/resources/payroll-glossary/overtime-regular-rate' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
