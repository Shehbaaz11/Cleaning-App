import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/ar/industries_/healthcare')({
  head: () => sectorHead('healthcare', 'ar'),
  component: () => <SectorPage slug="healthcare" lang="ar" />,
});
