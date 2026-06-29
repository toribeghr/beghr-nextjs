import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Earned Sick Leave | Payroll Glossary | BEG',
  description: 'Learn how earned sick leave laws work, which states require it, typical accrual rules, and what employers must do to comply.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/earned-sick-leave' },
  openGraph: {
    title: 'Earned Sick Leave | Payroll Glossary | BEG',
    description: 'Learn how earned sick leave laws work, which states require it, typical accrual rules, and what employers must do to comply.',
    url: 'https://www.beghr.com/resources/payroll-glossary/earned-sick-leave',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Earned Sick Leave | Payroll Glossary | BEG',
    description: 'Learn how earned sick leave laws work, which states require it, typical accrual rules, and what employers must do to comply.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Which states currently require paid sick leave?", "a": "As of 2025, states with mandatory paid sick leave include California, New York, New Jersey, Massachusetts, Washington, Oregon, Colorado, Connecticut, Maryland, Michigan, Illinois, Arizona, Nevada, Rhode Island, Vermont, and Maine, among others. The list grows regularly as new legislation passes."}, {"q": "Can an employer's existing PTO policy satisfy a sick leave mandate?", "a": "Yes, if the PTO policy is at least as generous as the mandated sick leave in terms of accrual rate, cap, permitted uses, and carryover rules. If your PTO policy is more restrictive in any of these dimensions than what the law requires, you must adjust it or track sick leave separately."}, {"q": "Do part-time and temporary employees earn sick leave?", "a": "Generally yes. Most state sick leave laws cover all employees regardless of full-time or part-time status, and some cover temporary and seasonal workers as well. Coverage thresholds and accrual rules vary, so check the specific law for each state where you have employees."}];

export default function EarnedSickLeavePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Earned Sick Leave?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>Employer-provided paid sick time that employees accrue based on hours worked, mandated by state or local law in more than 15 states and dozens of cities, with varying accrual rates, caps, and permitted uses.</p>
        </div>

        <h2>Why earned sick leave matters for employers</h2>
        <p>No federal law requires private employers to provide paid sick leave, but a rapidly growing number of states and localities do. As of 2025, states with mandatory paid sick leave laws include California, New York, New Jersey, Massachusetts, Washington, Oregon, Colorado, Connecticut, Maryland, Michigan, Illinois, Arizona, Nevada, Rhode Island, Vermont, Maine, and others. Many major cities in states without statewide laws have enacted their own mandates. Accrual rates vary but the most common is one hour of paid sick leave for every 30 hours worked. Accrual typically begins on the first day of employment but usage may be restricted until after a waiting period such as 90 days. Annual accrual caps commonly range from 40 to 56 hours. Some states allow unused sick leave to carry over to the following year up to a cap; others allow employers to front-load the full annual allotment on January 1 to avoid tracking carryover. Permitted uses generally include the employee's own illness, preventive care, care for a sick family member, and in some states, absences related to domestic violence, sexual assault, or stalking. Employers must provide notice of the sick leave policy, often through a workplace poster and written policy. Tracking accrual accurately in the payroll system is essential because employees or regulators can request accrual balance records. Multi-state employers face the additional complexity of applying different laws for each state's employees, sometimes with different rates, caps, and qualifying uses.</p>

        <h2>How BEG handles Earned Sick Leave for clients</h2>
        <p>BEG Managed Payroll tracks earned sick leave accrual for each employee based on the applicable state or local law, applying the correct rate, cap, and carryover rules. For multi-state clients, BEG applies each state's rules independently. Sick leave accrual tracking and reporting is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Which states currently require paid sick leave?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>As of 2025, states with mandatory paid sick leave include California, New York, New Jersey, Massachusetts, Washington, Oregon, Colorado, Connecticut, Maryland, Michigan, Illinois, Arizona, Nevada, Rhode Island, Vermont, and Maine, among others. The list grows regularly as new legislation passes.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can an employer's existing PTO policy satisfy a sick leave mandate?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Yes, if the PTO policy is at least as generous as the mandated sick leave in terms of accrual rate, cap, permitted uses, and carryover rules. If your PTO policy is more restrictive in any of these dimensions than what the law requires, you must adjust it or track sick leave separately.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Do part-time and temporary employees earn sick leave?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Generally yes. Most state sick leave laws cover all employees regardless of full-time or part-time status, and some cover temporary and seasonal workers as well. Coverage thresholds and accrual rules vary, so check the specific law for each state where you have employees.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/earned-sick-leave', url: 'https://www.beghr.com/resources/payroll-glossary/earned-sick-leave', name: 'Earned Sick Leave | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Earned Sick Leave', description: 'Learn how earned sick leave laws work, which states require it, typical accrual rules, and what employers must do to comply.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Earned Sick Leave', item: 'https://www.beghr.com/resources/payroll-glossary/earned-sick-leave' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
