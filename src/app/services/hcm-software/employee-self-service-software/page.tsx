import { Metadata } from 'next';
import Link from 'next/link';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Employee Self-Service Software | Instant Quote | BEG',
  description: 'Employee self-service software so staff update info, view pay stubs, and request PTO online. Fewer HR tickets with isolved, configured and supported by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/employee-self-service-software' },
  openGraph: {
    title: 'Employee Self-Service Software | Instant Quote | BEG',
    description: 'Employee self-service software so staff update info, view pay stubs, and request PTO online. Fewer HR tickets with isolved, configured and supported by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/employee-self-service-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Employee Self-Service Software | Instant Quote | BEG', description: 'Employee self-service software so staff update info, view pay stubs, and request PTO online. Fewer HR tickets with isolved, configured and supported by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What is employee self-service software?',
    a: 'Employee self-service software gives staff secure online access to their own HR data. They update personal details, view and download pay stubs and tax forms, request time off, and manage benefits without sending a request to HR for every change.',
  },
  {
    q: 'How does isolved employee self-service work?',
    a: 'isolved gives every employee a secure portal and mobile app where they see pay stubs, update contact and direct deposit details, request PTO, and review benefits. Because it is one connected platform, their changes update payroll and HR records directly.',
  },
  {
    q: 'Can employees view pay stubs and tax forms in isolved?',
    a: 'Yes. Employees view and download current and past pay stubs and year-end tax forms anytime from the isolved portal or mobile app. That removes a large share of the routine requests that land on HR every pay period.',
  },
  {
    q: 'How does self-service reduce HR tickets?',
    a: 'Most HR requests are routine lookups and updates, like address changes, pay stub copies, and PTO balances. When employees handle those themselves through self-service, HR stops fielding them one by one and gets time back for higher-value work.',
  },
  {
    q: 'Can employees request time off through self-service?',
    a: 'Yes. Employees see their PTO balances, submit time off requests, and track approval status in isolved. Approved requests update the schedule and the timecard automatically, so nothing has to be re-entered by a manager or HR.',
  },
  {
    q: 'Why use BEG to implement employee self-service?',
    a: 'BEG configures the self-service portal, permissions, and workflows to fit your policies, then supports them as your team changes. You work with one BEG contact who knows your setup rather than a general support queue.',
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
    { '@type': 'ListItem', position: 3, name: 'Employee Self-Service Software', item: 'https://www.beghr.com/services/hcm-software/employee-self-service-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://www.beghr.com/services/hcm-software/employee-self-service-software',
};

export default function EmployeeSelfServiceSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Employee Self-Service</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Employee Self-Service Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Give employees secure access to their own information and HR stops being a help desk for routine requests. Here is what to look for and how isolved plus BEG handles it.
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
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Good employee self-service software lets staff update their own info, view pay stubs and tax forms, and request PTO online, which cuts routine HR tickets sharply. The isolved platform delivers this through a secure portal and mobile app on one connected platform, and BEG configures and supports it for your policies.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is employee self-service software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Employee self-service software gives staff a secure online place to manage their own HR information. Instead of emailing HR to change an address, asking for a copy of a pay stub, or calling to check a PTO balance, employees do it themselves from a portal or phone. HR stays in control through permissions and approvals while the routine work moves off their desk.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for a clean portal and mobile app, on-demand access to pay stubs and tax forms, profile and direct deposit updates, PTO requests with visible balances, and benefits visibility. The most important detail is whether those self-service changes update payroll and HR directly, because if they still require HR to rekey them, you have not removed the work.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            HR teams lose a surprising amount of time to small, repetitive requests. A pay stub copy here, an address change there, a question about remaining PTO. None of it is hard, but the volume adds up and pulls HR away from work that actually needs a person, like hiring, compliance, and supporting managers.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Employees feel the friction too. Waiting on HR for a document they should be able to grab in seconds is a poor experience, and it is worse for a distributed or hourly workforce that is not sitting near the HR office. Self-service software solves both sides by giving employees instant access and giving HR its time back.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How isolved handles self-service as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved gives every employee a secure portal and mobile app to view pay stubs and tax forms, update contact and direct deposit details, request time off, and review benefits. Because isolved is one connected platform, a change an employee makes updates the same payroll and HR records the company runs on, with no separate sync.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            That single source of truth is what makes self-service trustworthy. Because more than 7 million employees are managed on isolved, the self-service experience is proven across office, remote, and hourly workforces at a wide range of sizes.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Employee self-service is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>isolved HCM platform</Link>, and HR can answer employee questions or pull records faster through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>isolved Connector for Claude</Link> rather than searching screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Self-service only reduces tickets if it is set up to match your policies. Permissions, what employees can change versus what needs approval, PTO request routing, and the look of the portal all need configuring. BEG implements, configures, and supports the self-service experience for your organization and updates it as your team and policies change.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            isolved carries a Forrester-documented 330% ROI, and in self-service that return shows up where routine requests stop landing on HR and employees serve themselves. When you change a policy, add a workflow, or roll out the app to a new group, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single setup fits every employer, and an honest answer should say so. A tiny team where HR knows everyone may not feel the ticket load yet. The value of self-service grows with headcount, with a distributed or hourly workforce, and with how much routine request volume your HR team handles today.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how many routine requests HR fields each week, how spread out your workforce is, whether employees need mobile access, and whether you want a partner configuring the portal or prefer to manage it yourself. The isolved platform is a strong fit when request volume and workforce spread are in the picture and you want BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See employee self-service in isolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will look at the requests HR handles today and show you what isolved plus BEG looks like for giving employees self-service and giving HR time back.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
