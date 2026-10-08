import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/security-services')({
  head: () => pageHead('security', 'ar'),
  
  component: () => <PublicPage page="security" lang="ar" />,
});
