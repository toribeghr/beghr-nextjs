import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'HR Outsourcing Compliance Guides | BEG Blog',
  description: 'State employee handbook rules, leave law, and HR compliance guides for employers nationwide. Powered by isolved.',
  alternates: { canonical: 'https://www.beghr.com/blog/hr-outsourcing' },
  openGraph: {
    title: 'HR Outsourcing Compliance Guides | BEG Blog',
    description: 'State employee handbook rules, leave law, and HR compliance guides for employers nationwide. Powered by isolved.',
    url: 'https://www.beghr.com/blog/hr-outsourcing',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'HR Outsourcing Compliance Guides | BEG Blog', description: 'State employee handbook rules, leave law, and HR compliance guides for employers nationwide. Powered by isolved.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const faqs = [
  { q: 'What does HR outsourcing cover?', a: 'Certified HR professionals handle your handbook, labor law posters, compliant onboarding, leave administration, and manager coaching, delivered remotely nationwide. Powered by isolved.' },
  { q: 'Is HR outsourcing a PEO?', a: 'No. There is no co-employment and no employer-of-record change. Your company stays the employer; the HR professionals support your team.' },
  { q: 'Do these guides replace legal advice?', a: 'No. These are general compliance guides for 2026. State rules change often, so confirm current requirements with your state labor office before you set policy.' },
];

const handbookPosts = [
  { title: 'Alabama Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/alabama-employee-handbook-requirements' },
  { title: 'Alaska Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/alaska-employee-handbook-requirements' },
  { title: 'Arizona Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/arizona-employee-handbook-requirements' },
  { title: 'Arkansas Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/arkansas-employee-handbook-requirements' },
  { title: 'California Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/california-employee-handbook-requirements' },
  { title: 'Colorado Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/colorado-employee-handbook-requirements' },
  { title: 'Connecticut Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/connecticut-employee-handbook-requirements' },
  { title: 'Delaware Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/delaware-employee-handbook-requirements' },
  { title: 'Florida Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/florida-employee-handbook-requirements' },
  { title: 'Georgia Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/georgia-employee-handbook-requirements' },
  { title: 'Hawaii Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/hawaii-employee-handbook-requirements' },
  { title: 'Idaho Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/idaho-employee-handbook-requirements' },
  { title: 'Illinois Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/illinois-employee-handbook-requirements' },
  { title: 'Indiana Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/indiana-employee-handbook-requirements' },
  { title: 'Iowa Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/iowa-employee-handbook-requirements' },
  { title: 'Kansas Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/kansas-employee-handbook-requirements' },
  { title: 'Kentucky Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/kentucky-employee-handbook-requirements' },
  { title: 'Louisiana Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/louisiana-employee-handbook-requirements' },
  { title: 'Maine Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/maine-employee-handbook-requirements' },
  { title: 'Maryland Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/maryland-employee-handbook-requirements' },
  { title: 'Massachusetts Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/massachusetts-employee-handbook-requirements' },
  { title: 'Michigan Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/michigan-employee-handbook-requirements' },
  { title: 'Minnesota Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/minnesota-employee-handbook-requirements' },
  { title: 'Mississippi Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/mississippi-employee-handbook-requirements' },
  { title: 'Missouri Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/missouri-employee-handbook-requirements' },
  { title: 'Montana Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/montana-employee-handbook-requirements' },
  { title: 'Nebraska Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/nebraska-employee-handbook-requirements' },
  { title: 'Nevada Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/nevada-employee-handbook-requirements' },
  { title: 'New Hampshire Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/new-hampshire-employee-handbook-requirements' },
  { title: 'New Jersey Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/new-jersey-employee-handbook-requirements' },
  { title: 'New Mexico Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/new-mexico-employee-handbook-requirements' },
  { title: 'New York Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/new-york-employee-handbook-requirements' },
  { title: 'North Carolina Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/north-carolina-employee-handbook-requirements' },
  { title: 'North Dakota Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/north-dakota-employee-handbook-requirements' },
  { title: 'Ohio Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/ohio-employee-handbook-requirements' },
  { title: 'Oklahoma Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/oklahoma-employee-handbook-requirements' },
  { title: 'Oregon Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/oregon-employee-handbook-requirements' },
  { title: 'Pennsylvania Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/pennsylvania-employee-handbook-requirements' },
  { title: 'Rhode Island Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/rhode-island-employee-handbook-requirements' },
  { title: 'South Carolina Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/south-carolina-employee-handbook-requirements' },
  { title: 'South Dakota Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/south-dakota-employee-handbook-requirements' },
  { title: 'Tennessee Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/tennessee-employee-handbook-requirements' },
  { title: 'Texas Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/texas-employee-handbook-requirements' },
  { title: 'Utah Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/utah-employee-handbook-requirements' },
  { title: 'Vermont Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/vermont-employee-handbook-requirements' },
  { title: 'Virginia Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/virginia-employee-handbook-requirements' },
  { title: 'Washington Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/washington-employee-handbook-requirements' },
  { title: 'West Virginia Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/west-virginia-employee-handbook-requirements' },
  { title: 'Wisconsin Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/wisconsin-employee-handbook-requirements' },
  { title: 'Wyoming Employee Handbook Requirements', href: '/blog/hr-outsourcing/handbooks/wyoming-employee-handbook-requirements' },
];

