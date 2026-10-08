import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { z } from 'zod';
import { c } from './content';
import { photos } from './photos';
const schema = z.object({ id:z.string().max(100), kind:z.enum(['projects','gallery','news','careers']), title:z.object({en:z.string().max(160),ar:z.string().max(160)}), body:z.object({en:z.string().max(2000),ar:z.string().max(2000)}), published:z.boolean(), order:z.number().int().min(0).max(999), image:z.string().max(1000), category:z.enum(['people','operations','pest']), provenance:z.enum(['pending','archive','illustrative']) });
export type Entry = z.infer<typeof schema>;
export const initialEntries:Entry[] = photos.map((photo,i)=>({id:`archive-${i}`,kind:'gallery',title:photo.title,body:c('Historical company image from the existing QCC website.','صورة تاريخية للشركة من موقع QCC الحالي.'),published:true,order:i,image:photo.image,category:photo.category,provenance:'archive'}));
const Context=createContext<{entries:Entry[];save:(e:Entry[])=>boolean;reset:()=>void}>({entries:initialEntries,save:()=>false,reset:()=>{}});
export function ContentProvider({children}:{children:ReactNode}){
 const [entries,setEntries]=useState(initialEntries);
 useEffect(()=>{try{const saved=localStorage.getItem('qcc-editor-v1');if(saved){const result=z.array(schema).max(100).safeParse(JSON.parse(saved));if(result.success)setEntries(result.data);}}catch{/* Invalid or unavailable device storage leaves safe defaults. */}},[]);
 const save=(value:Entry[])=>{const result=z.array(schema).max(100).safeParse(value);if(!result.success)return false;try{localStorage.setItem('qcc-editor-v1',JSON.stringify(result.data));setEntries(result.data);return true;}catch{return false;}};
 return <Context.Provider value={{entries,save,reset:()=>save(initialEntries)}}>{children}</Context.Provider>;
}
export const useContent=()=>useContext(Context);
