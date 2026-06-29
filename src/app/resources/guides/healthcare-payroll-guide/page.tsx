import { Metadata } from 'next';
import Link from 'next/link';
import PayrollLeadCaptureForm from '@/components/PayrollLeadCaptureForm';

export const metadata: Metadata = {
  title: 'Healthcare Payroll Guide | Shift Pay & On-Call | BEG',
  description: 'Healthcare payroll guide covering shift differentials, 24/7 coverage, on-call pay, high turnover, and CNA and nurse classifications.',
  alternates: {
    canonical: 'https://www.beghr.com/resources/guides/healthcare-payroll-guide',
  },
  openGraph: {
    title: 'Healthcare Payroll Guide | Shift Pay & On-Call | BEG',
    description: 'Healthcare payroll guide covering shift differentials, 24/7 coverage, on-call pay, high turnover, and CNA and nurse classifications.',
    url: 'https://www.beghr.com/resources/guides/healthcare-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Payroll Guide | Shift Pay & On-Call | BEG',
    description: 'Healthcare payroll guide covering shift differentials, 24/7 coverage, on-call pay, high turnover, and CNA and nurse classifications.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'How are shift differentials handled in payroll?',
    a: 'A shift differential is extra pay for working less desirable hours, such as nights, weekends, or holidays, usually expressed as a flat dollar amount or a percentage of base pay. The key compliance point is that shift differential pay counts toward the regular rate of pay used to calculate overtime. If a facility pays a night differential and then computes overtime only on base wages, it underpays overtime and creates wage-and-hour liability.',
  },
  {
    q: 'Is on-call time paid time?',
    a: 'It depends on how restrictive the on-call period is. If an employee must stay on the premises or is so constrained that they cannot use the time for personal purposes, the on-call time is generally compensable. If the employee is simply reachable and free to go about their life, it usually is not, though call-back hours once they report are always paid. Many facilities pay a separate on-call stipend plus the regular rate for hours actually worked, and both have to be tracked accurately.',
  },
  {
    q: 'Why does employee classification matter for CNAs and nurses?',
    a: 'Most direct-care roles, including CNAs, LPNs, and staff RNs paid hourly, are non-exempt and entitled to overtime. Some salaried clinical and administrative roles may qualify as exempt, but the title alone never decides it; the duties and salary tests do. Misclassifying an hourly nurse as exempt to avoid overtime is a common and expensive error. Correct classification has to be set per role and reviewed when duties change.',
  },
  {
    q: 'How does managed payroll help with high turnover?',
    a: 'Healthcare has some of the highest turnover of any industry, which means constant onboarding, offboarding, and final-pay processing. Each new hire needs accurate tax setup and benefit enrollment, and each departure needs a timely final paycheck that meets state rules. BEG handles that churn as part of fully managed payroll at $25 to $45 per employee per month, so a high-turnover facility is not constantly behind on paperwork.',
  },
];

