// Fills the official USCIS Form I-9 (Employment Eligibility Verification) PDF.
//
// The source PDF (src/lib/template-files/i9.pdf) is the official fillable form downloaded
// from uscis.gov (Edition 01/20/25, OMB No. 1615-0047). We do NOT alter the form — we only
// set the values of its existing AcroForm fields with pdf-lib and stream it back, leaving it
// fillable so the employee and employer can complete the remaining sections.
//
// The field names below are the REAL names read from the form via form.getFields() — never
// guessed. They were discovered and verified against the form layout with
// scripts/introspect-i9-fields.mjs (run it to re-log all 128 field names). The four fields
// we populate, confirmed by position on page 1:
//   - Section 1 employee name row (y≈605): "Last Name (Family Name)" | "First Name Given Name"
//   - Section 1 employee address state (y≈580): "State" (a dropdown of 2-letter USPS codes)
//   - Section 2 employer:  "Employers Business or Org Name" and "FirstDayEmployed mmddyyyy"

import { PDFDocument } from 'pdf-lib';

// The Section 1 "State" field is a dropdown whose options are 2-letter USPS codes, but the
// template form collects a full state name. Map full name -> code before selecting.
const STATE_NAME_TO_CODE: Record<string, string> = {
  Alabama: 'AL', Alaska: 'AK', Arizona: 'AZ', Arkansas: 'AR', California: 'CA', Colorado: 'CO',
  Connecticut: 'CT', Delaware: 'DE', 'District of Columbia': 'DC', Florida: 'FL', Georgia: 'GA',
  Hawaii: 'HI', Idaho: 'ID', Illinois: 'IL', Indiana: 'IN', Iowa: 'IA', Kansas: 'KS',
  Kentucky: 'KY', Louisiana: 'LA', Maine: 'ME', Maryland: 'MD', Massachusetts: 'MA',
  Michigan: 'MI', Minnesota: 'MN', Mississippi: 'MS', Missouri: 'MO', Montana: 'MT',
  Nebraska: 'NE', Nevada: 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ', 'New Mexico': 'NM',
  'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', Ohio: 'OH', Oklahoma: 'OK',
  Oregon: 'OR', Pennsylvania: 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC',
  'South Dakota': 'SD', Tennessee: 'TN', Texas: 'TX', Utah: 'UT', Vermont: 'VT', Virginia: 'VA',
  Washington: 'WA', 'West Virginia': 'WV', Wisconsin: 'WI', Wyoming: 'WY',
};

// The form has no single "full name" field — Section 1 splits into Last | First | MI. Split the
// collected full name on whitespace: last token -> family name, everything before -> given name.
function splitFullName(full: string): { first: string; last: string } {
  const parts = full.trim().split(/\s+/).filter(Boolean);
  if (parts.length <= 1) return { first: '', last: parts[0] ?? '' };
  return { first: parts.slice(0, -1).join(' '), last: parts[parts.length - 1] };
}

// The hire-date input arrives as an HTML date value (yyyy-mm-dd); the form field expects
// mm/dd/yyyy. Reformat when it matches, otherwise pass through unchanged.
function toUsDate(value: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value.trim());
  return m ? `${m[2]}/${m[3]}/${m[1]}` : value.trim();
}

/**
 * Fill the four collected values into the official I-9 and return the PDF bytes. The form is
 * left un-flattened (still fillable) so downstream sections can be completed by hand.
 *
 * `data` uses the template's field keys: employeeName, employerName, hireDate, state.
 */
export async function fillI9Pdf(pdfBytes: Buffer, data: Record<string, string>): Promise<Buffer> {
  const pdf = await PDFDocument.load(pdfBytes);
  const form = pdf.getForm();

  const { first, last } = splitFullName(data.employeeName ?? '');
  form.getTextField('Last Name (Family Name)').setText(last);
  form.getTextField('First Name Given Name').setText(first);
  form.getTextField('Employers Business or Org Name').setText((data.employerName ?? '').trim());
  form.getTextField('FirstDayEmployed mmddyyyy').setText(toUsDate(data.hireDate ?? ''));

  const code = STATE_NAME_TO_CODE[(data.state ?? '').trim()];
  if (code) {
    // select() throws if the value is not an option; every code above is a valid I-9 option.
    form.getDropdown('State').select(code);
  }

  const out = await pdf.save();
  return Buffer.from(out);
}
