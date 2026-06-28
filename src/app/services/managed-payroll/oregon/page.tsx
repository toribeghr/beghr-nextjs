import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Oregon Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Oregon employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/oregon' },
  openGraph: {
    title: 'Oregon Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Oregon employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/oregon',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Oregon Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Oregon employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('oregon-payroll');

export default function PayrollOregonPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Oregon employers"
      eyebrow="Managed Payroll - Oregon"
      showHeroImage={false}
      title="Oregon payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Oregon employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Oregon Payroll Requirements</p>
            <h2>What makes Oregon payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Oregon levies a graduated state income tax with rates from 4.75% to 9.9%, one of the higher top marginal rates in the country. Employers must withhold Oregon income tax using tables from the Oregon Department of Revenue and remit on a monthly or quarterly schedule. Oregon SUI is administered by the Oregon Employment Department. Oregon also has a mandatory Paid Family and Medical Leave Insurance (PFMLI) program requiring both employer and employee payroll contributions.</p>
            <p>Oregon&apos;s PFMLI program began collecting contributions in 2023 and paying benefits in 2023. Employers must withhold the employee share and pay the employer share of PFMLI contributions each pay period, remitting to the Oregon Employment Department. Oregon also has a statewide paid sick leave law, and Portland has local taxes including the Metro supportive housing services tax and Multnomah County income tax that add local withholding for Portland-area employees.</p>
            <p>BEG manages Oregon&apos;s layered payroll compliance: graduated income tax withholding, PFMLI employer and employee contributions, Oregon Sick Leave tracking, Portland Metro and Multnomah County local tax withholding for applicable employees, SUI filings, new hire reporting, garnishment processing, and year-end W-2 production. Oregon&apos;s combination of a high state rate, mandatory PFMLI, and Portland local taxes creates a meaningful compliance stack. BEG manages the entire thing.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Oregon employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Oregon state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Oregon state income tax withholding (if applicable)</li>
            <li>Oregon state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Oregon state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Oregon payroll?</h2>
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
            name: 'Oregon Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'Oregon' },
            description: 'Fully managed payroll for Oregon employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Oregon', item: 'https://beghr.com/services/managed-payroll/oregon' },
            ],
          })
        }}
      />
    </ServicePage>
  );
}
