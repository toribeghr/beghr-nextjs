import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'iSolved HCM for Tech Companies | HR & Equity Platform | BEG',
  description: 'iSolved HCM for technology companies. Manage equity comp, contractors, and distributed teams on one platform. Implemented and supported by BEG.',
  alternates: {
    canonical: 'https://beghr.com/services/hcm-software/technology',
  },
};

export default function HCMTechnologyPage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/technology.svg"
      eyebrow="HCM Software · Technology"
      title="One HR platform for tech companies."
      description="Technology company HR includes equity compensation, contractor management, and distributed teams. One HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-technology')}
    />
  );
}
