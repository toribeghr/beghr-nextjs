import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import VacantRoleCostCalculator from '@/components/VacantRoleCostCalculator';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Cost of a Vacant Role Calculator | BEG',
  description: 'See what an open role costs you every week it stays empty, plus a 4-week projection. BEG fills roles in 23 to 35 days. Free, no email required.',
  alternates: {
    canonical: 'https://www.beghr.com/resources/cost-of-vacant-role-calculator',
  },
  openGraph: {
    title: 'Cost of a Vacant Role Calculator | BEG',
    description: 'See what an open role costs you every week it stays empty, plus a 4-week projection. BEG fills roles in 23 to 35 days. Free, no email required.',
    url: 'https://www.beghr.com/resources/cost-of-vacant-role-calculator',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cost of a Vacant Role Calculator | BEG',
    description: 'See what an open role costs you every week it stays empty, plus a 4-week projection. BEG fills roles in 23 to 35 days. Free, no email required.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

export default function VacantRoleCostCalculatorPage() {
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
              { '@type': 'ListItem', position: 3, name: 'Cost of a Vacant Role Calculator', item: 'https://www.beghr.com/resources/cost-of-vacant-role-calculator' },
            ],
          }),
        }}
      />

      {/* INTRO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Tool</p>
            <h1>Cost of a vacant role calculator</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              Every week a role sits open, you lose the output that seat would produce. Enter the salary and how long the role has been open to see the cost so far, plus what it climbs to if it stays open another 4 weeks. No email required.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to all resources</Link>
          </div>
        </div>
      </section>

      <section className="section section--soft" style={{ paddingTop: '1.5rem' }}>
        <div className="container" style={{ maxWidth: '640px', display: 'flex', justifyContent: 'center' }}>
          <LeadCaptureForm toolName="Cost of a Vacant Role Calculator" toolDescription="Send me the full cost breakdown for my open role and how BEG fills it in 23-35 days." assetLabel="Email me the breakdown" calendlyLink={calendly} />
        </div>
      </section>

      <VacantRoleCostCalculator />

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Stop the Bleed</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Get your placement quote in 90 seconds and put a fill date on this role.</h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            BEG is a permanent placement service and an authorized reseller of isolved Job Placement. We fill roles in 23 to 35 days with an 86% fill rate, backed by a 45-day replacement guarantee. The faster the seat is filled, the less of this cost you pay.
          </p>
          <PricingCta service="job-placement" subline={false} />
        </div>
      </section>
    </>
  );
}