const terminationPosts = [
  { title: 'Alabama Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/alabama-termination-final-paycheck-rules' },
  { title: 'Alaska Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/alaska-termination-final-paycheck-rules' },
  { title: 'Arizona Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/arizona-termination-final-paycheck-rules' },
  { title: 'Arkansas Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/arkansas-termination-final-paycheck-rules' },
  { title: 'California Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/california-termination-final-paycheck-rules' },
  { title: 'Colorado Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/colorado-termination-final-paycheck-rules' },
  { title: 'Connecticut Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/connecticut-termination-final-paycheck-rules' },
  { title: 'Delaware Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/delaware-termination-final-paycheck-rules' },
  { title: 'Florida Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/florida-termination-final-paycheck-rules' },
  { title: 'Georgia Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/georgia-termination-final-paycheck-rules' },
  { title: 'Hawaii Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/hawaii-termination-final-paycheck-rules' },
  { title: 'Idaho Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/idaho-termination-final-paycheck-rules' },
  { title: 'Illinois Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/illinois-termination-final-paycheck-rules' },
  { title: 'Indiana Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/indiana-termination-final-paycheck-rules' },
  { title: 'Iowa Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/iowa-termination-final-paycheck-rules' },
  { title: 'Kansas Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/kansas-termination-final-paycheck-rules' },
  { title: 'Kentucky Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/kentucky-termination-final-paycheck-rules' },
  { title: 'Louisiana Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/louisiana-termination-final-paycheck-rules' },
  { title: 'Maine Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/maine-termination-final-paycheck-rules' },
  { title: 'Maryland Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/maryland-termination-final-paycheck-rules' },
  { title: 'Massachusetts Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/massachusetts-termination-final-paycheck-rules' },
  { title: 'Michigan Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/michigan-termination-final-paycheck-rules' },
  { title: 'Minnesota Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/minnesota-termination-final-paycheck-rules' },
  { title: 'Mississippi Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/mississippi-termination-final-paycheck-rules' },
  { title: 'Missouri Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/missouri-termination-final-paycheck-rules' },
  { title: 'Montana Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/montana-termination-final-paycheck-rules' },
  { title: 'Nebraska Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/nebraska-termination-final-paycheck-rules' },
  { title: 'Nevada Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/nevada-termination-final-paycheck-rules' },
  { title: 'New Hampshire Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/new-hampshire-termination-final-paycheck-rules' },
  { title: 'New Jersey Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/new-jersey-termination-final-paycheck-rules' },
  { title: 'New Mexico Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/new-mexico-termination-final-paycheck-rules' },
  { title: 'New York Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/new-york-termination-final-paycheck-rules' },
  { title: 'North Carolina Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/north-carolina-termination-final-paycheck-rules' },
  { title: 'North Dakota Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/north-dakota-termination-final-paycheck-rules' },
  { title: 'Ohio Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/ohio-termination-final-paycheck-rules' },
  { title: 'Oklahoma Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/oklahoma-termination-final-paycheck-rules' },
  { title: 'Oregon Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/oregon-termination-final-paycheck-rules' },
  { title: 'Pennsylvania Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/pennsylvania-termination-final-paycheck-rules' },
  { title: 'Rhode Island Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/rhode-island-termination-final-paycheck-rules' },
  { title: 'South Carolina Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/south-carolina-termination-final-paycheck-rules' },
  { title: 'South Dakota Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/south-dakota-termination-final-paycheck-rules' },
  { title: 'Tennessee Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/tennessee-termination-final-paycheck-rules' },
  { title: 'Texas Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/texas-termination-final-paycheck-rules' },
  { title: 'Utah Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/utah-termination-final-paycheck-rules' },
  { title: 'Vermont Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/vermont-termination-final-paycheck-rules' },
  { title: 'Virginia Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/virginia-termination-final-paycheck-rules' },
  { title: 'Washington Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/washington-termination-final-paycheck-rules' },
  { title: 'West Virginia Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/west-virginia-termination-final-paycheck-rules' },
  { title: 'Wisconsin Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/wisconsin-termination-final-paycheck-rules' },
  { title: 'Wyoming Termination & Final Paycheck Rules', href: '/blog/hr-outsourcing/terminations/wyoming-termination-final-paycheck-rules' },
];

