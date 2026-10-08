import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/quality-safety')({
  head: () => pageHead('quality', 'en'),
  
  component: () => <PublicPage page="quality" lang="en" />,
});
