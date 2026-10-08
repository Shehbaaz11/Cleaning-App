import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/cleaning-services')({
  head: () => pageHead('cleaning', 'en'),
  
  component: () => <PublicPage page="cleaning" lang="en" />,
});
