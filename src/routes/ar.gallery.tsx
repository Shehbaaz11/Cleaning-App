import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/gallery')({
  head: () => pageHead('gallery', 'ar'),
  
  component: () => <PublicPage page="gallery" lang="ar" />,
});
