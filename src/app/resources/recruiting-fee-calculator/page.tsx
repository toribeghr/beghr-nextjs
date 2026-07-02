import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import RecruitingFeeCalculator from '@/components/RecruitingFeeCalculator';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Recruiting Fee Savings Calculator | BEG',
  description: 'Compare a contingency recruiter fee to BEG milestone placement. See your dollar savings - roughly 50% less than contingency - in seconds. No email required.',
  alternates: {
    canonical: 'https://www.beghr.com/resources/recruiting-fee-calculator',
  },
  openGraph: {
    title: 'Recruiting Fee Savings Calculator | BEG',
    description: 'Compare a contingency recruiter fee to BEG milestone placement. See your dollar savings - roughly 50% less than contingency - in seconds. No email required.',
    url: 'https://www.beghr.com/resources/recruiting-fee-calculator',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recruiting Fee Savings Calculator | BEG',
    description: 'Compare a contingency recruiter fee to BEG milestone placement. See your dollar savings - roughly 50% less than contingency - in seconds. No email required.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

export default function RecruitingFeeCalculatorPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Recruiting Fee Calculator', item: 'https://www.beghr.com/resources/recruiting-fee-calculator' },
            ],
          }),
        }}
      />

      {/* INTRO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Tool</p>
            <h1>Recruiting fee savings calculator</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              A contingency recruiter typically charges 20% to 25% of first-year salary per placement. BEG fills the same permanent role on milestone-based pricing at roughly 50% less. Enter the salary, pick a comparison rate, and see your savings instantly. No email required.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to all resources</Link>
          </div>
        </div>
      </section>

      <section className="section section--soft" style={{ paddingTop: '1.5rem' }}>
        <div className="container" style={{ maxWidth: '640px', display: 'flex', justifyContent: 'center' }}>
          <LeadCaptureForm toolName="Recruiting Fee Calculator" toolDescription="Send me a custom milestone-fee and savings estimate for my specific role." assetLabel="Email me my estimate" calendlyLink={calendly} />
        </div>
      </section>

      <RecruitingFeeCalculator />

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Get Your Exact Fee</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Book a free discovery call and get the exact milestone fee for your role.</h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            BEG is a permanent placement service and an authorized reseller of iSolved Job Placement. We fill roles in 23 to 35 days with an 86% fill rate, at roughly 50% less than contingency, backed by a 45-day replacement guarantee. Book a call to confirm the exact fee for your role.
          </p>
          <PricingCta service="job-placement" subline={false} />
        </div>
      </section>
    </>
  );
}
