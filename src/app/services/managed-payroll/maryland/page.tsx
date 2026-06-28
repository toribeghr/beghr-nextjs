import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Maryland Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Maryland employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/maryland' },
  openGraph: {
    title: 'Maryland Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Maryland employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/maryland',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Maryland Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Maryland employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('maryland-payroll');

export default function PayrollMarylandPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Maryland employers"
      eyebrow="Managed Payroll - Maryland"
      showHeroImage={false}
      title="Maryland payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Maryland employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Maryland Payroll Requirements</p>
            <h2>What makes Maryland payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Maryland levies a graduated state income tax with rates from 2% to 5.75%, plus a mandatory county income tax that varies by county (ranging from 2.25% to 3.2%). Employers must withhold both state and county income tax from each employee&apos;s wages and remit to the Comptroller of Maryland. Each employee&apos;s county rate is determined by their county of residence. Maryland SUI is administered by the Division of Unemployment Insurance.</p>
            <p>Maryland has a Paid Family and Medical Leave program (Time to Care Act) with contributions beginning in 2025 and benefits available in 2026. Employers must withhold the employee share of PFML contributions and pay the employer share on the required schedule. Maryland also has specific wage payment act requirements, including strict rules around final paycheck timing and allowable deductions. Montgomery County and other Maryland jurisdictions may have additional local employment requirements.</p>
            <p>BEG manages Maryland&apos;s layered payroll compliance: state income tax withholding, county income tax withholding for each employee&apos;s county of residence, PFML contributions as the program rolls out, SUI filings, new hire reporting, garnishment processing, and W-2 production. Managing 24 different county tax rates alongside state withholding and the new PFML program is operationally intensive. BEG handles all of it.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Maryland employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Maryland state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Maryland state income tax withholding (if applicable)</li>
            <li>Maryland state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Maryland state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Maryland payroll?</h2>
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
            name: 'Maryland Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'Maryland' },
            description: 'Fully managed payroll for Maryland employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Maryland', item: 'https://beghr.com/services/managed-payroll/maryland' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Paying for payroll in Maryland? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Enter your numbers to see your real cost per employee per month, how much you may be losing to add-on fees, and exactly what to get in writing before you sign. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
