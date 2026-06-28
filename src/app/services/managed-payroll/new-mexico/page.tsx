import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'New Mexico Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for New Mexico employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/new-mexico' },
  openGraph: {
    title: 'New Mexico Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for New Mexico employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/new-mexico',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'New Mexico Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for New Mexico employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('new-mexico-payroll');

export default function PayrollNewMexicoPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for New Mexico employers"
      eyebrow="Managed Payroll - New Mexico"
      showHeroImage={false}
      title="New Mexico payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for New Mexico employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">New Mexico Payroll Requirements</p>
            <h2>What makes New Mexico payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>New Mexico levies a graduated state income tax with rates from 1.7% to 5.9%. Employers must withhold New Mexico income tax from wages using tables from the Taxation and Revenue Department and remit on a monthly or quarterly schedule. New Mexico SUI is administered by the Department of Workforce Solutions. New Mexico does not have a mandatory state disability insurance program or a state paid family leave program funded through payroll contributions.</p>
            <p>New Mexico has specific wage payment act requirements, including rules around final paycheck timing and permissible deductions from wages. New Mexico employers must report new hires to the New Mexico Department of Workforce Solutions. The state&apos;s economy includes a significant agricultural and energy sector, with some specific wage and hour rules that apply to workers in those industries.</p>
            <p>BEG manages New Mexico payroll compliance each cycle. We apply current graduated withholding rates, manage monthly and quarterly remittances to the Taxation and Revenue Department, file SUI returns with the Department of Workforce Solutions, process new hire reports, handle garnishments, and produce year-end W-2s. Consistent, accurate payroll in New Mexico requires staying current on withholding tables and filing schedules. BEG handles both so your team does not have to.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for New Mexico employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and New Mexico state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>New Mexico state income tax withholding (if applicable)</li>
            <li>New Mexico state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to New Mexico state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off New Mexico payroll?</h2>
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
            name: 'New Mexico Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'New Mexico' },
            description: 'Fully managed payroll for New Mexico employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'New Mexico', item: 'https://beghr.com/services/managed-payroll/new-mexico' },
            ],
          })
        }}
      />
    </ServicePage>
  );
}
