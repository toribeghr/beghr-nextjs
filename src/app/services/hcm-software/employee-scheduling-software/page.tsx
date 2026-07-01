import { Metadata } from 'next';
import Link from 'next/link';
import OvertimePayCalculator from '@/components/OvertimePayCalculator';

export const metadata: Metadata = {
  title: 'Employee Scheduling Software | Instant Price Quote | BEG',
  description: 'Employee scheduling software for shift scheduling, coverage, and overtime control that feeds time and payroll. isolved on one platform, supported by BEG.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/employee-scheduling-software' },
  openGraph: {
    title: 'Employee Scheduling Software | Instant Price Quote | BEG',
    description: 'Employee scheduling software for shift scheduling, coverage, and overtime control that feeds time and payroll. isolved on one platform, supported by BEG.',
    url: 'https://www.beghr.com/services/hcm-software/employee-scheduling-software',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Employee Scheduling Software | Instant Price Quote | BEG', description: 'Employee scheduling software for shift scheduling, coverage, and overtime control that feeds time and payroll. isolved on one platform, supported by BEG.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What does employee scheduling software do?',
    a: 'Employee scheduling software builds shift schedules, checks coverage, manages swaps and availability, and flags overtime before it happens. It replaces paper schedules and spreadsheets with a single view of who is working when, and feeds those hours into time and payroll.',
  },
  {
    q: 'How does isolved handle shift scheduling and coverage?',
    a: 'isolved scheduling lets managers build shifts by role and location, see coverage gaps, and handle availability, swaps, and open shifts in one place. Employees view schedules and request changes from any device, so the schedule stays current.',
  },
  {
    q: 'Can isolved help control overtime?',
    a: 'Yes. Because scheduling, time, and payroll share one platform, isolved can surface scheduled hours against thresholds so managers see potential overtime before the schedule is published, instead of finding it after the fact on the pay run.',
  },
  {
    q: 'How do scheduled hours reach time and payroll?',
    a: 'Because isolved is one connected platform, scheduling, time tracking, and payroll share the same data. Worked hours flow from the clock into payroll without exporting or rekeying, so what you schedule and what you pay stay aligned.',
  },
  {
    q: 'Why use BEG to implement scheduling?',
    a: 'BEG configures your shift rules, roles, locations, and overtime thresholds to match how you staff. You work with one BEG contact who knows your setup rather than filing tickets with a general support queue.',
  },
  {
    q: 'Do we need scheduling software if shifts rarely change?',
    a: 'It depends on your operation. A small team with a fixed schedule may not need it, while a business with variable shifts, multiple locations, or tight overtime budgets gains the most. BEG will give you an honest read rather than oversell it.',
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
    { '@type': 'ListItem', position: 3, name: 'Employee Scheduling Software', item: 'https://www.beghr.com/services/hcm-software/employee-scheduling-software' },
  ],
};

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.tldr', '.faq-item h3', '.faq-item p'] },
  url: 'https://www.beghr.com/services/hcm-software/employee-scheduling-software',
};

