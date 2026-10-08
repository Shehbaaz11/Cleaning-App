import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/pest-control')({
  head: () => pageHead('pest', 'en'),
  
  component: () => <PublicPage page="pest" lang="en" />,
});
