import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/quality-safety')({
  head: () => pageHead('quality', 'ar'),
  
  component: () => <PublicPage page="quality" lang="ar" />,
});
