import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/ar/industries_/government')({
  head: () => sectorHead('government', 'ar'),
  component: () => <SectorPage slug="government" lang="ar" />,
});
