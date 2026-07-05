import { Metadata } from 'next';
import Link from 'next/link';
import PricingCta from '@/components/pricing/PricingCta';

export const metadata: Metadata = {
  title: 'HR Glossary | 20 Terms for Employers | BEG',
  description: 'Plain-language definitions of the HR terms employers run into, from co-employment and PEO to FMLA, at-will employment, and leave administration.',
  alternates: { canonical: 'https://www.beghr.com/resources/hr-glossary' },
  openGraph: {
    title: 'HR Glossary | 20 Terms for Employers | BEG',
    description: 'Plain-language definitions of the HR terms employers run into, from co-employment and PEO to FMLA, at-will employment, and leave administration.',
    url: 'https://www.beghr.com/resources/hr-glossary',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HR Glossary | 20 Terms for Employers | BEG', description: 'Plain-language definitions of the HR terms employers run into, from co-employment and PEO to FMLA, at-will employment, and leave administration.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const terms = [
  { label: 'Co-Employment', href: '/resources/hr-glossary/co-employment' },
  { label: 'PEO (Professional Employer Organization)', href: '/resources/hr-glossary/peo' },
  { label: 'ASO (Administrative Services Organization)', href: '/resources/hr-glossary/aso' },
  { label: 'HRO (HR Outsourcing)', href: '/resources/hr-glossary/hro' },
  { label: 'Employer of Record (EOR)', href: '/resources/hr-glossary/employer-of-record' },
  { label: 'Fractional HR', href: '/resources/hr-glossary/fractional-hr' },
  { label: 'HR Business Partner', href: '/resources/hr-glossary/hr-business-partner' },
  { label: 'FMLA', href: '/resources/hr-glossary/fmla' },
  { label: 'PFML (Paid Family and Medical Leave)', href: '/resources/hr-glossary/pfml' },
  { label: 'ALE (Applicable Large Employer)', href: '/resources/hr-glossary/ale-applicable-large-employer' },
  { label: 'Form I-9', href: '/resources/hr-glossary/i-9' },
  { label: 'New Hire Reporting', href: '/resources/hr-glossary/new-hire-reporting' },
  { label: 'Exempt vs Non-Exempt', href: '/resources/hr-glossary/exempt-vs-non-exempt' },
  { label: 'At-Will Employment', href: '/resources/hr-glossary/at-will-employment' },
  { label: 'Progressive Discipline', href: '/resources/hr-glossary/progressive-discipline' },
  { label: 'Tip Credit', href: '/resources/hr-glossary/tip-credit' },
  { label: 'Joint Employer', href: '/resources/hr-glossary/joint-employer' },
  { label: 'HR Compliance Audit', href: '/resources/hr-glossary/hr-compliance-audit' },
  { label: 'Employee Handbook', href: '/resources/hr-glossary/employee-handbook' },
  { label: 'Leave Administration', href: '/resources/hr-glossary/leave-administration' },
];

export default function HrGlossaryIndex() {
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
              { '@type': 'ListItem', position: 3, name: 'HR Glossary', item: 'https://www.beghr.com/resources/hr-glossary' },
            ],
          }),
        }}
      />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">HR Glossary</p>
            <h1>HR terms every employer should know</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center' }}>
              Plain-language definitions for the HR terms that trip up growing companies. From co-employment and PEO to FMLA and at-will employment, each entry explains what it means and why it matters. HR outsourcing, powered by isolved.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.85rem' }}>
            {terms.map(t => (
              <Link key={t.href} href={t.href} style={{ display: 'block', background: '#fff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1rem 1.15rem', textDecoration: 'none', color: '#000' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>{t.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div style={{ background: '#000', borderRadius: '12px', padding: '2.5rem', color: '#fff', textAlign: 'center' }}>
            <p className="eyebrow" style={{ color: '#ECAC60' }}>HR Outsourcing, powered by isolved</p>
            <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Rather have someone handle all of this?</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
              Certified HR professionals manage your handbook, leave administration, and compliance for a fraction of a $60K to $100K in-house HR hire. Answer a few questions and your monthly estimate appears on screen.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PricingCta service="hr-outsourcing" subline={false} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
