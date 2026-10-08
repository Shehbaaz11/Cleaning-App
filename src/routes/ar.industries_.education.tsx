import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/ar/industries_/education')({
  head: () => sectorHead('education', 'ar'),
  component: () => <SectorPage slug="education" lang="ar" />,
});
