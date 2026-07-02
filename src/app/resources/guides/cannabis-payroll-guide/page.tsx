import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import PayrollLeadCaptureForm from '@/components/PayrollLeadCaptureForm';

export const metadata: Metadata = {
  title: 'Cannabis Payroll Guide | 280E & Compliance Handled | BEG',
  description: 'Cannabis payroll guide: 280E tax constraints, cash-heavy operations, banking limits, seed-to-sale staffing, and high compliance scrutiny, fully managed.',
  alternates: {
    canonical: 'https://www.beghr.com/resources/guides/cannabis-payroll-guide',
  },
  openGraph: {
    title: 'Cannabis Payroll Guide | 280E & Compliance Handled | BEG',
    description: 'Cannabis payroll guide: 280E tax constraints, cash-heavy operations, banking limits, seed-to-sale staffing, and high compliance scrutiny, fully managed.',
    url: 'https://www.beghr.com/resources/guides/cannabis-payroll-guide',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cannabis Payroll Guide | 280E & Compliance Handled | BEG',
    description: 'Cannabis payroll guide: 280E tax constraints, cash-heavy operations, banking limits, seed-to-sale staffing, and high compliance scrutiny, fully managed.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    q: "How does 280E affect how cannabis payroll should be tracked?",
    a: "Section 280E denies most ordinary business deductions to cannabis operators, but labor that is part of cost of goods sold can still be capitalized into inventory. That means payroll for cultivation, processing, and production staff must be tracked separately from non-deductible selling and administrative labor. Clean department-level cost coding directly affects your tax position, so the way payroll is categorized is not just bookkeeping, it is tax strategy.",
  },
  {
    q: "Can cannabis operators run direct deposit despite banking limits?",
    a: "Many can. While some cannabis businesses still operate largely in cash, a growing number hold accounts with cannabis-friendly financial institutions that support direct deposit and electronic tax remittance. BEG works in your existing banking setup and configures payroll to whatever rails your institution supports, so you are not forced to migrate.",
  },
  {
    q: "Why is compliance scrutiny higher for cannabis payroll?",
    a: "Cannabis operators face overlapping oversight from state regulators, taxing authorities, and labor agencies, and the cash element raises audit risk. Misclassified workers, incorrect overtime, or sloppy cost allocation draw attention fast. A clean, well-documented payroll record is one of the strongest defenses an operator has, which is why managed payroll with proper department coding matters in this industry more than most.",
  },
  {
    q: "Does payroll need to align with seed-to-sale tracking?",
    a: "Your seed-to-sale system tracks product, not people, but the staffing behind each stage still has to be paid and coded correctly. BEG aligns payroll department codes to your operational stages, cultivation, processing, retail, and administration, so labor cost flows cleanly into the right buckets for both tax and operational reporting.",
  },
];

