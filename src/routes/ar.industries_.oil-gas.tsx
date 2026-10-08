import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/ar/industries_/oil-gas')({
  head: () => sectorHead('oil-gas', 'ar'),
  component: () => <SectorPage slug="oil-gas" lang="ar" />,
});
