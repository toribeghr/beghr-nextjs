import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';
import PayrollLeadCaptureForm from '@/components/PayrollLeadCaptureForm';

export const metadata: Metadata = {
  title: 'Year-End Payroll Checklist 2026 | Free Download | BEG',
  description: 'Free year-end payroll checklist: W-2 deadlines, 941 reconciliation, ACA reporting, state filings, and benefit changes.',
  alternates: {
    canonical: 'https://www.beghr.com/resources/guides/year-end-payroll-checklist',
  },
  openGraph: {
    title: 'Year-End Payroll Checklist 2026 | Free Download | BEG',
    description: 'Free year-end payroll checklist: W-2 deadlines, 941 reconciliation, ACA reporting, state filings, and benefit changes.',
    url: 'https://www.beghr.com/resources/guides/year-end-payroll-checklist',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Year-End Payroll Checklist 2026 | Free Download | BEG',
    description: 'Free year-end payroll checklist: W-2 deadlines, 941 reconciliation, ACA reporting, state filings, and benefit changes.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};


const checklist = [
  {
    phase: 'October: Pre-Close Preparation',
    items: [
      { task: 'Audit employee records for accuracy', detail: 'Verify legal names, Social Security numbers, and addresses match W-4 files. SSA rejects W-2s with name/SSN mismatches.' },
      { task: 'Confirm benefit deduction rates', detail: 'Check that health, dental, vision, FSA, HSA, and 401k deduction amounts match open enrollment elections for the new plan year.' },
      { task: 'Review taxable fringe benefits', detail: 'Personal use of company vehicles, group-term life over $50k, and imputed income from benefits must be reported in Box 1 wages.' },
      { task: 'Audit third-party sick pay', detail: 'If employees received disability payments from a carrier, request the third-party sick pay statement so wages can be included on the W-2.' },
    ],
  },
  {
    phase: 'November: Filing Preparation',
    items: [
      { task: 'Reconcile YTD payroll registers to 941s', detail: 'Total wages reported on quarterly 941 filings should match gross wages on your YTD payroll register. Catch discrepancies now, not in January.' },
      { task: 'Verify federal tax deposit totals', detail: 'Confirm all 941 tax deposits made during the year match the liability reported. IRS FTD penalty is 2% to 15% of the underpayment.' },
      { task: 'Run preliminary FUTA liability check', detail: 'FUTA applies to the first $7,000 in wages per employee at 6%, reduced by state credit. Confirm your FUTA liability before filing Form 940.' },
      { task: 'Check state W-2 filing thresholds', detail: 'Most states require W-2 electronic filing above 10 to 25 forms. Confirm your state threshold and electronic filing method before year-end.' },
    ],
  },
  {
    phase: 'December: Final Payrolls and Year-End Close',
    items: [
      { task: 'Process all bonus and supplemental payrolls', detail: 'Bonus payrolls must clear before December 31 to be deductible in the current tax year. Set a cutoff date with your payroll team.' },
      { task: 'Handle retroactive pay and adjustments', detail: 'Any retroactive pay increases or corrections from the current year must be paid and reported in the same calendar year they were earned.' },
      { task: 'Confirm all garnishment balances', detail: 'Review child support, student loan, and IRS levy orders. Some garnishments have annual caps that require end-of-year verification.' },
      { task: 'Issue final 1099-NEC for contractors', detail: '1099-NEC is due January 31 for contractors paid $600 or more during the year. Collect or confirm W-9 information now.' },
    ],
  },
  {
    phase: 'January: W-2 Production and New Year Setup',
    items: [
      { task: 'Produce and distribute W-2s by January 31', detail: 'IRS deadline for W-2 delivery to employees is January 31. Electronic delivery requires employee consent. Paper W-2s must be postmarked by January 31.' },
      { task: 'File W-2s with SSA electronically by January 31', detail: 'Electronic W-2 filing with the Social Security Administration is required for 10 or more forms starting in 2024. Business Services Online (BSO) handles the submission.' },
      { task: 'File Form 940 (FUTA) by January 31', detail: 'Annual federal unemployment tax return. If FUTA tax liability for the year exceeded $500, deposits were required quarterly. Reconcile deposits to the Form 940 before filing.' },
      { task: 'Update payroll tax rates for the new year', detail: 'Social Security wage base resets January 1. SUTA rates change annually per state notice. Federal withholding tables update with the IRS Publication 15.' },
      { task: 'Reconcile ACA reporting requirements', detail: 'Applicable Large Employers (50+ FTEs) must file 1094-C and 1095-C by February 28 (paper) or March 31 (electronic). Confirm ALE status and prepare 1095-C data now.' },
    ],
  },
];

export default function YearEndChecklistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Guides', item: 'https://www.beghr.com/resources/guides' },
              { '@type': 'ListItem', position: 4, name: 'Year-End Payroll Checklist', item: 'https://www.beghr.com/resources/guides/year-end-payroll-checklist' },
            ],
          }),
        }}
      />

      {/* HERO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Free Download</p>
            <h1>2026 Year-End Payroll Checklist</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '620px', margin: '1rem auto 0', textAlign: 'center' }}>
              W-2 production deadlines, 941 reconciliation, ACA reporting, state filing requirements, and new year rate updates. Everything in one checklist, phased by month.
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
            toolName="2026 Year-End Payroll Checklist"
            toolDescription="W-2 deadlines, 941 reconciliation, ACA reporting, and state filings -- the full year-end checklist, emailed to you."
            assetUrl="/resources/guides/year-end-payroll-checklist"
            assetLabel="Email me the checklist"
          />
        </div>
      </section>

      {/* WHAT IT COVERS */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div>
              <h2 style={{ marginBottom: '0.5rem' }}>What this checklist covers</h2>
              <p style={{ color: '#555555', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Year-end payroll is one of the highest-risk periods for employers. A missed W-2 deadline triggers IRS penalties starting at $60 per form. A 941 reconciliation error means amended returns. This checklist walks your team through every required task from October through January in the order they need to happen.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {[
                  'W-2 production, delivery, and SSA filing (January 31 deadline)',
                  '941 annual reconciliation against W-3 totals',
                  'Form 940 FUTA return and deposit verification',
                  'ACA 1094-C and 1095-C reporting for ALEs',
                  'State W-2 filing requirements and thresholds',
                  'Benefit election changes and new year rate updates',
                  'Taxable fringe benefit calculation and reporting',
                  'Third-party sick pay and contractor 1099-NEC preparation',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: '#ECAC60', fontWeight: '700', flexShrink: 0, fontSize: '1.1rem', lineHeight: '1.4' }}>&#10003;</span>
                    <span style={{ fontSize: '0.93rem', color: '#444444', lineHeight: '1.6' }}>{item}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: '#555555', fontSize: '0.92rem', lineHeight: '1.65' }}>
                If your team is spending more than a few hours on year-end payroll tasks, that is a signal. <Link href="/services/managed-payroll" style={{ color: '#ECAC60', textDecoration: 'underline' }}>BEG managed payroll</Link> handles the full year-end process at $25-$45 PEPM, all-inclusive. No separate W-2 fee.
              </p>
            </div>
        </div>
      </section>

      {/* CHECKLIST */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="head center reveal">
            <p className="eyebrow">The Full Checklist</p>
            <h2>Year-end payroll tasks by phase</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', marginTop: '2.5rem' }}>
            {checklist.map(({ phase, items }) => (
              <div key={phase} className="reveal">
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', background: '#000000', color: '#ECAC60', padding: '0.6rem 1rem', borderRadius: '6px', marginBottom: '1rem' }}>{phase}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {items.map(({ task, detail }) => (
                    <div key={task} style={{ background: '#ffffff', border: '1px solid #e5e5e5', borderRadius: '6px', padding: '1rem 1.25rem', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.75rem', alignItems: 'flex-start' }}>
                      <div style={{ width: '22px', height: '22px', border: '2px solid #ECAC60', borderRadius: '4px', flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '0.95rem', color: '#000000', marginBottom: '0.3rem' }}>{task}</strong>
                        <p style={{ margin: 0, fontSize: '0.87rem', color: '#555555', lineHeight: '1.6' }}>{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGED PAYROLL PITCH */}
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div style={{ background: '#000000', borderRadius: '10px', padding: '2.5rem', textAlign: 'center', color: '#ffffff' }} className="reveal">
            <p className="eyebrow" style={{ color: '#ECAC60' }}>Want BEG to Handle All of This?</p>
            <h2 style={{ color: '#ffffff', marginBottom: '1rem', fontSize: '1.6rem' }}>BEG manages the full year-end process for you. $25-$45 PEPM, all-inclusive.</h2>
            <p style={{ color: '#cccccc', lineHeight: '1.7', maxWidth: '560px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
              W-2s, 941 reconciliation, ACA reporting, and state filings, all handled by your dedicated BEG payroll contact. No per-form fees.
            </p>
            <PricingCta service="managed-payroll" subline={false} />
          </div>
        </div>
      </section>
    </>
  );
}
