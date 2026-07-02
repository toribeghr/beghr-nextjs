import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payroll Glossary | 150 Terms Explained | BEG',
  description: 'Complete payroll glossary with 150 terms explained for employers. W-2, FICA, garnishments, FUTA, exempt status, and more.',
  alternates: { canonical: 'https://www.beghr.com/resources/payroll-glossary' },
  openGraph: {
    title: 'Payroll Glossary | 150 Terms Explained | BEG',
    description: 'Complete payroll glossary with 150 terms explained for employers. W-2, FICA, garnishments, FUTA, exempt status, and more.',
    url: 'https://www.beghr.com/resources/payroll-glossary',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Payroll Glossary | 150 Terms Explained | BEG',
    description: 'Complete payroll glossary with 150 terms explained for employers. W-2, FICA, garnishments, FUTA, exempt status, and more.',
    images: ['https://www.beghr.com/assets/og-image.png'],
  },
};

export default function PayrollGlossaryPage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.beghr.com/resources' },
      { '@type': 'ListItem', position: 3, name: 'Payroll Glossary', item: 'https://www.beghr.com/resources/payroll-glossary' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Payroll Glossary</p>
            <h1>Payroll Glossary: 150 Terms Every Employer Should Know</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center' }}>
              Plain-English definitions for every payroll term you will encounter as an employer. From FICA and FUTA to garnishments, exempt status, and certified payroll. Bookmark this page and come back whenever a term stumps you.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '980px' }}>

          {/* Alpha jump bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '3rem', padding: '1rem 1.25rem', background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: '6px' }}>
            <a key="#" href="#letter-#" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>#</a> <a key="A" href="#letter-A" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>A</a> <a key="B" href="#letter-B" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>B</a> <a key="C" href="#letter-C" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>C</a> <a key="D" href="#letter-D" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>D</a> <a key="E" href="#letter-E" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>E</a> <a key="F" href="#letter-F" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>F</a> <a key="G" href="#letter-G" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>G</a> <a key="H" href="#letter-H" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>H</a> <a key="I" href="#letter-I" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>I</a> <a key="J" href="#letter-J" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>J</a> <a key="L" href="#letter-L" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>L</a> <a key="M" href="#letter-M" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>M</a> <a key="N" href="#letter-N" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>N</a> <a key="O" href="#letter-O" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>O</a> <a key="P" href="#letter-P" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>P</a> <a key="R" href="#letter-R" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>R</a> <a key="S" href="#letter-S" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>S</a> <a key="T" href="#letter-T" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>T</a> <a key="V" href="#letter-V" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>V</a> <a key="W" href="#letter-W" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>W</a> <a key="Y" href="#letter-Y" style={{ color: "#ECAC60", fontWeight: "700", textDecoration: "none", fontSize: "1rem" }}>Y</a>
          </div>

          {/* A-Z groups */}

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-#" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>#</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/1099-contractor" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>1099 Contractor &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/401k-employer-match" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>401(k) Employer Match &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/401k-plan" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>401(k) Plan &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/403b-plan" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>403(b) Plan &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/457-plan" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>457(b) Plan &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-A" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>A</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/accountable-plan" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Accountable Plan &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/ada-accommodation" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>ADA Accommodation &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/administrative-exemption" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Administrative Exemption &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/agricultural-overtime-exemption" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Agricultural Overtime Exemption &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/aso" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>ASO (Administrative Services Organization) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/at-will-employment" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>At-Will Employment &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-B" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>B</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/backup-withholding" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Backup Withholding &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/base-period" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Base Period &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/benefit-ratio-method" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Benefit Ratio Method &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/bi-weekly-payroll" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Bi-Weekly Payroll &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/bonus-taxation" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Bonus Taxation &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-C" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>C</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/cafeteria-plan" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Cafeteria Plan (Section 125) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/call-back-pay" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Call-Back Pay &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/certified-payroll" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Certified Payroll &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/child-support-garnishment" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Child Support Garnishment &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/clawback-provision" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Clawback Provision &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/cobra-continuation" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>COBRA Continuation &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/commission-payroll" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Commission Payroll &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/comp-time" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Compensatory Time (Comp Time) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/computer-employee-exemption" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Computer Employee Exemption &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/creditor-garnishment" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Creditor Garnishment &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-D" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>D</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/davis-bacon-act" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Davis-Bacon Act &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/de-minimis-fringe" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>De Minimis Fringe Benefit &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/defined-benefit-plan" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Defined Benefit Plan &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/dependent-care-fsa" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Dependent Care FSA &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/deposit-schedule" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Deposit Schedule (Form 941) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/direct-deposit" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Direct Deposit &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/disposable-earnings" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Disposable Earnings &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/draw-against-commission" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Draw Against Commission &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/dual-jobs-tip-credit" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Dual Jobs (Tip Credit) &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-E" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>E</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/e-verify" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>E-Verify &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/earned-sick-leave" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Earned Sick Leave &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/eftps" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>EFTPS &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/ein" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Employer Identification Number (EIN) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/employer-of-record" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Employer of Record (EOR) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/executive-exemption" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Executive Exemption &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/experience-rating" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Experience Rating &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-F" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>F</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/fair-labor-standards-act" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Fair Labor Standards Act (FLSA) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/fica" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>FICA &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/final-paycheck-laws" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Final Paycheck Laws &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/flsa-overtime" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>FLSA Overtime &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/fmla" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>FMLA (Family and Medical Leave Act) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/form-1099-misc" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Form 1099-MISC &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/form-1099-nec" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Form 1099-NEC &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/form-940" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Form 940 &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/form-941" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Form 941 &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/form-944" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Form 944 &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/form-i9" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Form I-9 &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/form-w2" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Form W-2 &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/form-w3" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Form W-3 &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/form-w4" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Form W-4 &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/form-w9" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Form W-9 &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/fringe-benefit-rate" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Fringe Benefit Rate &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/fringe-benefits" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Fringe Benefits &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/futa" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>FUTA (Federal Unemployment Tax Act) &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-G" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>G</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/garnishment-maximum" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Garnishment Maximum (Title III) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/gross-pay" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Gross Pay &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/group-term-life-imputed" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Group Term Life Insurance (Imputed Income) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/guaranteed-payment" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Guaranteed Payment &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-H" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>H</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/health-savings-account" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Health Savings Account (HSA) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/highly-compensated-employee-exemption" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Highly Compensated Employee Exemption &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/housing-allowance" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Housing Allowance (IRC Section 119) &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-I" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>I</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/imputed-income" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Imputed Income &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/independent-contractor" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Independent Contractor &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/integrated-enterprise-test" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Integrated Enterprise Test &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/tax-levy" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>IRS Tax Levy on Wages &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/itin" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>ITIN (Individual Taxpayer Identification Number) &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-J" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>J</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/joint-employer" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Joint Employer &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-L" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>L</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/leasing-commission-payroll" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Leasing Commission Payroll &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/lookback-period" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Lookback Period (IRS) &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-M" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>M</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/mass-layoff" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Mass Layoff &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/medicare-additional-tax" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Medicare Additional Tax (0.9%) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/minimum-wage" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Minimum Wage &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/monthly-depositor" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Monthly Depositor &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/motor-carrier-exemption" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Motor Carrier Exemption &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/multistate-payroll" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Multi-State Payroll &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-N" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>N</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/net-pay" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Net Pay &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/new-hire-reporting" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>New Hire Reporting &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/non-accountable-plan" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Non-Accountable Plan &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/non-exempt-employee" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Non-Exempt Employee &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/non-qualified-deferred-compensation" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Non-Qualified Deferred Compensation (NQDC) &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-O" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>O</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/off-cycle-payroll" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Off-Cycle Payroll &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/on-call-pay" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>On-Call Pay &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/outside-sales-exemption" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Outside Sales Exemption &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-P" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>P</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/partnership-draw" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Partnership Draw &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/pay-card" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Pay Card (Payroll Card) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/pay-frequency" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Pay Frequency &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/payroll-audit" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Payroll Audit &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/payroll-cycle" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Payroll Cycle &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/payroll-outsourcing" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Payroll Outsourcing &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/payroll-reconciliation" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Payroll Reconciliation &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/payroll-register" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Payroll Register &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/payroll-service-bureau" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Payroll Service Bureau &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/payroll-tax" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Payroll Tax &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/payroll-tax-nexus" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Payroll Tax Nexus &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/peo" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>PEO (Professional Employer Organization) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/pepm" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>PEPM (Per Employee Per Month) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/piece-rate-pay" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Piece-Rate Pay &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/premium-only-plan" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Premium-Only Plan (POP) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/prevailing-wage" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Prevailing Wage &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/professional-exemption" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Professional Exemption &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-R" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>R</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/reasonable-compensation" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Reasonable Compensation &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/reciprocity-agreement" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Reciprocity Agreement &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/overtime-regular-rate" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Regular Rate of Pay (Overtime) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/relocation-reimbursement" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Relocation Reimbursement &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/responsible-party" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Responsible Party (Trust Fund) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/retail-sales-exemption" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Retail Sales Exemption (FLSA) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/retro-pay" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Retroactive Pay &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/rsu-taxation" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>RSU Taxation &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-S" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>S</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/s-corp-payroll" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>S-Corporation Payroll &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/salary-basis-test" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Salary Basis Test &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/salary-level-test" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Salary Level Test &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/seasonal-amusement-exemption" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Seasonal Amusement Exemption &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/section-125" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Section 125 Cafeteria Plan &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/section-409a" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Section 409A &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/semi-monthly-payroll" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Semi-Monthly Payroll &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/semi-weekly-depositor" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Semi-Weekly Depositor &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/sep-ira" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>SEP IRA &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/service-charge" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Service Charge &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/severance-pay" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Severance Pay &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/shift-differential" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Shift Differential &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/sign-on-bonus" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Sign-On Bonus &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/simple-ira" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>SIMPLE IRA &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/social-security-wage-base" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Social Security Wage Base &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/state-income-tax" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>State Income Tax Withholding &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/state-unemployment-insurance" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>State Unemployment Insurance (SUI) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/sui-taxable-wage-base" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>SUI Taxable Wage Base &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/suta-dumping" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>SUTA Dumping &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-T" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>T</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/taxable-fringe-benefit" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Taxable Fringe Benefit &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/tip-credit" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Tip Credit &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/tip-pool" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Tip Pool &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/tip-reporting" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Tip Reporting &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/tipped-employee" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Tipped Employee &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/tip-minimum-wage" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Tipped Minimum Wage &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/trac-agreement" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>TRAC Agreement &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/trust-fund-recovery-penalty" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Trust Fund Recovery Penalty &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/trust-fund-taxes" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Trust Fund Taxes &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-V" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>V</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/voluntary-withholding" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Voluntary Withholding &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-W" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>W</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/wage-garnishment" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Wage Garnishment &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/warn-act" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>WARN Act &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/weekly-payroll" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Weekly Payroll &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/withholding-allowance" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Withholding Allowance (Legacy W-4) &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/workers-compensation" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Workers Compensation &rarr;</Link></li>
            <li><Link href="/resources/payroll-glossary/workweek" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Workweek (FLSA) &rarr;</Link></li>
          </ul>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 id="letter-Y" style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ECAC60', borderBottom: '2px solid #ECAC60', paddingBottom: '0.4rem', marginBottom: '1rem' }}>Y</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '0.5rem' }}>
            <li><Link href="/resources/payroll-glossary/year-end-payroll" style={{ color: "#000", textDecoration: "none", fontWeight: "500", fontSize: "0.95rem" }}>Year-End Payroll &rarr;</Link></li>
          </ul>
        </div>


          {/* CTA */}
          <div style={{ background: '#000', color: '#fff', borderRadius: '8px', padding: '2.5rem', marginTop: '4rem', textAlign: 'center' }}>
            <h2 style={{ color: '#ECAC60', marginBottom: '0.75rem' }}>Stop managing payroll. Start delegating it.</h2>
            <p style={{ color: '#ccc', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem' }}>
              BEG handles every term in this glossary for you. Fully managed payroll at $25-$45 per employee per month. Book a free 15-minute call to see how it works.
            </p>
            <PricingCta service="managed-payroll" subline={false} />
            <p style={{ margin: 0 }}>
              <Link href="/services/managed-payroll" style={{ color: '#ECAC60', fontSize: '0.9rem' }}>Learn about BEG Managed Payroll</Link>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
