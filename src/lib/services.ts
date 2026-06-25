export const CALENDLY_LINKS = {
  // General
  'general':            'https://calendly.com/tori-beghr?id=1',
  // Managed Payroll
  'managed-payroll':    'https://calendly.com/tori-beghr?id=22',
  'payroll-legal':      'https://calendly.com/tori-beghr?id=15',
  'payroll-healthcare': 'https://calendly.com/tori-beghr?id=14',
  'payroll-finance':    'https://calendly.com/tori-beghr?id=13',
  'payroll-technology': 'https://calendly.com/tori-beghr?id=12',
  'payroll-engineering':'https://calendly.com/tori-beghr?id=11',
  'payroll-trades':     'https://calendly.com/tori-beghr?id=10',
  'payroll-executive':  'https://calendly.com/tori-beghr?id=9',
  // HCM Software
  'hcm-software':       'https://calendly.com/tori-beghr?id=1',
  'hcm-legal':          'https://calendly.com/tori-beghr?id=8',
  'hcm-healthcare':     'https://calendly.com/tori-beghr?id=7',
  'hcm-finance':        'https://calendly.com/tori-beghr?id=6',
  'hcm-technology':     'https://calendly.com/tori-beghr?id=5',
  'hcm-engineering':    'https://calendly.com/tori-beghr?id=4',
  'hcm-trades':         'https://calendly.com/tori-beghr?id=3',
  'hcm-executive':      'https://calendly.com/tori-beghr?id=2',
  // Job Placement
  'job-placement':          'https://calendly.com/tori-beghr?id=1',
  'placement-legal':        'https://calendly.com/tori-beghr?id=23',
  'placement-healthcare':   'https://calendly.com/tori-beghr?id=21',
  'placement-finance':      'https://calendly.com/tori-beghr?id=20',
  'placement-technology':   'https://calendly.com/tori-beghr?id=19',
  'placement-engineering':  'https://calendly.com/tori-beghr?id=18',
  'placement-trades':       'https://calendly.com/tori-beghr?id=16',
  'placement-executive':    'https://calendly.com/tori-beghr?id=17',
} as const;

export function getCalendlyLink(pageSlug: string): string {
  return CALENDLY_LINKS[pageSlug as keyof typeof CALENDLY_LINKS] || CALENDLY_LINKS['managed-payroll'];
}
