import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/contact')({
  head: () => pageHead('contact', 'ar'),
  
  component: () => <PublicPage page="contact" lang="ar" />,
});
