// Maps a PDF template's slug to a function that RENDERS its PDF from scratch (design-first,
// via @react-pdf/renderer) rather than filling an existing source file.
//
// This is distinct from pdf-fillers.ts: a filler takes the bytes of an official fillable PDF and
// sets its form fields (e.g. the USCIS I-9); a generator takes only the merge values and produces
// a styled document (e.g. the Employee Handbook Starter). The generate route checks for a
// generator first, then falls back to a filler.

import { generateHandbookPdf } from './handbook-pdf';

export type PdfGenerator = (data: Record<string, string>) => Promise<Buffer>;

const PDF_GENERATORS: Record<string, PdfGenerator> = {
  'employee-handbook-starter': generateHandbookPdf,
};

/** Returns the PDF generator for a template slug, or null if none is registered. */
export function getPdfGenerator(slug: string): PdfGenerator | null {
  return PDF_GENERATORS[slug] ?? null;
}
