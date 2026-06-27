import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Veterinary Practice Payroll: FLSA Overtime Rules for Vet Staff | BEG',
  description: 'Which veterinary employees are exempt from FLSA overtime — and which are not. Covers DVMs, veterinary technicians, receptionists, and the most common compliance mistakes.',
  alternates: { canonical: 'https://beghr.com/blog/payroll/veterinary/veterinary-staff-overtime-rules' },
};

const faqs = [
  {
    q: 'Are licensed veterinary technicians exempt from overtime?',
    a: 'Generally no. Most licensed veterinary technicians are non-exempt employees entitled to overtime pay at 1.5x their regular rate for hours over 40 per week. Unless a technician qualifies under the learned professional exemption — which requires an advanced degree, not just a licensure program — they should be treated as non-exempt. Misclassifying techs as exempt is a common and expensive mistake.',
  },
  {
    q: 'Are DVMs exempt from overtime under FLSA?',
    a: 'DVMs typically qualify for the learned professional exemption because veterinary medicine requires an advanced degree (DVM or VMD) and the work is primarily intellectual in nature. However, this exemption requires the employee to be paid on a salary basis at no less than $684 per week (as of 2024). A DVM paid hourly does not qualify and may be entitled to overtime.',
  },
  {
    q: 'What is the regular rate of pay for overtime purposes when a vet tech earns a shift differential?',
    a: 'When calculating overtime, you must use the regular rate of pay — which includes shift differentials, non-discretionary bonuses, and other extra compensation, not just base pay. If a technician earns a shift differential on weekends, that differential must be included in the regular rate calculation for any overtime hours worked that week.',
  },
  {
    q: 'Can veterinary practices average hours across two weeks to avoid paying overtime?',
    a: 'No. FLSA overtime is calculated on a fixed workweek basis — typically a fixed 7-day period. You cannot average hours across two weeks. If an employee works 50 hours in week one and 30 in week two, they are owed 10 hours of overtime for week one, regardless of what they worked the following week.',
  },
];

export default function VeterinaryOvertimePage() {
  return (
    <article className="blog-post">
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Payroll · Veterinary</p>
              <h1>Veterinary Practice Payroll: FLSA Overtime Rules for Vet Staff</h1>
              <p className="lede" style={{ margin: '18px 0 0' }}>
                Veterinary practices have a mix of exempt and non-exempt employees, and the line between them is not always obvious. Getting it wrong means back pay, penalties, and potential litigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '820px', paddingTop: '3rem', paddingBottom: '4rem' }}>

        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
          The Fair Labor Standards Act requires employers to pay non-exempt employees 1.5 times their regular rate for hours worked over 40 in a workweek. Veterinary practices employ a range of staff — from highly credentialed DVMs to veterinary technicians, assistants, and front desk staff — and the overtime exemption rules apply differently to each.
        </p>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Most FLSA violations in veterinary practices stem from one of two mistakes: treating vet techs as exempt when they are not, or failing to include all forms of compensation when calculating the regular rate for overtime purposes. Both are fixable — if you know where to look.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>FLSA Exemption Status by Role</h2>
        <div style={{ overflowX: 'auto', marginBottom: '2.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#000', color: '#fff' }}>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Role</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Typical Status</th>
                <th style={{ padding: '10px 14px', textAlign: 'left' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['DVM / VMD', 'Exempt (learned professional)', 'Must be salaried at $684+/wk'],
                ['Veterinary Technician (LVT/RVT)', 'Non-exempt', 'Licensure ≠ advanced degree exemption'],
                ['Veterinary Technologist (4-yr degree)', 'Usually non-exempt', 'Case-by-case; consult counsel'],
                ['Veterinary Assistant', 'Non-exempt', 'No advanced degree; no exemption'],
                ['Practice Manager', 'Likely exempt (executive/admin)', 'Must meet salary + duties test'],
                ['Receptionist / Client Services', 'Non-exempt', 'Clerical role; no exemption applies'],
                ['Groomer / Boarding Staff', 'Non-exempt', 'Hourly; standard overtime applies'],
              ].map(([role, status, notes], i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                  <td style={{ padding: '10px 14px', fontWeight: 500 }}>{role}</td>
                  <td style={{ padding: '10px 14px', color: status.includes('Non-exempt') ? '#c0392b' : '#27ae60', fontWeight: 600 }}>{status}</td>
                  <td style={{ padding: '10px 14px', color: '#555' }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>The Learned Professional Exemption — and Why It Rarely Covers Techs</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          The FLSA learned professional exemption covers employees whose primary duty requires knowledge of an advanced type in a field of science or learning, customarily acquired by a prolonged course of specialized intellectual instruction. DVMs meet this standard. Veterinary technicians typically do not.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Most veterinary technician licensure programs are associate degree programs (two years), not advanced degrees. The DOL has historically not considered two-year programs sufficient to meet the "advanced degree" threshold for the learned professional exemption — and state licensure requirements alone do not substitute for that educational standard.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          The practical implication: if your vet techs are working more than 40 hours per week and you are not paying overtime, you are likely in violation of FLSA.
        </p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Calculating the Regular Rate When Bonuses Are Involved</h2>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Many veterinary practices pay bonuses — production bonuses to DVMs, attendance bonuses, or holiday pay to techs and assistants. How you treat these payments in overtime calculations matters.
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '1.2rem' }}>
          Non-discretionary bonuses (bonuses that are promised in advance or tied to production metrics) must be included in the regular rate of pay for overtime calculation purposes. This means overtime is not simply 1.5 × hourly rate — it is 1.5 × (hourly rate plus the per-hour value of any non-discretionary bonus earned that week).
        </p>
        <p style={{ lineHeight: '1.7', marginBottom: '2.5rem' }}>
          Discretionary bonuses — truly spontaneous, unannounced bonuses that the employer had no prior obligation to pay — are excluded from the regular rate calculation. In practice, most production-linked bonuses are non-discretionary.
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
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.4rem' }}>Stop guessing on overtime compliance</h2>
          <p style={{ color: '#ddd', marginBottom: '1.5rem' }}>BEG manages payroll for veterinary practices including exempt/non-exempt classification review, overtime calculation, and year-end W-2s. 15-minute call.</p>
          <a href="https://calendly.com/tori-beghr/15-minute-beg-discovery-call" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>
            Book a Discovery Call
          </a>
        </div>

        <div style={{ borderTop: '1px solid #e5e5e5', paddingTop: '1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>Related</p>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
            <li><Link href="/services/managed-payroll/veterinary">Managed Payroll for Veterinary Practices</Link> — full service details</li>
            <li><Link href="/blog/payroll/veterinary/managed-payroll-vs-in-house">Managed Payroll vs. In-House for Veterinary Practices</Link> — cost comparison</li>
            <li><Link href="/services/managed-payroll">Managed Payroll Overview</Link></li>
          </ul>
        </div>

      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://beghr.com/blog' },
          { '@type': 'ListItem', position: 3, name: 'Payroll', item: 'https://beghr.com/blog/payroll' },
          { '@type': 'ListItem', position: 4, name: 'Veterinary Overtime Rules', item: 'https://beghr.com/blog/payroll/veterinary/veterinary-staff-overtime-rules' },
        ],
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      })}} />
    </article>
  );
}
