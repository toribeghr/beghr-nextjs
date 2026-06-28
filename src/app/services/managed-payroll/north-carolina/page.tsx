import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'North Carolina Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for North Carolina employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/north-carolina' },
  openGraph: {
    title: 'North Carolina Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for North Carolina employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/north-carolina',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'North Carolina Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for North Carolina employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('north-carolina-payroll');

export default function PayrollNorthCarolinaPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for North Carolina employers"
      eyebrow="Managed Payroll - North Carolina"
      showHeroImage={false}
      title="North Carolina payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for North Carolina employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
      calendlyLink={CALENDLY}
      heroStats={[
        { value: '$25-$45', label: 'Per employee per month, all-inclusive' },
        { value: 'All 50', label: 'States covered from one account' },
        { value: '3-5 days', label: 'Implementation time' },
      ]}
    >
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">North Carolina Payroll Requirements</p>
            <h2>What makes North Carolina payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>North Carolina levies a flat state income tax of 4.75%, scheduled to decrease further in subsequent years as part of an ongoing phased reduction. Employers must withhold North Carolina income tax from wages and remit to the North Carolina Department of Revenue on a monthly or quarterly schedule based on withholding liability. North Carolina SUI is administered by the Division of Employment Security within the Department of Commerce.</p>
            <p>North Carolina does not have a state disability insurance program or mandatory paid family leave funded through payroll contributions. Overtime follows federal FLSA rules. North Carolina&apos;s Wage and Hour Act has provisions around final paycheck timing and allowable deductions. Employers must report new hires to the North Carolina Department of Health and Human Services Child Support Enforcement section.</p>
            <p>BEG manages North Carolina payroll: flat income tax withholding at the current rate, quarterly remittances to the Department of Revenue, SUI filings with the Division of Employment Security, new hire reporting, garnishment processing, and year-end W-2 production. As North Carolina continues its flat tax rate reductions, BEG updates withholding configurations before each effective date so your payroll remains accurate without your team tracking legislative schedules.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for North Carolina employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and North Carolina state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>North Carolina state income tax withholding (if applicable)</li>
            <li>North Carolina state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to North Carolina state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off North Carolina payroll?</h2>
          <p style={{ color: '#ccc', marginBottom: '2rem' }}>15-minute discovery call. We scope your situation and tell you exactly what BEG would handle.</p>
          <a href={CALENDLY} className="btn btn--gold">Book a Free Discovery Call</a>
          <p style={{ color: '#888', fontSize: '0.85rem', marginTop: '1rem' }}>$25-$45 PEPM all-inclusive. No migration required. Live in 3-5 business days.</p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'North Carolina Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'North Carolina' },
            description: 'Fully managed payroll for North Carolina employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://beghr.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Managed Payroll', item: 'https://beghr.com/services/managed-payroll' },
              { '@type': 'ListItem', position: 4, name: 'North Carolina', item: 'https://beghr.com/services/managed-payroll/north-carolina' },
            ],
          })
        }}
      />
    </ServicePage>
  );
}
