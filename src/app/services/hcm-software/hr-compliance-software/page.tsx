import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HR Compliance Software | BEG',
  description: 'HR compliance software for tax filings, ACA, new-hire reporting, and audit trails that stay current. iSolved compliance configured and supported by BEG.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/hr-compliance-software' },
  openGraph: {
    title: 'HR Compliance Software | BEG',
    description: 'HR compliance software for tax filings, ACA, new-hire reporting, and audit trails that stay current. iSolved compliance configured and supported by BEG.',
    url: 'https://beghr.com/services/hcm-software/hr-compliance-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HR Compliance Software | BEG', description: 'HR compliance software for tax filings, ACA, new-hire reporting, and audit trails that stay current. iSolved compliance configured and supported by BEG.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does HR compliance software do?',
    a: 'HR compliance software handles the filings and records employers are legally required to maintain, including payroll tax filings, ACA reporting, new-hire reporting, and audit trails. It keeps these current as rules change, so compliance is routine rather than a scramble.',
  },
  {
    q: 'How does iSolved support HR compliance?',
    a: 'iSolved files payroll taxes, produces ACA forms, handles new-hire reporting, and keeps an audit trail of changes, all on one connected platform. Because the data lives in one place, the records that back up a filing or an audit are always consistent.',
  },
  {
    q: 'Does iSolved handle ACA reporting?',
    a: 'Yes. iSolved tracks hours, measures eligibility, and generates the 1094-C and 1095-C forms ACA requires. BEG configures your measurement periods and affordability settings so the reporting reflects how you actually staff.',
  },
  {
    q: 'How does iSolved help with audits?',
    a: 'iSolved keeps an audit trail of who changed what and when across payroll and HR records. When an auditor or agency asks for documentation, you can produce consistent records from one system instead of reassembling them from several tools.',
  },
  {
    q: 'How does compliance software stay current with changing rules?',
    a: 'Tax rates, thresholds, and reporting requirements change constantly. Compliance software built into an HCM platform updates these rules centrally, so your filings reflect current requirements without your team tracking every change by hand.',
  },
  {
    q: 'Why use BEG to manage HR compliance?',
    a: 'BEG configures your tax, ACA, and reporting setup, then supports you as rules and your workforce change. You work with one BEG contact who knows your obligations rather than a general support queue when a deadline or audit comes up.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'HR Compliance Software', item: 'https://beghr.com/services/hcm-software/hr-compliance-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://beghr.com/services/hcm-software/hr-compliance-software',
};

export default function HRComplianceSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · HR Compliance</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>HR Compliance Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Compliance is not a project you finish, it is a state you maintain. The right software keeps filings, ACA, reporting, and audit trails current. Here is what to look for and how iSolved plus BEG handles it.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="tldr" style={{ background: '#f9f9f9', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
            <p style={{ fontWeight: '700', margin: '0 0 0.5rem', color: '#000000', letterSpacing: '0.04em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Bottom line</p>
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Strong HR compliance software handles payroll tax filings, ACA reporting, new-hire reporting, and audit trails, and keeps them current as rules change. iSolved delivers this on one connected platform where the records are consistent, and BEG configures and supports your compliance setup so deadlines and audits are routine.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is HR compliance software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            HR compliance software manages the filings, reports, and records employers are legally obligated to maintain. That includes payroll tax filings at the federal, state, and local level, ACA tracking and reporting, new-hire reporting to the states, and a clear audit trail of changes. The goal is to make compliance a byproduct of running payroll and HR correctly, not a separate annual fire drill.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for automated tax filing in every jurisdiction you operate, built-in ACA measurement and form generation, new-hire reporting, and a complete audit trail. Just as important is whether the platform updates rules centrally as they change, because compliance you have to track by hand is compliance you will eventually miss.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Compliance is high-stakes and constantly moving. Tax rates and thresholds change, ACA requirements evolve, and each state has its own new-hire reporting and filing rules. When this work is spread across spreadsheets and disconnected tools, something eventually slips, and the cost of a missed filing or a failed audit is penalties and lost time.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Documentation is the other half of the problem. When an agency asks for records, you need a consistent trail of who changed what and when. If that history is scattered across systems, an audit becomes a reconstruction project. Compliance software solves both by automating the filings and keeping the records that back them up in one place.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How iSolved handles compliance as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved files payroll taxes, generates ACA forms, handles new-hire reporting, and maintains an audit trail across payroll and HR. Because it is one connected platform, the data behind every filing is the same data that runs payroll, so the records are consistent and the documentation an audit needs is already assembled.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Central rule updates are what keep you current. Because more than 7 million employees are managed on iSolved, the platform is built to maintain compliance at scale across many jurisdictions and the changes that hit them throughout the year.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            HR compliance is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>iSolved HCM platform</Link>, and your team can check filing status or pull compliance records through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>iSolved Connector for Claude</Link> rather than digging through screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Compliance setup has to match your specific obligations. Which jurisdictions you file in, your ACA measurement periods, your reporting calendars, and the records you need to retain all require configuration. BEG implements, configures, and supports your compliance setup, and stays current with you as rules and your workforce change.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            iSolved carries a Forrester-documented 330% ROI, and in compliance that return shows up where automated filings and clean records prevent penalties and the time lost to audits and corrections. When a rule changes or a deadline approaches, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single compliance setup fits every employer, and an honest answer should say so. A small single-state company has lighter obligations than an applicable large employer operating across many states. The value of full compliance automation grows with headcount, the number of jurisdictions you file in, and whether ACA applies to you.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how many jurisdictions you file in, whether you are an applicable large employer for ACA, how exposed you feel on audits and recordkeeping, and whether you want a partner managing compliance or prefer to handle it yourself. iSolved is a strong fit when compliance complexity is in the picture and you want BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <div className="faq">
            {faqs.map(({ q, a }, i) => (
              <div key={i} className="faq-item" style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
                <h3 style={{ display: 'block', marginBottom: '0.4rem', fontSize: '1.05rem', fontWeight: 700 }}>{q}</h3>
                <p style={{ margin: 0, color: '#444', lineHeight: '1.6' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See HR compliance in iSolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your filing obligations, ACA status, and recordkeeping, and show you what iSolved plus BEG looks like for staying compliant.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
