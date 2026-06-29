import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CityTemplate, { cityExists, cityMeta } from '@/components/CityTemplate';
import { jpMetros } from '@/lib/jpGridData';

const INDUSTRY = 'nonprofit';

export const dynamicParams = true;
export const revalidate = 86400;

export function generateStaticParams() {
  return jpMetros.slice(0, 10).map((m) => ({ city: m.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  return cityMeta(INDUSTRY, params.city) || { title: 'Job Placement | Business Executive Group' };
}

export default function Page({ params }: { params: { city: string } }) {
  if (!cityExists(INDUSTRY, params.city)) notFound();
  return <CityTemplate industrySlug={INDUSTRY} citySlug={params.city} />;
}
