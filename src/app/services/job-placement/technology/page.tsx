import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'IT & Technology Job Placement | Dev & Data Recruiting | BEG',
  description: 'Place software engineers, data scientists, and IT professionals before your roadmap slips. Milestone billing, 45-day guarantee. Book a discovery call.',
  alternates: {
    canonical: 'https://beghr.com/services/job-placement/technology',
  },
};

export default function PlacementTechnologyPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/technology.svg"
      eyebrow="Job Placement · Technology"
      title="Fill your software and tech roles faster."
      description="Technology teams move fast. We place software engineers, data scientists, and IT professionals so your roadmap stays on track."
      calendlyLink={getCalendlyLink('placement-technology')}
    />
  );
}
