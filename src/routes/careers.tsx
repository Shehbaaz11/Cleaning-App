import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/careers')({
  head: () => pageHead('careers', 'en'),
  
  component: () => <PublicPage page="careers" lang="en" />,
});
