import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Oklahoma Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Oklahoma employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/oklahoma' },
  openGraph: {
    title: 'Oklahoma Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Oklahoma employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/oklahoma',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Oklahoma Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Oklahoma employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('oklahoma-payroll');

export default function PayrollOklahomaPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Oklahoma employers"
      eyebrow="Managed Payroll - Oklahoma"
      showHeroImage={false}
      title="Oklahoma payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Oklahoma employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Oklahoma Payroll Requirements</p>
            <h2>What makes Oklahoma payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Oklahoma levies a graduated state income tax with rates from 0.25% to 4.75%. Employers must withhold Oklahoma income tax from wages using tables from the Oklahoma Tax Commission and remit on a monthly or quarterly schedule. Oklahoma SUI is administered by the Oklahoma Employment Security Commission. Oklahoma does not have a state disability insurance program or mandatory paid family leave funded through payroll contributions.</p>
            <p>Oklahoma&apos;s payroll environment is relatively straightforward compared to states with multiple mandatory programs. Compliance obligations center on state income tax withholding, SUI, new hire reporting, and federal tax remittance. Oklahoma&apos;s Wage and Hour Administration enforces state-specific wage payment laws around final paycheck timing and allowable deductions. Tulsa and Oklahoma City do not levy city income taxes, simplifying local tax compliance.</p>
            <p>BEG manages Oklahoma payroll: graduated income tax withholding at current Oklahoma Tax Commission rates, quarterly remittances and filings, SUI payments to the Oklahoma Employment Security Commission, new hire reporting to the Oklahoma Centralized Registry, garnishment processing, and year-end W-2 production. Oklahoma payroll is manageable but still requires consistent attention to filing deadlines and withholding accuracy. BEG provides that consistency every cycle.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Oklahoma employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Oklahoma state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Oklahoma state income tax withholding (if applicable)</li>
            <li>Oklahoma state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Oklahoma state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Oklahoma payroll?</h2>
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
            name: 'Oklahoma Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'Oklahoma' },
            description: 'Fully managed payroll for Oklahoma employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Oklahoma', item: 'https://beghr.com/services/managed-payroll/oklahoma' },
            ],
          })
        }}
      />
    </ServicePage>
  );
}
