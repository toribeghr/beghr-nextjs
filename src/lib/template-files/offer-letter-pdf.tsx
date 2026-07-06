// Renders the "Employee Offer Letter" template to a PDF with @react-pdf/renderer — the same
// design-first, server-side (no headless browser) rendering mode as the Employee Handbook
// Starter. Shares the handbook's visual language (single Helvetica family, one gold accent, two
// heading sizes, generous margins) but laid out as a business letter.
//
// The nine merge values are interpolated directly into the copy, so a rendered document never
// contains a leftover {{placeholder}}. The At-Will Employment clause is state-driven: Montana has
// its own wording (the Montana Wrongful Discharge from Employment Act limits at-will employment);
// every other state gets the standard clause.

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

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    color: TEXT,
    fontSize: 10.5,
    lineHeight: 1.5,
    paddingTop: 64,
    paddingBottom: 56,
    paddingHorizontal: 72,
  },
  title: {
    fontSize: 20, // heading size 1
    fontFamily: 'Helvetica-Bold',
    color: TEXT,
    letterSpacing: 1,
  },
  titleRule: {
    marginTop: 10,
    marginBottom: 20,
    width: 64,
    height: 3,
    backgroundColor: ACCENT,
  },
  salutation: {
    marginBottom: 12,
  },
  intro: {
    marginBottom: 16,
  },
  section: {
    marginBottom: 14,
  },
  sectionHeading: {
    fontSize: 12, // heading size 2
    fontFamily: 'Helvetica-Bold',
    color: ACCENT,
    marginBottom: 4,
  },
  paragraph: {},
  closing: {
    marginTop: 22,
  },
  closingName: {
    fontFamily: 'Helvetica-Bold',
  },
  signatureBlock: {
    marginTop: 34,
  },
  signatureLine: {
    marginBottom: 4,
  },
  signatureName: {
    color: MUTED,
  },
});

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// The start-date input arrives as an HTML date value (yyyy-mm-dd); present it as "Month D, YYYY".
function formatDate(value: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  if (!m) return value.trim();
  return `${MONTHS[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`;
}

interface OfferValues {
  candidateName: string;
  jobTitle: string;
  companyName: string;
  managerName: string;
  startDate: string;
  compensation: string;
  compensationType: string;
  state: string;
  hrContactName: string;
}

// State-driven At-Will clause. Montana gets its own wording; all other states get the standard one.
function atWillClause(v: OfferValues): string {
  if (v.state === 'Montana') {
    return `Montana law limits at-will employment after any applicable probationary period, under the Montana Wrongful Discharge from Employment Act. Please review your applicable probationary period with ${v.hrContactName}.`;
  }
  return `Employment with ${v.companyName} is at-will. Either you or ${v.companyName} may end the employment relationship at any time, with or without cause or notice.`;
}

function OfferLetterDocument({ v }: { v: OfferValues }) {
  const start = formatDate(v.startDate);
  const sections = [
    {
      heading: 'Position and Start Date',
      body: `Your position title is ${v.jobTitle}, reporting to ${v.managerName}. Your anticipated start date is ${start}.`,
    },
    {
      heading: 'Compensation',
      body: `Your starting compensation is ${v.compensation} ${v.compensationType}, paid on ${v.companyName}'s standard payroll schedule.`,
    },
    {
      heading: 'Employment Classification',
      body: 'This offer will be followed by a separate document confirming your full-time or part-time status and your exempt or non-exempt classification under the Fair Labor Standards Act.',
    },
    {
      heading: 'At-Will Employment',
      body: atWillClause(v),
    },
    {
      heading: 'Contingencies',
      body: 'This offer is contingent on standard pre-employment requirements, including eligibility to work in the United States as verified on Form I-9.',
    },
    {
      heading: 'Acknowledgment',
      body: 'Please sign and return this letter to confirm your acceptance.',
    },
  ];

  return (
    <Document title={`${v.companyName} Offer Letter — ${v.candidateName}`} author="Business Executive Group">
      <Page size="LETTER" style={styles.page}>
        <Text style={styles.title}>OFFER LETTER</Text>
        <View style={styles.titleRule} />

        <Text style={styles.salutation}>Dear {v.candidateName},</Text>
        <Text style={styles.intro}>
          We are pleased to offer you the position of {v.jobTitle} at {v.companyName}. This letter
          outlines the terms of our offer.
        </Text>

        {sections.map((s) => (
          <View key={s.heading} style={styles.section} wrap={false}>
            <Text style={styles.sectionHeading}>{s.heading}</Text>
            <Text style={styles.paragraph}>{s.body}</Text>
          </View>
        ))}

        <View style={styles.closing}>
          <Text style={styles.closingName}>{v.hrContactName}</Text>
          <Text>{v.companyName}</Text>
        </View>

        <View style={styles.signatureBlock}>
          <Text style={styles.signatureLine}>
            Signature: _______________________          Date: _______________
          </Text>
          <Text style={styles.signatureName}>{v.candidateName}</Text>
        </View>
      </Page>
    </Document>
  );
}

/**
 * Render the Employee Offer Letter to PDF bytes. `data` uses the template's field keys:
 * candidateName, jobTitle, companyName, managerName, startDate, compensation, compensationType,
 * state, hrContactName.
 */
export async function generateOfferLetterPdf(data: Record<string, string>): Promise<Buffer> {
  const v: OfferValues = {
    candidateName: (data.candidateName ?? '').trim(),
    jobTitle: (data.jobTitle ?? '').trim(),
    companyName: (data.companyName ?? '').trim(),
    managerName: (data.managerName ?? '').trim(),
    startDate: (data.startDate ?? '').trim(),
    compensation: (data.compensation ?? '').trim(),
    compensationType: (data.compensationType ?? '').trim(),
    state: (data.state ?? '').trim(),
    hrContactName: (data.hrContactName ?? '').trim(),
  };
  return renderToBuffer(<OfferLetterDocument v={v} />);
}
