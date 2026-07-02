import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Connecticut Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Connecticut employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/connecticut' },
  openGraph: {
    title: 'Connecticut Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Connecticut employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/connecticut',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Connecticut Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Connecticut employers at $25-$45 PEPM. State tax, SUI, and compliance handled. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('connecticut-payroll');

export default function PayrollConnecticutPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Connecticut employers"
      eyebrow="Managed Payroll - Connecticut"
      showHeroImage={false}
      title="Connecticut payroll, fully managed at $25-$45 PEPM. Your team does nothing."
      description="BEG provides fully managed payroll for Connecticut employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Connecticut Payroll Requirements</p>
            <h2>What makes Connecticut payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Connecticut has a graduated state income tax with rates ranging from 2% to 6.99%. Employers must withhold Connecticut income tax from wages using the current withholding tables published by the Department of Revenue Services (DRS) and remit on the required schedule, which can be weekly, monthly, or quarterly depending on liability. Connecticut SUI is administered by the Department of Labor.</p>
            <p>Connecticut has a Paid Family and Medical Leave (PFML) program funded by employee payroll contributions that began benefit payments in 2022. Employers must withhold the employee PFML contribution each pay period and remit to the Connecticut Paid Leave Authority. Connecticut also has mandatory paid sick leave requirements for employers with 50 or more employees. Wage payment rules include specific requirements around pay frequency and final paycheck timing.</p>
            <p>BEG handles Connecticut&apos;s full payroll compliance picture: graduated income tax withholding at current DRS rates, PFML contribution withholding and remittance, paid sick leave tracking, SUI filings, new hire reporting, and year-end W-2 production. When Connecticut updates its PFML rates or withholding tables, BEG applies the changes automatically. Your team reviews payroll and approves. Everything else is handled.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Connecticut employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Connecticut state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Connecticut state income tax withholding (if applicable)</li>
            <li>Connecticut state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Connecticut state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Connecticut payroll?</h2>
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
            name: 'Connecticut Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'Connecticut' },
            description: 'Fully managed payroll for Connecticut employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Connecticut', item: 'https://www.beghr.com/services/managed-payroll/connecticut' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
    </ServicePage>
  );
}
