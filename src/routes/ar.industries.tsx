import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/industries')({
  head: () => pageHead('industries', 'ar'),
  
  component: () => <PublicPage page="industries" lang="ar" />,
});
