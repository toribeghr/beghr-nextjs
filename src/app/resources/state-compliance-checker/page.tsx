import { Metadata } from 'next';
import Link from 'next/link';
import StateComplianceChecker from '@/components/StateComplianceChecker';

export const metadata: Metadata = {
  title: 'State Payroll Compliance Checker | All 50 States | BEG',
  description: 'Check 2026 minimum wage, paid leave mandates, income tax, payday rules, and new hire reporting for any of the 50 states. Free, no email required.',
  alternates: {
    canonical: 'https://beghr.com/resources/state-compliance-checker',
  },
  openGraph: {
    title: 'State Payroll Compliance Checker | All 50 States | BEG',
    description: 'Check 2026 minimum wage, paid leave mandates, income tax, payday rules, and new hire reporting for any of the 50 states. Free, no email required.',
    url: 'https://beghr.com/resources/state-compliance-checker',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'State Payroll Compliance Checker | All 50 States | BEG',
    description: 'Check 2026 minimum wage, paid leave mandates, income tax, payday rules, and new hire reporting for any of the 50 states. Free, no email required.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

export default function StateComplianceCheckerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                url: 'https://beghr.com/resources/state-compliance-checker',
                name: 'State Payroll Compliance Checker | All 50 States | BEG',
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
                  { '@type': 'ListItem', position: 3, name: 'State Payroll Compliance Checker', item: 'https://beghr.com/resources/state-compliance-checker' },
                ],
              },
            ],
          }),
        }}
      />

      {/* INTRO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Tool</p>
            <h1>State payroll compliance checker</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '660px', margin: '1rem auto 0', textAlign: 'center' }}>
              Payroll rules change at every state line. Pick a state to see its 2026 minimum wage, paid sick and family leave mandates, state income tax, payday frequency requirement, and new hire reporting deadline in one quick snapshot. No email required.
            </p>
            <p style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: '#888' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontWeight: '600' }}>Anthony Moretti</a> &middot; Updated June 2026
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to Resources</Link>
          </div>
        </div>
      </section>

      <StateComplianceChecker />

      {/* CONTEXT + INTERNAL LINK */}
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why It Matters</p>
            <h2>One missed state rule can cost you more than payroll itself.</h2>
          </div>
          <p style={{ marginTop: '1.25rem', fontSize: '1rem', lineHeight: '1.8', color: '#555555', textAlign: 'center' }}>
            When you hire across state lines, you take on each state&apos;s wage, leave, tax, and registration rules at once. Missing one quietly creates penalties and back pay. BEG&apos;s <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>fully managed payroll</Link> keeps every state filed and registered for you, so a new hire in a new state is not a new compliance project.
          </p>
        </div>
      </section>
    </>
  );
}
