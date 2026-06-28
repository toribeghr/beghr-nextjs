import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payroll Outsourcing FAQ | What You Need to Know | BEG',
  description: 'Everything employers need to know about outsourcing payroll: cost, risks, what to hand off, and how to choose a provider.',
  alternates: {
    canonical: 'https://beghr.com/faq/payroll-outsourcing',
  },
  openGraph: {
    title: 'Payroll Outsourcing FAQ | What You Need to Know | BEG',
    description: 'Everything employers need to know about outsourcing payroll: cost, risks, what to hand off, and how to choose a provider.',
    url: 'https://beghr.com/faq/payroll-outsourcing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll Outsourcing FAQ | What You Need to Know | BEG',
    description: 'Everything employers need to know about outsourcing payroll: cost, risks, what to hand off, and how to choose a provider.',
    images: ['https://beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: 'What is payroll outsourcing?',
    a: `Payroll outsourcing means transferring the responsibility for running payroll to an outside service provider. The scope of what gets outsourced varies by provider. At the low end, a vendor processes payroll runs while you still handle tax filings, W-2s, and compliance. At the high end. BEG's managed service, for example, the provider handles everything: processing, tax withholding and remittance, quarterly filings, W-2 production, garnishments, new hire reporting, and year-end close. True payroll outsourcing eliminates internal labor from the payroll function entirely.`,
  },
  {
    q: 'How much does payroll outsourcing cost?',
    a: 'Pricing varies significantly by provider and scope. Self-service payroll software with basic filing assistance runs $20-$60 per month for very small teams, but leaves most of the work to your staff. Full-service payroll outsourcing typically runs on a per-employee-per-month (PEPM) model. BEG charges $25-$45 PEPM all-inclusive: payroll processing, tax filings, W-2s, garnishments, new hire reporting, and year-end close are all covered at one flat monthly rate. Compare that to an in-house payroll manager at $60,000-$100,000 per year before benefits and overhead. The math almost always favors outsourcing by a meaningful margin.',
  },
  {
    q: 'What are the risks of outsourcing payroll?',
    a: `The main risk is choosing a vendor who delivers less than a full managed service. If your outsourcing provider processes payroll runs but leaves tax deposits, state filings, and compliance up to you, you have outsourced the easy part and kept the liability. Other risks include: poor support responsiveness (ticket queues instead of a dedicated contact), hidden fees that inflate the real monthly cost, and data security vulnerabilities if the provider does not maintain SOC 2 certification or equivalent controls. BEG mitigates these by providing a dedicated contact for every client, all-inclusive PEPM pricing with no hidden fees, and processing on iSolved\'s SOC 2 Type II certified infrastructure.`,
  },
  {
    q: 'What does a payroll outsourcing company handle?',
    a: 'A true payroll outsourcing company handles: gross-to-net payroll calculations every pay cycle, federal and state tax withholding and remittance, quarterly 941 and state unemployment filings, annual W-2 and 1099-NEC production and filing, direct deposit processing, garnishment calculation and remittance, new hire reporting in applicable states, ACA 1094/1095 reporting for qualifying employers, year-end reconciliation, and employee support for paycheck questions. If a vendor does not handle all of these as part of their service, ask what you will still be responsible for, and the answer will tell you exactly how much you are actually outsourcing.',
  },
  {
    q: 'How do I switch payroll providers?',
    a: 'Switching payroll providers involves four steps: gathering your historical payroll data (YTD wages, tax withholding, deductions, and employee records), providing that data to your new provider, running a parallel or test cycle to verify accuracy, and setting a go-live date. The ideal transition timing is at the start of a new quarter or new year, but mid-year and mid-quarter switches are possible. BEG handles the data gathering and migration as part of onboarding. Most clients switch in 3-5 business days from initial contact to first live payroll run. You do not need to manage the transition process yourself.',
  },
  {
    q: 'How long does it take to outsource payroll?',
    a: 'With BEG, most clients are live within 3-5 business days of signing. That includes a discovery call to scope the engagement, data collection and system configuration, a test payroll cycle, and confirmation of your dedicated BEG payroll contact. Larger organizations with complex multi-state setups, certified payroll requirements, or unusual pay structures may take longer, typically 7-14 business days. Providers who quote 30-60 day implementation timelines are understaffed or treating your onboarding as low priority.',
  },
  {
    q: 'Can I outsource just tax filing?',
    a: `Some providers offer tax-only services for employers who run their own payroll but want filing handled externally. BEG does not offer filing-only services. BEG's model is fully managed payroll, meaning we run the entire function. If you are evaluating tax-only outsourcing because you want to minimize disruption or cost, consider that the labor required to run payroll yourself and then hand off data for filing often exceeds the cost of full managed payroll. BEG\'s discovery call can help you understand whether a full managed approach would actually be simpler and less expensive than a split arrangement.`,
  },
  {
    q: 'What is the difference between outsourcing and a PEO?',
    a: `Payroll outsourcing keeps you as the employer of record. Your employees remain employed by your company. You outsource the administrative function of running payroll. A PEO (Professional Employer Organization) co-employs your workers. Your employees technically become employees of the PEO, giving the PEO control over which benefits carriers you use, how workers\' comp is structured, and sometimes how you handle terminations. A PEO can be valuable for very small employers who need access to better benefits packages. For most mid-size businesses, payroll outsourcing delivers the cost and compliance benefits without surrendering control over your employment decisions.`,
  },
  {
    q: 'What happens to my current payroll data?',
    a: 'When you move to a managed payroll service like BEG, your historical payroll data is migrated or imported into your new system. Year-to-date wage and tax information is preserved so W-2s at year-end reflect the full calendar year accurately regardless of when you switched providers. Employee records, direct deposit information, deduction setups, and pay history are all transferred. BEG handles the data migration as part of onboarding. If you stay in your existing payroll platform rather than migrating to iSolved, no data migration is required at all. BEG simply takes over operation of your current system.',
  },
  {
    q: 'Is payroll outsourcing right for my size company?',
    a: 'Payroll outsourcing is cost-effective at virtually any company size, but the reasons differ by stage. For companies under 25 employees, the primary benefit is eliminating the owner or office manager spending hours every pay period on payroll instead of on the business. For companies between 25 and 100 employees, the primary benefit is eliminating the cost of a dedicated payroll hire while maintaining professional compliance oversight. For companies over 100 employees with multi-state exposure, variable pay, and complex compliance requirements, managed payroll is almost always less expensive and more reliable than in-house. Book a free call with BEG to get an exact monthly cost for your headcount.',
  },
];

