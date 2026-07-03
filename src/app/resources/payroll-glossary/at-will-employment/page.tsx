import PricingCta from '@/components/pricing/PricingCta';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'At-Will Employment | Payroll Glossary | BEG',
  description: 'Understand at-will employment, what exceptions apply, and what at-will status means for payroll, final paychecks, and severance.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary/at-will-employment' },
  openGraph: {
    title: 'At-Will Employment | Payroll Glossary | BEG',
    description: 'Understand at-will employment, what exceptions apply, and what at-will status means for payroll, final paychecks, and severance.',
    url: 'https://www.beghr.com/resources/payroll-glossary/at-will-employment',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'At-Will Employment | Payroll Glossary | BEG',
    description: 'Understand at-will employment, what exceptions apply, and what at-will status means for payroll, final paychecks, and severance.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const faqs = [{"q": "Can an at-will employer fire someone without giving a reason?", "a": "Technically yes, but the reason cannot be an illegal one. If the termination is later challenged, an employer without a documented legitimate reason is in a weaker legal position. Documenting performance issues and policy violations before termination is always advisable."}, {"q": "Does an employee handbook create an implied contract that overrides at-will status?", "a": "It can, particularly if the handbook describes a specific termination process or lists protected categories. Most employers include a clear at-will disclaimer in their handbooks to prevent this. The disclaimer should be acknowledged in writing by each employee."}, {"q": "Does at-will employment affect when I have to issue the final paycheck?", "a": "No. At-will status does not change final paycheck timing. State law controls when the last paycheck must be issued, and some states require same-day payment on involuntary termination regardless of at-will status."}];

export default function AtWillEmploymentPage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll Glossary</p>
              <h1>What is At-Will Employment?</h1>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.6rem', marginBottom: 0 }}>By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '4px', padding: '1.25rem 1.5rem', marginBottom: '2rem' }}>
          <p style={{ margin: 0, fontWeight: '600', fontSize: '1.05rem' }}>An employment relationship in which either the employer or employee may terminate employment at any time, for any lawful reason, or for no reason at all, without advance notice.</p>
        </div>

        <h2>Why at-will employment matters for employers</h2>
        <p>At-will employment is the default rule in 49 states (Montana is the exception). It means that absent a contract, union agreement, or legal exception, either party can end the employment relationship at any time without liability. The employer does not need cause, and the employee does not need to give two weeks notice. In practice, at-will status does not mean unlimited termination authority. Four major exceptions limit at-will termination in every state. First, the public policy exception prohibits firing an employee for reasons that violate a clearly expressed public policy, such as terminating an employee for filing a workers compensation claim, serving on jury duty, or whistleblowing on illegal activity. Second, the implied contract exception can arise when an employer's handbook, policy, or manager statements create a reasonable expectation of continued employment. Third, the implied covenant of good faith and fair dealing prevents terminations motivated by bad faith in some states. Fourth, federal and state anti-discrimination laws prohibit termination based on protected characteristics including race, sex, age, disability, national origin, and religion. At-will status intersects directly with payroll through final paycheck laws: the speed at which you must pay the last paycheck varies by state and may depend on whether the termination was voluntary or involuntary. Some states require same-day payment on involuntary termination. At-will employees are also generally not entitled to severance unless an agreement exists, but accrued vacation payout on termination is required in several states regardless of company policy.</p>

        <h2>How BEG handles At-Will Employment for clients</h2>
        <p>BEG Managed Payroll processes final paychecks correctly when employment ends, applying the correct state-specific deadline and including all required compensation such as accrued vacation where state law requires payout. BEG flags state-by-state final pay rules so you are never caught out of compliance on an employee's last day. This is included in BEG Managed Payroll at $25-$45 per employee per month. <Link href="/services/managed-payroll" style={{ color: '#ECAC60' }}>Learn about BEG Managed Payroll</Link>.</p>

        <h2 style={{ marginTop: '3rem' }}>Frequently asked questions</h2>
        <div key={0} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Can an at-will employer fire someone without giving a reason?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>Technically yes, but the reason cannot be an illegal one. If the termination is later challenged, an employer without a documented legitimate reason is in a weaker legal position. Documenting performance issues and policy violations before termination is always advisable.</p>
        </div>
        <div key={1} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does an employee handbook create an implied contract that overrides at-will status?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>It can, particularly if the handbook describes a specific termination process or lists protected categories. Most employers include a clear at-will disclaimer in their handbooks to prevent this. The disclaimer should be acknowledged in writing by each employee.</p>
        </div>
        <div key={2} style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '0.5rem' }}>Does at-will employment affect when I have to issue the final paycheck?</h3>
          <p style={{ margin: 0, color: '#444', lineHeight: '1.7' }}>No. At-will status does not change final paycheck timing. State law controls when the last paycheck must be issued, and some states require same-day payment on involuntary termination regardless of at-will status.</p>
        </div>

        <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2rem', marginTop: '3rem', textAlign: 'center' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Want payroll fully managed?</h2>
          <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>BEG handles everything at $25-$45 PEPM. See your exact price in 90 seconds.</p>
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
            { '@type': 'WebPage', '@id': 'https://www.beghr.com/resources/payroll-glossary/at-will-employment', url: 'https://www.beghr.com/resources/payroll-glossary/at-will-employment', name: 'At-Will Employment | Payroll Glossary | BEG', datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
            { '@type': 'DefinedTerm', name: 'At-Will Employment', description: 'Understand at-will employment, what exceptions apply, and what at-will status means for payroll, final paychecks, and severance.', inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'BEG Payroll Glossary', url: 'https://www.beghr.com/resources/payroll-glossary' } },
            { '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
            { '@type': 'BreadcrumbList', itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
              { '@type': 'ListItem', position: 4, name: 'At-Will Employment', item: 'https://www.beghr.com/resources/payroll-glossary/at-will-employment' },
            ]},
          ]
        }) }} />
      </section>
    </article>
  );
}
