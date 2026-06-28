import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payroll Resources | Guides, Checklists & Tools | BEG',
  description: 'Free managed payroll guides, compliance checklists, ROI calculators, and industry tools from Business Executive Group.',
  alternates: {
    canonical: 'https://beghr.com/resources',
  },
  openGraph: {
    title: 'Payroll Resources | Guides, Checklists & Tools | BEG',
    description: 'Free managed payroll guides, compliance checklists, ROI calculators, and industry tools from Business Executive Group.',
    url: 'https://beghr.com/resources',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll Resources | Guides, Checklists & Tools | BEG',
    description: 'Free managed payroll guides, compliance checklists, ROI calculators, and industry tools from Business Executive Group.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

export default function ResourcesPage() {
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
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Resources</p>
            <h1>Payroll guides, tools, and checklists, free from BEG</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              Every resource below is built for employers running payroll in-house or evaluating a managed service. No fluff. Practical tools your team can use this week.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATORS & TOOLS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Calculators &amp; Tools</p>
            <h2>See the numbers before you decide anything</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              {
                tag: 'Calculator',
                title: 'Managed Payroll Cost Calculator',
                desc: 'Enter your employee count and current payroll cost. Get an instant estimate of what BEG managed payroll would cost you at $25-$45 PEPM versus what you pay today.',
                href: '/services/managed-payroll/cost-calculator',
                cta: 'Open Calculator',
              },
              {
                tag: 'Interactive Tool',
                title: 'Payroll Complexity Scorer',
                desc: 'Answer 10 questions about your payroll setup. Get a complexity score from 0 to 10 and a clear recommendation on whether managed payroll is the right fit.',
                href: '/resources/complexity-scorer',
                cta: 'Score Your Payroll',
              },
              {
                tag: 'Pricing Guide',
                title: 'Managed Payroll Pricing',
                desc: 'Understand exactly how $25-$45 PEPM works, what is included, and how your total monthly cost scales with headcount. No hidden fees.',
                href: '/services/managed-payroll/pricing',
                cta: 'See Pricing',
              },
            ].map(({ tag, title, desc, href, cta }) => (
              <div key={href} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="reveal">
                <span style={{ display: 'inline-block', background: '#000000', color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', alignSelf: 'flex-start' }}>{tag}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', lineHeight: '1.35', margin: 0 }}>{title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#555555', lineHeight: '1.65', margin: 0, flexGrow: 1 }}>{desc}</p>
                <Link href={href} className="btn btn--gold" style={{ alignSelf: 'flex-start', fontSize: '0.88rem', padding: '0.55rem 1.25rem' }}>{cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOADABLE GUIDES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Downloadable Guides</p>
            <h2>Free guides for payroll decision-makers</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              {
                tag: 'Free Guide',
                title: 'Year-End Payroll Checklist 2026',
                desc: 'W-2 production deadlines, 941 annual reconciliation, FUTA tax check, ACA reporting, state filing deadlines, and new year rate updates. Everything in one list.',
                href: '/resources/guides/year-end-payroll-checklist',
                cta: 'Download Free Checklist',
              },
              {
                tag: 'Free Guide',
                title: 'Managed Payroll Buyer\'s Guide',
                desc: 'What managed payroll actually is, how pricing models work, what questions to ask providers, red flags to avoid, and a vendor comparison scorecard.',
                href: '/resources/guides/managed-payroll-buyers-guide',
                cta: 'Download Free Guide',
              },
              {
                tag: 'All Guides',
                title: 'Payroll Guides Library',
                desc: 'Browse all free payroll guides from BEG including compliance checklists, new hire checklists, and step-by-step payroll setup guides.',
                href: '/resources/guides',
                cta: 'View All Guides',
              },
            ].map(({ tag, title, desc, href, cta }) => (
              <div key={href} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="reveal">
                <span style={{ display: 'inline-block', background: '#000000', color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', alignSelf: 'flex-start' }}>{tag}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', lineHeight: '1.35', margin: 0 }}>{title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#555555', lineHeight: '1.65', margin: 0, flexGrow: 1 }}>{desc}</p>
                <Link href={href} className="btn btn--gold" style={{ alignSelf: 'flex-start', fontSize: '0.88rem', padding: '0.55rem 1.25rem' }}>{cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE CHECKLISTS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Compliance Checklists</p>
            <h2>Stay ahead of payroll deadlines and filing requirements</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2.5rem' }}>
            {[
              {
                tag: 'Compliance',
                title: 'Payroll Compliance FAQ',
                desc: 'Federal and state payroll compliance questions answered: W-2 deadlines, 941 deposit rules, multi-state requirements, FLSA, and what managed payroll handles for you.',
                href: '/faq/payroll-compliance',
                cta: 'Read Compliance FAQ',
              },
              {
                tag: 'Switching',
                title: 'Switching Payroll Providers FAQ',
                desc: 'How to transition cleanly: timing, data migration, what to hand off, mid-quarter switches, and what BEG\'s onboarding process looks like.',
                href: '/faq/switching-payroll-providers',
                cta: 'Read Switching FAQ',
              },
              {
                tag: 'FAQ',
                title: 'Managed Payroll FAQ',
                desc: 'What is managed payroll, what does it cost, what is included, how long does implementation take, and how does it compare to a PEO.',
                href: '/faq/managed-payroll',
                cta: 'Read Managed Payroll FAQ',
              },
            ].map(({ tag, title, desc, href, cta }) => (
              <div key={href} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }} className="reveal">
                <span style={{ display: 'inline-block', background: '#000000', color: '#ECAC60', fontWeight: '700', fontSize: '0.72rem', padding: '0.2rem 0.6rem', borderRadius: '4px', letterSpacing: '0.06em', alignSelf: 'flex-start' }}>{tag}</span>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', lineHeight: '1.35', margin: 0 }}>{title}</h3>
                <p style={{ fontSize: '0.92rem', color: '#555555', lineHeight: '1.65', margin: 0, flexGrow: 1 }}>{desc}</p>
                <Link href={href} className="btn btn--gold" style={{ alignSelf: 'flex-start', fontSize: '0.88rem', padding: '0.55rem 1.25rem' }}>{cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY GUIDES */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '980px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Industry Guides</p>
            <h2>Payroll resources built for your industry</h2>
            <p style={{ marginTop: '1rem', color: '#555555', maxWidth: '600px', margin: '1rem auto 0', textAlign: 'center', lineHeight: '1.7' }}>
              Every industry has payroll complexity that generic software misses. These pages cover the specific rules, risks, and requirements for your sector.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2.5rem' }} className="reveal">
            {[
              { label: 'Legal Payroll', href: '/services/managed-payroll/legal' },
              { label: 'Healthcare Payroll', href: '/services/managed-payroll/healthcare' },
              { label: 'Technology Payroll', href: '/services/managed-payroll/technology' },
              { label: 'Finance Payroll', href: '/services/managed-payroll/finance' },
              { label: 'Engineering Payroll', href: '/services/managed-payroll/engineering' },
              { label: 'Trucking Payroll', href: '/services/managed-payroll/trucking' },
              { label: 'Franchise Payroll', href: '/services/managed-payroll/franchise' },
              { label: 'Cannabis Payroll', href: '/services/managed-payroll/cannabis' },
              { label: 'Childcare Payroll', href: '/services/managed-payroll/childcare' },
              { label: 'Home Health Payroll', href: '/services/managed-payroll/home-health' },
              { label: 'Church Payroll', href: '/services/managed-payroll/church' },
              { label: 'Marketing Agency Payroll', href: '/services/managed-payroll/marketing-agency' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1rem 1.25rem', fontWeight: '600', fontSize: '0.92rem', color: '#000000', transition: 'border-color 0.2s', textDecoration: 'none' }}>
                {label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Ready to Talk</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Have questions about managed payroll? Book a free 15-minute call.</h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            A BEG payroll specialist will review your current setup, answer your questions, and tell you what managed payroll would cost for your team. No commitment required.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Book a Free 15-Minute Call
          </Link>
          <p style={{ color: '#888888', fontSize: '0.85rem', marginTop: '0.75rem' }}>
            Or learn more about <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll services</Link>.
          </p>
        </div>
      </section>
    </>
  );
}
