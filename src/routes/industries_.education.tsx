import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/industries_/education')({
  head: () => sectorHead('education', 'en'),
  component: () => <SectorPage slug="education" lang="en" />,
});
