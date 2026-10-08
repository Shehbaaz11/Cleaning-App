import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/qcc/pages';
import { pageHead } from '@/lib/qcc/content';
export const Route = createFileRoute('/ar/request-a-quote')({
  head: () => pageHead('quote', 'ar'),
  validateSearch: (search: Record<string, unknown>) => ({ service: typeof search['service'] === "string" && ["cleaning", "support", "pest", "security"].includes(search['service']) ? search['service'] : undefined }),
  component: () => <PublicPage page="quote" lang="ar" />,
});
