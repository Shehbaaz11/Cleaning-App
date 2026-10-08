import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/support-services')({
  head: () => pageHead('support', 'en'),
  
  component: () => <PublicPage page="support" lang="en" />,
});