export default function EmployeeSchedulingSoftwarePage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · Employee Scheduling</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Employee Scheduling Software</h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            Shift scheduling, coverage, and overtime control work best when they feed time and payroll automatically. Here is what to look for and how isolved plus BEG handles it.
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
            <p style={{ margin: 0, fontSize: '1.02rem', lineHeight: '1.7', color: '#333333' }}>Good employee scheduling software builds shifts, shows coverage gaps, flags overtime before it happens, and feeds worked hours straight into time and payroll. The isolved platform handles all of this on one connected platform, and BEG configures and supports it around how your business staffs each location.</p>
          </div>

          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What is employee scheduling software and what should you look for?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Employee scheduling software plans who works when. It lets managers build shifts by role and location, check that every slot is covered, handle availability and swaps, and publish the schedule to employees. The right tool replaces the whiteboard and the group text with a single, current view of coverage that everyone can see from their phone.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            When you evaluate options, look for four things. Shift building that respects roles, skills, and locations so you are never short a critical position. Coverage visibility that surfaces gaps before the schedule goes out. Overtime awareness that flags hours against thresholds while you can still adjust. And a direct feed into time and payroll so scheduled and worked hours line up. Scheduling that lives apart from time and payroll just moves the reconciliation problem down the line.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What problem does it solve?</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            The core problem is coverage and cost colliding. Build a schedule by hand and you either leave a shift short, double-book someone, or quietly stack up overtime nobody approved. The schedule that looked fine on a spreadsheet becomes a string of last-minute calls to fill gaps, and the overtime only shows up when payroll runs.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            The second problem is the disconnect from pay. When the schedule lives in one place and the time clock in another, worked hours get rekeyed, and discrepancies between scheduled and actual time turn into payroll corrections. Employee scheduling software solves both by making coverage and overtime visible up front and feeding the same hours into time and payroll.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>How isolved handles scheduling as part of one connected platform</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            isolved runs scheduling inside the same platform that runs your time tracking, HR, and payroll. Managers build shifts by role and location, see coverage gaps, and handle availability, swaps, and open shifts in one place. Employees view their schedules and request changes from any device, so the published schedule stays current instead of drifting out of date.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Because scheduling, time, and payroll share one system, isolved can surface scheduled hours against overtime thresholds before the schedule is published, and worked hours flow from the clock into payroll without rekeying. Because more than 7 million employees are managed on isolved, the scheduling workflow is proven across the shift patterns and multi-location operations employers of every size run.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            Scheduling is one capability of the broader <Link href="/services/hcm-software" style={{ color: '#000', fontWeight: 600 }}>isolved HCM platform</Link>, and a manager can check coverage or pull a labor report through the <Link href="/services/hcm-software/ai-connector" style={{ color: '#000', fontWeight: 600 }}>isolved Connector for Claude</Link> rather than clicking through screens.
          </p>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why BEG-managed implementation matters</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333', marginBottom: '1rem' }}>
            Staffing rules are specific to each business. Shift definitions, roles, locations, availability rules, and overtime thresholds all have to match how you actually operate. BEG implements, configures, and supports the platform for your specific scheduling needs, and stays with you as locations and staffing patterns change.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#333' }}>
            isolved carries a Forrester-documented 330% ROI, and in scheduling that return shows up where overtime visibility and a direct feed into payroll cut unplanned labor cost and payroll corrections. When you add a location, change a shift structure, or adjust an overtime rule, you call your BEG contact, not a ticket queue.
          </p>
        </div>
      </section>

      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', color: '#ECAC60', marginBottom: '1rem' }}>It depends on your needs</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc', marginBottom: '1rem' }}>
            No single setup fits every employer, and an honest answer should say so. A small team on a fixed weekly schedule may not need scheduling software at all. The value grows with how variable your shifts are, how many locations and roles you staff, and how much unplanned overtime is costing you today.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#cccccc' }}>
            The questions worth asking are how often your schedule changes, whether overtime surprises you on the pay run, and whether you want scheduled hours to feed time and payroll automatically. The isolved platform is a strong fit when shifts are variable and you want scheduling joined to time and pay with BEG managing it. BEG will run a fair comparison against your current process rather than push you toward an answer.
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
          <h2 style={{ marginBottom: '0.5rem' }}>Free tool: calculate overtime the right way</h2>
          <p style={{ color: '#555', maxWidth: 620, margin: '0.5rem auto 0', lineHeight: 1.7 }}>Bonuses and multiple pay rates change the math. Enter the week and see the correct FLSA overtime owed. Free, runs in your browser, no email required.</p>
        </div>
      </section>
      <OvertimePayCalculator />
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>See scheduling in isolved</h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will walk through how you staff your shifts, look at where overtime is leaking today, and show you what isolved plus BEG looks like for your team.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </main>
  );
}
