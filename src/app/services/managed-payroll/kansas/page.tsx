import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Kansas Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Kansas employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/kansas' },
  openGraph: {
    title: 'Kansas Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Kansas employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/kansas',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Kansas Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Kansas employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('kansas-payroll');

export default function PayrollKansasPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Kansas employers"
      eyebrow="Managed Payroll - Kansas"
      showHeroImage={false}
      title="Kansas payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Kansas employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Kansas Payroll Requirements</p>
            <h2>What makes Kansas payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Kansas levies a graduated state income tax with rates at 3.1% and 5.7% across two brackets. Employers must withhold Kansas income tax from wages using tables published by the Kansas Department of Revenue and remit on a monthly or quarterly schedule. Kansas SUI is administered by the Department of Labor, with new employer rates that vary by industry. Kansas cities may also levy local earnings taxes in some jurisdictions.</p>
            <p>Kansas does not have a mandatory state disability insurance program or paid family leave program. Overtime follows federal FLSA rules. Kansas has wage payment act requirements around final paycheck timing and permissible deductions. Kansas City, Kansas area employers may face additional local tax compliance depending on where employees work.</p>
            <p>BEG handles Kansas payroll from withholding to year-end. We apply current graduated withholding rates, manage remittances to the Kansas Department of Revenue, file SUI returns, process new hire reports to the Kansas New Hire Directory, handle garnishments, and produce year-end W-2s. Kansas payroll is straightforward compared to highly complex states, but the ongoing compliance work still requires consistent attention. BEG provides that attention so your team does not have to.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Kansas employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Kansas state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Kansas state income tax withholding (if applicable)</li>
            <li>Kansas state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Kansas state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Kansas payroll?</h2>
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
            name: 'Kansas Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'Kansas' },
            description: 'Fully managed payroll for Kansas employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Kansas', item: 'https://beghr.com/services/managed-payroll/kansas' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Paying for payroll in Kansas? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Enter your numbers to see your real cost per employee per month, how much you may be losing to add-on fees, and exactly what to get in writing before you sign. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
