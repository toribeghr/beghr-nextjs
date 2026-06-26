import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Healthcare Job Placement | Clinical & Nursing Recruiting | BEG',
  description: 'Fill nursing and clinical roles before burnout. Specialized healthcare recruiting with milestone billing and a 45-day replacement guarantee. Book a call.',
  alternates: {
    canonical: 'https://beghr.com/services/job-placement/healthcare',
  },
};

export default function PlacementHealthcarePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/healthcare.svg"
      eyebrow="Job Placement · Healthcare"
      title="Fill your clinical and nursing roles faster."
      description="Healthcare organizations need qualified clinical staff now. We source and place nurses, clinicians, and healthcare professionals before burnout sets in."
      calendlyLink={getCalendlyLink('placement-healthcare')}
    />
  );
}
