import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Healthcare Job Placement Services | Business Executive Group',
  description: 'Healthcare and nursing job placement. Fill clinical roles faster before burnout. 45-day replacement guarantee.',
  canonical: 'https://beghr.com/services/placement-healthcare',
};

export default function PlacementHealthcarePage() {
  return (
    <ServicePage
      eyebrow="Job Placement · Healthcare"
      title="Fill your clinical and nursing roles faster."
      subtitle="Healthcare Job Placement"
      description="Healthcare organizations need qualified clinical staff now. We source and place nurses, clinicians, and healthcare professionals before burnout sets in."
      calendlyLink={getCalendlyLink('placement-healthcare')}
    />
  );
}
