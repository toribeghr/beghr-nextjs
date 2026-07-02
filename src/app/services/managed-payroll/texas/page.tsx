import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Texas Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Texas employers at $25-$45 PEPM. No state income tax, simplified compliance. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/texas' },
  openGraph: {
    title: 'Texas Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Texas employers at $25-$45 PEPM. No state income tax, simplified compliance. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/texas',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Texas Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Texas employers at $25-$45 PEPM. No state income tax, simplified compliance. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('texas-payroll');

export default function PayrollTexasPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Texas employers"
      eyebrow="Managed Payroll - Texas"
      showHeroImage={false}
      title="Texas payroll without the state income tax headache. We handle everything else."
      description="BEG provides fully managed payroll for Texas employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Texas Payroll Requirements</p>
            <h2>What makes Texas payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Texas has no state income tax, which removes state withholding, quarterly income tax filings, and annual state income tax remittance from the payroll compliance stack entirely. Texas employers have a significantly lighter state payroll compliance burden than employers in states with graduated income tax systems, and that simplicity is a real operational benefit for multi-state employers headquartered or operating in Texas.</p>
            <p>Texas SUI (called &apos;Unemployment Insurance&apos; in Texas) is administered by the Texas Workforce Commission. Employers must register, file quarterly UI returns, and remit payments on schedule. New hire reporting goes to the Texas Employer New Hire Reporting program. Texas does not have a mandatory state disability insurance program or paid family leave funded through payroll contributions. Texas&apos;s Payday Law establishes rules around pay frequency, allowable deductions, and final paycheck timing.</p>
            <p>BEG manages Texas payroll obligations: federal payroll tax withholding and 941 filings, SUI payments and quarterly filings with the Texas Workforce Commission, new hire reporting, garnishment processing, and year-end W-2 production. No state income tax means Texas is one of the cleanest payroll environments in the country. BEG handles what remains so your team handles none of it.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Texas employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Texas state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Texas state income tax withholding (if applicable)</li>
            <li>Texas state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Texas state agencies</li>
            <li>Garnishment processing and remittance</li>
            <li>No state income tax withholding required - simplified compliance</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Texas payroll?</h2>
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
            name: 'Texas Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'Texas' },
            description: 'Fully managed payroll for Texas employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Texas', item: 'https://www.beghr.com/services/managed-payroll/texas' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
