import { Metadata } from 'next';
import Link from 'next/link';
import FinalPaycheckCalculator from '@/components/FinalPaycheckCalculator';

export const metadata: Metadata = {
  title: 'PTO Tracking Software | BEG',
  description: 'PTO and time-off tracking software for accruals, balances, requests, and approvals that keep payroll accurate. iSolved on one platform, supported by BEG.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/pto-tracking-software' },
  openGraph: {
    title: 'PTO Tracking Software | BEG',
    description: 'PTO and time-off tracking software for accruals, balances, requests, and approvals that keep payroll accurate. iSolved on one platform, supported by BEG.',
    url: 'https://beghr.com/services/hcm-software/pto-tracking-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'PTO Tracking Software | BEG', description: 'PTO and time-off tracking software for accruals, balances, requests, and approvals that keep payroll accurate. iSolved on one platform, supported by BEG.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does PTO tracking software do?',
    a: 'PTO tracking software calculates time-off accruals, shows current balances, and routes requests for approval. It keeps paid time off accurate as it earns, gets used, and carries over, so employees and managers always see the same up-to-date number.',
  },
  {
    q: 'How does iSolved handle accruals and balances?',
    a: 'iSolved applies your accrual rules automatically by policy, tenure, and hours worked, then updates each employee balance in real time. Employees see what they have available, and managers approve requests against a balance that is always current.',
  },
  {
    q: 'How do time-off requests and approvals work?',
    a: 'Employees request time off from any device, the request routes to the right approver, and an approved request reduces the balance and reflects in payroll. There is no paper form, no shared calendar to update, and no separate spreadsheet to reconcile.',
  },
  {
    q: 'How does PTO stay accurate in payroll?',
    a: 'Because iSolved is one connected platform, approved time off flows into the same system that runs payroll. Accruals, usage, and balances stay aligned with pay automatically, so employees are paid correctly and balances never drift from what was used.',
  },
  {
    q: 'Why use BEG to implement PTO tracking?',
    a: 'BEG configures your accrual policies, carryover rules, tenure tiers, and approval routing to match your handbook. You work with one BEG contact who knows your setup rather than filing tickets with a general support queue.',
  },
  {
    q: 'Is PTO software worth it for a small company?',
    a: 'It depends on policy complexity. A tiny team with a flat policy may manage in a spreadsheet, while accrual tiers, carryover limits, and multiple leave types quickly make automation worthwhile. BEG will give you an honest read rather than oversell it.',
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
    { '@type': 'ListItem', position: 3, name: 'PTO Tracking Software', item: 'https://beghr.com/services/hcm-software/pto-tracking-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://beghr.com/services/hcm-software/pto-tracking-software',
};

export default function PtoTrackingSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · PTO and Time-Off Tracking</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>PTO Tracking Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Accruals, balances, requests, and approvals stay accurate when time off lives inside the system that runs payroll. Here is what to look for and how iSolved plus BEG handles it.
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
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Good PTO tracking software calculates accruals automatically, shows accurate balances, routes requests for approval, and keeps time off aligned with payroll. iSolved does all of this on one connected platform, and BEG configures and supports it around the accrual and carryover rules in your handbook.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is PTO tracking software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            PTO tracking software manages paid time off across its whole life, from how it accrues to how it is requested, approved, used, and carried over. It holds your accrual rules, keeps each employee balance current, and routes time-off requests to the right approver. The right tool turns a question like how many days do I have left into a number both the employee and the manager can trust.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for four things. Accrual rules flexible enough for your policies, including tenure tiers and hours-based earning. Real-time balances employees can see for themselves. Request and approval routing that does not rely on email or a shared calendar. And a direct connection to payroll so used time and balances stay accurate at pay time. Time-off tracking that sits apart from payroll just creates a second number to reconcile.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The core problem is balances nobody can agree on. When PTO lives in a spreadsheet, accruals get updated late, used days get missed, and an employee and a manager end up looking at two different numbers. Carryover rules and tenure tiers make a manual tracker even harder to keep right, and the errors are not caught until someone disputes a balance.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The second problem is payroll. When time off is tracked separately from pay, approved days do not always make it onto the pay run correctly, which leads to over or underpayment and end-of-year cleanup. PTO tracking software solves both by calculating accruals automatically and keeping balances and usage tied to the same system that runs payroll.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How iSolved handles time off as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved runs PTO and time-off tracking inside the same platform that runs your time, HR, and payroll. It applies your accrual rules automatically by policy, tenure, and hours worked, and updates each balance in real time. Employees request time off from any device, the request routes to the right approver, and an approved request reduces the balance and reflects in pay.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Because time off and payroll share one system, accruals, usage, and balances stay aligned with pay automatically, with no separate spreadsheet to reconcile. Because more than 7 million employees are managed on iSolved, the time-off workflow is proven across the accrual structures, carryover limits, and leave types employers of every size maintain.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Time-off tracking is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>iSolved HCM platform</Link>, and an employee or manager can check a balance or pull a time-off report through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>iSolved Connector for Claude</Link> rather than clicking through screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Time-off policy is detailed work. Accrual rates, tenure tiers, carryover limits, leave types, and approval routing all have to match your handbook exactly, or balances will be wrong from the start. BEG implements, configures, and supports the platform for your specific policies, and stays with you as those policies change.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            iSolved carries a Forrester-documented 330% ROI, and in time off that return shows up where automated accruals and payroll-connected balances cut disputes, corrections, and year-end cleanup. When you change an accrual rule, add a leave type, or adjust carryover, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single setup fits every employer, and an honest answer should say so. A tiny team with a flat, unlimited policy may not need automated tracking at all. The value grows with accrual complexity, the number of leave types you offer, and whether carryover and tenure tiers make manual tracking error-prone.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how complex your accrual rules are, whether balance disputes come up today, and whether you want time off connected directly to payroll. iSolved is a strong fit when policies have real structure and you want time off joined to the rest of your HCM with BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See PTO tracking in iSolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your accrual and carryover rules, look at how balances reach payroll today, and show you what iSolved plus BEG looks like for your team.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
