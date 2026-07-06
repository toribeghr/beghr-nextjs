// Compliance Template Library — single source of truth.
//
// Every template page under /resources/templates/[slug] is generated from this array.
// To add a template later, add ONE entry here (and drop its source file under
// src/lib/template-files/) — no new page code required.
//
// `templateFile` is a repo-relative path to a source document that carries merge
// placeholders. For docType "docx" the placeholders use docxtemplater's default
// {key} delimiters and the `key` of each field must match a placeholder in the file.

export type FieldType = 'text' | 'date' | 'select';

export interface TemplateField {
  key: string;
  label: string;
  type: FieldType;
  required: boolean;
  options?: string[];
  // Optional neutral placeholder shown in the input; copy is intentionally minimal.
  placeholder?: string;
}

export interface Template {
  slug: string;
  title: string;
  category: string;
  description: string;
  docType: 'docx' | 'pdf';
  templateFile: string;
  fields: TemplateField[];
  // SEO overrides for the template's page. Optional: the page falls back to the
  // title/description above when these are absent, so older entries keep working.
  seoTitle?: string;
  metaDescription?: string;
}

// Canonical category list. The hub page renders one section per category, in this order.
export const TEMPLATE_CATEGORIES = [
  'Hiring & Onboarding',
  'Tax & Payroll Compliance',
  'Policy & Handbook',
  'Termination & Leave',
] as const;

export type TemplateCategory = (typeof TEMPLATE_CATEGORIES)[number];

// U.S. states + DC, reused by any field that needs a state picker.
export const US_STATES: string[] = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
];

export const TEMPLATES: Template[] = [
  {
    slug: 'i-9-employment-eligibility-verification',
    title: 'I-9 Employment Eligibility Verification',
    category: 'Hiring & Onboarding',
    description:
      'Enter your employee and employer details and download the official USCIS Form I-9, pre-filled and ready for the employee and employer to complete.',
    seoTitle: 'Free Fillable I-9 Form (Official USCIS PDF) | BEG',
    metaDescription:
      'Enter employee and employer details and download the official USCIS Form I-9, pre-filled and ready to complete. Free from Business Executive Group.',
    docType: 'pdf',
    templateFile: 'src/lib/template-files/i9.pdf',
    fields: [
      {
        key: 'employeeName',
        label: 'Employee full name',
        type: 'text',
        required: true,
        placeholder: 'Employee full name',
      },
      {
        key: 'employerName',
        label: 'Employer / business name',
        type: 'text',
        required: true,
        placeholder: 'Employer or business name',
      },
      {
        key: 'hireDate',
        label: 'Date of hire',
        type: 'date',
        required: true,
      },
      {
        key: 'state',
        label: 'State of employment',
        type: 'select',
        required: true,
        options: US_STATES,
      },
    ],
  },
];

// ---- Lookup helpers ---------------------------------------------------------

export function getTemplateBySlug(slug: string): Template | undefined {
  return TEMPLATES.find((t) => t.slug === slug);
}

export function getAllTemplateSlugs(): string[] {
  return TEMPLATES.map((t) => t.slug);
}

export function getTemplatesByCategory(category: string): Template[] {
  return TEMPLATES.filter((t) => t.category === category);
}

// Categories that actually have at least one template, in canonical order.
// Used by the hub so empty categories can still be shown as "coming soon".
export function getPopulatedCategories(): TemplateCategory[] {
  return TEMPLATE_CATEGORIES.filter((c) => getTemplatesByCategory(c).length > 0);
}

// The three lead fields required on every template, regardless of its merge fields.
export const LEAD_FIELDS: TemplateField[] = [
  { key: 'leadName', label: 'Full name', type: 'text', required: true, placeholder: 'Full name' },
  { key: 'workEmail', label: 'Work email', type: 'text', required: true, placeholder: 'Enter your work email' },
  { key: 'phone', label: 'Phone number', type: 'text', required: true, placeholder: 'Phone number' },
];
