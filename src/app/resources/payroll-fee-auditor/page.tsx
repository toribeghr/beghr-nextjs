import { Metadata } from 'next';
import Link from 'next/link';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';

const TITLE = 'Payroll Fee Auditor | See What They Really Charge | BEG';
const DESC = 'Free payroll fee auditor: enter your bill and the add-on fees you pay to see your real PEPM, whether you are overpaying, and what to get in writing before you sign.';
const URL = 'https://www.beghr.com/resources/payroll-fee-auditor';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: 'How much should payroll outsourcing cost?', a: 'Fully managed, all-inclusive payroll typically runs $25 to $45 per employee per month. Many providers advertise a lower base rate, then add per-run fees, year-end fees, and other charges that push the real cost well above that. The auditor shows your effective per-employee cost so you can compare like for like.' },
  { q: 'What are the most common hidden payroll fees?', a: 'Per-payroll-run fees, per-check fees, tax filing surcharges, year-end W-2 and 1099 fees, off-cycle run fees, check delivery fees, custom report fees, error correction fees, integration fees, new-hire setup fees, garnishment fees, and one-time setup fees. Flat all-inclusive providers fold all of these into one rate.' },
  { q: 'Does BEG charge any of these add-on fees?', a: 'No. BEG Managed Payroll is flat $25 to $45 PEPM, all-inclusive: tax filings, year-end forms, off-cycle runs, and corrections are all included.' },
];

export default function PayrollFeeAuditorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              { '@type': 'WebPage', '@id': URL, url: URL, name: TITLE, datePublished: '2026-06-28', dateModified: '2026-06-28', author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti', sameAs: ['https://www.linkedin.com/in/theanthonymoretti'], jobTitle: 'VP of Sales', worksFor: { '@type': 'Organization', name: 'Business Executive Group' } }, publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' } },
              { '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
              { '@type': 'BreadcrumbList', itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
                { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
                { '@type': 'ListItem', position: 3, name: 'Payroll Fee Auditor', item: URL },
              ] },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Tool</p>
            <h1>What is your payroll provider really charging you?</h1>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#777777' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60' }}>Anthony Moretti</a> &middot; Updated June 2026
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              Most payroll providers lead with a low base rate, then stack on per-run, year-end, and add-on fees until a $60 plan quietly becomes $300. Enter your numbers below to see your real cost per employee, what you may be overpaying, and exactly what to get in writing before you sign or renew.
            </p>
          </div>
        </div>
      </section>

      <HiddenFeeAuditor />

      {/* WHY IT MATTERS */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Why It Matters</p>
            <h2>The low base rate is the bait. The add-ons are the bill.</h2>
          </div>
          <p style={{ marginTop: '1.5rem', fontSize: '1rem', lineHeight: '1.8', color: '#555555', textAlign: 'center' }}>
            ADP and Paychex will not even publish a price, and nearly every provider bills per run, so the more often you pay people, the more you pay them. The simplest protection is a single flat all-in rate with nothing on the side.{' '}
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontWeight: '600' }}>BEG Managed Payroll</Link>{' '}
            is exactly that: $25 to $45 per employee per month, all-inclusive.
          </p>
          <p style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to Resources</Link>
          </p>
        </div>
      </section>
    </>
  );
}
