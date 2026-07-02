// BEG JOB PLACEMENT - INDUSTRY + ROLE DATA (all 26 verticals)
// Ported verbatim from the approved artifact beg-industry-data.js (July 1, 2026).
// Each role maps to a tier (1-6). Tier pricing is universal.
// Tier framework: 1 Support/Admin, 2 IC non-support, 3 Manager/Sr Specialist,
// 4 Director/Principal, 5 VP/Executive, 6 C-Suite/Senior Executive.

export interface PlacementTier {
  label: string;
  name: string;
  rate: number;
  hours: number;
  base: number;
  high: number;
}

export const TIERS: Record<number, PlacementTier> = {
  1: { label: 'Tier I', name: 'IC (Support)', rate: 156, hours: 30, base: 4680, high: 5616 },
  2: { label: 'Tier II', name: 'IC (Non-Support)', rate: 177, hours: 53, base: 9381, high: 11257 },
  3: { label: 'Tier III', name: 'Manager / Specialist', rate: 192, hours: 67, base: 12864, high: 15437 },
  4: { label: 'Tier IV', name: 'Director / Principal', rate: 212, hours: 90, base: 19080, high: 22896 },
  5: { label: 'Tier V', name: 'Executive', rate: 283, hours: 80, base: 22640, high: 27168 },
  6: { label: 'Tier VI', name: 'Senior Executive', rate: 418, hours: 80, base: 33440, high: 40128 },
};

export interface PlacementRole {
  name: string;
  tier: number;
}

export interface PlacementIndustry {
  label: string;
  emoji: string;
  roles: PlacementRole[];
}

