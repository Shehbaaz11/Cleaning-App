import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/privacy-policy')({
  head: () => pageHead('privacy', 'ar'),
  
  component: () => <PublicPage page="privacy" lang="ar" />,
});
