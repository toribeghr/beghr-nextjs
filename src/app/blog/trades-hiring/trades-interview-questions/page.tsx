import { Metadata } from 'next';
import RelatedTool from '@/components/RelatedTool';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Trades Interview Questions for Electricians, HVAC Technicians, and Production Supervisors | BEG',
  description: 'Trades interviews that reveal real hands-on skill, safety commitment, and supervisory track record. Questions that identify electricians, HVAC techs, and production supervisors who deliver.',
  alternates: { canonical: 'https://www.beghr.com/blog/trades-hiring/trades-interview-questions' },
  openGraph: {
    title: 'Trades Interview Questions for Electricians, HVAC Technicians, and Production Supervisors | BEG',
    description: 'Trades interviews that reveal real hands-on skill, safety commitment, and supervisory track record. Questions that identify electricians, HVAC techs, and production supervisors who deliver.',
    url: 'https://www.beghr.com/blog/trades-hiring/trades-interview-questions',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'Trades Interview Questions for Electricians, HVAC Technicians, and Production Supervisors | BEG', description: 'Trades interviews that reveal real hands-on skill, safety commitment, and supervisory track record. Questions that identify electricians, HVAC techs, and production supervisors who deliver.', images: ['https://www.beghr.com/assets/og-image.png'] },
};

const CALENDLY = getCalendlyLink('/blog/trades-hiring/trades-interview-questions');

const faqs = [
  {
    "question": "How do I verify an electrician's license in a trades interview?",
    "answer": "Ask for the license number and verify directly with your state's electrical board before the offer. For HVAC technicians, verify EPA 608 certification. For supervisors in manufacturing, verify any required safety certifications (OSHA 30, lift operator, confined space entry). License verification is a pre-offer step, not an afterthought."
  },
  {
    "question": "What is the most important thing to evaluate in a trades supervisor interview?",
    "answer": "Safety culture. Ask specifically how they have responded to a safety violation they observed on their shift, what they did immediately, and how they followed up. Supervisors who understand that their primary accountability is a safe workplace will have direct, specific answers."
  },
  {
    "question": "How do I attract experienced tradespeople who are not actively looking?",
    "answer": "Through referrals and direct outreach. The best tradespeople find work through their professional network, not job boards. Referral programs, trade school alumni outreach, and union connections are more productive than posting. BEG adds a direct-placement channel for experienced trades professionals who are passive."
  }
];

