import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'South Dakota Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for South Dakota employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/south-dakota' },
  openGraph: {
    title: 'South Dakota Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for South Dakota employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/south-dakota',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'South Dakota Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for South Dakota employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('south-dakota-payroll');

export default function PayrollSouthDakotaPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for South Dakota employers"
      eyebrow="Managed Payroll - South Dakota"
      showHeroImage={false}
      title="South Dakota payroll without the state income tax headache. We handle everything else."
      description="BEG provides fully managed payroll for South Dakota employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">South Dakota Payroll Requirements</p>
            <h2>What makes South Dakota payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>South Dakota has no state income tax, which removes state withholding and the associated quarterly filing and remittance obligations entirely. For employers managing multi-state payroll, South Dakota is one of the simplest states from a tax compliance perspective. There is no state income tax return to file and no withholding tables to configure.</p>
            <p>South Dakota SUI is administered by the Department of Labor and Regulation, and employers must file quarterly SUI returns and remit payments on schedule. New hire reporting goes to the South Dakota New Hire Reporting Program. South Dakota does not have a mandatory state disability insurance program or paid family leave funded through payroll contributions. Federal payroll tax obligations remain standard regardless of state.</p>
            <p>BEG manages the South Dakota payroll requirements that remain: federal payroll tax withholding and 941 filings, SUI filings and payments to the Department of Labor and Regulation, new hire reporting, garnishment processing, and year-end W-2 production. No state income tax means less compliance overhead for South Dakota employers. BEG handles what remains so your team handles nothing.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for South Dakota employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and South Dakota state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>South Dakota state income tax withholding (if applicable)</li>
            <li>South Dakota state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to South Dakota state agencies</li>
            <li>Garnishment processing and remittance</li>
            <li>No state income tax withholding required - simplified compliance</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off South Dakota payroll?</h2>
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
            name: 'South Dakota Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'South Dakota' },
            description: 'Fully managed payroll for South Dakota employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'South Dakota', item: 'https://www.beghr.com/services/managed-payroll/south-dakota' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