export const INDUSTRIES: Record<string, PlacementIndustry> = {
  legal: { label: 'Legal & Attorney', emoji: '⚖️', roles: [
    { name: 'Legal Assistant / Admin', tier: 1 }, { name: 'Law Clerk', tier: 1 }, { name: 'Paralegal', tier: 2 },
    { name: 'Associate Attorney (Junior)', tier: 2 }, { name: 'Associate Attorney (Mid/Senior)', tier: 3 },
    { name: 'Practice Manager', tier: 3 }, { name: 'Counsel / Of Counsel', tier: 4 }, { name: 'Senior Counsel', tier: 5 },
    { name: 'Partner / General Counsel', tier: 5 }, { name: 'Managing Partner / CLO', tier: 6 }] },
  healthcare: { label: 'Healthcare & Nursing', emoji: '🩺', roles: [
    { name: 'Medical Assistant / CNA', tier: 1 }, { name: 'LPN / LVN', tier: 2 }, { name: 'Registered Nurse (RN)', tier: 2 },
    { name: 'Nurse Practitioner / PA', tier: 3 }, { name: 'Charge Nurse / Clinical Lead', tier: 3 }, { name: 'Nurse Manager', tier: 3 },
    { name: 'Director of Nursing', tier: 4 }, { name: 'Physician', tier: 5 }, { name: 'VP Clinical Operations', tier: 5 },
    { name: 'Chief Medical Officer / CNO', tier: 6 }] },
  finance: { label: 'Finance & Accounting', emoji: '💰', roles: [
    { name: 'AP / AR Clerk', tier: 1 }, { name: 'Bookkeeper', tier: 1 }, { name: 'Staff Accountant', tier: 2 },
    { name: 'Financial Analyst', tier: 2 }, { name: 'Senior Accountant', tier: 3 }, { name: 'Accounting Manager', tier: 3 },
    { name: 'Finance Director / Controller', tier: 4 }, { name: 'VP Finance', tier: 5 }, { name: 'CFO', tier: 6 }] },
  technology: { label: 'IT & Technology', emoji: '💻', roles: [
    { name: 'IT Support / Help Desk', tier: 1 }, { name: 'Software Engineer (Junior)', tier: 2 }, { name: 'Software Engineer (Mid)', tier: 2 },
    { name: 'Data Analyst', tier: 2 }, { name: 'Senior Engineer / Tech Lead', tier: 3 }, { name: 'Engineering Manager', tier: 3 },
    { name: 'Director of Engineering', tier: 4 }, { name: 'VP Engineering / Product', tier: 5 }, { name: 'CTO / CIO', tier: 6 }] },
  engineering: { label: 'Engineering', emoji: '⚙️', roles: [
    { name: 'Engineering Technician', tier: 1 }, { name: 'Design / CAD Engineer', tier: 2 }, { name: 'Mechanical / Electrical Engineer', tier: 2 },
    { name: 'Senior Engineer', tier: 3 }, { name: 'Engineering Manager', tier: 3 }, { name: 'Director of Engineering', tier: 4 },
    { name: 'VP Engineering', tier: 5 }, { name: 'Chief Engineer', tier: 6 }] },
  trades: { label: 'Skilled Trades & Mfg', emoji: '🔧', roles: [
    { name: 'General Laborer / Helper', tier: 1 }, { name: 'Skilled Tradesperson', tier: 2 }, { name: 'Machinist / Technician', tier: 2 },
    { name: 'Foreman / Team Lead', tier: 3 }, { name: 'Production Supervisor', tier: 3 }, { name: 'Plant / Operations Manager', tier: 4 },
    { name: 'Director of Operations', tier: 4 }, { name: 'VP Operations', tier: 5 }] },
  executive: { label: 'Executive & Director+', emoji: '👑', roles: [
    { name: 'Senior Manager', tier: 3 }, { name: 'Director', tier: 4 }, { name: 'Senior Director / Principal', tier: 4 },
    { name: 'Vice President', tier: 5 }, { name: 'Senior VP / EVP', tier: 5 }, { name: 'C-Suite (CEO/COO/CFO)', tier: 6 }] },
  'accounting-cpa': { label: 'Accounting & CPA', emoji: '📊', roles: [
    { name: 'Bookkeeper / AP-AR', tier: 1 }, { name: 'Staff Accountant', tier: 2 }, { name: 'Tax / Audit Associate', tier: 2 },
    { name: 'Senior Accountant (CPA)', tier: 3 }, { name: 'Tax / Audit Manager', tier: 3 }, { name: 'Controller', tier: 4 },
    { name: 'Director of Accounting', tier: 4 }, { name: 'VP Finance / CFO', tier: 6 }] },
  sales: { label: 'Sales', emoji: '📈', roles: [
    { name: 'Sales Development Rep (SDR)', tier: 1 }, { name: 'Account Executive', tier: 2 }, { name: 'Senior / Enterprise AE', tier: 3 },
    { name: 'Sales Manager', tier: 3 }, { name: 'Director of Sales', tier: 4 }, { name: 'VP Sales', tier: 5 }, { name: 'Chief Revenue Officer', tier: 6 }] },
  cybersecurity: { label: 'Cybersecurity', emoji: '🔐', roles: [
    { name: 'SOC Analyst (Junior)', tier: 2 }, { name: 'Security Engineer', tier: 2 }, { name: 'Senior Security Engineer', tier: 3 },
    { name: 'Security Manager', tier: 3 }, { name: 'Director of Security', tier: 4 }, { name: 'VP Security', tier: 5 }, { name: 'CISO', tier: 6 }] },
  insurance: { label: 'Insurance', emoji: '🛡️', roles: [
    { name: 'Claims / Policy Assistant', tier: 1 }, { name: 'Underwriter', tier: 2 }, { name: 'Producer / Agent', tier: 2 },
    { name: 'Senior Underwriter', tier: 3 }, { name: 'Claims / Underwriting Manager', tier: 3 }, { name: 'Director of Underwriting', tier: 4 },
    { name: 'VP Insurance Operations', tier: 5 }] },
  hr: { label: 'Human Resources', emoji: '👥', roles: [
    { name: 'HR Coordinator / Assistant', tier: 1 }, { name: 'HR Generalist', tier: 2 }, { name: 'Recruiter / TA Specialist', tier: 2 },
    { name: 'HR Manager', tier: 3 }, { name: 'People Ops / TA Manager', tier: 3 }, { name: 'HR Director', tier: 4 },
    { name: 'VP People / HR', tier: 5 }, { name: 'Chief People Officer / CHRO', tier: 6 }] },
  'construction-management': { label: 'Construction Management', emoji: '🏗️', roles: [
    { name: 'Field Engineer / Coordinator', tier: 1 }, { name: 'Estimator', tier: 2 }, { name: 'Assistant Project Manager', tier: 2 },
    { name: 'Superintendent', tier: 3 }, { name: 'Project Manager', tier: 3 }, { name: 'Senior PM / Project Executive', tier: 4 },
    { name: 'Director of Construction', tier: 4 }, { name: 'VP Construction', tier: 5 }] },
  'supply-chain': { label: 'Supply Chain', emoji: '📦', roles: [
    { name: 'Logistics / Warehouse Coordinator', tier: 1 }, { name: 'Buyer / Planner', tier: 2 }, { name: 'Procurement Specialist', tier: 2 },
    { name: 'Supply Chain Manager', tier: 3 }, { name: 'Logistics Manager', tier: 3 }, { name: 'Director of Supply Chain', tier: 4 },
    { name: 'VP Supply Chain', tier: 5 }] },
  marketing: { label: 'Marketing', emoji: '📣', roles: [
    { name: 'Marketing Coordinator', tier: 1 }, { name: 'Marketing Specialist / Demand Gen', tier: 2 }, { name: 'Content / Brand Manager', tier: 3 },
    { name: 'Marketing Manager', tier: 3 }, { name: 'Director of Marketing', tier: 4 }, { name: 'VP Marketing', tier: 5 },
    { name: 'Chief Marketing Officer', tier: 6 }] },
  banking: { label: 'Banking', emoji: '🏦', roles: [
    { name: 'Teller / Banking Associate', tier: 1 }, { name: 'Credit / Loan Analyst', tier: 2 }, { name: 'Commercial Lender', tier: 3 },
    { name: 'Compliance Officer', tier: 3 }, { name: 'Branch / Lending Manager', tier: 3 }, { name: 'Director of Lending', tier: 4 },
    { name: 'VP Commercial Banking', tier: 5 }] },
  biotech: { label: 'Biotech & Life Sciences', emoji: '🧬', roles: [
    { name: 'Lab Technician / Associate', tier: 1 }, { name: 'Research Associate', tier: 2 }, { name: 'QA / Regulatory Specialist', tier: 2 },
    { name: 'Clinical Research Associate', tier: 3 }, { name: 'QA / Regulatory Manager', tier: 3 }, { name: 'Director of Clinical / Regulatory', tier: 4 },
    { name: 'VP R&D / Clinical', tier: 5 }, { name: 'Chief Scientific Officer', tier: 6 }] },
  manufacturing: { label: 'Manufacturing', emoji: '🏭', roles: [
    { name: 'Line Operator / Assembler', tier: 1 }, { name: 'Quality Technician', tier: 2 }, { name: 'Process / Mfg Engineer', tier: 2 },
    { name: 'Production Supervisor', tier: 3 }, { name: 'Quality / Ops Manager', tier: 3 }, { name: 'Plant Manager', tier: 4 },
    { name: 'Director of Manufacturing', tier: 4 }, { name: 'VP Operations', tier: 5 }] },
  dental: { label: 'Dental', emoji: '🦷', roles: [
    { name: 'Dental Assistant', tier: 1 }, { name: 'Dental Hygienist', tier: 2 }, { name: 'Office / Practice Coordinator', tier: 2 },
    { name: 'Practice Manager', tier: 3 }, { name: 'Associate Dentist', tier: 4 }, { name: 'Specialist (Ortho/Oral Surg.)', tier: 5 },
    { name: 'Regional / Multi-Site Director', tier: 5 }] },
  nonprofit: { label: 'Nonprofit', emoji: '🤝', roles: [
    { name: 'Program / Admin Coordinator', tier: 1 }, { name: 'Program Associate', tier: 2 }, { name: 'Development / Grants Specialist', tier: 2 },
    { name: 'Program Manager', tier: 3 }, { name: 'Development Director', tier: 4 }, { name: 'Director of Operations', tier: 4 },
    { name: 'Executive Director / CEO', tier: 6 }] },
  'real-estate': { label: 'Real Estate', emoji: '🏢', roles: [
    { name: 'Leasing / Admin Assistant', tier: 1 }, { name: 'Property Administrator', tier: 2 }, { name: 'Property Manager', tier: 3 },
    { name: 'Asset Manager', tier: 3 }, { name: 'Director of Property Mgmt', tier: 4 }, { name: 'VP Real Estate / Acquisitions', tier: 5 }] },
  energy: { label: 'Energy', emoji: '⚡', roles: [
    { name: 'Field Technician', tier: 1 }, { name: 'Field / Project Engineer', tier: 2 }, { name: 'Senior Engineer', tier: 3 },
    { name: 'Project Manager', tier: 3 }, { name: 'Operations Manager', tier: 3 }, { name: 'Director of Operations', tier: 4 },
    { name: 'VP Energy Operations', tier: 5 }] },
  architecture: { label: 'Architecture', emoji: '📐', roles: [
    { name: 'Architectural Drafter', tier: 1 }, { name: 'Architectural Designer', tier: 2 }, { name: 'BIM Manager', tier: 3 },
    { name: 'Project Architect', tier: 3 }, { name: 'Project Manager', tier: 3 }, { name: 'Design Director / Assoc. Principal', tier: 4 },
    { name: 'Principal / Partner', tier: 5 }] },
  hospitality: { label: 'Hospitality', emoji: '🏨', roles: [
    { name: 'Front Desk / Guest Services', tier: 1 }, { name: 'Supervisor / Team Lead', tier: 2 }, { name: 'F&B / Dept Manager', tier: 3 },
    { name: 'Assistant General Manager', tier: 3 }, { name: 'General Manager', tier: 4 }, { name: 'Regional / Multi-Property Dir.', tier: 5 },
    { name: 'VP Operations', tier: 5 }] },
  veterinary: { label: 'Veterinary', emoji: '🐾', roles: [
    { name: 'Veterinary Assistant', tier: 1 }, { name: 'Vet Technician', tier: 2 }, { name: 'Practice Coordinator', tier: 2 },
    { name: 'Practice Manager', tier: 3 }, { name: 'Associate Veterinarian', tier: 4 }, { name: 'Specialist Veterinarian', tier: 5 },
    { name: 'Regional / Multi-Site Director', tier: 5 }] },
  government: { label: 'Government Contracting', emoji: '🏛️', roles: [
    { name: 'Contracts / Admin Coordinator', tier: 1 }, { name: 'Contracts Specialist', tier: 2 }, { name: 'Compliance Analyst', tier: 2 },
    { name: 'Program Manager', tier: 3 }, { name: 'Contracts / Compliance Manager', tier: 3 }, { name: 'Director of Programs', tier: 4 },
    { name: 'VP Government Services', tier: 5 }] },
};

export interface SalaryOpt {
  label: string;
  low: number;
  high: number;
}

export const SALARY_OPTS: SalaryOpt[] = [
  { label: 'Under $60,000', low: 40000, high: 60000 },
  { label: '$60,000 - $85,000', low: 60000, high: 85000 },
  { label: '$85,000 - $120,000', low: 85000, high: 120000 },
  { label: '$120,000 - $175,000', low: 120000, high: 175000 },
  { label: '$175,000 - $250,000', low: 175000, high: 250000 },
  { label: '$250,000 - $400,000', low: 250000, high: 400000 },
  { label: '$400,000+', low: 400000, high: 600000 },
];

export const DURATION_DAYS: Record<string, number> = {
  'Just opened them': 0,
  'Less than 30 days': 20,
  '30-60 days': 45,
  "60+ days - we've been struggling": 80,
};
