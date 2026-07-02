import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Wisconsin Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Wisconsin employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/wisconsin' },
  openGraph: {
    title: 'Wisconsin Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Wisconsin employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/wisconsin',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Wisconsin Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Wisconsin employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('wisconsin-payroll');

export default function PayrollWisconsinPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Wisconsin employers"
      eyebrow="Managed Payroll - Wisconsin"
      showHeroImage={false}
      title="Wisconsin payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Wisconsin employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Wisconsin Payroll Requirements</p>
            <h2>What makes Wisconsin payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Wisconsin levies a graduated state income tax with rates from 3.54% to 7.65%. Employers must withhold Wisconsin income tax from wages using tables from the Wisconsin Department of Revenue and remit on a monthly or quarterly schedule. Wisconsin SUI is administered by the Department of Workforce Development. Wisconsin does not have a mandatory state disability insurance program or paid family leave funded through payroll contributions.</p>
            <p>Wisconsin&apos;s graduated income tax has four brackets, requiring correct bracket application based on each employee&apos;s wages and filing status. Wisconsin has specific wage payment act requirements including rules around the frequency of pay periods, final paycheck timing, and required contents of wage statements. Wisconsin employers must report new hires to the Wisconsin New Hire Reporting Program within 20 days of hire.</p>
            <p>BEG manages Wisconsin payroll: graduated income tax withholding at current Wisconsin Department of Revenue rates, quarterly remittances and filings, SUI payments and filings with the Department of Workforce Development, new hire reporting, garnishment processing, and year-end W-2 production. Wisconsin&apos;s four-bracket system requires accurate configuration and annual updates when the Department of Revenue publishes new withholding tables. BEG handles that update process so your payroll never falls behind a table change.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Wisconsin employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Wisconsin state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Wisconsin state income tax withholding (if applicable)</li>
            <li>Wisconsin state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Wisconsin state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Wisconsin payroll?</h2>
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
            name: 'Wisconsin Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'Wisconsin' },
            description: 'Fully managed payroll for Wisconsin employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Wisconsin', item: 'https://www.beghr.com/services/managed-payroll/wisconsin' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
