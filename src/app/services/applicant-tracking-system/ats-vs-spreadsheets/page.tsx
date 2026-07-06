import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'ATS vs Spreadsheets: Why Email Hiring Fails',
  description: 'Tracking applicants in spreadsheets and email costs you good candidates. See how an ATS closes the gaps and speeds up hiring, nationwide.',
  alternates: { canonical: 'https://www.beghr.com/services/applicant-tracking-system/ats-vs-spreadsheets' },
  openGraph: {
    title: 'ATS vs Spreadsheets: Why Email Hiring Fails',
    description: 'Tracking applicants in spreadsheets and email costs you good candidates. See how an ATS closes the gaps and speeds up hiring, nationwide.',
    url: 'https://www.beghr.com/services/applicant-tracking-system/ats-vs-spreadsheets',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'ATS vs Spreadsheets: Why Email Hiring Fails', description: 'Tracking applicants in spreadsheets and email costs you good candidates. See how an ATS closes the gaps and speeds up hiring, nationwide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('applicant-tracking-system-ats-vs-spreadsheets');

const FAQS: [string, string][] = [
  [
    'What is the difference between an ATS and a spreadsheet?',
    'A spreadsheet is a static list you update by hand. An applicant tracking system like isolved Attract & Hire automatically pulls in applications, tracks each candidate through hiring stages, and keeps every resume, note, and message in one place.',
  ],
  [
    'Can a small business survive on spreadsheets and email for hiring?',
    'For a single, rare opening, maybe. Once you have more than one role open at a time or more than a handful of applicants, spreadsheets and inboxes start losing candidates silently, and nobody notices until a good one has already accepted somewhere else.',
  ],
  [
    'What is the biggest hidden cost of spreadsheet hiring?',
    'Speed. Candidates who do not hear back within a few days often assume they were rejected and move on. A spreadsheet does not alert anyone when a follow-up is late, so slow response time becomes invisible until your best candidates are gone.',
  ],
  [
    'Does an ATS help with compliance?',
    'Yes. An ATS keeps a timestamped record of every application, communication, and hiring decision in one system, which is far easier to produce and defend than scattered email threads and a spreadsheet someone edited by hand.',
  ],
  [
    'How hard is it to switch from spreadsheets to an ATS?',
    'BEG handles the setup. We configure isolved Attract & Hire to your roles and workflow, so your team moves from spreadsheets to a working applicant pipeline without building anything themselves.',
  ],
];

export default function AtsVsSpreadsheetsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Spreadsheets and email are quietly costing you your best hires',
            description: 'Tracking applicants in spreadsheets and email costs you good candidates. See how an ATS closes the gaps and speeds up hiring, nationwide.',
            author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            publisher: { '@type': 'Organization', name: 'Business Executive Group' },
            datePublished: '2026-07-05',
            mainEntityOfPage: 'https://www.beghr.com/services/applicant-tracking-system/ats-vs-spreadsheets',
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
              { '@type': 'ListItem', position: 2, name: 'Applicant Tracking System', item: 'https://www.beghr.com/services/applicant-tracking-system' },
              { '@type': 'ListItem', position: 3, name: 'ATS vs Spreadsheets', item: 'https://www.beghr.com/services/applicant-tracking-system/ats-vs-spreadsheets' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="Applicant Tracking System · Compared"
        title="Spreadsheets and email are quietly costing you your best hires"
        description="Tracking job applicants in spreadsheets and email costs you good candidates because neither one flags a stale application, schedules an interview, or alerts anyone when a hiring manager has gone silent for a week. An applicant tracking system closes every one of those gaps automatically."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hcm-software" />}
        heroStats={[
          { value: '1 inbox', label: 'Is not a hiring system' },
          { value: '0 alerts', label: 'When a spreadsheet goes stale' },
          { value: '90 sec', label: 'To your instant estimate' },
        ]}
      >
        {/* COMPARISON TABLE */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '1000px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Side By Side</p>
              <h2>Spreadsheets and email vs isolved Attract &amp; Hire, factor by factor</h2>
            </div>
            <div style={{ overflowX: 'auto', marginTop: '2.5rem' }} className="reveal">
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                <thead>
                  <tr style={{ background: '#000000', color: '#ECAC60' }}>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700, minWidth: '150px' }}>Factor</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>Spreadsheets &amp; email</th>
                    <th style={{ padding: '14px 16px', textAlign: 'left', fontWeight: 700 }}>isolved Attract &amp; Hire, via BEG</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Where applicants live', 'Scattered across inboxes, downloads folders, and someone’s personal tabs', 'One pipeline, every applicant, every role, in one place'],
                    ['Duplicate or lost resumes', 'Common once more than one person is hiring or forwarding', 'Automatically captured and deduplicated as they apply'],
                    ['Follow-up speed', 'Depends on someone remembering to check a folder', 'Automated alerts and status tracking keep candidates moving'],
                    ['Interview scheduling', 'Back-and-forth emails, double-bookings, manual calendar checks', 'Built-in scheduling tied to the candidate record'],
                    ['Compliance and audit trail', 'Scattered threads someone has to reconstruct after the fact', 'Timestamped record of every application and decision'],
                    ['Reporting', 'Manual, if it happens at all', 'Pipeline and source reporting built into the platform'],
                    ['Handoff to onboarding and payroll', 'Re-entering the same candidate data by hand', 'Flows directly into isolved onboarding and payroll'],
                  ].map(([factor, spread, ats], i) => (
                    <tr key={factor} style={{ background: i % 2 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #eeeeee' }}>
                      <td style={{ padding: '13px 16px', fontWeight: 600, color: '#000000' }}>{factor}</td>
                      <td style={{ padding: '13px 16px', color: '#555555' }}>{spread}</td>
                      <td style={{ padding: '13px 16px', color: '#1a6e1a', fontWeight: 600 }}>{ats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* PAIN: HIDDEN FAILURES */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">What You Do Not See Happening</p>
              <h2>The failures a spreadsheet never shows you</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Good candidates read silence as rejection</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>A resume sitting in a shared inbox looks the same whether it was seen an hour ago or forgotten for two weeks. Candidates do not know the difference either, and most assume the worst. By the time someone finally opens that email, the candidate has often already accepted another offer, a risk that grows the longer a role stays open, which per SHRM benchmarks is about 44 days on average. Spreadsheets and inboxes have no mechanism to flag that a candidate has gone quiet too long, so the loss happens without anyone noticing until the role is still open a month later.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Duplicate and lost resumes are the default, not the exception</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Once more than one person is involved in hiring, the same candidate ends up forwarded to two inboxes, entered twice in the spreadsheet, or dropped entirely when a laptop gets a new download folder. There is no single source of truth, so nobody can say with confidence how many candidates are actually active for a role, or whether the best one already applied and got missed.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Scheduling by email eats days, not minutes</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every interview booked by email is a chain of back-and-forth: proposed times, calendar conflicts, a reschedule, a second reschedule. Multiply that by every candidate in every open role and the hiring manager’s week disappears into logistics instead of decisions. Candidates notice the friction too, and the ones with other offers on the table are the ones most likely to walk away from it.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>There is nothing to hand auditors, or your own new hire</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>When a hiring decision gets questioned, a spreadsheet and a scattering of email threads is a weak record to produce. And when the candidate finally accepts, someone has to retype their information into onboarding and payroll by hand, introducing the exact kind of manual error a growing company can least afford. <Link href="/services/applicant-tracking-system/what-is-an-applicant-tracking-system">What an ATS actually does</Link> covers how a real pipeline replaces every one of these manual steps.</p>
              </div>
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.5rem', textAlign: 'center' }}>
              Sources:{' '}
              <a href="https://www.shrm.org/topics-tools/research" target="_blank" rel="noopener noreferrer">SHRM research, time to fill and cost per hire benchmarks</a>
              {' '}and{' '}
              <a href="https://www.bls.gov/news.release/jolts.nr0.htm" target="_blank" rel="noopener noreferrer">BLS JOLTS, quits and labor turnover data</a>.
            </p>
          </div>
        </section>

        {/* BEG POSITIONING */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Where BEG Fits</p>
              <h2>One pipeline, configured for your roles, supported by BEG</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                BEG resells, configures, and supports isolved Attract &amp; Hire so your team stops chasing resumes across inboxes and spreadsheets. Applicants land in one pipeline, interviews get scheduled without the email chain, and a hire flows straight into isolved onboarding and payroll. See <Link href="/services/applicant-tracking-system/isolved-attract-hire">what is inside isolved Attract &amp; Hire</Link> or <Link href="/services/applicant-tracking-system/ats-pricing">check ATS pricing</Link> to see where it fits your budget.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hcm-software" />
            </div>
          </div>
        </section>

        {/* CROSS-SILO */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Rest of the Stack</p>
              <h2>Hiring is one piece. BEG handles what comes after too.</h2>
            </div>
            <div className="beg-grid-3 reveal" style={{ marginTop: '2rem' }}>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Applicant tracking system</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  Back to the <Link href="/services/applicant-tracking-system">Applicant Tracking System</Link> overview for the full picture.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>New hire accepted. Now what?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/managed-payroll">Managed payroll services</Link> take the new hire straight from your pipeline into a running payroll, every cycle handled.
                </p>
              </div>
              <div style={{ background: '#f9f9f9', borderRadius: '8px', padding: '1.5rem' }}>
                <strong style={{ display: 'block', marginBottom: '0.4rem' }}>Want to see the cost first?</strong>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: '0 0 0.75rem' }}>
                  <Link href="/services/applicant-tracking-system/ats-pricing">See ATS pricing</Link> before you talk to anyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>ATS vs spreadsheets, answered</h2>
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
