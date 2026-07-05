import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';


export const metadata: Metadata = {
  title: 'IRS Letter 226-J: What It Means and How to Respond | BEG',
  description: 'Got IRS Letter 226-J? It is a proposed ACA penalty, not a bill. The 30-day response window, Forms 14764 and 14765, and how to contest the amount.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-benefits/irs-226j-letter' },
  openGraph: {
    title: 'IRS Letter 226-J: What It Means and How to Respond | BEG',
    description: 'Got IRS Letter 226-J? It is a proposed ACA penalty, not a bill. The 30-day response window, Forms 14764 and 14765, and how to contest the amount.',
    url: 'https://www.beghr.com/services/managed-benefits/irs-226j-letter',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'IRS Letter 226-J: What It Means and How to Respond | BEG', description: 'Got IRS Letter 226-J? It is a proposed ACA penalty, not a bill. The 30-day response window, Forms 14764 and 14765, and how to contest the amount.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('managed-benefits-irs-226j-letter');

const FAQS: [string, string][] = [
  [
    'Is IRS Letter 226-J a bill?',
    'No. The IRS states that Letter 226-J is the initial proposal of an employer shared responsibility payment, not a bill. Nothing is assessed until after you respond or the response window passes.',
  ],
  [
    'How long do I have to respond to Letter 226-J?',
    'Respond by the response date shown on the letter, which the IRS says is generally 30 days from the date of the letter. The letter itself controls; check yours first.',
  ],
  [
    'Can I get more time to respond?',
    'Yes. The IRS instructs employers to contact the person named in the letter, using the contact information it provides, if they have questions or need additional time to respond.',
  ],
  [
    'What forms do I use to respond?',
    'Form 14764, the ESRP Response, states whether you agree or disagree. If you disagree, you explain why and mark corrections on Form 14765, the Employee Premium Tax Credit Listing.',
  ],
  [
    'What happens if I ignore Letter 226-J?',
    'The IRS assesses the proposed amount and issues Notice CP 220J, a notice and demand for payment. Silence converts a proposal you could have contested into a liability you owe.',
  ],
  [
    'Do I have appeal rights?',
    'Yes. After the IRS acknowledges your response with a Letter 227, you can request a pre-assessment conference with the IRS Office of Appeals by the date shown, generally 30 days.',
  ],
  [
    'Why did my company get this letter years after the tax year?',
    'The IRS computes proposed payments from Forms 1094-C and 1095-C and employee tax returns, so letters routinely arrive well after the filing year they cover. The first wave for 2015 went out in 2017 and 2018.',
  ],
];

export default function Irs226jLetterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'IRS Letter 226-J: what it means and exactly what to do next',
            description: 'Got IRS Letter 226-J? It is a proposed ACA penalty, not a bill. The 30-day response window, Forms 14764 and 14765, and how to contest the amount.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/managed-benefits/irs-226j-letter',
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
              { '@type': 'ListItem', position: 2, name: 'Managed Benefits', item: 'https://www.beghr.com/services/managed-benefits' },
              { '@type': 'ListItem', position: 3, name: 'IRS Letter 226-J', item: 'https://www.beghr.com/services/managed-benefits/irs-226j-letter' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Managed Benefits · Compliance"
        title={'IRS Letter 226-J: what it means and exactly what to do next'}
        description="A 226-J letter is the IRS proposing an Affordable Care Act employer shared responsibility payment. It is not a bill, the amount is frequently wrong because of reporting errors, and you have a defined window to respond. Here is the process, step by step, straight from the playbook the IRS publishes."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="managed-benefits" />}
        heroStats={[
          { value: 'Not a bill', label: 'A proposed payment you can contest' },
          { value: '~30 days', label: 'Typical response window per the IRS' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* PROCESS TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Process, Decoded</p>
              <h2>Every document in the 226-J process, and what to do with it</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Document</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>What it is</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>What you do</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Letter 226-J', 'The initial proposed employer shared responsibility payment', 'Read it and the attachments fully; note the response date'],
                    ['ESRP summary table', 'The proposed amount, itemized month by month', 'Check each month against your records and offer data'],
                    ['Form 14765, PTC Listing', 'The employees whose premium tax credits triggered the proposal', 'Verify each line and the 1095-C codes reported for them'],
                    ['Form 14764, ESRP Response', 'Your formal answer: agree or disagree', 'Complete and return it by the response date, with your explanation'],
                    ['Response deadline', 'Generally 30 days from the date on the letter', 'Meet it, or contact the IRS person named to request more time'],
                    ['Letter 227 series', 'The IRS acknowledgment of your response', 'Read which version you got; it states what happens next'],
                    ['Appeals conference', 'A pre-assessment review by the IRS Office of Appeals', 'Request it in writing by the Letter 227 response date if you still disagree'],
                    ['Notice CP 220J', 'The actual assessment and demand for payment', 'This is the bill stage; payment and installment options apply here'],
                  ].map(([doc, what, action], i) => (
                    <tr key={doc} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{doc}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{what}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Sources: <a href="https://www.irs.gov/individuals/understanding-your-letter-226-j" target="_blank" rel="noopener noreferrer">IRS, Understanding your Letter 226-J</a> · <a href="https://www.irs.gov/affordable-care-act/employers/questions-and-answers-on-employer-shared-responsibility-provisions-under-the-affordable-care-act" target="_blank" rel="noopener noreferrer">IRS, employer shared responsibility Q&amp;A</a>
            </p>
          </div>
        </section>

        {/* ANALYSIS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Understand It, Then Answer It</p>
              <h2>What the letter is actually saying</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Why you got it: two data sets disagreed about you</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Per the <a href="https://www.irs.gov/individuals/understanding-your-letter-226-j" target="_blank" rel="noopener noreferrer">IRS explanation of Letter 226-J</a>, the proposed amount is computed from two sources: the Forms 1094-C and 1095-C your company filed, and the individual tax returns of your employees. When at least one full-time employee received a premium tax credit for a month where your filings did not show qualifying coverage or a safe harbor, the system proposes a payment. That is the crucial point: the letter reflects what was reported, not necessarily what happened. A wrong code on one line of a 1095-C can generate a five-figure proposal all by itself.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>The two penalties inside the proposal</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The summary table in your letter tags each month as a section 4980H(a) or 4980H(b) liability. The (a) penalty applies when an applicable large employer did not offer coverage to enough of its full-time workforce; the (b) penalty applies when coverage was offered but was unaffordable or fell short for specific employees who then received credits. The base amounts are $2,000 and $3,000 per the statute, adjusted upward each year; for calendar year 2023 the <a href="https://www.irs.gov/affordable-care-act/employers/questions-and-answers-on-employer-shared-responsibility-provisions-under-the-affordable-care-act" target="_blank" rel="noopener noreferrer">IRS lists the adjusted amounts</a> as $2,880 and $4,320 per full-time employee. Which letter of the statute you are tagged under changes both the math and the rebuttal.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>How to respond when the number is wrong</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Disagreeing is normal and the process expects it. You complete Form 14764 indicating disagreement, attach a full explanation, and mark the corrections employee by employee on Form 14765, the premium tax credit listing. This is where offer-of-coverage codes, affordability safe harbors, and waiting-period rules get re-argued with evidence: enrollment records, plan documents, payroll data. The IRS instructs employers to follow the letter itself for how corrected information should be submitted for consideration, so work from its instructions rather than from generic advice. And if the response date is close, use the IRS contact named in your letter to ask for more time rather than sending something half-built.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>After you respond, and how the next letter never arrives</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The IRS answers with one of five versions of Letter 227: some close the case, others revise the amount or ask for more. If you still disagree, you can request a pre-assessment conference with the IRS Office of Appeals by the date on that letter. Only after that, or after silence, does assessment and Notice CP 220J arrive. The longer game is making sure there is no next letter: 226-J proposals overwhelmingly trace back to eligibility tracking and filing errors, which is an administration problem. The workload split behind that problem is laid out in <Link href="/services/managed-benefits/benefits-administration-software-vs-services">benefits administration software vs services</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SCENARIOS */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where You Might Be</p>
              <h2>Three honest scenarios</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                {
                  title: 'You checked the data and the proposal is simply right',
                  body: 'Sign Form 14764 indicating agreement and arrange payment per the instructions. Then fix the tracking gap that caused it, because the same gap generates the same letter for the next filing year.',
                },
                {
                  title: 'The number is wrong because your filings were wrong',
                  body: 'This is the most common case. Build the correction line by line on Form 14765 with evidence behind each change, explain it fully, and respond on time. Wrong codes are fixable; missed deadlines are not.',
                },
                {
                  title: 'The response date is days away and nobody owns this',
                  body: 'Call the IRS contact named in your letter today and request additional time, which the IRS explicitly invites. Then get your payroll, enrollment, and filing data into one place before the new date.',
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
              <h2>The letter is the symptom. The tracking is the cure.</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG Managed Benefits, powered by isolved, exists so this page becomes irrelevant to you: ACA eligibility tracked across your workforce including variable-hour employees, Forms 1094-C and 1095-C produced from clean enrollment data, and deadlines watched by a team instead of a spreadsheet. You keep your broker; the compliance administration moves off your desk. See what that covers on the <Link href="/services/managed-benefits">Managed Benefits overview</Link>, then get your monthly estimate on screen in about 90 seconds.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="managed-benefits" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Letter 226-J, answered calmly</h2>
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
