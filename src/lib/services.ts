export const CALENDLY_URL = 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call';

/** Returns the single BEG discovery call link regardless of page context. */
export function getCalendlyLink(_pageSlug?: string): string {
  return CALENDLY_URL;
}
