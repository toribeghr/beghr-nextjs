import { Metadata } from 'next';
import Link from 'next/link';
import PayrollLeadCaptureForm from '@/components/PayrollLeadCaptureForm';

export const metadata: Metadata = {
  title: 'Nonprofit Payroll Guide | 403(b) & Grant Allocation | BEG',
  description: 'Nonprofit payroll guide covering 403(b) plans, grant-funded payroll allocation, clergy housing allowance, and volunteer vs employee rules.',
  alternates: {
    canonical: 'https://beghr.com/resources/guides/nonprofit-payroll-guide',
  },
  openGraph: {
    title: 'Nonprofit Payroll Guide | 403(b) & Grant Allocation | BEG',
    description: 'Nonprofit payroll guide covering 403(b) plans, grant-funded payroll allocation, clergy housing allowance, and volunteer vs employee rules.',
    url: 'https://beghr.com/resources/guides/nonprofit-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nonprofit Payroll Guide | 403(b) & Grant Allocation | BEG',
    description: 'Nonprofit payroll guide covering 403(b) plans, grant-funded payroll allocation, clergy housing allowance, and volunteer vs employee rules.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What is a 403(b) plan and how does it differ from a 401(k)?',
    a: 'A 403(b) is a tax-advantaged retirement plan available to employees of public schools and many 501(c)(3) nonprofit organizations. It functions much like a 401(k) for the participant, with pre-tax or Roth contributions and similar annual limits, but it has its own rules, including a special catch-up provision for long-service employees of qualified organizations. Payroll has to deduct, track, and remit contributions correctly and apply the right limits for each participant.',
  },
  {
    q: 'How do you allocate payroll across grant funding?',
    a: 'When staff are paid from grants, each grant typically restricts what its funds can cover, so an employee\'s time must be split and charged to the correct grants based on actual effort. Federal grants in particular require time-and-effort documentation supporting the allocation. Payroll has to spread each person\'s wages and benefits across the funding sources accurately, then produce reporting auditors and funders can follow back to the underlying records.',
  },
  {
    q: 'What is the clergy housing allowance?',
    a: 'A housing allowance, sometimes called a parsonage allowance, lets a minister exclude a designated portion of compensation used for housing from federal income tax, within limits. The allowance must be designated in advance by the employing organization. Clergy pay also has unusual tax treatment because ministers are generally treated as self-employed for Social Security and Medicare even while being employees for income tax, so payroll handling is genuinely different from a standard employee.',
  },
  {
    q: 'How do you tell a volunteer from an employee?',
    a: 'A true volunteer donates services to a nonprofit freely and without expectation of pay, and may receive only reimbursement for expenses or a nominal benefit. Once a person is paid wages, promised compensation, or required to work set hours under direction in exchange for value, they are likely an employee owed minimum wage and overtime. Misclassifying paid workers as volunteers is a real wage-and-hour risk, so the line has to be drawn carefully and documented.',
  },
];

