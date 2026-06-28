import { Metadata } from 'next';
import Link from 'next/link';
import TrueCostCalculator from '@/components/TrueCostCalculator';

export const metadata: Metadata = {
  title: 'Benefits Administration Software | BEG',
  description: 'Benefits administration software for open enrollment, carrier connections, payroll deductions, and ACA compliance. iSolved on one platform, supported by BEG.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/benefits-administration-software' },
  openGraph: {
    title: 'Benefits Administration Software | BEG',
    description: 'Benefits administration software for open enrollment, carrier connections, payroll deductions, and ACA compliance. iSolved on one platform, supported by BEG.',
    url: 'https://beghr.com/services/hcm-software/benefits-administration-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Benefits Administration Software | BEG', description: 'Benefits administration software for open enrollment, carrier connections, payroll deductions, and ACA compliance. iSolved on one platform, supported by BEG.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does benefits administration software do?',
    a: 'Benefits administration software manages plan setup, open enrollment, employee elections, carrier feeds, and the deductions that flow into payroll. It keeps eligibility, life events, and ACA reporting accurate without spreadsheets or duplicate data entry.',
  },
  {
    q: 'How does iSolved handle open enrollment?',
    a: 'iSolved runs open enrollment as a guided online workflow where employees compare plans, make elections, and add dependents from any device. Elections then flow straight into payroll and out to carriers, so nothing is rekeyed by hand.',
  },
  {
    q: 'Does iSolved connect to insurance carriers?',
    a: 'Yes. iSolved supports carrier connections that send enrollment and change data to your insurance providers electronically, which reduces enrollment errors and the back and forth that comes from emailing spreadsheets to each carrier.',
  },
  {
    q: 'How do benefit deductions reach payroll?',
    a: 'Because iSolved is one connected platform, the deductions tied to each employee election update payroll automatically. There is no export, import, or manual reconciliation between a separate benefits system and your payroll system.',
  },
  {
    q: 'Can iSolved handle ACA tracking and reporting?',
    a: 'Yes. iSolved tracks hours, measures eligibility, and generates the 1094-C and 1095-C forms ACA requires. BEG configures your measurement periods and affordability settings so filings line up with how you actually staff.',
  },
  {
    q: 'Why use BEG to implement benefits administration?',
    a: 'BEG configures your plans, carrier feeds, eligibility rules, and ACA settings, then supports you through every enrollment cycle. You work with one BEG contact who knows your setup rather than a general support queue.',
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
    { '@type': 'ListItem', position: 3, name: 'Benefits Administration Software', item: 'https://beghr.com/services/hcm-software/benefits-administration-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://beghr.com/services/hcm-software/benefits-administration-software',
};

export default function BenefitsAdministrationSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Benefits Administration</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Benefits Administration Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Open enrollment, carrier feeds, deductions, and ACA all live in one place when benefits sit inside your HCM platform. Here is what to look for and how iSolved plus BEG handles it.
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
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Good benefits administration software runs open enrollment online, sends elections to carriers, flows deductions into payroll without rekeying, and keeps ACA reporting accurate. iSolved does all of this on one connected platform, and BEG configures and supports it for your plans and eligibility rules.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is benefits administration software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Benefits administration software manages the full lifecycle of your employee benefits, from plan setup and eligibility rules through open enrollment, mid-year life events, carrier communication, and the payroll deductions tied to every election. The right tool turns a season that used to mean paper forms and chasing signatures into a guided online process your employees complete on their own.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for four things. Self-service enrollment that employees can complete from any device. Carrier connections that send elections electronically instead of by spreadsheet. Deductions that flow into payroll automatically. And built in ACA tracking so eligibility measurement and the required forms are not a separate year-end scramble. A platform missing any one of these pushes that work back onto your HR team by hand.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The core problem is fragmentation. When benefits live in one system, payroll in another, and carrier enrollments in a stack of spreadsheets, the same election gets entered three times. Every handoff is a chance for a wrong deduction, a missed dependent, or an employee who thinks they enrolled but never made it onto the carrier roster.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Open enrollment is where this hurts most. HR teams spend weeks collecting forms, keying elections, emailing carriers, and reconciling deductions against the first payroll of the new plan year. The errors that slip through become support tickets, corrections, and in some cases real coverage gaps for employees. Benefits administration software exists to remove that manual middle layer entirely.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How iSolved handles benefits as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved runs benefits administration inside the same platform that runs your payroll, HR, and time. Open enrollment is a guided workflow where employees compare plans, make elections, and add dependents online. Those elections drive carrier connections that send enrollment data to your insurers electronically, and they update payroll deductions automatically because there is no second system to sync.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            ACA is built in. iSolved measures hours, determines eligibility against your chosen measurement periods, and produces the 1094-C and 1095-C forms. Because more than 7 million employees are managed on iSolved, the platform is proven across the plan structures and compliance demands employers of every size face.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Benefits administration is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>iSolved HCM platform</Link>, and your team can pull enrollment status or check deduction setup through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>iSolved Connector for Claude</Link> rather than digging through screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Benefits configuration is detailed work. Plan rules, eligibility waiting periods, contribution structures, carrier feed formats, and ACA measurement settings all have to match how your company actually operates. BEG implements, configures, and supports the platform for your specific plans and carriers, and stays with you through every enrollment cycle.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            iSolved carries a Forrester-documented 330% ROI, and in benefits that return shows up where automated carrier feeds and payroll-connected deductions cut enrollment errors and correction runs. When you add a plan, change carriers, or update contributions, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single setup fits every employer, and an honest answer should say so. A small company with one medical plan and a handful of employees may not need carrier feeds at all. The value of full benefits administration grows with the number of plans you offer, the carriers you work with, and whether ACA reporting applies to you.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how many plans and carriers you manage, whether you are an applicable large employer for ACA, and whether you want a partner running enrollment or prefer to administer it yourself. iSolved is a strong fit when plan complexity and compliance are in the picture and you want BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See benefits administration in iSolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your plans and carriers, look at your enrollment process, and show you what iSolved plus BEG looks like for your team.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
