// Logs every AcroForm field on the official USCIS Form I-9 PDF (name, type, and dropdown
// options) so the merge mapping in src/lib/template-files/i9-pdf.ts can be VERIFIED against
// the real form layout rather than guessed. Re-run whenever the source PDF is updated:
//
//   node scripts/introspect-i9-fields.mjs
//
// The four fields we populate, confirmed by their position on page 1:
//   "Last Name (Family Name)"  +  "First Name Given Name"   (Section 1 employee name row)
//   "State"                    (Section 1 employee address — a dropdown of 2-letter codes)
//   "Employers Business or Org Name"  +  "FirstDayEmployed mmddyyyy"  (Section 2 employer)

import { PDFDocument } from 'pdf-lib';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PDF = join(__dirname, '..', 'src', 'lib', 'template-files', 'i9.pdf');

const pdf = await PDFDocument.load(readFileSync(PDF));
const fields = pdf.getForm().getFields();

console.log(`TOTAL FIELDS: ${fields.length}\n`);
for (const f of fields) {
  const type = f.constructor.name;
  let extra = '';
  if (type === 'PDFDropdown' || type === 'PDFRadioGroup') {
    try {
      extra = ` options=[${f.getOptions().join(' | ')}]`;
    } catch {
      /* some fields expose no options */
    }
  }
  console.log(`${type}\t${JSON.stringify(f.getName())}${extra}`);
}
