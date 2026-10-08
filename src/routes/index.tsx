import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/')({
  head: () => pageHead('home', 'en'),
  
  component: () => <PublicPage page="home" lang="en" />,
});
