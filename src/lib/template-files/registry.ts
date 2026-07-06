// Registry mapping each template's `templateFile` path to its embedded bytes.
//
// The serverless generate route resolves source bytes through here rather than reading
// from disk, so templates are bundled into the function without relying on Next's output
// file tracing (which can't follow a runtime-built fs path). Add a line here when adding a
// template: import its generated *.base64.ts and map the same path used in lib/templates.ts.

import { I9_VERIFICATION_DOCX_BASE64 } from './i9-verification.docx.base64';

const BASE64_BY_PATH: Record<string, string> = {
  'src/lib/template-files/i9-verification.docx': I9_VERIFICATION_DOCX_BASE64,
};

/** Returns the source-template bytes for a templateFile path, or null if not embedded. */
export function getTemplateFileBytes(templateFile: string): Buffer | null {
  const b64 = BASE64_BY_PATH[templateFile];
  return b64 ? Buffer.from(b64, 'base64') : null;
}