export default function HealthcarePayrollGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                url: 'https://www.beghr.com/resources/guides/healthcare-payroll-guide',
                name: 'Healthcare Payroll Guide',
                datePublished: '2026-06-28',
                dateModified: '2026-06-28',
                author: {
                  '@type': 'Person',
                  name: 'Anthony Moretti',
                  url: 'https://www.linkedin.com/in/theanthonymoretti',
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'Business Executive Group',
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
                  { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
                  { '@type': 'ListItem', position: 3, name: 'Guides', item: 'https://www.beghr.com/resources/guides' },
                  { '@type': 'ListItem', position: 4, name: 'Healthcare Payroll Guide', item: 'https://www.beghr.com/resources/guides/healthcare-payroll-guide' },
                ],
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Payroll Guide</p>
            <h1>Healthcare Payroll Guide: Shift Pay, On-Call, and Coverage</h1>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#777777' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              Healthcare runs around the clock, and payroll has to keep up. Shift differentials, 24/7 coverage, on-call pay, high turnover, and CNA and nurse classifications all carry rules that are easy to get wrong. This guide breaks down what facilities need to manage.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources/guides" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; All guides</Link>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', display: 'flex', justifyContent: 'center' }}>
          <PayrollLeadCaptureForm
            toolName="Healthcare Payroll Guide"
            toolDescription="Shift differentials, 24/7 coverage, on-call pay, and clinical classifications -- the full guide in your inbox."
            assetUrl="/resources/guides/healthcare-payroll-guide"
            assetLabel="Email me the guide"
          />
        </div>
      </section>


      {/* KEY TAKEAWAYS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#faf6ef', borderLeft: '4px solid #ECAC60', borderRadius: '6px', padding: '1.75rem 2rem' }} className="reveal">
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', marginTop: 0 }}>Key takeaways</h2>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444444', lineHeight: '1.8', fontSize: '0.95rem' }}>
              <li>Shift differential pay must be included in the regular rate used to calculate overtime, or the facility underpays overtime.</li>
              <li>On-call time is paid when the employee is restricted enough that they cannot use it freely, and call-back hours are always paid.</li>
              <li>Most hourly CNAs, LPNs, and staff nurses are non-exempt and owed overtime; title alone never determines exempt status.</li>
              <li>BEG handles healthcare payroll fully managed at $25 to $45 per employee per month, including high-turnover onboarding and offboarding.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal" style={{ color: '#333333', lineHeight: '1.8', fontSize: '1rem' }}>

            <h2>Shift differentials and the regular rate trap</h2>
            <p>
              Healthcare facilities pay shift differentials to staff the hours nobody wants: nights, weekends, and holidays. The differential is usually a flat dollar add-on per hour or a percentage of base pay. On its own it is simple, but it hides one of the most common overtime errors in the industry. Under federal law, a shift differential is part of the employee’s regular rate of pay, and overtime must be calculated on that higher regular rate, not on base wages alone.
            </p>
            <p>
              When a nurse works night shifts with a differential and then crosses 40 hours, the overtime premium has to reflect the differential. A facility that computes time-and-a-half on base pay only is underpaying every overtime hour, and across a large hourly staff that error accumulates into significant back-wage exposure. Getting overtime right requires the payroll system to blend base pay and differentials into the correct regular rate automatically, every period.
            </p>

            <h2>24/7 coverage and on-call pay</h2>
            <p>
              Around-the-clock operations create pay situations that office employers never face. On-call pay is the clearest example. Whether on-call time is compensable depends on how restrictive it is. If an employee must remain on premises or is so constrained that they cannot effectively use the time for themselves, that waiting time is generally paid. If they are merely reachable by phone and otherwise free, it usually is not. Either way, the moment a call-back actually happens, the hours worked are paid at the regular rate, often with a guaranteed minimum.
            </p>
            <p>
              Many facilities layer a flat on-call stipend on top of hourly pay for hours actually worked, and both pieces have to flow correctly into payroll and into the overtime calculation. Holiday coverage, weekend rotations, and float-pool assignments add still more pay rules. The complexity is not any single item; it is the volume of overlapping rules applied across a large staff working unusual hours, which is exactly the environment where manual payroll breaks down.
            </p>

            <h2>CNA, LPN, and nurse classifications</h2>
            <p>
              Worker classification drives whether overtime is owed, and healthcare is full of roles that get misclassified. The vast majority of direct-care positions, including hourly CNAs, LPNs, and staff RNs, are non-exempt and entitled to overtime. Some salaried clinical leaders and certain administrative roles may meet the exempt duties and salary tests, but a job title alone never decides exemption. The actual duties and the salary basis do.
            </p>
            <p>
              The expensive mistake is classifying an hourly nurse as exempt to sidestep overtime, or assuming a salaried title removes the overtime obligation. Both invite back-pay claims and penalties. Classification has to be set deliberately per role and revisited whenever duties change, and the payroll process has to apply overtime correctly for everyone who is non-exempt. This is detail work that rewards consistency and punishes guesswork.
            </p>

            <h2>High turnover and constant onboarding</h2>
            <p>
              Healthcare carries some of the highest turnover of any sector, especially among direct-care staff. For payroll, that means a steady stream of new hires needing accurate tax setup and benefit enrollment, and a steady stream of departures needing timely, compliant final pay. Several states require final wages within a tight window after separation, and missing it carries penalties. A facility that is always behind on onboarding and offboarding paperwork is always one audit away from a problem.
            </p>
            <p>
              A managed payroll process absorbs this churn so it is not a recurring fire drill. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> handles new-hire setup, benefit enrollment, and compliant final pay as part of the service, which is a meaningful relief in an industry where the staff roster is never static.
            </p>

            <h2>Why managed payroll fits healthcare</h2>
            <p>
              Healthcare payroll combines high stakes with high volume: differentials feeding overtime, on-call rules, classification judgment calls, and relentless turnover, all across a large staff working every hour of the week. A fully managed service applies these rules consistently for far less than a dedicated payroll team would cost, and frees clinical leaders to focus on care rather than wage-and-hour mechanics. Explore the rest of our payroll references in the <Link href="/resources/guides" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG guides library</Link>.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Frequently asked questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
            {faqs.map(({ q, a }) => (
              <div key={q} className="reveal" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem 1.75rem' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: '#000000', marginTop: 0, marginBottom: '0.6rem' }}>{q}</h3>
                <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.7' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#000000', borderRadius: '10px', padding: '2.5rem', textAlign: 'center', color: '#ffffff' }} className="reveal">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Hand Off Healthcare Payroll</p>
            <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.6rem' }}>BEG handles healthcare payroll fully managed at $25-$45 PEPM.</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
              Shift differentials, on-call pay, overtime on the correct regular rate, classification, and high-turnover onboarding, all handled by your dedicated BEG payroll contact. No coverage surcharge.
            </p>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a Free 15-Minute Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
