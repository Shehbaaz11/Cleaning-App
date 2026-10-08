import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/about')({
  head: () => pageHead('about', 'ar'),
  
  component: () => <PublicPage page="about" lang="ar" />,
});
