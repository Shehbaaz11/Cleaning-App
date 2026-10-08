import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/projects')({
  head: () => pageHead('projects', 'en'),
  
  component: () => <PublicPage page="projects" lang="en" />,
});
