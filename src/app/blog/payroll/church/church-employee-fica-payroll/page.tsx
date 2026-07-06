import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Church Payroll and FICA: Who Is Actually Exempt | BEG',
  description: 'A clear guide to FICA obligations for church employers -- ordained ministers, non-ministerial staff, the Form 4361 opt-out, and what happens when a.',
  alternates: { canonical: 'https://www.beghr.com/blog/payroll/church/church-employee-fica-payroll' },
  openGraph: {
    title: 'Church Payroll and FICA: Who Is Actually Exempt | BEG',
    description: 'A clear guide to FICA obligations for church employers -- ordained ministers, non-ministerial staff, the Form 4361 opt-out, and what happens when a churc...',
    url: 'https://www.beghr.com/blog/payroll/church/church-employee-fica-payroll',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-payroll-church-church-employee-fica-payroll.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Church Payroll and FICA: Who Is Actually Exempt | BEG', description: 'A clear guide to FICA obligations for church employers -- ordained ministers, non-ministerial staff, the Form 4361 opt-out, and what happens when a churc...', images: ['https://www.beghr.com/blog-images/blog-payroll-church-church-employee-fica-payroll.webp'] },

};

const faqs = [
  {
    q: 'Does a church have to withhold FICA from non-ministerial employees?',
    a: 'Yes. FICA (Social Security and Medicare taxes) applies to wages paid to regular employees of a church, just as they apply to employees of any other employer. Only ordained ministers serving in ministerial capacity are exempt from standard FICA withholding -- and only if the church has not made the Section 3121(w) FICA election. Custodians, office staff, childcare workers, bookkeepers, and music directors are generally subject to FICA.',
  },
  {
    q: 'What is Form 4361 and who can file it?',
    a: 'Form 4361 is the application for exemption from self-employment tax for members of certain religious groups who are ministers, members of religious orders, or Christian Science practitioners. A minister who files and receives approval of Form 4361 is exempt from paying self-employment tax on net earnings from ministry. The exemption is personal to the minister and irrevocable once approved.',
  },
  {
    q: 'Can a church opt into the FICA system for its ministers?',
    a: 'Yes. A church can make an election under IRC Section 3121(w) to be covered by FICA rather than treating ministers as self-employed for Social Security and Medicare. This is an irrevocable election and is relatively uncommon. Under this election, ministers would be subject to standard FICA withholding and the church would pay the employer FICA match.',
  },
  {
    q: 'Is the senior pastor\'s salary subject to FICA withholding?',
    a: 'Typically no, for federal purposes. Ordained ministers are treated as employees for federal income tax purposes but as self-employed for Social Security and Medicare. The church withholds federal and state income tax from the pastor\'s salary but does not withhold FICA. The pastor pays self-employment tax on their own return unless they have an approved Form 4361 exemption.',
  },
];

