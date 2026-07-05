import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import PayrollTaxCalendar from '@/components/PayrollTaxCalendar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payroll Tax Deadlines 2026: Deposit Rules Explained | BEG',
  description: 'Payroll tax deadlines for 2026: monthly vs semiweekly depositor schedules, Form 941 and Form 940 filing patterns, plus an interactive deadline calendar.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/calendars/payroll-tax-deadlines-2026' },
  openGraph: {
    title: 'Payroll Tax Deadlines 2026: Deposit Rules Explained | BEG',
    description: 'Payroll tax deadlines for 2026: monthly vs semiweekly depositor schedules, Form 941 and Form 940 filing patterns, plus an interactive deadline calendar.',
    url: 'https://www.beghr.com/blog/payroll/calendars/payroll-tax-deadlines-2026',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Payroll Tax Deadlines 2026: Deposit Rules Explained | BEG', description: 'Payroll tax deadlines for 2026: monthly vs semiweekly depositor schedules, Form 941 and Form 940 filing patterns, plus an interactive deadline calendar.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  {
    question: 'Am I a monthly or semiweekly depositor for federal payroll taxes?',
    answer: 'Your deposit schedule is set annually by the IRS based on your total tax liability during a lookback period, not by your choice. Most small employers start as monthly depositors; larger payrolls are typically semiweekly.',
  },
  {
    question: 'What is the difference between a monthly and semiweekly deposit schedule?',
    answer: 'Monthly depositors deposit withheld taxes by the 15th of the following month. Semiweekly depositors deposit based on payday: taxes for Wednesday, Thursday, or Friday paydays are due the following Wednesday, and taxes for Saturday through Tuesday paydays are due the following Friday.',
  },
  {
    question: 'When is Form 941 due?',
    answer: 'Form 941 is filed quarterly, generally due the last day of the month following the end of each quarter. Check the IRS employment tax due dates page for the exact current-year dates, since holidays and weekends can shift them.',
  },
  {
    question: 'When is Form 940 due?',
    answer: 'Form 940, the annual federal unemployment tax return, is generally due January 31 following the tax year, with an extension to February 10 if all FUTA deposits were made on time. Confirm exact dates on the IRS site each year.',
  },
  {
    question: 'Where can I find the exact 2026 filing dates?',
    answer: 'Use the IRS employment tax due dates page for authoritative current dates, and use the interactive calendar on this page to filter deadlines by category and quarter.',
  },
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Payroll Tax Deadlines 2026: Deposit Rules Explained", "datePublished": "2026-07-06", "dateModified": "2026-07-06", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/calendars/payroll-tax-deadlines-2026"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll Calendars</p>
              <h1>Payroll Tax Deadlines 2026: Deposit Rules Explained</h1>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Published:</strong> July 6, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <p>Missing a payroll tax deadline is one of the most common and most avoidable ways a business ends up with IRS penalties. The rules are published and predictable once you know which depositor category applies to you. This guide covers the deposit schedule patterns and the quarterly and annual filings every employer needs to track.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Monthly vs. Semiweekly Depositors</h2>

        <p>The IRS assigns your federal tax deposit schedule each year based on a lookback period, generally the total employment tax you reported in a prior 12-month window. You do not choose your schedule; it is determined by your payroll size.</p>

        <p><strong>Monthly depositors</strong> deposit withheld income tax, Social Security, and Medicare taxes by the 15th of the month following the month the wages were paid. This is the more common schedule for smaller employers.</p>

        <p><strong>Semiweekly depositors</strong> follow a payday-based rule rather than a calendar-month rule. Taxes for wages paid on Wednesday, Thursday, or Friday are due the following Wednesday. Taxes for wages paid on Saturday, Sunday, Monday, or Tuesday are due the following Friday. Semiweekly status typically applies to employers with larger payroll tax liability.</p>

        <p>Whichever schedule applies, the actual calendar dates shift every year around weekends and federal holidays. Rather than list specific 2026 calendar dates here that could drift out of date, verify current deposit due dates directly on the <a href="https://www.irs.gov/businesses/small-businesses-self-employed/employment-tax-due-dates" target="_blank" rel="noopener noreferrer" style={{ color: '#9a6b1f', fontWeight: '600' }}>IRS employment tax due dates page</a>, and use the interactive calendar below for a categorized, filterable view.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Form 941: Quarterly Federal Tax Return</h2>

        <p>Form 941 reports wages paid and payroll taxes withheld for each quarter. It is generally due the last day of the month following the end of the quarter, which as a pattern lands in late January, April, July, and October. Confirm the exact current-year date on the IRS site, since a due date landing on a weekend or holiday shifts to the next business day.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Form 940: Annual FUTA Return</h2>

        <p>Form 940 reports and reconciles federal unemployment tax for the year. As a published pattern, it is generally due January 31 following the tax year, with an extension to February 10 available if all FUTA deposits were made on time throughout the year. As with Form 941, verify the exact current date on the IRS site each year.</p>

        <h2 style={{ marginTop: '2rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Interactive 2026 Payroll Tax Calendar</h2>

        <p>Filter the deadlines below by category or quarter to see what applies to your business.</p>
      </section>

      <PayrollTaxCalendar />

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.6' }}>
        <div style={{ background: '#ECAC60', color: '#000000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2rem 0' }}>
          <h3 style={{ color: '#000000', margin: 0 }}>We Run Every Cycle, On Your Schedule.</h3>
          <p style={{ marginBottom: '1.5rem' }}>BEG tracks and files every federal and state payroll tax deadline as part of managed payroll at $25-$45 per employee per month, all-inclusive.</p>
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
            <a href="/blog/payroll/calendars/2026-payroll-calendar" style={{ display: 'inline-block', background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>
              2026 Payroll Calendar &rarr;
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
          __html: `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Am I a monthly or semiweekly depositor for federal payroll taxes?","acceptedAnswer":{"@type":"Answer","text":"Your deposit schedule is set annually by the IRS based on your total tax liability during a lookback period, not by your choice. Most small employers start as monthly depositors; larger payrolls are typically semiweekly."}},{"@type":"Question","name":"What is the difference between a monthly and semiweekly deposit schedule?","acceptedAnswer":{"@type":"Answer","text":"Monthly depositors deposit withheld taxes by the 15th of the following month. Semiweekly depositors deposit based on payday: taxes for Wednesday, Thursday, or Friday paydays are due the following Wednesday, and taxes for Saturday through Tuesday paydays are due the following Friday."}},{"@type":"Question","name":"When is Form 941 due?","acceptedAnswer":{"@type":"Answer","text":"Form 941 is filed quarterly, generally due the last day of the month following the end of each quarter. Check the IRS employment tax due dates page for the exact current-year dates, since holidays and weekends can shift them."}},{"@type":"Question","name":"When is Form 940 due?","acceptedAnswer":{"@type":"Answer","text":"Form 940, the annual federal unemployment tax return, is generally due January 31 following the tax year, with an extension to February 10 if all FUTA deposits were made on time. Confirm exact dates on the IRS site each year."}},{"@type":"Question","name":"Where can I find the exact 2026 filing dates?","acceptedAnswer":{"@type":"Answer","text":"Use the IRS employment tax due dates page for authoritative current dates, and use the interactive calendar on this page to filter deadlines by category and quarter."}}]}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BlogPosting","headline":"Payroll Tax Deadlines 2026: Deposit Rules Explained","description":"Payroll tax deadlines for 2026: monthly vs semiweekly depositor schedules, Form 941 and Form 940 filing patterns, plus an interactive deadline calendar.","datePublished":"2026-07-06","dateModified":"2026-07-06","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","worksFor":{"@type":"Organization","name":"Business Executive Group"}},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"url":"https://www.beghr.com/blog/payroll/calendars/payroll-tax-deadlines-2026","mainEntityOfPage":{"@type":"WebPage","@id":"https://www.beghr.com/blog/payroll/calendars/payroll-tax-deadlines-2026"}}`,
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.beghr.com"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.beghr.com/blog"},{"@type":"ListItem","position":3,"name":"Payroll","item":"https://www.beghr.com/blog/payroll"},{"@type":"ListItem","position":4,"name":"Calendars","item":"https://www.beghr.com/blog/payroll/calendars"},{"@type":"ListItem","position":5,"name":"Payroll Tax Deadlines 2026: Deposit Rules Explained","item":"https://www.beghr.com/blog/payroll/calendars/payroll-tax-deadlines-2026"}]}`,
        }}
      />
      <RelatedPosts posts={[
        { category: "Payroll Calendars", title: "2026 Payroll Calendar: All 26 Biweekly Paydays", excerpt: "The complete 2026 payroll calendar with every biweekly pay period and payday mapped out...", href: "/blog/payroll/calendars/2026-payroll-calendar" },
        { category: "Payroll Calendars", title: "Semimonthly vs. Biweekly Payroll: Which Fits You", excerpt: "24 vs 26 pay periods a year: how semimonthly and biweekly payroll compare for budgeting...", href: "/blog/payroll/calendars/semimonthly-vs-biweekly-payroll" },
        { category: "Payroll Calendars", title: "Weekly Payroll Schedule Guide", excerpt: "How 52 weekly payroll runs work, a sample month breakdown, and the cost and compliance tradeoffs...", href: "/blog/payroll/calendars/weekly-payroll-schedule-guide" },
      ]} />
    </article>
  );
}
