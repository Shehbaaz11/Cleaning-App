import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/industries_/government')({
  head: () => sectorHead('government', 'en'),
  component: () => <SectorPage slug="government" lang="en" />,
});
