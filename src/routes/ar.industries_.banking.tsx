import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/ar/industries_/banking')({
  head: () => sectorHead('banking', 'ar'),
  component: () => <SectorPage slug="banking" lang="ar" />,
});
