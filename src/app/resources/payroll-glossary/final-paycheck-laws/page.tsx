import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Final Paycheck Laws | Payroll Glossary | BEG',
  description: 'Learn state final paycheck laws, how deadlines differ for voluntary vs. involuntary termination, and what must be included in the final check.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/final-paycheck-laws' },
  openGraph: {
    title: 'Final Paycheck Laws | Payroll Glossary | BEG',
    description: 'Learn state final paycheck laws, how deadlines differ for voluntary vs. involuntary termination, and what must be included in the final check.',
    url: 'https://www.beghr.com/resources/payroll-glossary/final-paycheck-laws',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Final Paycheck Laws | Payroll Glossary | BEG',
    description: 'Learn state final paycheck laws, how deadlines differ for voluntary vs. involuntary termination, and what must be included in the final check.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Which states require same-day final paychecks for involuntary terminations?", "a": "California, Colorado, Hawaii, and a handful of others require the final paycheck to be issued immediately on the day of an involuntary termination. Some states require it by the end of the business day. Always verify current state law as these rules are updated periodically."}, {"q": "Can I withhold the final paycheck until the employee returns company equipment?", "a": "No. Withholding a final paycheck for any reason other than legally required deductions violates wage payment laws in virtually every state. You can pursue the value of unreturned property separately through civil claims, but not by delaying wages owed."}, {"q": "Does the final paycheck have to include accrued PTO?", "a": "It depends on state law. California, Colorado, and several other states treat accrued vacation and PTO as earned wages that must be paid out on termination. Other states allow employers to have use-it-or-lose-it policies. Check the specific rule for each state where you have employees."}];

export default function FinalPaycheckLawsPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is Final Paycheck Laws?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>State laws dictating when a terminated or resigned employee must receive their last paycheck, ranging from the same business day for involuntary terminations in some states to the next regular pay date in others.</p>
        </div>

        <h2>Why final paycheck laws matter for employers</h2>
        <p>Final paycheck timing is one of the most commonly violated wage and hour requirements because it varies significantly by state and the rules differ based on whether the employee was terminated involuntarily or resigned voluntarily. Federal law (the FLSA) only requires that the final paycheck be paid on the next regular payday, but most states impose earlier deadlines. Several states including California, Colorado, and Hawaii require the final paycheck to be issued immediately on the day of an involuntary termination. Other states such as Texas require it within six calendar days after the termination. For voluntary resignations, most states allow the employer until the next regular pay date, but some require payment within a set number of days after the last day worked. Late final paychecks expose employers to significant penalties. California, for example, assesses waiting time penalties equal to one day of wages for each day the final paycheck is late, up to 30 days. This means a late final paycheck for an employee earning $400 per day could result in $12,000 in penalties on top of the wages owed. Beyond timing, the final paycheck must include all wages earned through the last day of work, including the value of all hours worked, any accrued vacation or PTO that the state requires to be paid out on termination, and any commissions that have been earned and are calculable. What need not be included: future commissions that are not yet calculable, non-accrued sick leave in states without mandatory payout, and discretionary bonuses not yet awarded. Employers who try to withhold the final paycheck pending return of company property are violating wage payment laws in nearly every state.</p>

        <h2>How BEG handles Final Paycheck Laws for clients</h2>
        <p>BEG Managed Payroll tracks state-specific final pay deadlines and processes termination paychecks off-cycle as needed to meet the applicable deadline. BEG calculates accrued PTO payout where state law requires it and includes all earned wages. Final pay compliance is a standard part of BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Which states require same-day final paychecks for involuntary terminations?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>California, Colorado, Hawaii, and a handful of others require the final paycheck to be issued immediately on the day of an involuntary termination. Some states require it by the end of the business day. Always verify current state law as these rules are updated periodically.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can I withhold the final paycheck until the employee returns company equipment?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. Withholding a final paycheck for any reason other than legally required deductions violates wage payment laws in virtually every state. You can pursue the value of unreturned property separately through civil claims, but not by delaying wages owed.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does the final paycheck have to include accrued PTO?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>It depends on state law. California, Colorado, and several other states treat accrued vacation and PTO as earned wages that must be paid out on termination. Other states allow employers to have use-it-or-lose-it policies. Check the specific rule for each state where you have employees.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/final-paycheck-laws', url: 'https://www.beghr.com/resources/payroll-glossary/final-paycheck-laws', name: 'Final Paycheck Laws | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'Final Paycheck Laws', description: 'Learn state final paycheck laws, how deadlines differ for voluntary vs. involuntary termination, and what must be included in the final check.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'Final Paycheck Laws', item: 'https://www.beghr.com/resources/payroll-glossary/final-paycheck-laws' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
