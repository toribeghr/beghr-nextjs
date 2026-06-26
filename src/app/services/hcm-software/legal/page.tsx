import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'iSolved HCM for Law Firms | Legal HR & Payroll Platform | BEG',
  description: 'iSolved HCM for law firms. Manage partner compensation, associate tracking, and billable time on one platform. Implemented and supported by BEG.',
  alternates: {
    canonical: 'https://beghr.com/services/hcm-software/legal',
  },
};

export default function HCMLegalPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/legal.svg"
      eyebrow="HCM Software · Legal"
      title="One HR platform for law firms."
      description="Law firm HR management includes partner accounting, associate tracking, and billable time. One connected HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-legal')}
    />
  );
}
