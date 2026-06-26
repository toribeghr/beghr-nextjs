import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Executive Search Services | C-Level & Director Recruiting | BEG',
  description: 'Confidential executive and director-level search. Milestone-based recruiting, 45-day replacement guarantee. Find leadership talent that moves the needle.',
  alternates: {
    canonical: 'https://beghr.com/services/job-placement/executive',
  },
};

export default function PlacementExecutivePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/executive.svg"
      eyebrow="Job Placement · Executive"
      title="Find your next executive leader."
      description="Executive and director-level search requires confidentiality and deep expertise. We source and place senior leaders with focused, discreet recruiting."
      calendlyLink={getCalendlyLink('placement-executive')}
    />
  );
}
