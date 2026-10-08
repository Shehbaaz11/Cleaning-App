import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/industries_/hospitality')({
  head: () => sectorHead('hospitality', 'en'),
  component: () => <SectorPage slug="hospitality" lang="en" />,
});
