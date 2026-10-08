import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/cleaning-services')({
  head: () => pageHead('cleaning', 'ar'),
  
  component: () => <PublicPage page="cleaning" lang="ar" />,
});
