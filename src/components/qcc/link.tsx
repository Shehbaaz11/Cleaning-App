import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { pathFor, type Lang, type PageKey } from '@/lib/qcc/content';
export function PageLink({page,lang,children,className='',service}:{page:PageKey;lang:Lang;children:React.ReactNode;className?:string;service?:string | undefined}){return <Link to={pathFor(page,lang)} search={service?{service}:{}} className={className}>{children}</Link>}
export function Action({page='quote',lang,children,secondary=false,service}:{page?:PageKey;lang:Lang;children:React.ReactNode;secondary?:boolean;service?:string | undefined}){if(page==='quote')return <Button onClick={()=>window.dispatchEvent(new CustomEvent('qcc-quote',{detail:service}))} variant={secondary?'outline':'default'} size="lg" className="qcc-action">{children}<ArrowUpRight className="directional"/></Button>;return <Button asChild variant={secondary?'outline':'default'} size="lg" className="qcc-action"><PageLink page={page} lang={lang} service={service}>{children}<ArrowUpRight className="directional"/></PageLink></Button>}
