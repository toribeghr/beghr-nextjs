import { Metadata } from 'next';
import Link from 'next/link';
import FinalPaycheckCalculator from '@/components/FinalPaycheckCalculator';

export const metadata: Metadata = {
  title: 'ACA Compliance Software | BEG',
  description: 'ACA compliance software for hours tracking, eligibility, affordability, and 1094-C and 1095-C filing. iSolved on one connected platform, supported by BEG.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/aca-compliance-software' },
  openGraph: {
    title: 'ACA Compliance Software | BEG',
    description: 'ACA compliance software for hours tracking, eligibility, affordability, and 1094-C and 1095-C filing. iSolved on one connected platform, supported by BEG.',
    url: 'https://beghr.com/services/hcm-software/aca-compliance-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'ACA Compliance Software | BEG', description: 'ACA compliance software for hours tracking, eligibility, affordability, and 1094-C and 1095-C filing. iSolved on one connected platform, supported by BEG.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does ACA compliance software do?',
    a: 'ACA compliance software tracks employee hours, measures eligibility against your measurement periods, checks affordability, and generates the 1094-C and 1095-C forms the IRS requires. It turns year-end filing from a manual scramble into a process that runs on the data you already capture.',
  },
  {
    q: 'How does iSolved track ACA hours and eligibility?',
    a: 'iSolved measures hours worked against the measurement, administrative, and stability periods you define, then flags which employees become eligible for an offer of coverage. Because hours come from the same platform that runs time and payroll, the measurement uses real data.',
  },
  {
    q: 'Can iSolved generate 1094-C and 1095-C forms?',
    a: 'Yes. iSolved produces the 1094-C and 1095-C forms ACA reporting requires, populated from your coverage, eligibility, and affordability data. Keeping the forms on the same platform as the underlying data reduces the rekeying and reconciliation that cause filing errors.',
  },
  {
    q: 'How does affordability checking work?',
    a: 'iSolved compares the cost of your lowest-cost offer against the applicable affordability threshold using the safe harbor you choose. That lets you see whether an offer is affordable under ACA rules before filing, rather than discovering a problem after forms go out.',
  },
  {
    q: 'Why use BEG to implement ACA compliance?',
    a: 'BEG configures your measurement periods, affordability safe harbors, and coverage data so filings reflect how you actually staff and offer coverage. You work with one BEG contact who knows your setup rather than a general support queue.',
  },
  {
    q: 'Does ACA reporting apply to my company?',
    a: 'It depends on size. ACA employer reporting generally applies to applicable large employers, those with 50 or more full-time and full-time-equivalent employees. If you are near that threshold, accurate hours tracking matters even more. BEG will help you assess where you stand.',
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
    { '@type': 'ListItem', position: 3, name: 'ACA Compliance Software', item: 'https://beghr.com/services/hcm-software/aca-compliance-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://beghr.com/services/hcm-software/aca-compliance-software',
};

export default function AcaComplianceSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · ACA Compliance</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>ACA Compliance Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            ACA hours tracking, eligibility, affordability, and 1094-C and 1095-C filing work best on the same platform that captures the hours. Here is what to look for and how iSolved plus BEG handles it.
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
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Good ACA compliance software tracks hours, measures eligibility, checks affordability, and generates the 1094-C and 1095-C forms the IRS requires. iSolved does all of this on the same connected platform that runs time and payroll, and BEG configures your measurement periods and safe harbors so filings match how you staff.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is ACA compliance software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            ACA compliance software helps an employer meet the Affordable Care Act reporting requirements. It tracks employee hours, measures who qualifies as full time over your defined periods, checks whether your coverage offer is affordable, and produces the 1094-C and 1095-C forms that go to the IRS and to employees. The right tool keeps this running on data you already capture instead of a year-end reconstruction.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for four things. Hours tracking that uses real time and payroll data, not estimates. Eligibility measurement against the measurement, administrative, and stability periods you define. Affordability checking against the current threshold using a safe harbor. And form generation for the 1094-C and 1095-C from that same data. ACA software that sits apart from time and payroll forces you to import hours, which is exactly where errors and missed eligibility creep in.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The core problem is penalty risk built on bad data. ACA eligibility depends on hours worked over time, and if those hours live in a system separate from your tracking, you can miss an employee who crossed the full-time threshold and owed an offer of coverage. The cost of getting eligibility wrong is not just rework, it is potential IRS penalties.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The second problem is the year-end scramble. Pulling hours, reconstructing eligibility, checking affordability, and assembling 1094-C and 1095-C forms by hand at filing time is slow and error-prone. ACA compliance software solves both by measuring eligibility continuously from real hours and generating the forms from the same data, so filing is a confirmation rather than a reconstruction.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How iSolved handles ACA as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved runs ACA compliance inside the same platform that runs your time, payroll, and benefits. It measures hours against the measurement, administrative, and stability periods you define, flags which employees become eligible for an offer of coverage, and checks affordability against the applicable threshold using the safe harbor you choose. Because the hours come from the same system, the measurement uses real data.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            At filing time iSolved produces the 1094-C and 1095-C forms, populated from your coverage, eligibility, and affordability data. Because more than 7 million employees are managed on iSolved, ACA tracking is proven across the staffing patterns, variable-hour workforces, and reporting demands employers of every size face.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            ACA compliance is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>iSolved HCM platform</Link>, and your team can check eligibility status or pull an ACA report through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>iSolved Connector for Claude</Link> rather than clicking through screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            ACA configuration carries real consequences. Measurement period lengths, administrative and stability periods, affordability safe harbors, and how coverage offers are recorded all have to match how you actually staff and offer coverage. BEG configures these settings, validates your data, and supports you through each filing season so the forms are right the first time.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            iSolved carries a Forrester-documented 330% ROI, and in ACA that return shows up where continuous measurement from real hours and form generation from the same data cut filing labor and penalty risk. When your workforce shifts, you change a safe harbor, or filing season arrives, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single setup fits every employer, and an honest answer should say so. ACA employer reporting generally applies to applicable large employers, those with 50 or more full-time and full-time-equivalent employees, so a smaller employer may not file at all. The value rises with variable-hour staff, seasonal swings, and how close you sit to the threshold.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are whether you are an applicable large employer, how much your hours fluctuate, and whether your hours data already lives where you track eligibility. iSolved is a strong fit when ACA applies to you and you want eligibility measured from real hours with BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
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

      <section className="section section--soft" style={{ paddingBottom: 0 }}>
        <div className="container" style={{ maxWidth: 760, textAlign: 'center' }}>
          <p className="eyebrow">Free Tool</p>
          <h2 style={{ marginBottom: '0.5rem' }}>Free tool: find the final paycheck deadline by state</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Pick a state, choose fired or quit, and get the exact deadline plus the PTO payout rule. All 50 states, free, runs in your browser.</p>
        </div>
      </section>
      <FinalPaycheckCalculator />
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See ACA compliance in iSolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your measurement periods, look at how you file today, and show you what iSolved plus BEG looks like for your team.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
