import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import SearchOverdueDiagnostic from '@/components/SearchOverdueDiagnostic';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Is Your Search Overdue? Diagnostic | BEG',
  description: 'Answer 5 quick questions and get an instant overdue score for your open role, plus a tailored hiring action plan. No email required.',
  alternates: {
    canonical: 'https://www.beghr.com/resources/search-overdue-diagnostic',
  },
  openGraph: {
    title: 'Is Your Search Overdue? Diagnostic | BEG',
    description: 'Answer 5 quick questions and get an instant overdue score for your open role, plus a tailored hiring action plan. No email required.',
    url: 'https://www.beghr.com/resources/search-overdue-diagnostic',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Your Search Overdue? Diagnostic | BEG',
    description: 'Answer 5 quick questions and get an instant overdue score for your open role, plus a tailored hiring action plan. No email required.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

export default function SearchOverdueDiagnosticPage() {
  const calendly = getCalendlyLink();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Search Overdue Diagnostic', item: 'https://www.beghr.com/resources/search-overdue-diagnostic' },
            ],
          }),
        }}
      />

      {/* INTRO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Tool</p>
            <h1>Is your search overdue?</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              BEG fills permanent roles in 23 to 35 days with an 86% fill rate. Answer 5 quick questions about your open role and get an instant 0 to 100 overdue score, a clear verdict, and a tailored recommendation on what to do next. No email required.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to all resources</Link>
          </div>
        </div>
      </section>

      <section className="section section--soft" style={{ paddingTop: '1.5rem' }}>
        <div className="container" style={{ maxWidth: '640px', display: 'flex', justifyContent: 'center' }}>
          <LeadCaptureForm
            toolName="Search Overdue Diagnostic"
            toolDescription="Send me a tailored hiring action plan based on how overdue my open role is."
            assetLabel="Email me my action plan"
            calendlyLink={calendly}
          />
        </div>
      </section>

      <SearchOverdueDiagnostic />

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Reset Your Search</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Get your placement quote in 90 seconds, then book a call for a tailored hiring action plan.</h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            BEG is a permanent placement service and an authorized reseller of isolved Job Placement. We fill roles in 23 to 35 days with an 86% fill rate, at roughly 50% less than contingency, backed by a 45-day replacement guarantee. Book a call to get a plan built around your open role.
          </p>
          <PricingCta service="job-placement" subline={false} />
        </div>
      </section>
    </>
  );
}
