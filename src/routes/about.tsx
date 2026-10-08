import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/about')({
  head: () => pageHead('about', 'en'),
  
  component: () => <PublicPage page="about" lang="en" />,
});
