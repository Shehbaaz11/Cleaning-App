import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/terms')({
  head: () => pageHead('terms', 'en'),
  
  component: () => <PublicPage page="terms" lang="en" />,
});
