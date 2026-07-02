import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Garnishment Mgmt Software | Instant Price Quote | BEG',
  description: 'Garnishment management software for orders, calculations, remittance, and compliance built into payroll. isolved on one connected platform, supported by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/garnishment-management-software' },
  openGraph: {
    title: 'Garnishment Mgmt Software | Instant Price Quote | BEG',
    description: 'Garnishment management software for orders, calculations, remittance, and compliance built into payroll. isolved on one connected platform, supported by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/garnishment-management-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Garnishment Mgmt Software | Instant Price Quote | BEG', description: 'Garnishment management software for orders, calculations, remittance, and compliance built into payroll. isolved on one connected platform, supported by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },
};


const faqs = [
  {
    q: 'What does garnishment management software do?',
    a: 'Garnishment management software handles wage garnishment orders from setup through deduction and remittance. It calculates the correct withholding under federal and state limits, applies it each pay period, and helps send payments to the right agency on time.',
  },
  {
    q: 'How does isolved calculate garnishment amounts?',
    a: 'isolved applies the garnishment rules and limits tied to each order, including disposable earnings calculations and priority when multiple orders exist. Because it runs inside payroll, the deduction is calculated against actual pay every cycle rather than estimated by hand.',
  },
  {
    q: 'Can isolved handle remittance to agencies?',
    a: 'Yes. The isolved platform supports the withholding and remittance side of garnishments so the money deducted is directed toward the correct court or agency. Keeping deduction and remittance in one payroll system reduces the chance of a missed or late payment.',
  },
  {
    q: 'How does it stay compliant across states?',
    a: 'Garnishment limits and priority rules vary by type and state, and isolved applies the appropriate rules to each order. BEG configures your orders correctly during setup, so withholding stays within legal limits and follows the right priority.',
  },
  {
    q: 'Why use BEG to implement garnishment management?',
    a: 'BEG sets up each garnishment order, its limits, priority, and remittance details correctly inside payroll, then supports you when new orders arrive. You work with one BEG contact who knows your setup rather than a general support queue.',
  },
  {
    q: 'Do we need garnishment software if orders are rare?',
    a: 'It depends on volume and risk. Even a single mishandled order carries legal exposure, so many employers want it automated regardless. The case strengthens as orders grow more frequent or span multiple states. BEG will give you an honest read.',
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
    { '@type': 'ListItem', position: 3, name: 'Garnishment Management Software', item: 'https://www.beghr.com/services/hcm-software/garnishment-management-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://www.beghr.com/services/hcm-software/garnishment-management-software',
};

export default function GarnishmentManagementSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Garnishment Management</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Garnishment Management Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Garnishment orders, calculations, remittance, and compliance belong inside payroll, not in a side spreadsheet. Here is what to look for and how isolved plus BEG handles it.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="tldr" style={{ background: '#f9f9f9', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
            <p style={{ fontWeight: '700', margin: '0 0 0.5rem', color: '#000000', letterSpacing: '0.04em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Bottom line</p>
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Good garnishment management software calculates the correct withholding within legal limits, applies it every pay period, directs remittance to the right agency, and keeps you compliant. The isolved platform handles all of this inside payroll on one connected platform, and BEG sets up each order correctly and supports you as new ones arrive.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is garnishment management software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Garnishment management software handles the wage garnishment process from the moment an order arrives. It records the order, calculates the correct deduction against disposable earnings and legal limits, applies it each pay period, and supports remitting the withheld amount to the issuing court or agency. The right tool keeps a legally sensitive deduction accurate and on time without manual math.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for four things. Accurate calculation against federal and state limits, not a flat amount someone types in. Correct handling of priority when an employee has more than one order. Remittance support so payments reach the right agency on schedule. And a position inside payroll so deductions come straight off actual pay. A garnishment tracked outside payroll is a compliance risk every single pay run.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The core problem is legal exposure. Garnishments come with strict limits, priority rules, and deadlines, and getting any of it wrong can expose the employer to liability for the unpaid amount. Calculating disposable earnings by hand, especially when an employee has multiple orders, is exactly the kind of task that produces costly mistakes.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The second problem is the remittance trail. Money correctly deducted still has to reach the right agency on time, and a deduction tracked in a spreadsheet separate from payroll is easy to miscalculate, miss, or remit late. Garnishment management software solves both by calculating within the rules and keeping the deduction and remittance inside the payroll system itself.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How isolved handles garnishments as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved handles garnishments inside the same platform that runs your payroll, so deductions come straight off actual pay. It applies the rules and limits tied to each order, including disposable earnings calculations and priority when an employee has more than one order, and applies the withholding every pay period rather than relying on someone to remember it.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved also supports the remittance side, directing withheld amounts toward the correct court or agency, which keeps deduction and payment in one system. Because more than 7 million employees are managed on isolved, garnishment handling is proven across the order types, multi-state rules, and priority situations employers of every size encounter.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Garnishment management is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>isolved HCM platform</Link>, and your team can check an active order or pull a deduction report through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>isolved Connector for Claude</Link> rather than clicking through screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Garnishment setup is unforgiving. Each order has its own type, limit, priority, and remittance destination, and a setup error becomes a compliance problem on the next pay run. BEG sets up each order correctly inside payroll, configures the limits and priority, and supports you when a new order arrives or an existing one changes.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            isolved carries a Forrester-documented 330% ROI, and in garnishments that return shows up where accurate, payroll-connected calculations and remittance reduce legal exposure and the time spent on manual deduction math. When a new order arrives or a balance is satisfied, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single setup fits every employer, and an honest answer should say so. An employer who has never received a garnishment order may not feel the need today. But because even one mishandled order carries real liability, many employers want the calculation and remittance automated as soon as orders are a possibility at all.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how often you receive orders, whether you operate across multiple states with different rules, and how comfortable you are calculating disposable earnings and priority by hand. The isolved platform is a strong fit when accuracy and compliance matter and you want garnishments handled inside payroll with BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See garnishment management in isolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through how you handle orders today, look at your remittance process, and show you what isolved plus BEG looks like for your team.
          </p>
          <PricingCta service="hcm-software" subline={false} />
        </div>
      </section>
    </main>
  );
}
