import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import PricingCta from '@/components/pricing/PricingCta';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Accounting & CPA Firm HR Outsourcing | Instant Estimate | BEG',
  description: 'HR outsourcing for accounting firms: busy-season overtime risk, CPA license and CPE tracking, and retention policies handled. Get your instant estimate.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/accounting-cpa' },
  openGraph: {
    title: 'Accounting & CPA Firm HR Outsourcing | Instant Estimate | BEG',
    description: 'HR outsourcing for accounting firms: busy-season overtime risk, CPA license and CPE tracking, and retention policies handled. Get your instant estimate.',
    url: 'https://www.beghr.com/services/hr-outsourcing/accounting-cpa',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Accounting & CPA Firm HR Outsourcing | Instant Estimate | BEG', description: 'HR outsourcing for accounting firms: busy-season overtime risk, CPA license and CPE tracking, and retention policies handled. Get your instant estimate.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hr-outsourcing-accounting-cpa');

const FAQS: [string, string][] = [
  [
    'What does HR outsourcing include for an accounting firm?',
    'Certified HR professionals handle your handbook, exempt classification review, CPA license and CPE tracking policies, confidentiality and independence policies, and manager coaching, sized to a firm instead of a national HR department.',
  ],
  [
    'Can it fix our exempt classification before busy season?',
    'Yes. HR professionals review roles against the salary and duties tests, flag staff accountants who are misclassified, and document the analysis, so seventy-hour February weeks do not become an overtime claim.',
  ],
  [
    'Does it help with retention during counter-offer season?',
    'It builds the framework: documented compensation practices, stay-conversation coaching for partners, and enforceable non-solicit agreements drafted for your states, so departures do not take clients and staff with them.',
  ],
  [
    'Is this a PEO for CPA firms?',
    'No. There is no co-employment and no employer-of-record change. Your firm stays the employer; the HR professionals support your team. Powered by isolved.',
  ],
  [
    'What does accounting firm HR outsourcing cost?',
    'A fraction of an in-house HR manager. Answer six questions in the estimate form and your monthly range appears on screen; exact pricing is confirmed on your discovery call.',
  ],
];

export default function HrOutsourcingAccountingCpaPage() {
  return (
    <>
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
              { '@type': 'ListItem', position: 3, name: 'Accounting & CPA Firms', item: 'https://www.beghr.com/services/hr-outsourcing/accounting-cpa' },
            ],
          }),
        }}
      />
      <ServicePage
        showHeroImage={false}
        eyebrow="HR Outsourcing · Accounting & CPA Firms"
        title="You keep every client compliant. Who is doing that for your firm?"
        description="Busy-season overtime exposure, CPA licenses and CPE hours on renewal clocks, independence rules that live in employment policies, and a counter-offer season every spring: accounting firm HR has its own deadlines. BEG HR outsourcing, powered by isolved, puts certified HR professionals on it for a fraction of an in-house HR hire."
        calendlyLink={CALENDLY}
        heroCta={<PricingCta service="hr-outsourcing" />}
        heroStats={[
          { value: 'All 50', label: 'States covered' },
          { value: '8AM-8PM ET', label: 'Live HR pro access, weekdays' },
          { value: 'Not a PEO', label: 'You stay the employer' },
        ]}
      >
        {/* PAIN */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">The Accounting Firm HR Problem</p>
              <h2>Client deadlines get the all-nighters. Employment compliance gets whatever is left.</h2>
            </div>
            <div className="beg-grid-3 reveal">
              {[
                {
                  stat: '$60K-$100K/yr',
                  label: 'An in-house HR manager, before professional-services complexity',
                  sub: 'Firms under a few hundred employees rarely have the volume to justify that hire, so HR lands on the managing partner or the firm administrator, on top of their own client work.',
                },
                {
                  stat: '70 hrs',
                  label: 'A February week for staff, and a misclassification claim in waiting',
                  sub: 'The professional exemption is not automatic for every accountant. A misclassified staff accountant working busy-season hours accrues unpaid overtime with every timesheet.',
                },
                {
                  stat: 'Every spring',
                  label: 'Counter-offer season arrives right after the deadline does',
                  sub: 'Recruiters call your seniors in May with fresh offers. Retention without documented pay practices and enforceable non-solicits is improvisation with your best people and your client list.',
                },
              ].map(({ stat, label, sub }) => (
                <div key={stat} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#000000', lineHeight: 1 }}>{stat}</div>
                  <div style={{ fontWeight: '600', margin: '0.5rem 0 0.4rem', fontSize: '0.95rem' }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: '#666666', lineHeight: '1.5' }}>{sub}</div>
                </div>
              ))}
            </div>
            <p className="reveal" style={{ fontSize: '0.82rem', color: '#888888', marginTop: '1.25rem', textAlign: 'center' }}>
              Source: <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer">U.S. Department of Labor, overtime pay requirements</a>.
            </p>
          </div>
        </section>

        {/* COMPLIANCE DEEP DIVE */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Accounting Firm HR Compliance</p>
              <h2>The employment problems specific to accounting, and who handles them</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', marginTop: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Busy-season hours and the exempt-misclassification trap</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>The learned professional exemption covers accountants whose work requires advanced knowledge and consistent judgment, but a first-year staff accountant doing routine tie-outs under close review is a harder case than most partners assume, and the salary threshold has to be met besides. During busy season the stakes multiply: a misclassified employee working seventy-hour weeks accrues time-and-a-half liability on thirty of them, every week, going back two or three years. HR outsourcing reviews each role against the duties and salary tests, documents the analysis, and fixes classifications in the fall, when it is a payroll adjustment instead of a settlement.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>CPA license and CPE tracking that does not live in a partner&apos;s inbox</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Every CPA in the firm has a license on a renewal cycle and CPE hours due to a state board, and multi-state practices multiply the tracking: different reporting periods, different hour requirements, different ethics components. A lapsed license discovered mid-engagement is a quality control problem, a client communication problem, and in an attest practice a regulatory one. HR outsourcing builds credential tracking as an employment process: verification at hire, renewal policies with lead time, job descriptions that state licensure requirements, and personnel files that show the firm checked rather than assumed. The firm administrator stops chasing certificates by email every December.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Confidentiality and independence rules, written into employment documents</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Client confidentiality in an accounting firm is not a courtesy, it is a professional obligation, and independence rules reach into employees&apos; personal lives: financial interests in attest clients, family relationships, outside business activities. Those obligations only bind staff if they are written into employment documents, acknowledged, and enforced: confidentiality agreements at hire, annual independence attestations for the right roles, and policies covering what happens when a conflict surfaces mid-engagement. HR outsourcing drafts those documents to work alongside your quality management standards, so the ethics rules your licenses depend on have an employment-law backbone instead of a verbal tradition.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Counter-offer season, non-solicits, and keeping the book intact</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Public accounting departures cluster after deadlines, and the damage is rarely just the seat: a departing senior can take clients, and a departing manager can take staff. Non-solicitation agreements are the standard protection, but enforceability varies sharply by state and by how the agreement was drafted and signed. The retention side matters just as much: documented salary bands, promotion criteria in writing, and partners coached to have stay conversations before the recruiter does. HR outsourcing handles both halves, the agreements and the practices, so talent acquisition at your competitors&apos; expense stops being a one-way street pointed at your firm.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.6rem', color: '#000000' }}>Remote and multi-state seasonal staff without the compliance sprawl</h3>
                <p style={{ margin: 0, color: '#444444', lineHeight: '1.7', fontSize: '0.97rem' }}>Busy season now runs on remote reviewers, seasonal preparers, and staff who moved two states away and kept the job. Each work location brings its own wage laws, leave mandates, pay statement rules, and registration obligations, and a seasonal hire in a new state triggers them just as fully as a permanent one. Interns add their own wrinkle: unpaid internships in a for-profit firm almost never survive scrutiny. HR outsourcing keeps a map of where your people actually work, applies the right state rules to each, and builds seasonal onboarding and offboarding packets so January hiring is fast and clean.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS SERVES */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Who This Serves</p>
              <h2>Firms big enough to have HR risk, too lean for an HR department</h2>
            </div>
            <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
              {[
                { title: 'Full-service CPA firms', body: 'Tax, audit, and advisory under one roof, with classification, licensure, and independence obligations across all of it.' },
                { title: 'Tax-focused practices', body: 'Seasonal preparers, overtime exposure concentrated in ten brutal weeks, and onboarding that repeats every January.' },
                { title: 'Audit and attest practices', body: 'Independence attestations, CPE compliance tied to peer review, and confidentiality policies with regulatory weight.' },
                { title: 'Client accounting and CAS practices', body: 'Remote bookkeepers and controllers across states, each work location adding its own employment rulebook.' },
                { title: 'Fractional CFO and advisory shops', body: 'High-value professionals, non-solicit stakes, and employment documents that protect the client relationships.' },
                { title: 'Multi-office regional firms', body: 'Offices grown by merger, each with legacy policies, pay practices, and handbooks that no longer match.' },
              ].map(({ title, body }) => (
                <div key={title} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
                  <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '0.97rem' }}>{title}</strong>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#555555', lineHeight: '1.55' }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANS + CROSS-LINKS */}
        <section className="section">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">How You Buy It</p>
              <h2>Three plans, one instant estimate</h2>
              <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
                Essential is answers on demand from live HR professionals. Expert adds the done-for-you compliance assets: your handbook, posters, new hire packets, and leave guidance. Elite adds a dedicated HR Business Partner with proactive compliance alerts. Full detail on the <Link href="/services/hr-outsourcing">HR outsourcing overview</Link>.
              </p>
            </div>
            <div className="reveal" style={{ marginTop: '2rem', textAlign: 'center' }}>
              <PricingCta service="hr-outsourcing" />
            </div>
            <p className="reveal" style={{ fontSize: '0.9rem', color: '#555555', textAlign: 'center', marginTop: '2rem', lineHeight: '1.7' }}>
              Payroll the bigger headache? BEG&apos;s core service is <Link href="/services/managed-payroll/accounting-cpa">managed payroll for accounting firms</Link>. Serving medical practice clients? See <Link href="/services/hr-outsourcing/healthcare">HR outsourcing for healthcare</Link>.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="section section--soft">
          <div className="container" style={{ maxWidth: '820px' }}>
            <div className="head center reveal">
              <p className="eyebrow">Questions</p>
              <h2>Accounting firm HR outsourcing, answered</h2>
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
