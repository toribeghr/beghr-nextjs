import { Metadata } from 'next';
import Link from 'next/link';
import ComplexityQuiz from './ComplexityQuiz';

export const metadata: Metadata = {
  title: 'Payroll Complexity Scorer | Do You Need Managed Payroll? | BEG',
  description: 'Answer 10 questions about your payroll. Get a complexity score and a clear recommendation on whether managed payroll is right for you.',
  alternates: {
    canonical: 'https://beghr.com/resources/complexity-scorer',
  },
  openGraph: {
    title: 'Payroll Complexity Scorer | Do You Need Managed Payroll? | BEG',
    description: 'Answer 10 questions about your payroll. Get a complexity score and a clear recommendation on whether managed payroll is right for you.',
    url: 'https://beghr.com/resources/complexity-scorer',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll Complexity Scorer | Do You Need Managed Payroll? | BEG',
    description: 'Answer 10 questions about your payroll. Get a complexity score and a clear recommendation on whether managed payroll is right for you.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

export default function ComplexityScorerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Complexity Scorer', item: 'https://beghr.com/resources/complexity-scorer' },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Interactive Tool</p>
            <h1>Payroll Complexity Scorer</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '580px', margin: '1rem auto 0', textAlign: 'center' }}>
              Answer 10 questions. Get a score from 0 to 10 and a clear recommendation on whether managed payroll is the right fit for your business.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; Back to all resources</Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE QUIZ - client component */}
      <ComplexityQuiz />

      {/* CONTEXT */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">About This Tool</p>
            <h2>How the complexity score works</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginTop: '2rem' }} className="reveal">
            {[
              { range: '0-2', label: 'Low Complexity', color: '#2a7a2a', desc: 'Payroll software may work. Managed payroll still saves time.' },
              { range: '3-5', label: 'Moderate Complexity', color: '#a06000', desc: 'Managed payroll reduces errors and saves significant time.' },
              { range: '6-8', label: 'High Complexity', color: '#c0392b', desc: 'Managed payroll is strongly recommended. In-house risk is real.' },
              { range: '9-10', label: 'Critical Complexity', color: '#8b0000', desc: 'Managed payroll is essential. In-house is creating liability.' },
            ].map(({ range, label, color, desc }) => (
              <div key={range} style={{ background: '#ffffff', border: `2px solid ${color}`, borderRadius: '8px', padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: '900', color, lineHeight: 1, marginBottom: '0.4rem' }}>{range}</div>
                <div style={{ fontWeight: '700', fontSize: '0.85rem', color, marginBottom: '0.5rem' }}>{label}</div>
                <div style={{ fontSize: '0.83rem', color: '#555555', lineHeight: '1.55' }}>{desc}</div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', color: '#555555', fontSize: '0.92rem', lineHeight: '1.7', marginTop: '2rem' }}>
            Learn more about <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll services</Link> at $25-$45 PEPM, all-inclusive.
          </p>
        </div>
      </section>
    </>
  );
}
