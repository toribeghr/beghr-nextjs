// Role-level long-tail pages per industry. The generator pairs each role with its
// parent industry data to produce /services/job-placement/[industry]/[role] pages.
// Keep role names search-aligned (how hiring managers actually search).
module.exports = {
  legal: [
    { slug: 'litigation-associate', name: 'Litigation Associate', note: 'Litigation associates with portable skills and the right practice-area fit are rarely on job boards.' },
    { slug: 'corporate-attorney', name: 'Corporate Attorney', note: 'Transactional and corporate attorneys move quietly. The best candidates are placed before a posting closes.' },
    { slug: 'general-counsel', name: 'General Counsel', note: 'A GC search is confidential by nature. Posting the role is rarely an option for a growing company.' },
    { slug: 'paralegal', name: 'Paralegal', note: 'Experienced paralegals with practice-area depth are in constant demand across firms of every size.' },
    { slug: 'partner', name: 'Lateral Partner', note: 'Lateral partner moves with a book of business require discretion and direct, relationship-led sourcing.' },
    { slug: 'compliance-counsel', name: 'Compliance Counsel', note: 'Regulatory and compliance counsel demand has outrun the available pool in most markets.' },
  ],
  'accounting-cpa': [
    { slug: 'controller', name: 'Controller', note: 'Controllers who can own the close and scale a finance function are passive and heavily recruited.' },
    { slug: 'tax-manager', name: 'Tax Manager', note: 'Public-accounting tax managers are scarce, especially heading into and out of busy season.' },
    { slug: 'audit-manager', name: 'Audit Manager', note: 'Audit managers with the right industry exposure rarely respond to job postings.' },
    { slug: 'senior-accountant', name: 'Senior Accountant', note: 'The senior-accountant pool has thinned with the national CPA shortage.' },
    { slug: 'cfo', name: 'CFO', note: 'A CFO search is confidential, relationship-led, and almost never run through a public posting.' },
    { slug: 'accounting-manager', name: 'Accounting Manager', note: 'Accounting managers who can lead a team are in short supply across the mid-market.' },
  ],
  sales: [
    { slug: 'vp-sales', name: 'VP of Sales', note: 'Proven VPs of Sales are passive and field constant inbound. They are sourced, not posted.' },
    { slug: 'account-executive', name: 'Account Executive', note: 'Top-quota AEs are the most poached role in B2B. Speed and direct outreach win them.' },
    { slug: 'sales-director', name: 'Sales Director', note: 'Sales directors who can build and lead a team are scarce and quickly off the market.' },
    { slug: 'sdr-manager', name: 'SDR Manager', note: 'Pipeline-building SDR leaders are in high demand as companies rebuild outbound motions.' },
    { slug: 'enterprise-account-executive', name: 'Enterprise Account Executive', note: 'Enterprise closers with the right vertical experience are a tiny, heavily recruited pool.' },
  ],
  cybersecurity: [
    { slug: 'ciso', name: 'CISO', note: 'CISO searches are confidential and the qualified pool is small and constantly recruited.' },
    { slug: 'security-engineer', name: 'Security Engineer', note: 'Security engineers field multiple offers. A slow process loses them every time.' },
    { slug: 'soc-analyst', name: 'SOC Analyst', note: 'SOC analysts are in chronic short supply as threat volume rises.' },
    { slug: 'security-architect', name: 'Security Architect', note: 'Security architects with cloud depth are among the hardest technical roles to fill.' },
    { slug: 'grc-analyst', name: 'GRC Analyst', note: 'Governance, risk, and compliance specialists are scarce as regulation tightens.' },
  ],
  insurance: [
    { slug: 'commercial-lines-underwriter', name: 'Commercial Lines Underwriter', note: 'Experienced underwriters are retiring faster than the industry can replace them.' },
    { slug: 'producer', name: 'Insurance Producer', note: 'Producers with a book of business move quietly and are sourced through relationships.' },
    { slug: 'claims-manager', name: 'Claims Manager', note: 'Claims leadership is thin as the workforce ages and demand grows.' },
    { slug: 'actuary', name: 'Actuary', note: 'Credentialed actuaries are a small, high-demand pool that rarely sees a job board.' },
    { slug: 'account-manager', name: 'Insurance Account Manager', note: 'Licensed account managers are in constant demand across agencies.' },
  ],
  hr: [
    { slug: 'hr-director', name: 'HR Director', note: 'HR directors who can build people functions are passive and selectively recruited.' },
    { slug: 'hr-manager', name: 'HR Manager', note: 'Hands-on HR managers are in high demand across the growing mid-market.' },
    { slug: 'talent-acquisition-manager', name: 'Talent Acquisition Manager', note: 'TA leaders who can build pipelines are scarce and quickly hired.' },
    { slug: 'people-operations-manager', name: 'People Operations Manager', note: 'People-ops leaders blending HR and systems experience are a thin, growing-demand pool.' },
    { slug: 'chro', name: 'CHRO', note: 'A CHRO search is confidential and relationship-led, never a public posting.' },
  ],
  'construction-management': [
    { slug: 'project-manager', name: 'Construction Project Manager', note: 'Construction PMs who deliver on time and budget are passive and heavily recruited.' },
    { slug: 'estimator', name: 'Estimator', note: 'Estimators are one of the hardest construction roles to fill in every market.' },
    { slug: 'superintendent', name: 'Superintendent', note: 'Field superintendents with the right project history rarely answer a posting.' },
    { slug: 'preconstruction-manager', name: 'Preconstruction Manager', note: 'Preconstruction leaders are scarce as project pipelines grow.' },
    { slug: 'project-executive', name: 'Project Executive', note: 'Project executives who can run a portfolio are a small, sought-after pool.' },
  ],
};