export default function Page() {
  return (
    <article className="blog-post">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Trades Interview Questions for Electricians, HVAC Techs, and Production Supervisors","datePublished":"2026-06-29","dateModified":"2026-06-29","author":{"@type":"Person","name":"Anthony Moretti","jobTitle":"VP of Sales","url":"https://www.linkedin.com/in/theanthonymoretti"},"publisher":{"@type":"Organization","name":"Business Executive Group","logo":{"@type":"ImageObject","url":"https://www.beghr.com/assets/beg-header-image.png"}},"mainEntityOfPage":"https://www.beghr.com/blog/trades-hiring/trades-interview-questions"}) }} />
      <section className="hero">
        <div className="container">
          <div className="hero-split">
            <div className="hero-split-text">
              <p className="eyebrow">Blog &middot; Trades Hiring</p>
              <h1>Trades Interview Questions for Electricians, HVAC Techs, and Production Supervisors</h1>
              <p className="lede" style={{ margin: '18px 0 28px' }}>
                A license proves minimum competency. The questions that reveal whether a tradesperson works safely, troubleshoots independently, and can develop the next person on the crew are what actually predict success.
              </p>
              <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
                <span><strong>By</strong> Anthony Moretti, VP of Sales</span>
                <span><strong>Updated:</strong> June 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '840px', lineHeight: '1.8', fontSize: '1.05rem' }}>
        <aside style={{ background: '#FBF3E8', border: '1px solid #ECAC60', borderRadius: '8px', padding: '1.25rem 1.5rem', margin: '0 0 2rem' }}>
          <p style={{ fontWeight: 800, color: '#000', margin: '0 0 0.5rem', fontSize: '0.9rem', letterSpacing: '0.04em' }}>KEY TAKEAWAYS</p>
          <ul style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.6, fontSize: '0.97rem', color: '#333' }}>
                        <li>Questions for Electricians and Field Technicians: structured questions that reveal real track record.</li>
            <li>Questions for HVAC Technicians and Maintenance Techs: structured questions that reveal real track record.</li>
            <li>Questions for Production Supervisors and Crew Leads: structured questions that reveal real track record.</li>

            <li>BEG fills permanent roles in 23-35 days at roughly 50% less than contingency, with an 86% fill rate and a 45-day replacement guarantee.</li>
          </ul>
        </aside>

        <p>Trades hiring is complicated by a shortage that makes every open position more painful to leave unfilled. But hiring the wrong electrician, HVAC technician, or production supervisor is worse than leaving the seat open. Safety violations, poor work quality, and supervision failures cost more than a vacancy. These interview questions are designed to surface real skill, safety commitment, and leadership quality.</p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Questions for Electricians and Field Technicians</h2>
        <p>Ask candidates to describe the most complex troubleshooting problem they have diagnosed and how they worked through it. Ask how they have handled a situation where a customer or contractor was pressuring them to skip a step that they knew was required for code compliance. Ask how they have approached training a new apprentice on a job where the schedule was already tight. Experienced tradespeople will have specific, technical answers. Those whose experience is thinner than the resume suggests will generalize.</p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Questions for HVAC Technicians and Maintenance Techs</h2>
        <p>Ask candidates to walk through how they diagnose a refrigerant system that is not reaching setpoint. Ask how they manage a situation where a part is on backorder and the customer needs the system running. Ask what their maintenance ticket completion rate has been in their last role and how they prioritize when the call volume is high. HVAC and maintenance professionals who have managed service environments will answer with real operational experience.</p>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>Questions for Production Supervisors and Crew Leads</h2>
        <p>Ask how they have managed a crew member who was not meeting pace consistently and what the conversation and outcome looked like. Ask how they have handled a safety near-miss on their shift, specifically what they did immediately and what they reported and to whom. Ask how they train a new operator on a process that is not well documented. Supervisors who have led people on the floor will describe real situations with specific decisions.</p>



        <div style={{ background: '#ECAC60', color: '#000', padding: '2rem', borderRadius: '8px', textAlign: 'center', margin: '2.5rem 0' }}>
          <h3 style={{ color: '#000', margin: '0 0 0.75rem' }}>Filling an electrician, HVAC tech, or production supervisor role?</h3>
          <p style={{ marginBottom: '1.5rem' }}>The best tradespeople are employed and not browsing job boards. BEG reaches passive trades candidates and fills roles in 23-35 days at roughly 50% less than contingency.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#000', color: '#ECAC60', padding: '0.85rem 2rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>Book a Free Discovery Call &rarr;</a>
        </div>

        <h2 style={{ marginTop: '2.5rem', marginBottom: '1rem', borderBottom: '2px solid #ECAC60', paddingBottom: '0.5rem' }}>The Skills Assessment</h2>
        <p>For technical trades roles, a brief, structured skills assessment is appropriate and defensible. Ask an electrician to identify a fault in a simple diagram, ask an HVAC tech to walk through a refrigerant system on a diagram, or ask a production supervisor to review a simple workflow and identify the bottleneck. Keep it short and relevant. This is not a test designed to catch someone out but a quick way to verify that the candidate's hands-on experience matches their resume, which is the most common gap in trades hiring.</p>

        <div style={{ background: '#000', color: '#fff', padding: '2.5rem', borderRadius: '8px', textAlign: 'center', margin: '3rem 0' }}>
          <h2 style={{ color: '#ECAC60', margin: '0 0 1rem', fontSize: '1.5rem' }}>Fill this role in 23-35 days</h2>
          <p style={{ marginBottom: '1.5rem', color: '#ddd' }}>Free 15-minute call. Tell us the role. We will show you what our passive candidate pipeline looks like for your specific search right now.</p>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '1rem 2.5rem', borderRadius: '4px', fontWeight: 700, textDecoration: 'none' }}>Book a Discovery Call &rarr;</a>
        </div>

        <RelatedTool variant="link" eyebrow="Free Tool" heading="What is this open role costing you right now?" description="The cost of a vacancy compounds every week. Use the free calculator to put a dollar figure on the open seat in lost output, overtime, and turnover risk." href="/resources/cost-of-vacant-role-calculator" cta="Open the Cost of a Vacant Role Calculator" />

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
            <a href="/services/job-placement/trades" style={{ display: 'inline-block', background: '#ECAC60', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>BEG Skilled Trades Placement &rarr;</a>
            <a href="/blog/trades-hiring/skilled-trades-shortage" style={{ display: 'inline-block', background: '#fff', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid #ECAC60' }}>The Skilled Trades Shortage &rarr;</a>
            <a href="/blog/trades-hiring/hiring-electricians" style={{ display: 'inline-block', background: '#fff', color: '#000', padding: '0.5rem 1.25rem', borderRadius: '4px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', border: '1px solid #ECAC60' }}>Hiring Electricians &rarr;</a>
            
          </div>
        </div>

        <div style={{ background: '#f7f7f7', padding: '1.5rem', borderLeft: '4px solid #ECAC60', borderRadius: '4px', margin: '2rem 0' }}>
          <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Anthony Moretti, VP of Sales - Business Executive Group</strong>
          <p style={{ margin: 0, color: '#444' }}>Anthony leads skilled trades placement at BEG. BEG fills electrician, HVAC technician, maintenance technician, and production supervisor roles through iSolved Job Placement Services on a milestone model with an 86% fill rate and a 45-day replacement guarantee.</p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) }) }} />
    </article>
  );
}