export default function PayrollOutsourcingFaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://beghr.com/faq' },
              { '@type': 'ListItem', position: 3, name: 'Payroll Outsourcing FAQ', item: 'https://beghr.com/faq/payroll-outsourcing' },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ q, a }) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h1>Payroll Outsourcing FAQ</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '620px', margin: '1rem auto 0', textAlign: 'center' }}>
              Everything employers need to know about outsourcing payroll: what it covers, what it costs, what the real risks are, and how to choose the right provider.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/faq" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; All FAQ topics</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="faq">
            {faqs.map(({ q, a }) => (
              <div key={q} className="faq-item reveal">
                <h2>{q}</h2>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Related Resources</p>
            <h2>More answers and tools</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }} className="reveal">
            {[
              { label: 'Managed Payroll FAQ', href: '/faq/managed-payroll' },
              { label: 'Payroll Compliance FAQ', href: '/faq/payroll-compliance' },
              { label: 'Switching Payroll Providers FAQ', href: '/faq/switching-payroll-providers' },
              { label: 'Payroll Cost Calculator', href: '/services/managed-payroll/cost-calculator' },
              { label: 'Managed Payroll Services', href: '/services/managed-payroll' },
              { label: 'Managed Payroll Pricing', href: '/services/managed-payroll/pricing' },
            ].map(({ label, href }) => (
              <Link key={href} href={href} style={{ display: 'block', background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '0.9rem 1.1rem', fontWeight: '600', fontSize: '0.9rem', color: '#000000' }}>
                {label} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#000000', color: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>Ready to Outsource Payroll?</p>
          <h2 style={{ color: '#ffffff', marginBottom: '1rem' }}>Book a free 15-minute call. Get an exact monthly cost before you commit.</h2>
          <p style={{ color: '#cccccc', lineHeight: '1.7', marginBottom: '2rem' }}>
            BEG will review your current payroll setup, answer any remaining questions, and give you a flat monthly number. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>Learn more about BEG managed payroll</Link> at $25-$45 PEPM.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
            Book a Free 15-Minute Call
          </Link>
        </div>
      </section>
    </>
  );
}
