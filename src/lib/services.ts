export const CALENDLY_LINKS = {
  'managed-payroll': 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call',
  'payroll-legal': 'https://calendly.com/tori-beghr/15-minute-legal-payroll-discovery-call',
  'payroll-healthcare': 'https://calendly.com/tori-beghr/15-minute-healthcare-payroll-discovery-call',
  'payroll-finance': 'https://calendly.com/tori-beghr/15-minute-finance-payroll-discovery-call',
  'payroll-technology': 'https://calendly.com/tori-beghr/15-minute-technology-payroll-discovery-call',
  'payroll-engineering': 'https://calendly.com/tori-beghr/15-minute-engineering-payroll-discovery-call',
  'payroll-trades': 'https://calendly.com/tori-beghr/15-minute-skilled-trades-payroll-discovery-call',
  'payroll-executive': 'https://calendly.com/tori-beghr/15-minute-executive-payroll-discovery-call',
  'hcm-software': 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call',
  'hcm-legal': 'https://calendly.com/tori-beghr/15-minute-legal-hcm-software-demo',
  'hcm-healthcare': 'https://calendly.com/tori-beghr/15-minute-healthcare-hcm-software-demo',
  'hcm-finance': 'https://calendly.com/tori-beghr/15-minute-finance-hcm-software-demo',
  'hcm-technology': 'https://calendly.com/tori-beghr/15-minute-technology-hcm-software-demo',
  'hcm-engineering': 'https://calendly.com/tori-beghr/15-minute-engineering-hcm-software-demo',
  'hcm-trades': 'https://calendly.com/tori-beghr/15-minute-skilled-trades-hcm-software-demo',
  'hcm-executive': 'https://calendly.com/tori-beghr/15-minute-executive-hcm-software-demo',
  'job-placement': 'https://calendly.com/tori-beghr/15-minute-beg-discovery-call',
  'placement-legal': 'https://calendly.com/tori-beghr/15-minute-legal-hiring-discovery-call',
  'placement-healthcare': 'https://calendly.com/tori-beghr/15-minute-healthcare-placement-discovery-call',
  'placement-finance': 'https://calendly.com/tori-beghr/15-minute-finance-accounting-placement-discovery-call',
  'placement-technology': 'https://calendly.com/tori-beghr/15-minute-it-technology-placement-discovery-call',
  'placement-engineering': 'https://calendly.com/tori-beghr/15-minute-engineering-placement-discovery-call',
  'placement-trades': 'https://calendly.com/tori-beghr/15-minute-skilled-trades-placement-discovery-call',
  'placement-executive': 'https://calendly.com/tori-beghr/15-minute-executive-search-discovery-call',
} as const;

export function getCalendlyLink(pageSlug: string): string {
  return CALENDLY_LINKS[pageSlug as keyof typeof CALENDLY_LINKS] || CALENDLY_LINKS['managed-payroll'];
}
