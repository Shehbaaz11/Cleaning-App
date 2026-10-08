import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/terms')({
  head: () => pageHead('terms', 'ar'),
  
  component: () => <PublicPage page="terms" lang="ar" />,
});