const leavePosts = [
  { title: 'Alabama Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/alabama-paid-sick-leave-explained' },
  { title: 'Alaska Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/alaska-paid-sick-leave-explained' },
  { title: 'Arizona Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/arizona-paid-sick-leave-explained' },
  { title: 'Arkansas Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/arkansas-paid-sick-leave-explained' },
  { title: 'California Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/california-paid-sick-leave-explained' },
  { title: 'Colorado Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/colorado-paid-sick-leave-explained' },
  { title: 'Connecticut Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/connecticut-paid-sick-leave-explained' },
  { title: 'Delaware Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/delaware-paid-sick-leave-explained' },
  { title: 'Florida Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/florida-paid-sick-leave-explained' },
  { title: 'Georgia Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/georgia-paid-sick-leave-explained' },
  { title: 'Hawaii Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/hawaii-paid-sick-leave-explained' },
  { title: 'Idaho Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/idaho-paid-sick-leave-explained' },
  { title: 'Illinois Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/illinois-paid-sick-leave-explained' },
  { title: 'Indiana Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/indiana-paid-sick-leave-explained' },
  { title: 'Iowa Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/iowa-paid-sick-leave-explained' },
  { title: 'Kansas Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/kansas-paid-sick-leave-explained' },
  { title: 'Kentucky Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/kentucky-paid-sick-leave-explained' },
  { title: 'Louisiana Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/louisiana-paid-sick-leave-explained' },
  { title: 'Maine Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/maine-paid-sick-leave-explained' },
  { title: 'Maryland Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/maryland-paid-sick-leave-explained' },
  { title: 'Massachusetts Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/massachusetts-paid-sick-leave-explained' },
  { title: 'Michigan Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/michigan-paid-sick-leave-explained' },
  { title: 'Minnesota Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/minnesota-paid-sick-leave-explained' },
  { title: 'Mississippi Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/mississippi-paid-sick-leave-explained' },
  { title: 'Missouri Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/missouri-paid-sick-leave-explained' },
  { title: 'Montana Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/montana-paid-sick-leave-explained' },
  { title: 'Nebraska Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/nebraska-paid-sick-leave-explained' },
  { title: 'Nevada Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/nevada-paid-sick-leave-explained' },
  { title: 'New Hampshire Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/new-hampshire-paid-sick-leave-explained' },
  { title: 'New Jersey Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/new-jersey-paid-sick-leave-explained' },
  { title: 'New Mexico Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/new-mexico-paid-sick-leave-explained' },
  { title: 'New York Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/new-york-paid-sick-leave-explained' },
  { title: 'North Carolina Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/north-carolina-paid-sick-leave-explained' },
  { title: 'North Dakota Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/north-dakota-paid-sick-leave-explained' },
  { title: 'Ohio Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/ohio-paid-sick-leave-explained' },
  { title: 'Oklahoma Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/oklahoma-paid-sick-leave-explained' },
  { title: 'Oregon Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/oregon-paid-sick-leave-explained' },
  { title: 'Pennsylvania Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/pennsylvania-paid-sick-leave-explained' },
  { title: 'Rhode Island Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/rhode-island-paid-sick-leave-explained' },
  { title: 'South Carolina Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/south-carolina-paid-sick-leave-explained' },
  { title: 'South Dakota Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/south-dakota-paid-sick-leave-explained' },
  { title: 'Tennessee Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/tennessee-paid-sick-leave-explained' },
  { title: 'Texas Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/texas-paid-sick-leave-explained' },
  { title: 'Utah Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/utah-paid-sick-leave-explained' },
  { title: 'Vermont Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/vermont-paid-sick-leave-explained' },
  { title: 'Virginia Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/virginia-paid-sick-leave-explained' },
  { title: 'Washington Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/washington-paid-sick-leave-explained' },
  { title: 'West Virginia Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/west-virginia-paid-sick-leave-explained' },
  { title: 'Wisconsin Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/wisconsin-paid-sick-leave-explained' },
  { title: 'Wyoming Paid Sick Leave, Explained', href: '/blog/hr-outsourcing/leave/wyoming-paid-sick-leave-explained' },
];


