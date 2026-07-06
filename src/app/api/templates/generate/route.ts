import { NextResponse } from 'next/server';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { getTemplateBySlug, type Template } from '@/lib/templates';
import { getTemplateFileBytes } from '@/lib/template-files/registry';
import { getPdfFiller } from '@/lib/template-files/pdf-fillers';
import { validateWorkEmail } from '@/lib/emailDomains';
import { saveLead } from '@/lib/leads';

// docxtemplater relies on Node's fs/Buffer, so force the Node.js runtime (not Edge).
export const runtime = 'nodejs';
// This route generates a document per request from user input; never cache it.
export const dynamic = 'force-dynamic';

interface GenerateBody {
  slug?: string;
  fields?: Record<string, string>;
  lead?: { name?: string; workEmail?: string; phone?: string };
}

function badRequest(error: string) {
  return NextResponse.json({ success: false, error }, { status: 400 });
}

// Merge submitted values into the source .docx and return the bytes. Any leftover
// {placeholder} for a missing key is rendered empty rather than throwing.
function renderDocx(fileBuffer: Buffer, data: Record<string, string>): Buffer {
  const zip = new PizZip(fileBuffer);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
    nullGetter: () => '',
  });
  doc.render(data);
  return doc.getZip().generate({ type: 'nodebuffer', compression: 'DEFLATE' });
}

export async function POST(req: Request) {
  let body: GenerateBody;
  try {
    body = await req.json();
  } catch {
    return badRequest('Malformed request body.');
  }

  const template: Template | undefined = body.slug ? getTemplateBySlug(body.slug) : undefined;
  if (!template) return badRequest('Unknown template.');

  const fields = body.fields ?? {};
  const lead = body.lead ?? {};

  // 1) Re-validate every required merge field is present (never trust the client).
  for (const field of template.fields) {
    if (field.required && !String(fields[field.key] ?? '').trim()) {
      return badRequest(`Missing required field: ${field.label}.`);
    }
    // Constrain select values to their configured options.
    if (field.type === 'select' && fields[field.key]) {
      const value = String(fields[field.key]).trim();
      if (field.options && !field.options.includes(value)) {
        return badRequest(`Invalid value for ${field.label}.`);
      }
    }
  }

  // 2) Re-validate the three fixed lead fields, including the work-email domain check.
  const leadName = String(lead.name ?? '').trim();
  const workEmail = String(lead.workEmail ?? '').trim();
  const phone = String(lead.phone ?? '').trim();
  if (!leadName) return badRequest('Full name is required.');
  if (!phone) return badRequest('Phone number is required.');

  const emailCheck = validateWorkEmail(workEmail);
  if (!emailCheck.valid) {
    return badRequest(emailCheck.message ?? 'Enter a valid work email.');
  }

  // 3) Build the merge payload (trimmed strings only) and generate the document.
  const mergeData: Record<string, string> = {};
  for (const field of template.fields) {
    mergeData[field.key] = String(fields[field.key] ?? '').trim();
  }

  const fileBuffer = getTemplateFileBytes(template.templateFile);
  if (!fileBuffer) {
    return NextResponse.json(
      { success: false, error: 'Template source is unavailable.' },
      { status: 500 }
    );
  }

  // Generate the document. Real government forms (docType 'pdf') are filled with pdf-lib via a
  // per-template field mapper keyed on slug; custom documents (docType 'docx') are merged with
  // docxtemplater. In both cases only the values above are used — nothing is persisted.
  let output: Buffer;
  let contentType: string;
  try {
    if (template.docType === 'pdf') {
      const fillPdf = getPdfFiller(template.slug);
      if (!fillPdf) {
        return NextResponse.json(
          { success: false, error: 'Unsupported document type.' },
          { status: 501 }
        );
      }
      output = await fillPdf(fileBuffer, mergeData);
      contentType = 'application/pdf';
    } else {
      output = renderDocx(fileBuffer, mergeData);
      contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    }
  } catch {
    return NextResponse.json(
      { success: false, error: 'Could not generate the document.' },
      { status: 500 }
    );
  }

  // 4) Best-effort lead capture — never blocks or fails the download.
  try {
    await saveLead({
      name: leadName,
      workEmail,
      phone,
      templateSlug: template.slug,
      templateTitle: template.title,
      category: template.category,
      timestamp: new Date().toISOString(),
    });
  } catch {
    // Swallow: the document must still stream even if lead capture hiccups.
  }

  // 5) Stream the generated file and discard — nothing is persisted server-side.
  const filename = `${template.slug}.${template.docType}`;
  return new NextResponse(new Uint8Array(output), {
    status: 200,
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Content-Length': String(output.length),
      'Cache-Control': 'no-store',
    },
  });
}
