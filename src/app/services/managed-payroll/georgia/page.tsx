import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Georgia Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Georgia employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/georgia' },
  openGraph: {
    title: 'Georgia Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Georgia employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/georgia',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Georgia Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Georgia employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('georgia-payroll');

export default function PayrollGeorgiaPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Georgia employers"
      eyebrow="Managed Payroll - Georgia"
      showHeroImage={false}
      title="Georgia payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Georgia employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Georgia Payroll Requirements</p>
            <h2>What makes Georgia payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Georgia levies a graduated state income tax with rates transitioning toward a flat rate of 5.49%. Employers must withhold Georgia income tax from wages using the current withholding tables published by the Georgia Department of Revenue and remit on a monthly or quarterly schedule depending on liability. Georgia SUI is administered by the Department of Labor.</p>
            <p>Georgia does not have a state disability insurance program or mandatory paid family leave at the state level. Overtime follows the federal FLSA standard. Georgia does have specific wage payment laws governing final paycheck timing and wage deduction rules that employers must follow.</p>
            <p>BEG manages Georgia payroll compliance each cycle. We configure withholding at the current Georgia rate, file quarterly returns with the Department of Revenue, remit SUI on schedule, process new hire reports to the Georgia New Hire Reporting Directory, handle garnishments, and produce W-2s at year end. As Georgia completes its flat tax transition, BEG keeps the configuration current.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Georgia employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Georgia state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Georgia state income tax withholding (if applicable)</li>
            <li>Georgia state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Georgia state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Georgia payroll?</h2>
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
            name: 'Georgia Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'Georgia' },
            description: 'Fully managed payroll for Georgia employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Georgia', item: 'https://www.beghr.com/services/managed-payroll/georgia' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
