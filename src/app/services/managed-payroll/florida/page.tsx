import { Metadata } from 'next';
import Link from 'next/link';
import ServicePage from '@/components/ServicePage';
import HiddenFeeAuditor from '@/components/HiddenFeeAuditor';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Florida Managed Payroll Services | BEG | $25-$45 PEPM',
  description: 'Fully managed payroll for Florida employers at $25-$45 PEPM. No state income tax, simplified compliance. No migration required.',
  alternates: { canonical: 'https://www.beghr.com/services/managed-payroll/florida' },
  openGraph: {
    title: 'Florida Managed Payroll Services | BEG | $25-$45 PEPM',
    description: 'Fully managed payroll for Florida employers at $25-$45 PEPM. No state income tax, simplified compliance. No migration required.',
    url: 'https://www.beghr.com/services/managed-payroll/florida',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Florida Managed Payroll Services | BEG | $25-$45 PEPM', description: 'Fully managed payroll for Florida employers at $25-$45 PEPM. No state income tax, simplified compliance. No migration required.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('florida-payroll');

export default function PayrollFloridaPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/managed-payroll.webp"
      imageAlt="Managed payroll for Florida employers"
      eyebrow="Managed Payroll - Florida"
      showHeroImage={false}
      title="Florida payroll without the state income tax headache. We handle everything else."
      description="BEG provides fully managed payroll for Florida employers at $25-$45 per employee per month, all-inclusive. No migration required. Your team approves payroll and receives reports. We handle everything else."
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
            <p className="eyebrow">Florida Payroll Requirements</p>
            <h2>What makes Florida payroll different from other states?</h2>
          </div>
          <div style={{ lineHeight: '1.7', fontSize: '1rem' }}>
            <p>Florida is one of nine states with no state income tax, which eliminates an entire layer of withholding, remittance, and quarterly filing work for Florida employers. There is no state income tax return to file, no withholding tables to configure, and no quarterly deposit schedules to manage at the state level for income tax purposes.</p>
            <p>Florida employers still have payroll obligations outside of income tax. Florida Reemployment Tax (the state equivalent of unemployment insurance) is required for most employers, with new employer rates set by the Florida Department of Revenue. Employers must register, file quarterly reemployment tax returns, and remit payments on schedule. New hire reporting goes to the Florida New Hire Reporting Center. Florida&apos;s wage payment laws also establish rules around final paycheck timing and allowable deductions.</p>
            <p>BEG handles the Florida payroll requirements that remain: Reemployment Tax filings and remittance, new hire reporting, federal payroll tax deposits and 941 filings, garnishment processing, and year-end W-2 production. The absence of state income tax means less compliance overhead for Florida employers. BEG handles what remains so your team handles nothing.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <h2>What BEG handles for Florida employers</h2>
          <ul style={{ lineHeight: '2', paddingLeft: '1.5rem' }}>
            <li>Payroll processing every cycle on your existing schedule</li>
            <li>Federal and Florida state payroll tax withholding and remittance</li>
            <li>Quarterly 941 filings and annual 940 FUTA filing</li>
            <li>Florida state income tax withholding (if applicable)</li>
            <li>Florida state unemployment insurance (SUI) reporting and payment</li>
            <li>W-2 production and delivery for all employees</li>
            <li>New hire reporting to Florida state agencies</li>
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
          <h2 style={{ color: '#ECAC60', marginBottom: '1rem' }}>Ready to hand off Florida payroll?</h2>
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
            name: 'Florida Managed Payroll Services',
            provider: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
            areaServed: { '@type': 'State', name: 'Florida' },
            description: 'Fully managed payroll for Florida employers at $25-$45 PEPM.',
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
              { '@type': 'ListItem', position: 4, name: 'Florida', item: 'https://www.beghr.com/services/managed-payroll/florida' },
            ],
          })
        }}
      />

      {/* PAYROLL FEE AUDITOR */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Payroll Tool</p>
            <h2>Paying for payroll in Florida? See what you are really paying.</h2>
            <p style={{ maxWidth: '670px', margin: '0.75rem auto 0', color: '#555555', lineHeight: 1.7 }}>Enter your numbers to see your real cost per employee per month, how much you may be losing to add-on fees, and exactly what to get in writing before you sign. Free, instant, and nothing leaves your browser.</p>
          </div>
        </div>
      </section>
      <HiddenFeeAuditor />
    </ServicePage>
  );
}
