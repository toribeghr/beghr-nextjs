import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2026 Payroll Calendar: All 26 Biweekly Paydays | BEG',
  description: '2026 payroll calendar with every biweekly pay period and payday mapped out. See the full 26-payday schedule and how BEG runs it for you.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/calendars/2026-payroll-calendar' },
  openGraph: {
    title: '2026 Payroll Calendar: All 26 Biweekly Paydays | BEG',
    description: '2026 payroll calendar with every biweekly pay period and payday mapped out. See the full 26-payday schedule and how BEG runs it for you.',
    url: 'https://www.beghr.com/blog/payroll/calendars/2026-payroll-calendar',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '2026 Payroll Calendar: All 26 Biweekly Paydays | BEG', description: '2026 payroll calendar with every biweekly pay period and payday mapped out. See the full 26-payday schedule and how BEG runs it for you.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'How many biweekly paydays are there in 2026?',
    answer: 'There are 26 biweekly paydays in 2026 if you run payroll every 14 days from a fixed anchor date, such as the first Friday payday of the year.',
  },
  {
    question: 'What is the first biweekly payday of 2026?',
    answer: 'Using Friday, January 9, 2026 as the anchor payday, the first pay period runs December 21, 2025 through January 3, 2026, with wages paid January 9, 2026.',
  },
  {
    question: 'Why do biweekly calendars sometimes show 27 paydays?',
    answer: 'A 27th payday occurs when your specific anchor date happens to land an extra payday inside the calendar year. With a January 9, 2026 anchor, 2026 has exactly 26 paydays; verify your own anchor date to confirm your count.',
  },
  {
    question: 'Does BEG build the payroll calendar for us?',
    answer: 'Yes. BEG maps your exact pay periods and paydays for the year, accounts for holidays and bank closures, and runs every cycle on schedule as part of managed payroll.',
  },
  {
    question: 'Can BEG switch us from biweekly to another schedule?',
    answer: 'Yes. We help you evaluate biweekly, semimonthly, and weekly schedules and handle the transition, including employee communication and any state notice requirements.',
  },
];

