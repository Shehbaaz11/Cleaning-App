import { createFileRoute } from '@tanstack/react-router';
import { DemoAdmin } from '@/components/qcc/admin';
export const Route = createFileRoute('/demo-admin')({
 head: () => ({meta:[{title:'QCC — Device-local content sandbox'},{name:'description',content:'QCC bilingual editorial demonstration. No production authentication.'},{property:'og:title',content:'QCC content sandbox'},{property:'og:description',content:'Device-local editorial demonstration.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'},{name:'robots',content:'noindex, nofollow'}]}),
 component: DemoAdmin,
});
