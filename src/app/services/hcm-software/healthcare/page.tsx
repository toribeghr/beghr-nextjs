import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'iSolved HCM for Healthcare | Clinical HR & Payroll Platform | BEG',
  description: 'iSolved HCM for healthcare. Shift scheduling, compliance tracking, and clinical staff management on one platform. Implemented and supported by BEG.',
  alternates: {
    canonical: 'https://beghr.com/services/hcm-software/healthcare',
  },
};

export default function HCMHealthcarePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/healthcare.svg"
      eyebrow="HCM Software · Healthcare"
      title="One HR platform for healthcare organizations."
      description="Healthcare HR includes shift scheduling, clinical staff management, and compliance tracking. One connected HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-healthcare')}
    />
  );
}
