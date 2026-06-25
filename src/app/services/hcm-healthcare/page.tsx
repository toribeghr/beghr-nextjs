import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'HCM Software for Healthcare | Business Executive Group',
  description: 'HCM platform for healthcare organizations. Manage staffing, shifts, compliance, and payroll on one system.',
  canonical: 'https://beghr.com/services/hcm-healthcare',
};

export default function HCMHealthcarePage() {
  return (
    <ServicePage
      eyebrow="HCM Software · Healthcare"
      title="One HR platform for healthcare organizations."
      subtitle="HCM Software for Healthcare"
      description="Healthcare HR includes shift scheduling, clinical staff management, and compliance tracking. One connected HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-healthcare')}
    />
  );
}
