import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import JobDescriptionGrader from '@/components/JobDescriptionGrader';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Job Description Grader | BEG',
  description: 'Paste your job description and get an instant 0 to 100 score plus specific tips to attract better candidates faster. Free, no email required.',
  alternates: {
    canonical: 'https://www.beghr.com/resources/job-description-grader',
  },
  openGraph: {
    title: 'Job Description Grader | BEG',
    description: 'Paste your job description and get an instant 0 to 100 score plus specific tips to attract better candidates faster. Free, no email required.',
    url: 'https://www.beghr.com/resources/job-description-grader',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Job Description Grader | BEG',
    description: 'Paste your job description and get an instant 0 to 100 score plus specific tips to attract better candidates faster. Free, no email required.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

export default function JobDescriptionGraderPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Job Description Grader', item: 'https://www.beghr.com/resources/job-description-grader' },
            ],
          }),
        }}
      />

      {/* INTRO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Tool</p>
            <h1>Job Description Grader</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              A weak job description quietly kills your pipeline. Paste yours and get an instant 0 to 100 score across the six things that decide whether strong candidates apply, plus specific, actionable tips. Everything runs in your browser. No email required.
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
            toolName="Job Description Grader"
            toolDescription="Send me a full job description rewrite review from a BEG placement specialist."
            assetLabel="Email me a full JD review"
            calendlyLink={calendly}
          />
        </div>
      </section>

      <JobDescriptionGrader />

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Fix Your Pipeline</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Get your placement quote in 90 seconds, then book a call for a full job description rewrite review.</h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            BEG is a permanent placement service and an authorized reseller of iSolved Job Placement. We fill roles in 23 to 35 days with an 86% fill rate, at roughly 50% less than contingency, backed by a 45-day replacement guarantee. Book a call and we will help you rewrite the posting to attract the right candidates.
          </p>
          <PricingCta service="job-placement" subline={false} />
        </div>
      </section>
    </>
  );
}
