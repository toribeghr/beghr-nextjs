import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Cannabis Payroll and Banking (When Banks Won't) | BEG",
  description: 'Cannabis payroll banking options: cannabis-friendly banks, payroll processors, and cash compliance when traditional banks won\'t open accounts.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/cannabis/cannabis-payroll-banking' },
  openGraph: {
    title: 'Cannabis Payroll and Banking (When Banks Won\'t) | BEG',
    description: 'Cannabis businesses face banking restrictions that complicate payroll. Here are the practical options for paying employees -- from cannabis-friendly bank...',
    url: 'https://www.beghr.com/blog/payroll/cannabis/cannabis-payroll-banking',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-cannabis-cannabis-payroll-banking.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Cannabis Payroll and Banking (When Banks Won\'t) | BEG', description: 'Cannabis businesses face banking restrictions that complicate payroll. Here are the practical options for paying employees -- from cannabis-friendly bank...', images: ['https://www.beghr.com/blog-images/blog-payroll-cannabis-cannabis-payroll-banking.webp'] },

};

const faqs = [
  {
    q: 'Can cannabis businesses use direct deposit for payroll?',
    a: 'Yes, if the cannabis business has a banking relationship with a financial institution that serves the cannabis industry. Cannabis-friendly credit unions and state-chartered banks in legal states do offer business checking accounts, which allow ACH direct deposit for payroll. The challenge is finding and maintaining that banking relationship -- many mainstream banks still decline cannabis accounts.',
  },
  {
    q: 'Is cash payroll legal for cannabis businesses?',
    a: 'Yes. FLSA permits employers to pay wages in cash. The legal requirements are the same: proper withholding must occur, employees must receive pay stubs showing gross wages and deductions, and all payroll taxes must be deposited to the IRS and state on schedule using a banking relationship (even if your business operates in cash). Cash payroll requires meticulous documentation.',
  },
  {
    q: 'What happens to payroll tax deposits when a cannabis business loses its bank account?',
    a: 'Federal payroll tax deposits must be made via the Electronic Federal Tax Payment System (EFTPS), which requires a bank account. If a cannabis business loses its banking relationship, it loses the ability to make federal payroll tax deposits electronically. This creates immediate compliance risk. Establishing a backup banking relationship before losing the primary one is critical.',
  },
  {
    q: 'Are there payroll companies that specialize in cannabis?',
    a: 'Yes, there are payroll providers that work specifically with cannabis businesses and have banking relationships that support ACH-based payroll processing. A managed payroll service that understands cannabis banking constraints can help navigate the options. The key is to work with a provider experienced in your state and business type.',
  },
];

