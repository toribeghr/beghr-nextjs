import { Metadata } from 'next';
import Link from 'next/link';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Onboarding Software | BEG',
  description: 'Onboarding software for new-hire workflows, e-signature, I-9 and W-4 forms, and first-day readiness. iSolved onboarding on one platform, supported by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/onboarding-software' },
  openGraph: {
    title: 'Onboarding Software | BEG',
    description: 'Onboarding software for new-hire workflows, e-signature, I-9 and W-4 forms, and first-day readiness. iSolved onboarding on one platform, supported by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/onboarding-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Onboarding Software | BEG', description: 'Onboarding software for new-hire workflows, e-signature, I-9 and W-4 forms, and first-day readiness. iSolved onboarding on one platform, supported by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does onboarding software do?',
    a: 'Onboarding software guides new hires through everything that has to happen before day one, including offer acceptance, tax and eligibility forms, e-signatures, and policy acknowledgments. The completed data then populates payroll and HR with no rekeying.',
  },
  {
    q: 'How does iSolved handle new-hire workflows?',
    a: 'iSolved gives each new hire a guided online checklist that walks them through forms, documents, and acknowledgments at their own pace. HR sees progress in real time and gets alerted when anything is missing before the start date.',
  },
  {
    q: 'Does iSolved support e-signature for new hires?',
    a: 'Yes. New hires review and sign documents electronically inside iSolved, from offer letters to policy acknowledgments. Signed records are stored with the employee file, so there is no chasing paper or filing PDFs by hand.',
  },
  {
    q: 'Can iSolved collect I-9 and W-4 forms?',
    a: 'Yes. iSolved collects the I-9, W-4, and state withholding forms during onboarding with built-in validation, so the required fields are complete and accurate. The data flows into payroll, so the first paycheck is set up correctly.',
  },
  {
    q: 'How does onboarding software ensure first-day readiness?',
    a: 'By moving paperwork before the start date, onboarding software lets new hires arrive ready to work instead of sitting in a conference room signing forms. HR confirms every item is complete, so day one is about the role, not the file.',
  },
  {
    q: 'Why use BEG to implement onboarding?',
    a: 'BEG configures your onboarding workflows, document packets, and required forms to match your hiring process, then supports them as roles and policies change. You work with one BEG contact who knows your setup, not a support queue.',
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
    { '@type': 'ListItem', position: 3, name: 'Onboarding Software', item: 'https://www.beghr.com/services/hcm-software/onboarding-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://www.beghr.com/services/hcm-software/onboarding-software',
};

export default function OnboardingSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Onboarding</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Onboarding Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            A great first day starts before the start date. The right onboarding software moves new-hire paperwork online and gets data into payroll cleanly. Here is what to look for and how iSolved plus BEG handles it.
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
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Good onboarding software runs new-hire workflows online, captures e-signatures, collects I-9 and W-4 forms accurately, and gets people ready for day one. iSolved does all of this on one connected platform, so onboarding data flows into payroll, and BEG configures and supports it for your hiring process.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is onboarding software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Onboarding software manages everything between a signed offer and a productive first day. It guides new hires through forms, documents, and acknowledgments online, collects the legally required paperwork, and routes everything for review so HR can confirm a person is ready before they walk in.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for guided new-hire workflows the employee completes on their own, electronic signature on every document, built-in I-9, W-4, and state withholding collection with validation, and a direct connection into payroll and HR so the data is entered once. The real test is whether onboarding eliminates the day-one paperwork pile or just digitizes it.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Manual onboarding is slow, error-prone, and a poor first impression. A new hire spends their first morning filling out forms by hand, HR rekeys that data into payroll, and a missing signature or an incomplete I-9 is not caught until later. None of that work shows the new employee they made a good choice.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            There is compliance risk too. The I-9 and tax forms have strict requirements, and incomplete or late paperwork creates exposure. Onboarding software solves both problems by moving the process online, validating required fields, and feeding clean data into payroll so the first paycheck is right and the file is complete.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How iSolved handles onboarding as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved gives each new hire a guided online onboarding experience. They review and e-sign documents, complete the I-9, W-4, and state withholding forms, and acknowledge policies before day one. HR tracks progress in real time, and because iSolved is one connected platform, that information populates the employee record and payroll automatically.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            That single-platform flow is what makes day one clean. Because more than 7 million employees are managed on iSolved, the onboarding process is proven across hiring volumes and role types, from a single new hire to a seasonal wave.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Onboarding is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>iSolved HCM platform</Link>, and HR can check onboarding status or new-hire progress through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>iSolved Connector for Claude</Link> rather than clicking through screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            A good onboarding flow reflects how you actually hire. The document packets, required forms, approval steps, and role-specific tasks all need configuring. BEG implements, configures, and supports your onboarding workflows to match your process, and updates them as roles, states, and policies change.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            iSolved carries a Forrester-documented 330% ROI, and in onboarding that return shows up where accurate first-time data entry removes rework and keeps the first paycheck correct. When you add a role, open a location in a new state, or revise a form, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single onboarding setup fits every employer, and an honest answer should say so. A company that hires a few people a year has different needs than one running constant or seasonal hiring across several states. The value of automated onboarding grows with hiring volume and the complexity of your paperwork.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how often you hire, how many states you hire across, how many forms and acknowledgments each new hire needs, and whether you want a partner configuring the workflows or prefer to manage them yourself. iSolved is a strong fit when hiring volume and compliance are in the picture and you want BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
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
          <h2 style={{ marginBottom: '0.5rem' }}>What does this employee really cost you?</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Add taxes, benefits, and overhead to base pay and see the fully loaded annual and hourly cost. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <TrueCostCalculator />
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See onboarding in iSolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your hiring process and forms, and show you what iSolved plus BEG looks like for getting new hires ready before day one.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
