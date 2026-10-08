import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/services')({
  head: () => pageHead('services', 'en'),
  
  component: () => <PublicPage page="services" lang="en" />,
});
