import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/projects')({
  head: () => pageHead('projects', 'ar'),
  
  component: () => <PublicPage page="projects" lang="ar" />,
});
