import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

const TITLE = 'What Is Co-Employment? The PEO Model Explained | BEG';
const DESCRIPTION = 'Co-employment explained plainly: employer of record, shared liability, PEO benefit plans, IRS CPEO certification, and the real pros and cons.';
const URL = 'https://www.beghr.com/services/hr-outsourcing/what-is-co-employment';
const H1 = 'What is co-employment, and should you sign up for it?';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-what-is-co-employment');

const FAQS: [string, string][] = [
  [
    'What is co-employment in plain terms?',
    'A contract that makes a PEO the employer of record for your staff for tax and benefits purposes, while you keep hiring, firing, and day-to-day direction. Two employers, one workforce, duties split by agreement.',
  ],
  [
    'Do my employees stop working for me under co-employment?',
    'No. They work for you every day exactly as before. Legally, though, their paychecks, W-2s, and benefits run through the PEO, which is why entering and leaving the arrangement takes real unwinding.',
  ],
  [
    'What does IRS CPEO certification actually mean?',
    'A certified PEO posts a bond, passes IRS audits, and becomes solely liable for federal employment taxes on wages it pays worksite employees. It certifies tax reliability, not HR quality.',
  ],
  [
    'Does co-employment protect me from employment lawsuits?',
    'Only partially. Tax remittance risk genuinely shifts, but discrimination, wrongful termination, and wage claims still name the business that made the decision. Co-employment is not liability insurance.',
  ],
  [
    'Is there a way to outsource HR without co-employment?',
    'Yes. HR outsourcing and ASO models leave you the sole employer while outside professionals do the work. That is the BEG model, powered by isolved, with a flat monthly estimate on screen.',
  ],
];

