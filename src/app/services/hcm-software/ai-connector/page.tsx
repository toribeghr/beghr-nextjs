import { Metadata } from 'next';
import Link from 'next/link';
import RelatedPosts from '@/components/RelatedPosts';
import LeadCaptureForm from '@/components/LeadCaptureForm';

export const metadata: Metadata = {
  title: 'iSolved AI Connector for Claude | Complete HR Tasks | BEG',
  description: 'iSolved is the only HCM platform with an AI Connector for Claude. Chatbots answer questions. iSolved completes the task. Run payroll and HR work by conversation.',
  alternates: { canonical: 'https://www.beghr.com/services/hcm-software/ai-connector' },
  openGraph: {
    title: 'iSolved AI Connector for Claude | Complete HR Tasks | BEG',
    description: 'iSolved is the only HCM platform with an AI Connector for Claude. Chatbots answer questions. iSolved completes the task. Run payroll and HR work by conversation.',
    url: 'https://www.beghr.com/services/hcm-software/ai-connector',
    siteName: 'Business Executive Group',
    images: [{ url: 'https://www.beghr.com/assets/og-image.png', width: 1200, height: 630, alt: 'Business Executive Group' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'iSolved AI Connector for Claude | Complete HR Tasks | BEG', description: 'iSolved is the only HCM platform with an AI Connector for Claude. Chatbots answer questions. iSolved completes the task. Run payroll and HR work by conversation.', images: ['https://www.beghr.com/assets/og-image.png'] },

};

const CALENDLY = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

const faqs = [
  {
    question: 'What is the iSolved Connector for Claude?',
    answer: 'The iSolved Connector for Claude is a generally available integration, released in June 2026, between the iSolved HCM platform and Claude, the AI assistant from Anthropic. It lets HR administrators complete real tasks inside iSolved using plain language instructions, rather than clicking through platform menus. The connector does not just answer questions. It runs payroll cycles, updates employee records, pulls reports, and manages workflows directly in iSolved. BEG implements, configures, and supports it for clients.',
  },
  {
    question: 'How is this different from an HR chatbot?',
    answer: 'A chatbot retrieves and explains information. If you ask a chatbot how to add a new hire, it tells you the steps. The iSolved Connector for Claude takes the action. You describe what you need, and the work is completed inside iSolved. Chatbots answer questions. iSolved completes the task. That is the core difference, and it is why the connector changes how much time HR teams actually save.',
  },
  {
    question: 'Is iSolved really the only HCM platform with this?',
    answer: 'iSolved offers a generally available connector for Claude that completes tasks inside the platform. Most competing HCM systems offer AI features that are limited to question and answer, document summaries, or are still in beta. As of mid 2026, no major competitor has announced an equivalent generally available task completing connector for Claude. BEG can walk you through a fair, current comparison with whatever platform you use today.',
  },
  {
    question: 'What kinds of HR tasks can the connector handle?',
    answer: 'Common examples include running a payroll cycle, updating an employee record or direct deposit, pulling a compliance or headcount report, generating workforce analytics, adjusting a benefits election, and handling one off exceptions that normally require navigating several screens. Because iSolved is a single connected platform covering payroll, HR, time, and benefits, the connector can act across all of those areas through one conversation.',
  },
  {
    question: 'Is my data secure when using the connector?',
    answer: 'The connector operates within iSolved permissions and access controls. It can only do what the authorized user is already allowed to do in the platform. BEG configures roles, permissions, and approval steps as part of the implementation, so the connector respects the same guardrails your team relies on today. Nothing about the connector bypasses your existing controls.',
  },
  {
    question: 'How do we get the iSolved Connector for Claude?',
    answer: 'BEG is an authorized iSolved partner. We implement, configure, and support the platform and the Connector for Claude for our clients. The fastest path is a 15 minute discovery call. We review your current setup, show you the connector in context, and map out what the move to iSolved managed by BEG looks like for your company.',
  },
  {
    question: 'Why does the AI Connector matter for buyers right now?',
    answer: 'HCM platforms are converging on similar core features, so the real difference is how much manual work the platform removes. The iSolved Connector for Claude moves AI from answering questions to completing tasks, which is where the time savings live. Buyers who adopt it now gain a connected platform that iSolved customers have already validated at scale, with Forrester documenting 330% ROI and more than 7M employees on iSolved.',
  },
];

export default function AIConnectorPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero" style={{ background: '#000000', color: '#ffffff', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p className="eyebrow" style={{ color: '#ECAC60' }}>HCM Software · AI Connector</p>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            The Only HCM Platform With an AI Connector for Claude.
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cccccc', maxWidth: '720px' }}>
            iSolved gives your HR team a connected platform plus a generally available Connector for Claude. You describe the work in plain language, and it gets completed inside iSolved. Not a chatbot. A platform that does the task.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" className="btn btn--gold" style={{ marginTop: '2rem', display: 'inline-block' }}>
            Talk to a BEG HCM Specialist
          </Link>
        </div>
      </section>

      {/* EMAIL OPT-IN (under the H1) */}
      <section className="section section--soft">
        <div className="container" style={{ maxWidth: '760px' }}>
          <div className="head center reveal">
            <p className="eyebrow">Prefer It In Your Inbox?</p>
            <h2>Want the Connector for Claude one-pager?</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
            <LeadCaptureForm
              toolName="iSolved Connector for Claude One-Pager"
              toolDescription="Enter your details and we will send a one-page overview of what the iSolved Connector for Claude does and how BEG sets it up, ready to share with your team."
              assetLabel="Email me the one-pager"
              calendlyLink={CALENDLY}
              followupText="your payroll and HR needs"
            />
          </div>
        </div>
      </section>

      {/* Bottom Line Up Front */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Bottom Line Up Front</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#ECAC60', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>What makes iSolved different:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>Connector for Claude, generally available June 2026</li>
                <li>Completes HR tasks, does not just answer questions</li>
                <li>Single connected platform: payroll, HR, time, benefits</li>
                <li>330% ROI documented by Forrester</li>
                <li>BEG implements, configures, and supports it</li>
              </ul>
            </div>
            <div style={{ background: '#ffffff', border: '2px solid #e0e0e0', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.5rem' }}>What that means for you:</strong>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: '1.8' }}>
                <li>Run payroll and reports by describing what you need</li>
                <li>Fewer clicks, fewer menus, fewer manual handoffs</li>
                <li>Proven scale with more than 7M employees on iSolved</li>
                <li>One platform to manage instead of stitched together tools</li>
                <li>A BEG team that owns setup and ongoing support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What the Connector does */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>What the iSolved Connector for Claude Does</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444', marginBottom: '1rem' }}>
            The Connector for Claude links the iSolved HCM platform to Claude, the AI assistant from Anthropic. Instead of navigating screens and menus, an authorized HR user describes the work in plain language, and the connector carries it out inside iSolved.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444', marginBottom: '1rem' }}>
            Because iSolved is a single connected platform covering payroll, HR, time, and benefits, the connector can act across all of those areas in one place. There is no jumping between disconnected systems, and no manual re keying of data from one tool into another.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444' }}>
            The connector became generally available in June 2026. BEG, as an authorized iSolved partner, implements, configures, and supports it so your team can use it on day one with the right roles, permissions, and approval steps already in place.
          </p>
        </div>
      </section>

      {/* The core hook: contrast */}
      <section style={{ background: '#000000', color: '#ffffff', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ECAC60', marginBottom: '1.5rem', textAlign: 'center' }}>
            Chatbots answer questions. iSolved completes the task.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: '#161616', border: '1px solid #333', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.75rem', color: '#cccccc' }}>A typical HR chatbot</strong>
              <p style={{ margin: 0, color: '#aaaaaa', lineHeight: '1.7' }}>
                You ask how to add a new hire. It explains the steps. You ask the overtime rule in California. It tells you the number. Then you still open the platform and do the work yourself. The chatbot gave you information. It did not finish anything.
              </p>
            </div>
            <div style={{ background: '#ECAC60', color: '#000000', padding: '1.5rem', borderRadius: '8px' }}>
              <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.75rem' }}>iSolved Connector for Claude</strong>
              <p style={{ margin: 0, lineHeight: '1.7' }}>
                You say, run this pay cycle, or update this employee&apos;s direct deposit, or pull last month&apos;s headcount report. The work happens inside iSolved. The task is done, not described. That is the difference between answering and completing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real HR use cases */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Real HR Tasks It Handles</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#000000', color: '#ffffff' }}>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>Task</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left', color: '#ECAC60' }}>What you say</th>
                  <th style={{ padding: '0.9rem 1rem', textAlign: 'left' }}>What iSolved does</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Run payroll', 'Process this pay cycle for the field crew', 'Executes the payroll run inside iSolved'],
                  ['Update records', 'Change this employee&apos;s direct deposit', 'Updates the record directly in the platform'],
                  ['Pull reports', 'Pull last month&apos;s headcount report', 'Generates and returns the report'],
                  ['Workforce analytics', 'Show overtime trends by department', 'Compiles the analytics from iSolved data'],
                  ['Benefits changes', 'Update this employee&apos;s benefits election', 'Applies the change to the benefits module'],
                  ['Exceptions', 'Handle this one off pay adjustment', 'Completes the adjustment with your approvals'],
                ].map(([task, say, does], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#ffffff', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '600' }} dangerouslySetInnerHTML={{ __html: task }} />
                    <td style={{ padding: '0.75rem 1rem', fontSize: '0.92rem', color: '#555' }} dangerouslySetInnerHTML={{ __html: say }} />
                    <td style={{ padding: '0.75rem 1rem', fontSize: '0.92rem', color: '#555' }} dangerouslySetInnerHTML={{ __html: does }} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.95rem', color: '#666', marginTop: '1rem' }}>
            Every action runs within iSolved permissions and the approval steps BEG configures for your team, so the connector respects the same controls you rely on today.
          </p>
        </div>
      </section>

      {/* Why it matters for buyers */}
      <section style={{ background: '#f9f9f9', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1rem' }}>Why It Matters for Buyers</h2>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444', marginBottom: '1rem' }}>
            Most HCM platforms now offer a similar core feature set, so the meaningful difference is how much manual work the platform actually removes. The Connector for Claude moves AI from answering questions to completing tasks, which is where the real time savings live.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444', marginBottom: '1rem' }}>
            iSolved brings proof to the table. Forrester documented 330% ROI, more than 7M employees run on iSolved, and the whole thing is a single connected platform covering payroll, HR, time, and benefits. The Connector for Claude is generally available now, not a roadmap promise.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#444' }}>
            With BEG as your authorized iSolved partner, you get the platform and the connector implemented, configured, and supported by one team. You are not left to integrate AI into HR on your own. You buy the outcome, and BEG owns the setup.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          {faqs.map(({ question, answer }, i) => (
            <div key={i} style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              <strong style={{ display: 'block', marginBottom: '0.4rem' }}>{question}</strong>
              <p style={{ margin: 0, color: '#444', lineHeight: '1.6' }}>{answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#ECAC60', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#000000', marginBottom: '0.75rem' }}>
            See the Connector for Claude in Action
          </h2>
          <p style={{ color: '#000000', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
            15-minute call. We will review your current setup, show you the iSolved Connector for Claude completing real HR tasks, and map out what iSolved managed by BEG looks like for your company.
          </p>
          <Link href={CALENDLY} target="_blank" rel="noopener noreferrer" style={{ background: '#000000', color: '#ECAC60', padding: '0.9rem 2.5rem', borderRadius: '4px', fontWeight: '700', fontSize: '1rem', display: 'inline-block', textDecoration: 'none' }}>
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <RelatedPosts
        heading="From the blog"
        posts={[
          {
            category: 'HCM technology',
            title: 'iSolved Connector for Claude: What It Is and What It Does',
            excerpt: 'A plain language guide to the iSolved Connector for Claude. What it is, what it does, and why completing tasks beats answering questions.',
            href: '/blog/hcm-software/isolved-connector-for-claude',
          },
          {
            category: 'HCM technology',
            title: 'AI Payroll in 2026: What It Can and Cannot Do',
            excerpt: 'An honest look at AI in payroll. What AI can reliably handle, where humans stay in control, and how task completing connectors change the work.',
            href: '/blog/hcm-software/ai-payroll-what-it-can-do',
          },
          {
            category: 'HCM technology',
            title: 'Chatbots Answer Questions. iSolved Completes the Task.',
            excerpt: 'The difference between an HR chatbot and a platform that completes the work, and why that gap decides how much time your team actually saves.',
            href: '/blog/hcm-software/chatbots-answer-isolved-does-the-task',
          },
        ]}
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })),
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.beghr.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.beghr.com/services' },
          { '@type': 'ListItem', position: 3, name: 'HCM Software', item: 'https://www.beghr.com/services/hcm-software' },
          { '@type': 'ListItem', position: 4, name: 'AI Connector for Claude', item: 'https://www.beghr.com/services/hcm-software/ai-connector' },
        ],
      }) }} />
    </main>
  );
}
