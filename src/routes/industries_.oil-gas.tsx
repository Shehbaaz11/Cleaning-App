import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/industries_/oil-gas')({
  head: () => sectorHead('oil-gas', 'en'),
  component: () => <SectorPage slug="oil-gas" lang="en" />,
});
