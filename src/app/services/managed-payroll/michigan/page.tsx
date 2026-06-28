import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Michigan Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Michigan employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/michigan' },
  openGraph: {
    title: 'Michigan Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Michigan employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/michigan',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Michigan Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Michigan employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('michigan-payroll');

export default function PayrollMichiganPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Michigan employers"
      eyebrow="Managed Payroll - Michigan"
      showHeroImage={false}
      title="Michigan payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Michigan employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Michigan Payroll Requirements</p>
            <h2>What makes Michigan payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Michigan levies a flat state income tax of 4.05%. Employers must withhold Michigan income tax from wages and remit to the Michigan Department of Treasury on a monthly or quarterly schedule. Michigan SUI is administered by the Unemployment Insurance Agency. Michigan cities including Detroit, Grand Rapids, and others levy city income taxes that employers must withhold and remit separately from the state tax.</p>
            <p>Detroit&apos;s city income tax applies to residents and non-residents working in the city at different rates. Employers with employees working in other Michigan cities that levy local income taxes must track and remit to each city separately. Michigan does not have a state disability insurance program. Michigan has a Paid Medical Leave Act that applies to employers with 50 or more employees, requiring paid medical leave accrual.</p>
            <p>BEG manages Michigan payroll: flat state income tax withholding at 4.05%, city income tax withholding for Detroit and other applicable Michigan cities, Paid Medical Leave Act accrual tracking, SUI filings, new hire reporting, garnishment processing, and year-end W-2 production with state and local withholding. City tax compliance is the primary complexity in Michigan payroll. BEG manages each city&apos;s requirements so your team does not have to track multiple local jurisdictions.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Michigan employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Michigan state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Michigan state income tax withholding (if applicable)</li>
            <li>Michigan state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Michigan state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Michigan payroll?</h2>
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
            name: 'Michigan Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'Michigan' },
            description: 'Fully managed payroll for Michigan employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Michigan', item: 'https://beghr.com/services/managed-payroll/michigan' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Paying for payroll in Michigan? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Enter your numbers to see your real cost per employee per month, how much you may be losing to add-on fees, and exactly what to get in writing before you sign. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