const paydays2026 = [
  ['1', 'Dec 21, 2025', 'Jan 3, 2026', 'Jan 9, 2026'],
  ['2', 'Jan 4, 2026', 'Jan 17, 2026', 'Jan 23, 2026'],
  ['3', 'Jan 18, 2026', 'Jan 31, 2026', 'Feb 6, 2026'],
  ['4', 'Feb 1, 2026', 'Feb 14, 2026', 'Feb 20, 2026'],
  ['5', 'Feb 15, 2026', 'Feb 28, 2026', 'Mar 6, 2026'],
  ['6', 'Mar 1, 2026', 'Mar 14, 2026', 'Mar 20, 2026'],
  ['7', 'Mar 15, 2026', 'Mar 28, 2026', 'Apr 3, 2026'],
  ['8', 'Mar 29, 2026', 'Apr 11, 2026', 'Apr 17, 2026'],
  ['9', 'Apr 12, 2026', 'Apr 25, 2026', 'May 1, 2026'],
  ['10', 'Apr 26, 2026', 'May 9, 2026', 'May 15, 2026'],
  ['11', 'May 10, 2026', 'May 23, 2026', 'May 29, 2026'],
  ['12', 'May 24, 2026', 'Jun 6, 2026', 'Jun 12, 2026'],
  ['13', 'Jun 7, 2026', 'Jun 20, 2026', 'Jun 26, 2026'],
  ['14', 'Jun 21, 2026', 'Jul 4, 2026', 'Jul 10, 2026'],
  ['15', 'Jul 5, 2026', 'Jul 18, 2026', 'Jul 24, 2026'],
  ['16', 'Jul 19, 2026', 'Aug 1, 2026', 'Aug 7, 2026'],
  ['17', 'Aug 2, 2026', 'Aug 15, 2026', 'Aug 21, 2026'],
  ['18', 'Aug 16, 2026', 'Aug 29, 2026', 'Sep 4, 2026'],
  ['19', 'Aug 30, 2026', 'Sep 12, 2026', 'Sep 18, 2026'],
  ['20', 'Sep 13, 2026', 'Sep 26, 2026', 'Oct 2, 2026'],
  ['21', 'Sep 27, 2026', 'Oct 10, 2026', 'Oct 16, 2026'],
  ['22', 'Oct 11, 2026', 'Oct 24, 2026', 'Oct 30, 2026'],
  ['23', 'Oct 25, 2026', 'Nov 7, 2026', 'Nov 13, 2026'],
  ['24', 'Nov 8, 2026', 'Nov 21, 2026', 'Nov 27, 2026'],
  ['25', 'Nov 22, 2026', 'Dec 5, 2026', 'Dec 11, 2026'],
  ['26', 'Dec 6, 2026', 'Dec 19, 2026', 'Dec 25, 2026'],
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "2026 Payroll Calendar: All 26 Biweekly Paydays", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/calendars/2026-payroll-calendar"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Calendars</p>
              <h1>2026 Payroll Calendar: All 26 Biweekly Paydays</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>A 2026 payroll calendar only helps if the dates are actually right. This guide lays out every biweekly pay period and payday for the full year, using an explicit anchor date so you can verify the math yourself and apply it to your own payroll schedule.</p>

        <p>Biweekly means every 14 days, 26 times a year in most years. Below is the complete run for 2026, anchored to a first payday of Friday, January 9, 2026.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The Anchor Date</h2>

        <p>Every biweekly calendar starts from a fixed anchor payday, then repeats every 14 days. For this calendar, the anchor is <strong>Friday, January 9, 2026</strong>, covering the pay period of December 21, 2025 through January 3, 2026. If your company's biweekly anchor falls on a different date, your specific paydays will shift, but the 14-day cadence and the 26-payday count for 2026 hold for any Friday anchor in early January.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>All 26 Pay Periods and Paydays for 2026</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.65rem', textAlign: 'left' }}>#</th>
                <th style={{ padding: '0.65rem', textAlign: 'left' }}>Period Start</th>
                <th style={{ padding: '0.65rem', textAlign: 'left' }}>Period End</th>
                <th style={{ padding: '0.65rem', textAlign: 'left' }}>Payday</th>
              </tr>
            </thead>
            <tbody>
              {paydays2026.map(([n, start, end, pay], i) => (
                <tr key={n} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.5rem 0.65rem', fontWeight: '600' }}>{n}</td>
                  <td style={{ padding: '0.5rem 0.65rem' }}>{start}</td>
                  <td style={{ padding: '0.5rem 0.65rem' }}>{end}</td>
                  <td style={{ padding: '0.5rem 0.65rem', fontWeight: '600' }}>{pay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Why the Anchor Date Matters</h2>

        <p>Two companies running biweekly payroll can have completely different payday calendars depending on where their anchor falls. Shift the anchor forward or back by even one week and every date after it shifts too, though the total count of 26 paydays for a Friday-anchored 2026 calendar does not change. Before publishing your own calendar internally, confirm the anchor date your company actually uses and verify the math rather than assuming it matches a generic template.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Holidays and Bank Closures</h2>

        <p>Several 2026 paydays in this calendar fall near federal holidays, including the payday windows around New Year's Day, Memorial Day, Independence Day, Labor Day, and the winter holidays. When a scheduled payday lands on a bank holiday, payroll needs to run a day earlier to keep direct deposit on time. Building that adjustment into your calendar in advance avoids a last-minute scramble every quarter.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>We Run Every Cycle, On Your Schedule.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG manages payroll at $25-$45 per employee per month, all-inclusive, and tracks every payday, holiday adjustment, and deposit deadline for you.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Frequently Asked Questions</h2>

        <div className="faq" style={{ marginTop: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/managed-payroll" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Managed Payroll &rarr;
            </a>
            <a href="/blog/payroll/calendars/biweekly-payroll-calendar-2026" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Biweekly Payroll Calendar &rarr;
            </a>
            <a href="/blog/payroll/calendars/2027-payroll-calendar" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              2027 Payroll Calendar &rarr;
            </a>
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', margin: '2rem 0', borderRadius: '4px' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Anthony Moretti, VP of Sales</strong>
          <p style={{ margin: 0 }}>Anthony leads payroll solutions at Business Executive Group, a national managed payroll firm serving businesses across industries. BEG manages payroll at $25-$45 PEPM, all-inclusive, with deep expertise in compliance, multi-state filing, and industry-specific payroll requirements. Get instant pricing at beghr.com.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many biweekly paydays are there in 2026?","acceptedAnswer":{"@type":"Answer","text":"There are 26 biweekly paydays in 2026 if you run payroll every 14 days from a fixed anchor date, such as the first Friday payday of the year."}},{"@type":"Question","name":"What is the first biweekly payday of 2026?","acceptedAnswer":{"@type":"Answer","text":"Using Friday, January 9, 2026 as the anchor payday, the first pay period runs December 21, 2025 through January 3, 2026, with wages paid January 9, 2026."}},{"@type":"Question","name":"Why do biweekly calendars sometimes show 27 paydays?","acceptedAnswer":{"@type":"Answer","text":"A 27th payday occurs when your specific anchor date happens to land an extra payday inside the calendar year. With a January 9, 2026 anchor, 2026 has exactly 26 paydays; verify your own anchor date to confirm your count."}},{"@type":"Question","name":"Does BEG build the payroll calendar for us?","acceptedAnswer":{"@type":"Answer","text":"Yes. BEG maps your exact pay periods and paydays for the year, accounts for holidays and bank closures, and runs every cycle on schedule as part of managed payroll."}},{"@type":"Question","name":"Can BEG switch us from biweekly to another schedule?","acceptedAnswer":{"@type":"Answer","text":"Yes. We help you evaluate biweekly, semimonthly, and weekly schedules and handle the transition, including employee communication and any state notice requirements."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"2026 Payroll Calendar: All 26 Biweekly Paydays","description":"2026 payroll calendar with every biweekly pay period and payday mapped out. See the full 26-payday schedule and how BEG runs it for you.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/calendars/2026-payroll-calendar","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/calendars/2026-payroll-calendar"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Calendars","item":"https://www.beghr.com/blog/payroll/calendars"},{"@type":"ListItem","position":5,"name":"2026 Payroll Calendar: All 26 Biweekly Paydays","item":"https://www.beghr.com/blog/payroll/calendars/2026-payroll-calendar"}]}`,
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <RelatedPosts posts={[
        { category: "Payroll Calendars", title: "Biweekly Payroll Calendar 2026: Every Payday", excerpt: "The full 2026 biweekly payroll calendar with pay periods and paydays, verified date by date...", href: "/blog/payroll/calendars/biweekly-payroll-calendar-2026" },
        { category: "Payroll Calendars", title: "Semimonthly vs. Biweekly Payroll: Which Fits", excerpt: "24 vs 26 pay periods a year: how semimonthly and biweekly payroll compare for budgeting...", href: "/blog/payroll/calendars/semimonthly-vs-biweekly-payroll" },
        { category: "Payroll Calendars", title: "Payroll Tax Deadlines 2026: Federal Deposit Rules", excerpt: "Monthly vs semiweekly depositor schedules, Form 941 and Form 940 deadlines explained...", href: "/blog/payroll/calendars/payroll-tax-deadlines-2026" },
      ]} />
    </article>
  );
}