export default function CannabisBankingPage() {
  return (
    <article className="blog-post">
      {/* FREE TOOL CALLOUT */}
      <section className="container" style={{ maxWidth: '820px', paddingBottom: '3rem' }}>
        <div style={{ background: '#fff7ec', border: '1px solid #ECAC60', borderRadius: '10px', padding: '1.5rem 1.75rem' }}>
          <p style={{ fontWeight: '700', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9a6b1f', margin: '0 0 0.4rem' }}>Free Payroll Tool</p>
          <p style={{ fontWeight: '700', fontSize: '1.1rem', color: '#000', margin: '0 0 0.4rem' }}>See what your payroll provider really charges</p>
          <p style={{ color: '#555', fontSize: '0.93rem', lineHeight: '1.6', margin: '0 0 0.9rem' }}>Most providers hide per-run and add-on fees. Audit your real cost per employee in about 30 seconds, free.</p>
          <a href="/resources/payroll-fee-auditor" style={{ color: '#9a6b1f', fontWeight: '700', fontSize: '0.93rem', textDecoration: 'none' }}>Run the Payroll Fee Auditor &rarr;</a>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article", "headline": "Cannabis Payroll & Banking | How to Pay When Banks Won't | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/cannabis/cannabis-payroll-banking"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Cannabis</p>
              <h1>Cannabis Payroll and Banking: How to Pay Employees When Banks Won't Help</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                The federal/state conflict around cannabis creates real banking obstacles for cannabis employers. Here is how cannabis businesses handle payroll legally when mainstream banks are not an option.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-cannabis-cannabis-payroll-banking.webp" alt={`Cannabis Payroll and Banking (When Banks Won`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          Most banks are federally chartered or insured -- which means serving cannabis businesses creates regulatory risk under federal law, regardless of state legalization status. As a result, many cannabis businesses in legal states struggle to open and maintain business bank accounts. Without a bank account, running payroll through normal ACH direct deposit becomes impossible.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Cannabis employers still have obligations to pay employees correctly and on time, withhold all required taxes, and deposit those taxes with state and federal agencies. The banking constraint does not remove the compliance obligation -- it just makes fulfilling it harder.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Banking Options for Cannabis Employers</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
          {[
            {
              title: 'Cannabis-friendly credit unions and state-chartered banks',
              body: 'In most legal states, there are credit unions and state-chartered banks that have developed compliant programs for cannabis business banking. These institutions charge premium fees and impose more reporting requirements than standard business banking -- but they provide real bank accounts, ACH capability, and the ability to make federal tax deposits. This is the preferred option for any cannabis employer who can access it.',
            },
            {
              title: 'Payroll cards',
              body: 'Payroll debit cards allow employers to load wages onto a card that employees can use like a debit card. These programs operate through payment processors that have their own banking relationships. The employer funds the cards; the processing company handles the transaction side. This is a viable alternative to direct deposit when ACH is not available.',
            },
            {
              title: 'Cash payroll',
              body: 'Some cannabis businesses without banking access pay employees in cash. This is legal under FLSA -- but requires meticulous documentation. Each employee must receive a pay stub showing gross wages, all deductions (federal and state income tax, FICA), and net pay. Cash distribution logs should be signed by employees and retained. Payroll tax obligations still apply and must be met through whatever banking access the employer has.',
            },
            {
              title: 'Multi-state payment processors',
              body: 'A small number of payment processors and fintech companies specialize in cannabis industry payroll processing. These providers typically have established banking relationships that allow them to handle ACH-based payroll on behalf of cannabis businesses that cannot maintain accounts at mainstream institutions. Fees are higher than conventional payroll processing.',
            },
          ].map(({ title, body }) => (
            <div key={title} style={{ border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{title}</strong>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.6', fontSize: '0.9rem' }}>{body}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>What Cannot Be Skipped Regardless of Banking Status</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1rem' }}>
          Banking limitations do not suspend payroll compliance obligations. Cannabis employers must still:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.5rem' }}>
          {[
            'Withhold federal income tax, Social Security, and Medicare from every paycheck',
            'Deposit withheld taxes with the IRS on the required schedule (semi-weekly or monthly based on lookback period)',
            'Pay the employer\'s share of FICA on every pay period',
            'File quarterly Form 941 reporting wages and taxes',
            'Pay state income tax withholding and file state payroll returns on state schedule',
            'Pay FUTA and SUTA on schedule',
            'Issue W-2s by January 31 of the following year',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <div style={{ width: '8px', height: '8px', background: '#ECAC60', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
              <p style={{ margin: 0, lineHeight: '1.6', color: '#444', fontSize: '0.95rem' }}>{item}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {faqs.map(({ q, a }) => (
            <div key={q} style={{ border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.5rem' }}>{q}</strong>
              <p style={{ margin: 0, lineHeight: '1.65', color: '#444' }}>{a}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Cannabis payroll is solvable -- let's talk</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages payroll for cannabis businesses with experience navigating banking constraints. 15-minute discovery call.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/cannabis">Managed Payroll for Cannabis Businesses</Link> -- full service details</li>
            <li><Link href="/blog/payroll/cannabis/cannabis-payroll-280e">Cannabis Payroll Under 280E</Link> -- tax deductibility guide</li>
            <li><Link href="/blog/payroll/cannabis/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Cannabis</Link> -- cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Cannabis Banking', item: 'https://www.beghr.com/blog/payroll/cannabis/cannabis-payroll-banking' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
          <RelatedPosts posts={[
        { category: "Payroll", title: "Cannabis Payroll Benefits Integration [2026]", excerpt: "Managed payroll for cannabis. Integrating Benefits with Payroll. $25-$45 PEPM all-inclusive. Get instant pricing...", href: "/blog/payroll/cannabis/cannabis-benefits-integration-payroll" },
        { category: "Payroll", title: "Cannabis Payroll Direct Deposit Setup in 2026", excerpt: "Managed payroll for cannabis. Setting Up Direct Deposit. $25-$45 PEPM all-inclusive. Get instant pricing...", href: "/blog/payroll/cannabis/cannabis-direct-deposit-setup" },
        { category: "Payroll", title: "Cannabis Payroll Employee Classification [2026]", excerpt: "Managed payroll for cannabis. Employee Classification for Payroll. $25-$45 PEPM all-inclusive. Get instant pricing...", href: "/blog/payroll/cannabis/cannabis-employee-classification-guide" },
      ]} />
      </article>
  );
}