export default function CannabisPayrollGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'WebPage',
                '@id': 'https://www.beghr.com/resources/guides/cannabis-payroll-guide',
                url: 'https://www.beghr.com/resources/guides/cannabis-payroll-guide',
                name: 'Cannabis Payroll Guide',
                datePublished: '2026-06-28',
                dateModified: '2026-06-28',
                author: { '@type': 'Person', name: 'Anthony Moretti', url: 'https://www.linkedin.com/in/theanthonymoretti' },
                publisher: { '@type': 'Organization', name: 'Business Executive Group' },
              },
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map((f) => ({
                  '@type': 'Question',
                  name: f.q,
                  acceptedAnswer: { '@type': 'Answer', text: f.a },
                })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
                  { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
                  { '@type': 'ListItem', position: 3, name: 'Guides', item: 'https://www.beghr.com/resources/guides' },
                  { '@type': 'ListItem', position: 4, name: 'Cannabis Payroll Guide', item: 'https://www.beghr.com/resources/guides/cannabis-payroll-guide' },
                ],
              },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Payroll Guide</p>
            <h1>Cannabis Payroll Guide</h1>
            <p style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#666666' }}>
              By <a href="https://www.linkedin.com/in/theanthonymoretti" target="_blank" rel="noopener noreferrer" style={{ color: '#ECAC60', fontWeight: '600' }}>Anthony Moretti</a> &middot; Updated June 2026
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '640px', margin: '1rem auto 0', textAlign: 'center' }}>
              Section 280E, cash-heavy operations, banking limits, seed-to-sale staffing, and intense compliance scrutiny make cannabis payroll uniquely high-stakes. Here is how each constraint works and how managed payroll keeps the record clean.
            </p>
          </div>
          <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
            <Link href="/resources/guides" style={{ color: '#ECAC60', fontSize: '0.9rem', fontWeight: '600' }}>&larr; All guides</Link>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px', display: 'flex', justifyContent: 'center' }}>
          <PayrollLeadCaptureForm
            toolName="Cannabis Payroll Guide"
            toolDescription="280E constraints, cash-heavy operations, and heavy compliance scrutiny -- the full guide in your inbox."
            assetUrl="/resources/guides/cannabis-payroll-guide"
            assetLabel="Email me the guide"
          />
        </div>
      </section>


      {/* KEY TAKEAWAYS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#faf6f0', borderLeft: '4px solid #ECAC60', borderRadius: '6px', padding: '1.75rem 2rem' }} className="reveal">
            <p style={{ fontWeight: '700', color: '#000000', marginBottom: '1rem', fontSize: '1rem' }}>Key takeaways</p>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444444', lineHeight: '1.75', fontSize: '0.95rem' }}>
              <li>Under Section 280E, production labor can be capitalized into cost of goods sold while selling and administrative labor cannot, so department-level payroll coding directly affects the tax bill.</li>
              <li>Cannabis operators face heavier compliance scrutiny, making a clean, well-documented payroll record one of the best audit defenses available.</li>
              <li>Banking limits vary; many operators now use cannabis-friendly institutions that support direct deposit and electronic remittance.</li>
              <li>BEG runs cannabis payroll fully managed at $25-$45 PEPM, working in your existing banking and seed-to-sale setup.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="reveal" style={{ color: '#333333', lineHeight: '1.8', fontSize: '1rem' }}>

            <h2>280E makes payroll a tax-strategy decision</h2>
            <p>
              Section 280E of the Internal Revenue Code denies cannabis operators most ordinary business deductions because the plant is still federally controlled. The one meaningful exception is cost of goods sold. Labor that is directly tied to producing inventory, cultivation, trimming, processing, and packaging, can be capitalized into COGS and recovered, while labor for selling, marketing, and general administration cannot.
            </p>
            <p>
              That distinction turns payroll categorization into a tax decision. If a grow technician and a retail budtender are lumped into one undifferentiated payroll, the operator loses the ability to defend the portion of labor that legitimately belongs in COGS. Department-level coding that separates production roles from selling and administrative roles is the difference between a defensible tax position and money left on the table. This is the central reason cannabis payroll cannot be run casually.
            </p>

            <h2>Cash-heavy operations and banking limits</h2>
            <p>
              Federal banking restrictions have historically pushed cannabis operators toward cash, including cash payroll, which is slow, risky, and hard to document. The landscape has improved. A growing number of cannabis-friendly banks and credit unions now serve the industry and support direct deposit and electronic tax remittance, but coverage is uneven and varies by state and institution.
            </p>
            <p>
              The practical answer is a payroll process that adapts to whatever rails your bank supports rather than forcing a migration. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> works in your existing banking setup, so operators on direct deposit keep it and operators still managing cash get a documented, compliant process rather than an undocumented one.
            </p>

            <h2>High compliance scrutiny is the operating reality</h2>
            <p>
              Cannabis operators answer to more overseers than almost any other small business: state cannabis regulators, state and federal tax authorities, and labor agencies, all at once. The cash element raises audit probability, and any payroll irregularity, a misclassified worker, an overtime error, a sloppy cost allocation, invites a closer look. In this environment, a clean payroll record is not just hygiene, it is a defense.
            </p>
            <p>
              Worker classification deserves special attention. Trimmers and seasonal harvest labor are frequently misclassified as contractors when the relationship is really employment, which creates exposure on both the tax and labor sides. Managed payroll enforces correct classification, accurate overtime, and documented remittances so the record holds up under examination.
            </p>

            <h2>Aligning payroll to seed-to-sale staffing</h2>
            <p>
              Seed-to-sale systems track product through every stage, but they do not track the people. The staffing behind cultivation, processing, retail, and administration still has to be paid and coded so labor cost maps cleanly to operational stages. When payroll department codes mirror your operational structure, both your 280E cost analysis and your management reporting get more accurate at the same time.
            </p>
            <p>
              For most operators the alternative to managed payroll is an internal hire who costs $60,000 to $100,000 fully loaded and who has to learn a tax regime that punishes mistakes. BEG delivers the service directly at $25-$45 PEPM, all-inclusive, with implementation in three to five business days. You can see the full service on the <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>managed payroll overview</Link> or browse more in our <Link href="/resources/guides" style={{ color: '#ECAC60', textDecoration: 'underline' }}>payroll guides</Link>.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="head center reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Frequently asked questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginTop: '2rem' }}>
            {faqs.map((f) => (
              <div key={f.q} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '8px', padding: '1.5rem' }} className="reveal">
                <h3 style={{ fontSize: '1.02rem', fontWeight: '700', color: '#000000', marginBottom: '0.6rem' }}>{f.q}</h3>
                <p style={{ margin: 0, color: '#555555', lineHeight: '1.7', fontSize: '0.93rem' }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY CTA */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#000000', borderRadius: '10px', padding: '2.5rem', textAlign: 'center', color: '#ffffff' }} className="reveal">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Let BEG Run It</p>
            <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.6rem' }}>BEG handles cannabis payroll fully managed. $25-$45 PEPM, all-inclusive.</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
              280E-aware cost coding, correct worker classification, banking-aware processing, and audit-ready documentation, all handled by a dedicated BEG contact. No surcharges. No per-form fees.
            </p>
            <PricingCta service="managed-payroll" subline={false} />
          </div>
        </div>
      </section>
    </>
  );
}
