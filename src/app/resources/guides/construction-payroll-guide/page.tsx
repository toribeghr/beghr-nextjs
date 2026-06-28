import { Metadata } from 'next';
import Link from 'next/link';
import PayrollLeadCaptureForm from '@/components/PayrollLeadCaptureForm';

export const metadata: Metadata = {
  title: 'Construction Payroll Guide | Certified & Prevailing Wage | BEG',
  description: 'Construction payroll guide covering certified payroll, Davis-Bacon prevailing wage, multi-state crews, union fringe, and job costing.',
  alternates: {
    canonical: 'https://beghr.com/resources/guides/construction-payroll-guide',
  },
  openGraph: {
    title: 'Construction Payroll Guide | Certified & Prevailing Wage | BEG',
    description: 'Construction payroll guide covering certified payroll, Davis-Bacon prevailing wage, multi-state crews, union fringe, and job costing.',
    url: 'https://beghr.com/resources/guides/construction-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Construction Payroll Guide | Certified & Prevailing Wage | BEG',
    description: 'Construction payroll guide covering certified payroll, Davis-Bacon prevailing wage, multi-state crews, union fringe, and job costing.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What is certified payroll and who has to file it?',
    a: 'Certified payroll is a weekly report, usually filed on Form WH-347, that documents wages, hours, job classifications, and fringe benefits for every worker on a federally funded or federally assisted construction project. Any contractor or subcontractor on a covered project must submit it weekly, signed under a statement of compliance. Errors or late filings can hold up payment and trigger Department of Labor investigations.',
  },
  {
    q: 'How does Davis-Bacon prevailing wage work?',
    a: 'The Davis-Bacon Act requires contractors on federal construction contracts above $2,000 to pay laborers and mechanics no less than the locally prevailing wages and fringe benefits set by the Department of Labor for each job classification. The correct rate depends on the worker\'s classification and the project location, and it can change by county. Paying the wrong rate, even by accident, creates back-wage liability and can lead to debarment from future federal work.',
  },
  {
    q: 'How do you handle payroll for crews working in multiple states?',
    a: 'Crews that cross state lines create reciprocity, withholding, and unemployment-tax questions for every state where work is performed. Each state can require its own income tax withholding and its own unemployment registration, and some have reciprocity agreements that change which state gets the tax. BEG runs multi-state construction payroll through one managed process so each worker\'s wages and taxes are allocated to the correct state automatically.',
  },
  {
    q: 'Can fringe benefits be paid as cash instead of into a plan?',
    a: 'Yes. Under Davis-Bacon, the prevailing wage has a base hourly rate plus a fringe benefit amount, and an employer can satisfy the fringe portion either by contributing to a bona fide benefit plan or by paying it as additional cash wages. Paying fringe as cash is simpler but increases payroll tax cost, while funding a plan can reduce that burden. Tracking which approach applies per worker and per project is exactly what certified payroll reporting has to capture.',
  },
];

