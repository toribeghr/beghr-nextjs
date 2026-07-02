import { Metadata } from 'next';
import Link from 'next/link';
import PricingCta from '@/components/pricing/PricingCta';

export const metadata: Metadata = {
  title: 'Nonprofit Eliminates Payroll Risk on Grant-Funded Programs | BEG',
  description: 'A 38-employee 501(c)(3) passed its single audit without payroll findings for the first time in 3 years after BEG configured grant-funded cost allocation and took over payroll.',
  alternates: { canonical: 'https://www.beghr.com/case-studies/nonprofit' },
  openGraph: {
    title: 'Nonprofit Eliminates Payroll Risk on Grant-Funded Programs | BEG',
    description: 'A 38-employee 501(c)(3) passed its single audit without payroll findings for the first time in 3 years after BEG configured grant-funded cost allocation and took over payroll.',
    url: 'https://www.beghr.com/case-studies/nonprofit',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'Nonprofit Eliminates Payroll Risk on Grant-Funded Programs | BEG', description: 'A 38-employee 501(c)(3) passed its single audit without payroll findings for the first time in 3 years after BEG configured grant-funded cost allocation and took over payroll.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

export default function NonprofitCaseStudyPage() {
  return (
    <article>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Case Study · Nonprofit / 501(c)(3)</p>
              <h1>How a 501(c)(3) Eliminated Payroll Risk on Grant-Funded Programs</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                38 employees, 60% of payroll funded by government grants, three straight years of audit findings. After BEG configured grant-funded cost allocation and took over payroll, the next single audit came back clean.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap' }}>
                <span><strong>Industry:</strong> Nonprofit / 501(c)(3)</span>
                <span><strong>Employees:</strong> 38</span>
                <span><strong>Grant-Funded:</strong> 60% of payroll</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '820px', lineHeight: '1.8', fontSize: '1.05rem' }}>

          {/* Result snapshot */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem', margin: '0 0 3rem' }}>
            {[
              { stat: '0', label: 'Audit findings in first post-BEG single audit' },
              { stat: '15 hrs/mo', label: 'Finance director time reclaimed' },
              { stat: '4 days', label: 'Time to go live' },
              { stat: 'Auto', label: 'Cost allocation produced every cycle' },
            ].map(({ stat, label }, i) => (
              <div key={i} style={{ background: '#000', color: '#ECAC60', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, lineHeight: 1, marginBottom: '0.4rem' }}>{stat}</div>
                <div style={{ fontSize: '0.82rem', color: '#ddd', lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Situation
          </h2>
          <p>
            A regional nonprofit employing 38 people operated with a funding model common to human services organizations: a mix of earned revenue, private donations, and government grants. Roughly 60 percent of the payroll budget was tied to government grant funding, each grant carrying its own cost-allocation requirements that dictated how the payroll expense was reported and documented.
          </p>
          <p>
            The organization was subject to a federal single audit requirement because its federal grant expenditures exceeded the applicable threshold. Single audits evaluate not just financial statements but the controls surrounding how federal funds are tracked, allocated, and reported. Payroll cost allocation is a primary area of scrutiny in any single audit for a nonprofit with significant government grant funding.
          </p>
          <p>
            For three consecutive years, the organization had received payroll-related findings in its single audit. The findings were not fraud, but they were real: cost-allocation discrepancies between what was documented in payroll and what was reported to grant funders. Each finding required a corrective action plan, additional documentation, and follow-up with the auditors.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Challenge
          </h2>
          <p>
            Grant-funded payroll cost allocation requires every dollar of payroll expense to be assigned to the program code or cost center it supports, documented in a way that ties back to the applicable grant's budget, and reconciled each period so the reported expenses match the payroll records. When multiple grants fund the same employee's time, time-and-effort documentation or personnel activity reports are required to support the allocation.
          </p>
          <p>
            The organization's prior process was entirely manual. The finance director built allocation schedules in a spreadsheet each pay period, assigning payroll costs to program codes by hand based on her knowledge of each employee's grant-funded responsibilities. Over time, as employee assignments shifted, grants were added or closed, and the staff roster changed, keeping the allocation current became increasingly difficult. The discrepancies that showed up in the audits were not single large errors. They were the cumulative result of allocations that had drifted out of sync with the actual grant-funded work.
          </p>
          <p>
            The finance director was spending 15 or more hours per month on payroll reconciliation and cost allocation. During audit season, that burden grew further. Despite the time investment, the manual process was not producing audit-clean results.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Solution
          </h2>
          <p>
            BEG implemented in four business days. The core of the solution was configuring program-code cost allocation at the system level so that payroll expenses were assigned to the correct grant-funded cost centers automatically each pay cycle rather than through manual post-processing.
          </p>
          <p>
            Each active grant was mapped to the applicable program codes, and each employee's allocation across programs was configured based on their funded responsibilities. When assignments changed, BEG updated the configuration before the next cycle. The allocation was produced automatically with each payroll run, generating documentation that matched the grant reporting requirements without requiring the finance director to rebuild it manually each period.
          </p>
          <p>
            Year-end documentation for the single audit was organized and formatted during the implementation phase so that when auditors requested payroll cost allocation records, the documentation was already prepared rather than assembled under deadline. BEG also provided the finance director with a simplified review process so she could confirm allocation accuracy each cycle without running the underlying calculations herself.
          </p>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            The Result
          </h2>
          <p>
            The single audit conducted after BEG took over payroll returned no payroll findings. For the first time in three years, the organization's auditors had no cost-allocation discrepancies to report. The corrective action plans that had become a recurring feature of audit season were not required.
          </p>
          <p>
            The finance director reclaimed 15 hours per month that had been going to payroll reconciliation and cost allocation. That time was redirected to grant compliance, funder reporting, and financial planning. She described the change as material to the organization's capacity to pursue additional grant funding, because she was no longer spending the first two weeks of every month on payroll.
          </p>
          <p>
            Cost allocation documentation is now produced automatically each pay cycle. The organization's audit file is maintained in real time rather than assembled at year-end. As the nonprofit adds or closes grant programs, BEG updates the configuration. The finance team's role in payroll is now review and approval rather than construction and calculation.
          </p>

          <blockquote style={{ borderLeft: '4px solid #ECAC60', paddingLeft: '1.5rem', margin: '2.5rem 0', fontStyle: 'italic', color: '#333', fontSize: '1.1rem', lineHeight: '1.7' }}>
            "BEG understood grant-funded payroll from the first conversation. We stopped dreading audit season after they took over."
          </blockquote>

          <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>
            What They Said
          </h2>
          <p>
            The finance director described the shift in her relationship with audit season as the most significant operational change she had experienced in her tenure at the organization. Prior to BEG, audit preparation meant pulling records that were spread across spreadsheets, payroll exports, and email threads, then reconciling discrepancies before auditors arrived. After BEG, the records were current, organized, and ready to produce.
          </p>
          <p>
            The executive director noted that the clean audit result had strengthened the organization's relationship with its primary federal funder, who had taken note of the prior findings. A nonprofit that cannot demonstrate clean payroll cost allocation to government funders puts its grant renewals at risk. Getting to a clean result was not only an operational improvement but a mission-critical one.
          </p>

          <div style={{ background: '#000', color: '#fff', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
            <h3 style={{ color: '#ECAC60', margin: '0 0 0.75rem' }}>Grant-funded payroll creating audit risk?</h3>
            <p style={{ marginBottom: '1.5rem' }}>
              In 15 minutes we can scope your payroll and cost-allocation requirements, give you a fixed monthly rate at $25 to $45 per employee, and show you what clean documentation looks like.
            </p>
            <PricingCta service="managed-payroll" subline={false} />
          </div>

          <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0', fontSize: '0.93rem' }}>
            <strong>Related:</strong>{' '}
            <Link href="/services/managed-payroll" style={{ color: '#000', fontWeight: 600 }}>
              BEG Managed Payroll
            </Link>
            {' '}|{' '}
            <Link href="/case-studies" style={{ color: '#000', fontWeight: 600 }}>
              All Case Studies
            </Link>
          </div>

        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'How a 501(c)(3) Eliminated Payroll Risk on Grant-Funded Programs',
        description: 'A 38-employee nonprofit with 60% grant-funded payroll passed its first clean single audit after BEG configured program-code cost allocation and took over all payroll management.',
        datePublished: '2026-06-28',
        dateModified: '2026-06-28',
        author: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        publisher: { '@type': 'Organization', name: 'Business Executive Group', url: 'https://www.beghr.com' },
        url: 'https://www.beghr.com/case-studies/nonprofit',
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.beghr.com/case-studies' },
          { '@type': 'ListItem', position: 3, name: 'Nonprofit Case Study', item: 'https://www.beghr.com/case-studies/nonprofit' },
        ],
      }) }} />
    </article>
  );
}