export default function NonprofitPayrollGuidePage() {
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
                url: 'https://beghr.com/resources/guides/nonprofit-payroll-guide',
                name: 'Nonprofit Payroll Guide',
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
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
                  { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
                  { '@type': 'ListItem', position: 3, name: 'Guides', item: 'https://beghr.com/resources/guides' },
                  { '@type': 'ListItem', position: 4, name: 'Nonprofit Payroll Guide', item: 'https://beghr.com/resources/guides/nonprofit-payroll-guide' },
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
            <h1>Nonprofit Payroll Guide: 403(b), Grants, and Classification</h1>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#777777' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              Nonprofit payroll carries rules most employers never encounter. 403(b) plans, grant-funded payroll allocation, clergy housing allowance where relevant, and the volunteer versus employee line all demand precision. This guide walks through what mission-driven organizations need to manage.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources/guides" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; All guides</Link>
          </div>
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#faf6ef', borderLeft: '4px solid #ECAC60', borderRadius: '6px', padding: '1.75rem 2rem' }} className="reveal">
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1rem', marginTop: 0 }}>Key takeaways</h2>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444444', lineHeight: '1.8', fontSize: '0.95rem' }}>
              <li>A 403(b) is the nonprofit retirement plan; payroll must deduct, remit, and apply the correct contribution limits, including the long-service catch-up.</li>
              <li>Grant-funded staff time must be allocated to the correct grants based on actual effort, with documentation that survives a funder audit.</li>
              <li>Clergy pay is unusual: a designated housing allowance can be income-tax excluded, and ministers are generally self-employed for Social Security and Medicare.</li>
              <li>BEG handles nonprofit payroll fully managed at $25 to $45 per employee per month, including grant allocation and 403(b) administration support.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal" style={{ color: '#333333', lineHeight: '1.8', fontSize: '1rem' }}>

            <h2>403(b) retirement plans</h2>
            <p>
              The 403(b) is the retirement vehicle built for nonprofits and public education employers. For the participant it looks much like a 401(k), with pre-tax or Roth deferrals and comparable annual contribution limits, but it carries its own rules. The most notable is a special catch-up provision for employees with long service at a qualified organization, which can let them contribute above the standard limit. Payroll is where this lives in practice: deductions have to be calculated, the correct per-participant limit applied, and contributions remitted to the plan on time.
            </p>
            <p>
              Late or miscalculated 403(b) remittances are a compliance problem, not just an administrative one, and they can put the plan and the organization at risk. Because the limits and catch-up rules vary by participant and change year to year, the deduction logic has to be set correctly and maintained. This is precise, recurring work that benefits from a payroll process designed to handle it rather than a volunteer treasurer working from memory.
            </p>

            <h2>Grant-funded payroll allocation</h2>
            <p>
              Many nonprofits pay staff partly or entirely from grants, and grants come with strings. Each grant restricts what its funds may cover, so an employee who works across several programs must have their wages and benefits split and charged to the right funding sources based on actual effort. Federal awards specifically require time-and-effort documentation that supports how each person’s pay was allocated, and that documentation has to reconcile to the payroll records.
            </p>
            <p>
              When allocation is done by hand in a spreadsheet after the fact, it drifts from reality and falls apart under audit. A funder or a single-audit reviewer will trace a charged cost back through the allocation to the underlying time records, and gaps there can mean disallowed costs the organization has to repay. A managed payroll process captures the allocation at the source, spreads wages and the associated benefits and taxes across the correct grants, and produces reporting that ties cleanly back to the records funders expect to see.
            </p>

            <h2>Clergy and housing allowance</h2>
            <p>
              For faith-based organizations, clergy pay is genuinely different and easy to mishandle. A designated housing allowance, also called a parsonage allowance, lets a minister exclude from federal income tax the portion of compensation actually used for housing, within statutory limits, but only if the employing organization designates the amount in advance. Get the designation wrong or late and the exclusion can be lost.
            </p>
            <p>
              On top of that, ministers occupy a hybrid tax status. They are generally treated as employees for income tax purposes yet as self-employed for Social Security and Medicare, which means the organization typically does not withhold or match FICA on their wages the way it would for other staff. That combination, a designated housing allowance plus self-employment treatment for FICA, makes clergy payroll a specialty within nonprofit payroll, and one where standard payroll handling produces the wrong result.
            </p>

            <h2>Volunteer versus employee classification</h2>
            <p>
              Nonprofits run on volunteers, and that very reliance creates a classification risk. A genuine volunteer offers services freely without expectation of pay and may receive only expense reimbursement or a nominal benefit. But once a person is paid wages, promised compensation, or required to work set hours under direction in exchange for value, the law tends to treat them as an employee owed at least minimum wage and overtime. A common pitfall is an employee volunteering to do the same work they are paid for, which can convert that time into compensable hours.
            </p>
            <p>
              Drawing this line wrong invites wage-and-hour claims that a mission-driven budget can ill afford. The safe practice is to document volunteer arrangements clearly, keep paid roles distinct from volunteer service, and run anyone who meets the employee test through payroll properly. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> helps organizations keep paid staff cleanly on payroll with correct classification and overtime treatment.
            </p>

            <h2>Why managed payroll fits nonprofits</h2>
            <p>
              Nonprofit payroll layers specialized retirement rules, grant compliance, clergy treatment, and classification judgment on top of ordinary payroll, often with a small administrative team and a watchful board. A fully managed service handles these correctly for far less than a dedicated payroll hire, and it produces the clean records that funders, auditors, and the IRS expect. That lets leadership spend its limited capacity on mission rather than payroll mechanics. See the rest of our references in the <Link href="/resources/guides" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG guides library</Link>.
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
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Hand Off Nonprofit Payroll</p>
            <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.6rem' }}>BEG handles nonprofit payroll fully managed at $25-$45 PEPM.</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
              403(b) administration support, grant-funded allocation, clergy housing allowance handling, and clean classification, all managed by your dedicated BEG payroll contact. Records your funders and auditors can follow.
            </p>
            <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
              Book a Free 15-Minute Call
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', display: 'flex', justifyContent: 'center' }}>
          <PayrollLeadCaptureForm
            toolName="Nonprofit Payroll Guide"
            toolDescription="Grant-funded allocation, 403(b) administration, and worker classification -- the full guide in your inbox."
            assetUrl="/resources/guides/nonprofit-payroll-guide"
            assetLabel="Email me the guide"
          />
        </div>
      </section>
    </>
  );
}
