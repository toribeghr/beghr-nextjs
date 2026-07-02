import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Hawaii Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Hawaii employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/hawaii' },
  openGraph: {
    title: 'Hawaii Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Hawaii employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/hawaii',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Hawaii Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Hawaii employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('hawaii-payroll');

export default function PayrollHawaiiPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Hawaii employers"
      eyebrow="Managed Payroll - Hawaii"
      showHeroImage={false}
      title="Hawaii payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Hawaii employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Hawaii Payroll Requirements</p>
            <h2>What makes Hawaii payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Hawaii levies a graduated state income tax with the highest rate reaching 11%, one of the steepest in the nation. Employers must withhold Hawaii income tax from wages using current tables from the Department of Taxation and remit on the required schedule. Hawaii also has a mandatory Temporary Disability Insurance (TDI) program that requires employee contributions to be withheld and remitted, as well as a Prepaid Health Care Act that mandates employer health insurance coverage for employees meeting hour thresholds.</p>
            <p>Hawaii&apos;s TDI program covers employees who cannot work due to non-work-related illness or injury. Employers must either purchase TDI insurance or qualify as a self-insured employer. Employee TDI contributions are withheld from wages. Hawaii SUI is administered by the Department of Labor and Industrial Relations. Hawaii also has its own paid family leave program under the TDI framework.</p>
            <p>BEG manages Hawaii&apos;s layered payroll requirements: state income tax withholding at current graduated rates, TDI contribution withholding and remittance, SUI filings, Prepaid Health Care Act compliance tracking, new hire reporting, and W-2 production. Hawaii&apos;s combination of high tax rates and mandatory insurance programs makes accurate payroll more demanding than most states. BEG handles all of it.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Hawaii employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Hawaii state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Hawaii state income tax withholding (if applicable)</li>
            <li>Hawaii state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Hawaii state agencies</li>
            <li>Garnishment processing and remittance</li>
            <li>Hawaii TDI disability insurance contribution management</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Hawaii payroll?</h2>
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
            name: 'Hawaii Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'Hawaii' },
            description: 'Fully managed payroll for Hawaii employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Hawaii', item: 'https://www.beghr.com/services/managed-payroll/hawaii' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
