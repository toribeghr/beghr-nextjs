import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Washington Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Washington employers at $25-$45 PEPM. Washington L&I, PFML, and SDI all handled. No migration required.',
  alternates: { canonical: 'https://beghr.com/services/managed-payroll/washington' },
  openGraph: {
    title: 'Washington Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Washington employers at $25-$45 PEPM. Washington L&I, PFML, and SDI all handled. No migration required.',
    url: 'https://beghr.com/services/managed-payroll/washington',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Washington Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Washington employers at $25-$45 PEPM. Washington L&I, PFML, and SDI all handled. No migration required.', images: ['https://beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('washington-payroll');

export default function PayrollWashingtonPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Washington employers"
      eyebrow="Managed Payroll - Washington"
      showHeroImage={false}
      title="Washington payroll including L&I, PFML, and SDI. Fully managed."
      description="BEG provides fully managed payroll for Washington employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Washington Payroll Requirements</p>
            <h2>What makes Washington payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Washington State has no state income tax on wages, removing that withholding and filing obligation from Washington employers. However, Washington has some of the most extensive mandatory payroll programs outside of California: the Washington State Department of Labor and Industries (L&amp;I) administers the state workers compensation system, requiring employer contributions based on employee hours and job classification. Washington also has a mandatory Paid Family and Medical Leave (PFML) program with both employer and employee contributions, and a state long-term care insurance program (WA Cares Fund) requiring employee contributions.</p>
            <p>Washington&apos;s workers comp system is state-funded, unlike most states where employers purchase private workers comp insurance. L&amp;I rates vary by employee job classification and the employer&apos;s claims history. The PFML program requires per-pay-period withholding of the employee share and payment of the employer share. The WA Cares Fund requires employee contributions to fund long-term care benefits. Washington also has mandatory paid sick leave for all employees under the Washington Paid Sick Leave law.</p>
            <p>BEG manages Washington&apos;s full payroll compliance stack: L&amp;I workers comp reporting and contribution payments by job classification, PFML employer and employee contribution management, WA Cares Fund employee contribution withholding and remittance, paid sick leave tracking, SUI filings with the Employment Security Department, new hire reporting, federal payroll tax management, and year-end W-2 production. Washington&apos;s absence of income tax is offset by its extensive mandatory program requirements. BEG handles every program, every cycle.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Washington employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Washington state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Washington state income tax withholding (if applicable)</li>
            <li>Washington state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Washington state agencies</li>
            <li>Garnishment processing and remittance</li>
            <li>Washington L&I workers comp reporting and PFML contributions</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Washington payroll?</h2>
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
            name: 'Washington Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://beghr.com' },
            areaServed: { '@type': 'State', name: 'Washington' },
            description: 'Fully managed payroll for Washington employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Washington', item: 'https://beghr.com/services/managed-payroll/washington' },
            ],
          })
        }}
      />
    </ServicePage>
  );
}
