import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Colorado Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Colorado employers at $25-$45 PEPM. Colorado FAMLI and earned sick leave. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/colorado' },
  openGraph: {
    title: 'Colorado Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Colorado employers at $25-$45 PEPM. Colorado FAMLI and earned sick leave. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/colorado',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Colorado Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Colorado employers at $25-$45 PEPM. Colorado FAMLI and earned sick leave. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('colorado-payroll');

export default function PayrollColoradoPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Colorado employers"
      eyebrow="Managed Payroll - Colorado"
      showHeroImage={false}
      title="Colorado payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Colorado employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Colorado Payroll Requirements</p>
            <h2>What makes Colorado payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Colorado levies a flat state income tax currently at 4.4%, which employers withhold from employee wages each pay period and remit to the Colorado Department of Revenue on a schedule determined by your withholding liability. Colorado SUI is administered by the Department of Labor and Employment. Colorado also has a mandatory Family and Medical Leave Insurance (FAMLI) program that requires both employer and employee contributions, similar to California&apos;s SDI system.</p>
            <p>Colorado&apos;s FAMLI program launched in 2023, making Colorado one of the newer states with mandatory paid family and medical leave. Employers must withhold the employee share of FAMLI contributions and pay the employer share, remit to the state, and report contributions on the required schedule. Colorado also mandates paid sick leave for employees under the Healthy Families and Workplaces Act.</p>
            <p>BEG manages Colorado&apos;s layered payroll requirements: state income tax withholding, FAMLI employer and employee contributions, SUI filings, paid sick leave tracking, new hire reporting, and year-end W-2 production. When Colorado updates FAMLI contribution rates or sick leave rules, BEG updates your configuration. Your team sees accurate payroll without tracking multiple state programs.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Colorado employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Colorado state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Colorado state income tax withholding (if applicable)</li>
            <li>Colorado state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Colorado state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Colorado payroll?</h2>
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
            name: 'Colorado Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'Colorado' },
            description: 'Fully managed payroll for Colorado employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Colorado', item: 'https://www.beghr.com/services/managed-payroll/colorado' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
