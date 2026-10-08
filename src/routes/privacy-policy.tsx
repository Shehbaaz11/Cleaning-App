import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/privacy-policy')({
  head: () => pageHead('privacy', 'en'),
  
  component: () => <PublicPage page="privacy" lang="en" />,
});
