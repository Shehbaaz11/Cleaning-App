import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/industries')({
  head: () => pageHead('industries', 'en'),
  
  component: () => <PublicPage page="industries" lang="en" />,
});
