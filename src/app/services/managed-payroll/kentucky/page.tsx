import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Kentucky Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Kentucky employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/kentucky' },
  openGraph: {
    title: 'Kentucky Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Kentucky employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/kentucky',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Kentucky Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Kentucky employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('kentucky-payroll');

export default function PayrollKentuckyPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Kentucky employers"
      eyebrow="Managed Payroll - Kentucky"
      showHeroImage={false}
      title="Kentucky payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Kentucky employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Kentucky Payroll Requirements</p>
            <h2>What makes Kentucky payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Kentucky levies a flat state income tax of 4.5%. Employers must withhold Kentucky income tax from wages and remit to the Kentucky Department of Revenue on the required schedule, typically monthly or quarterly based on withholding liability. Kentucky SUI is administered by the Kentucky Office of Unemployment Insurance. Kentucky also has significant local income tax obligations: over 260 Kentucky cities, counties, and school districts levy local occupational taxes that employers must withhold and remit separately.</p>
            <p>Kentucky&apos;s local tax landscape is one of the most complex in the country for local jurisdictions. Employees working in Louisville, Lexington, and many other Kentucky cities and counties are subject to local occupational taxes in addition to the state flat rate. Rates, filing deadlines, and remittance procedures vary by jurisdiction. Employers with employees in multiple Kentucky localities must manage each separately.</p>
            <p>BEG manages both the state and local layers of Kentucky payroll compliance. We withhold the flat 4.5% state tax, identify and apply the correct local occupational tax rate for each employee&apos;s work location, manage quarterly remittances to all applicable local jurisdictions, file SUI returns, process new hire reports, handle garnishments, and produce year-end W-2s. Kentucky&apos;s local tax complexity is a real operational burden. BEG absorbs it entirely.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Kentucky employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Kentucky state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Kentucky state income tax withholding (if applicable)</li>
            <li>Kentucky state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Kentucky state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Kentucky payroll?</h2>
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
            name: 'Kentucky Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'Kentucky' },
            description: 'Fully managed payroll for Kentucky employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Kentucky', item: 'https://beghr.com/services/managed-payroll/kentucky' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Paying for payroll in Kentucky? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Enter your numbers to see your real cost per employee per month, how much you may be losing to add-on fees, and exactly what to get in writing before you sign. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
