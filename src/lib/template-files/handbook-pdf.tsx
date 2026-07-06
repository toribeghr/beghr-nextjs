// Renders the "Employee Handbook Starter" template to a PDF with @react-pdf/renderer.
//
// This is a THIRD rendering mode for the template library, separate from the two file-based
// modes (docx-merge via docxtemplater, and filling an official fillable PDF via pdf-lib). It is
// for templates where visual design matters more than a fillable form: the document is built
// from a styled React component and rendered server-side to PDF — no headless browser, so it
// avoids the serverless-memory problems a Puppeteer/Chromium pipeline would reintroduce.
//
// Design constraints (kept deliberately simple): one accent color, a single font family
// (Helvetica, the built-in standard font — no external font fetch), no more than two heading
// sizes (cover title + section heading), and generous whitespace. The five merge values are
// interpolated directly into the copy below, so a rendered document never contains a leftover
// {{placeholder}}.

import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToBuffer,
} from '@react-pdf/renderer';

const ACCENT = '#C0892B'; // the single accent color (deep gold)
const TEXT = '#1a1a1a';
const MUTED = '#6b6b6b';
const RULE = '#e2e2e2';

const styles = StyleSheet.create({
  // Cover page — company name large and centered, effective date beneath.
  cover: {
    fontFamily: 'Helvetica',
    paddingHorizontal: 72,
    paddingVertical: 96,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 3,
    color: ACCENT,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  companyName: {
    fontSize: 32, // heading size 1 (cover title)
    color: TEXT,
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
    lineHeight: 1.2,
  },
  accentBar: {
    marginTop: 22,
    marginBottom: 22,
    width: 72,
    height: 3,
    backgroundColor: ACCENT,
  },
  effective: {
    fontSize: 12,
    color: MUTED,
    textAlign: 'center',
  },

  // Interior pages.
  page: {
    fontFamily: 'Helvetica',
    color: TEXT,
    fontSize: 10.5,
    lineHeight: 1.5,
    paddingTop: 60,
    paddingBottom: 54,
    paddingHorizontal: 64,
  },
  docTitle: {
    fontSize: 13, // heading size 2, reused by section headings
    fontFamily: 'Helvetica-Bold',
    color: TEXT,
    marginBottom: 18,
  },
  section: {
    marginBottom: 15,
  },
  sectionHeading: {
    fontSize: 13, // heading size 2 (section heading) — same as docTitle, so only two sizes total
    fontFamily: 'Helvetica-Bold',
    color: ACCENT,
    marginBottom: 5,
  },
  paragraph: {
    marginBottom: 6,
  },
  signatureLine: {
    marginTop: 10,
    color: TEXT,
  },
  disclaimer: {
    marginTop: 22,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: RULE,
    fontSize: 8.5,
    lineHeight: 1.4,
    color: MUTED,
    fontFamily: 'Helvetica-Oblique',
  },

  // Running header / footer, repeated on every interior page.
  header: {
    position: 'absolute',
    top: 26,
    left: 64,
    right: 64,
  },
  headerText: {
    fontSize: 8,
    letterSpacing: 1,
    color: MUTED,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
  },
  headerRule: {
    marginTop: 6,
    borderBottomWidth: 1,
    borderBottomColor: RULE,
  },
  footer: {
    position: 'absolute',
    bottom: 26,
    left: 64,
    right: 64,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 8,
    color: MUTED,
  },
});

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// The effective-date input arrives as an HTML date value (yyyy-mm-dd). Present it as a readable
// "Month D, YYYY"; if it is not in that shape, show it unchanged.
function formatEffectiveDate(value: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!m) return value.trim();
  return `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`;
}

interface HandbookValues {
  companyName: string;
  effectiveDate: string;
  state: string;
  hrContactName: string;
  hrContactEmail: string;
}

