import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Time and Attendance Software | BEG',
  description: 'Time and attendance software for time capture, scheduling, PTO accrual, and overtime rules that feed payroll cleanly. iSolved configured and supported by BEG.',
  alternates: { canonical: 'https://beghr.com/services/hcm-software/time-and-attendance-software' },
  openGraph: {
    title: 'Time and Attendance Software | BEG',
    description: 'Time and attendance software for time capture, scheduling, PTO accrual, and overtime rules that feed payroll cleanly. iSolved configured and supported by BEG.',
    url: 'https://beghr.com/services/hcm-software/time-and-attendance-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Time and Attendance Software | BEG', description: 'Time and attendance software for time capture, scheduling, PTO accrual, and overtime rules that feed payroll cleanly. iSolved configured and supported by BEG.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does time and attendance software do?',
    a: 'Time and attendance software captures when employees work, applies your overtime and rounding rules, tracks PTO accrual, and supports scheduling. It then sends approved hours straight into payroll so nobody rekeys a timecard.',
  },
  {
    q: 'How does iSolved capture employee time?',
    a: 'iSolved captures time through physical clocks, web punch, and mobile, with options like geofencing for remote and field staff. Punches land in one system in real time, so supervisors review and approve hours from a single screen.',
  },
  {
    q: 'Can iSolved handle complex overtime rules?',
    a: 'Yes. iSolved applies daily and weekly overtime, double time, shift differentials, and state-specific rules automatically. BEG configures these pay rules to match your policies so overtime is calculated correctly without manual splitting of timecards.',
  },
  {
    q: 'Does iSolved track PTO accrual?',
    a: 'Yes. iSolved accrues PTO, sick, and other leave balances by your accrual rules, shows employees their balances, and routes time off requests for approval. Approved time updates the schedule and the timecard automatically.',
  },
  {
    q: 'How does time feed into payroll?',
    a: 'Because iSolved is one connected platform, approved hours move directly from time and attendance into payroll. There is no export or import between systems, which removes the most common source of pay errors and correction runs.',
  },
  {
    q: 'Why use BEG to implement time and attendance?',
    a: 'BEG configures your clocks, pay rules, accruals, and schedules, then supports them as your workforce changes. You work with one BEG contact who knows your setup rather than logging tickets with a general queue.',
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
    { '@type': 'ListItem', position: 3, name: 'Time and Attendance Software', item: 'https://beghr.com/services/hcm-software/time-and-attendance-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://beghr.com/services/hcm-software/time-and-attendance-software',
};

export default function TimeAndAttendanceSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Time and Attendance</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Time and Attendance Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Accurate hours are the foundation of accurate pay. The right time and attendance system captures time, applies your rules, and feeds payroll clean. Here is what to look for and how iSolved plus BEG handles it.
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
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Strong time and attendance software captures time accurately, applies overtime and accrual rules automatically, supports scheduling, and feeds approved hours straight into payroll. iSolved does all of this on one connected platform, and BEG configures and supports the pay rules to match how your team actually works.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is time and attendance software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Time and attendance software records when employees start and stop work, applies your overtime and rounding rules, manages schedules, and tracks paid time off as it accrues and gets used. The goal is a single source of truth for hours that needs no cleanup before payroll runs.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for flexible time capture across clocks, web, and mobile, automatic overtime and differential calculation, accrual tracking with employee self-service for time off requests, and a scheduling tool that ties to actual hours worked. Above all, look at how cleanly approved time moves into payroll, because that handoff is where most pay errors are created.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The problem is the gap between hours worked and hours paid. When time is captured on paper, in a standalone clock, or in a spreadsheet, someone has to interpret it, apply overtime, and key it into payroll. Every one of those manual steps invites error, and overtime miscalculation in particular carries real compliance exposure.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Scheduling and accruals compound it. Managers build schedules in one place, employees request time off somewhere else, and balances drift out of sync with what payroll actually pays. Time and attendance software closes these gaps by capturing, calculating, and approving hours in one system that payroll can trust.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How iSolved handles time as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            iSolved captures time through physical clocks, web punch, and mobile, applies your overtime, differential, and rounding rules automatically, and accrues PTO and other leave by your policies. Schedules, time off requests, and approvals all live in the same platform, and approved hours feed payroll directly with no export or import.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            That single-platform design is the point. Because more than 7 million employees are managed on iSolved, the platform is proven across the shift patterns, accrual rules, and overtime structures that real workforces run on, from one site to many.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Time and attendance is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>iSolved HCM platform</Link>, and supervisors can check overtime exposure or pull hours reports through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>iSolved Connector for Claude</Link> rather than navigating screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Pay rules are where time and attendance projects succeed or fail. Daily overtime, blended rates, shift differentials, accrual schedules, and state-specific rules all have to be configured correctly. BEG implements, configures, and supports the platform for your specific policies and locations, and updates the rules when your workforce changes.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            iSolved carries a Forrester-documented 330% ROI, and in time and attendance that return shows up where accurate capture cuts overtime leakage and the correction runs that follow bad timecards. When you add a location, change a rule, or onboard a new crew, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            There is no single right setup for every employer, and an honest answer should say so. A small salaried team on a predictable schedule may not need a clock at all. The value of full time and attendance grows with hourly headcount, overtime complexity, multiple shifts, and the number of locations you run.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how many hourly employees you pay, how complex your overtime and accrual rules are, whether you need scheduling, and whether you want a partner running the configuration or prefer to manage it yourself. iSolved is a strong fit when hourly complexity is in the picture and you want BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
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
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See time and attendance in iSolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through your shifts, overtime rules, and accruals, and show you what iSolved plus BEG looks like for your team.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