export default function WhatIsCoEmploymentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: H1,
            description: DESCRIPTION,
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: URL,
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'HR Outsourcing', item: 'https://www.beghr.com/services/hr-outsourcing' },
              { '@type': 'ListItem', position: 3, name: 'What Is Co-Employment', item: URL },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Compared"
        title={H1}
        description="Co-employment is a contractual arrangement where a PEO becomes the employer of record for tax and benefits purposes while you keep day-to-day direction of your team."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: 'Not a PEO', label: 'No co-employment ever' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who Owns What</p>
              <h2>What moves to the PEO, and what stays with you</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Responsibility</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Under Co-Employment (PEO)</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Without Co-Employment (HR Outsourcing)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Employer of record', 'The PEO, for tax and benefits purposes', 'You, for everything'],
                    ['W-2s and payroll taxes', 'Issued and filed under the PEO structure', 'Issued and filed under your EIN'],
                    ['Benefits plan control', 'PEO picks carriers and plan lineup; can change at renewal', 'You and your broker choose and keep the plans'],
                    ['Hiring and firing decisions', 'Yours, sometimes within PEO procedural guardrails', 'Yours, with HR professionals advising'],
                    ['Employment tax liability', 'Shifts to the PEO if IRS-certified (CPEO)', 'Stays with you; the work is done for you'],
                    ['Lawsuit exposure', 'Shared and allocated by contract; decisions still trace to you', 'Yours, with documentation built to defend them'],
                    ['State unemployment account', 'Often runs under the PEO, resets when you leave', 'Your account and experience rating, untouched'],
                    ['Cost shape', 'Quote-gated, often percent of payroll', 'Flat monthly, instant estimate'],
                  ].map(([factor, peo, hro], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{peo}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{hro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">IRS, Certified Professional Employer Organizations</a> · <a href="https://www.napeo.org" target="_blank" rel="noopener noreferrer">NAPEO industry data</a>
            </p>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Mechanics</p>
              <h2>Co-employment, without the sales gloss</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Employer of record: the legal center of gravity moves</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Sign a PEO agreement and your employees become worksite employees of the PEO. Their W-2s carry the PEO structure, their payroll taxes remit through it, and their benefits enroll under plans the PEO sponsors. You keep functional control: who gets hired, who gets promoted, what the work is. The industry calls this a partnership, and <a href="https://www.napeo.org" target="_blank" rel="noopener noreferrer">NAPEO</a> can point to hundreds of thousands of businesses using it. The accurate mental model is narrower: the legal and financial plumbing of employment relocates into the PEO, while the daily reality of employment stays in your building. Both facts are true at once, and both matter.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Shared liability: what actually shifts and what never does</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The PEO contract allocates responsibilities: the PEO typically owns payroll tax remittance and benefits administration, while you keep workplace safety, employment decisions, and daily supervision. Here is the part the brochure underplays: liability for how you treat people does not transfer. A discrimination charge, a retaliation claim, or a wage and hour complaint under <a href="https://www.dol.gov/agencies/whd" target="_blank" rel="noopener noreferrer">Department of Labor rules</a> names the business whose manager made the call, co-employer or not. Courts look at who directed the work. Co-employment moves administrative and tax risk; it does not launder management decisions, and any pitch implying otherwise deserves skepticism.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Benefits control: the genuine win and its fine print</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The best reason co-employment exists: a PEO pools every client into master health and retirement plans, and that pooled census buys plan access a 20-person company cannot get alone. That advantage is real and we will not pretend otherwise. The fine print is control. The PEO selects the carriers, the lineup can change at renewal without your vote, and the plans are not portable: leave the PEO and your team leaves those plans on the way out. You are renting excellent benefits, not building your own benefits history. For companies whose recruiting depends on rich plans, renting can still be the right call.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>CPEO certification: what the IRS stamp does and does not say</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Because payroll taxes flow through the PEO, Congress created a certification program. A <a href="https://www.irs.gov/businesses/small-businesses-self-employed/certified-professional-employer-organization" target="_blank" rel="noopener noreferrer">Certified PEO</a> posts a bond, meets IRS financial and reporting standards, and becomes solely liable for federal employment taxes on wages paid to worksite employees, so the IRS cannot come back to you for taxes a certified PEO failed to remit. If you evaluate PEOs, certification should be a hard requirement. But read the stamp correctly: it certifies tax reliability, not HR competence, service quality, or fair pricing. A CPEO can still hand you a mediocre handbook and a percent-of-payroll bill.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Exit friction, and one warning for staffing companies</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Leaving co-employment means re-establishing everything that moved: payroll accounts under your EIN, replacement benefit plans sourced and enrolled, and state unemployment history rebuilt, which is why exits cluster on January 1 to keep tax wage bases clean. Price that friction before entering, not after. One more wrinkle: some industries live with co-employment questions daily even without a PEO. Staffing firms, for instance, already sit in a joint-employment triangle with every client, and adding a PEO adds a third layer; our <Link href="/services/hr-outsourcing/staffing-agency">staffing agency HR page</Link> covers that directly. For the head-to-head decision, see <Link href="/services/hr-outsourcing/peo-vs-hr-outsourcing">PEO vs HR outsourcing</Link> and <Link href="/services/hr-outsourcing/aso-vs-peo">ASO vs PEO</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHICH SHOULD YOU CHOOSE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Should You Sign Up For It</p>
              <h2>Three honest scenarios</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'You want one bundled bill including sponsored health plans',
                  body: 'Co-employment is how you get it: that is a PEO, and we will tell you so on the call. Insist on IRS CPEO certification and model the exit before you sign.',
                },
                {
                  title: 'You want the HR burden gone but the company kept whole',
                  body: 'Skip co-employment. HR outsourcing gives you the professionals and the compliance coverage while your EIN, benefit plans, and unemployment history stay exactly where they are.',
                },
                {
                  title: 'You are being pitched a PEO as lawsuit protection',
                  body: 'Slow down. Tax liability genuinely shifts under a CPEO; employment-decision liability does not. If risk is the worry, documented HR practices reduce it more than a co-employer does.',
                },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEG POSITIONING */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where BEG Fits</p>
              <h2>Everything outsourced, nothing co-employed</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG HR outsourcing, powered by isolved, is built for owners who want the HR department without the employer-of-record change: certified HR professionals, a handbook built for your states, and compliance monitoring across all 50, while your company stays the only employer on every W-2. Pricing is a flat monthly fee, and the estimate takes about ninety seconds on screen. The full service breakdown lives on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Co-employment, answered</h2>
            </div>
            <div className="reveal" style={{ marginTop: '2rem' }}>
              {FAQS.map(([q, a]) => (
                <div key={q} className="faq-item" style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 0.5rem' }}>{q}</h3>
                  <p style={{ margin: 0, fontSize: '0.93rem', color: '#555555', lineHeight: '1.65' }}>{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ServicePage>
    </>
  );
}
