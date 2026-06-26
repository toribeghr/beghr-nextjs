import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Payroll & HR Compliance | BEG Blog',
  description: 'Tax law changes, payroll regulations, and compliance tips for businesses nationwide.',
  alternates: { canonical: 'https://beghr.com/blog/payroll' },
};

const posts = [
  {
    title: 'Law Firm Payroll Outsourcing: Cost vs. Hiring a Paralegal or HR Manager',
    description: 'Compare law firm payroll outsourcing costs vs. hiring in-house. Save $60K-$100K+ annually. Real numbers on compliance, time savings, and ROI.',
    slug: '/blog/payroll/professional-services/law-firm-payroll-outsourcing',
  },
  {
    title: 'Payroll Outsourcing for Medical Practices: Cost vs. Hiring HR Coordinator',
    description: 'Medical practice payroll outsourcing vs. hiring in-house. Save $65K-$100K annually. Real numbers on compliance, time savings, and ROI.',
    slug: '/blog/payroll/healthcare/medical-practices',
  },
  {
    title: 'Restaurant Payroll Outsourcing: Cost vs. Hiring In-House Manager',
    description: 'Restaurant payroll outsourcing vs. hiring payroll manager. Save $60K-$90K annually. Handle tipped employees, tax compliance, scheduling integration.',
    slug: '/blog/payroll/hospitality/restaurant',
  },
  {
    title: 'Accounting Firm Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Accounting firm payroll outsourcing vs. hiring in-house. Save $65K-$100K+ annually. Streamline compliance, reduce errors, focus on client work.',
    slug: '/blog/payroll/professional-services/accounting',
  },
  {
    title: 'Dental Office Payroll Outsourcing: Cost vs. Hiring HR Coordinator',
    description: 'Dental office payroll outsourcing vs. hiring in-house. Save $65K+ annually. Manage hygienist tips, compliance, scheduling easily.',
    slug: '/blog/payroll/healthcare/dental',
  },
];

export default function BlogPayrollPage() {
  return (
    <>
      <section className="hero">
        <div className="container" style={{ maxWidth: '840px' }}>
          <p className="eyebrow">Blog · Payroll &amp; HR Compliance</p>
          <h1>Payroll &amp; HR Compliance</h1>
          <p className="lede" style={{ margin: '18px 0 28px' }}>
            Tax law changes, payroll regulations, compliance tips, and best practices for businesses nationwide.
          </p>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="head center reveal">
            <h2>Featured Posts</h2>
          </div>
          <div className="cards">
            {posts.map((post) => (
              <article key={post.slug} className="card reveal">
                <h3>
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                <p>{post.description}</p>
                <Link href={post.slug} className="btn btn--gold" style={{ marginTop: '16px', display: 'inline-block' }}>
                  Read Post
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
