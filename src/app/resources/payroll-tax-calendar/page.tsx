import { Metadata } from 'next';
import Link from 'next/link';
import PayrollTaxCalendar from '@/components/PayrollTaxCalendar';

export const metadata: Metadata = {
  title: 'Payroll Tax Calendar 2026 | Every Deadline, One Page | BEG',
  description: 'Every 2026 federal and state payroll tax deadline in one filterable view. Form 941, FUTA, W-2, 1099, ACA, and state UI dates. Free, no email required.',
  alternates: {
    canonical: 'https://beghr.com/resources/payroll-tax-calendar',
  },
  openGraph: {
    title: 'Payroll Tax Calendar 2026 | Every Deadline, One Page | BEG',
    description: 'Every 2026 federal and state payroll tax deadline in one filterable view. Form 941, FUTA, W-2, 1099, ACA, and state UI dates. Free, no email required.',
    url: 'https://beghr.com/resources/payroll-tax-calendar',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll Tax Calendar 2026 | Every Deadline, One Page | BEG',
    description: 'Every 2026 federal and state payroll tax deadline in one filterable view. Form 941, FUTA, W-2, 1099, ACA, and state UI dates. Free, no email required.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://beghr.com/resources/payroll-tax-calendar#webpage',
      url: 'https://beghr.com/resources/payroll-tax-calendar',
      name: 'Payroll Tax Calendar 2026',
      description: 'Every 2026 federal and state payroll tax deadline in one filterable view.',
      datePublished: '2026-06-28',
      dateModified: '2026-06-28',
      author: {
        '@type': 'Person',
        name: 'Anthony Moretti',
        url: 'https://www.linkedin.com/in/theanthonymoretti',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Business Executive Group',
        url: 'https://beghr.com',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
        { '@type': 'ListItem', position: 3, name: 'Payroll Tax Calendar', item: 'https://beghr.com/resources/payroll-tax-calendar' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'When is Form 941 due in 2026?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Form 941 is filed quarterly. The 2026 due dates are April 30, July 31, and October 31, 2026, with the fourth-quarter return due February 1, 2027.',
          },
        },
        {
          '@type': 'Question',
          name: 'When are W-2s and 1099-NECs due?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'W-2s to employees and the SSA, and 1099-NECs to contractors and the IRS, are all due by January 31. For the 2026 tax year that deadline lands on February 1, 2027.',
          },
        },
        {
          '@type': 'Question',
          name: 'How does a monthly federal tax deposit schedule work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Monthly depositors deposit withheld income tax, Social Security, and Medicare by the 15th of the following month. Semiweekly depositors follow a separate next-Wednesday or next-Friday rule based on payday.',
          },
        },
      ],
    },
  ],
};

export default function PayrollTaxCalendarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Tool</p>
            <h1>2026 payroll tax calendar</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '660px', margin: '1rem auto 0', textAlign: 'center' }}>
              Every federal and common state payroll tax deadline for 2026 in one filterable view. Sort by category or quarter to see exactly what is due and when, from Form 941 and FUTA to W-2s, 1099s, ACA forms, and state unemployment returns. No email required.
            </p>
            <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#888' }}>
              By{' '}
              <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontWeight: '600' }}>
                Anthony Moretti
              </a>{' '}
              &middot; Updated June 2026
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to Resources</Link>
          </div>
        </div>
      </section>

      <PayrollTaxCalendar />

      {/* CONTEXT + CONTEXTUAL LINK */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why It Matters</p>
            <h2>Missed deadlines turn into penalties fast.</h2>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '1rem', lineHeight: '1.8', color: '#555555', textAlign: 'center' }}>
            Late deposits, late returns, and missing forms each carry their own IRS penalty, and the cost climbs the longer they sit. The simplest way to stay clear of all of it is to never miss a date in the first place. BEG&rsquo;s{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>fully managed payroll service</Link>{' '}
            tracks, files, and deposits every item on this calendar for you, so the deadlines become our job instead of yours.
          </p>
        </div>
      </section>
    </>
  );
}
