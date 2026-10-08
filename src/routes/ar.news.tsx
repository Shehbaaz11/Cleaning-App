import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/news')({
  head: () => pageHead('news', 'ar'),
  
  component: () => <PublicPage page="news" lang="ar" />,
});
