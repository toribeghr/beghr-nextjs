// Role-level pages for the 6 original job-placement industries that previously had
// hubs + city grids but no role pages. Merged into ALL_ROLES by the generator.
module.exports = {
  healthcare: [
    { slug: 'registered-nurse', name: 'Registered Nurse', note: 'Staffing shortages and burnout make experienced RNs one of the hardest clinical roles to hire and keep.' },
    { slug: 'nurse-practitioner', name: 'Nurse Practitioner', note: 'NPs are in severe demand as care shifts to advanced practice providers, and the best ones field multiple offers.' },
    { slug: 'physician-assistant', name: 'Physician Assistant', note: 'PAs are scarce and heavily recruited across specialties and care settings.' },
    { slug: 'clinical-director', name: 'Clinical Director', note: 'Clinical leaders who can run a unit and hit quality metrics are passive and rarely on job boards.' },
    { slug: 'physician', name: 'Physician', note: 'Physician recruitment is long, confidential, and intensely competitive in every specialty.' },
  ],
  finance: [
    { slug: 'financial-analyst', name: 'Financial Analyst', note: 'Strong analysts are promoted or poached quickly, keeping the experienced pool thin.' },
    { slug: 'finance-manager', name: 'Finance Manager', note: 'Finance managers who can own reporting and partner with the business are in constant demand.' },
    { slug: 'fpa-manager', name: 'FP&A Manager', note: 'FP&A leaders who blend modeling with business insight are scarce and heavily recruited.' },
    { slug: 'treasury-manager', name: 'Treasury Manager', note: 'Treasury talent is specialized and rarely available on the open market.' },
    { slug: 'vp-finance', name: 'VP of Finance', note: 'A VP of Finance search is confidential and relationship-led, not a public posting.' },
  ],
  technology: [
    { slug: 'software-engineer', name: 'Software Engineer', note: 'Strong engineers are passive, well paid, and rarely respond to job postings.' },
    { slug: 'senior-software-engineer', name: 'Senior Software Engineer', note: 'Senior engineers with the right stack are a small pool that moves fast.' },
    { slug: 'devops-engineer', name: 'DevOps Engineer', note: 'DevOps and platform engineers are among the hardest technical roles to fill.' },
    { slug: 'data-scientist', name: 'Data Scientist', note: 'Experienced data scientists field multiple offers and are sourced directly.' },
    { slug: 'engineering-manager', name: 'Engineering Manager', note: 'Engineering managers who can lead and still ship are scarce and quickly hired.' },
  ],
  engineering: [
    { slug: 'mechanical-engineer', name: 'Mechanical Engineer', note: 'Experienced mechanical engineers are in tight supply across manufacturing and product.' },
    { slug: 'electrical-engineer', name: 'Electrical Engineer', note: 'Electrical engineers with the right domain experience are heavily recruited.' },
    { slug: 'project-engineer', name: 'Project Engineer', note: 'Project engineers who can run jobs on time and budget are passive and in demand.' },
    { slug: 'design-engineer', name: 'Design Engineer', note: 'Design engineers with CAD and domain depth are a thin, sought-after pool.' },
    { slug: 'engineering-manager', name: 'Engineering Manager', note: 'Engineering leaders who can manage a team and deliver are rarely on the market.' },
  ],
  executive: [
    { slug: 'chief-executive-officer', name: 'Chief Executive Officer', note: 'A CEO search is confidential, board-led, and never run through a public posting.' },
    { slug: 'chief-operating-officer', name: 'Chief Operating Officer', note: 'COOs who can scale operations are a small, heavily networked pool.' },
    { slug: 'chief-financial-officer', name: 'Chief Financial Officer', note: 'A CFO search is confidential and relationship-led, sourced directly.' },
    { slug: 'vp-operations', name: 'VP of Operations', note: 'Operations leaders who can build and run at scale are passive and selectively recruited.' },
    { slug: 'general-manager', name: 'General Manager', note: 'GMs with full P&L ownership are in demand and rarely visible on job boards.' },
  ],
  trades: [
    { slug: 'electrician', name: 'Electrician', note: 'Licensed electricians are in chronic short supply as demand outpaces the trained workforce.' },
    { slug: 'hvac-technician', name: 'HVAC Technician', note: 'Skilled HVAC techs are scarce and quickly hired in every market.' },
    { slug: 'maintenance-technician', name: 'Maintenance Technician', note: 'Industrial maintenance techs who can keep a line running are hard to find and keep.' },
    { slug: 'production-supervisor', name: 'Production Supervisor', note: 'Production supervisors who can lead a shift and hit output are passive and in demand.' },
    { slug: 'plant-supervisor', name: 'Plant Supervisor', note: 'Plant and site supervisors with a safety and output track record are rarely on the market.' },
  ],
};
