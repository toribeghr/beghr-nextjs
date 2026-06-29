import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Illinois Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Illinois employers at $25-$45 PEPM. Illinois payroll tax and WARN Act compliance. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/illinois' },
  openGraph: {
    title: 'Illinois Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Illinois employers at $25-$45 PEPM. Illinois payroll tax and WARN Act compliance. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/illinois',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Illinois Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Illinois employers at $25-$45 PEPM. Illinois payroll tax and WARN Act compliance. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('illinois-payroll');

export default function PayrollIllinoisPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Illinois employers"
      eyebrow="Managed Payroll - Illinois"
      showHeroImage={false}
      title="Illinois payroll is the most complex in the country. We handle all of it."
      description="BEG provides fully managed payroll for Illinois employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Illinois Payroll Requirements</p>
            <h2>What makes Illinois payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Illinois imposes a flat state income tax of 4.95% on wages. Employers must withhold Illinois income tax from wages each pay period and remit to the Illinois Department of Revenue on a schedule based on withholding liability. Illinois SUI is administered by the Illinois Department of Employment Security. Beyond the basic payroll tax structure, Illinois has a robust set of wage payment and employment laws that create compliance complexity beyond what the flat rate suggests.</p>
            <p>Illinois enforces the Illinois Wage Payment and Collection Act, which has specific rules around final paycheck timing, permissible deductions, and pay frequency. Chicago and Cook County add local minimum wage and paid leave ordinances on top of state requirements that must be tracked separately for employees working in those jurisdictions. Illinois&apos;s WARN Act applies to employers with 75 or more employees, requiring 60-day notice before mass layoffs.</p>
            <p>BEG handles Illinois payroll from withholding to year-end: flat income tax withholding at 4.95%, quarterly remittance and filing, SUI payments to IDES, local wage ordinance compliance for Chicago and Cook County employees, Wage Payment Act compliance, new hire reporting, garnishment processing, and W-2 production. Illinois&apos;s layered state and local requirements make accurate payroll more demanding than the flat rate implies. BEG manages all of it.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Illinois employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Illinois state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Illinois state income tax withholding (if applicable)</li>
            <li>Illinois state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Illinois state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Illinois payroll?</h2>
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
            name: 'Illinois Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'Illinois' },
            description: 'Fully managed payroll for Illinois employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Illinois', item: 'https://www.beghr.com/services/managed-payroll/illinois' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Paying for payroll in Illinois? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Enter your numbers to see your real cost per employee per month, how much you may be losing to add-on fees, and exactly what to get in writing before you sign. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
