import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/pest-control')({
  head: () => pageHead('pest', 'ar'),
  
  component: () => <PublicPage page="pest" lang="ar" />,
});
