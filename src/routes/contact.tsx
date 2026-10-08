import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/contact')({
  head: () => pageHead('contact', 'en'),
  
  component: () => <PublicPage page="contact" lang="en" />,
});
