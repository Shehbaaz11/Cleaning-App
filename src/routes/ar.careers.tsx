import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/careers')({
  head: () => pageHead('careers', 'ar'),
  
  component: () => <PublicPage page="careers" lang="ar" />,
});
