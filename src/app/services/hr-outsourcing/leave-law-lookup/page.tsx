import { Metadata } from 'next';
import Link from 'next/link';
import LeaveLawLookup from '@/components/LeaveLawLookup';
import PricingCta from '@/components/pricing/PricingCta';

export const metadata: Metadata = {
  title: 'State Leave Law Lookup | Sick & PFML by State | BEG',
  description: 'Check whether any state mandates paid sick leave or runs a state paid family and medical leave program, plus what a compliant handbook policy needs.',
  alternates: { canonical: 'https://www.beghr.com/services/hr-outsourcing/leave-law-lookup' },
  openGraph: {
    title: 'State Leave Law Lookup | Sick & PFML by State | BEG',
    description: 'Check whether any state mandates paid sick leave or runs a state paid family and medical leave program, plus what a compliant handbook policy needs.',
    url: 'https://www.beghr.com/services/hr-outsourcing/leave-law-lookup',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'State Leave Law Lookup | Sick & PFML by State | BEG',
    description: 'Check whether any state mandates paid sick leave or runs a state paid family and medical leave program, plus what a compliant handbook policy needs.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

export default function LeaveLawLookupPage() {
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
                url: 'https://www.beghr.com/services/hr-outsourcing/leave-law-lookup',
                name: 'State Leave Law Lookup | Sick & PFML by State | BEG',
                description: 'Check whether any state mandates paid sick leave or runs a state paid family and medical leave program.',
                datePublished: '2026-07-06',
                dateModified: '2026-07-06',
                author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti' },
                publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
                  { '@type': 'ListItem', position: 2, name: 'HR Outsourcing', item: 'https://www.beghr.com/services/hr-outsourcing' },
                  { '@type': 'ListItem', position: 3, name: 'State Leave Law Lookup', item: 'https://www.beghr.com/services/hr-outsourcing/leave-law-lookup' },
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
            <h1>State leave law lookup</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center' }}>
              Paid leave is where handbooks fall out of date fastest. Pick a state to see whether it mandates paid sick leave, whether it runs a state paid family and medical leave program, and what a compliant policy needs. No email required.
            </p>
            <p style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: '#888' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontWeight: '600' }}>Anthony Moretti</a>, VP of Sales &middot; Updated July 2026
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/services/hr-outsourcing" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to HR Outsourcing</Link>
          </div>
        </div>
      </section>

      <LeaveLawLookup />

      {/* CTA */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ background: '#000', borderRadius: '12px', padding: '2.5rem', color: '#fff', textAlign: 'center' }}>
            <p className="eyebrow" style={{ color: '#ECAC60' }}>HR Outsourcing, powered by isolved</p>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Stop tracking 50 states of leave law yourself</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
              Certified HR professionals build your handbook with a state supplement, keep leave policies current as laws change, and coach your managers, for a fraction of a full-time HR hire. Answer six questions and your monthly estimate appears on screen.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PricingCta service="hr-outsourcing" subline={false} />
            </div>
          </div>
        </div>
      </section>

      {/* CONTEXT + INTERNAL LINKS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why It Matters</p>
            <h2>One missed leave mandate can turn into back pay and penalties.</h2>
          </div>
          <p style={{ marginTop: '1.25rem', fontSize: '1rem', lineHeight: '1.8', color: '#555555', textAlign: 'center' }}>
            When you hire across state lines, each state&apos;s sick leave and family leave rules apply at once, and they change often. BEG&apos;s <Link href="/services/hr-outsourcing" style={{ color: '#ECAC60', fontWeight: '600' }}>HR outsourcing</Link> keeps every handbook and accrual policy current, and pairs cleanly with <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>managed payroll</Link> so a new hire in a new state is handled end to end, not a new compliance project.
          </p>
        </div>
      </section>
    </>
  );
}
