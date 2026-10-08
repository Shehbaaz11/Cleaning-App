import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/support-services')({
  head: () => pageHead('support', 'ar'),
  
  component: () => <PublicPage page="support" lang="ar" />,
});
