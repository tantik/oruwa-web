import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SitePage } from '../../components/SitePage';
import { publicRoutes } from '../../lib/site-config';

const titleMap:Record<string,string>={products:'製品',cafe:'ORUWA Cafe',pricing:'料金',security:'セキュリティ',about:'ORUWAについて',contact:'導入相談',login:'ログイン',privacy:'プライバシーポリシー',terms:'利用規約','commercial-disclosure':'特定商取引法に基づく表記'};
export const dynamicParams = false;
export function generateStaticParams(){ return publicRoutes.filter(x=>x!=='/').map(x=>({slug:x.slice(1).split('/')})); }
export async function generateMetadata({params}:{params:Promise<{slug:string[]}>}):Promise<Metadata>{ const {slug}=await params; const en=slug[0]==='en'; const key=en?(slug[1]||'home'):slug[0]; const path=`/${slug.join('/')}`; const alternate=en?(key==='home'?'/':`/${key}`):(key==='home'?'/en':`/en/${key}`); const title=key==='home'?(en?'ORUWA | Business Operations Platform':'ORUWA | 店舗運営を、ひとつの流れに。'):`${titleMap[key]||key} | ORUWA`; const description=en?'A business operations platform for small businesses in Japan.':'日本の小規模事業者向け業務運営プラットフォーム。'; return {title,description,alternates:{canonical:path,languages:{'ja-JP':en?alternate:path,'en':en?path:alternate,'x-default':en?alternate:path}},openGraph:{title,description,url:path,siteName:'ORUWA',locale:en?'en_US':'ja_JP',type:'website',images:[{url:'/og.png',width:1200,height:630,alt:'ORUWA Business Operations Platform'}]},twitter:{card:'summary_large_image',title,description,images:['/og.png']}}; }
export default async function RoutePage({params}:{params:Promise<{slug:string[]}>}){ const {slug}=await params; const path=`/${slug.join('/')}`; if(!(publicRoutes as readonly string[]).includes(path)) notFound(); return <SitePage path={path}/>; }
