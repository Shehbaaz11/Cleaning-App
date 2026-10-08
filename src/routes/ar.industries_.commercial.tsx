import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/ar/industries_/commercial')({
  head: () => sectorHead('commercial', 'ar'),
  component: () => <SectorPage slug="commercial" lang="ar" />,
});
