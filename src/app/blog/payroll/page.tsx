import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payroll & HR Compliance | BEG Blog',
  description: 'Tax law changes, payroll regulations, and compliance tips for businesses nationwide.',
  alternates: { canonical: 'https://beghr.com/blog/payroll' },
};

export default function BlogPayrollPage() {
  return (
    <section className="hero">
      <div className="container" style={{ maxWidth: '840px' }}>
        <p className="eyebrow">Blog · Payroll &amp; HR Compliance</p>
        <h1>Payroll &amp; HR Compliance</h1>
        <p className="lede" style={{ margin: '18px 0 28px' }}>Posts coming soon. Check back for tax law updates, compliance tips, and payroll best practices.</p>
      </div>
    </section>
  );
}
