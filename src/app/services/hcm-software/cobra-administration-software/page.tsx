import { Metadata } from 'next';
import Link from 'next/link';
import FinalPaycheckCalculator from '@/components/FinalPaycheckCalculator';

export const metadata: Metadata = {
  title: 'COBRA Administration Software | BEG',
  description: 'COBRA administration software for notices, elections, premium payments, and strict compliance timelines. isolved on one connected platform, supported by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/cobra-administration-software' },
  openGraph: {
    title: 'COBRA Administration Software | BEG',
    description: 'COBRA administration software for notices, elections, premium payments, and strict compliance timelines. isolved on one connected platform, supported by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/cobra-administration-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'COBRA Administration Software | BEG', description: 'COBRA administration software for notices, elections, premium payments, and strict compliance timelines. isolved on one connected platform, supported by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does COBRA administration software do?',
    a: 'COBRA administration software sends the required notices, tracks elections, collects premium payments, and manages the strict timelines COBRA imposes. It keeps an employer compliant when employees lose coverage, so notices go out on time and payments are recorded correctly.',
  },
  {
    q: 'How does isolved handle COBRA notices and elections?',
    a: 'isolved triggers COBRA notices from the qualifying events it already sees, such as a termination or reduction in hours, and tracks each qualified beneficiary through the election window. Because the event data comes from the same platform, notices are not missed when someone leaves.',
  },
  {
    q: 'Can isolved track COBRA payments?',
    a: 'Yes. The isolved platform tracks premium payments against each participant, flags missed or late payments within the grace period, and records the status that determines whether coverage continues. That removes the manual ledger most employers keep for COBRA payments.',
  },
  {
    q: 'How does it keep us within COBRA timelines?',
    a: 'COBRA runs on deadlines, from the notice window after a qualifying event to the election and payment periods. The isolved platform tracks these timelines per participant so the right notice goes out and the right status applies, which is exactly where manual COBRA administration tends to fail.',
  },
  {
    q: 'Why use BEG to implement COBRA administration?',
    a: 'BEG configures your qualifying event triggers, notice templates, plans, and payment tracking so COBRA runs correctly from each event forward. You work with one BEG contact who knows your setup rather than a general support queue.',
  },
  {
    q: 'Do we have to offer COBRA at all?',
    a: 'It depends on size. Federal COBRA generally applies to employers with 20 or more employees, and some states have similar continuation rules for smaller employers. If COBRA applies to you, the deadlines are strict. BEG will help you confirm your obligations.',
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
    { '@type': 'ListItem', position: 1, name: 'Services', item: 'https://www.beghr.com/services' },
    { '@type': 'ListItem', position: 2, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
    { '@type': 'ListItem', position: 3, name: 'COBRA Administration Software', item: 'https://www.beghr.com/services/hcm-software/cobra-administration-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://www.beghr.com/services/hcm-software/cobra-administration-software',
};

export default function CobraAdministrationSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · COBRA Administration</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>COBRA Administration Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            COBRA notices, elections, payments, and compliance timelines run more safely when qualifying events come straight from your HCM platform. Here is what to look for and how isolved plus BEG handles it.
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
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Good COBRA administration software sends required notices on time, tracks elections, collects premium payments, and keeps you inside strict compliance timelines. The isolved platform does this on the same connected platform that already sees your qualifying events, and BEG configures and supports it so notices are never missed when someone loses coverage.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is COBRA administration software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            COBRA administration software manages continuation of health coverage after a qualifying event such as a termination or reduction in hours. It sends the legally required notices, tracks each qualified beneficiary through the election window, collects premium payments, and manages the deadlines that govern the whole process. The right tool removes the manual notice-and-ledger system most employers cobble together for COBRA.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for four things. Notices that trigger automatically from qualifying events so nothing depends on someone remembering. Election tracking through the response window. Payment tracking with grace-period handling and status that determines whether coverage continues. And timeline management built around COBRA deadlines. COBRA administration that lives apart from your HR events is one missed termination away from a compliance failure.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The core problem is deadlines and liability. COBRA imposes strict windows for notices, elections, and payments, and a missed or late notice can expose the employer to penalties and the cost of coverage. When the people running payroll and HR are different from whoever sends COBRA notices, a single termination can slip through without a notice ever going out.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The second problem is payment tracking. COBRA participants pay their own premiums, often late or partially, and tracking who paid, who is in a grace period, and whose coverage should lapse is tedious and error-prone on a spreadsheet. COBRA administration software solves both by triggering notices from real events and tracking elections and payments against firm deadlines.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How isolved handles COBRA as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved handles COBRA inside the same platform that runs your HR, benefits, and payroll, so it sees the qualifying events directly. A termination or reduction in hours triggers the required notices, and each qualified beneficiary is tracked through the election window without anyone having to remember to start the clock. That connection is the single biggest reason COBRA gets handled correctly.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved tracks premium payments against each participant, flags missed or late payments within the grace period, and records the status that determines whether coverage continues. Because more than 7 million employees are managed on isolved, COBRA administration is proven across the qualifying events, plan structures, and timeline rules employers of every size face.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            COBRA administration is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>isolved HCM platform</Link>, and your team can check a participant status or pull a COBRA report through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>isolved Connector for Claude</Link> rather than clicking through screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            COBRA setup has no room for guesswork. Qualifying event triggers, notice templates, the plans available for continuation, and payment tracking all have to be configured so the right notice goes out the moment an event occurs. BEG configures these settings, ties them to your event data, and supports you as plans and rules change.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            isolved carries a Forrester-documented 330% ROI, and in COBRA that return shows up where event-triggered notices and automated payment tracking remove the risk of a missed notice and the labor of a manual ledger. When you change plans, add a location, or face an unusual qualifying event, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single setup fits every employer, and an honest answer should say so. Federal COBRA generally applies to employers with 20 or more employees, though some states extend similar continuation rules to smaller employers. A very small employer may not be subject to COBRA at all, and the value of automation rises with turnover and the number of plans you offer.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are whether COBRA or a state continuation rule applies to you, how often you have qualifying events, and whether your notices are tied to real HR events today. The isolved platform is a strong fit when COBRA applies and you want notices triggered from your own event data with BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See COBRA administration in isolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through how you handle qualifying events today, look at your notice and payment tracking, and show you what isolved plus BEG looks like for your team.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
