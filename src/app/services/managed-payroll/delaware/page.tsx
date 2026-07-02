import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Delaware Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Delaware employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/delaware' },
  openGraph: {
    title: 'Delaware Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Delaware employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/delaware',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Delaware Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Delaware employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('delaware-payroll');

export default function PayrollDelawarePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Delaware employers"
      eyebrow="Managed Payroll - Delaware"
      showHeroImage={false}
      title="Delaware payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Delaware employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
      calendlyLink={CALENDLY}
      heroCta={<PricingCta service="managed-payroll" />}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered from one account' },
        { value: '3-5 days', label: 'Implementation time' },
      ]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Delaware Payroll Requirements</p>
            <h2>What makes Delaware payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Delaware has a graduated state income tax with rates up to 6.6%. Employers must withhold Delaware income tax from wages using the current withholding tables and remit to the Division of Revenue on the required schedule. Delaware SUI is administered by the Division of Unemployment Insurance within the Department of Labor. Delaware also operates a Paid Family and Medical Leave program.</p>
            <p>Delaware&apos;s PFML program began phasing in with contributions starting in 2025 and benefits available in 2026, making it one of the newer state leave programs. Employers must withhold employee contributions and remit on schedule. Delaware also has specific wage payment act requirements, including rules around timing of final paychecks and allowable payroll deductions.</p>
            <p>BEG manages Delaware payroll from withholding to year-end. We handle state income tax withholding, PFML contribution management as the program matures, SUI payments and filings, new hire reporting to the Division of Child Support Enforcement, and W-2 production. As Delaware&apos;s PFML program continues rolling out, BEG stays current on contribution rates and reporting requirements so you never fall behind.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Delaware employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Delaware state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Delaware state income tax withholding (if applicable)</li>
            <li>Delaware state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Delaware state agencies</li>
            <li>Garnishment processing and remittance</li>
            <li>State income tax withholding and annual reconciliation</li>
            <li>Year-end close and 1099 production for contractors</li>
          </ul>
          <p style={{ marginTop: '1.5rem' }}>
            <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>
              Learn more about BEG Managed Payroll
            </Link>{' '}- fully managed at $25-$45 PEPM, all 50 states.
          </p>
        </div>
      </section>

      <section className="section section--dark" style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Delaware payroll?</h2>
          <p style={{ color: '#ccc', marginBottom: '2rem' }}>15-minute discovery call. We scope your situation and tell you exactly what BEG would handle.</p>
          <PricingCta service="managed-payroll" subline={false} />
          <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '1rem' }}>$25-$45 PEPM all-inclusive. No migration required. Live in 3-5 business days.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Delaware Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'Delaware' },
            description: 'Fully managed payroll for Delaware employers at $25-$45 PEPM.',
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.beghr.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Managed Payroll', item: 'https://www.beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 4, name: 'Delaware', item: 'https://www.beghr.com/services/managed-payroll/delaware' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
