import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'HCM Software for Law Firms | Business Executive Group',
  description: 'HCM platform for legal firms. Manage payroll, HR, time, and benefits on one iSolved platform.',
  alternates: {
    canonical: 'https://beghr.com/services/hcm-software/legal',
  },
};

export default function HCMLegalPage() {
  return (
    <ServicePage
      eyebrow="HCM Software · Legal"
      title="One HR platform for law firms."
      description="Law firm HR management includes partner accounting, associate tracking, and billable time. One connected HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-legal')}
    />
  );
}
