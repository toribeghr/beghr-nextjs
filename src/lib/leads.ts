// Lead persistence for the compliance template library.
//
// Template downloads are captured to a single destination: a Zapier catch-hook
// (ZAPIER_TEMPLATE_LEADS_WEBHOOK_URL) that routes each lead to a per-category sheet tab
// via a Zapier Paths step. The capture is best-effort — it may never block or fail
// document generation, so the POST is wrapped and failure only logs.

export interface Lead {
  name: string;
  workEmail: string;
  phone: string;
  templateSlug: string;
  templateTitle: string;
  category: string;
  timestamp: string; // ISO 8601
}

/**
 * Persist a captured lead to the Zapier catch-hook. Returns true on success, false if the
 * POST failed or the webhook URL is not configured.
 *
 * Failure here MUST NOT block the document download — the caller generates and streams the
 * file regardless, and simply logs a failed save. The lead is best-effort.
 */
export async function saveLead(lead: Lead): Promise<boolean> {
  const submittedAt = lead.timestamp;
  const sourceUrl = `https://www.beghr.com/resources/templates/${lead.templateSlug}`;

  const zapierUrl = process.env.ZAPIER_TEMPLATE_LEADS_WEBHOOK_URL;
  if (!zapierUrl) {
    // Not fatal: the doc still generates. Warn so a missing env var is visible in logs.
    console.warn(
      '[saveLead] ZAPIER_TEMPLATE_LEADS_WEBHOOK_URL is not set — skipping Zapier POST. ' +
        'Set it in the Vercel project settings before this goes live.'
    );
    return false;
  }

  try {
    const res = await fetch(zapierUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: lead.name,
        workEmail: lead.workEmail,
        phone: lead.phone,
        templateSlug: lead.templateSlug,
        templateTitle: lead.templateTitle,
        category: lead.category,
        sourceUrl,
        submittedAt,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
