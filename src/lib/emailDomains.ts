// Free / consumer email-domain blocklist used to gate the template library behind a
// business ("work") email. The npm package `free-email-domains` was intended here, but
// its postinstall step fetches a remote blocklist that is unreachable in our build
// environment, so the maintained list is inlined below. Keep this list additive-only;
// add domains as new consumer providers appear.
export const FREE_EMAIL_DOMAINS: readonly string[] = [
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.uk',
  'yahoo.co.in',
  'ymail.com',
  'rocketmail.com',
  'hotmail.com',
  'hotmail.co.uk',
  'outlook.com',
  'live.com',
  'msn.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'aol.com',
  'protonmail.com',
  'proton.me',
  'pm.me',
  'mail.com',
  'gmx.com',
  'gmx.net',
  'gmx.de',
  'zoho.com',
  'yandex.com',
  'yandex.ru',
  'tutanota.com',
  'fastmail.com',
  'hey.com',
  'inbox.com',
  'aim.com',
  'comcast.net',
  'verizon.net',
  'att.net',
  'sbcglobal.net',
  'cox.net',
  'ptd.net',
  'juno.com',
  'earthlink.net',
  'ymail.co',
];

// Set for O(1) membership checks. Lower-cased at module load.
const BLOCKED = new Set(FREE_EMAIL_DOMAINS.map((d) => d.toLowerCase()));

// Basic shape check. Not RFC-perfect on purpose — the goal is to reject obviously
// malformed input and consumer domains, not to fully validate deliverability.
const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function extractDomain(email: string): string {
  const at = email.lastIndexOf('@');
  if (at === -1) return '';
  return email.slice(at + 1).trim().toLowerCase();
}

export function isFreeEmailDomain(email: string): boolean {
  return BLOCKED.has(extractDomain(email));
}

export interface WorkEmailResult {
  valid: boolean;
  // Machine-readable reason so the API and the client can render matching copy.
  reason?: 'empty' | 'malformed' | 'free-domain';
  message?: string;
}

// Single source of truth for work-email validation, shared by client and server so the
// two never drift. The server MUST re-run this; client validation is a convenience only.
export function validateWorkEmail(rawEmail: string): WorkEmailResult {
  const email = (rawEmail || '').trim().toLowerCase();
  if (!email) {
    return { valid: false, reason: 'empty', message: 'Enter your work email.' };
  }
  if (!EMAIL_SHAPE.test(email)) {
    return { valid: false, reason: 'malformed', message: 'Enter a valid email address.' };
  }
  if (BLOCKED.has(extractDomain(email))) {
    return {
      valid: false,
      reason: 'free-domain',
      message: 'Please use your work email, not a personal one.',
    };
  }
  return { valid: true };
}
