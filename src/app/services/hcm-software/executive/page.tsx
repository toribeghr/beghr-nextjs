import { Metadata } from 'next';
import ServicePage from '@/components/ServicePage';
import { getCalendlyLink } from '@/lib/services';

export const metadata: Metadata = {
  title: 'iSolved HCM for Executive Teams | Deferred Comp Platform | BEG',
  description: 'iSolved HCM for executive compensation. Deferred comp tracking, complex benefits administration, and discreet management. Implemented by BEG.',
  alternates: {
    canonical: 'https://beghr.com/services/hcm-software/executive',
  },
};

export default function HCMExecutivePage() {
  return (
    <ServicePage
      imageSrc="/assets/hero-images/executive.svg"
      eyebrow="HCM Software · Executive"
      title="One HR platform for executive teams."
      description="Executive HR management requires deferred compensation tracking and complex benefits administration handled with discretion and care. One HCM platform powered by iSolved, set up and supported by BEG."
      calendlyLink={getCalendlyLink('hcm-executive')}
    />
  );
}