function buildSections(v: HandbookValues, effective: string): { heading: string; body: string[] }[] {
  const { companyName, state, hrContactName, hrContactEmail } = v;
  return [
    {
      heading: 'Welcome',
      body: [
        `This handbook explains what employees at ${companyName} can expect from the company and what the company expects in return. It covers our core policies on employment, conduct, time off, and workplace standards. It does not create a contract of employment and does not cover every situation. Questions go to ${hrContactName} at ${hrContactEmail}.`,
      ],
    },
    {
      heading: 'At-Will Employment',
      body: [
        `Employment with ${companyName} is at-will under the laws of ${state}. Either the employee or the company may end the employment relationship at any time, with or without cause or notice. Nothing in this handbook changes that relationship or creates a guarantee of continued employment.`,
      ],
    },
    {
      heading: 'Equal Employment Opportunity',
      body: [
        `${companyName} hires, promotes, and makes employment decisions based on qualifications and performance. The company does not discriminate on the basis of race, color, religion, sex, national origin, age, disability, genetic information, or any other status protected by federal, state, or local law. Employees who experience or witness discrimination or harassment should report it to ${hrContactName} immediately.`,
      ],
    },
    {
      heading: 'Work Hours and Attendance',
      body: [
        `Standard work hours, schedules, and attendance expectations are set by each employee's manager and may vary by role. Employees are expected to report to work as scheduled and to notify their manager as early as possible if they will be late or absent.`,
      ],
    },
    {
      heading: 'Compensation and Payroll',
      body: [
        `Pay periods, pay dates, and payroll procedures are communicated separately at hire and are available from ${hrContactName}. Overtime eligibility and calculation follow applicable federal and ${state} law.`,
      ],
    },
    {
      heading: 'Time Off and Leave',
      body: [
        `${companyName} provides paid time off, holiday schedules, and leave benefits as described in separate policy documents provided at hire or available from ${hrContactName}. Employees should request time off in advance through their manager whenever possible.`,
      ],
    },
    {
      heading: 'Workplace Conduct',
      body: [
        `Employees are expected to act professionally, treat coworkers and customers with respect, and follow all safety and security procedures. Conduct that endangers others, violates the law, or seriously disrupts the workplace may result in disciplinary action up to and including termination.`,
      ],
    },
    {
      heading: 'Health and Safety',
      body: [
        `${companyName} is committed to a safe workplace. Employees must follow all posted safety procedures and report unsafe conditions or injuries to ${hrContactName} right away.`,
      ],
    },
    {
      heading: 'Technology and Communication Use',
      body: [
        `Company equipment, email, and systems are provided for business use. Employees should have no expectation of privacy when using company systems, which may be monitored as permitted by law.`,
      ],
    },
    {
      heading: 'Confidentiality',
      body: [
        `Employees may have access to confidential company, customer, or coworker information during employment. This information may not be shared outside the company except as required for the employee's job duties or by law.`,
      ],
    },
    {
      heading: 'Acknowledgment of Receipt',
      body: [
        `I acknowledge that I have received the ${companyName} Employee Handbook, effective ${effective}. I understand it is not a contract and that my employment remains at-will.`,
      ],
    },
  ];
}

function HandbookDocument({ v }: { v: HandbookValues }) {
  const effective = formatEffectiveDate(v.effectiveDate);
  const sections = buildSections(v, effective);

  return (
    <Document title={`${v.companyName} Employee Handbook`} author="Business Executive Group">
      {/* Cover */}
      <Page size="LETTER" style={styles.cover}>
        <View>
          <Text style={styles.eyebrow}>EMPLOYEE HANDBOOK</Text>
          <Text style={styles.companyName}>{v.companyName}</Text>
          <View style={styles.accentBar} />
          <Text style={styles.effective}>Effective Date: {effective}</Text>
        </View>
      </Page>

      {/* Interior */}
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header} fixed>
          <Text style={styles.headerText}>{v.companyName} · Employee Handbook</Text>
          <View style={styles.headerRule} />
        </View>

        <Text style={styles.docTitle}>Employee Handbook</Text>

        {sections.map((s) => (
          <View key={s.heading} style={styles.section} wrap={false}>
            <Text style={styles.sectionHeading}>{s.heading}</Text>
            {s.body.map((p, i) => (
              <Text key={i} style={styles.paragraph}>
                {p}
              </Text>
            ))}
            {s.heading === 'Acknowledgment of Receipt' && (
              <Text style={styles.signatureLine}>
                Employee Signature: _______________________ Date: _______________
              </Text>
            )}
          </View>
        ))}

        <Text style={styles.disclaimer}>
          This template is provided for general informational purposes and is not legal advice.
          Review with qualified legal counsel before use, and confirm it reflects current {v.state}{' '}
          law before distributing to employees.
        </Text>

        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>{v.companyName}</Text>
          <Text
            style={styles.footerText}
            render={({ pageNumber, totalPages }) => `Page ${pageNumber - 1} of ${totalPages - 1}`}
          />
        </View>
      </Page>
    </Document>
  );
}

/**
 * Render the Employee Handbook Starter to PDF bytes. `data` uses the template's field keys:
 * companyName, effectiveDate, state, hrContactName, hrContactEmail.
 */
export async function generateHandbookPdf(data: Record<string, string>): Promise<Buffer> {
  const v: HandbookValues = {
    companyName: (data.companyName ?? '').trim(),
    effectiveDate: (data.effectiveDate ?? '').trim(),
    state: (data.state ?? '').trim(),
    hrContactName: (data.hrContactName ?? '').trim(),
    hrContactEmail: (data.hrContactEmail ?? '').trim(),
  };
  return renderToBuffer(<HandbookDocument v={v} />);
}
