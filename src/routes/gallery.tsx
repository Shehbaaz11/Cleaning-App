import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/gallery')({
  head: () => pageHead('gallery', 'en'),
  
  component: () => <PublicPage page="gallery" lang="en" />,
});
