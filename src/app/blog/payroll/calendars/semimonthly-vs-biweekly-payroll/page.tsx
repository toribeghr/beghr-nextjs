import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Semimonthly vs. Biweekly Payroll: Which Fits You | BEG',
  description: 'Semimonthly vs biweekly payroll compared: 24 vs 26 pay periods, budgeting impact, and overtime alignment, with a side-by-side table to help you decide.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/calendars/semimonthly-vs-biweekly-payroll' },
  openGraph: {
    title: 'Semimonthly vs. Biweekly Payroll: Which Fits You | BEG',
    description: 'Semimonthly vs biweekly payroll compared: 24 vs 26 pay periods, budgeting impact, and overtime alignment, with a side-by-side table to help you decide.',
    url: 'https://www.beghr.com/blog/payroll/calendars/semimonthly-vs-biweekly-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Semimonthly vs. Biweekly Payroll: Which Fits You | BEG', description: 'Semimonthly vs biweekly payroll compared: 24 vs 26 pay periods, budgeting impact, and overtime alignment, with a side-by-side table to help you decide.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'What is the difference between semimonthly and biweekly payroll?',
    answer: 'Semimonthly payroll pays twice a month on fixed dates, such as the 15th and last business day, producing 24 pay periods a year. Biweekly payroll pays every 14 days on a fixed weekday, producing 26 pay periods a year.',
  },
  {
    question: 'Which is better for overtime calculations, semimonthly or biweekly?',
    answer: 'Biweekly aligns cleanly with a standard 7-day FLSA workweek, since each pay period always covers exactly two full workweeks. Semimonthly periods vary in length and can split a single workweek across two pay periods, adding complexity to overtime calculation.',
  },
  {
    question: 'Does semimonthly or biweekly cost more to run?',
    answer: 'Biweekly costs slightly more to process because it runs 26 times a year versus 24 for semimonthly, assuming a per-run cost structure. Under all-inclusive PEPM pricing, like BEG uses, the payroll frequency does not change your monthly rate.',
  },
  {
    question: 'Can we switch from biweekly to semimonthly, or the reverse?',
    answer: 'Yes, though the transition needs planning around employee communication, benefit deduction timing, and any state notice requirements for pay frequency changes. BEG manages that transition as part of onboarding.',
  },
  {
    question: 'Which schedule do most companies use?',
    answer: 'Biweekly is the most common pay frequency among U.S. private employers, largely because of its clean alignment with weekly time tracking and overtime rules. Semimonthly is common among salaried-only workforces and some public-sector employers.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Semimonthly vs. Biweekly Payroll: Which Fits You", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/calendars/semimonthly-vs-biweekly-payroll"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Calendars</p>
              <h1>Semimonthly vs. Biweekly Payroll: Which Fits You</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Choosing between semimonthly and biweekly payroll affects your budgeting rhythm, your overtime math, and how much payroll processing costs over a year. Both are common, both are compliant in nearly every state, and the right choice comes down to your workforce mix and how your finance team likes to plan.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The Core Difference: 24 vs. 26 Pay Periods</h2>

        <p>Semimonthly payroll pays twice a month on fixed calendar dates, commonly the 15th and the last business day of the month. That produces 24 pay periods a year, every year, regardless of how the calendar falls.</p>

        <p>Biweekly payroll pays every 14 days on a fixed day of the week, most often a Friday. That produces 26 pay periods in most years. Because 26 periods of 14 days equal 364 days, one day short of a full year, the payday sequence drifts slightly and occasionally produces a 27th payday in a given year, though this is uncommon.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Side-by-Side Comparison</h2>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.65rem', textAlign: 'left' }}>Factor</th>
                <th style={{ padding: '0.65rem', textAlign: 'left' }}>Semimonthly</th>
                <th style={{ padding: '0.65rem', textAlign: 'left' }}>Biweekly</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Pay periods per year', '24', '26 (occasionally 27)'],
                ['Payday pattern', 'Fixed calendar dates (e.g. 15th and last business day)', 'Fixed weekday every 14 days'],
                ['Paycheck consistency', 'Amount varies slightly since periods range 13-16 days', 'Consistent, since every period is exactly 14 days'],
                ['Overtime/FLSA alignment', 'Can split a single workweek across two periods', 'Aligns cleanly with the 7-day FLSA workweek'],
                ['Best fit', 'Salaried-only or mixed workforces, simpler monthly budgeting', 'Hourly-heavy workforces, clean weekly time tracking'],
                ['Processing frequency', 'Lower (24 runs/year)', 'Higher (26 runs/year)'],
              ].map(([factor, semi, bi], i) => (
                <tr key={factor} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.65rem', fontWeight: '600' }}>{factor}</td>
                  <td style={{ padding: '0.65rem' }}>{semi}</td>
                  <td style={{ padding: '0.65rem' }}>{bi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>2026 Semimonthly Paydays (Verified)</h2>

        <p>Using the 15th of the month and the last business day as the two fixed paydays, with weekend dates adjusted to the prior business day, 2026 produces 24 semimonthly paydays:</p>

        <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '0.65rem', textAlign: 'left' }}>Month</th>
                <th style={{ padding: '0.65rem', textAlign: 'left' }}>Mid-Month Payday</th>
                <th style={{ padding: '0.65rem', textAlign: 'left' }}>End-of-Month Payday</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['January', 'Jan 15, 2026 (Thu)', 'Jan 30, 2026 (Fri)'],
                ['February', 'Feb 13, 2026 (Fri)', 'Feb 27, 2026 (Fri)'],
                ['March', 'Mar 13, 2026 (Fri)', 'Mar 31, 2026 (Tue)'],
                ['April', 'Apr 15, 2026 (Wed)', 'Apr 30, 2026 (Thu)'],
                ['May', 'May 15, 2026 (Fri)', 'May 29, 2026 (Fri)'],
                ['June', 'Jun 15, 2026 (Mon)', 'Jun 30, 2026 (Tue)'],
                ['July', 'Jul 15, 2026 (Wed)', 'Jul 31, 2026 (Fri)'],
                ['August', 'Aug 14, 2026 (Fri)', 'Aug 31, 2026 (Mon)'],
                ['September', 'Sep 15, 2026 (Tue)', 'Sep 30, 2026 (Wed)'],
                ['October', 'Oct 15, 2026 (Thu)', 'Oct 30, 2026 (Fri)'],
                ['November', 'Nov 13, 2026 (Fri)', 'Nov 30, 2026 (Mon)'],
                ['December', 'Dec 15, 2026 (Tue)', 'Dec 31, 2026 (Thu)'],
              ].map(([month, mid, end], i) => (
                <tr key={month} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '0.5rem 0.65rem', fontWeight: '600' }}>{month}</td>
                  <td style={{ padding: '0.5rem 0.65rem' }}>{mid}</td>
                  <td style={{ padding: '0.5rem 0.65rem' }}>{end}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>That is 24 total paydays for 2026 under a 15th/last-business-day semimonthly schedule, six fewer than the 26 biweekly produces, but each semimonthly check is proportionally larger to cover the extra days.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Budgeting and Overtime: The Practical Tradeoffs</h2>

        <p>For finance teams, semimonthly's fixed 24 periods make monthly budgeting simple: two payroll runs, every month, no exceptions. Biweekly's 26 periods mean two months a year get a third payroll run, which can catch a budget forecast off guard if it is not planned for.</p>

        <p>For workforces paid hourly, biweekly is usually the safer choice for overtime compliance. Each biweekly period covers exactly two 7-day workweeks, so overtime calculated per workweek stays contained inside a single pay period. Semimonthly periods vary in length between 13 and 16 days and do not align with workweek boundaries, so a single workweek's hours can span two different paychecks, complicating overtime calculation and recordkeeping.</p>

        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>We Run Every Cycle, On Your Schedule.</h3>
          <p style={{ marginBottom: '1.5rem' }}>Whether you run semimonthly, biweekly, or weekly, BEG manages payroll at $25-$45 per employee per month, all-inclusive.</p>
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
            <a href="/blog/payroll/calendars/weekly-payroll-schedule-guide" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              Weekly Payroll Schedule Guide &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the difference between semimonthly and biweekly payroll?","acceptedAnswer":{"@type":"Answer","text":"Semimonthly payroll pays twice a month on fixed dates, such as the 15th and last business day, producing 24 pay periods a year. Biweekly payroll pays every 14 days on a fixed weekday, producing 26 pay periods a year."}},{"@type":"Question","name":"Which is better for overtime calculations, semimonthly or biweekly?","acceptedAnswer":{"@type":"Answer","text":"Biweekly aligns cleanly with a standard 7-day FLSA workweek, since each pay period always covers exactly two full workweeks. Semimonthly periods vary in length and can split a single workweek across two pay periods, adding complexity to overtime calculation."}},{"@type":"Question","name":"Does semimonthly or biweekly cost more to run?","acceptedAnswer":{"@type":"Answer","text":"Biweekly costs slightly more to process because it runs 26 times a year versus 24 for semimonthly, assuming a per-run cost structure. Under all-inclusive PEPM pricing, like BEG uses, the payroll frequency does not change your monthly rate."}},{"@type":"Question","name":"Can we switch from biweekly to semimonthly, or the reverse?","acceptedAnswer":{"@type":"Answer","text":"Yes, though the transition needs planning around employee communication, benefit deduction timing, and any state notice requirements for pay frequency changes. BEG manages that transition as part of onboarding."}},{"@type":"Question","name":"Which schedule do most companies use?","acceptedAnswer":{"@type":"Answer","text":"Biweekly is the most common pay frequency among U.S. private employers, largely because of its clean alignment with weekly time tracking and overtime rules. Semimonthly is common among salaried-only workforces and some public-sector employers."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Semimonthly vs. Biweekly Payroll: Which Fits You","description":"Semimonthly vs biweekly payroll compared: 24 vs 26 pay periods, budgeting impact, and overtime alignment, with a side-by-side table to help you decide.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/calendars/semimonthly-vs-biweekly-payroll","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/calendars/semimonthly-vs-biweekly-payroll"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Calendars","item":"https://www.beghr.com/blog/payroll/calendars"},{"@type":"ListItem","position":5,"name":"Semimonthly vs. Biweekly Payroll: Which Fits You","item":"https://www.beghr.com/blog/payroll/calendars/semimonthly-vs-biweekly-payroll"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll Calendars", title: "2026 Payroll Calendar: All 26 Biweekly Paydays", excerpt: "The complete 2026 payroll calendar with every biweekly pay period and payday mapped out...", href: "/blog/payroll/calendars/2026-payroll-calendar" },
        { category: "Payroll Calendars", title: "Weekly Payroll Schedule Guide", excerpt: "How 52 weekly payroll runs work, a sample month breakdown, and the cost and compliance tradeoffs...", href: "/blog/payroll/calendars/weekly-payroll-schedule-guide" },
        { category: "Payroll Calendars", title: "Payroll Tax Deadlines 2026: Federal Deposit Rules", excerpt: "Monthly vs semiweekly depositor schedules, Form 941 and Form 940 deadlines explained...", href: "/blog/payroll/calendars/payroll-tax-deadlines-2026" },
      ]} />
    </article>
  );
}
