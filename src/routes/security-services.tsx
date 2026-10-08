import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/security-services')({
  head: () => pageHead('security', 'en'),
  
  component: () => <PublicPage page="security" lang="en" />,
});