export default function HrOutsourcingBlogHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'FAQPage',
                mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
                  { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.beghr.com/blog' },
                  { '@type': 'ListItem', position: 3, name: 'HR Outsourcing', item: 'https://www.beghr.com/blog/hr-outsourcing' },
                ],
              },
            ],
          }),
        }}
      />

      {/* INTRO */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="head center reveal">
            <p className="eyebrow">HR Outsourcing Blog</p>
            <h1>HR outsourcing compliance guides</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: '#555555', maxWidth: '680px', margin: '1rem auto 0', textAlign: 'center' }}>
              State employee handbook rules, leave law, and the policies employers get wrong. Plain-language guides for growing companies, backed by certified HR professionals. HR outsourcing, powered by isolved.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/services/hr-outsourcing" style={{ background: '#ECAC60', color: '#000', padding: '0.6rem 1.4rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none' }}>HR Outsourcing Overview &rarr;</Link>
              <Link href="/services/hr-outsourcing/leave-law-lookup" style={{ background: '#fff', border: '1px solid #ECAC60', color: '#000', padding: '0.6rem 1.4rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none' }}>Free: State Leave Law Lookup &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* HANDBOOK POSTS */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="head reveal" style={{ marginBottom: '1.5rem' }}>
            <p className="eyebrow">Employee Handbook Requirements by State</p>
            <h2>Every state, one guide at a time</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.85rem' }}>
            {handbookPosts.map(p => (
              <Link key={p.href} href={p.href} style={{ display: 'block', background: '#fff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1rem 1.15rem', textDecoration: 'none', color: '#000' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Termination and Final Paycheck Rules by State */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="head reveal" style={{ marginBottom: '1.5rem' }}>
            <p className="eyebrow">Termination and Final Paycheck Rules by State</p>
            <h2>Handling exits the right way</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.85rem' }}>
            {terminationPosts.map(p => (
              <Link key={p.href} href={p.href} style={{ display: 'block', background: '#fff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1rem 1.15rem', textDecoration: 'none', color: '#000' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Paid Sick Leave by State */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="head reveal" style={{ marginBottom: '1.5rem' }}>
            <p className="eyebrow">Paid Sick Leave by State</p>
            <h2>What every state does and does not require</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.85rem' }}>
            {leavePosts.map(p => (
              <Link key={p.href} href={p.href} style={{ display: 'block', background: '#fff', border: '1px solid #e5e5e5', borderLeft: '4px solid #ECAC60', borderRadius: '8px', padding: '1rem 1.15rem', textDecoration: 'none', color: '#000' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GLOSSARY TEASER */}
      <section className="section">
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <p className="eyebrow">HR Glossary</p>
          <h2>Confused by a term?</h2>
          <p style={{ marginTop: '0.75rem', color: '#555', lineHeight: 1.7 }}>
            Plain-language definitions of the HR terms employers run into, from co-employment and PEO to FMLA and at-will employment.
          </p>
          <div style={{ marginTop: '1.25rem' }}>
            <Link href="/resources/hr-glossary" style={{ background: '#ECAC60', color: '#000', padding: '0.6rem 1.4rem', borderRadius: '6px', fontWeight: 700, fontSize: '0.92rem', textDecoration: 'none' }}>Open the HR Glossary &rarr;</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '720px' }}>
          <div className="head reveal" style={{ marginBottom: '1rem' }}>
            <p className="eyebrow">Common Questions</p>
            <h2>HR outsourcing, briefly</h2>
          </div>
          <div className="faq">
            {faqs.map(f => (
              <div key={f.q} className="faq-item">
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
