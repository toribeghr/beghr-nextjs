import RelatedPosts from '@/components/RelatedPosts';
import PricingCta from '@/components/pricing/PricingCta';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Energy Job Description: What Candidates Notice | BEG',
  description: 'Energy JDs that list certifications and skip operational context lose experienced candidates fast.',
  alternates: { canonical: 'https://www.beghr.com/blog/energy-hiring/energy-job-description' },
  openGraph: {
    title: 'Energy Job Description: What Candidates Notice | BEG',
    description: 'Energy JDs that list certifications and skip operational context lose experienced candidates fast.',
    url: 'https://www.beghr.com/blog/energy-hiring/energy-job-description',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/blog-images/blog-energy-hiring-energy-job-description.webp', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Energy Job Description: What Candidates Notice | BEG', description: 'Energy JDs that list certifications and skip operational context lose experienced candidates fast.', images: ['https://www.beghr.com/blog-images/blog-energy-hiring-energy-job-description.webp'] },
};


const faqs = [
  {
    "question": "What certifications should I require in an oil and gas job description?",
    "answer": "Require only the certifications genuinely necessary for the role and location: TWIC for port-accessed facilities, BOSIET for offshore roles, H2S Alive for sour gas environments, OSHA 30 for supervision roles. Listing certifications that are nice-to-have as required filters out qualified candidates unnecessarily."
  },
  {
    "question": "How do I attract energy candidates in a tight market?",
    "answer": "Comp transparency and project quality. Energy professionals share market information freely. Post a realistic range, be specific about the project opportunity, and move the process quickly. Candidates who have options choose based on how the opportunity is presented as much as the actual offer."
  },
  {
    "question": "Should I list a specific location or offer relocation in an energy job description?",
    "answer": "Yes to both, if applicable. Location specificity avoids mismatched expectations. If relocation assistance is available, stating that explicitly broadens your candidate pool materially, particularly for specialized roles where the best candidate may be in a different basin or region."
  }
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How to Write an Energy Sector Job Description That Attracts Experienced Candidates","datePublished":"2026-06-29","dateModified":"2026-06-29","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","url":"https://www.linkedin.com/in/theanthonymoretti"},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"mainEntityOfPage":"https://www.beghr.com/blog/energy-hiring/energy-job-description"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Energy Hiring</p>
              <h1>How to Write an Energy Sector Job Description That Attracts Experienced Candidates</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                The best energy professionals, field engineers, project managers, and HSE leaders, are already employed on active projects. A generic job description will not move them. Here is what will.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Updated:</strong> June 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: "980px", marginTop: "0.5rem" }}>
        <img src="/blog-images/blog-energy-hiring-energy-job-description.webp" alt={`Energy Job Description: What Candidates Notice`} width={1344} height={768} style={{ width: "100%", height: "auto", borderRadius: "12px", display: "block" }} />
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.8', fontSize: '1.05rem' }}>
        <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
          <p style={{ fontWeight: 800, color: '#000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333' }}>
                        <li>Lead with the Project and the Asset: structured questions that reveal real track record.</li>
            <li>Be Specific About the Operational Scope: structured questions that reveal real track record.</li>
            <li>State Safety and Regulatory Requirements Accurately: structured questions that reveal real track record.</li>

            <li>BEG fills permanent roles in 23-35 days at roughly 50% less than contingency, with an 86% fill rate and a 45-day replacement guarantee.</li>
          </ul>
        </aside>

        <p>Energy sector hiring, whether in oil and gas, renewables, power generation, or utilities, competes for a relatively small pool of experienced professionals who move between operators, EPCs, and developers based on project quality, comp, and culture. A job description is the first impression of all three. Most fail to communicate any of them.</p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Lead with the Project and the Asset</h2>
        <p>Energy professionals want to know what they are working on: the asset type (upstream, midstream, downstream, wind, solar, battery storage, transmission), the project stage (greenfield, brownfield, operations, decommission), and the geographic location. These details determine whether the candidate is even relevant before they read further. Put them in the first paragraph.</p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Be Specific About the Operational Scope</h2>
        <p>For a project manager: the dollar value and complexity of projects managed, the number of direct reports, and whether the role is EPC, owner's representative, or operator. For a field engineer: the specific systems or disciplines (rotating equipment, instrumentation, civil), the operational environment, and the on-site rotation if applicable. Generic scope descriptions attract candidates who will not fit the actual role.</p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>State Safety and Regulatory Requirements Accurately</h2>
        <p>List the specific certifications required: OSHA 30, TWIC, H2S Alive, BOSIET, or role-specific credentials. If the role involves regulatory reporting (FERC, EPA, state PUC), state that clearly. Energy professionals who take compliance seriously will walk from a posting where regulatory expectations are unclear.</p>



        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Filling a project manager, field engineer, or HSE role?</h3>
          <p style={{ marginBottom: '1.5rem' }}>Experienced energy professionals are on active projects, not job boards. BEG reaches passive energy sector candidates and fills roles in 23-35 days at roughly 50% less than contingency.</p>
          <PricingCta service="job-placement" subline={false} />
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Address Rotation and Location Directly</h2>
        <p>In the energy sector, location and rotation schedule are often the deciding factor for candidates, not compensation. A field position that requires four-weeks-on, two-weeks-off in a remote location is a very different proposition than a project management role based in Houston with occasional site travel. State this clearly and early. Candidates who are not interested in the rotation will self-select out, which saves everyone time. Candidates who are a fit will engage faster knowing what they are actually considering.</p>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>Fill this role in 23-35 days</h2>
          <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>Pick the role, answer a few quick questions, and see your placement quote on screen in 90 seconds.</p>
          <PricingCta service="job-placement" subline={false} />
        </div>


        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>FAQ</h2>
        <div className="faq" style={{ marginTop: '1rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#f9f9f9', border: '1px solid #e5e5e5', borderTop: '4px solid #ECAC60', borderRadius: '8px', padding: '1.5rem', margin: '2.5rem 0' }}>
          <p style={{ margin: '0 0 0.75rem', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#666' }}>Related Resources</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a href="/services/job-placement/energy" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG Energy Placement &rarr;</a>
            <a href="/blog/energy-hiring/energy-talent-shortage" style={{ display: 'inline-block', background: '#fff', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid #ECAC60' }}>The Energy Talent Shortage &rarr;</a>
            <a href="/blog/energy-hiring/hiring-energy-project-managers" style={{ display: 'inline-block', background: '#fff', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid #ECAC60' }}>Hiring Energy Project Managers &rarr;</a>
            
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales - Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony leads energy sector placement at BEG. BEG fills project manager, field engineer, HSE manager, and operations manager roles in oil and gas, renewables, and power through isolved Job Placement Services on a milestone model with an 86% fill rate and a 45-day replacement guarantee.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
          <RelatedPosts posts={[
        { category: "Energy Hiring", title: "Energy Salary Trends 2026: What They Don", excerpt: "Energy comp is climbing and the best candidates are passive. What actually closes an energy hire...", href: "/blog/energy-hiring/energy-salary-trends" },
        { category: "Energy Hiring", title: "Energy Talent Shortage 2026: What Nobody Warns", excerpt: "Retirements and the energy transition are thinning the technical pipeline. What the 2026 shortage...", href: "/blog/energy-hiring/energy-talent-shortage" },
        { category: "Energy Hiring", title: "Field Engineer Recruiting: The Truth About Turnover", excerpt: "A vacant field engineer seat stalls execution in the field. How to recruit and close strong energy...", href: "/blog/energy-hiring/field-engineer-recruiting" },
      ]} />
      </article>
  );
}
