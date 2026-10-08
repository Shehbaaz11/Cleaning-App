import { c, type Lang } from '@/lib/qcc/content';
import { Action } from './link';
import { Shell, useLang } from './shell';
export function QccNotFound(){const lang:Lang=useLang();return <Shell><section className="not-found"><div className="container"><div className="eyebrow">QCC / 404</div><h1>404</h1><h2>{c('This page could not be found.','لم يتم العثور على هذه الصفحة.')[lang]}</h2><p className="body-copy">{c('Return to the homepage or explore our services.','ارجع إلى الصفحة الرئيسية أو استكشف خدماتنا.')[lang]}</p><Action page="home" lang={lang}>{c('Back to home','العودة إلى الرئيسية')[lang]}</Action></div></section></Shell>}
