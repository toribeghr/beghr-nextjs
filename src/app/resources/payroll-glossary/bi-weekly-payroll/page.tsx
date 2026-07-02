import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bi-Weekly Payroll | Payroll Glossary | BEG',
  description: 'Learn how bi-weekly payroll works, how it compares to semi-monthly, and what the 27-payroll-year means for salary calculations.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/bi-weekly-payroll' },
  openGraph: {
    title: 'Bi-Weekly Payroll | Payroll Glossary | BEG',
    description: 'Learn how bi-weekly payroll works, how it compares to semi-monthly, and what the 27-payroll-year means for salary calculations.',
    url: 'https://www.beghr.com/resources/payroll-glossary/bi-weekly-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bi-Weekly Payroll | Payroll Glossary | BEG',
    description: 'Learn how bi-weekly payroll works, how it compares to semi-monthly, and what the 27-payroll-year means for salary calculations.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "How do bi-weekly and semi-monthly payroll differ?", "a": "Bi-weekly pays every two weeks on a fixed day of the week, resulting in 26 pay periods (or 27 in rare years). Semi-monthly pays twice per month on fixed dates such as the 1st and 15th, resulting in exactly 24 pay periods every year regardless of calendar."}, {"q": "How do I calculate a salaried employee's bi-weekly pay?", "a": "Divide the annual salary by 26. For example, a $78,000 salary equals $3,000 per bi-weekly pay period. In a 27-paycheck year, divide by 27 to maintain the correct annual total."}, {"q": "Does bi-weekly payroll affect overtime calculations?", "a": "For hourly employees, bi-weekly payroll aligns cleanly with the FLSA because each pay period covers exactly two workweeks. Overtime is calculated separately for each workweek within the pay period and cannot be averaged across the two weeks."}];

export default function BiWeeklyPayrollPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Bi-Weekly Payroll?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>A pay schedule where employees are paid every two weeks on a set day, resulting in 26 pay periods per year and occasionally 27 in years when the calendar falls that way.</p>
        </div>

        <h2>Why bi-weekly payroll matters for employers</h2>
        <p>Bi-weekly payroll is the most common pay frequency in the United States. Employees are paid every two weeks on a fixed day, usually Friday. The resulting 26 pay periods mean employees receive two paychecks most months and three paychecks in two months each year. For hourly employees, bi-weekly payroll is straightforward: each pay period covers two complete workweeks, making overtime calculation clean because the FLSA workweek and the pay period are aligned. For salaried employees, bi-weekly payroll requires dividing the annual salary by 26 to get the per-period amount. The 27-paycheck year is an important planning item: approximately every 11 years, the calendar aligns so that a Friday bi-weekly pay date falls 27 times in the same calendar year. If salaried employees are paid a flat amount each pay period regardless, they receive one extra paycheck, increasing total labor cost by approximately 3.8%. Employers can handle this by paying 1/27 of annual salary in the 27-period year rather than 1/26, or by budgeting for the extra pay period in advance. Bi-weekly should not be confused with semi-monthly payroll, which runs twice per month on fixed dates (such as the 1st and 15th) for exactly 24 pay periods per year. The difference matters for benefit deductions: semi-monthly payroll allows equal deductions each period, while bi-weekly payroll requires adjusting benefit deductions in the two three-paycheck months or running them on every pay period.</p>

        <h2>How BEG handles Bi-Weekly Payroll for clients</h2>
        <p>BEG Managed Payroll supports bi-weekly payroll schedules and handles the 27-paycheck year correctly, including benefit deduction adjustments in three-paycheck months. BEG also ensures that overtime is calculated correctly across bi-weekly workweeks. Payroll schedule management is fully handled by BEG at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How do bi-weekly and semi-monthly payroll differ?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Bi-weekly pays every two weeks on a fixed day of the week, resulting in 26 pay periods (or 27 in rare years). Semi-monthly pays twice per month on fixed dates such as the 1st and 15th, resulting in exactly 24 pay periods every year regardless of calendar.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How do I calculate a salaried employee's bi-weekly pay?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Divide the annual salary by 26. For example, a $78,000 salary equals $3,000 per bi-weekly pay period. In a 27-paycheck year, divide by 27 to maintain the correct annual total.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does bi-weekly payroll affect overtime calculations?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>For hourly employees, bi-weekly payroll aligns cleanly with the FLSA because each pay period covers exactly two workweeks. Overtime is calculated separately for each workweek within the pay period and cannot be averaged across the two weeks.</p>
        </div>

        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want payroll fully managed?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>BEG handles everything at $25-$45 PEPM. Book a 15-minute discovery call.</p>
          <PricingCta service="managed-payroll" subline={false} />
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/bi-weekly-payroll', url: 'https://www.beghr.com/resources/payroll-glossary/bi-weekly-payroll', name: 'Bi-Weekly Payroll | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Bi-Weekly Payroll', description: 'Learn how bi-weekly payroll works, how it compares to semi-monthly, and what the 27-payroll-year means for salary calculations.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Bi-Weekly Payroll', item: 'https://www.beghr.com/resources/payroll-glossary/bi-weekly-payroll' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