export default function ChurchFICAPage() {
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

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Article",
        "image": "https://beghr.com/blog-images/blog-payroll-church-church-employee-fica-payroll.webp", "headline": "Church Payroll and FICA: Who Is Actually Exempt | BEG", "datePublished": "2026-06-25", "dateModified": "2026-06-28", "author": {"@type": "Person", "name": "Anthony Moretti", "jobTitle": "VP of Sales", "url": "https://www.linkedin.com/in/theanthonymoretti"}, "publisher": {"@type": "Organization", "name": "Business Executive Group", "logo": {"@type": "ImageObject", "url": "https://www.beghr.com/assets/beg-header-image.png"}}, "mainEntityOfPage": "https://www.beghr.com/blog/payroll/church/church-employee-fica-payroll"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Church</p>
              <h1>Church Payroll and FICA: Which Employees Are Exempt and Which Are Not</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                FICA rules for churches are genuinely different from other employers -- ministers are in a dual-status category, non-ministerial staff are not. Getting this wrong creates IRS issues for both the church and the employees.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-payroll-church-church-employee-fica-payroll.webp" alt={`Business professionals reviewing payroll and HR documents in a bright modern office`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Church payroll sits at the intersection of tax law and religious law in ways that create genuine complexity. The rules for ordained ministers differ from the rules for every other church employee -- and the rules for churches that have made specific IRS elections differ from churches that have not. Here is a clear breakdown of who owes FICA and how.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>FICA Status by Employee Type</h2>
        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Employee Type</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>FICA Withholding</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>SE Tax</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Ordained minister (no 4361, no church FICA election)', 'None', 'Yes -- minister pays SE tax', 'Dual status'],
                ['Ordained minister with Form 4361 approval', 'None', 'None', 'Exempt from both'],
                ['Minister under church FICA election (§3121(w))', 'Yes -- standard FICA', 'No', 'Uncommon'],
                ['Secretary / Administrative Staff', 'Yes', 'No', 'Standard W-2 employee'],
                ['Custodian / Maintenance', 'Yes', 'No', 'Standard W-2 employee'],
                ['Childcare Worker (church daycare)', 'Yes', 'No', 'Standard W-2 employee'],
                ['Music Director / Choir Director', 'Usually Yes', 'No', 'Depends on whether role is ministerial'],
                ['Youth Pastor (ordained)', 'None (typically)', 'Yes', 'Ministerial status analysis required'],
              ].map(([role, fica, se, notes], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 500 }}>{role}</td>
                  <td style={{ padding: '10px 14px', color: fica === 'Yes' ? '#27ae60' : fica === 'None' ? '#c0392b' : '#f39c12', fontWeight: 600, fontSize: '0.85rem' }}>{fica}</td>
                  <td style={{ padding: '10px 14px', color: se === 'Yes' ? '#f39c12' : '#555' }}>{se}</td>
                  <td style={{ padding: '10px 14px', color: '#555', fontSize: '0.85rem' }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Minister Dual-Status Position Explained</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Ordained ministers serving in ministerial capacity occupy a unique dual status under the tax code. For federal income tax purposes, they are employees -- the church reports their compensation on a W-2 and withholds federal and state income tax. For Social Security and Medicare purposes, they are treated as self-employed -- they owe self-employment tax on their earnings (including housing allowance) and the church does not match or withhold FICA.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          This creates a payroll setup that looks incomplete to anyone not familiar with church payroll: a W-2 with wages in Box 1, federal withholding in Box 2, but no entries in Boxes 3, 4, 5, and 6 (FICA). That is correct -- not an error.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Non-Ministerial Employees: Standard FICA Applies</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Any church employee who is not an ordained minister serving in ministerial capacity is subject to standard FICA withholding. The church must withhold 7.65% from their wages (6.2% Social Security + 1.45% Medicare) and match it with an equal employer contribution. This applies to administrative staff, custodians, kitchen workers, childcare staff, and most music directors -- even if they are deeply involved in the ministry of the church.
        </p>

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
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Church payroll is different -- let BEG handle it correctly</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>Minister dual-status setup, housing allowance designation, FICA for non-ministerial staff -- fully managed at $25-$45 PEPM. 15-minute call.</p>
          <PricingCta service="managed-payroll" subline={false} />
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/church">Managed Payroll for Churches</Link> -- full service details</li>
            <li><Link href="/blog/payroll/church/minister-housing-allowance-payroll">Minister Housing Allowance Setup</Link> -- complete guide</li>
            <li><Link href="/blog/payroll/church/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Churches</Link> -- cost comparison</li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://www.beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Church FICA', item: 'https://www.beghr.com/blog/payroll/church/church-employee-fica-payroll' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".faq-item"]}}) }} />
      <p style={{ fontSize: '0.85rem', color: '#666666', margin: '2.5rem 0 0' }}>Authoritative source: <a href="https://www.dol.gov/agencies/whd/overtime" target="_blank" rel="noopener noreferrer">U.S. Department of Labor: Overtime Pay Under the FLSA</a></p>
          <RelatedPosts posts={[
        { category: "Payroll", title: "Managed Payroll vs. In-House Hire for Churches", excerpt: "Church payroll outsourcing vs. hiring a bookkeeper or administrator. Real cost comparison for...", href: "/blog/payroll/church/managed-payroll-vs-in-house" },
        { category: "Payroll", title: "Minister Housing Allowance Setup in Payroll", excerpt: "A step-by-step guide to setting up minister housing allowance in payroll -- designation...", href: "/blog/payroll/church/minister-housing-allowance-payroll" },
        { category: "Accounting Hiring", title: "Accounting Job Description: What Candidates Notice First", excerpt: "Most accounting job descriptions repel the best candidates. Learn what to include, what to cut, and...", href: "/blog/accounting-hiring/accounting-job-description" },
      ]} />
      </article>
  );
}