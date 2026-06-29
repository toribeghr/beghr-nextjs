import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compensatory Time (Comp Time) | Payroll Glossary | BEG',
  description: 'Learn how FLSA comp time works, why private employers cannot legally use it instead of overtime pay, and what options private employers do have.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/comp-time' },
  openGraph: {
    title: 'Compensatory Time (Comp Time) | Payroll Glossary | BEG',
    description: 'Learn how FLSA comp time works, why private employers cannot legally use it instead of overtime pay, and what options private employers do have.',
    url: 'https://www.beghr.com/resources/payroll-glossary/comp-time',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compensatory Time (Comp Time) | Payroll Glossary | BEG',
    description: 'Learn how FLSA comp time works, why private employers cannot legally use it instead of overtime pay, and what options private employers do have.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Can a private employer offer comp time with employee consent?", "a": "No. The FLSA does not allow private sector employers to substitute comp time for overtime cash pay, even if the employee agrees in writing. Employee consent does not override the FLSA overtime requirement."}, {"q": "Can I adjust an employee's schedule to avoid overtime within the same workweek?", "a": "Yes. If an employee works long hours early in the workweek, you can reduce their hours later in that same workweek so total hours stay at or below 40. The adjustment must happen within the defined workweek, not carried to the next week."}, {"q": "How does comp time work for government employees?", "a": "State and local government employers may provide comp time at 1.5 hours off per overtime hour worked. Employees can accrue up to 480 hours for public safety roles (240 for most others) and must be permitted to use accumulated comp time within a reasonable period upon request."}];

export default function CompTimePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Compensatory Time (Comp Time)?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Time off given to employees in lieu of overtime pay, earned at 1.5 hours of leave for each overtime hour worked. Lawful for state and local government employees under the FLSA but prohibited for private sector employees.</p>
        </div>

        <h2>Why comp time matters for employers</h2>
        <p>Compensatory time off in lieu of overtime pay is a widely misunderstood area of payroll law. Many private employers assume they can give employees time off instead of cash for overtime hours, often on a one-to-one basis. This is incorrect under the FLSA. The FLSA permits comp time arrangements only for state and local government employers. A public safety employee of a state or local government who works overtime may accrue comp time at 1.5 hours off per overtime hour, up to a cap of 480 hours accrued (240 hours for other government employees). The employee must be able to use that comp time within a reasonable period if the use does not unduly disrupt agency operations. For private sector employers, the FLSA requires overtime to be paid in cash in the pay period in which it was earned. An employer cannot tell a non-exempt employee who worked 45 hours this week to take 5 hours off next week instead of paying 5 hours of overtime. Even with employee agreement or a written policy, this arrangement violates the FLSA and exposes the employer to back-pay liability, liquidated damages, and penalties. What private employers can legally do is adjust schedules within the same workweek: if an employee works 10 hours on Monday and the employer reduces hours later in that same workweek so total hours do not exceed 40, no overtime is owed. The schedule flexibility must operate within the defined workweek, not carry over to the following week.</p>

        <h2>How BEG handles Compensatory Time (Comp Time) for clients</h2>
        <p>BEG Managed Payroll calculates and pays overtime in the pay period it is earned, which is the only FLSA-compliant approach for private sector employers. If your current payroll practice involves banking overtime and paying it as time off, BEG can help you correct the practice before it becomes a wage-and-hour claim. This compliance protection is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can a private employer offer comp time with employee consent?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. The FLSA does not allow private sector employers to substitute comp time for overtime cash pay, even if the employee agrees in writing. Employee consent does not override the FLSA overtime requirement.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can I adjust an employee's schedule to avoid overtime within the same workweek?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes. If an employee works long hours early in the workweek, you can reduce their hours later in that same workweek so total hours stay at or below 40. The adjustment must happen within the defined workweek, not carried to the next week.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>How does comp time work for government employees?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>State and local government employers may provide comp time at 1.5 hours off per overtime hour worked. Employees can accrue up to 480 hours for public safety roles (240 for most others) and must be permitted to use accumulated comp time within a reasonable period upon request.</p>
        </div>

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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/comp-time', url: 'https://www.beghr.com/resources/payroll-glossary/comp-time', name: 'Compensatory Time (Comp Time) | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Compensatory Time (Comp Time)', description: 'Learn how FLSA comp time works, why private employers cannot legally use it instead of overtime pay, and what options private employers do have.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Compensatory Time (Comp Time)', item: 'https://www.beghr.com/resources/payroll-glossary/comp-time' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
