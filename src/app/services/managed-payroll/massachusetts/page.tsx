import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Massachusetts Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Massachusetts employers at $25-$45 PEPM. Massachusetts PFML and earned sick leave. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/massachusetts' },
  openGraph: {
    title: 'Massachusetts Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Massachusetts employers at $25-$45 PEPM. Massachusetts PFML and earned sick leave. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/massachusetts',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Massachusetts Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Massachusetts employers at $25-$45 PEPM. Massachusetts PFML and earned sick leave. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('massachusetts-payroll');

export default function PayrollMassachusettsPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Massachusetts employers"
      eyebrow="Managed Payroll - Massachusetts"
      showHeroImage={false}
      title="Massachusetts payroll is the most complex in the country. We handle all of it."
      description="BEG provides fully managed payroll for Massachusetts employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Massachusetts Payroll Requirements</p>
            <h2>What makes Massachusetts payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Massachusetts levies a flat state income tax of 5%, with a surtax of 4% on income over $1 million (the &apos;Fair Share Amendment&apos; enacted in 2022). For payroll purposes, most employees are subject to the 5% flat rate. Employers must withhold Massachusetts income tax and remit to the Massachusetts Department of Revenue. Massachusetts SUI is administered by the Department of Unemployment Assistance.</p>
            <p>Massachusetts has a Paid Family and Medical Leave (PFML) program that requires both employer and employee payroll contributions. Employers must withhold the employee share and pay the employer portion, remitting quarterly to the Commonwealth. Massachusetts also has a mandatory earned sick time law covering all employers, and the Massachusetts Wage Act has some of the strictest enforcement provisions in the country, including treble damages for willful violations and strict final paycheck rules requiring immediate payment on discharge.</p>
            <p>BEG manages Massachusetts payroll compliance: flat income tax withholding, PFML employer and employee contributions, earned sick time tracking, quarterly remittances and filings, SUI payments, new hire reporting, garnishment processing, and year-end W-2 production. Massachusetts&apos;s Wage Act penalties make payroll accuracy a legal risk management issue, not just an administrative one. BEG keeps your payroll compliant every cycle.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Massachusetts employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Massachusetts state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Massachusetts state income tax withholding (if applicable)</li>
            <li>Massachusetts state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Massachusetts state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Massachusetts payroll?</h2>
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
            name: 'Massachusetts Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'Massachusetts' },
            description: 'Fully managed payroll for Massachusetts employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Massachusetts', item: 'https://www.beghr.com/services/managed-payroll/massachusetts' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
