// Maps a PDF template's slug to the function that fills its official form fields.
//
// Each real-government-form template (docType 'pdf') gets one entry here. The generate route
// looks the filler up by slug and calls it with the validated merge values. Custom documents
// (docType 'docx') do not use this map — they are merged with docxtemplater instead.

import { fillI9Pdf } from './i9-pdf';

export type PdfFiller = (pdfBytes: Buffer, data: Record<string, string>) => Promise<Buffer>;

const PDF_FILLERS: Record<string, PdfFiller> = {
  'i-9-employment-eligibility-verification': fillI9Pdf,
};

/** Returns the PDF filler for a template slug, or null if none is registered. */
export function getPdfFiller(slug: string): PdfFiller | null {
  return PDF_FILLERS[slug] ?? null;
}