export default function ConstructionPayrollGuidePage() {
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
                url: 'https://beghr.com/resources/guides/construction-payroll-guide',
                name: 'Construction Payroll Guide',
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
                  { '@type': 'ListItem', position: 4, name: 'Construction Payroll Guide', item: 'https://beghr.com/resources/guides/construction-payroll-guide' },
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
            <h1>Construction Payroll Guide: Certified Payroll and Prevailing Wage</h1>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#777777' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              Construction payroll carries compliance weight most industries never see. Certified payroll, Davis-Bacon prevailing wage, multi-state crews, union fringe, and job costing all have to be right every week. This guide walks through what contractors need to manage.
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
              <li>Certified payroll is a weekly Form WH-347 filing required on federally funded projects, signed under a statement of compliance.</li>
              <li>Davis-Bacon requires paying the locally prevailing wage and fringe for each worker classification, and the rate changes by classification and county.</li>
              <li>Fringe benefits can be paid as cash wages or contributed to a bona fide plan, and the choice changes payroll tax cost.</li>
              <li>BEG handles construction payroll fully managed at $25 to $45 per employee per month, including certified payroll and multi-state crews.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal" style={{ color: '#333333', lineHeight: '1.8', fontSize: '1rem' }}>

            <h2>Certified payroll and the weekly WH-347</h2>
            <p>
              On any federally funded or federally assisted construction project, contractors and subcontractors must file certified payroll every week. The standard vehicle is Form WH-347, which reports each worker’s name, job classification, hours, hourly rate, gross wages, deductions, and the fringe benefits paid. Critically, the form ends with a signed statement of compliance attesting under penalty that the information is accurate and that workers were paid the correct prevailing wage.
            </p>
            <p>
              Certified payroll is unforgiving because it is both a payment gate and an audit trail. A general contractor will often withhold payment to a subcontractor whose certified payroll is incomplete or late, so a filing error directly hits cash flow. And because the report is a sworn document, mistakes can escalate from a back-wage finding to a False Claims Act exposure. The reports must reconcile exactly to what was paid, which means the underlying payroll data has to be clean before the form is ever generated.
            </p>

            <h2>Davis-Bacon prevailing wage</h2>
            <p>
              The Davis-Bacon Act governs the wages on federal construction contracts above $2,000. It requires that laborers and mechanics be paid no less than the prevailing wage and fringe benefits that the Department of Labor has determined for their classification in that specific locality. The prevailing wage is published in a wage determination tied to the project, and it breaks down by trade and worker classification.
            </p>
            <p>
              The trap is classification. The same worker can fall under different rates depending on the task performed, and the prevailing wage varies by county. A contractor who applies a single blended rate, or who misclassifies a worker into a lower-paid category, creates back-wage liability that compounds across every hour on the job. Repeated or willful violations can lead to debarment, which bars the firm from federal work for years. Getting the classification and rate right per worker, per project, every week, is the core discipline of compliant construction payroll.
            </p>

            <h2>Multi-state crews and union fringe</h2>
            <p>
              Construction crews move. A crew that works in two or three states in a month triggers withholding and unemployment-tax obligations in each one, and reciprocity agreements between states can change which state actually collects the tax. Each state may require separate registration, separate withholding, and separate filings, and an error in any of them surfaces as a notice months later.
            </p>
            <p>
              Union fringe adds another layer. For union crews, fringe benefit contributions flow to health, pension, and training funds at rates set by the collective bargaining agreement, and those contributions have to be reported to the funds on their own schedules. Under Davis-Bacon, an employer can satisfy the fringe obligation either by funding a bona fide plan or by paying the fringe as additional cash wages, and the choice changes both compliance and payroll tax cost. Tracking which approach applies to which worker on which project is precisely what certified payroll has to document.
            </p>

            <h2>Job costing: payroll that ties back to the project</h2>
            <p>
              In construction, payroll is not just a compliance task, it is a profitability tool. Contractors need labor costs allocated by job, by phase, and often by cost code so they can see whether a project is on budget while it is still in progress. That requires payroll data tagged at entry to the right job and the right cost code, then rolled up into reporting the project manager can act on.
            </p>
            <p>
              When payroll, certified reporting, and job costing live in separate spreadsheets, the numbers drift apart and the project manager is always looking at stale data. A managed payroll process captures the job and cost-code allocation at the source, so certified payroll, multi-state tax, union reporting, and job-cost reporting all draw from one clean dataset.
            </p>

            <h2>Why managed payroll fits construction</h2>
            <p>
              The compliance surface in construction is large enough that a single missed wage determination or late certified payroll can cost more than a year of payroll service. A fully managed process absorbs that risk: prevailing wage rates applied per classification, certified payroll generated weekly, multi-state tax handled automatically, union fringe reported on schedule, and labor allocated to jobs for costing. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> delivers all of it for a flat $25 to $45 per employee per month, far less than a dedicated payroll hire. Browse the rest of our practical references in the <Link href="/resources/guides" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG guides library</Link>.
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
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Hand Off Construction Payroll</p>
            <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.6rem' }}>BEG handles construction payroll fully managed at $25-$45 PEPM.</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
              Certified payroll, Davis-Bacon prevailing wage, multi-state crews, union fringe reporting, and job costing, all handled by your dedicated BEG payroll contact. No per-project surcharge.
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
            toolName="Construction Payroll Guide"
            toolDescription="Certified payroll, Davis-Bacon prevailing wage, multi-state crews, and union fringe -- the full guide in your inbox."
            assetUrl="/resources/guides/construction-payroll-guide"
            assetLabel="Email me the guide"
          />
        </div>
      </section>
    </>
  );
}
