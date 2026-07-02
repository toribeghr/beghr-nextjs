import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Pennsylvania Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Pennsylvania employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/pennsylvania' },
  openGraph: {
    title: 'Pennsylvania Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Pennsylvania employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/pennsylvania',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Pennsylvania Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Pennsylvania employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('pennsylvania-payroll');

export default function PayrollPennsylvaniaPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Pennsylvania employers"
      eyebrow="Managed Payroll - Pennsylvania"
      showHeroImage={false}
      title="Pennsylvania payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Pennsylvania employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Pennsylvania Payroll Requirements</p>
            <h2>What makes Pennsylvania payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Pennsylvania levies a flat state income tax of 3.07%. Employers must withhold Pennsylvania income tax from wages and remit to the Pennsylvania Department of Revenue. Pennsylvania also has a complex local tax structure: the Local Earned Income Tax (EIT) applies to most Pennsylvania municipalities, with rates that vary by locality. Pennsylvania employers must withhold the local EIT for each employee based on their municipality of residence and remit to the appropriate local tax collector.</p>
            <p>Pennsylvania has over 2,500 taxing jurisdictions for the local EIT, making it one of the most complex local tax environments in the country. Philadelphia levies its own wage tax at a separate rate for residents and non-residents, requiring separate withholding and remittance. Pennsylvania SUI is administered by the Department of Labor and Industry. Pennsylvania does not have a mandatory state disability insurance program or a payroll-funded paid family leave program at the state level.</p>
            <p>BEG manages Pennsylvania&apos;s layered payroll: flat state income tax withholding at 3.07%, local EIT withholding for each employee&apos;s municipality, Philadelphia wage tax for Philadelphia employees, SUI filings and payments, new hire reporting, garnishment processing, and year-end W-2 production. Pennsylvania&apos;s local tax complexity is one of the most underestimated burdens in state payroll. BEG tracks and manages each jurisdiction so your team does not have to.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Pennsylvania employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Pennsylvania state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Pennsylvania state income tax withholding (if applicable)</li>
            <li>Pennsylvania state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Pennsylvania state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Pennsylvania payroll?</h2>
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
            name: 'Pennsylvania Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'Pennsylvania' },
            description: 'Fully managed payroll for Pennsylvania employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Pennsylvania', item: 'https://www.beghr.com/services/managed-payroll/pennsylvania' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
