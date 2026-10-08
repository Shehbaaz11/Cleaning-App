import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/industries_/healthcare')({
  head: () => sectorHead('healthcare', 'en'),
  component: () => <SectorPage slug="healthcare" lang="en" />,
});
