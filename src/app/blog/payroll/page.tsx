import { Metadata } from 'next';
import Link from 'next/link';
import HeroImageBox from '@/components/HeroImageBox';

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
  {
    title: 'SaaS Payroll Outsourcing: Cost vs. Hiring Payroll Ops Manager',
    description: 'SaaS company payroll outsourcing vs. hiring in-house. Save $70K-$110K annually. Scale payroll without growing headcount.',
    slug: '/blog/payroll/technology/saas-payroll-outsourcing',
  },
  {
    title: 'Manufacturing Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Manufacturing payroll outsourcing vs. hiring in-house. Save $65K-$100K annually. Handle shift work, overtime, and compliance easily.',
    slug: '/blog/payroll/manufacturing/outsourcing-payroll',
  },
  {
    title: 'Retail Payroll Outsourcing: Cost vs. Hiring HR Coordinator',
    description: 'Retail payroll outsourcing vs. hiring in-house. Save $60K-$90K annually. Handle seasonal staffing and compliance easily.',
    slug: '/blog/payroll/retail/staffing-payroll',
  },
  {
    title: 'Nonprofit Payroll Outsourcing: Cost vs. Hiring HR Staff',
    description: 'Nonprofit payroll outsourcing vs. hiring in-house. Save $55K-$85K annually. Simplify tax-exempt compliance.',
    slug: '/blog/payroll/nonprofits/charity-payroll',
  },
  {
    title: 'Construction Payroll Outsourcing: Cost vs. Hiring Payroll Manager',
    description: 'Construction payroll outsourcing vs. hiring in-house. Save $70K-$105K annually. Handle 1099 contractors, prevailing wage, and multi-project tracking.',
    slug: '/blog/payroll/construction/contractors-payroll',
  },
  {
    title: 'Real Estate Payroll Outsourcing: Cost vs. Hiring HR Coordinator',
    description: 'Real estate company payroll outsourcing vs. hiring in-house. Save $62K-$95K annually. Simplify multi-property, multi-state payroll.',
    slug: '/blog/payroll/real-estate/property-management',
  },
  {
    title: 'Healthcare Clinic Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Healthcare clinic payroll outsourcing vs. hiring in-house. Save $68K-$102K annually. Handle HIPAA compliance and multi-location payroll.',
    slug: '/blog/payroll/healthcare-general/clinics-payroll',
  },
  {
    title: 'Financial Services Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Financial services payroll outsourcing vs. hiring in-house. Save $72K-$108K annually. Handle compliance, commissions, and regulatory requirements.',
    slug: '/blog/payroll/financial-services/wealth-firms',
  },
  {
    title: 'E-Commerce Payroll Outsourcing: Cost vs. Hiring HR Coordinator',
    description: 'E-commerce and DTC payroll outsourcing vs. hiring in-house. Save $60K-$90K annually. Handle seasonal staffing, remote teams, and growth.',
    slug: '/blog/payroll/ecommerce/online-stores',
  },
  {
    title: 'Hotel & Hospitality Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Hotel and hospitality payroll outsourcing vs. hiring in-house. Save $65K-$100K annually. Handle tipped employees, scheduling, and high turnover.',
    slug: '/blog/payroll/hospitality-general/hotels-resorts',
  },
  {
    title: 'Staffing Agency Payroll Outsourcing: Cost vs. Hiring HR Manager',
    description: 'Staffing and recruitment payroll outsourcing vs. hiring in-house. Save $68K-$102K annually. Handle 1099 contractors, W-2 temps, and compliance.',
    slug: '/blog/payroll/professional-services-staffing/recruiting',
  },
];

export default function BlogPayrollPage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog · Payroll &amp; HR Compliance</p>
              <h1>Payroll &amp; HR Compliance</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                Tax law changes, payroll regulations, compliance tips, and best practices for businesses nationwide.
              </p>
            </div>
            <HeroImageBox src="/assets/hero-images/payroll.svg" alt="Payroll & HR Compliance" />
          </div>
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
