import { createFileRoute } from '@tanstack/react-router';
import { SectorPage } from '@/components/qcc/sector';
import { sectorHead } from '@/lib/qcc/sectors';
export const Route = createFileRoute('/industries_/banking')({
  head: () => sectorHead('banking', 'en'),
  component: () => <SectorPage slug="banking" lang="en" />,
});
