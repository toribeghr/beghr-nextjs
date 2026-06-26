import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Skilled Trades Job Placement | Business Executive Group',
  description: 'Skilled trades and manufacturing job placement. Fill production and skilled roles faster. Keep your line running.',
  alternates: {
    canonical: 'https://beghr.com/services/job-placement/trades',
  },
};

export default function PlacementTradesPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/trades.svg"
      eyebrow="Job Placement · Skilled Trades"
      title="Fill your skilled trades and manufacturing roles faster."
      description="Manufacturing and skilled trades need qualified production and technical talent on the line. We place skilled trades professionals to keep operations running."
      calendlyLink={getCalendlyLink('placement-trades')}
    />
  );
}
