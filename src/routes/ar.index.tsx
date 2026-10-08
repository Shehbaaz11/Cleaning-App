import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/')({
  head: () => pageHead('home', 'ar'),
  
  component: () => <PublicPage page="home" lang="ar" />,
});
