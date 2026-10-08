import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/ar/industries_/hospitality')({
  head: () => sectorHead('hospitality', 'ar'),
  component: () => <SectorPage slug="hospitality" lang="ar" />,
});
